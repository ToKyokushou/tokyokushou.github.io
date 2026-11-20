---
title: 'Sketch-Based Facade Renovation With Generative AI: A Streamlined Framework for Bypassing As-Built Modelling in Industrial Adaptive Reuse'
pid: IC03
category: conferences
permalink: /publication/2026-04-facade-renovation
date: '2026-04-03'
authors: Warissara Booranamaitree†, <strong>Xusheng Du</strong>†, Yushu Cai, Zhengyang Wang, Ye Zhang, Haoran Xie
venue: Proc. 31st International Conference on Computer-Aided Architectural Design Research in Asia (CAADRIA 2026)
venue_details: vol. 2, pp. 11–20, Hsinchu, Taiwan
venue_short: CAADRIA 2026
thumb: /images/thumbs/IC03.jpg
tag_en: Co-first author
tag_ja: 共同筆頭
doi: 10.52842/conf.caadria.2026.2.011
arxiv: https://arxiv.org/abs/2601.08531
abstract: Facade renovation offers a more sustainable alternative to full demolition, yet producing design proposals that preserve existing structures while expressing new intent remains challenging. Current workflows typically require detailed as-built modelling before design, which is time-consuming, labour-intensive, and often involves repeated revisions. To solve this issue, we propose a three-stage framework combining generative artificial intelligence (AI) and vision-language models (VLM) that directly processes rough structural sketch and textual descriptions to produce consistent renovation proposals. First, the input sketch is used by a fine-tuned VLM model to predict bounding boxes specifying where modifications are needed and which components should be added. Next, a stable diffusion model generates detailed sketches of new elements, which are merged with the original outline through a generative inpainting pipeline. Finally, ControlNet is employed to refine the result into a photorealistic image. Experiments on datasets and real industrial buildings indicate that the proposed framework can generate renovation proposals that preserve the original structure while improving facade detail quality. This approach effectively bypasses the need for detailed as-built modelling, enabling architects to rapidly explore design alternatives, iterate on early-stage concepts, and communicate renovation intentions with greater clarity.
summary_ja: 産業建築の用途転換（アダプティブ・リユース）における外観改修の検討を支援するため，スケッチと生成AIを用いたファサード改修の手法を提案した。既存建物の詳細な現況3次元モデルを作成することなく，既存建物の画像とスケッチから改修案を検討できる効率的なワークフローを示した。
excerpt: Facade renovation offers a more sustainable alternative to full demolition, yet producing design proposals that preserve existing structures while expressing new intent remains cha
figures:
- src: /images/pubs/IC03_fig01.jpg
  caption: Figure 1. Overview of the Three-Stage Framework.
- src: /images/pubs/IC03_fig08.jpg
  caption: Figure 8. Generation results of the three-stage framework on unseen sketches.
- src: /images/pubs/IC03_fig09.jpg
  caption: Figure 9. Real-world case study results
---
