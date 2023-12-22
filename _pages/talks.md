---
title: Talks
description: Chris Smeenk - Talks
image: /images/WIRB2.jpeg
notitle: true
toggle: hideall
target: .collapse.citation, .collapse.abstract, .collapse.bibtex, .collapse.fullentry
---

{% capture numItems %}
{% bibliography_count --file talks.bib -q @unpublished[Eventtitle!=""] -q @unpublished %}
{% endcapture %}

<p></p>
<h2 class="bibliography" style="counter-reset:bibitem {{numItems|plus:1}}">
	<a class="plus-icon minus" data-toggle="collapse"  data-target=".collapse.talks" data-text="Collapse">Academic Talks (selected)</a></h2>

<p>(See CV for a complete list of talks and presentations.)<br><br></p>


<div class="nolisting collapse talks show">
{% bibliography --file talks.bib -q @unpublished[Eventtitle!=""] --query @unpublished[kind!=public, selected=true] --template bib_item_talk %}
</div>

<p></p>
<h2 class="bibliography">
	<a class="plus-icon minus" data-toggle="collapse"  data-target=".collapse.public" data-text="Collapse">Public Talks (selected)</a></h2>

<div class="nolisting public collapse show">
{% bibliography --file talks.bib -q @unpublished[kind=public, selected=true] --template bib_item_talk %}
</div>

