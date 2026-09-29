"""Regenerate the 15 original soundtrack sketches for the video demos.

No sampled music, stock effects, voices, or network services are used. This
optional script needs Python, NumPy and ffmpeg; the gallery loads its .js output.
"""

from __future__ import annotations

import math
import base64
import subprocess
import tempfile
import wave
from pathlib import Path

import numpy as np


RATE = 32_000
OUT = Path(__file__).resolve().parent.parent / "src" / "fusion" / "audio"

# duration, tempo, root MIDI note, palette, seed
DESIGNS = {
    "v01-showreel": (15, 112, 50, "editorial", 101),
    "v02-app-launch": (15, 118, 53, "optimistic", 102),
    "v03-high-end-product": (16, 120, 45, "luxury", 103),
    "v04-business-explainer": (20, 96, 50, "editorial", 104),
    "v05-transformer": (20, 92, 45, "science", 105),
    "v06-sky-blue": (20, 82, 53, "warm", 106),
    "v07-ui-morph": (14, 108, 48, "morph", 107),
    "v08-kinetic-type": (20, 110, 46, "kinetic", 108),
    "v09-room-to-quarks": (16, 76, 43, "cosmic", 109),
    "v10-map-route": (12, 102, 50, "travel", 110),
    "v12-rain-station": (24, 68, 48, "rain", 112),
    "v14-lab-explainer": (24, 88, 50, "science", 114),
    "v16-bedtime-opener": (15, 64, 53, "bedtime", 116),
    "v18-noise-cancelling": (20, 86, 45, "quiet", 118),
    "v19-water-cycle": (16, 80, 50, "water", 119),
}


def hz(midi: float) -> float:
    return 440 * 2 ** ((midi - 69) / 12)


def add(buf: np.ndarray, start: float, sound: np.ndarray, pan: float = 0.0) -> None:
    i = max(0, round(start * RATE))
    if i >= len(buf):
        return
    sound = sound[: len(buf) - i]
    # Constant-power stereo positioning.
    angle = (max(-1, min(1, pan)) + 1) * math.pi / 4
    buf[i : i + len(sound), 0] += sound * math.cos(angle)
    buf[i : i + len(sound), 1] += sound * math.sin(angle)


def bell(buf: np.ndarray, start: float, note: float, gain: float, length: float = 1.8, pan: float = 0.0) -> None:
    t = np.arange(round(length * RATE), dtype=np.float32) / RATE
    f = hz(note)
    tone = (np.sin(2 * np.pi * f * t) + .24 * np.sin(2 * np.pi * f * 2.002 * t)
            + .09 * np.sin(2 * np.pi * f * 3.99 * t))
    env = (1 - np.exp(-t * 140)) * np.exp(-t * 2.6 / length)
    add(buf, start, (gain * tone * env).astype(np.float32), pan)


def pluck(buf: np.ndarray, start: float, note: float, gain: float, length: float = .8, pan: float = 0.0) -> None:
    t = np.arange(round(length * RATE), dtype=np.float32) / RATE
    f = hz(note)
    tone = np.sin(2 * np.pi * f * t) + .16 * np.sin(2 * np.pi * 2 * f * t)
    env = (1 - np.exp(-t * 110)) * np.exp(-t * 5 / length)
    add(buf, start, (gain * tone * env).astype(np.float32), pan)


def kick(buf: np.ndarray, start: float, gain: float) -> None:
    t = np.arange(round(.42 * RATE), dtype=np.float32) / RATE
    phase = 2 * np.pi * (51 * t + 35 * (1 - np.exp(-t * 28)) / 28)
    sound = gain * np.sin(phase) * (1 - np.exp(-t * 90)) * np.exp(-t * 16)
    add(buf, start, sound.astype(np.float32))


def tick(buf: np.ndarray, start: float, gain: float, rng: np.random.Generator, pan: float = 0.0) -> None:
    n = round(.12 * RATE)
    t = np.arange(n, dtype=np.float32) / RATE
    noise = rng.standard_normal(n).astype(np.float32)
    # Differencing emphasizes the light, high-frequency edge.
    noise = noise - np.r_[0, noise[:-1]]
    sound = gain * noise * np.exp(-t * 55)
    add(buf, start, sound, pan)


