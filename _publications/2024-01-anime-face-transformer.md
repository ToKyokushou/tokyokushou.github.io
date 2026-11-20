---
title: "Interactive Drawing Interface for Aging Anime Face Sketches Using Transformer-Based Generative Model"
index: 2
collection: publications
category: manuscripts
permalink: /publication/2024-01-anime-face-transformer
excerpt: 'A transformer-based generative framework for aging anime-style face sketches.'
date: 2024-01-01
venue: 'IEEE Access'
citation: 'Sicheng Li, **Xusheng Du**, Haoran Xie, Kazunori Miyata.'
thumbnail: /images/5-animeface-1.png
venue_short: "IEEE Access 2024"
selected: 4
thumb: /images/thumbs/5-animeface-1.jpg
---
<img src="/images/5-animeface-1.png" alt="" style="width:100%;" />

**Abstract:**

Drawing anime characters with facial features of different ages is a challenging task. The
characters’ facial features vary significantly with age, making it especially difficult for beginners to depict
age-specific anime characters accurately. In this paper, we propose AgeFace, an interactive drawing interface
designed to help users draw high-quality anime faces for characters of multiple age groups. AgeFace can
provide a combination of local and global user guidance in the drawing process to enhance both detailed facial
features and the overall aging features. Local guidance assists users in drawing detailed facial features, while
global guidance provides hints for the overall layout of the face and additional features, such as wrinkles.
During the local guidance stage, we apply an image retrieval approach to provide detailed instructions on
facial features. In the global guidance stage, we propose the Transformer-based sequential generation model
to create entire anime faces from drawn stroke sequences. The proposed framework of AgeFace combines a
data-driven retrieval method and the generation model to provide users with inspiration during the drawing
process. To verify the effectiveness of our guidance, we conducted user studies and comparison experiments
with existing sketch generation models. The results demonstrated that AgeFace can significantly help users
create multi-age anime faces and validate the effectiveness of our proposed generative model.

<img src="/images/5-animeface-2.png" alt="" style="width:100%;" />

**Framework:**

In this section, we introduce AgeFace, our proposed drawing
support system designed to assist users in creating anime
faces of multiple ages. The system combines retrieval
and generative methods to offer both local and global
guidance, effectively enhancing users’ drawing experiences
and maintaining their original design intents. We explain the
UI, dataset construction, generation model, and integration of
shadow guidance to demonstrate the system’s functionality
and effectiveness.

<img src="/images/5-animeface-3.png" alt="" style="width:100%;" />

<img src="/images/5-animeface-4.png" alt="" style="width:100%;" />

<img src="/images/5-animeface-5.png" alt="" style="width:100%;" />

