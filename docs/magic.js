"use strict";function _toArray(a){return _arrayWithHoles(a)||_iterableToArray(a)||_nonIterableRest()}function _iterableToArray(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(a,b){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function _arrayWithHoles(a){if(Array.isArray(a))return a}function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}var _ref=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,h=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=h(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(b&&!0!==b?"function"==typeof b[0]?[b]:k(b):0)},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},m=function(c,a){if(c!==a)for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},n=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||m(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},o=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2).toLowerCase()]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=h(d)))?a.setAttribute(b,d):a.removeAttribute(b)},p=function(a,c,d){var e=a.props,f=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name,{is:e.is}):document.createElement(a.name,{is:e.is});for(var g in e)o(f,g,null,e[g],c,d);for(var h=0,j=a.children.length;h<j;h++)f.appendChild(p(a.children[h]=u(a.children[h]),c,d));return a.node=f},q=function(a){return null==a?null:a.key},r=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(p(e=u(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,s=e.props,t=d.children,v=e.children,w=0,x=0,y=t.length-1,z=v.length-1;for(var A in g=g||"svg"===e.name,j(n,s))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==s[A]&&o(c,A,n[A],s[A],f,g);for(;x<=z&&w<=y&&null!=(l=q(t[w]))&&l===q(v[x]);)r(c,t[w].node,t[w],v[x]=u(v[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=q(t[y]))&&l===q(v[z]);)r(c,t[y].node,t[y],v[z]=u(v[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(p(v[x]=u(v[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=q(k=t[w]),m=q(v[x]=u(v[x],k)),C[l]||null!=m&&m===q(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(r(c,k&&k.node,k,v[x],f,g),x++),w++):(l===m?(r(c,k.node,k,v[x],f,g),C[m]=!0,w++):null==(h=B[m])?r(c,k&&k.node,null,v[x],f,g):(r(c,c.insertBefore(h.node,k&&k.node),h,v[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==q(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},s=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},t=function(a){return"object"===_typeof(a)?a:w(a)},u=function(b,c){return b.type===a?((!c||c.type!==a||s(c.lazy,b.lazy))&&((c=t(b.lazy.view(b.lazy))).lazy=b.lazy),c):b},v=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},w=function(a,e){return v(a,c,d,e,void 0,b)},x=function(a){return a.nodeType===b?w(a.nodeValue,a):v(a.nodeName.toLowerCase(),c,e.call(a.childNodes,x),a,void 0,1)};return{h:function h(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push(t(d));return b=b||c,"function"==typeof a?a(b,g):v(a,b,g,void 0,b.key)},app:function app(a){var b={},c=!1,d=a.view,e=a.node,h=e&&x(e),i=a.subscriptions,j=[],l=function(a){o(this.actions[a.type],a)},m=function(a){return b!==a&&(b=a,i&&(j=n(j,k([i(b)]),o)),d&&!c&&g(p,c=!0)),b},o=(a.middleware||function(a){return a})(function(a,c){return"function"==typeof a?o(a(b,c)):f(a)?"function"==typeof a[0]||f(a[0])?o(a[0],"function"==typeof a[1]?a[1](c):a[1]):(k(a.slice(1)).map(function(a){a&&a[0](o,a[1])},m(a[0])),b):m(a)}),p=function(){c=!1,e=r(e.parentNode,e,h,h=t(d(b)),l)};o(a.init)}}}(),h=_ref.h,app=_ref.app,C=function(a){return function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},d=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1],e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===_typeof(a)})};if(!d)if(e(b,"string","number","function")||Array.isArray(b))d=b,b={};else if(e(b.View,"function"))d=b.View,b={};else if(b.props||b.c)return h(a,{},b);return h(a,b,d)}},a=C("a"),button=C("button"),circle=C("circle"),code=C("code"),div=C("div"),footer=C("footer"),g=C("g"),h1=C("h1"),h2=C("h2"),h3=C("h3"),h4=C("h4"),h5=C("h5"),header=C("header"),img=C("img"),input=C("input"),label=C("label"),li=C("li"),link=C("link"),main=C("main"),meta=C("meta"),nav=C("nav"),p=C("p"),path=C("path"),pre=C("pre"),script=C("script"),span=C("span"),svg=C("svg"),title=C("title"),ul=C("ul"),view=C("view"),initialState={description:"shows a list of all @magic-modules with gitbadges and urls to the docs",gdpr:{allowed:[]},logotext:"ModuleList",menu:[{text:"installation",to:"/#installation"},{text:"usage",to:"/#usage"},{text:"demo",to:"/#demo"},{text:"source",to:"/#source"}],pageClass:{},root:"/module-list/",theme:"dark",title:"@magic-modules/module-list",url:"/module-list/"},helpers={listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}}},BlogMonth=function(a){var b,c=a.blog,d=a.link,e=a.month,f=a.url,g=a.year,h=Object.entries(c[g][e]),i=[e];return d?b="".concat(d).concat(e,"/"):i.push(" - ",g),[h3(b?Link({to:b},i):i),h.map(function(c){var d=_slicedToArray(c,2),e=d[0],f=d[1];return f.map(function(c){return BlogTeaser(_objectSpread({},a,{},c.state,{name:c.name,link:b,day:e}))})})]},BlogTeaser=function(a){return div([h4([a.day,"-",a.month,"-",a.year," - ",Link({to:a.name},a.title)]),p(a.description)])},BlogYear=function(a){var b,c=a.link,d=a.year,e=a.blog,f=a.url;return c?b="".concat(c).concat(d,"/"):f.endsWith("".concat(d,"/"))&&(b=f),div([h2(c?Link({to:b},d):d),Object.entries(e[d]).map(function(c){var d=_slicedToArray(c,2),e=d[0],f=d[1];return BlogMonth(_objectSpread({},a,{month:e,days:f,link:b}))})])},Credits=function(){return div({class:"Credits"},["made with a few bits of ",Link({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])},Footer=function(){var a=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];return footer({class:"Footer"},[div({class:"Container"},[Credits(),a])])},Gdpr=function(a){var b=a.gdpr,c=void 0===b?{}:b,d=a.cookies,e=void 0===d?[]:d,f=c.show,h=c.title,i=void 0===h?"Privacy Information":h,j=c.content,k=void 0===j?"This app neither saves, collects, nor shares any data about you.":j,l=c.noDataText,m=void 0===l?"Awesome.":l,n=c.allowTitle,o=void 0===n?"Allow:":n,q=c.allowAllText,r=void 0===q?"All":q,s=c.allowText,t=void 0===s?"Selected":s,u=c.denyText,v=void 0===u?"None":u;if(!f)return div({class:"Gdpr"},svg({class:"ShowHide",onclick:[actions.gdpr.show,{show:!0}],viewBox:"0 0 512 512"},[g([path({d:"\nM507,208c-1-7-7-12-14-13c-7-1-13,3-16,9\nc-5,11-16,19-29,19c-14,0-26-10-30-23c-2-8-11-13-19-11\nC393,191,389,192,384,192c-35-0-64-29-64-64c0-5,1-9,2-14\nc2-8-3-16-11-19C297,90,288,78,288,64c-0-13,8-24,19-29\nc6-3,10-9,9-16c-1-7-6-12-13-14C288,2,272,0,256,0\nC115,0,0,115,0,256c0,141,115,256,256,256c141-0,256-115,256-256\nC512,239,510,224,507,209z M414,414C374,455,318,480,256,480s-118-25-158-66\nC57,374,32,318,32,256S57,138,98,98C138,57,194,32,256,32c3,0,6,0,9,0\nC259,42,256,52,256,64c0,24,13,44,33,55C288,122,288,125,288,128\nc0,53,43,96,96,96c3,0,6-0,8-0C403,242,424,256,448,256\nc11-0,22-3,32-8c0,3,0,6,0,9C480,318,455,374,414,414z\n"}),circle({cx:"192",cy:"128",r:"32"}),circle({cx:"128",cy:"256",r:"32"}),circle({cx:"288",cy:"384",r:"32"}),circle({cx:"272",cy:"272",r:"16"}),circle({cx:"400",cy:"336",r:"16"}),circle({cx:"176",cy:"368",r:"16"})])]));var w=!!e.length;return div({class:"Gdpr"},[div({class:"Container"},[i&&h3(i),k&&p(k),w&&[ul(e.map(function(a){var b=a.name,d=a.title,e=a.content,f=a.allowed;return li({class:"Cookie"},[input({type:"checkbox",title:"allow ".concat(b," data"),id:b,checked:c.allowed.includes(b),onchange:[actions.gdpr.toggleAllow,{name:b}]}),(d||e)&&label({for:b},[d&&h4(d),e&&p(e)])])}))],w?[h5(o),input({class:"allow all",onclick:actions.gdpr.allow,type:"button",value:r}),input({class:"allow",onclick:actions.gdpr.close,type:"button",value:t}),input({class:"allow none",onclick:actions.gdpr.deny,type:"button",value:v})]:input({onclick:actions.gdpr.close,value:m,type:"button"})])])},GitBadges=function(a){if("string"==typeof a)a={project:a};else if(!a.project)return;var b=a,c=b.project,d=void 0!==c&&c,e=b.branch,f=void 0===e?"master":e,g=b.host,h=void 0===g?"github":g,i=[["npm",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://www.npmjs.com/package/@".concat(a),src:"https://img.shields.io/npm/v/@".concat(a,".svg")}}],["node",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{src:"https://img.shields.io/node/v/@magic/core"}}],["travis",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://travis-ci.com/".concat(a),src:"https://img.shields.io/travis/com/".concat(a,"/").concat(f)}}],["appveyor",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;if(a){var b=a.split("/"),c=_slicedToArray(b,2),e=c[0],g=c[1];return e=e.replace(/-/g,""),{to:"https://ci.appveyor.com/project/".concat(e,"/").concat(g,"/branch/").concat(f),src:"https://img.shields.io/appveyor/ci/".concat(e,"/").concat(g,"/").concat(f,".svg")}}}],["coveralls",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return{to:"https://coveralls.io/".concat(h,"/").concat(a),src:"https://img.shields.io/coveralls/".concat(h,"/").concat(a,"/").concat(f,".svg")}}],["greenkeeper",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://greenkeeper.io",src:"https://badges.greenkeeper.io/".concat(a,".svg")}}],["snyk",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://snyk.io/test/".concat(h,"/").concat(a),src:"https://img.shields.io/snyk/vulnerabilities/github/".concat(a,".svg")}}]].map(function(b){var c=_slicedToArray(b,2),d=c[0],e=c[1];return e(a[d])});return i.length?ul({class:"GitBadges"},i.map(function(a){var b=a.to,c=a.src;return b?li(Link({to:b},Img({src:c}))):li(Img({src:c}))})):void 0},GitList=function(a){var b=a.items,c=void 0===b?[]:b,d=a.org,e=a.host,f=void 0===e?"github":e,g=a.header,h=a.desc,i=void 0===h?a.description:h,j={};return a["class"]?!a["class"].includes("GitList")&&(j["class"]="GitList ".concat(a["class"])):j["class"]="GitList",j.id=a.id?a.id:d,j.id.startsWith("gl")||(j.id="gl-".concat(j.id)),div(j,[g&&h2(g),i&&div({class:"description"},i),ul({id:"".concat(j.id,"-ul")},[c.map(function(a){return GitList.Item(_objectSpread({org:d,id:"".concat(j.id,"-li"),host:f},a))})])])};GitList.Item=function(a){var b=a.name,c=a.org,d=a.id,e=a.host,f=a.desc||a.description;return li({id:"".concat(d,"-").concat(b),class:"GitListItem"},[h3([Link({to:"https://".concat(e,".com/").concat(c,"/").concat(b)},"@".concat(c,"/").concat(b))]),f&&p(f),GitBadges("".concat(c,"/").concat(b)),Link({to:"https://".concat(c,".").concat(e,".io/").concat(b)},"docs / demo")])};var Header=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],c=a.logo,d=a.menu,e=a.logotext,f=_objectWithoutProperties(a,["logo","menu","logotext"]);return c||d||e?header({class:"Header"},[(c||e)&&Logo({root:f.root,img:c,text:e}),d&&Menu({state:f,items:d}),b]):void 0},Img=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),img(a)},LightSwitch=function(){0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return button({class:"LightSwitch",onclick:actions.changeTheme},svg({viewBox:"0 0 352 460"},[path({d:"M149 48C96 48 48 95 47 143c-1 13 19 17 20 0-1-35 48-75 83-75 15 0 12-22-1-20z"}),path({d:"M176 0C74 0 0 83 0 176c9 91 84 118 100 204h20c-16-92-97-138-100-204C22 70 105 21 176 20zM95 400c2 68 20 48 40 60h82c20-12 38 8 40-60z"}),path({d:"M175 0c102 0 177 83 177 176-9 91-86 118-102 204h-20c16-92 99-138 102-204-2-106-86-155-157-156z"})]))},Link=function(b){var c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],d=b.to,e=b.action,f=void 0===e?actions.go:e,g=_objectWithoutProperties(b,["to","action"]),h=g.href,i=g.text,j=g.nofollow,k=g.noreferrer,l=_objectWithoutProperties(g,["href","text","nofollow","noreferrer"]);d=d||h||"",l.href=d;var m="/"===d[0]||"#"===d[0];return m?l.onclick=[f,lib.preventDefault]:(l.target="_blank",l.rel="noopener",j&&(l.rel+=" nofollow"),k&&(l.rel+=" noreferrer")),a(l,[i,c])},Logo=function(a){var b=a.img,c=a.text,d=_objectWithoutProperties(a,["img","text"]);return Link({to:d.root,class:"Logo"},[b&&Img(b),c&&span(c)])},Menu=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a["class"],c=void 0===b?"Menu":b,d=a.collapse,e=a.items,f=a.state,g=f.url,h=f.hash,i=f.root;return h&&!g.endsWith(h)&&(g+="#".concat(h)),nav({className:c},ul(e.map(function(a){return MenuItem(_objectSpread({},a,{url:g,root:i,collapse:void 0===d||d}))})))},MenuItem=function(a){var b=a.text,c=a.items,d=void 0===c?[]:c,e=a.url,f=a.root,g=a.parentTo,h=void 0===g?void 0:g,j=a.collapse,k=_objectWithoutProperties(a,["text","items","url","root","parentTo","collapse"]),l={class:{}},i=k.to;f&&i.startsWith("/")&&(i=i.substr(1));var m=k.to[0];h&&("-"===m||"#"===m)&&(i=h+i);var n=i.startsWith(f);f&&("/"===m||"-"===m||"#"===m)&&!n&&(i=f+i),k.to=i.replace(/\/\//g,"/"),k.to===e&&(l["class"].active=!0);var o=[],p=e.startsWith(k.to)||!j;return p&&d.length&&(o=ul(d.map(function(a){return MenuItem(_objectSpread({parentTo:k.to,url:e,root:f,collapse:j},a))}))),li(l,[k.to?MenuLink(k,b):span(k,b),o])},MenuLink=function(a,b){return Link(a,b)},ModuleList=function(){return GitList({class:"ModuleList",org:"magic-modules",header:[Link({to:"https://magic-modules/github.io"},"@magic-modules")],description:["modules are the building blocks of ",Link({to:"https://magic.github.io/core"},"@magic"),". modules add both client and server functionality to your @magic app."],items:[{name:"about-magic",description:"AboutMagic shows some information about @magic."},{name:"accordion",description:"Accordion shows a list of items that horizontally open/close."},{name:"gdpr",description:"Gdpr compliant popup that allows users to allow or deny cookies."},{name:"git-badges",description:"GitBadges shows a list of github repository status badges."},{name:"git-list",description:"show a list of git repositories like the one you are looking at."},{name:"hero",description:"Hero modules are full screen top of page content."},{name:"language-switch",description:"LanguageSwitch provides simple multilanguage support for magic."},{name:"library-list",description:"LibraryList shows a list of all @magic-libraries libraries."},{name:"light-switch",description:"dark/light theme color switch button."},{name:"messages",description:"Messages shows popup messages."},{name:"module-list",description:"ModuleList shows the list of @magic-modules you are looking at."},{name:"pre",description:"Pre allows you to display javascript code with syntax highlighting."},{name:"sound-cloud",description:"embed soundcloud track, playlist and user widgets"},{name:"theme-list",description:"ThemeList shows a list of all @magic-themes."},{name:"theme-vars",description:"ThemeVars shows a preview of all colors used in a @magic-themes."},{name:"video-embed",description:"VideoEmbed embeds videos from any video hoster."},{name:"xkcd",description:"Xkcd embeds xkcd comics."}]})},Page=function(a,b){var c=a.page,d=a.state,e={id:"Magic",class:d.pageClass};return main(e,div({class:{Wrapper:!0}},[Header(d),div({class:"Page",id:"page"},c(d)),Footer(d),b]))},Pre=function(a,b){"string"==typeof a?a={content:a}:b?a=_objectSpread({content:b},a):Array.isArray(a)&&(a={content:a.join("")});var c=a,d=c.content,e=c.lines,f=!(void 0!==e)||e;return div({class:{Pre:!0,lines:!f||"false"!==f}},[div({class:"menu"},[button({onclick:[actions.pre.clip,function(a){return{e:a,content:d}}]},"copy")]),pre(lib.pre.format(d))])},lib={db:function(){return{set:function set(a,b){var c=b.action,d=b.key,e=b.value,f=lib.db.init(),g=lib.json.stringify(e);return"Error"==typeof g?void a(c,new Error("db:write ".concat(d))):void(f[d]=g,a(c,{key:d,value:e}))},get:function get(a,b){var c=b.action,d=b.key,e=lib.db.init(),f=void 0;return d&&e[d]&&(f=lib.json.parse(e[d]),"Error"==typeof res)?void a(c,new Error("db:read ".concat(d))):void a(c,{key:d,value:f})},del:function del(a,b){var c=b.action,d=b.key,e=lib.db.init();d&&e[d]&&e.removeItem(d),a(c,{key:d,value:void 0})},init:function init(){return"undefined"!=typeof window&&window.localStorage||{}}}}(),json:function(){var a=function(a){return function(){try{return a.apply(void 0,arguments)}catch(a){return a}}},b=a(JSON.parse),c=a(JSON.stringify);return{parse:b,stringify:c}}(),pre:function(){var a="\nlet this long package float\ngoto private class if short\nwhile protected with debugger case\ncontinue volatile interface\n\ninstanceof super synchronized throw\nextends final throws\ntry import double enum\n\nboolean abstract function\nimplements typeof transient break\ndefault do static void\n\nint new async native switch\nelse delete null public var\nawait byte finally catch\nin return for get const char\nmodule exports require\n".trim().split(/\b/g).map(function(a){return a.trim()}),b="\nArray Object String Number RegExp Null Symbol\nSet WeakSet Map WeakMap\nsetInterval setTimeout\nPromise\nJSON\nInt8Array Uint8Array Uint8ClampedArray\nInt16Array Uint16Array\nInt32Array Uint32Array\nFloat32Array Float64Array\n".trim().split(/\b/g).map(function(a){return a.trim()}),c=["true","false"],d=function(d){if("string"!=typeof d)return d;var e=d.split(/\b/);return d=e.map(function(d,f){if(""!==d){var g="";return"state"===d?g="state":"actions"===d?g="actions":e[f+1]&&e[f+1].includes(":")?g="colon":a.includes(d)?g="keyword":b.includes(d)?g="builtin":c.includes(d)?g="boolean":"."===e[f-1]?g="property":"."===e[f+1]&&(g="object"),g&&(d=span({class:g},d)),d}}),d},e=/([a-zA-Z0-9:+._-]+@[a-zA-Z0-9._-]+)/g,f=function(a){return a.split(e).map(function(a){if(e.test(a)){var b=a.startsWith("mailto:")?a:"mailto:".concat(a),c=a.replace("mailto:","");return Link({class:"email",to:b},c)}return d(a)})},g=function(a){return a.split(" ").map(function(a){if(!a.includes("://"))return j(a+" ");var b=a.split("://"),c=_slicedToArray(b,2),d=c[0],e=c[1];return d.match(/[a-z]/g)?Link({to:a},a):a})},h=function(a){return a.includes("://")&&!a.includes("@")?g(a):f(a)},i=function(a){var b=/("|'|`)(.*?)\1/gim,c=[],e=a;return a.replace(b,function(a){var b=e.split(a),d=_slicedToArray(b,2),f=d[0],g=d[1];c.push(h(f)),c.push(span({class:"string"},h(a))),e=g}),c.push(h(e)),e===a?d(h(a)):c.map(function(a){return"string"==typeof a?j(a):a})},j=function(a){var b=a.trim(),c=a.split(/\/\//g),d=_toArray(c),e=d[0],f=d.slice(1);if(f=f.join("//"),e&&e.trim()&&(e=i(e)),f&&f.trim()){a.search(/\S|$/);f=span({class:"comment"},["//",g(f)])}return[e,f]},k=function(a){return code({class:"line"},j(a))};return{format:function format(a){return a.trim().split("\n").map(k)}}}(),preventDefault:function(){return function preventDefault(a){return a.preventDefault(),a}}()},actions={changeTheme:function changeTheme(a){return _objectSpread({},a,{pageClass:_objectSpread({},a.pageClass,{light:"dark"===a.theme}),theme:"dark"===a.theme?"light":"dark"})},gdpr:{allow:function allow(a){return[_objectSpread({},a,{gdpr:_objectSpread({},a.gdpr,{allowed:a.cookies.map(function(a){return a.name}),show:!1})}),[lib.db.set,{key:"magic-gdpr",value:{allowed:a.cookies.map(function(a){return a.name}),show:!1},action:[actions.gdpr.show,{show:!1}]}]]},close:function close(a){return[_objectSpread({},a,{gdpr:_objectSpread({},a.gdpr,{show:!1})}),[lib.db.set,{key:"magic-gdpr",value:{allowed:a.gdpr.allowed,show:!1},action:[actions.gdpr.show,{show:!1}]}]]},deny:function deny(a){return[_objectSpread({},a,{gdpr:_objectSpread({},a.gdpr,{allowed:[]})}),[lib.db.set,{key:"magic-gdpr",value:{allowed:[],show:!1},action:[actions.gdpr.show,{show:!1}]}]]},show:function(a,b){var c=b.show,d=b.allowed,e=void 0===d?a.gdpr.allowed:d;return b.value&&(c=b.value.show,b.value.allowed&&(e=b.value.allowed)),"boolean"==typeof c?_objectSpread({},a,{gdpr:_objectSpread({},a.gdpr,{show:c,allowed:e})}):a},toggleAllow:function toggleAllow(a,b){var d=b.name,e=a.gdpr,f=e.allowed.includes(d);return f?e.allowed=e.allowed.filter(function(a){return a!==d}):e.allowed.push(d),_objectSpread({},a,{gdpr:e})}},go:function go(a,b){var c=b.currentTarget.href.replace(window.location.origin,""),d=c.split("#"),e=_slicedToArray(d,2),f=e[0],g=e[1],h=void 0===g?"":g;if(f===a.url&&h===a.hash)return a;var i=window,j=i.scrollY,k=a.pages&&a.pages[f]&&a.pages[f].title;if(k&&(document.title=a.title=k),f===a.url)window.location.hash=h;else if(!h){var l=document.getElementsByTagName("html"),m=_slicedToArray(l,1),n=m[0],o=n.style.scrollBehavior;n.style.scrollBehavior="auto",window.scrollTo({top:0,behavior:"smooth"}),n.style.scrollBehavior=o}return window.history.pushState({url:f,hash:h,scrollY:j},a.title,c),_objectSpread({},a,{url:f,hash:h,prev:a.url})},pop:function pop(a,b){var c=window.location,d=c.pathname,e=c.hash;e=e.substring(1);var f=0;return b.state&&(d=b.state.url,e=b.state.hash,f=b.state.scrollY||0),e?window.location.hash=e:window.scroll({top:f,behavior:"smooth"}),_objectSpread({},a,{url:d,hash:e})},pre:{clip:function clip(a,b){var c=b.content;if("undefined"!=typeof document&&"function"==typeof document.execCommand){var d=document.createElement("textarea");d.id="copy",d.innerHTML=c,document.body.appendChild(d);var e=document.getElementById("copy");e.select(),document.execCommand("copy"),document.body.removeChild(e)}return a}}},pages={"/module-list/":function moduleList(){return[h1({id:"magic-modulesmodule-list"},"@magic-modules/module-list"),p(["this is the\n",Link({to:"https://github.com/magic-modules",text:"@magic-modules"}),"\nModuleList component."]),p("It shows a list of all @magic-modules."),GitBadges("magic-modules/module-list"),h2({id:"installation"},"installation"),Pre({lines:"false"},"npm install @magic-modules/module-list"),h2({id:"usage"},"usage"),p("in a page or module View"),Pre({lines:"false"},"<ModuleList></ModuleList>"),h2({id:"demo"},"demo"),p("this is what it looks like"),ModuleList(),h2({id:"source"},"source"),p(["the source for this page is in the\n",Link({to:"https://github.com/magic-modules/module-list/tree/master/example",text:"example directory"}),"\nand gets built and published to github using\n",Link({to:"https://github.com/magic/core",text:"@magic/core"})])]},"/module-list/404/":function moduleList404(){return div("404 - not found")}};app({init:[_objectSpread({},initialState,{url:window.location.pathname,hash:window.location.hash.substr(1)}),[[lib.db.get,{key:"magic-gdpr",action:actions.gdpr.show}]]],subscriptions:function subscriptions(){return[[helpers.listenPopState,actions.pop]]},view:function(a){var b=pages[a.url]?a.url:"/404/",c=pages[b],d=a.pages&&a.pages[b];return d&&Object.keys(d).forEach(function(b){a[b]=d[b]}),a.url=b,Page({page:c,state:a},[LightSwitch(a),Gdpr(a)])},node:document.getElementById("Magic")});