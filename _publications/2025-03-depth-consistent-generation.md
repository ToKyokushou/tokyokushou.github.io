---
title: 'Multi-View Depth Consistent Image Generation Using Generative AI Models: Application on architectural design of university buildings'
pid: IC08
category: conferences
permalink: /publication/2025-03-depth-consistent-generation
date: '2025-03-02'
authors: <strong>Xusheng Du</strong>, Ruihan Gui, Zhengyang Wang, Ye Zhang, Haoran Xie
venue: Proc. 30th International Conference on Computer-Aided Architectural Design Research in Asia (CAADRIA 2025)
venue_details: vol. 1, pp. 111–120, Tokyo, Japan
venue_short: CAADRIA 2025
thumb: /images/thumbs/14-arc-3.jpg
selected: 6
doi: 10.52842/conf.caadria.2025.1.111
code: https://github.com/ToKyokushou/RenderDesign_MultiViewGeneration
arxiv: https://arxiv.org/abs/2503.03068
abstract: In the early stages of architectural design, shoebox models are typically used as a simplified representation of building structures but require extensive operations to transform them into detailed designs. Generative artificial intelligence (AI) provides a promising solution to automate this transformation, but ensuring multi-view consistency remains a significant challenge. To solve this issue, we propose a novel three-stage consistent image generation framework using generative AI models to generate architectural designs from shoebox model representations. The proposed method enhances state-of-the-art image generation diffusion models to generate multi-view consistent architectural images. We employ ControlNet as the backbone and optimize it to accommodate multi-view inputs of architectural shoebox models captured from predefined perspectives. To ensure stylistic and structural consistency across multi-view images, we propose an image space loss module that incorporates style loss, structural loss and angle alignment loss. We then use depth estimation method to extract depth maps from the generated multi-view images. Finally, we use the paired data of the architectural images and depth maps as inputs to improve the multi-view consistency via the depth-aware 3D attention module. Experimental results demonstrate that the proposed framework can generate multi-view architectural images with consistent style and structural coherence from shoebox model inputs.
summary_ja: 視点ごとに建築画像を生成する際に生じる形状・外観の不整合を抑えるため，簡易な3次元モデルを入力として複数視点の建築画像を生成する手法を提案した。ControlNetによる画像生成と深度推定を組み合わせて視点間の整合性を保つ。大学建築物210件から作成した画像25,200枚を用いて学習し，建築分野の大学院生15名による評価で設計検討における有用性を検証した。
excerpt: In the early stages of architectural design, shoebox models are typically used as a simplified representation of building structures but require extensive operations to transform t
figures:
- src: /images/pubs/IC08_fig02.jpg
  caption: Figure 2. Overview of the Three-Stage Framework
- src: /images/pubs/IC08_fig04.jpg
  caption: Figure 4. Reconstruction Results for U-, O- and Complex-Shaped University Buildings
- src: /images/pubs/IC08_fig05.jpg
  caption: Figure 5. Generation Results for I/L-Shaped and U-Shaped University Buildings
---