def sweep(buf: np.ndarray, start: float, length: float, gain: float, rng: np.random.Generator, downward: bool = False) -> None:
    n = round(length * RATE)
    t = np.arange(n, dtype=np.float32) / RATE
    noise = rng.standard_normal(n).astype(np.float32)
    kernel = np.ones(36, dtype=np.float32) / 36
    smooth = np.convolve(noise, kernel, mode="same")
    phase = t / length
    env = np.sin(np.pi * phase) ** 2
    freq = 1000 - 850 * phase if downward else 150 + 850 * phase
    tone = np.sin(2 * np.pi * (150 * t + (850 if not downward else -850) * t * t / (2 * length)))
    sound = gain * env * (smooth * .65 + tone * .35)
    add(buf, start, sound.astype(np.float32), -0.28 if downward else 0.28)


def pad(buf: np.ndarray, notes: list[float], gain: float, length: float, phase: float = 0.0) -> None:
    t = np.arange(len(buf), dtype=np.float32) / RATE
    fade = np.minimum(1, t / 1.2) * np.minimum(1, (length - t) / 1.2)
    breath = .78 + .22 * np.sin(2 * np.pi * t / 5 + phase)
    for index, note in enumerate(notes):
        f = hz(note)
        wavelet = np.sin(2 * np.pi * f * t + phase + index * .6)
        wavelet += .22 * np.sin(2 * np.pi * f * 2.003 * t + index)
        wavelet += .16 * np.sin(2 * np.pi * f * .501 * t + index * 2)
        channel = index % 2
        buf[:, channel] += (gain / len(notes) * wavelet * fade * breath).astype(np.float32)
        buf[:, 1 - channel] += (gain / len(notes) * .33 * wavelet * fade * breath).astype(np.float32)


def texture(buf: np.ndarray, gain: float, rng: np.random.Generator, kind: str) -> None:
    n = len(buf)
    noise = rng.standard_normal(n).astype(np.float32)
    size = 160 if kind == "rain" else 450
    kernel = np.ones(size, dtype=np.float32) / size
    low = np.convolve(noise, kernel, mode="same")
    t = np.arange(n, dtype=np.float32) / RATE
    swell = .6 + .4 * np.sin(2 * np.pi * t / (7 if kind == "rain" else 5)) ** 2
    edge = np.minimum(1, t / .8) * np.minimum(1, (n / RATE - t) / .8)
    if kind == "rain":
        sound = (noise * .12 + low * 1.5) * swell * edge
    else:
        sound = low * 2.3 * swell * edge
    buf[:, 0] += gain * sound
    buf[:, 1] += gain * np.roll(sound, 220)


