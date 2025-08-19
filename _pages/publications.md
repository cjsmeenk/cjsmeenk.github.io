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

<!-- Calculate total articles and incollections for first counter -->
{% capture totalArticlesAndIncollections %}
{% bibliography_count -q @article[kind!=short] %}{% bibliography_count -q @incollection[kind!=short] %}
{% endcapture %}
{% assign totalCount = totalArticlesAndIncollections | plus: 0 %}

<!-- Calculate just articles for second counter -->
{% capture numArticles %}
{% bibliography_count -q @article[kind!=short] %}
{% endcapture %}
{% assign articleCount = numArticles | plus: 0 %}

<p></p>
<h2 class="bibliography" style="counter-reset:bibitem {{totalCount|plus:1}}">
	<a class="plus-icon minus" data-toggle="collapse"  data-target=".collapse.articles" data-text="Collapse">Articles</a></h2>

<div class="articles collapse show">
{% bibliography -q @article[kind!=short] --template bib_item_publication %}
</div>

<p></p>
<h2 class="bibliography" style="counter-reset:bibitem {{articleCount|plus:1}}">
	<a class="plus-icon minus" data-toggle="collapse"  data-target=".collapse.incollections" data-text="Collapse">In Collections</a></h2>

<div class="incollections collapse show">
{% bibliography -q @incollection[kind!=short] --template bib_item_publication %}
</div>



<p></p>
<h2 class="bibliography">
	<a class="plus-icon minus" data-toggle="collapse"  data-target=".collapse.wip" data-text="Collapse">Works in Progress</a></h2>

<div class="nolisting collapse wip show">
{% bibliography -q @unpublished --template bib_item_publication_unpublished %}
</div>

<p></p>
<h2 class="bibliography">
	<a class="plus-icon minus" data-toggle="collapse"  data-target=".collapse.phd" data-text="Collapse">Thesis</a></h2>

<div class="nolisting collapse phd show">
{% bibliography -q @phdthesis --template bib_item_publication_unpublished %}
</div>

<p></p>
<h2 class="bibliography">
	<a class="plus-icon minus" data-toggle="collapse"  data-target=".collapse.shortarticles" data-text="Collapse">Reviews and other Contributions</a></h2>

<div class="nolisting collapse shortarticles show">
{% bibliography -q @article[kind=short] @incollection[kind=short] --template bib_item_publication_short %}
</div>

