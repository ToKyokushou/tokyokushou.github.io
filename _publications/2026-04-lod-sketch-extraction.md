---
title: 'LoD Sketch Extraction from Architectural Models Using Generative AI: Dataset Construction for Multi-Level Architectural Design Generation'
pid: IC05
category: conferences
permalink: /publication/2026-04-lod-sketch-extraction
date: '2026-04-02'
authors: <strong>Xusheng Du</strong>, Athiwat Kongkaeo, Ye Zhang, Haoran Xie
venue: Proc. 31st International Conference on Computer-Aided Architectural Design Research in Asia (CAADRIA 2026)
venue_details: vol. 1, pp. 417–426, Hsinchu, Taiwan
venue_short: CAADRIA 2026
thumb: /images/thumbs/IC05.jpg
selected: 5
doi: 10.52842/conf.caadria.2026.1.417
arxiv: https://arxiv.org/abs/2601.17095
abstract: For architectural design, representation across multiple Levels of Details (LoD) is essential for achieving a smooth transition from conceptual massing to detailed modeling. However, traditional LoD modeling processes rely on manual operations that are time-consuming, labor-intensive, and prone to geometric inconsistencies. While the rapid advancement of generative artificial intelligence (AI) has opened new possibilities for generating multi-level architectural models from sketch inputs, its application remains limited by the lack of high-quality paired LoD training data. To address this issue, we propose an automatic LoD sketch extraction framework using generative AI models, which progressively simplifies high-detail architectural models to automatically generate geometrically consistent and hierarchically coherent multi-LoD representations. The proposed framework integrates computer vision techniques with generative AI methods to establish a progressive extraction pipeline that transitions from detailed representations to volumetric abstractions. Experimental results demonstrate that the method maintains strong geometric consistency across LoD levels, achieving SSIM values of 0.7319 and 0.7532 for the transitions from LoD3 to LoD2 and from LoD2 to LoD1, respectively, with corresponding normalized Hausdorff distances of 25.1% and 61.0% of the image diagonal, reflecting controlled geometric deviation during abstraction. These results verify that the proposed framework effectively preserves global structure while achieving progressive semantic simplification across different LoD levels, providing reliable data and technical support for AI-driven multi-level architectural generation and hierarchical modeling.
summary_ja: 建築設計の段階に応じた生成AIの学習データを整備するため，3次元建築モデルから詳細度（LoD）の異なるスケッチを抽出する手法を提案した。3段階の詳細度で表現した建築モデル150点から多視点画像を生成し，輪郭抽出と生成AIによる簡略化を組み合わせて段階的なスケッチを作成して，LoD・視点ごとの対応関係を保持したデータセット（画像計75,600枚）を構築した。
excerpt: For architectural design, representation across multiple Levels of Details (LoD) is essential for achieving a smooth transition from conceptual massing to detailed modeling. Howeve
figures:
- src: /images/pubs/IC05_fig01.jpg
  caption: Figure 1. Overview of the proposed Automatic LoD Sketch Extraction Framework.
- src: /images/pubs/IC05_fig04.jpg
  caption: Figure 4. Volumetric abstraction from LoD2 to LoD1 using a dual-ControlNet framework.
- src: /images/pubs/IC05_fig05.jpg
  caption: Figure 5. Qualitative results showing the progressive abstraction from LoD3 image to LoD1 sketch.
---
