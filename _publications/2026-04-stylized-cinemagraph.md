---
title: Sketch-Guided Stylized Landscape Cinemagraph Synthesis
pid: J03
category: journals
permalink: /publication/2026-04-stylized-cinemagraph
date: '2026-04-01'
authors: Hao Jin, Hengyuan Chang, Xiaoxuan Xie, Zhengyang Wang, <strong>Xusheng Du</strong>, Shaojun Hu, Haoran Xie*
venue: Computers & Graphics
venue_details: vol. 135, Article 104547
venue_short: C&G 2026
thumb: /images/thumbs/J03.jpg
doi: 10.1016/j.cag.2026.104547
arxiv: https://arxiv.org/abs/2412.00638
abstract: Designing stylized cinemagraphs is challenging due to the difficulty in customizing complex and expressive flow elements. To achieve intuitive and detailed control of the generated cinemagraphs, sketches provide a feasible solution to convey personalized design requirements beyond text inputs. In this paper, we propose Sketch2Cinemagraph, a sketch-guided framework that enables the conditional generation of stylized cinemagraphs from freehand sketches. Sketch2Cinemagraph adopts text prompts for initial landscape generation and provides sketch controls for both spatial and motion cues. The latent diffusion model first generates target stylized landscape images along with realistic versions. Then, a pre-trained object detection model obtains masks for the flow regions. We propose a latent motion diffusion model to estimate motion field in fluid regions of the generated landscape images. The input motion sketches serve as the conditions to control the generated motion fields in the masked fluid regions with the prompt. To synthesize cinemagraph frames, the pixels within fluid regions are warped to target locations at each timestep using a U-Net based frame generator. The results verified that Sketch2Cinemagraph can generate aesthetically appealing stylized cinemagraphs with continuous temporal flow from sketch inputs. We showcase the advantages of Sketch2Cinemagraph through qualitative and quantitative comparisons against the state-of-the-art approaches.
summary_ja: 静止画の一部のみが動くシネマグラフの制作には専門的な技術を要する。本研究では，利用者のスケッチを手がかりとして，風景のシネマグラフを任意のスタイルで生成する手法を提案した。
excerpt: Designing stylized cinemagraphs is challenging due to the difficulty in customizing complex and expressive flow elements. To achieve intuitive and detailed control of the generated
figures:
- src: /images/pubs/J03_fig01.jpg
  caption: Fig. 1. Given the input (a) sketches with motion sketches and text prompt, Sketch2Cinemagraph can synthesize (d) cinemagraphs from the (b) stylized landscape image with the generated (c) motion fields. The red font represents the text prompt for flow generation, and the blue font for style generation. The white-to-black gradient lines depict the motion sketches for the flow motion direction.
- src: /images/pubs/J03_fig02.jpg
  caption: Fig. 2. The Workflow of Sketch2Cinemagraph. Given input hand-drawn sketches of landscape structure and motions, the proposed framework can generate landscape cinemagraphs with (a) stylized landscape image generation, (b) sketch-guided motion prediction, and (c) stylized cinemagraph synthesis stages.
- src: /images/pubs/J03_fig09.jpg
  caption: Fig. 9. Compared with the hint-based CAL (c), hint-based 3DC (d) and text-based T2C (b) control paradigms, the Sketch2Cinemagraph framework is capable of generating fluid motions with better temporal continuity and greater dynamic flexibility using both coarse-grained (e) and full-grained (f) motion sketches, further demonstrating the effectiveness of the proposed motion control mechanism. (Comparisons of generated cinemagraphs are available in our supplement video.).
---
