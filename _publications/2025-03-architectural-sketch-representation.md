---
title: "From Architectural Sketch to Conceptual Representation: Using Structure-Aware Diffusion Model to Generate Renderings of School Buildings"
index: 10
collection: publications
category: conferences
permalink: /publication/2025-03-architectural-sketch-representation
excerpt: 'Structure-aware diffusion model for generating conceptual renderings from architectural sketches.'
date: 2025-03-01
venue: 'The Association for Computer-Aided Architectural Design Research in Asia (CAADRIA 2025), Tokyo, Japan'
citation: 'Zhengyang Wang, Hao Jin, **Xusheng Du**, Yuxiao Ren, Ye Zhang, Haoran Xie.'
thumbnail: /images/13-arc-1.png
venue_short: "CAADRIA 2025"
thumb: /images/thumbs/13-arc-1.jpg
---
<img src="/images/13-arc-1.png" alt="" style="width:100%;" />

**Abstract:**

Generative Artificial Intelligence (AI) has advanced rapidly, enabling the generation of renderings from architectural sketches. This progress has significantly improved the efficiency of communication and conceptual expression during the early stage of architectural design. However, generated images often lack the structural details from architects' sketches. While sketches typically emphasize the overall structure, crucial components such as windows and doors are often represented by simple lines or omitted entirely. For school buildings, it is essential to control architectural components, such as the shape and proportion of windows, as these factors directly influence the accuracy of the generated images in reflecting the architect's design intentions. To address this issue, we propose a structure-aware diffusion model for architectural image generation to refine expressing design intentions through retrieval augmentation. Our framework utilizes architectural components to enhance the generation process, addressing the details that may be lacking in the sketches. These components provide clear spatial and structural details, improving the model's ability to interpret and generate architectural details. The refined sketches, combined with text prompts, are fed into the proposed structure-aware diffusion model to generate detailed and realistic school building images. The experiment results demonstrate the effectiveness of our framework in generating architectural designs.

<img src="/images/13-arc-2.png" alt="" style="width:100%;" />

**Framework:**

In this paper, we propose a sketch-guided framework of structure-aware diffusion model with retrieval augmentation for generating high-quality architectural design of school buildings directly from conceptual sketches during the early design stage. Figure 1 illustrates the workflow of our framework. Initially, the rough input sketch undergoes segmentation to extract architectural components (e.g., windows and doors). Refined architectural components are then retrieved from the architectural component dataset, used to generate a detailed sketch. Finally, the text prompts and the detailed sketch serve as conditioning inputs for the latent diffusion model to generate a highquality school building image.  

<img src="/images/13-arc-3.png" alt="" style="width:100%;" />

<img src="/images/13-arc-4.png" alt="" style="width:100%;" />

