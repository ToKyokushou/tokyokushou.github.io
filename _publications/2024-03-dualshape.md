---
title: "DualShape: Sketch-based 3D Shape Design with Part Generation and Retrieval"
index: 1
collection: publications
category: manuscripts
permalink: /publication/2024-03-dualshape
excerpt: 'A sketch-driven framework for part-based 3D shape design and retrieval.'
date: 2024-03-01
venue: 'IEEE Access'
thumbnail: /images/dualshape-2.png
citation: '**Xusheng Du**, Tianyu Zhang, Haoran Xie.'
venue_short: "IEEE Access 2024"
thumb: /images/thumbs/dualshape-2.jpg
selected: true
---

<img src="/images/dualshape-1.png" alt="" style="width:100%;" />

**Abstract:**

Creating a 3D shape design from free-hand sketches is a challenging task due to the sparse and ambiguous information from sketches. In this work, we propose DualShape, a sketch-based 3D shape design interface with part generation and retrieval. DualShape first decouples the model generation into two parts: a composite part retrieval module using a sketch-based feature matching method and a sketch-based part generation module using a deep learning approach with implicit function representation. We then propose an assembly module for the obtained part models to accomplish the task of 3D shape generation from input sketches. In addition, we provide an optimization module that allows users to optimize and manually adjust the assembled model to achieve satisfying models. For the reconstruction interface, shadow guidance was utilized to assist users with the retrieved 3D models matching the input strokes as background references in real time. To verify the effectiveness of the DualShape system, we conducted the comparison experiments and the user study. The results show that DualShape is more user-friendly and is able to generate 3D models with richer details. We believe this work would provide a novel paradigm for hybrid 3D model generation in computer graphics.

<img src="/images/dualshape-3.png" alt="" style="width:100%;" />

**Framework:**

In this work, we propose DualShape, a hybrid 3D shape design framework based on the sketch. As shown in Fig, our framework is mainly composed of four modules: the part retrieval module; the part generation module; the part assembly module and the model refinement
module.

