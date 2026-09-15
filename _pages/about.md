---
layout: portfolio
permalink: /
title: "Xusheng Du — Generative AI & Spatial Design"
excerpt: "Research on controllable generative AI, sketch-based 3D modeling, and architectural design."
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<section id="top" class="hero" aria-labelledby="hero-title">
  <div class="hero__content">
    <p class="page-kicker"><span class="kicker-line" aria-hidden="true"></span> Generative AI · Visual &amp; spatial design</p>
    <h1 id="hero-title">Design with AI.<br><em>Keep the human<br>in control.</em></h1>
    <p class="hero__intro">I'm <strong>Xusheng Du</strong>, a researcher working at the intersection of generative AI, 3D modeling, and architectural design.</p>
    <p class="hero__description">I develop methods and interfaces that help people turn sketches and design intent into visual and spatial forms they can shape and refine.</p>
    <div class="hero__actions">
      <a class="button button--primary" href="#research">Explore my research <span aria-hidden="true">↓</span></a>
      <a class="text-link" href="{{ '/cv/' | relative_url }}">View CV <span aria-hidden="true">↗</span></a>
    </div>
    <p class="hero__credential">Ph.D. in Information Science <span aria-hidden="true">/</span> JAIST, 2026</p>
  </div>
<section class="research-carousel" aria-roledescription="carousel" aria-label="Research highlights">
<div class="carousel-heading"><span class="page-kicker">Research highlights</span><span class="carousel-status" aria-live="off">{% assign highlight_count = site.data.featured_projects | size %}01 / {% if highlight_count < 10 %}0{% endif %}{{ highlight_count }}</span></div>
<div class="carousel-stage">
{% for project in site.data.featured_projects %}
<article class="research-slide" aria-roledescription="slide" aria-label="{{ forloop.index }} of {{ forloop.length }}"{% unless forloop.first %} hidden aria-hidden="true"{% else %} aria-hidden="false"{% endunless %}>
<div class="research-slide__image"><img src="{{ project.image | relative_url }}" alt="{{ project.image_alt | escape }}"{% if forloop.first %} fetchpriority="high"{% else %} loading="lazy"{% endif %} decoding="async"></div>
<div class="research-slide__caption"><p class="research-slide__venue">{{ project.venue }}</p><h2><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h2><p>{{ project.method }}</p></div>
</article>
{% endfor %}
</div>
<div class="carousel-controls" hidden>
<div class="carousel-dots" role="group" aria-label="Choose a research highlight">
{% for project in site.data.featured_projects %}
<button class="carousel-dot" type="button" data-carousel-index="{{ forloop.index0 }}" aria-label="Show {{ project.title | escape }}" aria-pressed="{% if forloop.first %}true{% else %}false{% endif %}"><span aria-hidden="true">0{{ forloop.index }}</span></button>
{% endfor %}
</div>
<div class="carousel-actions"><button class="carousel-toggle" type="button" data-carousel-toggle>Pause autoplay</button><button class="carousel-arrow" type="button" data-carousel-prev aria-label="Previous research highlight">←</button><button class="carousel-arrow" type="button" data-carousel-next aria-label="Next research highlight">→</button></div>
</div>
<p class="carousel-announcement sr-only" role="status" aria-live="polite" aria-atomic="true"></p>
</section>
</section>

<section id="focus" class="research-intro section-block" aria-labelledby="research-intro-title">
<div class="section-heading"><div><p class="page-kicker"><span class="section-number">01</span> Research focus</p><h2 id="research-intro-title">Three questions that guide my work.</h2></div></div>
<div class="focus-grid">
<article class="focus-card"><span class="focus-card__index" aria-hidden="true">01 / CONTROL</span><h3>Follow design intent.</h3><p>How can generative models respond to sketches and design constraints, giving people more control over what they create?</p></article>
<article class="focus-card"><span class="focus-card__index" aria-hidden="true">02 / CONSISTENCY</span><h3>Keep the space coherent.</h3><p>How can generated forms preserve structure and appearance across different parts, representations, and viewpoints?</p></article>
<article class="focus-card"><span class="focus-card__index" aria-hidden="true">03 / INTERACTION</span><h3>Make refinement possible.</h3><p>How can people edit and assemble generated results through interfaces that support an iterative design process?</p></article>
</div>
</section>

<section id="research" class="selected-research section-block" aria-labelledby="research-title">
  <div class="section-heading"><div><p class="page-kicker"><span class="section-number">02</span> Selected work</p><h2 id="research-title">Selected research</h2></div><a class="text-link" href="{{ '/publications/' | relative_url }}">All publications <span aria-hidden="true">↗</span></a></div>
  <div class="project-list">
{% for project in site.data.featured_projects %}
<article class="project">
<div class="project__image"><img src="{{ project.image | relative_url }}" alt="{{ project.image_alt | escape }}" loading="lazy" decoding="async"></div>
<div class="project__content"><div class="project__meta"><span class="project__number">0{{ forloop.index }}</span><span>{{ project.area }}</span></div><h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3><p>{{ project.description }}</p><p class="project__method">{{ project.method }}</p><div class="project__bottom"><span class="project__venue">{{ project.venue }}</span><a class="text-link" href="{{ project.url | relative_url }}">Project details <span aria-hidden="true">↗</span></a></div></div>
</article>
{% endfor %}
  </div>
</section>

<section id="background" class="background-section section-block" aria-labelledby="background-title">
  <div><p class="page-kicker"><span class="section-number">03</span> Background</p><h2 id="background-title">Research grounded<br>in making.</h2><p>Before my graduate studies, I worked as a software engineer. That experience continues to shape how I approach research: connecting methods with interfaces that people can use.</p><a class="text-link" href="{{ '/cv/' | relative_url }}">Education &amp; experience <span aria-hidden="true">↗</span></a></div>
  <dl class="background-timeline"><div><dt>2023–2026</dt><dd><strong>Ph.D. in Information Science</strong><span>Japan Advanced Institute of Science and Technology</span></dd></div><div><dt>2021–2023</dt><dd><strong>Master's in Information Science</strong><span>Japan Advanced Institute of Science and Technology</span></dd></div><div><dt>2015–2019</dt><dd><strong>Software engineering</strong><span>Udesk · Gong Xiang Future</span></dd></div></dl>
</section>

<section id="contact" class="contact-section" aria-labelledby="contact-title"><div><p class="page-kicker"><span class="section-number">04</span> Get in touch</p><h2 id="contact-title">Let's talk about<br><em>what comes next.</em></h2><p>For research discussions, collaborations, and opportunities.</p></div><div class="contact-links"><a class="contact-email" href="mailto:{{ site.author.email }}">{{ site.author.email }} <span aria-hidden="true">↗</span></a><div><a href="https://github.com/ToKyokushou">GitHub ↗</a><a href="{{ site.author.orcid }}">ORCID ↗</a><a href="{{ '/talks/' | relative_url }}">Talks &amp; presentations ↗</a></div></div></section>
