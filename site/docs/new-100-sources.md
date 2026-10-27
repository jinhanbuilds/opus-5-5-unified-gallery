# 新增 100 条：来源与接入核验

日期：2026-10-27。范围：完整本地版与经体积控制的妙搭版。新增 100 个独立条目；原有 118 个主题 / 122 个版本保持。

## 来源配比

| 来源项目 | 新增条目 | 备用条目 | 固定版本 / 内容指纹 |
| --- | ---: | --- | --- |
| [LemoLab](https://github.com/lemomo-ai/lemo-opuscar) | 15 | silkscreen-poster | 3961ddb3d24d8876e0e2754f7790d66908acee51 |
| [Vincentwei1021](https://github.com/Vincentwei1021/mg-styles-15) | 13 | 18-hanazi | 49052d80bfaf9fa8412cc9710530e5e95a3b8d8c |
| [OpenVGLab](https://github.com/OpenVGLab/awesome-opus5.5-frontend-showcases) | 15 | mole-rush | cac43b250f07b7b86f4709c61effc84269f46494 |
| [Avi Levi](https://www.avilevi.co.il/en/blog/opus-5-5-motion-graphics-prompts/) | 15 | fractal | sha256:5e821f7387cbbd9b72270bb98ad9b9e44bf8a0b35180e5117282de195bed8566 |
| [swan4er](https://github.com/swan4er/opus-100-projects) | 14 | 070-complex-atlas | 6c98846c00d667b8958c4c777025025a57fda0e9 |
| [ThreeJSEval · Claude Opus 5.5 High 提交](https://threejseval.com/models/claude-opus-5-5-high) | 14 | grass | sha256:38d4ff19bf6eda8991dbedfc8de4629e446b17b5170d7f5ba452dfd15170b124 |
| [Maoku](https://github.com/Maoku/Opus55OpticalIllusion) | 14 | welcome-anamorphosis | 0e5db5723b44c4f1d119df88c21900a8da2da330 |

7 个独立来源，最多 15 条、最少 13 条，差值 2。每个来源保留 1 个备用，备用不计入新增 100。当前运行验收以 [最终验收记录](new-100-review.md) 为准。

## 独立作品与原作边界

- Lemo：每条有独立 demo、STYLE.md、DEMO.md 与影片；各风格影片计一条，内部镜头不拆分。
- MG：每条有独立原作目录、提示词与十秒影片。依赖离线 Blender 帧的 04-3d-render 不收录。
- OpenVGLab：只选仓库原创 SVG / Lottie 作品；复刻区、转载、同一鹈鹕的样式变体不加入计数。
- Avi Levi：按作者 CLIPS / PROMPTS 已定义的独立展示 ID 选择 15 项。共享运行核心不重复制造新作品；没有把叙事片的镜头拆开计数。
- Swan：每条是独立项目目录。排除需要远端 AI 服务和实时 API 才成立的作品。
- ThreeJSEval：每个评测场景只选一个 Claude Opus 5.5 High 提交：小渡轮使用 r2，其余 13 项为 r1；其他模型、难度、轮次不重复计数。
- Optical：按原作 14 个独立展项与稳定 exhibit ID 计数；共享博物馆应用，展项有独立机制与规格。
- 去重按作者、原始项目、作品 ID 和源码关系判断。相同美术风格不等于同一作品；镜像和转载没有新增计数。

## 接入方式

- 新条目的唯一编辑数据是 `data/new-cases.json`。运行原件及其依赖在 `sources/new-originals/`，旧两个子模块未修改。
- `scripts/build_new_originals.cjs` 做 ESM 打包、资源路径适配、SVG 容器脚本适配和时间线桥接；画面与原生交互使用原作实现。Optical 在宽度不超过 720px 的嵌入窗口中保留原作者的室内观察位置，并按可用视口调整视野角，避免相机落到展墙外；原始 `viewPose.ts` 保留不动，适配器位于 `scripts/adapters/optical-portrait.cjs`。
- 43 个视频型效果保留原作音轨：Lemo / MG 从作者影片无重编码提取 AAC；Avi 保留原 Web Audio 乐谱及其时间相位。Swan 两部影片保留原播放器和原音乐。
- 字体按原作声明的名称、字重和字符集补齐。字体未由源仓库附带二进制时，无法核对作者当时的精确文件 SHA。MG 的 Resource Han Rounded 使用作者上游 v0.990 SC 字体对应源码的 CN 路径；若进行逐像素复现，仍需原作者字体快照。
- Unbounded / Outfit / Fraunces 的静态实例由对应原字体可变轴生成；运行时 CSS 字体另作完整字符集 WOFF2 封装，不裁剪字形或改变可变轴；原始字体、来源、转换后 hash、字形顺序、Unicode 字符映射与字宽核验保存在 `derived-fonts/manifest.json`。
- 渡轮使用原站 attachHostJoystick、readJoystick 与原 CSS，保留键盘与触控输入。
- 所有预览资源固定到本地；浏览器测试不使用关闭安全策略的启动参数。

## 提示词与时间依据

作者公开文本分为原文、公开配方和创作简报。中文模板明确标为编辑整理。作者未公开的生成对话、逐条发布日期与精确字体版本不被补写成事实。ThreeJSEval API 的 1970 占位日期不作为发布日期；Avi 的 2026-09-30 是说明文章日期，不作为每个展示单元的日期。

模型归因来自作者说明、平台提交字段与源码元数据，不声称已经独立审计全部模型运行日志。每条的定位、版本、代码链接与依据见完整拆解的“溯源”。

## 许可与资源

Lemo 代码 / 文档为 MIT、演示影片 / 静帧为 CC BY 4.0；MG、OpenVGLab、Optical 按各自仓库许可，第三方资源另循自身许可。Avi、Swan、ThreeJSEval 未找到统一的源码再分发许可，完整源码只保留在本地版；妙搭版使用原作截图和来源链接。其他项目按实际压缩体积选择代码或截图。妙搭最终配比、发布状态与包大小见 [妙搭更新说明](miaoda-update.md)。GitHub 同步工程代码、说明与同一公开静态版；完整本地原件继续留在本机。

`sources/new-originals/` 内保留根 LICENSE、字体许可、npm 版本、资源 URL、音轨 hash 与提取记录；`source-inventory.json` 可核对这次保存的文件快照。

## 排除与替换

| 候选 | 处置依据 |
| --- | --- |
| Lemo brick-toy / paper-popup | 依赖未随原件提供的模型 / 纹理；不补画替代，主选换为 ukiyoe |
| Lemo archive-lighttable | 关键图版缺失，排除 |
| MG 04-3d-render | 缺少 Blender 输出帧，原网页无法独立播放，排除 |
| Avi reaction | 本地实际抽帧只有背景；保持原源码，换成 particles；备用为 fractal |
| Huashu 艺术史风格段 | 属于一个叙事影片的章节，不拆成多条；后加作品的逐项模型归因不足 |
| lumian / opusclip / 纯提示词站 | 复刻、视频 / Remotion 工程或没有可直接嵌入原网页，不计入本次供给 |

## 可执行主清单

| ID | 作品 | 来源 | 公开文本类型 | 原作 / 提示词 |
| --- | --- | --- | --- | --- |
| n001 | 午夜饭店的装饰艺术短片 | LemoLab | 公开配方 | [原件](https://github.com/lemomo-ai/lemo-opuscar/blob/3961ddb3d24d8876e0e2754f7790d66908acee51/styles/art-deco/demo/index.html) · [文本](https://github.com/lemomo-ai/lemo-opuscar/blob/3961ddb3d24d8876e0e2754f7790d66908acee51/styles/art-deco/STYLE.md) |
| n002 | 字符终端里的世界 | LemoLab | 公开配方 | [原件](https://github.com/lemomo-ai/lemo-opuscar/blob/3961ddb3d24d8876e0e2754f7790d66908acee51/styles/ascii-crt/demo/index.html) · [文本](https://github.com/lemomo-ai/lemo-opuscar/blob/3961ddb3d24d8876e0e2754f7790d66908acee51/styles/ascii-crt/STYLE.md) |
| n003 | 蓝图捕云机 | LemoLab | 公开配方 | [原件](https://github.com/lemomo-ai/lemo-opuscar/blob/3961ddb3d24d8876e0e2754f7790d66908acee51/styles/blueprint/demo/index.html) · [文本](https://github.com/lemomo-ai/lemo-opuscar/blob/3961ddb3d24d8876e0e2754f7790d66908acee51/styles/blueprint/STYLE.md) |
| n004 | 浮世绘卷轴 | LemoLab | 公开配方 | [原件](https://github.com/lemomo-ai/lemo-opuscar/blob/3961ddb3d24d8876e0e2754f7790d66908acee51/styles/ukiyoe/demo/index.html) · [文本](https://github.com/lemomo-ai/lemo-opuscar/blob/3961ddb3d24d8876e0e2754f7790d66908acee51/styles/ukiyoe/STYLE.md) |
| n005 | 八十年代赛璐璐夜行 | LemoLab | 公开配方 | [原件](https://github.com/lemomo-ai/lemo-opuscar/blob/3961ddb3d24d8876e0e2754f7790d66908acee51/styles/cel-anime-80s/demo/index.html) · [文本](https://github.com/lemomo-ai/lemo-opuscar/blob/3961ddb3d24d8876e0e2754f7790d66908acee51/styles/cel-anime-80s/STYLE.md) |
| n006 | 蜡笔月亮绘本 | LemoLab | 公开配方 | [原件](https://github.com/lemomo-ai/lemo-opuscar/blob/3961ddb3d24d8876e0e2754f7790d66908acee51/styles/crayon-book/demo/index.html) · [文本](https://github.com/lemomo-ai/lemo-opuscar/blob/3961ddb3d24d8876e0e2754f7790d66908acee51/styles/crayon-book/STYLE.md) |
| n007 | 海报变成一张乐谱 | LemoLab | 公开配方 | [原件](https://github.com/lemomo-ai/lemo-opuscar/blob/3961ddb3d24d8876e0e2754f7790d66908acee51/styles/swiss-motion/demo/index.html) · [文本](https://github.com/lemomo-ai/lemo-opuscar/blob/3961ddb3d24d8876e0e2754f7790d66908acee51/styles/swiss-motion/STYLE.md) |
| n008 | 水墨山水与行笔 | LemoLab | 公开配方 | [原件](https://github.com/lemomo-ai/lemo-opuscar/blob/3961ddb3d24d8876e0e2754f7790d66908acee51/styles/ink-wash/demo/index.html) · [文本](https://github.com/lemomo-ai/lemo-opuscar/blob/3961ddb3d24d8876e0e2754f7790d66908acee51/styles/ink-wash/STYLE.md) |
| n009 | 一根线讲完一个故事 | LemoLab | 公开配方 | [原件](https://github.com/lemomo-ai/lemo-opuscar/blob/3961ddb3d24d8876e0e2754f7790d66908acee51/styles/one-line/demo/index.html) · [文本](https://github.com/lemomo-ai/lemo-opuscar/blob/3961ddb3d24d8876e0e2754f7790d66908acee51/styles/one-line/STYLE.md) |
| n010 | 红剪纸夜游 | LemoLab | 公开配方 | [原件](https://github.com/lemomo-ai/lemo-opuscar/blob/3961ddb3d24d8876e0e2754f7790d66908acee51/styles/papercut-red/demo/index.html) · [文本](https://github.com/lemomo-ai/lemo-opuscar/blob/3961ddb3d24d8876e0e2754f7790d66908acee51/styles/papercut-red/STYLE.md) |
| n011 | 像素 RPG 存档人生 | LemoLab | 公开配方 | [原件](https://github.com/lemomo-ai/lemo-opuscar/blob/3961ddb3d24d8876e0e2754f7790d66908acee51/styles/pixel-rpg/demo/index.html) · [文本](https://github.com/lemomo-ai/lemo-opuscar/blob/3961ddb3d24d8876e0e2754f7790d66908acee51/styles/pixel-rpg/STYLE.md) |
| n012 | 孔版印刷骑行日记 | LemoLab | 公开配方 | [原件](https://github.com/lemomo-ai/lemo-opuscar/blob/3961ddb3d24d8876e0e2754f7790d66908acee51/styles/risograph/demo/index.html) · [文本](https://github.com/lemomo-ai/lemo-opuscar/blob/3961ddb3d24d8876e0e2754f7790d66908acee51/styles/risograph/STYLE.md) |
| n013 | 彩色玻璃里的光 | LemoLab | 公开配方 | [原件](https://github.com/lemomo-ai/lemo-opuscar/blob/3961ddb3d24d8876e0e2754f7790d66908acee51/styles/stained-glass/demo/index.html) · [文本](https://github.com/lemomo-ai/lemo-opuscar/blob/3961ddb3d24d8876e0e2754f7790d66908acee51/styles/stained-glass/STYLE.md) |
| n014 | 橡皮管厨房爵士 | LemoLab | 公开配方 | [原件](https://github.com/lemomo-ai/lemo-opuscar/blob/3961ddb3d24d8876e0e2754f7790d66908acee51/styles/rubber-hose/demo/index.html) · [文本](https://github.com/lemomo-ai/lemo-opuscar/blob/3961ddb3d24d8876e0e2754f7790d66908acee51/styles/rubber-hose/STYLE.md) |
| n015 | 中古卡通操作手册 | LemoLab | 公开配方 | [原件](https://github.com/lemomo-ai/lemo-opuscar/blob/3961ddb3d24d8876e0e2754f7790d66908acee51/styles/midcentury-toon/demo/index.html) · [文本](https://github.com/lemomo-ai/lemo-opuscar/blob/3961ddb3d24d8876e0e2754f7790d66908acee51/styles/midcentury-toon/STYLE.md) |
| n016 | 一个点的品牌旅程 | Vincentwei1021 | 原文 | [原件](https://github.com/Vincentwei1021/mg-styles-15/blob/49052d80bfaf9fa8412cc9710530e5e95a3b8d8c/demos/01-flat-vector/index.html) · [文本](https://github.com/Vincentwei1021/mg-styles-15/blob/49052d80bfaf9fa8412cc9710530e5e95a3b8d8c/prompts/01-flat-vector.md) |
| n017 | 一笔画出城市 | Vincentwei1021 | 原文 | [原件](https://github.com/Vincentwei1021/mg-styles-15/blob/49052d80bfaf9fa8412cc9710530e5e95a3b8d8c/demos/02-line-art/index.html) · [文本](https://github.com/Vincentwei1021/mg-styles-15/blob/49052d80bfaf9fa8412cc9710530e5e95a3b8d8c/prompts/02-line-art.md) |
| n018 | 等轴城市自己生长 | Vincentwei1021 | 原文 | [原件](https://github.com/Vincentwei1021/mg-styles-15/blob/49052d80bfaf9fa8412cc9710530e5e95a3b8d8c/demos/03-isometric/index.html) · [文本](https://github.com/Vincentwei1021/mg-styles-15/blob/49052d80bfaf9fa8412cc9710530e5e95a3b8d8c/prompts/03-isometric.md) |
| n019 | 手作线条沸腾 | Vincentwei1021 | 原文 | [原件](https://github.com/Vincentwei1021/mg-styles-15/blob/49052d80bfaf9fa8412cc9710530e5e95a3b8d8c/demos/05-cel-boil/index.html) · [文本](https://github.com/Vincentwei1021/mg-styles-15/blob/49052d80bfaf9fa8412cc9710530e5e95a3b8d8c/prompts/05-cel-boil.md) |
| n020 | 脑洞拼贴季刊 | Vincentwei1021 | 原文 | [原件](https://github.com/Vincentwei1021/mg-styles-15/blob/49052d80bfaf9fa8412cc9710530e5e95a3b8d8c/demos/06-collage/index.html) · [文本](https://github.com/Vincentwei1021/mg-styles-15/blob/49052d80bfaf9fa8412cc9710530e5e95a3b8d8c/prompts/06-collage.md) |
| n021 | 万物始于一滴 | Vincentwei1021 | 原文 | [原件](https://github.com/Vincentwei1021/mg-styles-15/blob/49052d80bfaf9fa8412cc9710530e5e95a3b8d8c/demos/07-liquid/index.html) · [文本](https://github.com/Vincentwei1021/mg-styles-15/blob/49052d80bfaf9fa8412cc9710530e5e95a3b8d8c/prompts/07-liquid.md) |
| n022 | 一形万象 | Vincentwei1021 | 原文 | [原件](https://github.com/Vincentwei1021/mg-styles-15/blob/49052d80bfaf9fa8412cc9710530e5e95a3b8d8c/demos/08-morph/index.html) · [文本](https://github.com/Vincentwei1021/mg-styles-15/blob/49052d80bfaf9fa8412cc9710530e5e95a3b8d8c/prompts/08-morph.md) |
| n023 | 包豪斯几何节奏 | Vincentwei1021 | 原文 | [原件](https://github.com/Vincentwei1021/mg-styles-15/blob/49052d80bfaf9fa8412cc9710530e5e95a3b8d8c/demos/09-bauhaus/index.html) · [文本](https://github.com/Vincentwei1021/mg-styles-15/blob/49052d80bfaf9fa8412cc9710530e5e95a3b8d8c/prompts/09-bauhaus.md) |
| n024 | 合成波游戏夜 | Vincentwei1021 | 原文 | [原件](https://github.com/Vincentwei1021/mg-styles-15/blob/49052d80bfaf9fa8412cc9710530e5e95a3b8d8c/demos/10-synthwave/index.html) · [文本](https://github.com/Vincentwei1021/mg-styles-15/blob/49052d80bfaf9fa8412cc9710530e5e95a3b8d8c/prompts/10-synthwave.md) |
| n025 | 极光玻璃界面 | Vincentwei1021 | 原文 | [原件](https://github.com/Vincentwei1021/mg-styles-15/blob/49052d80bfaf9fa8412cc9710530e5e95a3b8d8c/demos/12-aurora-glass/index.html) · [文本](https://github.com/Vincentwei1021/mg-styles-15/blob/49052d80bfaf9fa8412cc9710530e5e95a3b8d8c/prompts/12-aurora-glass.md) |
| n026 | 回形针式产品解释 | Vincentwei1021 | 原文 | [原件](https://github.com/Vincentwei1021/mg-styles-15/blob/49052d80bfaf9fa8412cc9710530e5e95a3b8d8c/demos/19-paperclip/index.html) · [文本](https://github.com/Vincentwei1021/mg-styles-15/blob/49052d80bfaf9fa8412cc9710530e5e95a3b8d8c/prompts/19-paperclip.md) |
| n027 | 像素闯关片头 | Vincentwei1021 | 原文 | [原件](https://github.com/Vincentwei1021/mg-styles-15/blob/49052d80bfaf9fa8412cc9710530e5e95a3b8d8c/demos/20-pixel/index.html) · [文本](https://github.com/Vincentwei1021/mg-styles-15/blob/49052d80bfaf9fa8412cc9710530e5e95a3b8d8c/prompts/20-pixel.md) |
| n028 | 科幻 HUD 锁定 | Vincentwei1021 | 原文 | [原件](https://github.com/Vincentwei1021/mg-styles-15/blob/49052d80bfaf9fa8412cc9710530e5e95a3b8d8c/demos/22-hud/index.html) · [文本](https://github.com/Vincentwei1021/mg-styles-15/blob/49052d80bfaf9fa8412cc9710530e5e95a3b8d8c/prompts/22-hud.md) |
| n029 | 厨房大作战 | OpenVGLab | 原文 | [原件](https://github.com/OpenVGLab/awesome-opus5.5-frontend-showcases/blob/cac43b250f07b7b86f4709c61effc84269f46494/svg/kitchen-rush.svg) · [文本](https://github.com/OpenVGLab/awesome-opus5.5-frontend-showcases/blob/cac43b250f07b7b86f4709c61effc84269f46494/README.md) |
| n030 | 阳光卡丁车 | OpenVGLab | 原文 | [原件](https://github.com/OpenVGLab/awesome-opus5.5-frontend-showcases/blob/cac43b250f07b7b86f4709c61effc84269f46494/svg/sunny-kart.svg) · [文本](https://github.com/OpenVGLab/awesome-opus5.5-frontend-showcases/blob/cac43b250f07b7b86f4709c61effc84269f46494/README.md) |
| n031 | 像素大冒险 | OpenVGLab | 原文 | [原件](https://github.com/OpenVGLab/awesome-opus5.5-frontend-showcases/blob/cac43b250f07b7b86f4709c61effc84269f46494/svg/pixel-quest.svg) · [文本](https://github.com/OpenVGLab/awesome-opus5.5-frontend-showcases/blob/cac43b250f07b7b86f4709c61effc84269f46494/README.md) |
| n032 | 水果刀客 | OpenVGLab | 原文 | [原件](https://github.com/OpenVGLab/awesome-opus5.5-frontend-showcases/blob/cac43b250f07b7b86f4709c61effc84269f46494/svg/fruit-slash.svg) · [文本](https://github.com/OpenVGLab/awesome-opus5.5-frontend-showcases/blob/cac43b250f07b7b86f4709c61effc84269f46494/README.md) |
| n033 | 花园保卫战 | OpenVGLab | 原文 | [原件](https://github.com/OpenVGLab/awesome-opus5.5-frontend-showcases/blob/cac43b250f07b7b86f4709c61effc84269f46494/svg/garden-defense.svg) · [文本](https://github.com/OpenVGLab/awesome-opus5.5-frontend-showcases/blob/cac43b250f07b7b86f4709c61effc84269f46494/README.md) |
| n034 | 泡泡海 | OpenVGLab | 原文 | [原件](https://github.com/OpenVGLab/awesome-opus5.5-frontend-showcases/blob/cac43b250f07b7b86f4709c61effc84269f46494/svg/bubble-reef.svg) · [文本](https://github.com/OpenVGLab/awesome-opus5.5-frontend-showcases/blob/cac43b250f07b7b86f4709c61effc84269f46494/README.md) |
| n035 | 糖果砖块 | OpenVGLab | 原文 | [原件](https://github.com/OpenVGLab/awesome-opus5.5-frontend-showcases/blob/cac43b250f07b7b86f4709c61effc84269f46494/svg/candy-breaker.svg) · [文本](https://github.com/OpenVGLab/awesome-opus5.5-frontend-showcases/blob/cac43b250f07b7b86f4709c61effc84269f46494/README.md) |
| n036 | 漫画星舰 | OpenVGLab | 原文 | [原件](https://github.com/OpenVGLab/awesome-opus5.5-frontend-showcases/blob/cac43b250f07b7b86f4709c61effc84269f46494/svg/comic-starfighter.svg) · [文本](https://github.com/OpenVGLab/awesome-opus5.5-frontend-showcases/blob/cac43b250f07b7b86f4709c61effc84269f46494/README.md) |
| n037 | 灯塔与二十秒日落 | OpenVGLab | 原文 | [原件](https://github.com/OpenVGLab/awesome-opus5.5-frontend-showcases/blob/cac43b250f07b7b86f4709c61effc84269f46494/svg/rolls/svg-anim/lighthouse-sunset.svg) · [文本](https://github.com/OpenVGLab/awesome-opus5.5-frontend-showcases/blob/cac43b250f07b7b86f4709c61effc84269f46494/README.md) |
| n038 | 黄铜怀表轮系 | OpenVGLab | 原文 | [原件](https://github.com/OpenVGLab/awesome-opus5.5-frontend-showcases/blob/cac43b250f07b7b86f4709c61effc84269f46494/svg/rolls/svg-anim/clockwork.svg) · [文本](https://github.com/OpenVGLab/awesome-opus5.5-frontend-showcases/blob/cac43b250f07b7b86f4709c61effc84269f46494/README.md) |
| n039 | 椭圆轨道太阳系 | OpenVGLab | 原文 | [原件](https://github.com/OpenVGLab/awesome-opus5.5-frontend-showcases/blob/cac43b250f07b7b86f4709c61effc84269f46494/svg/rolls/svg-anim/solar-system.svg) · [文本](https://github.com/OpenVGLab/awesome-opus5.5-frontend-showcases/blob/cac43b250f07b7b86f4709c61effc84269f46494/README.md) |
| n040 | 雨夜城市窗景 | OpenVGLab | 原文 | [原件](https://github.com/OpenVGLab/awesome-opus5.5-frontend-showcases/blob/cac43b250f07b7b86f4709c61effc84269f46494/svg/rolls/svg-anim/rainy-city.svg) · [文本](https://github.com/OpenVGLab/awesome-opus5.5-frontend-showcases/blob/cac43b250f07b7b86f4709c61effc84269f46494/README.md) |
| n041 | 从种子到花再到种子 | OpenVGLab | 原文 | [原件](https://github.com/OpenVGLab/awesome-opus5.5-frontend-showcases/blob/cac43b250f07b7b86f4709c61effc84269f46494/svg/rolls/svg-anim/seed-to-bloom.svg) · [文本](https://github.com/OpenVGLab/awesome-opus5.5-frontend-showcases/blob/cac43b250f07b7b86f4709c61effc84269f46494/README.md) |
| n042 | 果冻跳跳 | OpenVGLab | 原文 | [原件](https://github.com/OpenVGLab/awesome-opus5.5-frontend-showcases/blob/cac43b250f07b7b86f4709c61effc84269f46494/lottie-games/jelly-hop/index.html) · [文本](https://github.com/OpenVGLab/awesome-opus5.5-frontend-showcases/blob/cac43b250f07b7b86f4709c61effc84269f46494/lottie-games/jelly-hop/PROMPT.md) |
| n043 | 口袋宠物 | OpenVGLab | 原文 | [原件](https://github.com/OpenVGLab/awesome-opus5.5-frontend-showcases/blob/cac43b250f07b7b86f4709c61effc84269f46494/lottie-games/pocket-pal/index.html) · [文本](https://github.com/OpenVGLab/awesome-opus5.5-frontend-showcases/blob/cac43b250f07b7b86f4709c61effc84269f46494/lottie-games/pocket-pal/PROMPT.md) |
| n044 | 群鸟避让 | Avi Levi | 原文 | [原件](https://www.avilevi.co.il/showreel/index.html?embed=post) · [文本](https://www.avilevi.co.il/en/blog/opus-5-5-motion-graphics-prompts/) |
| n045 | 条纹布料碰撞 | Avi Levi | 原文 | [原件](https://www.avilevi.co.il/showreel/index.html?embed=post) · [文本](https://www.avilevi.co.il/en/blog/opus-5-5-motion-graphics-prompts/) |
| n046 | 绳索悬挂字母 | Avi Levi | 原文 | [原件](https://www.avilevi.co.il/showreel/index.html?embed=post) · [文本](https://www.avilevi.co.il/en/blog/opus-5-5-motion-graphics-prompts/) |
| n047 | 烟雾流场 | Avi Levi | 原文 | [原件](https://www.avilevi.co.il/showreel/index.html?embed=post) · [文本](https://www.avilevi.co.il/en/blog/opus-5-5-motion-graphics-prompts/) |
| n048 | 粒子聚成字形 | Avi Levi | 原文 | [原件](https://www.avilevi.co.il/showreel/index.html?embed=post) · [文本](https://www.avilevi.co.il/en/blog/opus-5-5-motion-graphics-prompts/) |
| n049 | 篝火与余烬 | Avi Levi | 原文 | [原件](https://www.avilevi.co.il/showreel/index.html?embed=post) · [文本](https://www.avilevi.co.il/en/blog/opus-5-5-motion-graphics-prompts/) |
| n050 | 雨幕中的霓虹街区 | Avi Levi | 原文 | [原件](https://www.avilevi.co.il/showreel/index.html?embed=post) · [文本](https://www.avilevi.co.il/en/blog/opus-5-5-motion-graphics-prompts/) |
| n051 | 树枝生长到开花 | Avi Levi | 原文 | [原件](https://www.avilevi.co.il/showreel/index.html?embed=post) · [文本](https://www.avilevi.co.il/en/blog/opus-5-5-motion-graphics-prompts/) |
| n052 | 彩色 Voronoi 镶嵌 | Avi Levi | 原文 | [原件](https://www.avilevi.co.il/showreel/index.html?embed=post) · [文本](https://www.avilevi.co.il/en/blog/opus-5-5-motion-graphics-prompts/) |
| n053 | 迷宫逐步生成 | Avi Levi | 原文 | [原件](https://www.avilevi.co.il/showreel/index.html?embed=post) · [文本](https://www.avilevi.co.il/en/blog/opus-5-5-motion-graphics-prompts/) |
| n054 | 地图路线导航 | Avi Levi | 原文 | [原件](https://www.avilevi.co.il/showreel/index.html?embed=post) · [文本](https://www.avilevi.co.il/en/blog/opus-5-5-motion-graphics-prompts/) |
| n055 | 六边形区域地图 | Avi Levi | 原文 | [原件](https://www.avilevi.co.il/showreel/index.html?embed=post) · [文本](https://www.avilevi.co.il/en/blog/opus-5-5-motion-graphics-prompts/) |
| n056 | 动态条形竞赛 | Avi Levi | 原文 | [原件](https://www.avilevi.co.il/showreel/index.html?embed=post) · [文本](https://www.avilevi.co.il/en/blog/opus-5-5-motion-graphics-prompts/) |
| n057 | 组织结构逐层展开 | Avi Levi | 原文 | [原件](https://www.avilevi.co.il/showreel/index.html?embed=post) · [文本](https://www.avilevi.co.il/en/blog/opus-5-5-motion-graphics-prompts/) |
| n058 | 笔锋写出 hello | Avi Levi | 原文 | [原件](https://www.avilevi.co.il/showreel/index.html?embed=post) · [文本](https://www.avilevi.co.il/en/blog/opus-5-5-motion-graphics-prompts/) |
| n059 | GPS 怎样从时间得到位置 | swan4er | 创作简报 | [原件](https://github.com/swan4er/opus-100-projects/blob/6c98846c00d667b8958c4c777025025a57fda0e9/016-gps-explained/index.html) · [文本](https://github.com/swan4er/opus-100-projects/blob/6c98846c00d667b8958c4c777025025a57fda0e9/IDEAS.md) |
| n060 | 十七种平面花纹 | swan4er | 创作简报 | [原件](https://github.com/swan4er/opus-100-projects/blob/6c98846c00d667b8958c4c777025025a57fda0e9/030-wallpaper-groups/index.html) · [文本](https://github.com/swan4er/opus-100-projects/blob/6c98846c00d667b8958c4c777025025a57fda0e9/IDEAS.md) |
| n061 | JPEG 的内部解剖 | swan4er | 创作简报 | [原件](https://github.com/swan4er/opus-100-projects/blob/6c98846c00d667b8958c4c777025025a57fda0e9/040-jpeg-anatomy/index.html) · [文本](https://github.com/swan4er/opus-100-projects/blob/6c98846c00d667b8958c4c777025025a57fda0e9/IDEAS.md) |
| n062 | 机翼升力风洞 | swan4er | 创作简报 | [原件](https://github.com/swan4er/opus-100-projects/blob/6c98846c00d667b8958c4c777025025a57fda0e9/053-airfoil-lift/index.html) · [文本](https://github.com/swan4er/opus-100-projects/blob/6c98846c00d667b8958c4c777025025a57fda0e9/IDEAS.md) |
| n063 | 细胞里的分子风景 | swan4er | 创作简报 | [原件](https://github.com/swan4er/opus-100-projects/blob/6c98846c00d667b8958c4c777025025a57fda0e9/068-molecular-landscape/index.html) · [文本](https://github.com/swan4er/opus-100-projects/blob/6c98846c00d667b8958c4c777025025a57fda0e9/IDEAS.md) |
| n064 | 语言模型如何切分文字 | swan4er | 创作简报 | [原件](https://github.com/swan4er/opus-100-projects/blob/6c98846c00d667b8958c4c777025025a57fda0e9/090-how-llm-reads/index.html) · [文本](https://github.com/swan4er/opus-100-projects/blob/6c98846c00d667b8958c4c777025025a57fda0e9/IDEAS.md) |
| n065 | Git 对象与分支图 | swan4er | 创作简报 | [原件](https://github.com/swan4er/opus-100-projects/blob/6c98846c00d667b8958c4c777025025a57fda0e9/091-git-internals/index.html) · [文本](https://github.com/swan4er/opus-100-projects/blob/6c98846c00d667b8958c4c777025025a57fda0e9/IDEAS.md) |
| n066 | 镜头里的焦距与光圈 | swan4er | 创作简报 | [原件](https://github.com/swan4er/opus-100-projects/blob/6c98846c00d667b8958c4c777025025a57fda0e9/104-lens-optics/index.html) · [文本](https://github.com/swan4er/opus-100-projects/blob/6c98846c00d667b8958c4c777025025a57fda0e9/IDEAS.md) |
| n067 | 可接线的模块合成器 | swan4er | 创作简报 | [原件](https://github.com/swan4er/opus-100-projects/blob/6c98846c00d667b8958c4c777025025a57fda0e9/105-modular-synth/index.html) · [文本](https://github.com/swan4er/opus-100-projects/blob/6c98846c00d667b8958c4c777025025a57fda0e9/IDEAS.md) |
| n068 | 月球园丁 | swan4er | 创作简报 | [原件](https://github.com/swan4er/opus-100-projects/blob/6c98846c00d667b8958c4c777025025a57fda0e9/108-moon-gardener/index.html) · [文本](https://github.com/swan4er/opus-100-projects/blob/6c98846c00d667b8958c4c777025025a57fda0e9/IDEAS.md) |
| n069 | 火鸟之羽 | swan4er | 创作简报 | [原件](https://github.com/swan4er/opus-100-projects/blob/6c98846c00d667b8958c4c777025025a57fda0e9/111-firebird-palekh/index.html) · [文本](https://github.com/swan4er/opus-100-projects/blob/6c98846c00d667b8958c4c777025025a57fda0e9/IDEAS.md) |
| n070 | 电子云与轨道 | swan4er | 创作简报 | [原件](https://github.com/swan4er/opus-100-projects/blob/6c98846c00d667b8958c4c777025025a57fda0e9/117-electron-clouds/index.html) · [文本](https://github.com/swan4er/opus-100-projects/blob/6c98846c00d667b8958c4c777025025a57fda0e9/IDEAS.md) |
| n071 | 机械表的内部结构 | swan4er | 创作简报 | [原件](https://github.com/swan4er/opus-100-projects/blob/6c98846c00d667b8958c4c777025025a57fda0e9/119-watch-anatomy/index.html) · [文本](https://github.com/swan4er/opus-100-projects/blob/6c98846c00d667b8958c4c777025025a57fda0e9/IDEAS.md) |
| n072 | 正则表达式变成状态机 | swan4er | 创作简报 | [原件](https://github.com/swan4er/opus-100-projects/blob/6c98846c00d667b8958c4c777025025a57fda0e9/121-regex-automata/index.html) · [文本](https://github.com/swan4er/opus-100-projects/blob/6c98846c00d667b8958c4c777025025a57fda0e9/IDEAS.md) |
| n073 | 埃菲尔铁塔空间细节 | ThreeJSEval · Claude Opus 5.5 High 提交 | 原文 | [原件](https://threejseval.com/submissions/eiffel-tower/claude-opus-5-5-high/r1/main.js) · [文本](https://threejseval.com/api/prompts) |
| n074 | 林下空间与树冠 | ThreeJSEval · Claude Opus 5.5 High 提交 | 原文 | [原件](https://threejseval.com/submissions/realistic-forest/claude-opus-5-5-high/r1/main.js) · [文本](https://threejseval.com/api/prompts) |
| n075 | 海面上的帆船 | ThreeJSEval · Claude Opus 5.5 High 提交 | 原文 | [原件](https://threejseval.com/submissions/sailboat/claude-opus-5-5-high/r1/main.js) · [文本](https://threejseval.com/api/prompts) |
| n076 | 完整三维国际象棋 | ThreeJSEval · Claude Opus 5.5 High 提交 | 原文 | [原件](https://threejseval.com/submissions/chess-board/claude-opus-5-5-high/r1/main.js) · [文本](https://threejseval.com/api/prompts) |
| n077 | 波音 747 模型 | ThreeJSEval · Claude Opus 5.5 High 提交 | 原文 | [原件](https://threejseval.com/submissions/boeing-747/claude-opus-5-5-high/r1/main.js) · [文本](https://threejseval.com/api/prompts) |
| n078 | 机械臂把玩具放进盒子 | ThreeJSEval · Claude Opus 5.5 High 提交 | 原文 | [原件](https://threejseval.com/submissions/robot-arm/claude-opus-5-5-high/r1/main.js) · [文本](https://threejseval.com/api/prompts) |
| n079 | 折射鱼缸 | ThreeJSEval · Claude Opus 5.5 High 提交 | 原文 | [原件](https://threejseval.com/submissions/fishtank/claude-opus-5-5-high/r1/main.js) · [文本](https://threejseval.com/api/prompts) |
| n080 | 能被拖动的窗帘 | ThreeJSEval · Claude Opus 5.5 High 提交 | 原文 | [原件](https://threejseval.com/submissions/interactive-cloth/claude-opus-5-5-high/r1/main.js) · [文本](https://threejseval.com/api/prompts) |
| n081 | 山湖里的小渡轮 | ThreeJSEval · Claude Opus 5.5 High 提交 | 原文 | [原件](https://threejseval.com/submissions/cute-ferry/claude-opus-5-5-high/r2/main.js) · [文本](https://threejseval.com/api/prompts) |
| n082 | 机器人仓库 | ThreeJSEval · Claude Opus 5.5 High 提交 | 原文 | [原件](https://threejseval.com/submissions/warehouse/claude-opus-5-5-high/r1/main.js) · [文本](https://threejseval.com/api/prompts) |
| n083 | 麦田联合收割机 | ThreeJSEval · Claude Opus 5.5 High 提交 | 原文 | [原件](https://threejseval.com/submissions/combine-harvester/claude-opus-5-5-high/r1/main.js) · [文本](https://threejseval.com/api/prompts) |
| n084 | 三维弹弓闯关 | ThreeJSEval · Claude Opus 5.5 High 提交 | 原文 | [原件](https://threejseval.com/submissions/angry-bird/claude-opus-5-5-high/r1/main.js) · [文本](https://threejseval.com/api/prompts) |
| n085 | 海岸发射台升空 | ThreeJSEval · Claude Opus 5.5 High 提交 | 原文 | [原件](https://threejseval.com/submissions/falcon-9/claude-opus-5-5-high/r1/main.js) · [文本](https://threejseval.com/api/prompts) |
| n086 | 近海热带岛屿 | ThreeJSEval · Claude Opus 5.5 High 提交 | 原文 | [原件](https://threejseval.com/submissions/tropical-island/claude-opus-5-5-high/r1/main.js) · [文本](https://threejseval.com/api/prompts) |
| n087 | 咖啡墙错觉 | Maoku | 创作简报 | [原件](https://github.com/Maoku/Opus55OpticalIllusion/blob/0e5db5723b44c4f1d119df88c21900a8da2da330/src/exhibits/a1-cafe-wall/index.ts) · [文本](https://github.com/Maoku/Opus55OpticalIllusion/blob/0e5db5723b44c4f1d119df88c21900a8da2da330/Docs/IMPLEMENTATION_PLAN.md) |
| n088 | 大小对比错觉 | Maoku | 创作简报 | [原件](https://github.com/Maoku/Opus55OpticalIllusion/blob/0e5db5723b44c4f1d119df88c21900a8da2da330/src/exhibits/a2-ebbinghaus/index.ts) · [文本](https://github.com/Maoku/Opus55OpticalIllusion/blob/0e5db5723b44c4f1d119df88c21900a8da2da330/Docs/IMPLEMENTATION_PLAN.md) |
| n089 | 箭头与线段长度 | Maoku | 创作简报 | [原件](https://github.com/Maoku/Opus55OpticalIllusion/blob/0e5db5723b44c4f1d119df88c21900a8da2da330/src/exhibits/a3-muller-lyer/index.ts) · [文本](https://github.com/Maoku/Opus55OpticalIllusion/blob/0e5db5723b44c4f1d119df88c21900a8da2da330/Docs/IMPLEMENTATION_PLAN.md) |
| n090 | 闪烁格点 | Maoku | 创作简报 | [原件](https://github.com/Maoku/Opus55OpticalIllusion/blob/0e5db5723b44c4f1d119df88c21900a8da2da330/src/exhibits/a4-scintillating-grid/index.ts) · [文本](https://github.com/Maoku/Opus55OpticalIllusion/blob/0e5db5723b44c4f1d119df88c21900a8da2da330/Docs/IMPLEMENTATION_PLAN.md) |
| n091 | 周边漂移 | Maoku | 创作简报 | [原件](https://github.com/Maoku/Opus55OpticalIllusion/blob/0e5db5723b44c4f1d119df88c21900a8da2da330/src/exhibits/a5-peripheral-drift/index.ts) · [文本](https://github.com/Maoku/Opus55OpticalIllusion/blob/0e5db5723b44c4f1d119df88c21900a8da2da330/Docs/IMPLEMENTATION_PLAN.md) |
| n092 | 残像之窗 | Maoku | 创作简报 | [原件](https://github.com/Maoku/Opus55OpticalIllusion/blob/0e5db5723b44c4f1d119df88c21900a8da2da330/src/exhibits/a6-afterimage/index.ts) · [文本](https://github.com/Maoku/Opus55OpticalIllusion/blob/0e5db5723b44c4f1d119df88c21900a8da2da330/Docs/IMPLEMENTATION_PLAN.md) |
| n093 | 艾姆斯房间 | Maoku | 创作简报 | [原件](https://github.com/Maoku/Opus55OpticalIllusion/blob/0e5db5723b44c4f1d119df88c21900a8da2da330/src/exhibits/b1-ames-room/index.ts) · [文本](https://github.com/Maoku/Opus55OpticalIllusion/blob/0e5db5723b44c4f1d119df88c21900a8da2da330/Docs/IMPLEMENTATION_PLAN.md) |
| n094 | 不可能三角形 | Maoku | 创作简报 | [原件](https://github.com/Maoku/Opus55OpticalIllusion/blob/0e5db5723b44c4f1d119df88c21900a8da2da330/src/exhibits/b2-impossible-triangle/index.ts) · [文本](https://github.com/Maoku/Opus55OpticalIllusion/blob/0e5db5723b44c4f1d119df88c21900a8da2da330/Docs/IMPLEMENTATION_PLAN.md) |
| n095 | 棋盘阴影错觉 | Maoku | 创作简报 | [原件](https://github.com/Maoku/Opus55OpticalIllusion/blob/0e5db5723b44c4f1d119df88c21900a8da2da330/src/exhibits/b3-checker-shadow/index.ts) · [文本](https://github.com/Maoku/Opus55OpticalIllusion/blob/0e5db5723b44c4f1d119df88c21900a8da2da330/Docs/IMPLEMENTATION_PLAN.md) |
| n096 | 反向透视 | Maoku | 创作简报 | [原件](https://github.com/Maoku/Opus55OpticalIllusion/blob/0e5db5723b44c4f1d119df88c21900a8da2da330/src/exhibits/b4-reverspective/index.ts) · [文本](https://github.com/Maoku/Opus55OpticalIllusion/blob/0e5db5723b44c4f1d119df88c21900a8da2da330/Docs/IMPLEMENTATION_PLAN.md) |
| n097 | 旋转的影子 | Maoku | 创作简报 | [原件](https://github.com/Maoku/Opus55OpticalIllusion/blob/0e5db5723b44c4f1d119df88c21900a8da2da330/src/exhibits/b5-shadow-spinner/index.ts) · [文本](https://github.com/Maoku/Opus55OpticalIllusion/blob/0e5db5723b44c4f1d119df88c21900a8da2da330/Docs/IMPLEMENTATION_PLAN.md) |
| n098 | 圆与心形之间 | Maoku | 创作简报 | [原件](https://github.com/Maoku/Opus55OpticalIllusion/blob/0e5db5723b44c4f1d119df88c21900a8da2da330/src/exhibits/c1-circle-heart/index.ts) · [文本](https://github.com/Maoku/Opus55OpticalIllusion/blob/0e5db5723b44c4f1d119df88c21900a8da2da330/Docs/IMPLEMENTATION_PLAN.md) |
| n099 | 没有颜色的果实 | Maoku | 创作简报 | [原件](https://github.com/Maoku/Opus55OpticalIllusion/blob/0e5db5723b44c4f1d119df88c21900a8da2da330/src/exhibits/c2-colorless-fruit/index.ts) · [文本](https://github.com/Maoku/Opus55OpticalIllusion/blob/0e5db5723b44c4f1d119df88c21900a8da2da330/Docs/IMPLEMENTATION_PLAN.md) |
| n100 | 看不见的三角形 | Maoku | 创作简报 | [原件](https://github.com/Maoku/Opus55OpticalIllusion/blob/0e5db5723b44c4f1d119df88c21900a8da2da330/src/exhibits/c3-invisible-triangle/index.ts) · [文本](https://github.com/Maoku/Opus55OpticalIllusion/blob/0e5db5723b44c4f1d119df88c21900a8da2da330/Docs/IMPLEMENTATION_PLAN.md) |
