(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{TLUl:function(t,e,n){"use strict";n.r(e);var r=n("rFsW"),i=n("ROz4"),a=n("5ta/"),s=n("3eHG"),o=n("wS4Y"),c=i.a.extend({CONTENT_WAIT_TICK:100,CONTENT_WAIT_MAX_TICKS:20,CONTENT_IMG_WAIT:1e3,DO_NOT_WAIT_FOR_PRELOAD:!0,render:function(){var t,e;return this.makeBox("widget-twitter"),this.rendered=!0,this.current_type?("mag"===(e=this[this.current_type]).use_own_url?e.url=this.page.mag.getUrl():"page"!==e.use_own_url&&e.url||(e.url=this.page.getUrl()),RM.screenshot||(e.text=a.getFinalShare(this.page,r.a.extend(this.page.mag.model.toJSON(),{user:this.page.mag.user}),{forProject:"mag"===e.use_own_url,customDomain:RM.common.isDomainViewer}).tweet),t=o.a["template-constructor-block-twitter-"+this.current_type],this.$el.html(t(e)),"type_timeline"===this.current_type&&this.$el.find("a").attr({width:this.w,height:this.h}),s.a.initTwitterAPI(function(){this.destroyed||(window.twttr&&window.twttr.widgets&&r.a.isFunction(window.twttr.widgets.load)&&window.twttr.widgets.load(),Object(r.a)(["type_timeline","type_embed"]).contains(this.current_type)?this.waitForTwitterContent():this.widgetIsLoaded())}.bind(this)),this):(this.widgetIsLoaded(),this)},waitForTwitterContent:function(){var t,e,n,i=0,a=!1,s={type_timeline:".timeline-Widget",type_embed:"blockquote.tweet"};clearInterval(t),t=setInterval(r.a.bind((function(){i++,this.destroyed?clearInterval(t):(1==(e=this.$el.find("iframe")).length&&(n=s[this.current_type],a=e.contents().find(n).length>0),(a||i>this.CONTENT_WAIT_MAX_TICKS)&&("type_embed"==this.current_type&&e.css({margin:0,"max-width":"100%"}),"type_timeline"==this.current_type&&(console.log("$frame : ",e),e.css({width:"100%",height:"100%!important","max-width":"100%"})),clearInterval(t),setTimeout(r.a.bind((function(){this.widgetIsLoaded()}),this),this.CONTENT_IMG_WAIT)))}),this),this.CONTENT_WAIT_TICK)}});e.default=c},wS4Y:function(t,e,n){"use strict";var r,i=n("AIVH");function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(){var t=d(['\n\t<%=code%>\n\t<div class="overlay"></div>\n']);return s=function(){return t},t}function o(){var t=d(['\n\t<%=code%>\n\t<div class="overlay"></div>\n']);return o=function(){return t},t}function c(){var t=d(['\n\t<a href="https://twitter.com/intent/tweet?button_hashtag=<%-hash%>" class="twitter-hashtag-button" data-size="<%=large_button ? \'large\' : \'medium\'%>">Tweet #<%-hash%></a>\n\t<div class="overlay"></div>\n']);return c=function(){return t},t}function u(){var t=d(['\n\t<a href="https://twitter.com/<%-username ? username : \'Readymag\'%>" class="twitter-follow-button" data-show-count="false" data-show-screen-name="<%=show_name ? \'true\' : \'false\'%>" data-lang="en" data-size="<%=large_button ? \'large\' : \'medium\'%>">Follow @<%-username%></a>\n\t<div class="overlay"></div>\n']);return u=function(){return t},t}function l(){var t=d(['\n\t<a href="https://twitter.com/share" class="twitter-share-button" data-url="<%-url%>" data-lang="en" data-size="<%=large_button ? \'large\' : \'medium\'%>" data-text="<%- typeof text !== \'undefined\' ? text : \'\'%>">Tweet</a>\n\t<div class="overlay"></div>\n']);return l=function(){return t},t}function d(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}e.a=(a(r={},"template-constructor-block-twitter-type_tweet",Object(i.a)(l())),a(r,"template-constructor-block-twitter-type_follow",Object(i.a)(u())),a(r,"template-constructor-block-twitter-type_hashtag",Object(i.a)(c())),a(r,"template-constructor-block-twitter-type_timeline",Object(i.a)(o())),a(r,"template-constructor-block-twitter-type_embed",Object(i.a)(s())),r)}}]);