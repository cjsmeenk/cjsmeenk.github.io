---
title: Group
description: Group Members
image: /images/NDPC.jpg
toggle: hideall
notitle: true
target: .collapse.group
---

<p><h2>
	<a class="plus-icon minus" data-toggle="collapse"  data-target=".collapse.group" data-text="Collapse">Current Group Members</a>&nbsp;
</h2></p>


{% for group in site.group reversed %}

<p> <a name="{{group.title | slugify }}"></a>
<h6>
    <a class="header-switch-onhover" data-toggle="collapse" data-target=".collapse.{{group.title | replace: ' ', '' | replace: '&', '' }}" data-text="Collapse">{{group.title}}</a>
</h6>

<div class="collapse group {{group.title | replace: ' ', '' | replace: '&', ''}} show" data-image=" {{group.image }}">
    <table style="border: none;">
        <tr>
            <td style="width: 70%; border: none; font-size: 0.6em;">
                {{ group.content | markdownify }}
            </td>
            <td style="width: 30%; border: none;">
                <img src="{{ group.image }}" alt="{{ group.title }}">
            </td>
        </tr>
    </table>
</div>

{% endfor %}

<p><h2>
	<a class="plus-icon minus" data-toggle="collapse"  data-target=".collapse.alumni" data-text="Collapse">Recent Alumni</a>&nbsp;
</h2></p>

<p>(See CV for a complete list of former postdocs and PhD students.)</p>
{% for alumni in site.alumni reversed %}

<p> <a name="{{alumni.title | slugify }}"></a>
<h6>
    <a class="header-switch-onhover" data-toggle="collapse" data-target=".collapse.{{alumni.title | replace: ' ', '' | replace: '&', '' }}" data-text="Collapse">{{alumni.title}}</a>
</h6>

<div class="collapse alumni {{alumni.title | replace: ' ', '' | replace: '&', ''}} show" data-image=" {{alumni.image }}">
    <table style="border: none;">
        <tr>
            <td style="width: 70%; border: none; font-size: 0.6em;">
                {{ alumni.content | markdownify }}
            </td>
            <td style="width: 30%; border: none;">
                <img src="{{ alumni.image }}" alt="{{ alumni.title }}">
            </td>
        </tr>
    </table>
</div>

{% endfor %}
