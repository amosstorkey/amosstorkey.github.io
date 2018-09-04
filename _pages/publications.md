---
layout: page
permalink: /publications/
title: publications


---

<div>
 
<ul>
  
    {% assign sorted_pubs = site.data.publications | sort: "year" | reverse %}
    {% for pub in  sorted_pubs %}
        {% assign id = pub.title | append: '-' | append: pub.published | slugify  %} 

    <li>   
         
                <a class='publication-title'  href="{{ pub.url }}">

                  {{ pub.title }}

                </a>

	    <p class='publication-authors'>
                    {{ pub.authors | join: ', ' }} 
                <br>
       <small>         {{ pub.published }}, {{ pub.year }}</small>
       
     </p>

           
          
        
      
    </li>
   
    {% endfor %}

</ul>
</div>






