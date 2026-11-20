---
title: Landscape Cinemagraph Synthesis with Sketch Guidance
pid: IC10
category: conferences
permalink: /publication/2024-12-cinemagraph-sketch
date: '2024-12-02'
authors: Hao Jin, Zhengyang Wang, <strong>Xusheng Du</strong>, Xiaoxuan Xie, Haoran Xie
venue: SIGGRAPH Asia 2024 Posters
venue_details: Article 54, pp. 1–2, Tokyo, Japan
venue_short: SIGGRAPH Asia 2024
thumb: /images/thumbs/10-cinema-sketch-1.jpg
doi: 10.1145/3681756.3698209
abstract_label: Introduction
abstract: Cinemagraphs embody a captivating fusion of photography and video, animating parts of still images to create a striking visual effect. However, it is challenging to create visually pleasing cinemagraphs that require a significant investment of time and skills, especially for common users without professional knowledge and skills. In computer graphics, physics-based simulations are used to infer the motion trajectories of fluid elements which are time-consuming and domain-specific. Recently, deep learning based diffusion models can generate high-quality images and videos. Text2Cinemagraph can generate a realistic and artistic cinemagraph from a text prompt [Mahapatra et al. 2023]. The input modalities of these methods are only still real-world images or conditioning with text prompts which are difficult for common users to generate and control the landscape cinemagraph with specific design intentions. To solve these issues, we present a novel landscape cinemagraph synthesis framework with sketch-guided approach from freehand sketches using diffusion models and motion predictor as shown in Fig. 1. We propose a fine-tuned latent diffusion model to generate realistic fluid elements, such as waterfalls and sea, from the provided structural sketches and a deep-fusion method to adjust the predicted motion field based on motion sketches.
summary_ja: スケッチを手がかりに風景シネマグラフを生成する手法に関するポスター論文。
excerpt: Cinemagraphs embody a captivating fusion of photography and video, animating parts of still images to create a striking visual effect. However, it is challenging to create visually
figures:
- src: /images/pubs/IC10_fig01.jpg
  caption: 'Figure 1: Given input hand-drawn sketches of landscape structure and motions, the proposed framework can generate landscape cinemagraphs with landscape image generation, sketch-guided motion field prediction, and cinemagraph synthesis steps.'
- src: /images/pubs/IC10_fig03.jpg
  caption: 'Figure 3: User sketches (a) are used to generate landscape image (b) and dense motion field (d), then the motion field (c) is predicted to obtain the final sketch guided field (e).'
---
