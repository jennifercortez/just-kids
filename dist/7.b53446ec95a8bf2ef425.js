(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9GTV":function(t,i,e){!function(t,i){var s={update_playing_element:function(t,i,e){var s="rgba("+e.r+", "+e.g+", "+e.b+", "+.2*e.a+")",n="rgba("+e.r+", "+e.g+", "+e.b+", "+.1*e.a+")";t.style.cssText+="background: -webkit-linear-gradient(left, "+s+i+"%, "+n+(i+.1)+"%);background: linear-gradient(to right, "+s+i+"%, "+n+(i+.1)+"%);"}};for(var n in t.SOUNDCITE_CONFIG)s[n]=t.SOUNDCITE_CONFIG[n];var o=t.soundcite={};/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?o.mobile=!0:o.mobile=!1;var a,d,l=i.head||i.getElementsByTagName("head").item(0)||i.documentElement.childNodes[0],r=[],u="none",h="none",p=[],c=[];function y(t){var e={r:0,g:0,b:0,a:1};if(i.defaultView&&i.defaultView.getComputedStyle){var s=i.defaultView.getComputedStyle(t,null);if(s){var n=s.getPropertyValue("color").toLowerCase(),o=n.match(/\s*rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)\s*/)||n.match(/\s*rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d+|\d*\.\d+)\s*\)\s*/);o?e={r:o[1]-0,g:o[2]-0,b:o[3]-0,a:void 0!==o[4]?o[4]-0:1}:(n=n.replace("#",""),e={r:parseInt(n.substring(0,2),16),g:parseInt(n.substring(2,4),16),b:parseInt(n.substring(4,6),16),a:1})}}return e}var g=function(t,i){var e=Array.prototype.slice,s=e.call(arguments,2);return function(){return t.apply(i,s.concat(e.call(arguments)))}};function f(e,s){var n,o=t.SC;if(u="loading",!o||!o.Dialog||function(t,i){for(var e=t.split("."),s=i.split("."),n=0;n<Math.min(e.length,s.length);n++){var o=parseInt(e[n])-parseInt(s[n]);if(o)return o}return e.length-s.length}(e,o._version)>0||s(o,u="loaded")){var a=i.createElement("script");a.type="text/javascript",a.src="//connect.soundcloud.com/sdk-2.0.0.js",a.onload=a.onreadystatechange=function(){"loading"!=u||(n=this.readyState)&&"loaded"!=n&&"complete"!=n||(s(t.SC,u="loaded"),l.removeChild(a))},l.appendChild(a)}}function _(t,i){for(var e=t.className,s=0,n=i.match(/\S+/g);s<n.length;s++)e=e.replace(new RegExp("(?:^|\\s)"+n[s]+"(?!\\S)"),"");t.className=e}function m(t,i){for(var e=t.className,s=0,n=i.match(/\S+/g);s<n.length;s++)e.match(new RegExp("(?:^|\\s)"+n[s]+"(?!\\S)"))||(e+=" "+n[s]);t.className=e}function b(t){this.el=t,this.start=t.hasAttribute("data-start")?t.getAttribute("data-start"):0,this.end=t.hasAttribute("data-end")?t.getAttribute("data-end"):null,this.plays=t.hasAttribute("data-plays")?parseInt(t.getAttribute("data-plays")):1,this.plays_left=this.plays,this.playing=!1,this.sound=null,this.click_handler_binded=g(this.click_handler,this),r.push(this)}function v(t){b.apply(this,Array.prototype.slice.call(arguments)),this.id=t.getAttribute("data-id"),"initialized"!==u&&(a.initialize({client_id:"5ba7fd66044a60db41a97cb9d924996a"}),u="initialized"),a.stream(this.id,g((function(t){this.destroyed?t._player.kill&&t._player.kill():(this.sound=t,this.sound._player.on("positionChange",g((function(t){this.track_progress(),this.playing&&(t<this.start&&this.sound.seek(this.start),t>=this.end&&(this.plays?(this.plays_left--,this.plays_left>0?this.play():this.stop()):this.play(),this.track_progress()),this.prevPos=t)}),this)),null===this.end&&(this.end=this.sound.getDuration()),this.sound_loaded())}),this))}function x(t){b.apply(this,Array.prototype.slice.call(arguments)),this.id="soundcite-audio-"+this.generateUUID(),this.url=t.getAttribute("data-url"),this.start=Math.floor(this.start/1e3),null!==this.end&&(this.end=Math.floor(this.end/1e3)),"initialized"!=h&&(o.audio_container=i.createElement("div"),m(o.audio_container,"soundcite-audio"),i.getElementsByTagName("body")[0].appendChild(o.audio_container),h="initialized"),this.audio=i.createElement("audio"),this.audio.id=this.id,this.audio.setAttribute("src",this.url),this.audio.setAttribute("preload","none"),o.mobile=!0,o.audio_container.appendChild(this.audio),this.sound=d("#"+this.id,{frameAnimation:!0}),this.sound.on("loadeddata",g((function(){null===this.end&&(this.end=this.sound.duration()),o.mobile||this.sound_loaded()}),this)),(o.mobile||this.sound.readyState()>1)&&this.sound_loaded()}b.prototype.generateUUID=function(){var t=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(i){var e=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"==i?e:3&e|8).toString(16)}))},b.prototype.sound_loaded=function(){this.el.addEventListener("click",this.click_handler_binded),_(this.el,"soundcite-initializing"),this.el.style.display="none",this.el.offsetHeight,this.el.style.display="",m(this.el,"soundcite-loaded soundcite-play")},b.prototype.pause=function(){_(this.el,"soundcite-pause"),m(this.el,"soundcite-play"),this.playing=!1,this.pause_sound()},b.prototype.stop=function(){_(this.el,"soundcite-pause"),m(this.el,"soundcite-play"),this.playing=!1,this.plays_left=this.plays,this.stop_sound()},b.prototype.track_progress=function(){var t=this.end-this.start,i=100*(this.sound_position()-this.start)/t;this.color||(this.color=y(this.el)),s.update_playing_element(this.el,i,this.color)},b.prototype.click_handler=function(t){t.preventDefault(),function(t){for(var i=0;i<r.length;i++)r[i].playing&&(t&&t.el===r[i].el||r[i].pause())}(this),this.playing?this.pause():this.play()},b.prototype.destroy=function(t){this.destroyed=!0,this.playing&&this.pause(),this.el&&_(this.el,"soundcite-loaded soundcite-initializing soundcite-loading soundcite-play soundcite-pause"),this.el&&this.el.removeEventListener("click",this.click_handler_binded)},v.prototype=Object.create(b.prototype),v.prototype.sound_position=function(){return this.sound.getCurrentPosition()},v.prototype.pause_sound=function(){this.sound.pause()},v.prototype.stop_sound=function(){this.sound.stop()},v.prototype.play=function(){var t=this.sound_position();(t<this.start||t>=this.end)&&this.sound.seek(this.start),_(this.el,"soundcite-play"),m(this.el,"soundcite-pause"),this.sound.play(),this.playing=!0,this.prevPos=-1},v.prototype.destroy=function(){this.sound&&this.sound._player.kill&&this.sound._player.kill(),b.prototype.destroy.apply(this,arguments)},x.prototype=Object.create(b.prototype),x.prototype.sound_position=function(){return this.sound.currentTime()},x.prototype.pause_sound=function(){this.sound.pause(),this.sound.off("timeupdate")},x.prototype.stop_sound=function(){this.sound.off("timeupdate"),this.sound.pause()},x.prototype._play_sound=function(){_(this.el,"soundcite-loading soundcite-play"),m(this.el,"soundcite-pause"),this.sound.play(),this.playing=!0,this.sound.on("timeupdate",g((function(){this.track_progress(),this.playing&&this.sound.currentTime()>=this.end&&(this.plays?(this.plays_left--,this.plays_left>0?this.play_sound():this.stop()):this.play_sound(),this.track_progress())}),this))},x.prototype.play_sound=function(){var t=this.sound.currentTime();t<this.start||t>=this.end?(this.sound.on("seeked",g((function(){this.sound.off("seeked"),this._play_sound()}),this)),this.sound.currentTime(this.start)):this._play_sound()},x.prototype.play=function(){/soundcite\-loading/.test(this.el.className)||(o.mobile?(_(this.el,"soundcite-play"),m(this.el,"soundcite-loading"),this.startedLoading?this.play_sound():(this.sound.on("canplaythrough",g((function(){this.play_sound()}),this)),i.getElementById(this.id).load()),this.startedLoading=!0):this.play_sound())},x.prototype.destroy=function(){this.sound&&d.destroy(this.sound),this.audio&&o.audio_container.removeChild(this.audio),b.prototype.destroy.apply(this,arguments)},o.createPlayer=function(i){m(i,"soundcite-initializing"),m(i,"soundcite-force-bg-color"),s.update_playing_element(i,0,y(i)),i.getAttribute("data-url")&&("none"==h?(c.push(i),e.e(37).then(e.bind(null,"+qCX")).then((function(i){(0,i.default)(t,t.document),d=t.Popcorn;for(var e=0;e<c.length;e++)new x(c[e])}))):"loading"==h?c.push(i):new x(i)),i.getAttribute("data-id")&&("none"==u?(p.push(i),f("2.0.0",(function(t){a=t;for(var i=0;i<p.length;i++)new v(p[i])}))):"loading"==u?p.push(i):new v(i))},o.destroyPlayer=function(t){for(var i=r.length-1;i>=0;i--)r[i].el==t&&(r[i].destroy(),r.splice(i,1));for(i=c.length-1;i>=0;i--)c[i]==t&&c.splice(i,1);for(i=p.length-1;i>=0;i--)p[i]==t&&p.splice(i,1)},o.pausePlayer=function(t){for(var i=0;i<r.length;i++)t==r[i].el&&r[i].playing&&r[i].pause()},o.setElementsColor=function(t){s.update_playing_element(t,0,y(t))}}(window,document)},RX7I:function(t,i,e){"use strict";e.r(i),e("9GTV");var s=window.soundcite;delete window.soundcite,i.default=s}}]);