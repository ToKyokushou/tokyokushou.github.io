---
title: Interactive Drawing Interface for Aging Anime Face Sketches Using Transformer-Based Generative Model
pid: J06
category: journals
permalink: /publication/2024-01-anime-face-transformer
date: '2024-09-01'
authors: 'Sicheng&nbsp;Li, <strong>Xusheng&nbsp;Du</strong>, Haoran&nbsp;Xie, Kazunori&nbsp;Miyata'
venue: IEEE Access
venue_details: 'vol.&nbsp;12, pp.&nbsp;138751–&#8288;138762'
venue_short: IEEE Access 2024
thumb: /images/thumbs/5-animeface-1.jpg
doi: 10.1109/ACCESS.2024.3466230
abstract: Drawing anime characters with facial features of different ages is a challenging task. The characters’ facial features vary significantly with age, making it especially difficult for beginners to depict age-specific anime characters accurately. In this paper, we propose AgeFace, an interactive drawing interface designed to help users draw high-quality anime faces for characters of multiple age groups. AgeFace can provide a combination of local and global user guidance in the drawing process to enhance both detailed facial features and the overall aging features. Local guidance assists users in drawing detailed facial features, while global guidance provides hints for the overall layout of the face and additional features, such as wrinkles. During the local guidance stage, we apply an image retrieval approach to provide detailed instructions on facial features. In the global guidance stage, we propose the Transformer-based sequential generation model to create entire anime faces from drawn stroke sequences. The proposed framework of AgeFace combines a data-driven retrieval method and the generation model to provide users with inspiration during the drawing process. To verify the effectiveness of our guidance, we conducted user studies and comparison experiments with existing sketch generation models. The results demonstrated that AgeFace can significantly help users create multi-age anime faces and validate the effectiveness of our proposed generative model.
summary_ja: アニメ調の顔スケッチにおいて加齢による変化を描き分けるには熟練を要する。本研究では，Transformerベースの生成モデルを用いて入力された顔スケッチから加齢後のスケッチを生成し，利用者が対話的に描画・編集できるインタフェースを提案した。
excerpt: Drawing anime characters with facial features of different ages is a challenging task. The characters’ facial features vary significantly with age, making it especially difficult f
figures:
- src: /images/pubs/J06_fig02.jpg
  caption: 'FIGURE 2. Framework of the proposed AgeFace, which includes three parts: data construction, drawing guidance interface, and Transformer-based generation model.'
- src: /images/pubs/J06_fig03.jpg
  caption: FIGURE 3. Canvas and function area instructions.
- src: /images/pubs/J06_fig12.jpg
  caption: FIGURE 12. Drawing results from participants with different drawing skills. Each column displays sketches from the same participant.
- src: /images/pubs/J06_fig14.jpg
  caption: FIGURE 14. Generated results from the four models compared with the input sketches under the categories of male child and elderly male; for the sequential generation model, we used different colors to represent different strokes.
---
