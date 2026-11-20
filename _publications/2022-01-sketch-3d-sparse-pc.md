---
title: Sketch-Based 3D Shape Modeling from Sparse Point Clouds
pid: IC17
category: conferences
permalink: /publication/2022-01-sketch-3d-sparse-pc
date: '2022-05-01'
authors: '<strong>Xusheng&nbsp;Du</strong>, Yi&nbsp;He, Xi&nbsp;Yang, Chia-Ming&nbsp;Chang, Haoran&nbsp;Xie'
venue: 'International Workshop on Advanced Imaging Technology (IWAIT 2022), Proc.&nbsp;SPIE&nbsp;12177'
venue_details: '121773K, Hong&nbsp;Kong'
venue_short: IWAIT 2022
thumb: /images/thumbs/1-sparse-pc-1.jpg
doi: 10.1117/12.2626116
code: https://github.com/ToKyokushou/ShadowGuidance_SparsePointClouds
arxiv: https://arxiv.org/abs/2201.11287
abstract: 3D modeling based on point clouds is an efficient way to reconstruct and create detailed 3D content. However, the geometric procedure may lose accuracy due to high redundancy and the absence of an explicit structure. In this work, we propose a human-in-the-loop sketch-based point cloud reconstruction framework to leverage users’ cognitive abilities in geometry extraction. We present an interactive drawing interface for 3D model creation from point cloud data with the help of user sketches. We adopt an optimization method in which the user can continuously edit the contours extracted from the obtained 3D model and retrieve the model iteratively. Finally, we verify the proposed user interface for modeling from sparse point clouds.
summary_ja: 疎な点群から3次元形状を作成する際に，スケッチ入力を用いて形状の検索と再構成を行うモデリング手法を提案した。利用者が描いたスケッチに基づいて類似する3次元モデルを検索し，点群と組み合わせて形状を再構成する。実験により形状作成の効率と精度を検証した。
excerpt: 3D modeling based on point clouds is an efficient way to reconstruct and create detailed 3D content. However, the geometric procedure may lose accuracy due to high redundancy and t
figures:
- src: /images/pubs/IC17_fig02.jpg
  caption: 'Figure 2. System overview of the proposed model extraction with eight steps: (1) input of point cloud; (2) user sketch; (3) sketch retrieval of 3D models; (4) overlay with 3D model; (5) extraction of model contours for redrawing; (6) model re-retrieval; (7) repeat steps (4)—(6); (8) obtain the ﬁnal model.'
- src: /images/pubs/IC17_fig03.jpg
  caption: Figure 3. (a) The user is drawing sketches in the proposed user interface. (b1)—(b3) show the results before and after the model contour extraction, and (c1) and (c2) show the overlap of the point cloud and the model before and after ICP alignment, respectively.
- src: /images/pubs/IC17_fig05.jpg
  caption: 'Figure 5. Images of the user’s experiment following our proposed complete process: (a) sparse point cloud, (b) sketch drawn, (c) point cloud and mismatched model after performing ICP alignment, (d) contours of the current model, (e)—(g) modiﬁcation of the model contour to match the point cloud features, (h) target model.'
---
