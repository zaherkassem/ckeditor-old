﻿function Cleaner(){function e(){return CKEDITOR.instances.editor1.getData()}function g(a,b){Array.prototype.slice.call(b.attributes).forEach(function(b){a.setAttribute(b.name,b.value)})}function c(a,b){return function(d){var c=document.createElement(a);g(c,d);d.className+=d.className?" "+b:b;c.innerHTML=d.innerHTML;return c}}function f(a){Array.prototype.slice.call(a.children).forEach(function(b){f(b);var a=h[b.tagName.toLowerCase()];a&&(a=a(b),b.parentNode.replaceChild(a,b))});return a}var h={h1:c("p",
".style-for-h1"),h2:c("p",".style-for-h2"),h3:c("p",".style-for-h2"),h4:c("p",".style-for-h4"),h5:c("p",".style-for-h5"),h6:c("p",".style-for-h6"),address:c("p",".style-for-address"),pre:function(a){return a}};return{getData:e,parse:function(a){var a=a||e(),b=document.createElement("body");b.innerHTML=a;return f(b)}}}var cleaner=Cleaner();