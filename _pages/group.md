---
title: Group
description: Group Members
image: /images/NDPC.jpg
toggle: hideall
notitle: true
target: .collapse.people
---

{% for people in site.group reversed %}
        
<a name="{{group.title | slugify }}"></a>
<h2 class="header-switch-onhover" data-image="{{ group.image }}">
    <a class="plus-icon minus" data-toggle="collapse" data-target=".collapse.{{group.title | replace: ' ', '' | replace: '&', '' }}" data-text="Collapse">{{group.title}}</a>&nbsp;
    {% if forloop.first == true %}
    {% endif %}
</h2>

<div class="collapse group {{group.title | replace: ' ', '' | replace: '&', ''}} show header-switch-onscroll" data-image="{{group.image }}">
    {{ group.content | markdownify }}
</div>
{% endfor %}