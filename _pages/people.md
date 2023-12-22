---
title: People
description: Group Members
image: /images/NDPC.jpg
toggle: hideall
notitle: true
target: .collapse.people
---

{% for people in site.people reversed %}
        
<a name="{{people.title | slugify }}"></a>
<h2 class="header-switch-onhover" data-image="{{ people.image }}">
    <a class="plus-icon minus" data-toggle="collapse" data-target=".collapse.{{people.title | replace: ' ', '' | replace: '&', '' }}" data-text="Collapse">{{people.title}}</a>&nbsp;
    {% if forloop.first == true %}
    {% endif %}
</h2>

<div class="collapse people {{people.title | replace: ' ', '' | replace: '&', ''}} show header-switch-onscroll" data-image="{{people.image }}">
    {{ people.content | markdownify }}
</div>
{% endfor %}