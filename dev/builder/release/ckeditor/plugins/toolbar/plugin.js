﻿/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.

 For licensing, see LICENSE.md or http://ckeditor.com/license

*/
(function(){function w(a){function d(){for(var b=g(),e=CKEDITOR.tools.clone(a.config.toolbarGroups)||n(a),f=0;f<e.length;f++){var k=e[f];if("/"!=k){"string"==typeof k&&(k=e[f]={name:k});var i,d=k.groups;if(d)for(var h=0;h<d.length;h++)i=d[h],(i=b[i])&&c(k,i);(i=b[k.name])&&c(k,i)}}return e}function g(){var b={},c,f,e;for(c in a.ui.items)f=a.ui.items[c],e=f.toolbar||"others",e=e.split(","),f=e[0],e=parseInt(e[1]||-1,10),b[f]||(b[f]=[]),b[f].push({name:c,order:e});for(f in b)b[f]=b[f].sort(function(b,
a){return b.order==a.order?0:0>a.order?-1:0>b.order?1:b.order<a.order?-1:1});return b}function c(c,e){if(e.length){c.items?c.items.push(a.ui.create("-")):c.items=[];for(var f;f=e.shift();)if(f="string"==typeof f?f:f.name,!b||-1==CKEDITOR.tools.indexOf(b,f))(f=a.ui.create(f))&&a.addFeature(f)&&c.items.push(f)}}function h(b){var a=[],e,d,h;for(e=0;e<b.length;++e)d=b[e],h={},"/"==d?a.push(d):CKEDITOR.tools.isArray(d)?(c(h,CKEDITOR.tools.clone(d)),a.push(h)):d.items&&(c(h,CKEDITOR.tools.clone(d.items)),
h.name=d.name,a.push(h));return a}var b=a.config.removeButtons,b=b&&b.split(","),e=a.config.toolbar;"string"==typeof e&&(e=a.config["toolbar_"+e]);return a.toolbar=e?h(e):d()}function n(a){return a._.toolbarGroups||(a._.toolbarGroups=[{name:"document",groups:["mode","document","doctools"]},{name:"clipboard",groups:["clipboard","undo"]},{name:"editing",groups:["find","selection","spellchecker"]},{name:"forms"},"/",{name:"basicstyles",groups:["basicstyles","cleanup"]},{name:"paragraph",groups:["list",
"indent","blocks","align","bidi"]},{name:"links"},{name:"insert"},"/",{name:"styles"},{name:"colors"},{name:"tools"},{name:"others"},{name:"about"}])}var u=function(){this.toolbars=[];this.focusCommandExecuted=!1};u.prototype.focus=function(){for(var a=0,d;d=this.toolbars[a++];)for(var g=0,c;c=d.items[g++];)if(c.focus){c.focus();return}};var x={modes:{wysiwyg:1,source:1},readOnly:1,exec:function(a){a.toolbox&&(a.toolbox.focusCommandExecuted=!0,CKEDITOR.env.ie||CKEDITOR.env.air?setTimeout(function(){a.toolbox.focus()},
100):a.toolbox.focus())}};CKEDITOR.plugins.add("toolbar",{requires:"button",lang:"en",init:function(a){var d,g=function(c,h){var b,e="rtl"==a.lang.dir,j=a.config.toolbarGroupCycling,o=e?37:39,e=e?39:37,j=void 0===j||j;switch(h){case 9:case CKEDITOR.SHIFT+9:for(;!b||!b.items.length;)if(b=9==h?(b?b.next:c.toolbar.next)||a.toolbox.toolbars[0]:(b?b.previous:c.toolbar.previous)||a.toolbox.toolbars[a.toolbox.toolbars.length-1],b.items.length)for(c=b.items[d?b.items.length-1:0];c&&!c.focus;)(c=d?c.previous:
c.next)||(b=0);c&&c.focus();return!1;case o:b=c;do b=b.next,!b&&j&&(b=c.toolbar.items[0]);while(b&&!b.focus);b?b.focus():g(c,9);return!1;case 40:return c.button&&c.button.hasArrow?(a.once("panelShow",function(b){b.data._.panel._.currentBlock.onKeyDown(40)}),c.execute()):g(c,40==h?o:e),!1;case e:case 38:b=c;do b=b.previous,!b&&j&&(b=c.toolbar.items[c.toolbar.items.length-1]);while(b&&!b.focus);b?b.focus():(d=1,g(c,CKEDITOR.SHIFT+9),d=0);return!1;case 27:return a.focus(),!1;case 13:case 32:return c.execute(),
!1}return!0};a.on("uiSpace",function(c){if(c.data.space==a.config.toolbarLocation){c.removeListener();a.toolbox=new u;var d=CKEDITOR.tools.getNextId(),b=['<span id="',d,'" class="cke_voice_label">',a.lang.toolbar.toolbars,"</span>",'<span id="'+a.ui.spaceId("toolbox")+'" class="cke_toolbox" role="group" aria-labelledby="',d,'" onmousedown="return false;">'],d=!1!==a.config.toolbarStartupExpanded,e,j;a.config.toolbarCanCollapse&&a.elementMode!=CKEDITOR.ELEMENT_MODE_INLINE&&b.push('<span class="cke_toolbox_main"'+
(d?">":' style="display:none">'));for(var o=a.toolbox.toolbars,f=w(a),k=0;k<f.length;k++){var i,l=0,r,m=f[k],s;if(m)if(e&&(b.push("</span>"),j=e=0),"/"===m)b.push('<span class="cke_toolbar_break"></span>');else{s=m.items||m;for(var t=0;t<s.length;t++){var p=s[t],n;if(p)if(p.type==CKEDITOR.UI_SEPARATOR)j=e&&p;else{n=!1!==p.canGroup;if(!l){i=CKEDITOR.tools.getNextId();l={id:i,items:[]};r=m.name&&(a.lang.toolbar.toolbarGroups[m.name]||m.name);b.push('<span id="',i,'" class="cke_toolbar"',r?' aria-labelledby="'+
i+'_label"':"",' role="toolbar">');r&&b.push('<span id="',i,'_label" class="cke_voice_label">',r,"</span>");b.push('<span class="cke_toolbar_start"></span>');var q=o.push(l)-1;0<q&&(l.previous=o[q-1],l.previous.next=l)}n?e||(b.push('<span class="cke_toolgroup" role="presentation">'),e=1):e&&(b.push("</span>"),e=0);i=function(c){c=c.render(a,b);q=l.items.push(c)-1;if(q>0){c.previous=l.items[q-1];c.previous.next=c}c.toolbar=l;c.onkey=g;c.onfocus=function(){a.toolbox.focusCommandExecuted||a.focus()}};
j&&(i(j),j=0);i(p)}}e&&(b.push("</span>"),j=e=0);l&&b.push('<span class="cke_toolbar_end"></span></span>')}}a.config.toolbarCanCollapse&&b.push("</span>");if(a.config.toolbarCanCollapse&&a.elementMode!=CKEDITOR.ELEMENT_MODE_INLINE){var v=CKEDITOR.tools.addFunction(function(){a.execCommand("toolbarCollapse")});a.on("destroy",function(){CKEDITOR.tools.removeFunction(v)});a.addCommand("toolbarCollapse",{readOnly:1,exec:function(b){var a=b.ui.space("toolbar_collapser"),c=a.getPrevious(),e=b.ui.space("contents"),
d=c.getParent(),f=parseInt(e.$.style.height,10),h=d.$.offsetHeight,g=a.hasClass("cke_toolbox_collapser_min");g?(c.show(),a.removeClass("cke_toolbox_collapser_min"),a.setAttribute("title",b.lang.toolbar.toolbarCollapse)):(c.hide(),a.addClass("cke_toolbox_collapser_min"),a.setAttribute("title",b.lang.toolbar.toolbarExpand));a.getFirst().setText(g?"▲":"◀");e.setStyle("height",f-(d.$.offsetHeight-h)+"px");b.fire("resize",{outerHeight:b.container.$.offsetHeight,contentsHeight:e.$.offsetHeight,outerWidth:b.container.$.offsetWidth})},
modes:{wysiwyg:1,source:1}});a.setKeystroke(CKEDITOR.ALT+(CKEDITOR.env.ie||CKEDITOR.env.webkit?189:109),"toolbarCollapse");b.push('<a title="'+(d?a.lang.toolbar.toolbarCollapse:a.lang.toolbar.toolbarExpand)+'" id="'+a.ui.spaceId("toolbar_collapser")+'" tabIndex="-1" class="cke_toolbox_collapser');d||b.push(" cke_toolbox_collapser_min");b.push('" onclick="CKEDITOR.tools.callFunction('+v+')">','<span class="cke_arrow">&#9650;</span>',"</a>")}b.push("</span>");c.data.html+=b.join("")}});a.on("destroy",
function(){if(this.toolbox){var a,d=0,b,e,g;for(a=this.toolbox.toolbars;d<a.length;d++){e=a[d].items;for(b=0;b<e.length;b++)g=e[b],g.clickFn&&CKEDITOR.tools.removeFunction(g.clickFn),g.keyDownFn&&CKEDITOR.tools.removeFunction(g.keyDownFn)}}});a.on("uiReady",function(){var c=a.ui.space("toolbox");c&&a.focusManager.add(c,1)});a.addCommand("toolbarFocus",x);a.setKeystroke(CKEDITOR.ALT+121,"toolbarFocus");a.ui.add("-",CKEDITOR.UI_SEPARATOR,{});a.ui.addHandler(CKEDITOR.UI_SEPARATOR,{create:function(){return{render:function(a,
d){d.push('<span class="cke_toolbar_separator" role="separator"></span>');return{}}}}})}});CKEDITOR.ui.prototype.addToolbarGroup=function(a,d,g){var c=n(this.editor),h=0===d,b={name:a};if(g){if(g=CKEDITOR.tools.search(c,function(a){return a.name==g})){!g.groups&&(g.groups=[]);if(d&&(d=CKEDITOR.tools.indexOf(g.groups,d),0<=d)){g.groups.splice(d+1,0,a);return}h?g.groups.splice(0,0,a):g.groups.push(a);return}d=null}d&&(d=CKEDITOR.tools.indexOf(c,function(a){return a.name==d}));h?c.splice(0,0,a):"number"==
typeof d?c.splice(d+1,0,b):c.push(a)}})();CKEDITOR.UI_SEPARATOR="separator";CKEDITOR.config.toolbarLocation="top";