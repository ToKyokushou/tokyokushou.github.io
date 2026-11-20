---
title: 'DiffOBI: Diffusion-Based Image Generation of Oracle Bone Inscription Style Characters'
pid: IC09
category: conferences
permalink: /publication/2024-12-diffobi
date: '2024-12-03'
authors: Xiaoxuan Xie, <strong>Xusheng Du</strong>, Minhao Li, Xi Yang, Haoran Xie
venue: SIGGRAPH Asia 2024 Technical Communications
venue_details: Article 16, pp. 1–4, Tokyo, Japan
venue_short: SIGGRAPH Asia 2024
thumb: /images/thumbs/11-obi-1.jpg
tag_en: Technical Communications
tag_ja: Technical Communications
doi: 10.1145/3681758.3698005
abstract: Oracle bone inscriptions are the most valuable asset of humankind with irreplaceable archaeological and visual values. However, it is still challenging to analyze and generate oracle bone inscription-style images for visual identification and art design. In this paper, we propose DiffOBI, a novel approach for generating images in the oracle bone inscription style using diffusion models. We first construct a dataset that aligns with oracle bone inscription, text prompts, and object images. This dataset serves as the foundation for fine-tuning ControlNet. By inputting images of various objects along with corresponding text prompts, the model generates the corresponding images in the style of oracle bone inscription. To further enhance the quality of the generated images, we integrate a refinement module to refine the initial results, ensuring the refined results conform more closely to the original structure and norms of oracle bone inscription. This approach ensures that the generated images conform to the given input images and also preserves the unique pictographic features of oracle bone inscription.
summary_ja: 甲骨文字は現存資料が限られ，デザインや研究に利用できるデータが不足している。本研究では，拡散モデルを用いて任意の文字を甲骨文字のスタイルで画像生成する手法DiffOBIを提案した。
excerpt: Oracle bone inscriptions are the most valuable asset of humankind with irreplaceable archaeological and visual values. However, it is still challenging to analyze and generate orac
figures:
- src: /images/pubs/IC09_fig01.jpg
  caption: 'Figure 1: (a) Examples of oracle bone inscription from EVOBC dataset [Guan et al. 2024]. (b) Generated oracle bone inscription style images (second row) based on the input object images (first row) using DiffOBI.'
- src: /images/pubs/IC09_fig02.jpg
  caption: 'Figure 2: Framework of our method. Using text prompts and object images as inputs, we first generate the initial results via a generation module consisting of a stable diffusion model and ControlNet. In the refinement module, the initial results are refined for style, corners, edge, and resolution to obtain the refined results.'
- src: /images/pubs/IC09_fig04.jpg
  caption: 'Figure 4: Results of generated images of objects (first row from original dataset, the others from the test dataset.'
---
