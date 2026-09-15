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
  <figure class="hero__portrait">
    <div class="portrait-frame"><img src="{{ '/images/self3.png' | relative_url }}" alt="Xusheng Du in Tokyo, with the Tokyo Skytree in the background." width="1292" height="920" fetchpriority="high"></div>
    <figcaption><span>Xusheng Du <span lang="zh">杜旭升</span></span><span class="portrait-caption">Generative AI · Spatial design</span></figcaption>
  </figure>
</section>

<section class="research-intro" aria-labelledby="research-intro-title">
  <p class="page-kicker">Research focus</p>
  <div><h2 id="research-intro-title">From a sketch to a shape.<br>From a shape to a space.</h2><p>My work connects sketch-based interaction with generative modeling. Across objects and buildings, I explore how AI can follow design intent while keeping results coherent and editable.</p></div>
  <div class="research-themes" aria-label="Research themes"><span>Controllable generation</span><span>Spatial consistency</span><span>Interactive design</span></div>
</section>

<section id="research" class="selected-research" aria-labelledby="research-title">
  <div class="section-heading"><div><p class="page-kicker">Selected work</p><h2 id="research-title">Research in practice</h2></div><a class="text-link" href="{{ '/publications/' | relative_url }}">All publications <span aria-hidden="true">↗</span></a></div>
  <div class="project-list">
{% for project in site.data.featured_projects %}
<article class="project">
<div class="project__image"><img src="{{ project.image | relative_url }}" alt="{{ project.image_alt | escape }}" loading="lazy" decoding="async"></div>
<div class="project__content"><div class="project__meta"><span class="project__number">0{{ forloop.index }}</span><span>{{ project.area }}</span></div><h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3><p>{{ project.description }}</p><p class="project__method">{{ project.method }}</p><div class="project__bottom"><span class="project__venue">{{ project.venue }}</span><a class="text-link" href="{{ project.url | relative_url }}">Project details <span aria-hidden="true">↗</span></a></div></div>
</article>
{% endfor %}
  </div>
</section>

<section class="background-section" aria-labelledby="background-title">
  <div><p class="page-kicker">Background</p><h2 id="background-title">Research grounded<br>in making.</h2><p>Before my graduate studies, I worked as a software engineer. That experience continues to shape how I approach research: connecting methods with interfaces that people can use.</p><a class="text-link" href="{{ '/cv/' | relative_url }}">Education &amp; experience <span aria-hidden="true">↗</span></a></div>
  <dl class="background-timeline"><div><dt>2023–2026</dt><dd><strong>Ph.D. in Information Science</strong><span>Japan Advanced Institute of Science and Technology</span></dd></div><div><dt>2021–2023</dt><dd><strong>Master's in Information Science</strong><span>Japan Advanced Institute of Science and Technology</span></dd></div><div><dt>2015–2019</dt><dd><strong>Software engineering</strong><span>Udesk · Gong Xiang Future</span></dd></div></dl>
</section>

<section id="contact" class="contact-section" aria-labelledby="contact-title"><div><p class="page-kicker">Get in touch</p><h2 id="contact-title">Let's talk about<br><em>what comes next.</em></h2><p>For research discussions, collaborations, and opportunities.</p></div><div class="contact-links"><a class="contact-email" href="mailto:{{ site.author.email }}">{{ site.author.email }} <span aria-hidden="true">↗</span></a><div><a href="https://github.com/ToKyokushou">GitHub ↗</a><a href="{{ site.author.orcid }}">ORCID ↗</a><a href="{{ '/talks/' | relative_url }}">Talks &amp; presentations ↗</a></div></div></section>
