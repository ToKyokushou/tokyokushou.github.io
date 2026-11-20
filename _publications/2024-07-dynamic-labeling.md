---
title: "Dynamic Labeling: A Control System for Labeling Styles in Image Annotation Tasks"
index: 13
collection: publications
category: conferences
permalink: /publication/2024-07-dynamic-labeling
excerpt: 'A control system for dynamically adapting labeling styles in image annotation workflows.'
date: 2024-07-01
venue: '26th International Conference on Human-Computer Interaction (HCI INTERNATIONAL 2024), Washington, USA'
citation: 'Chia-Ming Chang, Yi He, **Xusheng Du**, Xi Yang, Haoran Xie.'
thumbnail: /images/8-label-3.png
venue_short: "HCII 2024"
thumb: /images/thumbs/8-label-3.jpg
---
<img src="/images/8-label-1.png" alt="" style="width:100%;" />

**Abstract:**

Labeling style affects labeling efficiency and quality in image annotation tasks. For example, a “label quickly” style can increase labeling efficiency when the data are easy, and a “label carefully” style can increase label quali-ty when the data are difficult. However, the selection of an appropriate la-beling style is difficult as different annotators have different experiences and domain knowledge, affecting their subjective feelings of data difficul-ties (for example, User 1 feels Data A to be easy, while User 2 feels it diffi-cult). In this paper, we propose “Dynamic Labeling” as a control system for labeling styles used in image-labeling tasks. Our control system analyzes the labeling behaviors of annotators (i.e., label selection time) and dynami-cally assigns an appropriate labeling style (label quickly or label carefully). We conducted a user study to compare a conventional “non-dynamic” and the proposed “dynamic” labeling approaches for an image-labeling task. The results suggest that Dynamic Labeling increased the label quality and label-ing efficiency.

**Framework:**

<img src="/images/8-label-2.png" alt="" style="width:100%;" />

The overall average time and the label average time dynamically changed throughout the entire process based on the time spent by the annotator on each image-labeling task. The overall average time is used as the baseline to define the “difficult” and “easy” label categories. A label is classified as “difficult” if the label average time is longer than the overall average time and “easy” if the label average time is shorter than the overall average time. The system then dynamically assigns an appropriate labeling style to the annotator, as shown in Fig. 2.

<img src="/images/8-label-3.png" alt="" style="width:100%;" />
