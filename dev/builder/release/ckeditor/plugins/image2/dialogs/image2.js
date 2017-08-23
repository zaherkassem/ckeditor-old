﻿/*
 Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.dialog.add("image2",function(f){function y(){var a=this.getValue().match(z);(a=!!(a&&0!==parseInt(a[1],10)))||alert(c["invalid"+CKEDITOR.tools.capitalize(this.id)]);return a}function J(){function a(a,c){o.push(b.once(a,function(a){for(var b;b=o.pop();)b.removeListener();c(a)}))}var b=p.createElement("img"),o=[];return function(o,c,e){a("load",function(){var a=A(b);c.call(e,b,a.width,a.height)});a("error",function(){c(null)});a("abort",function(){c(null)});b.setAttribute("src",(i.baseHref||
"")+o+"?"+Math.random().toString(16).substring(2))}}function B(){var a=this.getValue();q(!1);a!==u.data.src?(C(a,function(a,b,c){q(!0);if(!a)return j(!1);g.setValue(!1===f.config.image2_prefillDimensions?0:b);h.setValue(!1===f.config.image2_prefillDimensions?0:c);r=b;s=c;j(D.checkHasNaturalRatio(a))}),k=!0):k?(q(!0),g.setValue(l),h.setValue(m),k=!1):q(!0)}function E(){if(e){var a=this.getValue();if(a&&(a.match(z)||j(!1),"0"!==a)){var b="width"==this.id,c=l||r,d=m||s,a=b?Math.round(d*(a/c)):Math.round(c*
(a/d));isNaN(a)||(b?h:g).setValue(a)}}}function j(a){if(d){if("boolean"==typeof a){if(v)return;e=a}else if(a=g.getValue(),v=!0,(e=!e)&&a)a*=m/l,isNaN(a)||h.setValue(Math.round(a));d[e?"removeClass":"addClass"]("cke_btn_unlocked");d.setAttribute("aria-checked",e);CKEDITOR.env.hc&&d.getChild(0).setHtml(e?CKEDITOR.env.ie?"■":"▣":CKEDITOR.env.ie?"□":"▢")}}function q(a){a=a?"enable":"disable";g[a]();h[a]()}var z=/(^\s*(\d+)(px)?\s*$)|^$/i,F=CKEDITOR.tools.getNextId(),G=CKEDITOR.tools.getNextId(),b=f.lang.image2,
c=f.lang.common,K=(new CKEDITOR.template('<div><a href="javascript:void(0)" tabindex="-1" title="'+b.lockRatio+'" class="cke_btn_locked" id="{lockButtonId}" role="checkbox"><span class="cke_icon"></span><span class="cke_label">'+b.lockRatio+'</span></a><a href="javascript:void(0)" tabindex="-1" title="'+b.resetSize+'" class="cke_btn_reset" id="{resetButtonId}" role="button"><span class="cke_label">'+b.resetSize+"</span></a></div>")).output({lockButtonId:F,resetButtonId:G}),D=CKEDITOR.plugins.image2,
i=f.config,t=!(!i.filebrowserImageBrowseUrl&&!i.filebrowserBrowseUrl),w=f.widgets.registered.image.features,A=D.getNatural,p,u,H,C,l,m,r,s,k,e,v,d,n,g,h,x,t=!(!i.filebrowserImageBrowseUrl&&!i.filebrowserBrowseUrl),I=[{id:"src",type:"text",label:c.url,onKeyup:B,onChange:B,setup:function(a){this.setValue(a.data.src)},commit:function(a){a.setData("src",this.getValue())},validate:CKEDITOR.dialog.validate.notEmpty(b.urlMissing)}];t&&I.push({type:"button",id:"browse",style:"display:inline-block;margin-top:14px;",
align:"center",label:f.lang.common.browseServer,hidden:!0,filebrowser:"info:src"});return{title:b.title,minWidth:250,minHeight:100,onLoad:function(){p=this._.element.getDocument();C=J()},onShow:function(){u=this.widget;H=u.parts.image;k=v=e=!1;x=A(H);r=l=x.width;s=m=x.height},contents:[{id:"info",label:b.infoTab,elements:[{type:"vbox",padding:0,children:[{type:"hbox",widths:["100%"],className:"cke_dialog_image_url",children:I}]},{id:"alt",type:"text",label:b.alt,setup:function(a){this.setValue(a.data.alt)},
commit:function(a){a.setData("alt",this.getValue())},validate:!0===f.config.image2_altRequired?CKEDITOR.dialog.validate.notEmpty(b.altMissing):null},{type:"hbox",widths:["25%","25%","50%"],requiredContent:w.dimension.requiredContent,children:[{type:"text",width:"45px",id:"width",label:c.width,validate:y,onKeyUp:E,onLoad:function(){g=this},setup:function(a){this.setValue(a.data.width)},commit:function(a){a.setData("width",this.getValue())}},{type:"text",id:"height",width:"45px",label:c.height,validate:y,
onKeyUp:E,onLoad:function(){h=this},setup:function(a){this.setValue(a.data.height)},commit:function(a){a.setData("height",this.getValue())}},{id:"lock",type:"html",style:"margin-top:18px;width:40px;height:20px;",onLoad:function(){function a(a){a.on("mouseover",function(){this.addClass("cke_btn_over")},a);a.on("mouseout",function(){this.removeClass("cke_btn_over")},a)}var b=this.getDialog();d=p.getById(F);n=p.getById(G);d&&(b.addFocusable(d,4+t),d.on("click",function(a){j();a.data&&a.data.preventDefault()},
this.getDialog()),a(d));n&&(b.addFocusable(n,5+t),n.on("click",function(a){if(k){g.setValue(r);h.setValue(s)}else{g.setValue(l);h.setValue(m)}a.data&&a.data.preventDefault()},this),a(n))},setup:function(a){j(a.data.lock)},commit:function(a){a.setData("lock",e)},html:K}]},{type:"hbox",id:"alignment",requiredContent:w.align.requiredContent,children:[{id:"align",type:"radio",items:[[c.alignNone,"none"],[c.alignLeft,"left"],[c.alignCenter,"center"],[c.alignRight,"right"]],label:c.align,setup:function(a){this.setValue(a.data.align)},
commit:function(a){a.setData("align",this.getValue())}}]},{id:"hasCaption",type:"checkbox",label:b.captioned,requiredContent:w.caption.requiredContent,setup:function(a){this.setValue(a.data.hasCaption)},commit:function(a){a.setData("hasCaption",this.getValue())}}]},{id:"Upload",hidden:!0,filebrowser:"uploadButton",label:b.uploadTab,elements:[{type:"file",id:"upload",label:b.btnUpload,style:"height:40px"},{type:"fileButton",id:"uploadButton",filebrowser:"info:src",label:b.btnUpload,"for":["Upload",
"upload"]}]}]}});