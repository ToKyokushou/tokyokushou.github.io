---
title: Sketch-Guided Scene Image Generation with Diffusion Model
pid: J04
category: journals
permalink: /publication/2025-01-sketch-guided-diffusion
date: '2025-06-01'
authors: Tianyu Zhang, Xiaoxuan Xie, <strong>Xusheng Du</strong>, Haoran Xie*
venue: Computers & Graphics
venue_details: vol. 129, Article 104226
venue_short: C&G 2025
thumb: /images/thumbs/12-sg-1.jpg
doi: 10.1016/j.cag.2025.104226
arxiv: https://arxiv.org/abs/2407.06469
abstract: Text-to-image models showcase the impressive ability to generate high-quality and diverse images. However, the transition from freehand sketches to complex scene images with multiple objects remains challenging in computer graphics. In this study, we propose a novel sketch-guided scene image generation framework, decomposing the task of scene image generation from sketch inputs into object-level cross-domain generation and scene-level image construction steps. We first employ a pre-trained diffusion model to convert each single object drawing into a separate image, which can infer additional image details while maintaining the sparse sketch structure. To preserve the conceptual fidelity of the foreground during scene generation, we invert the visual features of object images into identity embeddings for scene generation. For scene-level image construction, we generate the latent representation of the scene image using the separated background prompts. Then, we blend the generated foreground objects with the background image guided by the layout of sketch inputs. We infer the scene image on the blended latent representation using a global prompt with the trained identity tokens to ensure the foreground objects’ details remain unchanged while naturally composing the scene image. Through qualitative and quantitative experiments, we demonstrated that the proposed method’s ability surpasses the state-of-the-art approaches for scene image generation from hand-drawn sketches.
summary_ja: 拡散モデルを用いて，利用者の手描きスケッチから複数の物体を含むシーン画像を生成する手法を提案し，スケッチの構造を保持した写実的なシーン画像の生成を可能にした。
excerpt: Text-to-image models showcase the impressive ability to generate high-quality and diverse images. However, the transition from freehand sketches to complex scene images with multip
figures:
- src: /images/pubs/J04_fig01.jpg
  caption: Fig. 1. We present a cross-domain image generation method from scene sketches to images. The results demonstrate that our method can generate complete semantic foreground and background, maintaining consistency with the input sketches at the semantic level.
- src: /images/pubs/J04_fig03.jpg
  caption: 'Fig. 3. The proposed sketch-guided scene image generation framework consists of two main subtasks: object-level generation and scene-level construction. (1) Object-level generation: individual object sketches are annotated, separated, and generated using ControlNet [5] with Masked Diffusion Loss [24] which is employed to encode unique identity embeddings during training. (2) Scene-level constructi…'
- src: /images/pubs/J04_fig06.jpg
  caption: Fig. 6. Qualitative comparison results between our method and ControlNet [5], T2I-Adapter [13] and FineControlNet [14]. Our method can generate objects following the sketch guidance and the background images based on prompts.
---
