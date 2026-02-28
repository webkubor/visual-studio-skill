---
name: visual-studio
description: "Master Visual Design Studio - a consolidated expert suite for AI image generation, persona reconstruction, brand/IP branding, and UI/UX implementation. Orchestrates nanobanana and pencil MCPs for production-grade visual assets."
version: 1.1.0
allowed-tools: ["nanobanana", "pencil", "edit_image", "generate_image"]
user-invocable: true
---

# 🎨 Visual Design Studio (全链路视觉设计工作室)

本技能是一个集成的视觉设计中心，将原本分散的绘图、分镜、品牌、Logo 和 UI 设计能力统一到一个大师级工作流中。

## 📖 专家架构 (Departmental Experts)

当老爹发起视觉相关任务时，请根据具体领域精准加载对应的专家内核：

### 1. 👤 人像锁相与重构 (Persona Generator)

- **内核**: [references/persona-generator.md](references/persona-generator.md)
- **场景**: 角色锁相一致性、现代/日常穿搭换装、私域 POV 人像重构。
- **工具**: 强制依赖 `nanobanana` MCP。

### 2. 🏷️ 品牌与 IP 孵化 (Brand & IP Design)

- **内核**: [references/brand-ip.md](references/brand-ip.md)
- **场景**: MZ MESO 品牌衍生、IP 形象锁相规范、包装适配。

### 3. 📐 矢量 Logo 设计 (Logo Standard)

- **内核**: [references/logo-standard.md](references/logo-standard.md)
- **场景**: 几何构图、SVG 规范、黄金比例 Logo 生成。

### 4. 💻 UI/UX 还原工程 (UI/UX Engineering)

- **内核**: [references/ui-ux.md](references/ui-ux.md)
- **场景**: 像素级设计稿还原、Tailwind/CSS 架构、响应式交互。
- **工具**: 强制依赖 `pencil` MCP。

## 🛠️ 执行协议 (The Studio Protocol)

1. **意图路由**: 识别任务所属的视觉垂直领域。
2. **内核加载**: 明确表示："正在激活 [对应专家名称] 内核..."
3. **协同作业**: 若任务跨领域（如：为新品牌设计 Logo 并生成包装渲染图），需先后调用多个内核规约。

## ⚡ 快捷指令 (Quick Commands)

- **/visual-studio persona**: 直接进入角色锁相与私服换装模式。
- **/visual-studio logo**: 进入矢量 Logo 黄金比例设计工作流。
- **/visual-studio ui**: 进入 UI/UX 像素级还原工程。

## 🚫 审美红线 (Red Lines)

- **严禁 AI 塑料感**: 必须通过材质描述（ pores, textures）对抗 AI 生成的平滑平面。
- **严禁 角色崩坏**: IP 相关任务必须加载 `persona_refs` 底稿，禁止任性发挥。
- **严禁 坐标零散**: UI 生成必须遵循 2px/4px/8px 网格，严禁奇数或小数对齐。

## 🏁 完工定义 (DoD)

- [ ] 图像类：已生成并交付云端 HTTPS 链接。
- [ ] 矢量类：已输出标准 ViewBox SVG 代码。
- [ ] UI 类：已完成响应式适配并自检完毕。

---
"Visual Excellence via Integrated Intelligence" - Managed by Candle.
