(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+EA7":function(e,t,n){"use strict";n("Vd3H"),n("Tze0"),n("a1Th"),n("h7Nl"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx"),n("pIFo");var r={},a="x",i=[],l=function(e){return i.push(e)},o=function(e,t){return t?t+"{"+e+"}":e},u=function(e,t,n){return"."+e+"{"+(t.replace(/[A-Z]|^ms/g,"-$&").toLowerCase()+":")+n+"}"},s=function(e){return e.replace(/&/g,"")},c=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",c=arguments[2];return Object.keys(t).map((function(f){var p=t[f];if(null===p)return"";if("object"==typeof p){var d=/^@/.test(f)?f:null;return e(p,d?n:n+f,d||c)}var m=f+p+n+c;if(r[m])return r[m];var y=a+i.length.toString(36);return l(o(u(y+s(n),f,p),c)),r[m]=y,y})).join(" ")};if(e.exports=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.map((function(e){return c(e)})).join(" ").trim()},e.exports.css=function(){return i.sort().join("")},e.exports.reset=function(){for(r={};i.length;)i.pop()},e.exports.prefix=function(e){return a=e},"undefined"!=typeof document){var f=document.head.appendChild(document.createElement("style")).sheet;l=function(e){i.push(e),f.insertRule(e,f.cssRules.length)}}},"0wEy":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e.default:e}t.__esModule=!0;var a=n("xCC/");t.Motion=r(a);var i=n("unm8");t.StaggeredMotion=r(i);var l=n("p9CH");t.TransitionMotion=r(l);var o=n("tYRH");t.spring=r(o);var u=n("LQNH");t.presets=r(u);var s=n("u461");t.stripStyle=r(s);var c=n("MEvW");t.reorderKeys=r(c)},"8oxB":function(e,t){var n,r,a=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function l(){throw new Error("clearTimeout has not been defined")}function o(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:l}catch(e){r=l}}();var u,s=[],c=!1,f=-1;function p(){c&&u&&(c=!1,u.length?s=u.concat(s):f=-1,s.length&&d())}function d(){if(!c){var e=o(p);c=!0;for(var t=s.length;t;){for(u=s,s=[];++f<t;)u&&u[f].run();f=-1,t=s.length}u=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===l||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function y(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new m(e,t)),1!==s.length||c||o(d)},m.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=y,a.addListener=y,a.once=y,a.off=y,a.removeListener=y,a.removeAllListeners=y,a.emit=y,a.prependListener=y,a.prependOnceListener=y,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},LQNH:function(e,t,n){"use strict";t.__esModule=!0,t.default={noWobble:{stiffness:170,damping:26},gentle:{stiffness:120,damping:14},wobbly:{stiffness:180,damping:12},stiff:{stiffness:210,damping:20}},e.exports=t.default},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));n("bWfx"),n("ioFf"),n("V+eJ"),n("91GP");var r=n("q1tI"),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(a),l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};function u(e){return function(t){return r.createElement(s,l({attr:l({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return r.createElement(t.tag,l({key:n},t.attr),e(t.child))}))}(e.child))}}function s(e){var t=function(t){var n,a=e.size||t.size||"1em";t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className);var i=e.attr,u=e.title,s=o(e,["attr","title"]);return r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,s,{className:n,style:l({color:e.color||t.color},t.style,e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(a)}},MEvW:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(){0};e.exports=t.default},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("Bl7J"),l=n("vrFN"),o=n("ma3e"),u=n("iNdW"),s=n("rCLJ"),c=n("v7au"),f=n("33Fu"),p=(n("bCvx"),function(e){e.location;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"social-media-links-container"},a.a.createElement("a",{href:"mailto:yennie.jun@gmail.com",target:"_blank"},a.a.createElement(f.a,null),a.a.createElement("span",null,"Mail")),a.a.createElement("a",{href:"https://www.linkedin.com/in/yennie-jun-30a650a5/",target:"_blank"},a.a.createElement(s.a,null),a.a.createElement("span",null,"LinkedIn")),a.a.createElement("a",{href:"https://github.com/yenniejun",target:"_blank"},a.a.createElement(c.a,null),a.a.createElement("span",null,"GitHub")),a.a.createElement("a",{href:"https://www.facebook.com/yennie.jun",target:"_blank"},a.a.createElement(u.a,null),a.a.createElement("span",null,"Facebook")),a.a.createElement("a",{href:"https://www.instagram.com/lingling62/?hl=en",target:"_blank"},a.a.createElement(o.b,null),a.a.createElement("span",null,"Instagram"))))}),d=(n("bWfx"),n("LK8F"),n("HAE/"),n("hHhE"),n("91GP"),n("0wEy")),m=n("+EA7"),y=n.n(m),h=n("bmMU"),v=n.n(h),w="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}:function(){},g=function(e,t){if(!(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame&&window.mozCancelRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame))return window.setTimeout(e,t);var n=(new Date).getTime(),r={value:0};return r.value=w((function a(){(new Date).getTime()-n>=t?e.call(null):r.value=w(a)})),r},b=function(e){return window.cancelAnimationFrame?window.cancelAnimationFrame(e.value):window.webkitCancelAnimationFrame?window.webkitCancelAnimationFrame(e.value):window.webkitCancelRequestAnimationFrame?window.webkitCancelRequestAnimationFrame(e.value):window.mozCancelRequestAnimationFrame?window.mozCancelRequestAnimationFrame(e.value):window.oCancelRequestAnimationFrame?window.oCancelRequestAnimationFrame(e.value):window.msCancelRequestAnimationFrame?window.msCancelRequestAnimationFrame(e.value):clearTimeout(e)};function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var T=function(e){var t,n;function r(t){var n;k(I(n=e.call(this,t)||this),"isUnMounting",!1),k(I(n),"tickDelay",0),k(I(n),"tickLoop",0),k(I(n),"wordBox",null),k(I(n),"willLeave",(function(){var e=n.getDimensions().height;return{opacity:Object(d.spring)(n.getOpacity(),n.props.springConfig),translate:Object(d.spring)(-e,n.props.springConfig)}})),k(I(n),"willEnter",(function(){var e=n.getDimensions().height;return{opacity:n.getOpacity(),translate:e}})),k(I(n),"tick",(function(){n.isUnMounting||n.setState((function(e,t){var n=(e.currentWordIndex+1)%e.elements.length,r={currentWordIndex:n,currentEl:e.elements[n],wordCount:(e.wordCount+1)%1e3,currentInterval:Array.isArray(t.interval)?t.interval[n%t.interval.length]:t.interval};return t.onChange&&t.onChange(r),r}),(function(){n.state.currentInterval>0&&(n.clearTimeouts(),n.tickLoop=g(n.tick,n.state.currentInterval))}))})),k(I(n),"wrapperStyles",y()(S({},n.props.mask&&{overflow:"hidden"},{},{display:"inline-block",position:"relative",verticalAlign:"top"}))),k(I(n),"elementStyles",y()({display:"inline-block",left:0,top:0,whiteSpace:n.props.noWrap?"nowrap":"normal"}));var r=a.a.Children.toArray(t.children);return n.state={elements:r,currentEl:r[0],currentWordIndex:0,wordCount:0,currentInterval:Array.isArray(t.interval)?t.interval[0]:t.interval},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.componentDidMount=function(){var e=this,t=this.props.delay,n=this.state,r=n.currentInterval,a=n.elements;r>0&&a.length>1&&(this.tickDelay=g((function(){e.tickLoop=g(e.tick,r)}),t))},i.componentDidUpdate=function(e,t){var n=this,r=this.props,i=r.interval,l=r.children,o=r.delay,u=this.state.currentWordIndex,s=Array.isArray(i)?i[u%i.length]:i;t.currentInterval!==s&&(this.clearTimeouts(),s>0&&a.a.Children.count(l)>1?this.tickDelay=g((function(){n.tickLoop=g(n.tick,s)}),o):this.setState((function(e,t){var n=e.currentWordIndex;return{currentInterval:Array.isArray(t.interval)?t.interval[n%t.interval.length]:t.interval}}))),v()(e.children,l)||this.setState({elements:a.a.Children.toArray(l)})},i.componentWillUnmount=function(){this.isUnMounting=!0,this.clearTimeouts()},i.clearTimeouts=function(){null!=this.tickLoop&&b(this.tickLoop),null!=this.tickDelay&&b(this.tickDelay)},i.getOpacity=function(){return this.props.fade?0:1},i.getDimensions=function(){return null==this.wordBox?{width:0,height:0}:this.wordBox.getBoundingClientRect()},i.getTransitionMotionStyles=function(){var e=this.props.springConfig,t=this.state;return[{key:"step-"+t.wordCount,data:{currentEl:t.currentEl},style:{opacity:Object(d.spring)(1,e),translate:Object(d.spring)(0,e)}}]},i.render=function(){var e=this,t=this.props.className,n=void 0===t?"":t;return a.a.createElement("div",{className:this.wrapperStyles+" "+n},a.a.createElement(d.TransitionMotion,{willLeave:this.willLeave,willEnter:this.willEnter,styles:this.getTransitionMotionStyles()},(function(t){var n=e.getDimensions(),r=n.height,i=n.width,l=null==e.wordBox?"auto":i,o=null==e.wordBox?"auto":r;return a.a.createElement("div",{style:{transition:"width "+e.props.adjustingSpeed+"ms linear",height:o,width:l}},t.map((function(t){return a.a.createElement("div",{className:e.elementStyles,ref:function(t){e.wordBox=t},key:t.key,style:{opacity:t.style.opacity,transform:"translateY("+t.style.translate+"px)",position:null==e.wordBox?"relative":"absolute"}},t.data.currentEl)})))})))},r}(a.a.PureComponent);k(T,"defaultProps",{interval:3e3,delay:0,adjustingSpeed:150,springConfig:{stiffness:340,damping:30},fade:!0,mask:!1,noWrap:!0});var O=T,E=["write stories","travel the world","make things","create software","read","climb mountains"];t.default=function(){return a.a.createElement(i.a,{title:"Hi, I'm Yennie"},a.a.createElement(l.a,{title:"Yennie Jun Website"}),a.a.createElement("div",{className:"homeContainer"},a.a.createElement("h2",{className:"textloopwords",style:{fontFamily:"IBM Plex Sans",textAlign:"center"}},"I like to ",a.a.createElement(O,{children:E})),a.a.createElement("p",null,"I love pursuing projects across a wide range of interests. Previously a software engineer on the Education team at Microsoft, I am a writer, researcher, technologist, musician, and world-adventurer."),a.a.createElement("p",null,"Currently, I am pursuing several technical projects (including research with the Big Data Studies Lab at Seoul National University) as well as writing a novel."),a.a.createElement("p",null,"I will be pursuing an MSc in Social Data Science at Oxford's Internet Institute in the fall."),a.a.createElement("p",null)),a.a.createElement(p,null))}},Tze0:function(e,t,n){"use strict";n("qncB")("trim",(function(e){return function(){return e(this,3)}}))},VciW:function(e,t,n){(function(t){n("eM6i"),function(){var n,r,a;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-a)/1e6},r=t.hrtime,a=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})()):Date.now?(e.exports=function(){return Date.now()-a},a=Date.now()):(e.exports=function(){return(new Date).getTime()-a},a=(new Date).getTime())}.call(this)}).call(this,n("8oxB"))},Z6NN:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=0);return t},e.exports=t.default},bCvx:function(e,t,n){},bQgK:function(e,t,n){(function(t){n("eM6i"),function(){var n,r,a,i,l,o;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-l)/1e6},r=t.hrtime,i=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})(),o=1e9*t.uptime(),l=i-o):Date.now?(e.exports=function(){return Date.now()-a},a=Date.now()):(e.exports=function(){return(new Date).getTime()-a},a=(new Date).getTime())}.call(this)}).call(this,n("8oxB"))},fXKH:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t,n,a,i,l,o){var u=n+(-i*(t-a)+-l*n)*e,s=t+u*e;if(Math.abs(u)<o&&Math.abs(s-a)<o)return r[0]=a,r[1]=0,r;return r[0]=s,r[1]=u,r};var r=[0,0];e.exports=t.default},kXpG:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t,n){for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(0!==n[r])return!1;var a="number"==typeof t[r]?t[r]:t[r].val;if(e[r]!==a)return!1}return!0},e.exports=t.default},p9CH:function(e,t,n){"use strict";n("bWfx"),n("/SS/"),n("hHhE"),n("HAE/"),n("91GP"),t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function i(e){return e&&e.__esModule?e:{default:e}}var l=i(n("Z6NN")),o=i(n("u461")),u=i(n("fXKH")),s=i(n("pwmp")),c=i(n("VciW")),f=i(n("xEkU")),p=i(n("kXpG")),d=i(n("q1tI")),m=i(n("17x9"));function y(e,t,n){var r=t;return null==r?e.map((function(e,t){return{key:e.key,data:e.data,style:n[t]}})):e.map((function(e,t){for(var a=0;a<r.length;a++)if(r[a].key===e.key)return{key:r[a].key,data:r[a].data,style:n[t]};return{key:e.key,data:e.data,style:n[t]}}))}function h(e,t,n,r,a,i,o,u,c){for(var f=s.default(r,a,(function(e,r){var a=t(r);return null==a||p.default(i[e],a,o[e])?(n({key:r.key,data:r.data}),null):{key:r.key,data:r.data,style:a}})),d=[],m=[],y=[],h=[],v=0;v<f.length;v++){for(var w=f[v],g=null,b=0;b<r.length;b++)if(r[b].key===w.key){g=b;break}if(null==g){var S=e(w);d[v]=S,y[v]=S;var I=l.default(w.style);m[v]=I,h[v]=I}else d[v]=i[g],y[v]=u[g],m[v]=o[g],h[v]=c[g]}return[f,d,m,y,h]}var v=function(e){function t(n){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e.call(this,n),this.unmounting=!1,this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyles=null,this.clearUnreadPropStyle=function(e){for(var t=h(a.props.willEnter,a.props.willLeave,a.props.didLeave,a.state.mergedPropsStyles,e,a.state.currentStyles,a.state.currentVelocities,a.state.lastIdealStyles,a.state.lastIdealVelocities),n=t[0],i=t[1],l=t[2],o=t[3],u=t[4],s=0;s<e.length;s++){var c=e[s].style,f=!1;for(var p in c)if(Object.prototype.hasOwnProperty.call(c,p)){var d=c[p];"number"==typeof d&&(f||(f=!0,i[s]=r({},i[s]),l[s]=r({},l[s]),o[s]=r({},o[s]),u[s]=r({},u[s]),n[s]={key:n[s].key,data:n[s].data,style:r({},n[s].style)}),i[s][p]=d,l[s][p]=0,o[s][p]=d,u[s][p]=0,n[s].style[p]=d)}}a.setState({currentStyles:i,currentVelocities:l,mergedPropsStyles:n,lastIdealStyles:o,lastIdealVelocities:u})},this.startAnimationIfNecessary=function(){a.unmounting||(a.animationID=f.default((function(e){if(!a.unmounting){var t=a.props.styles,n="function"==typeof t?t(y(a.state.mergedPropsStyles,a.unreadPropStyles,a.state.lastIdealStyles)):t;if(function(e,t,n,r){if(r.length!==t.length)return!1;for(var a=0;a<r.length;a++)if(r[a].key!==t[a].key)return!1;for(a=0;a<r.length;a++)if(!p.default(e[a],t[a].style,n[a]))return!1;return!0}(a.state.currentStyles,n,a.state.currentVelocities,a.state.mergedPropsStyles))return a.animationID=null,void(a.accumulatedTime=0);var r=e||c.default(),i=r-a.prevTime;if(a.prevTime=r,a.accumulatedTime=a.accumulatedTime+i,a.accumulatedTime>1e3/60*10&&(a.accumulatedTime=0),0===a.accumulatedTime)return a.animationID=null,void a.startAnimationIfNecessary();for(var l=(a.accumulatedTime-Math.floor(a.accumulatedTime/(1e3/60))*(1e3/60))/(1e3/60),o=Math.floor(a.accumulatedTime/(1e3/60)),s=h(a.props.willEnter,a.props.willLeave,a.props.didLeave,a.state.mergedPropsStyles,n,a.state.currentStyles,a.state.currentVelocities,a.state.lastIdealStyles,a.state.lastIdealVelocities),f=s[0],d=s[1],m=s[2],v=s[3],w=s[4],g=0;g<f.length;g++){var b=f[g].style,S={},I={},k={},T={};for(var O in b)if(Object.prototype.hasOwnProperty.call(b,O)){var E=b[O];if("number"==typeof E)S[O]=E,I[O]=0,k[O]=E,T[O]=0;else{for(var P=v[g][O],x=w[g][O],A=0;A<o;A++){var j=u.default(1e3/60/1e3,P,x,E.val,E.stiffness,E.damping,E.precision);P=j[0],x=j[1]}var C=u.default(1e3/60/1e3,P,x,E.val,E.stiffness,E.damping,E.precision),D=C[0],_=C[1];S[O]=P+(D-P)*l,I[O]=x+(_-x)*l,k[O]=P,T[O]=x}}v[g]=k,w[g]=T,d[g]=S,m[g]=I}a.animationID=null,a.accumulatedTime-=o*(1e3/60),a.setState({currentStyles:d,currentVelocities:m,lastIdealStyles:v,lastIdealVelocities:w,mergedPropsStyles:f}),a.unreadPropStyles=null,a.startAnimationIfNecessary()}})))},this.state=this.defaultState()}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,null,[{key:"propTypes",value:{defaultStyles:m.default.arrayOf(m.default.shape({key:m.default.string.isRequired,data:m.default.any,style:m.default.objectOf(m.default.number).isRequired})),styles:m.default.oneOfType([m.default.func,m.default.arrayOf(m.default.shape({key:m.default.string.isRequired,data:m.default.any,style:m.default.objectOf(m.default.oneOfType([m.default.number,m.default.object])).isRequired}))]).isRequired,children:m.default.func.isRequired,willEnter:m.default.func,willLeave:m.default.func,didLeave:m.default.func},enumerable:!0},{key:"defaultProps",value:{willEnter:function(e){return o.default(e.style)},willLeave:function(){return null},didLeave:function(){}},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyles,n=e.styles,r=e.willEnter,a=e.willLeave,i=e.didLeave,u="function"==typeof n?n(t):n,s=void 0;s=null==t?u:t.map((function(e){for(var t=0;t<u.length;t++)if(u[t].key===e.key)return u[t];return e}));var c=null==t?u.map((function(e){return o.default(e.style)})):t.map((function(e){return o.default(e.style)})),f=null==t?u.map((function(e){return l.default(e.style)})):t.map((function(e){return l.default(e.style)})),p=h(r,a,i,s,u,c,f,c,f),d=p[0];return{currentStyles:p[1],currentVelocities:p[2],lastIdealStyles:p[3],lastIdealVelocities:p[4],mergedPropsStyles:d}},t.prototype.componentDidMount=function(){this.prevTime=c.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles);var t=e.styles;this.unreadPropStyles="function"==typeof t?t(y(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.lastIdealStyles)):t,null==this.animationID&&(this.prevTime=c.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){this.unmounting=!0,null!=this.animationID&&(f.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=y(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.currentStyles),t=this.props.children(e);return t&&d.default.Children.only(t)},t}(d.default.Component);t.default=v,e.exports=t.default},pwmp:function(e,t,n){"use strict";n("Vd3H"),t.__esModule=!0,t.default=function(e,t,n){for(var r={},a=0;a<e.length;a++)r[e[a].key]=a;var i={};for(a=0;a<t.length;a++)i[t[a].key]=a;var l=[];for(a=0;a<t.length;a++)l[a]=t[a];for(a=0;a<e.length;a++)if(!Object.prototype.hasOwnProperty.call(i,e[a].key)){var o=n(a,e[a]);null!=o&&l.push(o)}return l.sort((function(e,n){var a=i[e.key],l=i[n.key],o=r[e.key],u=r[n.key];if(null!=a&&null!=l)return i[e.key]-i[n.key];if(null!=o&&null!=u)return r[e.key]-r[n.key];if(null!=a){for(var s=0;s<t.length;s++){var c=t[s].key;if(Object.prototype.hasOwnProperty.call(r,c)){if(a<i[c]&&u>r[c])return-1;if(a>i[c]&&u<r[c])return 1}}return 1}for(s=0;s<t.length;s++){c=t[s].key;if(Object.prototype.hasOwnProperty.call(r,c)){if(l<i[c]&&o>r[c])return 1;if(l>i[c]&&o<r[c])return-1}}return-1}))},e.exports=t.default},tYRH:function(e,t,n){"use strict";n("91GP"),t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(e,t){return r({},o,t,{val:e})};var a,i=n("LQNH"),l=(a=i)&&a.__esModule?a:{default:a},o=r({},l.default.noWobble,{precision:.01});e.exports=t.default},u461:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]="number"==typeof e[n]?e[n]:e[n].val);return t},e.exports=t.default},unm8:function(e,t,n){"use strict";n("bWfx"),n("/SS/"),n("hHhE"),n("HAE/"),n("91GP"),t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function i(e){return e&&e.__esModule?e:{default:e}}var l=i(n("Z6NN")),o=i(n("u461")),u=i(n("fXKH")),s=i(n("VciW")),c=i(n("xEkU")),f=i(n("kXpG")),p=i(n("q1tI")),d=i(n("17x9"));var m=function(e){function t(n){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e.call(this,n),this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyles=null,this.clearUnreadPropStyle=function(e){for(var t=a.state,n=t.currentStyles,i=t.currentVelocities,l=t.lastIdealStyles,o=t.lastIdealVelocities,u=!1,s=0;s<e.length;s++){var c=e[s],f=!1;for(var p in c)if(Object.prototype.hasOwnProperty.call(c,p)){var d=c[p];"number"==typeof d&&(f||(f=!0,u=!0,n[s]=r({},n[s]),i[s]=r({},i[s]),l[s]=r({},l[s]),o[s]=r({},o[s])),n[s][p]=d,i[s][p]=0,l[s][p]=d,o[s][p]=0)}}u&&a.setState({currentStyles:n,currentVelocities:i,lastIdealStyles:l,lastIdealVelocities:o})},this.startAnimationIfNecessary=function(){a.animationID=c.default((function(e){var t=a.props.styles(a.state.lastIdealStyles);if(function(e,t,n){for(var r=0;r<e.length;r++)if(!f.default(e[r],t[r],n[r]))return!1;return!0}(a.state.currentStyles,t,a.state.currentVelocities))return a.animationID=null,void(a.accumulatedTime=0);var n=e||s.default(),r=n-a.prevTime;if(a.prevTime=n,a.accumulatedTime=a.accumulatedTime+r,a.accumulatedTime>1e3/60*10&&(a.accumulatedTime=0),0===a.accumulatedTime)return a.animationID=null,void a.startAnimationIfNecessary();for(var i=(a.accumulatedTime-Math.floor(a.accumulatedTime/(1e3/60))*(1e3/60))/(1e3/60),l=Math.floor(a.accumulatedTime/(1e3/60)),o=[],c=[],p=[],d=[],m=0;m<t.length;m++){var y=t[m],h={},v={},w={},g={};for(var b in y)if(Object.prototype.hasOwnProperty.call(y,b)){var S=y[b];if("number"==typeof S)h[b]=S,v[b]=0,w[b]=S,g[b]=0;else{for(var I=a.state.lastIdealStyles[m][b],k=a.state.lastIdealVelocities[m][b],T=0;T<l;T++){var O=u.default(1e3/60/1e3,I,k,S.val,S.stiffness,S.damping,S.precision);I=O[0],k=O[1]}var E=u.default(1e3/60/1e3,I,k,S.val,S.stiffness,S.damping,S.precision),P=E[0],x=E[1];h[b]=I+(P-I)*i,v[b]=k+(x-k)*i,w[b]=I,g[b]=k}}p[m]=h,d[m]=v,o[m]=w,c[m]=g}a.animationID=null,a.accumulatedTime-=l*(1e3/60),a.setState({currentStyles:p,currentVelocities:d,lastIdealStyles:o,lastIdealVelocities:c}),a.unreadPropStyles=null,a.startAnimationIfNecessary()}))},this.state=this.defaultState()}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,null,[{key:"propTypes",value:{defaultStyles:d.default.arrayOf(d.default.objectOf(d.default.number)),styles:d.default.func.isRequired,children:d.default.func.isRequired},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyles,n=e.styles,r=t||n().map(o.default),a=r.map((function(e){return l.default(e)}));return{currentStyles:r,currentVelocities:a,lastIdealStyles:r,lastIdealVelocities:a}},t.prototype.componentDidMount=function(){this.prevTime=s.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){null!=this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles),this.unreadPropStyles=e.styles(this.state.lastIdealStyles),null==this.animationID&&(this.prevTime=s.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){null!=this.animationID&&(c.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=this.props.children(this.state.currentStyles);return e&&p.default.Children.only(e)},t}(p.default.Component);t.default=m,e.exports=t.default},"xCC/":function(e,t,n){"use strict";n("/SS/"),n("hHhE"),n("HAE/"),n("91GP"),t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function i(e){return e&&e.__esModule?e:{default:e}}var l=i(n("Z6NN")),o=i(n("u461")),u=i(n("fXKH")),s=i(n("VciW")),c=i(n("xEkU")),f=i(n("kXpG")),p=i(n("q1tI")),d=i(n("17x9")),m=function(e){function t(n){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e.call(this,n),this.wasAnimating=!1,this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyle=null,this.clearUnreadPropStyle=function(e){var t=!1,n=a.state,i=n.currentStyle,l=n.currentVelocity,o=n.lastIdealStyle,u=n.lastIdealVelocity;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var c=e[s];"number"==typeof c&&(t||(t=!0,i=r({},i),l=r({},l),o=r({},o),u=r({},u)),i[s]=c,l[s]=0,o[s]=c,u[s]=0)}t&&a.setState({currentStyle:i,currentVelocity:l,lastIdealStyle:o,lastIdealVelocity:u})},this.startAnimationIfNecessary=function(){a.animationID=c.default((function(e){var t=a.props.style;if(f.default(a.state.currentStyle,t,a.state.currentVelocity))return a.wasAnimating&&a.props.onRest&&a.props.onRest(),a.animationID=null,a.wasAnimating=!1,void(a.accumulatedTime=0);a.wasAnimating=!0;var n=e||s.default(),r=n-a.prevTime;if(a.prevTime=n,a.accumulatedTime=a.accumulatedTime+r,a.accumulatedTime>1e3/60*10&&(a.accumulatedTime=0),0===a.accumulatedTime)return a.animationID=null,void a.startAnimationIfNecessary();var i=(a.accumulatedTime-Math.floor(a.accumulatedTime/(1e3/60))*(1e3/60))/(1e3/60),l=Math.floor(a.accumulatedTime/(1e3/60)),o={},c={},p={},d={};for(var m in t)if(Object.prototype.hasOwnProperty.call(t,m)){var y=t[m];if("number"==typeof y)p[m]=y,d[m]=0,o[m]=y,c[m]=0;else{for(var h=a.state.lastIdealStyle[m],v=a.state.lastIdealVelocity[m],w=0;w<l;w++){var g=u.default(1e3/60/1e3,h,v,y.val,y.stiffness,y.damping,y.precision);h=g[0],v=g[1]}var b=u.default(1e3/60/1e3,h,v,y.val,y.stiffness,y.damping,y.precision),S=b[0],I=b[1];p[m]=h+(S-h)*i,d[m]=v+(I-v)*i,o[m]=h,c[m]=v}}a.animationID=null,a.accumulatedTime-=l*(1e3/60),a.setState({currentStyle:p,currentVelocity:d,lastIdealStyle:o,lastIdealVelocity:c}),a.unreadPropStyle=null,a.startAnimationIfNecessary()}))},this.state=this.defaultState()}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,null,[{key:"propTypes",value:{defaultStyle:d.default.objectOf(d.default.number),style:d.default.objectOf(d.default.oneOfType([d.default.number,d.default.object])).isRequired,children:d.default.func.isRequired,onRest:d.default.func},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyle,n=e.style,r=t||o.default(n),a=l.default(r);return{currentStyle:r,currentVelocity:a,lastIdealStyle:r,lastIdealVelocity:a}},t.prototype.componentDidMount=function(){this.prevTime=s.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){null!=this.unreadPropStyle&&this.clearUnreadPropStyle(this.unreadPropStyle),this.unreadPropStyle=e.style,null==this.animationID&&(this.prevTime=s.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){null!=this.animationID&&(c.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=this.props.children(this.state.currentStyle);return e&&p.default.Children.only(e)},t}(p.default.Component);t.default=m,e.exports=t.default},xEkU:function(e,t,n){(function(t){for(var r=n("bQgK"),a="undefined"==typeof window?t:window,i=["moz","webkit"],l="AnimationFrame",o=a["request"+l],u=a["cancel"+l]||a["cancelRequest"+l],s=0;!o&&s<i.length;s++)o=a[i[s]+"Request"+l],u=a[i[s]+"Cancel"+l]||a[i[s]+"CancelRequest"+l];if(!o||!u){var c=0,f=0,p=[];o=function(e){if(0===p.length){var t=r(),n=Math.max(0,1e3/60-(t-c));c=n+t,setTimeout((function(){var e=p.slice(0);p.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(c)}catch(n){setTimeout((function(){throw n}),0)}}),Math.round(n))}return p.push({handle:++f,callback:e,cancelled:!1}),f},u=function(e){for(var t=0;t<p.length;t++)p[t].handle===e&&(p[t].cancelled=!0)}}e.exports=function(e){return o.call(a,e)},e.exports.cancel=function(){u.apply(a,arguments)},e.exports.polyfill=function(e){e||(e=a),e.requestAnimationFrame=o,e.cancelAnimationFrame=u}}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=component---src-pages-index-js-373d6bc345514ae9bef8.js.map