def render(name: str, design: tuple) -> np.ndarray:
    duration, bpm, root, palette, seed = design
    rng = np.random.default_rng(seed)
    buf = np.zeros((duration * RATE, 2), dtype=np.float32)
    beat = 60 / bpm

    if palette in {"rain", "water", "quiet", "cosmic", "bedtime"}:
        pad(buf, [root, root + 7, root + 14], .12 if palette == "bedtime" else .16, duration, seed / 20)
    elif palette == "luxury":
        pad(buf, [root, root + 7, root + 12], .11, duration, .3)
    else:
        pad(buf, [root, root + 7, root + 11], .08, duration, seed / 20)

    if palette == "rain":
        texture(buf, .22, rng, "rain")
        for j, moment in enumerate(np.arange(1.3, duration - .4, beat * 2)):
            bell(buf, float(moment), root + [12, 14, 19, 16][j % 4], .035, 2.4, (-1) ** j * .45)
        for moment in [5.7, 12.2, 18.5]:
            sweep(buf, moment, 2.2, .08, rng, True)
    elif palette == "water":
        texture(buf, .18, rng, "water")
        for j, moment in enumerate(np.arange(.2, duration - .3, beat)):
            bell(buf, float(moment), root + [12, 19, 16, 24, 19, 14][j % 6], .045, 1.3, math.sin(j) * .55)
    elif palette == "bedtime":
        for j, moment in enumerate(np.arange(.4, duration - .4, beat * 1.5)):
            bell(buf, float(moment), root + [12, 16, 19, 24, 19, 16][j % 6], .065, 2.7, math.sin(j * 2) * .4)
        texture(buf, .08, rng, "water")
    elif palette in {"cosmic", "quiet"}:
        texture(buf, .09, rng, "water")
        for j, moment in enumerate(np.arange(.8, duration - .4, beat * 2)):
            bell(buf, float(moment), root + [12, 19, 26, 21][j % 4], .055, 3, math.sin(j * 1.7) * .65)
        for moment in ([3.6, 7.8, 12.1] if palette == "cosmic" else [5.1, 10.2, 15.4]):
            sweep(buf, moment, 1.6, .06, rng, palette == "quiet")
    else:
        strong = palette in {"luxury", "kinetic", "morph", "optimistic"}
        sequence = [12, 16, 19, 16, 12, 19, 21, 19] if palette != "science" else [12, 19, 14, 21, 12, 19, 16, 14]
        for j, moment in enumerate(np.arange(0, duration - .12, beat)):
            moment = float(moment)
            if strong or j % 2 == 0:
                kick(buf, moment, .12 if palette == "luxury" else .095)
            if j % 2 == 1:
                tick(buf, moment, .014 if strong else .009, rng, .25)
            if strong:
                tick(buf, moment + beat / 2, .008, rng, -.25)
            pluck(buf, moment + (.04 if palette == "kinetic" else .11), root + sequence[j % len(sequence)],
                  .045 if palette in {"luxury", "science"} else .064, .75, math.sin(j) * .5)
            if j % 8 == 7 and palette in {"luxury", "morph", "kinetic"}:
                sweep(buf, max(0, moment - .28), .55, .06, rng)
        if palette == "warm":
            for j, moment in enumerate(np.arange(1, duration - .3, beat * 4)):
                bell(buf, float(moment), root + [12, 16, 19][j % 3], .04, 2.2, -.3 if j % 2 else .3)
        if palette == "travel":
            for moment in [2.9, 5.9, 8.8]:
                sweep(buf, moment, .85, .075, rng)

    # Short fades make pausing, seeking, and looping free of endpoint clicks.
    n = len(buf)
    edge = min(round(.18 * RATE), n // 2)
    buf[:edge] *= np.linspace(0, 1, edge, dtype=np.float32)[:, None]
    buf[-edge:] *= np.linspace(1, 0, edge, dtype=np.float32)[:, None]
    peak = max(float(np.max(np.abs(buf))), .001)
    buf *= .64 / peak
    return buf


def write_mp3(name: str, pcm: np.ndarray) -> None:
    with tempfile.NamedTemporaryFile(suffix=".wav") as temp:
        with wave.open(temp.name, "wb") as wav:
            wav.setnchannels(2)
            wav.setsampwidth(2)
            wav.setframerate(RATE)
            wav.writeframes((np.clip(pcm, -1, 1) * 32767).astype("<i2").tobytes())
        subprocess.run([
            "ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-i", temp.name,
            "-codec:a", "libmp3lame", "-q:a", "5", str(OUT / f"{name}.mp3"),
        ], check=True)
    encoded = base64.b64encode((OUT / f"{name}.mp3").read_bytes()).decode("ascii")
    (OUT / f"{name}.js").write_text(
        'window.OPUS_AUDIO_TRACKS=window.OPUS_AUDIO_TRACKS||{};'
        f'window.OPUS_AUDIO_TRACKS["{name}"]="data:audio/mpeg;base64,{encoded}";\n',
        encoding="ascii",
    )


if __name__ == "__main__":
    for name, design in DESIGNS.items():
        write_mp3(name, render(name, design))
        print(name, design[0], "s", (OUT / f"{name}.mp3").stat().st_size, "bytes")
