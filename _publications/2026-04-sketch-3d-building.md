---
title: 'Retrieval-Augmented Sketch-Guided 3D Building Generation: Generative Architectural Design for Japanese Detached Houses'
pid: IC04
category: conferences
permalink: /publication/2026-04-sketch-3d-building
date: '2026-04-01'
authors: 'Zhengyang&nbsp;Wang, Nuttapong&nbsp;Rochanavibhata, Yuxiao&nbsp;Ren, <strong>Xusheng&nbsp;Du</strong>, Ye&nbsp;Zhang, Haoran&nbsp;Xie'
venue: CAADRIA 2026 (31st International Conference)
venue_details: 'vol.&nbsp;1, pp.&nbsp;427–&#8288;436, Hsinchu,&nbsp;Taiwan'
venue_short: CAADRIA 2026
thumb: /images/thumbs/IC04.jpg
doi: 10.52842/conf.caadria.2026.1.427
arxiv: https://arxiv.org/abs/2603.16612
abstract: In the early design stage of Japanese detached houses, the lack of a unified design representation among clients, sales representatives, and designers leads to design drift and inefficient feedback. Usually, sketches handed off by sales representatives may lose details for quick drawing, which reduces the fidelity of subsequent 3D generation using generative AI models. The generated 3D model typically takes the form of a single unified mesh, preventing component-level editing. To solve these issues, we propose a multi-stage 3D generative design framework capable of producing architectural models from rough design sketches. The framework combines generative and retrieval-based methods to enable component-level editing and personalized customization. It adopts a multimodal representation for 3D model generation and applies component segmentation to localize architectural components such as windows and doors and uses retrieval to support targeted replacement of components. Experiments show that the work enables modular customization which is thought to be suitable for personalized architectural design. This work introduces a multi-stage sketch-to-3D framework for Japanese detached houses, provides facade and component datasets, and shows effectiveness through quantitative and expert evaluations.
summary_ja: 日本の戸建住宅を対象に，スケッチ入力と事例検索（Retrieval-Augmented Generation）を組み合わせて3次元の建築形状を生成する手法を提案し，設計初期段階における3次元の設計案検討を支援した。
excerpt: In the early design stage of Japanese detached houses, the lack of a unified design representation among clients, sales representatives, and designers leads to design drift and ine
figures:
- src: /images/pubs/IC04_fig01.jpg
  caption: 'Figure 1. The overview of framework. Three-stage framework for component-level editing from sketches: sketch-to-image enhancement, 3D building model generation, and sketch-based retrieval and replacement.'
- src: /images/pubs/IC04_fig03.jpg
  caption: Figure 3. The results show the conversion from sketches to component-editable 3D models.
- src: /images/pubs/IC04_fig04.jpg
  caption: 'Figure 4. Qualitative comparison of three pipelines: (1) Basic 3D Generation (no style adaptation), (2) Style-Enhanced 3D Generation (style adapter only), and (3) Ours (Full Pipeline) (style adapter with component replacement).'
---
