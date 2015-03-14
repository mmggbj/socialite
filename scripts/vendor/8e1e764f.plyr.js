!function(a){"use strict";function b(a,b){t.debug&&window.console&&console[b?"error":"log"](a)}function c(){var a,b,c,d=navigator.userAgent,e=navigator.appName,f=""+parseFloat(navigator.appVersion),g=parseInt(navigator.appVersion,10);return-1!==navigator.appVersion.indexOf("Windows NT")&&-1!==navigator.appVersion.indexOf("rv:11")?(e="IE",f="11;"):-1!==(b=d.indexOf("MSIE"))?(e="IE",f=d.substring(b+5)):-1!==(b=d.indexOf("Chrome"))?(e="Chrome",f=d.substring(b+7)):-1!==(b=d.indexOf("Safari"))?(e="Safari",f=d.substring(b+7),-1!==(b=d.indexOf("Version"))&&(f=d.substring(b+8))):-1!==(b=d.indexOf("Firefox"))?(e="Firefox",f=d.substring(b+8)):(a=d.lastIndexOf(" ")+1)<(b=d.lastIndexOf("/"))&&(e=d.substring(a,b),f=d.substring(b+1),e.toLowerCase()==e.toUpperCase()&&(e=navigator.appName)),-1!==(c=f.indexOf(";"))&&(f=f.substring(0,c)),-1!==(c=f.indexOf(" "))&&(f=f.substring(0,c)),g=parseInt(""+f,10),isNaN(g)&&(f=""+parseFloat(navigator.appVersion),g=parseInt(navigator.appVersion,10)),{name:e,version:g,ios:/(iPad|iPhone|iPod)/g.test(navigator.platform)}}function d(a,b){var c=a.media;if("video"==a.type)switch(b){case"video/webm":return!(!c.canPlayType||!c.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/,""));case"video/mp4":return!(!c.canPlayType||!c.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/,""));case"video/ogg":return!(!c.canPlayType||!c.canPlayType('video/ogg; codecs="theora"').replace(/no/,""))}else if("audio"==a.type)switch(b){case"audio/mpeg":return!(!c.canPlayType||!c.canPlayType("audio/mpeg;").replace(/no/,""));case"audio/ogg":return!(!c.canPlayType||!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/,""));case"audio/wav":return!(!c.canPlayType||!c.canPlayType('audio/wav; codecs="1"').replace(/no/,""))}return!1}function e(a,b,c){return a.replace(new RegExp(b.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1"),"g"),c)}function f(a,b){a.length||(a=[a]);for(var c=a.length-1;c>=0;c--){var d=c>0?b.cloneNode(!0):b,e=a[c],f=e.parentNode,g=e.nextSibling;d.appendChild(e),g?f.insertBefore(d,g):f.appendChild(d)}}function g(a){a.parentNode.removeChild(a)}function h(a,b){a.insertBefore(b,a.firstChild)}function i(a,b){for(var c in b)a.setAttribute(c,b[c])}function j(a,b,c){if(a)if(a.classList)a.classList[c?"add":"remove"](b);else{var d=(" "+a.className+" ").replace(/\s+/g," ").replace(" "+b+" ","");a.className=d+(c?" "+b:"")}}function k(a,b,c,d){b=b.split(" ");for(var e=0;e<b.length;e++)a[d?"addEventListener":"removeEventListener"](b[e],c,!1)}function l(a,b,c){k(a,b,c,!0)}function m(a,b,c){k(a,b,c,!1)}function n(a,b){return 0===a||0===b||isNaN(a)||isNaN(b)?0:(a/b*100).toFixed(2)}function o(a,b){for(var c in b)b[c]&&b[c].constructor&&b[c].constructor===Object?(a[c]=a[c]||{},o(a[c],b[c])):a[c]=b[c];return a}function p(){var a={supportsFullScreen:!1,isFullScreen:function(){return!1},requestFullScreen:function(){},cancelFullScreen:function(){},fullScreenEventName:"",element:null,prefix:""},b="webkit moz o ms khtml".split(" ");if("undefined"!=typeof document.cancelFullScreen)a.supportsFullScreen=!0;else for(var c=0,d=b.length;d>c;c++){if(a.prefix=b[c],"undefined"!=typeof document[a.prefix+"CancelFullScreen"]){a.supportsFullScreen=!0;break}if("undefined"!=typeof document.msExitFullscreen&&document.msFullscreenEnabled){a.prefix="ms",a.supportsFullScreen=!0;break}}return"webkit"===a.prefix&&navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)&&(a.supportsFullScreen=!1),a.supportsFullScreen&&(a.fullScreenEventName="ms"==a.prefix?"MSFullscreenChange":a.prefix+"fullscreenchange",a.isFullScreen=function(){switch(this.prefix){case"":return document.fullScreen;case"webkit":return document.webkitIsFullScreen;case"ms":return null!==document.msFullscreenElement;default:return document[this.prefix+"FullScreen"]}},a.requestFullScreen=function(a){return""===this.prefix?a.requestFullScreen():a[this.prefix+("ms"==this.prefix?"RequestFullscreen":"RequestFullScreen")]("webkit"===this.prefix?a.ALLOW_KEYBOARD_INPUT:null)},a.cancelFullScreen=function(){return""===this.prefix?document.cancelFullScreen():document[this.prefix+("ms"==this.prefix?"ExitFullscreen":"CancelFullScreen")]()},a.element=function(){return""===this.prefix?document.fullscreenElement:document[this.prefix+"FullscreenElement"]}),a}function q(){var a={supported:function(){try{return"localStorage"in window&&null!==window.localStorage}catch(a){return!1}}()};return a}function r(a){function k(a){if(!_.usingTextTracks&&"video"===_.type){for(_.subcount=0,a="number"==typeof a?a:_.media.currentTime;u(_.captions[_.subcount][0])<a.toFixed(1);)if(_.subcount++,_.subcount>_.captions.length-1){_.subcount=_.captions.length-1;break}_.media.currentTime.toFixed(1)>=r(_.captions[_.subcount][0])&&_.media.currentTime.toFixed(1)<=u(_.captions[_.subcount][0])?(_.currentCaption=_.captions[_.subcount][1],_.captionsContainer.innerHTML=_.currentCaption):_.captionsContainer.innerHTML=""}}function o(){j(_.container,t.classes.captions.enabled,!0),t.captions.defaultActive&&(j(_.container,t.classes.captions.active,!0),_.buttons.captions.setAttribute("checked","checked"))}function r(a){var b=[];return b=a.split(" --> "),v(b[0])}function u(a){var b=[];return b=a.split(" --> "),v(b[1])}function v(a){if(null===a||void 0===a)return 0;var b,c=[],d=[];return c=a.split(","),d=c[0].split(":"),b=Math.floor(60*d[0]*60)+Math.floor(60*d[1])+Math.floor(d[2])}function w(a){return _.container.querySelectorAll(a)}function x(a){return w(a)[0]}function y(){try{return window.self!==window.top}catch(a){return!0}}function z(){b("Injecting custom controls.");var a=t.html;if(a=e(a,"{seektime}",t.seekTime),a=e(a,"{id}",_.random),_.container.insertAdjacentHTML("beforeend",a),t.tooltips)for(var c=w(t.selectors.labels),d=c.length-1;d>=0;d--){var f=c[d];j(f,t.classes.hidden,!1),j(f,t.classes.tooltip,!0)}}function A(){try{return _.controls=x(t.selectors.controls),_.buttons={},_.buttons.seek=x(t.selectors.buttons.seek),_.buttons.play=x(t.selectors.buttons.play),_.buttons.pause=x(t.selectors.buttons.pause),_.buttons.restart=x(t.selectors.buttons.restart),_.buttons.rewind=x(t.selectors.buttons.rewind),_.buttons.forward=x(t.selectors.buttons.forward),_.buttons.mute=x(t.selectors.buttons.mute),_.buttons.captions=x(t.selectors.buttons.captions),_.buttons.fullscreen=x(t.selectors.buttons.fullscreen),_.progress={},_.progress.container=x(t.selectors.progress.container),_.progress.buffer={},_.progress.buffer.bar=x(t.selectors.progress.buffer),_.progress.buffer.text=_.progress.buffer.bar.getElementsByTagName("span")[0],_.progress.played={},_.progress.played.bar=x(t.selectors.progress.played),_.progress.played.text=_.progress.played.bar.getElementsByTagName("span")[0],_.volume=x(t.selectors.buttons.volume),_.duration=x(t.selectors.duration),_.seekTime=w(t.selectors.seekTime),!0}catch(a){return b("It looks like there's a problem with your controls html. Bailing.",!0),!1}}function B(){var a=_.buttons.play.innerText||"Play";"undefined"!=typeof t.title&&t.title.length&&(a+=", "+t.title),_.buttons.play.setAttribute("aria-label",a)}function C(){if(_.media=_.container.querySelectorAll("audio, video")[0],!_.media)return b("No audio or video element found!",!0),!1;if(_.media.removeAttribute("controls"),_.type=_.media.tagName.toLowerCase(),j(_.container,t.classes[_.type],!0),j(_.container,t.classes.stopped,null===_.media.getAttribute("autoplay")),_.browser.ios&&j(_.container,"ios",!0),"video"===_.type){var a=document.createElement("div");a.setAttribute("class",t.classes.videoWrapper),f(_.media,a),_.videoContainer=a}null!==_.media.getAttribute("autoplay")&&F()}function D(){if("video"===_.type){_.videoContainer.insertAdjacentHTML("afterbegin","<div class='"+t.selectors.captions.replace(".","")+"'></div>"),_.captionsContainer=x(t.selectors.captions),_.usingTextTracks=!1,_.media.textTracks&&(_.usingTextTracks=!0);for(var a,c="",d=_.media.childNodes,e=0;e<d.length;e++)"track"===d[e].nodeName.toLowerCase()&&(a=d[e].getAttribute("kind"),"captions"===a&&(c=d[e].getAttribute("src")));if(_.captionExists=!0,""===c?(_.captionExists=!1,b("No caption track found.")):b("Caption track found; URI: "+c),_.captionExists){for(var f=_.media.textTracks,g=0;g<f.length;g++)f[g].mode="hidden";if(o(_),("IE"===_.browser.name&&10===_.browser.version||"IE"===_.browser.name&&11===_.browser.version||"Firefox"===_.browser.name&&_.browser.version>=31||"Safari"===_.browser.name&&_.browser.version>=7)&&(b("Detected IE 10/11 or Firefox 31+ or Safari 7+."),_.usingTextTracks=!1),_.usingTextTracks){b("TextTracks supported.");for(var h=0;h<f.length;h++){var i=f[h];"captions"===i.kind&&l(i,"cuechange",function(){this.activeCues[0]&&this.activeCues[0].hasOwnProperty("text")&&(_.captionsContainer.innerHTML=this.activeCues[0].text)})}}else if(b("TextTracks not supported so rendering captions manually."),_.currentCaption="",_.captions=[],""!==c){var k=new XMLHttpRequest;k.onreadystatechange=function(){if(4===k.readyState)if(200===k.status){var a,c=[],d=k.responseText;c=d.split("\n\n");for(var e=0;e<c.length;e++)a=c[e],_.captions[e]=[],_.captions[e]=a.split("\n");_.captions.shift(),b("Successfully loaded the caption file via AJAX.")}else b("There was a problem loading the caption file via AJAX.",!0)},k.open("get",c,!0),k.send()}if("Safari"===_.browser.name&&_.browser.version>=7){b("Safari 7+ detected; removing track from DOM."),f=_.media.getElementsByTagName("track");for(var m=0;m<f.length;m++)_.media.removeChild(f[m])}}else j(_.container,t.classes.captions.enabled)}}function E(){if("video"===_.type&&t.fullscreen.enabled){var a=s.supportsFullScreen;a||t.fullscreen.fallback&&!y()?(b((a?"Native":"Fallback")+" fullscreen enabled."),j(_.container,t.classes.fullscreen.enabled,!0)):b("Fullscreen not supported and fallback disabled.")}}function F(){_.media.play()}function G(){_.media.pause()}function H(a){"number"!=typeof a&&(a=t.seekTime),J(_.media.currentTime-a)}function I(a){"number"!=typeof a&&(a=t.seekTime),J(_.media.currentTime+a)}function J(a){var c=0;"number"==typeof a?c=a:"object"!=typeof a||"change"!==a.type&&"input"!==a.type||(c=a.target.value/a.target.max*_.media.duration),0>c?c=0:c>_.media.duration&&(c=_.media.duration),_.media.currentTime=c.toFixed(1),b("Seeking to "+_.media.currentTime+" seconds"),k(c)}function K(){j(_.container,t.classes.playing,!_.media.paused),j(_.container,t.classes.stopped,_.media.paused)}function L(a){var b=s.supportsFullScreen;a&&a.type===s.fullScreenEventName?t.fullscreen.active=s.isFullScreen():b?(s.isFullScreen()?s.cancelFullScreen():s.requestFullScreen(_.container),t.fullscreen.active=s.isFullScreen()):(t.fullscreen.active=!t.fullscreen.active,t.fullscreen.active?(l(document,"keyup",M),document.body.style.overflow="hidden"):(m(document,"keyup",M),document.body.style.overflow="")),j(_.container,t.classes.fullscreen.active,t.fullscreen.active)}function M(a){27===(a.which||a.charCode||a.keyCode)&&t.fullscreen.active&&L()}function N(a){"undefined"==typeof a&&(a=t.storage.enabled&&q().supported?window.localStorage[t.storage.key]||t.volume:t.volume),a>10&&(a=10),_.volume.value=a,_.media.volume=parseFloat(a/10),Q(),t.storage.enabled&&q().supported&&(window.localStorage.plyr_volume=a)}function O(a){"undefined"==typeof active&&(a=!_.media.muted,_.buttons.mute.checked=a),_.media.muted=a,Q()}function P(a){"undefined"==typeof a&&(a=-1===_.container.className.indexOf(t.classes.captions.active),_.buttons.captions.checked=a),a?j(_.container,t.classes.captions.active,!0):j(_.container,t.classes.captions.active)}function Q(){j(_.container,t.classes.muted,0===_.media.volume||_.media.muted)}function R(a){var b="waiting"===a.type;clearTimeout(_.loadingTimer),_.loadingTimer=setTimeout(function(){j(_.container,t.classes.loading,b)},b?250:0)}function S(a){var b=_.progress.played.bar,c=_.progress.played.text,d=0;if(a)switch(a.type){case"timeupdate":case"seeking":d=n(_.media.currentTime,_.media.duration),"timeupdate"==a.type&&(_.buttons.seek.value=d);break;case"change":case"input":d=a.target.value;break;case"playing":case"progress":b=_.progress.buffer.bar,c=_.progress.buffer.text,d=function(){var a=_.media.buffered;return a.length?n(a.end(0),_.media.duration):0}()}b.value=d,c.innerHTML=d}function T(){_.secs=parseInt(_.media.currentTime%60),_.mins=parseInt(_.media.currentTime/60%60),_.secs=("0"+_.secs).slice(-2),_.mins=("0"+_.mins).slice(-2),_.duration.innerHTML=_.mins+":"+_.secs}function U(a){T(),S(a)}function V(){for(var a=_.media.querySelectorAll("source"),b=a.length-1;b>=0;b--)g(a[b]);_.media.removeAttribute("src")}function W(a){if(a.src){var b=document.createElement("source");i(b,a),h(_.media,b)}}function X(a){if(G(),J(),K(),V(),"string"==typeof a)_.media.setAttribute("src",a);else if(a.constructor===Array)for(var b in a)W(a[b]);U(),_.media.load(),null!==_.media.getAttribute("autoplay")&&F()}function Y(a){"video"===_.type&&_.media.setAttribute("poster",a)}function Z(){l(_.buttons.play,"click",function(){F(),setTimeout(function(){_.buttons.pause.focus()},100)}),l(_.buttons.pause,"click",function(){G(),setTimeout(function(){_.buttons.play.focus()},100)}),l(_.buttons.restart,"click",J),l(_.buttons.rewind,"click",H),l(_.buttons.forward,"click",I),l(_.volume,"change input",function(){N(this.value)}),l(_.buttons.mute,"change",function(){O(this.checked)}),l(_.buttons.fullscreen,"click",L),l(document,s.fullScreenEventName,L),"video"===_.type&&t.click&&l(_.videoContainer,"click",function(){_.media.paused?F():_.media.ended?(J(),F()):G()}),l(_.media,"timeupdate seeking",U),l(_.media,"timeupdate",k),l(_.buttons.seek,"change input",J),l(_.buttons.captions,"click",function(){P(this.checked)}),l(_.media,"ended",function(){"video"===_.type&&(_.captionsContainer.innerHTML=""),K()}),l(_.media,"progress",S),l(_.media,"playing",S),l(_.media,"volumechange",Q),l(_.media,"play pause",K),l(_.media,"waiting canplay seeked",R)}function $(){return s=p(),_.browser=c(),b(_.browser.name+" "+_.browser.version),"IE"!==_.browser.name||8!==_.browser.version&&9!==_.browser.version?(C(),_.random=Math.floor(1e4*Math.random()),z(),A()?(B(),D(),N(),E(),void Z()):!1):(b("Browser not suppported.",!0),!1)}var _=this;return _.container=a,$(),{media:_.media,play:F,pause:G,restart:J,rewind:H,forward:I,seek:J,setVolume:N,toggleMute:O,toggleCaptions:P,source:X,poster:Y,support:function(a){return d(_,a)}}}var s,t,u={enabled:!0,debug:!1,seekTime:10,volume:5,click:!0,tooltips:!1,selectors:{container:".player",controls:".player-controls",labels:"[data-player] .sr-only, label .sr-only",buttons:{seek:"[data-player='seek']",play:"[data-player='play']",pause:"[data-player='pause']",restart:"[data-player='restart']",rewind:"[data-player='rewind']",forward:"[data-player='fast-forward']",mute:"[data-player='mute']",volume:"[data-player='volume']",captions:"[data-player='captions']",fullscreen:"[data-player='fullscreen']"},progress:{container:".player-progress",buffer:".player-progress-buffer",played:".player-progress-played"},captions:".player-captions",duration:".player-duration"},classes:{video:"player-video",videoWrapper:"player-video-wrapper",audio:"player-audio",stopped:"stopped",playing:"playing",muted:"muted",loading:"loading",tooltip:"player-tooltip",hidden:"sr-only",captions:{enabled:"captions-enabled",active:"captions-active"},fullscreen:{enabled:"fullscreen-enabled",active:"fullscreen-active"}},captions:{defaultActive:!1},fullscreen:{enabled:!0,fallback:!0},storage:{enabled:!0,key:"plyr_volume"},html:function(){return["<div class='player-controls'>","<div class='player-progress'>","<label for='seek{id}' class='sr-only'>Seek</label>","<input id='seek{id}' class='player-progress-seek' type='range' min='0' max='100' step='0.5' value='0' data-player='seek'>","<progress class='player-progress-played' max='100' value='0'>","<span>0</span>% played","</progress>","<progress class='player-progress-buffer' max='100' value='0'>","<span>0</span>% buffered","</progress>","</div>","<span class='player-controls-left'>","<button type='button' data-player='restart'>","<svg><use xlink:href='#icon-restart'></use></svg>","<span class='sr-only'>Restart</span>","</button>","<button type='button' data-player='rewind'>","<svg><use xlink:href='#icon-rewind'></use></svg>","<span class='sr-only'>Rewind {seektime} secs</span>","</button>","<button type='button' data-player='play'>","<svg><use xlink:href='#icon-play'></use></svg>","<span class='sr-only'>Play</span>","</button>","<button type='button' data-player='pause'>","<svg><use xlink:href='#icon-pause'></use></svg>","<span class='sr-only'>Pause</span>","</button>","<button type='button' data-player='fast-forward'>","<svg><use xlink:href='#icon-fast-forward'></use></svg>","<span class='sr-only'>Forward {seektime} secs</span>","</button>","<span class='player-time'>","<span class='sr-only'>Time</span>","<span class='player-duration'>00:00</span>","</span>","</span>","<span class='player-controls-right'>","<input class='inverted sr-only' id='mute{id}' type='checkbox' data-player='mute'>","<label id='mute{id}' for='mute{id}'>","<svg class='icon-muted'><use xlink:href='#icon-muted'></use></svg>","<svg><use xlink:href='#icon-volume'></use></svg>","<span class='sr-only'>Toggle Mute</span>","</label>","<label for='volume{id}' class='sr-only'>Volume</label>","<input id='volume{id}' class='player-volume' type='range' min='0' max='10' value='5' data-player='volume'>","<input class='sr-only' id='captions{id}' type='checkbox' data-player='captions'>","<label for='captions{id}'>","<svg class='icon-captions-on'><use xlink:href='#icon-captions-on'></use></svg>","<svg><use xlink:href='#icon-captions-off'></use></svg>","<span class='sr-only'>Toggle Captions</span>","</label>","<button type='button' data-player='fullscreen'>","<svg class='icon-exit-fullscreen'><use xlink:href='#icon-exit-fullscreen'></use></svg>","<svg><use xlink:href='#icon-enter-fullscreen'></use></svg>","<span class='sr-only'>Toggle Fullscreen</span>","</button>","</span>","</div>"].join("\n")}()};a.setup=function(a){if(t=o(u,a),!t.enabled)return!1;for(var b=document.querySelectorAll(t.selectors.container),c=[],d=b.length-1;d>=0;d--){var e=b[d];"video"===e.querySelectorAll("audio, video")[0].tagName.toLowerCase()&&/iPhone/i.test(navigator.userAgent)||("undefined"==typeof e.plyr&&(e.plyr=new r(e)),c.push(e.plyr))}return c}}(this.plyr=this.plyr||{});