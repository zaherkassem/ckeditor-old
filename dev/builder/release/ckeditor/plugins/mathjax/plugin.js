﻿/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.

 For licensing, see LICENSE.md or http://ckeditor.com/license

*/
(function(){CKEDITOR.plugins.add("mathjax",{lang:"en",requires:"widget,dialog",icons:"mathjax",hidpi:!0,init:function(b){var c=b.config.mathJaxClass||"math-tex";!b.config.mathJaxLib&&(window.console&&window.console.log)&&window.console.log("Error: config.mathJaxLib property is not set. For more information visit: ","http://docs.ckeditor.com/#!/api/CKEDITOR.config-cfg-mathJaxLib");b.widgets.add("mathjax",{inline:!0,dialog:"mathjax",button:b.lang.mathjax.button,mask:!0,allowedContent:"span(!"+c+")",
styleToAllowedContentRules:function(a){a=a.getClassesArray();if(!a)return null;a.push("!"+c);return"span("+a.join(",")+")"},pathName:b.lang.mathjax.pathName,template:'<span class="'+c+'" style="display:inline-block" data-cke-survive=1></span>',parts:{span:"span"},defaults:{math:"\\(x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}\\)"},init:function(){var a=this.parts.span.getChild(0);if(!a||a.type!=CKEDITOR.NODE_ELEMENT||!a.is("iframe"))a=new CKEDITOR.dom.element("iframe"),a.setAttributes({style:"border:0;width:0;height:0",
scrolling:"no",frameborder:0,allowTransparency:!0,src:CKEDITOR.plugins.mathjax.fixSrc}),this.parts.span.append(a);this.once("ready",function(){CKEDITOR.env.ie&&a.setAttribute("src",CKEDITOR.plugins.mathjax.fixSrc);this.frameWrapper=new CKEDITOR.plugins.mathjax.frameWrapper(a,b);this.frameWrapper.setValue(this.data.math)})},data:function(){this.frameWrapper&&this.frameWrapper.setValue(this.data.math)},upcast:function(a,b){if("span"==a.name&&a.hasClass(c)&&!(1<a.children.length||a.children[0].type!=
CKEDITOR.NODE_TEXT)){b.math=CKEDITOR.tools.htmlDecode(a.children[0].value);var d=a.attributes;d.style=d.style?d.style+";display:inline-block":"display:inline-block";d["data-cke-survive"]=1;a.children[0].remove();return a}},downcast:function(a){a.children[0].replaceWith(new CKEDITOR.htmlParser.text(CKEDITOR.tools.htmlEncode(this.data.math)));var b=a.attributes;b.style=b.style.replace(/display:\s?inline-block;?\s?/,"");""===b.style&&delete b.style;return a}});CKEDITOR.dialog.add("mathjax",this.path+
"dialogs/mathjax.js");b.on("contentPreview",function(a){a.data.dataValue=a.data.dataValue.replace(/<\/head>/,'<script src="'+CKEDITOR.getUrl(b.config.mathJaxLib)+'"><\/script></head>')});b.on("paste",function(a){a.data.dataValue=a.data.dataValue.replace(RegExp("<span[^>]*?"+c+".*?</span>","ig"),function(a){return a.replace(/(<iframe.*?\/iframe>)/i,"")})})}});CKEDITOR.plugins.mathjax={};CKEDITOR.plugins.mathjax.fixSrc=CKEDITOR.env.gecko?"javascript:true":CKEDITOR.env.ie?"javascript:void((function(){"+
encodeURIComponent("document.open();("+CKEDITOR.tools.fixDomain+")();document.close();")+"})())":"javascript:void(0)";CKEDITOR.plugins.mathjax.loadingIcon=CKEDITOR.plugins.get("mathjax").path+"images/loader.gif";CKEDITOR.plugins.mathjax.copyStyles=function(b,c){for(var a="color font-family font-style font-weight font-variant font-size".split(" "),e=0;e<a.length;e++){var d=a[e],g=b.getComputedStyle(d);g&&c.setStyle(d,g)}};CKEDITOR.plugins.mathjax.trim=function(b){var c=b.indexOf("\\(")+2,a=b.lastIndexOf("\\)");
return b.substring(c,a)};CKEDITOR.plugins.mathjax.frameWrapper=CKEDITOR.env.ie&&8==CKEDITOR.env.version?function(b,c){b.getFrameDocument().write('<!DOCTYPE html><html><head><meta charset="utf-8"></head><body style="padding:0;margin:0;background:transparent;overflow:hidden"><span style="white-space:nowrap;" id="tex"></span></body></html>');return{setValue:function(a){var e=b.getFrameDocument(),d=e.getById("tex");d.setHtml(CKEDITOR.plugins.mathjax.trim(CKEDITOR.tools.htmlEncode(a)));CKEDITOR.plugins.mathjax.copyStyles(b,
d);c.fire("lockSnapshot");b.setStyles({width:Math.min(250,d.$.offsetWidth)+"px",height:e.$.body.offsetHeight+"px",display:"inline","vertical-align":"middle"});c.fire("unlockSnapshot")}}}:function(b,c){function a(){f=b.getFrameDocument();f.getById("preview")||(CKEDITOR.env.ie&&b.removeAttribute("src"),f.write('<!DOCTYPE html><html><head><meta charset="utf-8"><script type="text/x-mathjax-config">MathJax.Hub.Config( {showMathMenu: false,messageStyle: "none"} );function getCKE() {if ( typeof window.parent.CKEDITOR == \'object\' ) {return window.parent.CKEDITOR;} else {return window.parent.parent.CKEDITOR;}}function update() {MathJax.Hub.Queue([ \'Typeset\', MathJax.Hub, this.buffer ],function() {getCKE().tools.callFunction( '+
l+" );});}MathJax.Hub.Queue( function() {getCKE().tools.callFunction("+m+');} );<\/script><script src="'+c.config.mathJaxLib+'"><\/script></head><body style="padding:0;margin:0;background:transparent;overflow:hidden"><span id="preview"></span><span id="buffer" style="display:none"></span></body></html>'))}function e(){k=!0;h=i;c.fire("lockSnapshot");d.setHtml(h);g.setHtml("<img src="+CKEDITOR.plugins.mathjax.loadingIcon+" alt="+c.lang.mathjax.loading+">");b.setStyles({height:"16px",width:"16px",display:"inline",
"vertical-align":"middle"});c.fire("unlockSnapshot");f.getWindow().$.update(h)}var d,g,h,i,f=b.getFrameDocument(),j=!1,k=!1,m=CKEDITOR.tools.addFunction(function(){g=f.getById("preview");d=f.getById("buffer");j=!0;i&&e();CKEDITOR.fire("mathJaxLoaded",b)}),l=CKEDITOR.tools.addFunction(function(){CKEDITOR.plugins.mathjax.copyStyles(b,g);g.setHtml(d.getHtml());c.fire("lockSnapshot");b.setStyles({height:0,width:0});var a=Math.max(f.$.body.offsetHeight,f.$.documentElement.offsetHeight),j=Math.max(g.$.offsetWidth,
f.$.body.scrollWidth);b.setStyles({height:a+"px",width:j+"px"});c.fire("unlockSnapshot");CKEDITOR.fire("mathJaxUpdateDone",b);h!=i?e():k=!1});b.on("load",a);a();return{setValue:function(a){i=CKEDITOR.tools.htmlEncode(a);j&&!k&&e()}}}})();