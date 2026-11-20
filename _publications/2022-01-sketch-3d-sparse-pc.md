---
title: "Sketch-based 3D Shape Modeling from Sparse Point Clouds"
index: 6
collection: publications
category: conferences
permalink: /publication/2022-01-sketch-3d-sparse-pc
excerpt: 'A sketch-driven approach for reconstructing 3D shapes from sparse point clouds.'
date: 2022-01-01
venue: 'International Workshop on Advanced Image Technology (IWAIT 2022)'
citation: '**Xusheng Du**, Yi He, Xi Yang, Chia-Ming Chang, Haoran Xie.'
thumbnail: /images/1-sparse-pc-1.png
venue_short: "IWAIT 2022"
selected: 5
thumb: /images/thumbs/1-sparse-pc-1.jpg
---
<img src="/images/1-sparse-pc-1.png" alt="" style="width:100%;" />

**Abstract:**

3D modeling based on point clouds is an e cient way to reconstruct and create detailed 3D content. However, the geometric procedure may lose accuracy due to high redundancy and the absence of an explicit structure. In this work, we propose a human-in-the-loop sketch-based point cloud reconstruction framework to leverage users cognitive abilities in geometry extraction. We present an interactive drawing interface for 3D model creation from point cloud data with the help of user sketches. We adopt an optimization method in which the user can continuously edit the contours extracted from the obtained 3D model and retrieve the model iteratively. Finally, we verify the proposed user interface for modeling from sparse point clouds.

<img src="/images/1-sparse-pc-2.png" alt="" style="width:100%;" />

**Framework:**

Figure 2 shows the system overview of the proposed system. In the user interface, the user can adjust the angle to observe the spatial structure of the input sparse point cloud. After the observation, the user can determine any satisfactory angle and draw a sketch with reference to the sparse point cloud of the current angle. We overlay the sparse point cloud data with the retrieved 3D model with model alignment. If the user is not satis ed with the current model, the proposed interface allows the user to continue the retrieval based on the current model without redrawing. After the user con rms that the sketch modi cation is complete, the user can perform a re-retrieval in an interactive manner to obtain a new 3D model. By extracting the contours of the retrieved model (step 5), users can edit the contours and perform re-retrieval (step 6) in an interactive manner to continuously improve the overlap between the retrieved model and the initial point clouds.

<img src="/images/1-sparse-pc-3.png" alt="" style="width:100%;" />

<img src="/images/1-sparse-pc-4.png" alt="" style="width:100%;" />
