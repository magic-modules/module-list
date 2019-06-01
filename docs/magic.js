"use strict";function b(a){return l(a)||c(a)||j()}function c(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function d(a,b){if(null==a)return{};var c,d,f=e(a,b);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(a);for(d=0;d<g.length;d++)c=g[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(f[c]=a[c])}return f}function e(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function f(a){for(var b=1;b<arguments.length;b++){var c=null==arguments[b]?{}:arguments[b],d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){g(a,b,c[b])})}return a}function g(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function i(a,b){return l(a)||k(a,b)||j()}function j(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function k(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}function l(a){if(Array.isArray(a))return a}function m(a){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},m(a)}var n=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,i=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=i(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(!!(b&&!0!==b)&&("function"==typeof b[0]?[b]:k(b)))},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},n=function(c,a){for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},o=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||n(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},p=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2).toLowerCase()]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=i(d)))?a.setAttribute(b,d):a.removeAttribute(b)},q=function(a,c,d){var e=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name):document.createElement(a.name),f=a.props;for(var g in f)p(e,g,null,f[g],c,d);for(var h=0,j=a.children.length;h<j;h++)e.appendChild(q(a.children[h]=u(a.children[h]),c,d));return a.node=e},r=function(a){return null==a?null:a.key},s=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(q(e=u(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,o=e.props,t=d.children,v=e.children,w=0,x=0,y=t.length-1,z=v.length-1;for(var A in g=g||"svg"===e.name,j(n,o))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==o[A]&&p(c,A,n[A],o[A],f,g);for(;x<=z&&w<=y&&null!=(l=r(t[w]))&&l===r(v[x]);)s(c,t[w].node,t[w],v[x]=u(v[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=r(t[y]))&&l===r(v[z]);)s(c,t[y].node,t[y],v[z]=u(v[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(q(v[x]=u(v[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=r(k=t[w]),m=r(v[x]=u(v[x],k)),C[l]||null!=m&&m===r(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(s(c,k&&k.node,k,v[x],f,g),x++),w++):(l===m?(s(c,k.node,k,v[x],f,g),C[m]=!0,w++):null==(h=B[m])?s(c,k&&k.node,null,v[x],f,g):(s(c,c.insertBefore(h.node,k&&k.node),h,v[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==r(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},t=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},u=function(b,c){return b.type===a?((!c||t(c.lazy,b.lazy))&&((c=b.lazy.view(b.lazy)).lazy=b.lazy),c):b},v=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},w=function(a,e){return v(a,c,d,e,null,b)},x=function(a){return a.nodeType===b?w(a.nodeValue,a):v(a.nodeName.toLowerCase(),c,e.call(a.childNodes,x),a,null,1)},y=function(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push("object"===m(d)?d:w(d));return b=b||c,"function"==typeof a?a(b,g):v(a,b,g,null,b.key)};return{h:y,app:function app(a,b){var c={},d=!1,e=a.view,h=a.node,i=h&&x(h),j=a.subscriptions,l=[],m=function(a){p(this.actions[a.type],a)},n=function(a){return c===a||d||g(q,d=!0),c=a},p=(b||function(a){return a})(function(a,b,d){return"function"==typeof a?p(a(c,b),d||b):f(a)?"function"==typeof a[0]?p(a[0],"function"==typeof(a=a[1])?a(b):a,b):(k(a.slice(1)).map(function(a){a&&a[0](p,a[1],b)},n(a[0])),c):n(a)}),q=function(){d=!1,j&&(l=o(l,k(j(c)),p)),e&&(h=s(h.parentNode,h,i,"string"==typeof(i=e(c))?w(i):i,m))};p(a.init)}}}(),o=n.h,h=n.app,q=function(a){return function(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},d=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1],e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===m(a)})};return d||(e(b,"string","number","function")||Array.isArray(b)?(d=b,b={}):e(b.View,"function")&&(d=b.View,b={})),o(a,b,d)}},r=q("a"),a=q("button"),s=q("code"),t=q("div"),u=q("footer"),v=q("h1"),w=q("h2"),x=q("h3"),y=q("header"),z=q("img"),A=q("li"),B=q("nav"),C=q("p"),p=q("pre"),D=q("span"),E=q("ul"),F={url:"/module-list/",root:"/module-list/",title:"@magic-modules/module-list",description:"shows a list of all @magic-modules with gitbadges and urls to the docs",logotext:"ModuleList",menu:[{to:"/#installation",text:"installation"},{to:"/#usage",text:"usage"},{to:"/#demo",text:"demo"},{to:"/#source",text:"source"}],theme:"dark",pre:{theme:"light"}},G={mapClickToGo:function mapClickToGo(a){return a.preventDefault(),a},listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}}},H=function(){return u({class:"Footer"},[t({class:"Container"},["made with a few bits of ",N({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])])},I=function(a){if("string"==typeof a)a={project:a};else if(!a.project)return;var b=a,c=b.project,d=void 0!==c&&c,e=b.branch,f=void 0===e?"master":e,g=b.host,h=void 0===g?"github":g,j=[["npm",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://www.npmjs.com/package/@".concat(a),src:"https://img.shields.io/npm/v/@".concat(a,".svg")}}],["travis",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://travis-ci.com/".concat(a),src:"https://travis-ci.com/".concat(a,".svg?branch=").concat(f)}}],["appveyor",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;if(a){var b=a.split("/"),c=i(b,2),e=c[0],g=c[1];return e=e.replace(/-/g,""),{to:"https://ci.appveyor.com/project/".concat(e,"/").concat(g,"/branch/").concat(f),src:"https://img.shields.io/appveyor/ci/".concat(e,"/").concat(g,"/").concat(f,".svg")}}}],["coveralls",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return{to:"https://coveralls.io/".concat(h,"/").concat(a),src:"https://img.shields.io/coveralls/".concat(h,"/").concat(a,"/").concat(f,".svg")}}],["greenkeeper",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://greenkeeper.io",src:"https://badges.greenkeeper.io/".concat(a,".svg")}}],["snyk",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://snyk.io/test/".concat(h,"/").concat(a),src:"https://img.shields.io/snyk/vulnerabilities/github/".concat(a,".svg")}}]].map(function(b){var c=i(b,2),d=c[0],e=c[1];return e(a[d])}).filter(function(b){return b.to&&b.src});return j.length?E({class:"GitBadges"},j.map(function(a){var b=a.to,c=a.src;return A([N({to:b},L({src:c}))])})):void 0},J=function(a){var b=a.items,c=void 0===b?[]:b,d=a.org,e=a.host,g=void 0===e?"github":e,h=a.header,i=a.desc,j=void 0===i?a.description:i,k={};return a["class"]?!a["class"].includes("GitList")&&(k["class"]="GitList ".concat(a["class"])):k["class"]="GitList",k.id=a.id?a.id:d,k.id.startsWith("gl")||(k.id="gl-".concat(k.id)),t(k,[h&&w(h),j&&t({class:"description"},j),E({id:"".concat(k.id,"-ul")},[c.map(function(a){return J.Item(f({org:d,id:"".concat(k.id,"-li"),host:g},a))})])])};J.Item=function(a){var b=a.name,c=a.org,d=a.id,e=a.host,f=a.desc||a.description;return A({id:"".concat(d,"-").concat(b),class:"GitListItem"},[x([N({to:"https://".concat(e,".com/").concat(c,"/").concat(b)},"@".concat(c,"/").concat(b))]),f&&C(f),I("".concat(c,"/").concat(b)),N({to:"https://".concat(c,".").concat(e,".io/").concat(b)},"docs / demo")])};var K=function(a){var b=a.logo,c=a.menu,e=a.root,g=a.tagline,h=a.logotext,i=d(a,["logo","menu","root","tagline","logotext"]);return b||c||g?y({class:"Header"},[(b||h)&&N({to:e,class:"LogoWrapper"},[b&&L({class:"Logo",src:b}),h&&D({class:"LogoText"},h)]),c&&O(f({},i,{root:e,items:c}))]):void 0},L=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),z(a)},M=function(){0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return a({class:"LightSwitch",onclick:U.changeTheme})},N=function(a,b){var c=a.to,e=d(a,["to"]),f=e.href,g=e.text,h=e.nofollow,i=e.noreferrer,j=e.onclick,k=d(e,["href","text","nofollow","noreferrer","onclick"]);c=c||f||"",k.href=c;var l=c.startsWith("/");return l?k.onclick=[U.go,G.mapClickToGo]:(k.target="_blank",k.rel="noopener",h&&(k.rel+=" nofollow"),i&&(k.rel+=" noreferrer")),r(k,[g,b])},O=function(a){var b=a.items,c=a.hash,d=a.url,e=void 0===d?"":d,g=a.root,h=a["class"],i=void 0===h?"Menu":h,j=a.collapse;if(b.length)return c&&(e+="#".concat(c)),B({class:i},E(b.map(function(a){return P(f({},a,{root:g,url:e,collapse:void 0===j||j}))})))},P=function(a){var b=a.url,c=a.text,e=a.items,g=void 0===e?[]:e,h=a.root,i=a.parentTo,j=void 0===i?void 0:i,k=a.collapse,l=d(a,["url","text","items","root","parentTo","collapse"]);if(l.to||c){var m={class:"MenuItem"},n=l.to;n.startsWith("/#")&&(n=n.substr(1));var o=l.to[0],p="/"===o||"-"===o||"#"===o;if(j&&p)if("-"===o)n=j+n;else if("#"===o)n=j+n;else{var t=n.split("/")[1];if(t){var u=j.endsWith("/".concat(t,"/"));!u&&p&&(n=j+n)}}var q=n.startsWith(h);h&&p&&!q&&(n=h+n),l.to=n.replace(/\/\//g,"/");var r=b&&b.includes(l.to);b.endsWith(l.to)&&(m["class"]+=" active");var s=[];return(g.length&&r||!k)&&(s=E(g.map(function(a){return P(f({parentTo:l.to,root:h,url:b,collapse:k},a))}))),A(m,[l.to?N(l,c):D(l,c),s])}},Q=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return J(f({class:"ModuleList",org:"magic-modules",header:[N({to:"https://magic-modules/github.io"},"@magic-modules")],description:["modules are the grimoires of ",N({to:"https://magic.github.io/core"},"@magic")],items:[{name:"language-switch",description:"LanguageSwitch provides file hierarchy based multilanguage support for magic."},{name:"video-embed",description:["VideoEmbed embeds videos from any video hoster using iframes. "," comes with default support for vimeo and youtube."]},{name:"sound-cloud",description:"embed soundcloud track, playlist and user widgets"},{name:"module-list",description:"ModuleList shows the list of @magic-modules you are looking at."},{name:"theme-list",description:"ThemeList shows a list of all @magic-themes."},{name:"library-list",description:"LibraryList shows a list of all @magic-libraries libraries."},{name:"pre",description:"Pre allows you to display javascript code with syntax highlighting."},{name:"git-badges",description:"GitBadges shows a list of github repository status badges."},{name:"git-list",description:"show a list of git repositories like the one you are looking at."}]},a))},R=function(a){var b=a.page,c=a.state;b=b?b(c):"404 - not found";var d={class:"Page"};return c["class"]&&(d["class"]+=" ".concat(c["class"])),t({class:"Wrapper"},[K(c),t(d,b),H(c)])},S=function(b){"string"==typeof b&&(b={content:b,theme:"light"});var c=b,d=c.theme,f=c.content;return t({class:"Pre ".concat(d)},[t({class:"menu"},[a({onclick:[U.pre.clip,function(a){return{e:a,content:f}}]},"copy")]),p(T.pre.format(f))])},T={pre:function(){var a="\nlet this long package float\ngoto private class if short\nwhile protected with debugger case\ncontinue volatile interface\n\ninstanceof super synchronized throw\nextends final throws\ntry import double enum\n\nboolean abstract function\nimplements typeof transient break\ndefault do static void\n\nint new async native switch\nelse delete null public var\nawait byte finally catch\nin return for get const char\nmodule exports require\n".trim().split(/\b/g).map(function(a){return a.trim()}),c="\nArray Object String Number RegExp Null Symbol\nSet WeakSet Map WeakMap\nsetInterval setTimeout\nPromise\nJSON\nInt8Array Uint8Array Uint8ClampedArray\nInt16Array Uint16Array\nInt32Array Uint32Array\nFloat32Array Float64Array\n".trim().split(/\b/g).map(function(a){return a.trim()}),d=["true","false"],e=function(b){if("string"!=typeof b)return b;var e=b.split(/\b/);return b=e.map(function(b,f){if(""!==b){var g="";return"state"===b?g="state":"actions"===b?g="actions":e[f+1]&&e[f+1].includes(":")?g="colon":a.includes(b)?g="keyword":c.includes(b)?g="builtin":d.includes(b)?g="boolean":"."===e[f-1]?g="property":"."===e[f+1]&&(g="object"),g&&(b=D({class:g},b)),b}}),b},f=/([a-zA-Z0-9:+._-]+@[a-zA-Z0-9._-]+)/g,g=function(a){return a.split(f).map(function(a){if(f.test(a)){var b=a.startsWith("mailto:")?a:"mailto:".concat(a),c=a.replace("mailto:","");return N({class:"email",to:b},c)}return e(a)})},h=function(a,b){return[l(a.substring(0,b)),l(a.substring(b))]},i=function(a){return a.split(/(?= )/).map(function(a){return a.includes("://")?N({to:a},a):l(a)})},j=function(a){return a.includes("://")&&!a.includes("@")?i(a):g(a)},k=function(a){var c=a.replace(/"/g,"'"),d=c.split("'"),f=b(d),g=f[0],h=f[1],i=f.slice(2),k=i;1===k.length?k=l(k[0]):1<k.length&&(k=l(k.join("'")));var m=[];return m="undefined"==typeof h?e(a):[e(g),D({class:"string"},["'",j(h),"'"]),k],m},l=function(a){var b=a.indexOf("//"),c=a.trim();if(c.startsWith("//")){for(var d=a.search(/\S|$/),e="",f=0;f<d;f++)e+=" ";return c.startsWith("// ")||(a="".concat(e,"// ").concat(c.substr(2))),D({class:"comment"},[e,"// ",l(c.substring(3))])}return-1<b&&":"!==a[b-1]?h(a,b):2<a.indexOf("://")?i(a):a.indexOf("@")&&a.includes(".")&&!a.trim().includes(" ")?g(a):k(a)},m=function(a){return s({class:"line"},l(a))};return{format:function format(a){return a.trim().split("\n").map(m)}}}()},U={pop:function pop(a,b){var c=window.location,d=c.pathname,e=c.hash;return e=e.substring(1),b.state&&(d=b.state.url,e=b.state.hash),e?window.location.hash=e:window.scrollTo(0,0),f({},a,{url:d,hash:e})},go:function go(a,b){var c=b.currentTarget.href.replace(window.location.origin,""),d=c.split("#"),e=i(d,2),g=e[0],h=e[1],j=void 0===h?"":h;if(g===a.url&&j===a.hash)return a;if(window.history.pushState({url:g,hash:j},"",c),j){var k=document.getElementById(j);k&&window.scrollTo(0,k.scrollTop),window.location.hash=j}else window.scrollTo(0,0);return f({},a,{url:g,hash:j,prev:a.url})},changeTheme:function changeTheme(a){var b="dark"===a.theme?"light":"dark";return f({},U.page.replaceClass(a,[a.theme,b]),{theme:b})},pre:{clip:function clip(a,b){var c=b.content;if("undefined"!=typeof document&&"function"==typeof document.execCommand){var d=document.createElement("textarea");d.id="copy",d.innerHTML=c,document.body.appendChild(d);var e=document.getElementById("copy");e.select(),document.execCommand("copy"),document.body.removeChild(e)}return a}}},V={"/module-list/":function moduleList(a){return[v("@magic-modules/module-list"),C(["this is the ",N({to:"https://github.com/magic-modules"},"@magic-modules")," ModuleList component. It shows a list of all @magic-modules."]),I("magic-modules/module-list"),w({id:"installation"},"installation"),S("npm install magic-modules/module-list"),w({id:"usage"},"usage"),C("in a page or module View"),S("export const View = () => ModuleList()"),w({id:"demo"},"demo"),C("this is what it looks like"),Q(),w({id:"source"},"source"),C(["the source for this page is in the ",N({to:"https://github.com/magic-modules/module-list/tree/master/example"},"example directory")," and gets built and published to github using ",N({to:"https://github.com/magic/core"},"@magic/core")]),M(a)]},"/module-list/404/":function moduleList404(){return t("404 - not found")}};h({init:function init(){return f({},F,{url:window.location.pathname})},subscriptions:function subscriptions(){return[[G.listenPopState,U.pop]]},view:function view(a){var b=V[a.url]?a.url:"/404/",c=V[b];if(a.pages){var d=a.pages[b];for(var e in d)a[e]=d[e]}return t({id:"Magic"},R({page:c,state:a}))},node:document.getElementById("Magic")});