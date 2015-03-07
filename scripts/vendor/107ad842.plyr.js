!function(a){"use strict";function b(a,b){p.debug&&window.console&&console[b?"error":"log"](a)}function c(){var a,b,c,d=navigator.userAgent,e=navigator.appName,f=""+parseFloat(navigator.appVersion),g=parseInt(navigator.appVersion,10);return-1!==navigator.appVersion.indexOf("Windows NT")&&-1!==navigator.appVersion.indexOf("rv:11")?(e="IE",f="11;"):-1!==(b=d.indexOf("MSIE"))?(e="IE",f=d.substring(b+5)):-1!==(b=d.indexOf("Chrome"))?(e="Chrome",f=d.substring(b+7)):-1!==(b=d.indexOf("Safari"))?(e="Safari",f=d.substring(b+7),-1!==(b=d.indexOf("Version"))&&(f=d.substring(b+8))):-1!==(b=d.indexOf("Firefox"))?(e="Firefox",f=d.substring(b+8)):(a=d.lastIndexOf(" ")+1)<(b=d.lastIndexOf("/"))&&(e=d.substring(a,b),f=d.substring(b+1),e.toLowerCase()==e.toUpperCase()&&(e=navigator.appName)),-1!==(c=f.indexOf(";"))&&(f=f.substring(0,c)),-1!==(c=f.indexOf(" "))&&(f=f.substring(0,c)),g=parseInt(""+f,10),isNaN(g)&&(f=""+parseFloat(navigator.appVersion),g=parseInt(navigator.appVersion,10)),[e,g]}function d(a,b,c){return a.replace(new RegExp(b.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1"),"g"),c)}function e(a,b){a.length||(a=[a]);for(var c=a.length-1;c>=0;c--){var d=c>0?b.cloneNode(!0):b,e=a[c],f=e.parentNode,g=e.nextSibling;d.appendChild(e),g?f.insertBefore(d,g):f.appendChild(d)}}function f(a,b,c){if(a)if(a.classList)a.classList[c?"add":"remove"](b);else{var d=(" "+a.className+" ").replace(/\s+/g," ").replace(" "+b+" ","");a.className=d+(c?" "+b:"")}}function g(a,b,c){a.addEventListener(b,c,!1)}function h(a,b,c){a.removeEventListener(b,c,!1)}function i(a,b){return Math.floor(a/b*100)}function j(a){var b=m().isFullScreen()?{x:0,y:0}:k(a.currentTarget);return{x:a.clientX-b.x,y:a.clientY-b.y}}function k(a){for(var b=0,c=0;a;)b+=a.offsetLeft-a.scrollLeft+a.clientLeft,c+=a.offsetTop-a.scrollTop+a.clientTop,a=a.offsetParent;return{x:b,y:c}}function l(a,b){for(var c in b)b[c]&&b[c].constructor&&b[c].constructor===Object?(a[c]=a[c]||{},l(a[c],b[c])):a[c]=b[c];return a}function m(){var a={supportsFullScreen:!1,isFullScreen:function(){return!1},requestFullScreen:function(){},cancelFullScreen:function(){},fullScreenEventName:"",element:null,prefix:""},b="webkit moz o ms khtml".split(" ");if("undefined"!=typeof document.cancelFullScreen)a.supportsFullScreen=!0;else for(var c=0,d=b.length;d>c;c++){if(a.prefix=b[c],"undefined"!=typeof document[a.prefix+"CancelFullScreen"]){a.supportsFullScreen=!0;break}if("undefined"!=typeof document.msExitFullscreen&&document.msFullscreenEnabled){a.prefix="ms",a.supportsFullScreen=!0;break}}return"webkit"===a.prefix&&navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)&&(a.supportsFullScreen=!1),a.supportsFullScreen&&(a.fullScreenEventName="ms"==a.prefix?"MSFullscreenChange":a.prefix+"fullscreenchange",a.isFullScreen=function(){switch(this.prefix){case"":return document.fullScreen;case"webkit":return document.webkitIsFullScreen;case"ms":return null!==document.msFullscreenElement;default:return document[this.prefix+"FullScreen"]}},a.requestFullScreen=function(a){return""===this.prefix?a.requestFullScreen():a[this.prefix+("ms"==this.prefix?"RequestFullscreen":"RequestFullScreen")]("webkit"===this.prefix?a.ALLOW_KEYBOARD_INPUT:null)},a.cancelFullScreen=function(){return""===this.prefix?document.cancelFullScreen():document[this.prefix+("ms"==this.prefix?"ExitFullscreen":"CancelFullScreen")]()},a.element=function(){return""===this.prefix?document.fullscreenElement:document[this.prefix+"FullscreenElement"]}),a}function n(a){function k(){for(Q.subcount=0;q(Q.captions[Q.subcount][0])<Q.media.currentTime.toFixed(1);)if(Q.subcount++,Q.subcount>Q.captions.length-1){Q.subcount=Q.captions.length-1;break}}function l(){f(Q.container,p.classes.captions.enabled,!0),p.captions.defaultActive&&(f(Q.container,p.classes.captions.active,!0),Q.buttons.captions.setAttribute("checked","checked"))}function n(a){var b=[];return b=a.split(" --> "),r(b[0])}function q(a){var b=[];return b=a.split(" --> "),r(b[1])}function r(a){if(null===a||void 0===a)return 0;var b,c=[],d=[];return c=a.split(","),d=c[0].split(":"),b=Math.floor(60*d[0]*60)+Math.floor(60*d[1])+Math.floor(d[2])}function s(a){return Q.container.querySelectorAll(a)}function t(a){return s(a)[0]}function u(){try{return window.self!==window.top}catch(a){return!0}}function v(){b("Injecting custom controls.");var a=p.html;a=d(a,"{aria-label}",p.playAriaLabel),a=d(a,"{id}",Q.random),Q.container.insertAdjacentHTML("beforeend",a)}function w(){try{return Q.controls=t(p.selectors.controls),Q.buttons={},Q.buttons.play=t(p.selectors.buttons.play),Q.buttons.pause=t(p.selectors.buttons.pause),Q.buttons.restart=t(p.selectors.buttons.restart),Q.buttons.rewind=t(p.selectors.buttons.rewind),Q.buttons.forward=t(p.selectors.buttons.forward),Q.buttons.mute=t(p.selectors.buttons.mute),Q.buttons.captions=t(p.selectors.buttons.captions),Q.buttons.fullscreen=t(p.selectors.buttons.fullscreen),Q.progress={},Q.progress.container=t(p.selectors.progress.container),Q.progress.buffer={},Q.progress.buffer.bar=t(p.selectors.progress.buffer),Q.progress.buffer.text=Q.progress.buffer.bar.getElementsByTagName("span")[0],Q.progress.played={},Q.progress.played.bar=t(p.selectors.progress.played),Q.progress.played.text=Q.progress.played.bar.getElementsByTagName("span")[0],Q.volume=t(p.selectors.buttons.volume),Q.duration=t(p.selectors.duration),Q.seekTime=s(p.selectors.seekTime),!0}catch(a){return b("It looks like there's a problem with your controls html. Bailing.",!0),!1}}function x(){if(Q.media=Q.container.querySelectorAll("audio, video")[0],!Q.media)return b("No audio or video element found!",!0),!1;if(Q.media.removeAttribute("controls"),Q.type="video"==Q.media.tagName.toLowerCase()?"video":"audio",f(Q.container,p.classes[Q.type],!0),f(Q.container,p.classes.stopped,null===Q.media.getAttribute("autoplay")),"video"===Q.type){var a=document.createElement("div");a.setAttribute("class",p.classes.videoWrapper),e(Q.media,a),Q.videoContainer=a}}function y(){if("video"===Q.type){Q.videoContainer.insertAdjacentHTML("afterbegin","<div class='"+p.selectors.captions.replace(".","")+"'></div>"),Q.captionsContainer=t(p.selectors.captions),Q.isTextTracks=!1,Q.media.textTracks&&(Q.isTextTracks=!0);for(var a,c="",d=Q.media.childNodes,e=0;e<d.length;e++)"track"===d[e].nodeName.toLowerCase()&&(a=d[e].getAttribute("kind"),"captions"===a&&(c=d[e].getAttribute("src")));if(Q.captionExists=!0,""===c?(Q.captionExists=!1,b("No caption track found.")):b("Caption track found; URI: "+c),Q.captionExists){for(var h=Q.media.textTracks,i=0;i<h.length;i++)h[i].mode="hidden";if(l(Q),("IE"===Q.browserName&&10===Q.browserMajorVersion||"IE"===Q.browserName&&11===Q.browserMajorVersion||"Firefox"===Q.browserName&&Q.browserMajorVersion>=31||"Safari"===Q.browserName&&Q.browserMajorVersion>=7)&&(b("Detected IE 10/11 or Firefox 31+ or Safari 7+."),Q.isTextTracks=!1),Q.isTextTracks){b("TextTracks supported.");for(var j=0;j<h.length;j++){var k=h[j];"captions"===k.kind&&g(k,"cuechange",function(){this.activeCues[0]&&this.activeCues[0].hasOwnProperty("text")&&(Q.captionsContainer.innerHTML=this.activeCues[0].text)})}}else if(b("TextTracks not supported so rendering captions manually."),Q.currentCaption="",Q.subcount=0,Q.captions=[],g(Q.media,"timeupdate",function(){Q.media.currentTime.toFixed(1)>n(Q.captions[Q.subcount][0])&&Q.media.currentTime.toFixed(1)<q(Q.captions[Q.subcount][0])&&(Q.currentCaption=Q.captions[Q.subcount][1]),Q.media.currentTime.toFixed(1)>q(Q.captions[Q.subcount][0])&&Q.subcount<Q.captions.length-1&&Q.subcount++,Q.captionsContainer.innerHTML=Q.currentCaption}),""!==c){var m=new XMLHttpRequest;m.onreadystatechange=function(){if(4===m.readyState)if(200===m.status){var a,c=[],d=m.responseText;c=d.split("\n\n");for(var e=0;e<c.length;e++)a=c[e],Q.captions[e]=[],Q.captions[e]=a.split("\n");Q.captions.shift(),b("Successfully loaded the caption file via AJAX.")}else b("There was a problem loading the caption file via AJAX.",!0)},m.open("get",c,!0),m.send()}if("Safari"===Q.browserName&&Q.browserMajorVersion>=7){b("Safari 7+ detected; removing track from DOM."),h=Q.media.getElementsByTagName("track");for(var o=0;o<h.length;o++)Q.media.removeChild(h[o])}}else f(Q.container,p.classes.captions.enabled)}}function z(){Q.seekTime[0].innerHTML=p.seekInterval,Q.seekTime[1].innerHTML=p.seekInterval}function A(){if("video"===Q.type&&p.fullscreen.enabled){var a=o.supportsFullScreen;a||p.fullscreen.fallback&&!u()?(b((a?"Native":"Fallback")+" fullscreen enabled."),f(Q.container,p.classes.fullscreen.enabled,!0)):b("Fullscreen not supported and fallback disabled.")}}function B(){Q.media.play(),f(Q.container,p.classes.stopped),f(Q.container,p.classes.playing,!0)}function C(){Q.media.pause(),f(Q.container,p.classes.playing),f(Q.container,p.classes.stopped,!0)}function D(){Q.media.currentTime=0,Q.isTextTracks||(Q.subcount=0),B()}function E(a){"undefined"==typeof a&&(a=p.seekInterval);var b=Q.media.currentTime-a;Q.media.currentTime=0>b?0:b,Q.isTextTracks||"video"!==Q.type||k(Q)}function F(a){"undefined"==typeof a&&(a=p.seekInterval);var b=Q.media.currentTime+a;Q.media.currentTime=b>Q.media.duration?Q.media.duration:b,Q.isTextTracks||"video"!==Q.type||k(Q)}function G(){var a=o.supportsFullScreen;event.type===o.fullScreenEventName?p.fullscreen.active=o.isFullScreen():a?(o.isFullScreen()?o.cancelFullScreen():o.requestFullScreen(Q.container),p.fullscreen.active=o.isFullScreen()):(p.fullscreen.active=!p.fullscreen.active,p.fullscreen.active?(g(document,"keyup",H),document.body.style.overflow="hidden"):(h(document,"keyup",H),document.body.style.overflow="")),f(Q.container,p.classes.fullscreen.active,p.fullscreen.active)}function H(a){27===(a.which||a.charCode||a.keyCode)&&p.fullscreen.active&&G()}function I(a){"undefined"==typeof a&&(a=p.storage.enabled&&p.storage.supported?window.localStorage.plyr_volume||p.volume:p.volume),a>10&&(a=10),Q.volume.value=a,Q.media.volume=parseFloat(a/10),L(),p.storage.enabled&&p.storage.supported&&(window.localStorage.plyr_volume=a)}function J(a){"undefined"==typeof active&&(a=!Q.media.muted,Q.buttons.mute.checked=a),Q.media.muted=a,L()}function K(a){"undefined"==typeof a&&(a=-1===Q.container.className.indexOf(p.classes.captions.active),Q.buttons.captions.checked=a),a?f(Q.container,p.classes.captions.active,!0):f(Q.container,p.classes.captions.active)}function L(){f(Q.container,p.classes.muted,0===Q.media.volume||Q.media.muted)}function M(a){var b,c,d=0;switch(a.type){case"timeupdate":b=Q.progress.played.bar,c=Q.progress.played.text,d=i(Q.media.currentTime,Q.media.duration);break;case"playing":case"progress":b=Q.progress.buffer.bar,c=Q.progress.buffer.text,d=function(){var a=Q.media.buffered;return a.length?i(a.end(0),Q.media.duration):0}()}b&&d>0&&(b.value=d,c.innerHTML=d)}function N(){Q.secs=parseInt(Q.media.currentTime%60),Q.mins=parseInt(Q.media.currentTime/60%60),Q.secs=("0"+Q.secs).slice(-2),Q.mins=("0"+Q.mins).slice(-2),Q.duration.innerHTML=Q.mins+":"+Q.secs}function O(){g(Q.buttons.play,"click",function(){B(),Q.buttons.pause.focus()}),g(Q.buttons.pause,"click",function(){C(),Q.buttons.play.focus()}),g(Q.buttons.restart,"click",D),g(Q.buttons.rewind,"click",function(){E(p.seekInterval)}),g(Q.buttons.forward,"click",function(){F(p.seekInterval)}),g(Q.volume,"change",function(){I(this.value)}),g(Q.buttons.mute,"change",function(){J(this.checked)}),g(Q.buttons.fullscreen,"click",G),g(document,o.fullScreenEventName,G),"video"===Q.type&&p.click&&g(Q.videoContainer,"click",function(){Q.media.paused?B():Q.media.ended?D():C()}),g(Q.media,"timeupdate",N),g(Q.media,"timeupdate",M),g(Q.progress.played.bar,"click",function(a){Q.pos=j(a).x/this.offsetWidth,Q.media.currentTime=Q.pos*Q.media.duration,Q.isTextTracks||"video"!==Q.type||k(Q)}),g(Q.buttons.captions,"click",function(){K(this.checked)}),g(Q.media,"ended",function(){"video"===Q.type&&(Q.captionsContainer.innerHTML=""),f(Q.container,p.classes.stopped,!0),f(Q.container,p.classes.playing)}),g(Q.media,"progress",M),g(Q.media,"playing",M)}function P(){return o=m(),Q.browserInfo=c(),Q.browserName=Q.browserInfo[0],Q.browserMajorVersion=Q.browserInfo[1],b(Q.browserName+" "+Q.browserMajorVersion),"IE"!==Q.browserName||8!==Q.browserMajorVersion&&9!==Q.browserMajorVersion?(p.playAriaLabel="undefined"!=typeof p.title&&p.title.length?"Play "+p.title:"Play",x(),Q.random=Math.floor(1e4*Math.random()),v(),w()?(y(),I(),A(),z(),void O()):!1):(b("Browser not suppported.",!0),!1)}var Q=this;return Q.container=a,P(),{media:Q.media,play:B,pause:C,restart:D,rewind:E,forward:F,setVolume:I,toggleMute:J,toggleCaptions:K}}var o,p,q={enabled:!0,debug:!1,seekInterval:10,volume:5,click:!0,selectors:{container:".player",controls:".player-controls",buttons:{play:"[data-player='play']",pause:"[data-player='pause']",restart:"[data-player='restart']",rewind:"[data-player='rewind']",forward:"[data-player='fast-forward']",mute:"[data-player='mute']",volume:"[data-player='volume']",captions:"[data-player='captions']",fullscreen:"[data-player='fullscreen']"},progress:{container:".player-progress",buffer:".player-progress-buffer",played:".player-progress-played"},captions:".player-captions",duration:".player-duration",seekTime:".player-seek-time"},classes:{video:"player-video",videoWrapper:"player-video-wrapper",audio:"player-audio",stopped:"stopped",playing:"playing",muted:"muted",captions:{enabled:"captions-enabled",active:"captions-active"},fullscreen:{enabled:"fullscreen-enabled",active:"fullscreen-active"}},captions:{defaultActive:!1},fullscreen:{enabled:!0,fallback:!0},storage:{enabled:!0,supported:function(){try{return"localStorage"in window&&null!==window.localStorage}catch(a){return!1}}}};a.setup=function(a){if(p=l(q,a),!p.enabled)return!1;for(var b=document.querySelectorAll(p.selectors.container),c=[],d=b.length-1;d>=0;d--){var e=b[d];"undefined"==typeof e.plyr&&(e.plyr=new n(e)),c.push(e.plyr)}return c}}(this.plyr=this.plyr||{});var Hogan={};!function(a){function b(a,b,c){var d;return b&&"object"==typeof b&&(void 0!==b[a]?d=b[a]:c&&b.get&&"function"==typeof b.get&&(d=b.get(a))),d}function c(a,b,c,d,e,f){function g(){}function h(){}g.prototype=a,h.prototype=a.subs;var i,j=new g;j.subs=new h,j.subsText={},j.buf="",d=d||{},j.stackSubs=d,j.subsText=f;for(i in b)d[i]||(d[i]=b[i]);for(i in d)j.subs[i]=d[i];e=e||{},j.stackPartials=e;for(i in c)e[i]||(e[i]=c[i]);for(i in e)j.partials[i]=e[i];return j}function d(a){return String(null===a||void 0===a?"":a)}function e(a){return a=d(a),k.test(a)?a.replace(f,"&amp;").replace(g,"&lt;").replace(h,"&gt;").replace(i,"&#39;").replace(j,"&quot;"):a}a.Template=function(a,b,c,d){a=a||{},this.r=a.code||this.r,this.c=c,this.options=d||{},this.text=b||"",this.partials=a.partials||{},this.subs=a.subs||{},this.buf=""},a.Template.prototype={r:function(){return""},v:e,t:d,render:function(a,b,c){return this.ri([a],b||{},c)},ri:function(a,b,c){return this.r(a,b,c)},ep:function(a,b){var d=this.partials[a],e=b[d.name];if(d.instance&&d.base==e)return d.instance;if("string"==typeof e){if(!this.c)throw new Error("No compiler available.");e=this.c.compile(e,this.options)}if(!e)return null;if(this.partials[a].base=e,d.subs){b.stackText||(b.stackText={});for(key in d.subs)b.stackText[key]||(b.stackText[key]=void 0!==this.activeSub&&b.stackText[this.activeSub]?b.stackText[this.activeSub]:this.text);e=c(e,d.subs,d.partials,this.stackSubs,this.stackPartials,b.stackText)}return this.partials[a].instance=e,e},rp:function(a,b,c,d){var e=this.ep(a,c);return e?e.ri(b,c,d):""},rs:function(a,b,c){var d=a[a.length-1];if(!l(d))return void c(a,b,this);for(var e=0;e<d.length;e++)a.push(d[e]),c(a,b,this),a.pop()},s:function(a,b,c,d,e,f,g){var h;return l(a)&&0===a.length?!1:("function"==typeof a&&(a=this.ms(a,b,c,d,e,f,g)),h=!!a,!d&&h&&b&&b.push("object"==typeof a?a:b[b.length-1]),h)},d:function(a,c,d,e){var f,g=a.split("."),h=this.f(g[0],c,d,e),i=this.options.modelGet,j=null;if("."===a&&l(c[c.length-2]))h=c[c.length-1];else for(var k=1;k<g.length;k++)f=b(g[k],h,i),void 0!==f?(j=h,h=f):h="";return e&&!h?!1:(e||"function"!=typeof h||(c.push(j),h=this.mv(h,c,d),c.pop()),h)},f:function(a,c,d,e){for(var f=!1,g=null,h=!1,i=this.options.modelGet,j=c.length-1;j>=0;j--)if(g=c[j],f=b(a,g,i),void 0!==f){h=!0;break}return h?(e||"function"!=typeof f||(f=this.mv(f,c,d)),f):e?!1:""},ls:function(a,b,c,e,f){var g=this.options.delimiters;return this.options.delimiters=f,this.b(this.ct(d(a.call(b,e)),b,c)),this.options.delimiters=g,!1},ct:function(a,b,c){if(this.options.disableLambda)throw new Error("Lambda features disabled.");return this.c.compile(a,this.options).render(b,c)},b:function(a){this.buf+=a},fl:function(){var a=this.buf;return this.buf="",a},ms:function(a,b,c,d,e,f,g){var h,i=b[b.length-1],j=a.call(i);return"function"==typeof j?d?!0:(h=this.activeSub&&this.subsText&&this.subsText[this.activeSub]?this.subsText[this.activeSub]:this.text,this.ls(j,i,c,h.substring(e,f),g)):j},mv:function(a,b,c){var e=b[b.length-1],f=a.call(e);return"function"==typeof f?this.ct(d(f.call(e)),e,c):f},sub:function(a,b,c,d){var e=this.subs[a];e&&(this.activeSub=a,e(b,c,this,d),this.activeSub=!1)}};var f=/&/g,g=/</g,h=/>/g,i=/\'/g,j=/\"/g,k=/[&<>\"\']/,l=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)}}("undefined"!=typeof exports?exports:Hogan),function(a){function b(a){"}"===a.n.substr(a.n.length-1)&&(a.n=a.n.substring(0,a.n.length-1))}function c(a){return a.trim?a.trim():a.replace(/^\s*|\s*$/g,"")}function d(a,b,c){if(b.charAt(c)!=a.charAt(0))return!1;for(var d=1,e=a.length;e>d;d++)if(b.charAt(c+d)!=a.charAt(d))return!1;return!0}function e(b,c,d,h){var i=[],j=null,k=null,l=null;for(k=d[d.length-1];b.length>0;){if(l=b.shift(),k&&"<"==k.tag&&!(l.tag in v))throw new Error("Illegal content in < super tag.");if(a.tags[l.tag]<=a.tags.$||f(l,h))d.push(l),l.nodes=e(b,l.tag,d,h);else{if("/"==l.tag){if(0===d.length)throw new Error("Closing tag without opener: /"+l.n);if(j=d.pop(),l.n!=j.n&&!g(l.n,j.n,h))throw new Error("Nesting error: "+j.n+" vs. "+l.n);return j.end=l.i,i}"\n"==l.tag&&(l.last=0==b.length||"\n"==b[0].tag)}i.push(l)}if(d.length>0)throw new Error("missing closing tag: "+d.pop().n);return i}function f(a,b){for(var c=0,d=b.length;d>c;c++)if(b[c].o==a.n)return a.tag="#",!0}function g(a,b,c){for(var d=0,e=c.length;e>d;d++)if(c[d].c==a&&c[d].o==b)return!0}function h(a){var b=[];for(var c in a)b.push('"'+j(c)+'": function(c,p,t,i) {'+a[c]+"}");return"{ "+b.join(",")+" }"}function i(a){var b=[];for(var c in a.partials)b.push('"'+j(c)+'":{name:"'+j(a.partials[c].name)+'", '+i(a.partials[c])+"}");return"partials: {"+b.join(",")+"}, subs: "+h(a.subs)}function j(a){return a.replace(s,"\\\\").replace(p,'\\"').replace(q,"\\n").replace(r,"\\r").replace(t,"\\u2028").replace(u,"\\u2029")}function k(a){return~a.indexOf(".")?"d":"f"}function l(a,b){var c="<"+(b.prefix||""),d=c+a.n+w++;return b.partials[d]={name:a.n,partials:{}},b.code+='t.b(t.rp("'+j(d)+'",c,p,"'+(a.indent||"")+'"));',d}function m(a,b){b.code+="t.b(t.t(t."+k(a.n)+'("'+j(a.n)+'",c,p,0)));'}function n(a){return"t.b("+a+");"}var o=/\S/,p=/\"/g,q=/\n/g,r=/\r/g,s=/\\/g,t=/\u2028/,u=/\u2029/;a.tags={"#":1,"^":2,"<":3,$:4,"/":5,"!":6,">":7,"=":8,_v:9,"{":10,"&":11,_t:12},a.scan=function(e,f){function g(){s.length>0&&(t.push({tag:"_t",text:new String(s)}),s="")}function h(){for(var b=!0,c=w;c<t.length;c++)if(b=a.tags[t[c].tag]<a.tags._v||"_t"==t[c].tag&&null===t[c].text.match(o),!b)return!1;return b}function i(a,b){if(g(),a&&h())for(var c,d=w;d<t.length;d++)t[d].text&&((c=t[d+1])&&">"==c.tag&&(c.indent=t[d].text.toString()),t.splice(d,1));else b||t.push({tag:"\n"});u=!1,w=t.length}function j(a,b){var d="="+y,e=a.indexOf(d,b),f=c(a.substring(a.indexOf("=",b)+1,e)).split(" ");return x=f[0],y=f[f.length-1],e+d.length-1}var k=e.length,l=0,m=1,n=2,p=l,q=null,r=null,s="",t=[],u=!1,v=0,w=0,x="{{",y="}}";for(f&&(f=f.split(" "),x=f[0],y=f[1]),v=0;k>v;v++)p==l?d(x,e,v)?(--v,g(),p=m):"\n"==e.charAt(v)?i(u):s+=e.charAt(v):p==m?(v+=x.length-1,r=a.tags[e.charAt(v+1)],q=r?e.charAt(v+1):"_v","="==q?(v=j(e,v),p=l):(r&&v++,p=n),u=v):d(y,e,v)?(t.push({tag:q,n:c(s),otag:x,ctag:y,i:"/"==q?u-x.length:v+y.length}),s="",v+=y.length-1,p=l,"{"==q&&("}}"==y?v++:b(t[t.length-1]))):s+=e.charAt(v);return i(u,!0),t};var v={_t:!0,"\n":!0,$:!0,"/":!0};a.stringify=function(b){return"{code: function (c,p,i) { "+a.wrapMain(b.code)+" },"+i(b)+"}"};var w=0;a.generate=function(b,c,d){w=0;var e={code:"",subs:{},partials:{}};return a.walk(b,e),d.asString?this.stringify(e,c,d):this.makeTemplate(e,c,d)},a.wrapMain=function(a){return'var t=this;t.b(i=i||"");'+a+"return t.fl();"},a.template=a.Template,a.makeTemplate=function(a,b,c){var d=this.makePartials(a);return d.code=new Function("c","p","i",this.wrapMain(a.code)),new this.template(d,b,this,c)},a.makePartials=function(a){var b,c={subs:{},partials:a.partials,name:a.name};for(b in c.partials)c.partials[b]=this.makePartials(c.partials[b]);for(b in a.subs)c.subs[b]=new Function("c","p","t","i",a.subs[b]);return c},a.codegen={"#":function(b,c){c.code+="if(t.s(t."+k(b.n)+'("'+j(b.n)+'",c,p,1),c,p,0,'+b.i+","+b.end+',"'+b.otag+" "+b.ctag+'")){t.rs(c,p,function(c,p,t){',a.walk(b.nodes,c),c.code+="});c.pop();}"},"^":function(b,c){c.code+="if(!t.s(t."+k(b.n)+'("'+j(b.n)+'",c,p,1),c,p,1,0,0,"")){',a.walk(b.nodes,c),c.code+="};"},">":l,"<":function(b,c){var d={partials:{},code:"",subs:{},inPartial:!0};a.walk(b.nodes,d);var e=c.partials[l(b,c)];e.subs=d.subs,e.partials=d.partials},$:function(b,c){var d={subs:{},code:"",partials:c.partials,prefix:b.n};a.walk(b.nodes,d),c.subs[b.n]=d.code,c.inPartial||(c.code+='t.sub("'+j(b.n)+'",c,p,i);')},"\n":function(a,b){b.code+=n('"\\n"'+(a.last?"":" + i"))},_v:function(a,b){b.code+="t.b(t.v(t."+k(a.n)+'("'+j(a.n)+'",c,p,0)));'},_t:function(a,b){b.code+=n('"'+j(a.text)+'"')},"{":m,"&":m},a.walk=function(b,c){for(var d,e=0,f=b.length;f>e;e++)d=a.codegen[b[e].tag],d&&d(b[e],c);return c},a.parse=function(a,b,c){return c=c||{},e(a,"",[],c.sectionTags||[])},a.cache={},a.cacheKey=function(a,b){return[a,!!b.asString,!!b.disableLambda,b.delimiters,!!b.modelGet].join("||")},a.compile=function(b,c){c=c||{};var d=a.cacheKey(b,c),e=this.cache[d];if(e){var f=e.partials;for(var g in f)delete f[g].instance;return e}return e=this.generate(this.parse(this.scan(b,c.delimiters),b,c),b,c),this.cache[d]=e}}("undefined"!=typeof exports?exports:Hogan);var Mustache=function(a){function b(b,c,d,e){var f=this.f(b,c,d,0),g=c;return f&&(g=g.concat(f)),a.Template.prototype.rp.call(this,b,g,d,e)}var c=function(c,d,e){this.rp=b,a.Template.call(this,c,d,e)};c.prototype=a.Template.prototype;var d,e=function(){this.cache={},this.generate=function(a,b){return new c(new Function("c","p","i",a),b,d)}};return e.prototype=a,d=new e,{to_html:function(a,b,c,e){var f=d.compile(a),g=f.render(b,c);return e?void e(g):g}}}(Hogan),templates={};templates.controls=new Hogan.Template({code:function(a,b,c){var d=this;return d.b(c=c||""),d.b('<div class="player-controls">'),d.b("\n"+c),d.b('	<div class="player-progress">'),d.b("\n"+c),d.b('		<progress class="player-progress-played" max="100" value="0">'),d.b("\n"+c),d.b("			<span>0</span>% played"),d.b("\n"+c),d.b("		</progress>"),d.b("\n"+c),d.b('		<progress class="player-progress-buffer" max="100" value="0">'),d.b("\n"+c),d.b("			<span>0</span>% buffered"),d.b("\n"+c),d.b("		</progress>"),d.b("\n"+c),d.b("	</div>"),d.b("\n"+c),d.b('	<span class="player-controls-playback">'),d.b("\n"+c),d.b('		<button type="button" data-player="restart">'),d.b("\n"+c),d.b('			<svg><use xlink:href="#icon-refresh"></use></svg>'),d.b("\n"+c),d.b('			<span class="sr-only">Restart</span>'),d.b("\n"+c),d.b("		</button>"),d.b("\n"+c),d.b('		<button type="button" data-player="rewind">'),d.b("\n"+c),d.b('			<svg><use xlink:href="#icon-rewind"></use></svg>'),d.b("\n"+c),d.b('			<span class="sr-only">Rewind <span class="player-seek-time">10</span> seconds</span>'),d.b("\n"+c),d.b("		</button>"),d.b("\n"+c),d.b('		<button type="button" aria-label="{aria-label}" data-player="play">'),d.b("\n"+c),d.b('			<svg><use xlink:href="#icon-play"></use></svg>'),d.b("\n"+c),d.b('			<span class="sr-only">Play</span>'),d.b("\n"+c),d.b("		</button>"),d.b("\n"+c),d.b('		<button type="button" data-player="pause">'),d.b("\n"+c),d.b('			<svg><use xlink:href="#icon-pause"></use></svg>'),d.b("\n"+c),d.b('			<span class="sr-only">Pause</span>'),d.b("\n"+c),d.b("		</button>"),d.b("\n"+c),d.b('		<button type="button" data-player="fast-forward">'),d.b("\n"+c),d.b('			<svg><use xlink:href="#icon-fast-forward"></use></svg>'),d.b("\n"+c),d.b('			<span class="sr-only">Fast forward <span class="player-seek-time">10</span> seconds</span>'),d.b("\n"+c),d.b("		</button>"),d.b("\n"+c),d.b('		<span class="player-time">'),d.b("\n"+c),d.b('			<span class="sr-only">Time</span>'),d.b("\n"+c),d.b('			<span class="player-duration">00:00</span>'),d.b("\n"+c),d.b("		</span>"),d.b("\n"+c),d.b("	</span>"),d.b("\n"+c),d.b('	<span class="player-controls-sound">'),d.b("\n"+c),d.b('		<input class="inverted sr-only" id="mute{id}" type="checkbox" data-player="mute">'),d.b("\n"+c),d.b('		<label id="mute{id}" for="mute{id}">'),d.b("\n"+c),d.b('			<svg class="icon-muted"><use xlink:href="#icon-muted"></use></svg>'),d.b("\n"+c),d.b('			<svg><use xlink:href="#icon-sound"></use></svg>'),d.b("\n"+c),d.b('			<span class="sr-only">Mute</span>'),d.b("\n"+c),d.b("		</label>"),d.b("\n"),d.b("\n"+c),d.b('		<label for="volume{id}" class="sr-only">Volume:</label>'),d.b("\n"+c),d.b('		<input id="volume{id}" class="player-volume" type="range" min="0" max="10" value="5" data-player="volume">'),d.b("\n"),d.b("\n"+c),d.b('		<input class="sr-only" id="captions{id}" type="checkbox" data-player="captions">'),d.b("\n"+c),d.b('		<label for="captions{id}">'),d.b("\n"+c),d.b('			<svg><use xlink:href="#icon-bubble"></use></svg>'),d.b("\n"+c),d.b('			<span class="sr-only">Captions</span>'),d.b("\n"+c),d.b("		</label>"),d.b("\n"),d.b("\n"+c),d.b('		<button type="button" data-player="fullscreen">'),d.b("\n"+c),d.b('			<svg class="icon-exit-fullscreen"><use xlink:href="#icon-collapse"></use></svg>'),d.b("\n"+c),d.b('			<svg><use xlink:href="#icon-expand"></use></svg>'),d.b("\n"+c),d.b('			<span class="sr-only">Toggle fullscreen</span>'),d.b("\n"+c),d.b("		</button>"),d.b("\n"+c),d.b("	</span>"),d.b("\n"+c),d.b("</div>"),d.fl()},partials:{},subs:{}}),plyr.setup({debug:!0,title:"Video demo",html:templates.controls.render({}),captions:{defaultActive:!0}});