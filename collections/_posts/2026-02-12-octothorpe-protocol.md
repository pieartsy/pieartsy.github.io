---
title: Octothorpes!
date: 2026-2-12
category: meta
layout: posts
octothorpe: [blog]
---
I just joined [Octothorpes](https://octothorp.es/), which is a server (not like a Discord server) for the Octothorpe Protocol. It basically connects my blogposts with other websites which are part of the Octothorpes server. It's sort of like a more flexible webring, sort of like social media hashtags but for any site you build, and sort of its own unique thing! It's simple to use and seems really cool.
<!--more-->
[The quickstart is here](https://docs.octothorp.es/quickstart/), though if you're a Neocities person, you should look at this [Neocities security fix article](https://docs.octothorp.es/blog/neocities-fix/?text=neocities) on how to make the protocol work with that.

I personally was having trouble with styling the web component because it uses the shadow DOM (oOoOo scary...), so I just copied the [tag.js file from the Octothorp.es website](https://octothorp.es/tag.js) and modified it directly. This means that I had to change the script for the [webcomponent](https://docs.octothorp.es/quickstart/#fancy-web-component-method) to this:
```html
<script
async=""
defer=""
type="module"
data-register="https://octothorp.es/"
src="https://asterfialla.com/assets/js/tag.js"></script>
```

Other than that it works really well! You should try it out...I'd love to have more people join and use the `interactive-fiction` tag for instance, hehehe.