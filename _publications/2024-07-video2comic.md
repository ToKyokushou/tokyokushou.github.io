---
title: "Video2Comic: A Dynamic Comic Editor with Video Clips"
index: 9
collection: publications
category: conferences
permalink: /publication/2024-07-video2comic
excerpt: 'An interactive editor that transforms video content into dynamic comic layouts.'
date: 2024-07-01
venue: '26th International Conference on Human-Computer Interaction (HCI INTERNATIONAL 2024), Washington'
citation: 'Zhengyang Wang, **Xusheng Du**, Tsukasa Fukusato, Haoran Xie.'
thumbnail: /images/9-comic-1.png
venue_short: "HCII 2024"
thumb: /images/thumbs/9-comic-1.jpg
---
<img src="/images/9-comic-1.png" alt="" style="width:100%;" />

**Abstract:**

Dynamic comics are widely used in video production because they enable people to efficiently summarize video sequences. However, its design process is currently done manually and requires special skills such as segmenting video sequence and layout, which often makes it inaccessible to people, especially novices. In this paper, we propose an interactive tool that allows users to convert input videos into dynamic comics. First, the user specifies the segmentation points while watching an input video. The system then automatically computes the locations of comic panels using a parametric layout model and composites the set of video segments. To investigate the effectiveness of the proposed system, we conducted a user study where people used our system and provided feedback on dynamic comic design tools.

<img src="/images/9-comic-2.png" alt="" style="width:100%;" />

**Framework:**

The framework of our proposed system. Users (a) segment input videos into several sequences, and (b) set the size of comics and which segment is important. By assigning the video segments to the panels, this system automatically generates dynamic comics.

Our system consists primarily of three components: the video editor, the comic layout editor, and the dynamic comic generation. In the process of video editing, we provide a simple interface to segment video sequences. In the process of comic layout, the system allows users to simply handle the shape of comic panels. And, in the process of comic generation, the system automatically resizes video segments and export dynamic comics. Please refer to the supplementary videoFootnote4 for more details.

<img src="/images/9-comic-3.png" alt="" style="width:100%;" />

<img src="/images/9-comic-4.png" alt="" style="width:100%;" />
