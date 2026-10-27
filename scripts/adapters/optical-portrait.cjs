// Keep the pinned source intact. Fit its original viewing pose into a narrow
// viewport by adjusting projection, rather than moving the camera through walls.
const fs = require('fs');
const wrapper = `
export function localViewPose(mode: ViewMode, vp: ViewportSpec): LocalPose {
  if (vp.width > 720) return nativeLocalViewPose(mode, vp);
  const reference = { width: 1440, height: 900, insetRight: 392, insetBottom: 0 };
  const pose = nativeLocalViewPose(mode, reference);
  const scale = Math.min(
    Math.max(1, vp.width - vp.insetRight) / (reference.width - reference.insetRight),
    Math.max(1, vp.height - vp.insetBottom) / reference.height,
  );
  const focal = focalFromFov(pose.fov, reference.height) * scale;
  const fov = 2 * Math.atan((vp.height + vp.insetBottom) / (2 * focal)) * 180 / Math.PI;
  return { ...pose, fov };
}
`;
module.exports = {
  name: 'original-optical-portrait-projection',
  setup(build) {
    build.onLoad({ filter: /[\\/]exhibits[\\/]viewPose\.ts$/ }, args => {
      const source = fs.readFileSync(args.path, 'utf8');
      const marker = 'export function localViewPose(';
      if (!source.includes(marker)) throw Error('Pinned viewPose changed; review portrait adapter');
      return { contents: source.replace(marker, 'function nativeLocalViewPose(') + wrapper, loader: 'ts' };
    });
  },
};
