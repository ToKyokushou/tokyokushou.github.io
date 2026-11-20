---
title: "DiffOBI: Diffusion-based Image Generation of Oracle Bone Inscription Style Characters"
index: 7
collection: publications
category: conferences
permalink: /publication/2024-12-diffobi
excerpt: 'Diffusion model for generating ancient Chinese oracle bone inscription characters.'
date: 2024-12-01
venue: 'ACM SIGGRAPH Asia 2024, Technical Communications, Tokyo, Japan'
citation: 'Xiaoxuan Xie, **Xusheng Du**, Minhao Li, Xi Yang, Haoran Xie.' 
thumbnail: /images/11-obi-1.png
venue_short: "SIGGRAPH Asia 2024 Tech. Comm."
thumb: /images/thumbs/11-obi-1.jpg
selected: true
---
<img src="/images/11-obi-1.png" alt="" style="width:100%;" />

**Abstract:**

Oracle bone inscriptions are the most valuable asset of humankind with irreplaceable archaeological and visual values. However, it is still challenging to analyze and generate oracle bone inscription-style images for visual identification and art design. In this paper, we propose DiffOBI, a novel approach for generating images in the oracle bone inscription style using diffusion models. We first construct a dataset that aligns with oracle bone inscription, text prompts, and object images. This dataset serves as the foundation for fine-tuning ControlNet. By inputting images of various objects along with corresponding text prompts, the model generates the corresponding images in the style of oracle bone inscription. To further enhance the quality of the generated images, we integrate a refinement module to refine the initial results, ensuring the refined results conform more closely to the original structure and norms of oracle bone inscription. This approach ensures that the generated images conform to the given input images and also preserves the unique pictographic features of oracle bone inscription.

<img src="/images/11-obi-3.png" alt="" style="width:100%;" />

**Framework:**

In this paper, we propose DiffOBI, a novel two-stage approach to generating oracle bone inscription-style images from given image inputs using diffusion models, ensuring the characters are stylistically accurate and semantically meaningful. We construct a dataset with images of the original oracle bone inscriptions, corresponding real-world images, and descriptive textual prompts. By inputting images of various objects along with corresponding text prompts, the model generates the corresponding images in the style of oracle bone inscriptions. To further enhance the quality of the generated images, we integrate a refinement module to improve the initial results, ensuring closer alignment with the original structure and norms of oracle bone inscriptions.

<img src="/images/11-obi-2.png" alt="" style="width:100%;" />

<img src="/images/11-obi-4.png" alt="" style="width:100%;" />
