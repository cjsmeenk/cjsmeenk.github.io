---
title: Publications
description: Chris Smeenk - Publications
image: /images/beinecke.jpg
notitle: true
toggle: hideall
target: .collapse.citation, .collapse.abstract, .collapse.bibtex, .collapse.fullentry
---

{% capture numItems %}
{% bibliography_count -q @book %}
{% endcapture %}
 
<h2 class="bibliography" style="counter-reset:bibitem {{numItems|plus:1}}">
	<a class="plus-icon minus" data-toggle="collapse"  data-target=".collapse.editedbooks" data-text="Collapse">Edited Books</a>&nbsp;
</h2>

<div class="collapse editedbooks show">
{% bibliography -q @book --template bib_item_publication --limit 0 %}
</div>

{% capture numItems %}
{% bibliography_count -q @article[kind!=short] @incollection[kind!=short] %}
{% endcapture %}

<p></p>
<h2 class="bibliography" style="counter-reset:bibitem {{numItems|plus:1}}">
	<a class="plus-icon minus" data-toggle="collapse"  data-target=".collapse.articles" data-text="Collapse">Articles</a></h2>

<div class="articles collapse show">
{% bibliography --query @article[kind!=short] @incollection[kind!=short] --template bib_item_publication }
</div>

<p></p>
<h2 class="bibliography">
	<a class="plus-icon minus" data-toggle="collapse"  data-target=".collapse.wip" data-text="Collapse">Works in Progress</a></h2>

<div class="nolisting collapse wip show">
{% bibliography -q @unpublished }
</div>

<p></p>
<h2 class="bibliography">
	<a class="plus-icon minus" data-toggle="collapse"  data-target=".collapse.phd" data-text="Collapse">Thesis</a></h2>

<div class="nolisting collapse phd show">
{% bibliography -q @phdthesis --template bib_item_publication_unpublished --limit 0 %}
</div>

<p></p>
<h2 class="bibliography">
	<a class="plus-icon minus" data-toggle="collapse"  data-target=".collapse.shortarticles" data-text="Collapse">Reviews and other Contributions</a></h2>

<div class="nolisting collapse shortarticles show">
{% bibliography -q @article[kind=short] @incollection[kind=short] --template bib_item_publication_short --limit 0 %}
</div>

<h3>Test 1: All entries</h3>
{% bibliography %}

<!-- Test 2: Just articles -->
<h3>Test 2: Just articles</h3>
{% bibliography -q @article %}

<!-- Test 3: Just incollections -->
<h3>Test 3: Just incollections</h3>
{% bibliography -q @incollection %}

<!-- Debug: Check if bibliography is loaded -->
<p>Total bibliography entries loaded: {{ site.bibliography.size }}</p>
<p>Bibliography source path: {{ site.data }}</p>

<!-- List first 5 entries to see what's loaded -->
{% for bib in site.bibliography limit:5 %}
  <li>{{ bib.key }} - {{ bib.type }} - {{ bib.kind }}</li>
{% endfor %}

