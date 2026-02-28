---
name: persona-generator
description: "Expert Character Reconstruction Engine - specializing in high-fidelity persona generation, outfit swapping (modern/casual), and strict identity locking based on ref images using nanobanana MCP."
version: 1.1.0
mcp_requirements: ["nanobanana"]
---

# 👤 Persona Generator (人像锁相与私服定制专家)

本内核专注于 **“角色一致性维护”** 与 **“现代审美注入”**。它不是一个随机绘图工具，而是一个精准的人像重构引擎。

## 🧪 核心逻辑：骨相重组 (Identity Reconstruction)

所有任务必须围绕“人”展开，严禁偏离底稿特征：

### 1️⃣ Analyze (特征锚定)

- **SSOT**: 绝对真理来源是 `docs/ucd/persona_refs/`。
- **锁相**: 必须识别角色的骨相、三庭五眼比例与眼神神态。
- **输入**: 强制挂载参考图路径到 `nanobanana.edit_image`。

### 2️⃣ Style Inject (私服与审美)

- **私服定制**: 将武侠/古风底稿转化为现代日常（如：居家慵懒、街头甜辣、职场智性）。
- **材质逻辑**: 强制描述面料感（羊绒、真丝、粗糙单宁）以抵消 AI 的“塑料感”。
- **氛围**: 锁定 POV (第一人称) 视角，营造“生活在别处”的真实动态感。

### 3️⃣ Execute (强制锁死生成)

- **工具**: 强制调用 `nanobanana` 的 `edit_image`。
- **提示词咒语**:
  - 核心："The woman from the reference image, 100% identity match."
  - 质感："RAW photo, natural skin texture, visible pores, zero makeup look."

### 4️⃣ Delivery (云端交付)

- **自动化**: 生成即上传，交付 HTTPS 链接，完成资产闭环。

## 📐 强制标准 (Technical SOP)

- **镜头**: 85mm 肖像定焦，f/1.8 景深。
- **光影**: 侧逆光或自然窗边光，严禁影楼硬光。
- **禁忌**: 严禁面部过度磨皮，严禁生成与底稿无关的陌生面孔。

---
"Preserving Soul, Transforming Appearance" - Managed by Candle.
