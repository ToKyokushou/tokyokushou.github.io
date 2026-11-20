---
title: "DualSlide: Global-to-Local Sketching Interface for Slides Content and Layout Design"
index: 15
collection: publications
category: conferences
permalink: /publication/2023-06-dualslide
excerpt: 'A sketch-based design interface for creating slide content and layouts from global to local levels.'
date: 2023-06-01
venue: 'NICOGRAPH International 2023, Hokkaido, Japan'
citation: 'Jiahao Weng, **Xusheng Du** and Haoran Xie.'
thumbnail: /images/3-dualslide-1.png
venue_short: "NICOGRAPH Int'l 2023"
thumb: /images/thumbs/3-dualslide-1.jpg
---

<img src="/images/3-dualslide-1.png" alt="" style="width:100%;" />

**Abstract:**

Online learning and academic conferences have become pervasive and essential for education and professional development, especially since the onset of pandemics. Academic presentations usually require well-designed slides that are easily understood. Sketches that visually represent design intentions and are readily accessible to the average users. To assist non-expert users in creating visually appealing academic slides, we propose DualSlide, a global and local two-stage sketching interface system that provides image retrieval and user guidance. At the global stage, DualSlide provides a heat map canvas to display the distribution of all slide layouts in a dataset, allowing users to explore the reference slides efficiently. At the local stage of the system, detailed references and guidance for designing slide content, such as diagrams and fonts, can be provided. We further propose a sketch-matching algorithm to compare the user’s input sketch and similar diagrams. All user guidance can be adapted in real-time editing, and users can design slides with a high degree of freedom. We conducted a user study to verify the effectiveness and usability of the proposed DualSlide system confirming that DualSlide provides high retrieval accuracy and satisfactory design results with a good user experience.

<img src="/images/3-dualslide-2.png" alt="" style="width:100%;" />

**Framework:**

DualSlide provides both global and local design stages for slide design. The proposed system consists of three parts: a preprocessing procedure for slide extraction; a database, which contains slide layout features and diagrams extracted from each slide, and a user interface (see Fig. 2). To construct the database, we first extracted slides from academic conference presentation videos. We then used a layout parser to analyze and label the layout of each slide. After that, we used a convolutional neural network (CNN) to extract the features of the labeled slides and store them in the database. Additionally, we trained another neural network to recognize the font in the slides, and we improve the image similarity algorithm to implement the slide retrieval function. The user interface has three sections: the sketch canvas for user editing, the heat map canvas for design guidance, and the results section for displaying similar slides.

<img src="/images/3-dualslide-3.png" alt="" style="width:100%;" />

<img src="/images/3-dualslide-4.png" alt="" style="width:100%;" />
