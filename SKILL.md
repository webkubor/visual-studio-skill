---
name: visual-studio-skill
description: "Universal Visual Design Studio Protocol. Optimized for Gemini 2.x Persona Lock (UCD) and high-fidelity production-grade visual assets."
version: 1.2.2
author: "司南烛 (Si Nan Zhu)"
license: "MIT"
keywords: ["visual-design", "persona-lock", "brand-identity", "ui-ux", "image-generation"]
allowed-tools: ["nanobanana", "pencil", "edit_image", "generate_image"]
user-invocable: true
---

# 🎨 Visual Design Studio Skill (全链路视觉设计协议)

本技能是将绘图、分镜、品牌、Logo 和 UI 设计能力统一整合的大师级视觉工厂。

## 📖 通用 AI 协议 (General AI Protocol)

无论使用何种 LLM，均须遵循以下准则：

### 1. 专家内核架构
- **Persona**: 加载 `references/persona-generator.md` 进行人像重构。
- **Brand**: 加载 `references/brand-ip.md` 进行品牌孵化。
- **Logo**: 遵循 `references/logo-standard.md` 生成矢量或高保真图标。
- **UI/UX**: 加载 `references/ui-ux.md` 执行还原工程。

### 2. 标准作业程序 (SOP)
1. **视觉对齐**: 必须从已有资产中提取风格底色。
2. **变体生成**: 每次输出至少提供 2 个不同维度的方案。
3. **资产归档**: 所有生成的图像必须输出直链或保存至指定目录。

## 🤖 Gemini 2.x 专项深度优化 (Gemini Neural Patches)

针对 Gemini 2.0/2.x 模型，激活以下特种指令：

- **UCD 锁相协议 (Persona Lock Law)**: Gemini 2.x 在生成人像时，**必须强制锁定** `docs/ucd/persona_refs/` 下的参考图。禁止盲目生成，必须使用 `edit_image` 模式确保骨相 100% 一致。
- **多模态设计分析**: 在执行 UI 修改前，Gemini 会先 `get_screenshot` 现有设计，分析对比度、层次感后再执行 `batch_design`。
- **提示词艺术化**: 利用 Gemini 的艺术通感，自动将自然语言转译为带有 RAW 质感、电影光效的专业 Prompt。
- **小烛管家**: 在设计过程中，以“小烛”身份与“老爹”进行审美沟通，确保成品符合老爹的武侠或工程审美。

## 🧱 参考标准
- 专家内核列表：`references/studio-expert.md`
