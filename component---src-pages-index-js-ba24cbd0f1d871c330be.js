(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0mN4":function(e,t,n){"use strict";n("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"7xcA":function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"html":"<p>I’m Casper De Bock, a 16 year old beat producer. I’m eager to learn new techniques and enhance my capabilities. All tips and tricks are welcome @ <a href=\\"https://twitter.com/casperdebock\\">Twitter</a>, <a href=\\"https://soundcloud.com/pheh-981959370\\">Soundcloud</a>, <a href=\\"https://www.instagram.com/casperdebock/\\">Instagram</a>.</p>"}}]}}}')},"9eSz":function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("EK0E"),n("INYr"),n("0mN4");var i=n("TqRt");t.__esModule=!0,t.default=void 0;var a,r=i(n("PJYZ")),s=i(n("VbXa")),o=i(n("8OQS")),u=i(n("pVnL")),c=i(n("q1tI")),d=i(n("17x9")),l=function(e){var t=(0,u.default)({},e),n=t.resolutions,i=t.sizes,a=t.critical;return n&&(t.fixed=n,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=j([].concat(t.fluid))),t.fixed&&(t.fixed=j([].concat(t.fixed))),t},L=function(e){var t=e.media;return!!t&&(f&&!!window.matchMedia(t).matches)},M=function(e){var t=e.fluid,n=e.fixed;return g(t||n).src},g=function(e){if(f&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(L);if(-1!==t)return e[t];var n=e.findIndex((function(e){return void 0===e.media}));if(-1!==n)return e[n]}return e[0]},w=Object.create({}),I=function(e){var t=l(e),n=M(t);return w[n]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,f="undefined"!=typeof window,D=f&&window.IntersectionObserver,N=new WeakMap;function p(e){return e.map((function(e){var t=e.src,n=e.srcSet,i=e.srcSetWebp,a=e.media,r=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},i&&c.default.createElement("source",{type:"image/webp",media:a,srcSet:i,sizes:r}),c.default.createElement("source",{media:a,srcSet:n,sizes:r}))}))}function j(e){var t=[],n=[];return e.forEach((function(e){return(e.media?t:n).push(e)})),[].concat(t,n)}function y(e){return e.map((function(e){var t=e.src,n=e.media,i=e.tracedSVG;return c.default.createElement("source",{key:t,media:n,srcSet:i})}))}function S(e){return e.map((function(e){var t=e.src,n=e.media,i=e.base64;return c.default.createElement("source",{key:t,media:n,srcSet:i})}))}function h(e,t){var n=e.srcSet,i=e.srcSetWebp,a=e.media,r=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?i:n)+'" '+(r?'sizes="'+r+'" ':"")+"/>"}var C=function(e,t){var n=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(N.has(e.target)){var t=N.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),N.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return n&&(n.observe(e),N.set(e,t)),function(){n.unobserve(e),N.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",u=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?h(e,!0):"")+h(e)})).join("")+"<img "+c+s+o+n+i+t+r+a+u+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=function(e){var t=e.src,n=e.imageVariants,i=e.generateSources,a=e.spreadProps,r=e.ariaHidden,s=c.default.createElement(E,(0,u.default)({src:t},a,{ariaHidden:r}));return n.length>1?c.default.createElement("picture",null,i(n),s):s},E=c.default.forwardRef((function(e,t){var n=e.sizes,i=e.srcSet,a=e.src,r=e.style,s=e.onLoad,d=e.onError,l=e.loading,L=e.draggable,M=e.ariaHidden,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,u.default)({"aria-hidden":M,sizes:n,srcSet:i,src:a},g,{onLoad:s,onError:d,ref:t,loading:l,draggable:L,style:(0,u.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))}));E.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var A=function(e){function t(t){var n;(n=e.call(this,t)||this).seenBefore=f&&I(t),n.isCritical="eager"===t.loading||t.critical,n.addNoScript=!(n.isCritical&&!t.fadeIn),n.useIOSupport=!m&&D&&!n.isCritical&&!n.seenBefore;var i=n.isCritical||f&&(m||!n.useIOSupport);return n.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!n.seenBefore&&t.fadeIn},n.imageRef=c.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,r.default)(n)),n.handleRef=n.handleRef.bind((0,r.default)(n)),n}(0,s.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:I(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=C(e,(function(){var e=I(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=l(e),n=M(t),w[n]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=l(this.props),t=e.title,n=e.alt,i=e.className,a=e.style,r=void 0===a?{}:a,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,L=void 0===d?{}:d,M=e.placeholderClassName,w=e.fluid,I=e.fixed,m=e.backgroundColor,f=e.durationFadeIn,D=e.Tag,N=e.itemProp,j=e.loading,h=e.draggable,C=!1===this.state.fadeIn||this.state.imgLoaded,A=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,u.default)({opacity:C?1:0,transition:A?"opacity "+f+"ms":"none"},o),z="boolean"==typeof m?"lightgray":m,Y={transitionDelay:f+"ms"},v=(0,u.default)({opacity:this.state.imgLoaded?0:1},A&&Y,{},o,{},L),O={title:t,alt:this.state.isVisible?"":n,style:v,className:M,itemProp:N};if(w){var G=w,k=g(w);return c.default.createElement(D,{className:(i||"")+" gatsby-image-wrapper",style:(0,u.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(k.srcSet)},c.default.createElement(D,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/k.aspectRatio+"%"}}),z&&c.default.createElement(D,{"aria-hidden":!0,title:t,style:(0,u.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},A&&Y)}),k.base64&&c.default.createElement(b,{ariaHidden:!0,src:k.base64,spreadProps:O,imageVariants:G,generateSources:S}),k.tracedSVG&&c.default.createElement(b,{ariaHidden:!0,src:k.tracedSVG,spreadProps:O,imageVariants:G,generateSources:y}),this.state.isVisible&&c.default.createElement("picture",null,p(G),c.default.createElement(E,{alt:n,title:t,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:N,loading:j,draggable:h})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,u.default)({alt:n,title:t,loading:j},k,{imageVariants:G}))}}))}if(I){var U=I,P=g(I),Z=(0,u.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},r);return"inherit"===r.display&&delete Z.display,c.default.createElement(D,{className:(i||"")+" gatsby-image-wrapper",style:Z,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},z&&c.default.createElement(D,{"aria-hidden":!0,title:t,style:(0,u.default)({backgroundColor:z,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},A&&Y)}),P.base64&&c.default.createElement(b,{ariaHidden:!0,src:P.base64,spreadProps:O,imageVariants:U,generateSources:S}),P.tracedSVG&&c.default.createElement(b,{ariaHidden:!0,src:P.tracedSVG,spreadProps:O,imageVariants:U,generateSources:y}),this.state.isVisible&&c.default.createElement("picture",null,p(U),c.default.createElement(E,{alt:n,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:N,loading:j,draggable:h})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,u.default)({alt:n,title:t,loading:j},P,{imageVariants:U}))}}))}return null},t}(c.default.Component);A.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var T=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),z=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});A.propTypes={resolutions:T,sizes:z,fixed:d.default.oneOfType([T,d.default.arrayOf(T)]),fluid:d.default.oneOfType([z,d.default.arrayOf(z)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var Y=A;t.default=Y},INYr:function(e,t,n){"use strict";var i=n("XKFU"),a=n("CkkT")(6),r="findIndex",s=!0;r in[]&&Array(1)[r]((function(){s=!1})),i(i.P+i.F*s,"Array",{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n("nGyu")(r)},OGtf:function(e,t,n){var i=n("XKFU"),a=n("eeVq"),r=n("vhPU"),s=/"/g,o=function(e,t,n,i){var a=String(r(e)),o="<"+t;return""!==n&&(o+=" "+n+'="'+String(i).replace(s,"&quot;")+'"'),o+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(o),i(i.P+i.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},QL0L:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"frontmatter":{"firstName":"Casper","lastName":"De Bock","avatar":{"childImageSharp":{"fluid":{"src":"/static/77f1373dc065b9065e74190cdaa98c6a/3e83c/profilePicture.png","srcSet":"/static/77f1373dc065b9065e74190cdaa98c6a/630fb/profilePicture.png 300w,\\n/static/77f1373dc065b9065e74190cdaa98c6a/45a45/profilePicture.png 601w,\\n/static/77f1373dc065b9065e74190cdaa98c6a/3e83c/profilePicture.png 1201w,\\n/static/77f1373dc065b9065e74190cdaa98c6a/5f9b4/profilePicture.png 1229w","aspectRatio":0.6060606060606061,"base64":"data:image/png;base64,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","sizes":"(max-width: 1201px) 100vw, 1201px"}}}}}}]}}}')},RXBc:function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),a=n.n(i),r=n("vrFN"),s=n("QL0L"),o=n("vOnD"),u=n("9eSz"),c=n.n(u),d=n("rHsj"),l=n("f/V8"),L=n.n(l),M=n("fhmS"),g=n.n(M);function w(){var e=y(["\n  position: absolute;\n  bottom: 0;\n  font-size: .9rem;\n  text-transform: uppercase;\n  font-family: 'Roboto', sans-serif;\n  display: inline-block;\n  line-height: 1rem;\n  min-height: calc(1.5rem + 40px);\n  letter-spacing: .2em;\n  color: var(--color-black);\n  .scroll {\n    margin-top: .5rem;\n    margin-left: calc(50% - 1px);\n    width: 2px;\n    height: 40px;\n    background: var(--color-black);\n    animation: pulse 2s infinite;\n  }\n\n  @media (max-width: 992px) { \n    display: none;\n  }\n\n  @keyframes pulse {\n    0% {\n      height: 0;\n\n    }\n    50% {\n      height: 40px;\n      transform: translate(0, 0);\n      opacity: 1;\n    }\n    80% {\n      transform: translate(0, 40px);\n      height: 0;\n      opacity: .5;\n    }\n    100% {\n      height: 0;\n    }\n  }\n"]);return w=function(){return e},e}function I(){var e=y(["\n  font-size: 6rem;\n  color: var(--color-orange);\n"]);return I=function(){return e},e}function m(){var e=y(["\n  font-size: 10rem;\n  -webkit-text-stroke: ",";\n  color: ",";\n  line-height: 1em;\n\n  @media (max-width: 1200px) { \n    font-size: 8rem;\n  }\n  @media (max-width: 992px) { \n    font-size: 20vw;\n    text-align: center;\n    display: block;\n    padding: 4rem 0;\n  }\n"]);return m=function(){return e},e}function f(){var e=y(["\n  position: absolute;\n  bottom: 10%;\n  left: 5%;\n  width: 6rem;\n  animation: rotate 20s linear infinite;\n\n  @media (max-width: 1500px) { \n    left: -1em;\n  }\n  @media (max-width: 992px) { \n    top: 40%;\n    left: -3rem;\n  }\n\n  @keyframes rotate {\n    from {\n      -webkit-transform: rotate(0deg);\n    }\n    to {\n      -webkit-transform: rotate(360deg)\n    }\n  }\n"]);return f=function(){return e},e}function D(){var e=y(["\n  width: 8rem;\n  height: 8rem;\n  border-radius: 8rem;\n  background: var(--color-orange);\n  position: absolute;\n  top: 210px;\n  right: 140px;\n  z-index: -1;\n\n  @media (max-width: 992px) { \n    top: 20%;\n    right: 20%;\n  }\n"]);return D=function(){return e},e}function N(){var e=y(["\n  -webkit-filter: grayscale(100%) contrast(120%) brightness(110%);\n  z-index: 2;\n"]);return N=function(){return e},e}function p(){var e=y(["\n  width: 601px;\n  position: absolute;\n  right: 0;\n  top: 10vh;\n  h1 {\n    display: inline-block;\n    width: auto;\n    position: absolute;\n    bottom: -1.4rem;\n    left: 10%;\n    z-index: 3;\n  }\n  z-index: 1;\n\n  @media (max-width: 992px) { \n    position: relative;\n    width: 120%;\n    top: 0;\n    right: auto;\n    margin-left: -10%;\n    h1 {display: none;}\n  }\n"]);return p=function(){return e},e}function j(){var e=y(["\n  min-height: 100vh;\n  background: var(--color-hero-bg);\n  .container {\n    display: flex;\n    align-items: center;\n  }\n  &::before {\n    content: '';\n    background: url(",");\n    height: 10px;\n    width: 100%;\n    position: absolute;\n    background-repeat: repeat-x;\n    animation: roll-in 1s ease;\n  }\n\n  @media (max-width: 1200px) { \n    overflow: hidden;\n  }\n  @media (max-width: 992px) { \n    height: 100vh;\n    .container {\n      display: block;\n    }\n  }\n\n  @keyframes roll-in {\n    from {\n      top: -10px;\n      width: 0;\n      opacity: 0;\n    }\n    to {\n      top: 0;\n      width: 100%;\n      opacity: 1;\n    }\n  }\n"]);return j=function(){return e},e}function y(e,t){return t||(t=e.slice(0)),e.raw=t,e}var S=o.a.div(j(),g.a),h=o.a.div(p()),C=Object(o.a)(c.a)(N()),x=o.a.div(D()),b=o.a.img(f()),E=o.a.h1(m(),(function(e){return e.outline?"2px var(--color-black)":null}),(function(e){return e.outline?"transparent":"var(--color-black)"})),A=o.a.h1(I()),T=o.a.div(w());var z=function(){var e=s.data.allMarkdownRemark.edges[0].node.frontmatter,t=e.avatar,n=e.firstName,i=e.lastName,r=a.a.useState(!1),o=r[0],u=r[1];return a.a.createElement(S,null,a.a.createElement("div",{className:"container",style:{minHeight:"100vh"}},a.a.createElement(E,null,a.a.createElement(d.a,{start:!0,type:"fade-in-up",timeout:200},a.a.createElement("span",{style:{WebkitTextStroke:"2px #171717",color:"transparent",display:"block"}},n)),a.a.createElement(d.a,{start:!0,type:"fade-in-up",timeout:500},i)),a.a.createElement(h,null,a.a.createElement(C,{fluid:t.childImageSharp.fluid,alt:"Casper De Bock",fadeIn:!1,onLoad:function(){return u(!0)},className:o?"anim--fade-in-up":""}),a.a.createElement(A,null,"This is me"),a.a.createElement(d.a,{start:!0,type:"pop",timeout:1e3},a.a.createElement(x,null))),a.a.createElement(T,null,"Scroll Down ",a.a.createElement("div",{className:"scroll"}))),a.a.createElement(b,{src:L.a,alt:"I make beats & I love it"}))},Y=n("7xcA");function v(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  background: var(--color-bg);\n  padding-top: 16rem;\n  p {\n    width: 50%;\n  }\n  @media (max-width: 1200px) { \n    p {width: 80%;}\n    padding-top: 8rem;\n  }\n  @media (max-width: 768px) { \n    p {width: 100%;}\n  }\n  a {\n    font-family: 'Merriweather', serif;\n    font-weight: normal;\n  }\n"]);return v=function(){return e},e}var O=o.a.div(v());var G=function(){var e=Y.data.allMarkdownRemark.edges[0].node.html;return a.a.createElement(O,null,a.a.createElement("div",{className:"container"},a.a.createElement("div",{dangerouslySetInnerHTML:{__html:e}})))},k=n("jcIW");n("91GP");function U(){var e=F(["\n  padding: 0 1.5rem;\n  letter-spacing: .1em;\n\n  @media (max-width: 768px) {\n    padding: 0;\n  }\n"]);return U=function(){return e},e}function P(){var e=F(["\n  background: var(--color-black);\n  height: 100%;\n  pointer-events: none;\n"]);return P=function(){return e},e}function Z(){var e=F(["\n  width: 50%;\n  height: .75rem;\n  background: white;\n  \n  @media (max-width: 1200px) {\n    width: 100%;\n  }\n  @media (max-width: 768px) {\n    display: none;\n  }\n"]);return Z=function(){return e},e}function W(){var e=F(["\n  background: var(--color-orange);\n  color: white;\n  font-size: 1rem;\n  padding: .75em 0;\n  min-width: 100px;\n  outline: none;\n  text-transform: uppercase;\n  text-align: center;\n  letter-spacing: .2em;\n  &:hover {\n    cursor: pointer;\n  }\n\n  @media (max-width: 768px) {\n    display: block;\n    margin: 0 auto 1rem auto;\n  }\n"]);return W=function(){return e},e}function B(){var e=F(["\n  display: flex;\n  align-items: center;\n\n  @media (max-width: 768px) {\n    display: block;\n  }\n"]);return B=function(){return e},e}function R(){var e=F(["\n  font-size: 6rem;\n  color: transparent;\n  -webkit-text-stroke: 2px var(--color-black);\n  \n  @media (max-width: 768px) {\n    font-size: 4rem;\n    letter-spacing: .05em;\n    padding-bottom: 1rem;\n  }\n"]);return R=function(){return e},e}function Q(){var e=F(["\n  padding: 4rem 0;\n  \n  @media (max-width: 768px) {\n    text-align: center;\n  }\n"]);return Q=function(){return e},e}function F(e,t){return t||(t=e.slice(0)),e.raw=t,e}var J=o.a.div(Q()),H=o.a.h1(R()),X=o.a.div(B()),V=o.a.button(W()),K=o.a.div(Z()),q=o.a.div(P()),_=o.a.span(U());var $=function(e){var t=a.a.useState(!1),n=t[0],i=t[1],r=a.a.useState(0),s=r[0],o=r[1],u=a.a.useState({current:"0:00",total:"0:00"}),c=u[0],d=u[1];function l(e){var t=Math.floor(e%60);return[Math.floor((e-e%60)/60),t<10?"0"+t:t].join(":")}return a.a.createElement(J,null,a.a.createElement(H,null,e.title),a.a.createElement("audio",{preload:"auto",src:e.track,id:e.id,onTimeUpdate:function(e){var t=e.target.duration,n=e.target.currentTime;d(Object.assign({},c,{current:l(n)})),n/t!=1&&o(n/t*100)},onLoadedData:function(e){d(Object.assign({},c,{total:l(e.target.duration)}))}}),a.a.createElement(X,null,a.a.createElement(V,{onClick:function(e){n?n&&(e.target.parentNode.parentNode.children[1].pause(),i(!1)):(e.target.parentNode.parentNode.children[1].play(),i(!0))},style:{background:n?"var(--color-black)":"var(--color-orange)"}},n?"stop":"play"),a.a.createElement(_,null,c.current,"/",c.total),a.a.createElement(K,{onClick:function(e){e.stopPropagation();var t=e.target.getBoundingClientRect().left,n=(e.clientX-t)/e.target.getBoundingClientRect().width*100,i=n/100*e.target.parentNode.parentNode.children[1].duration;o(n),d(Object.assign({},c,{current:l(i)})),e.target.parentNode.parentNode.children[1].currentTime=i}},a.a.createElement(q,{style:{width:s+"%"}}))))};function ee(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  background: var(--color-bg);\n  padding: 6rem 0;\n  position: relative;\n  z-index: 1;\n  overflow: hidden;\n  \n  @media (max-width: 768px) {\n    padding: 4rem 0;\n  }\n"]);return ee=function(){return e},e}var te=o.a.div(ee());var ne=function(){var e=k.data;return a.a.createElement(te,null,a.a.createElement("div",{className:"container"},e.allMarkdownRemark.edges.map((function(e,t){return a.a.createElement($,{id:e.node.frontmatter.id,title:e.node.frontmatter.title,track:e.node.frontmatter.src.publicURL,key:t})}))))};function ie(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  background: var(--color-hero-bg);\n  width: 100%;\n  text-align: center;\n  letter-spacing: .2em;\n  padding: 3rem 0;\n  a {\n    color: var(--color-black);\n  }\n  a:hover {\n    color: var(--color-orange);\n  }\n"]);return ie=function(){return e},e}var ae=o.a.div(ie());var re=function(){return a.a.createElement(ae,null,a.a.createElement("small",null,"Website by ",a.a.createElement("a",{href:"https://gilles.design"},"Gilles De Praetere")))};n("/Cf1"),t.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(r.a,{title:"Home"}),a.a.createElement(z,null),a.a.createElement(G,null),a.a.createElement(ne,null),a.a.createElement(re,null))}},"f/V8":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBpZD0ic2xvZ2FuIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEuNzIiIGhlaWdodD0iMTQxLjQyIiB2aWV3Qm94PSIwIDAgMTQxLjcyIDE0MS40MiI+CiAgPHBhdGggaWQ9IlBhdGhfMSIgZGF0YS1uYW1lPSJQYXRoIDEiIGQ9Ik02Ny44NCwxNi45OGwtNC4wOC40TDYyLjA4LjQsNjYuMTYsMFoiIGZpbGw9IiNmNTNlMjYiLz4KICA8cGF0aCBpZD0iUGF0aF8yIiBkYXRhLW5hbWU9IlBhdGggMiIgZD0iTTkxLjgsMi44bC0uNDgsMTIuNDZMOTguOTQsNS40bDUuMDksMS44NUw5OC4yLDIzLjI5bC0zLjg4LTEuNDEsMS4zNi0zLjc0LDMuMTYtNy41My04LjAzLDEwLTIuNTUtLjkzLjI2LTEyLjgzTDg2LjEsMTQuNjYsODQuNzQsMTguNGwtMy44Ny0xLjQxTDg2LjcuOTVaIiBmaWxsPSIjZjUzZTI2Ii8+CiAgPHBhdGggaWQ9IlBhdGhfMyIgZGF0YS1uYW1lPSJQYXRoIDMiIGQ9Ik0xMTEuMDksMjkuOTNsLTQuMjItMy43NC0yLjg1LDEuNzNMMTAwLjczLDI1bDE2LTguNjIsMi44OSwyLjU3LTYuNiwxNi45NS0zLjMxLTIuOTNabS0xLjM3LTUuNDYsMi43NSwyLjQzLDIuNTUtNS42NVoiIGZpbGw9IiNmNTNlMjYiLz4KICA8cGF0aCBpZD0iUGF0aF80IiBkYXRhLW5hbWU9IlBhdGggNCIgZD0iTTEyMy4wNyw0MC4yNGwtMi40NS0uNTQtMy45LDIuMjUtMi4wNS0zLjU2LDE0Ljc5LTguNTIsMi4wNSwzLjU2LTYuNTIsMy43NiwyLjU5LjE2LDYuNDguNTIsMi41NCw0LjQxLTkuNDItMS4yMy01LjM3LDkuNzUtMi40My00LjIyWiIgZmlsbD0iI2Y1M2UyNiIvPgogIDxwYXRoIGlkPSJQYXRoXzUiIGRhdGEtbmFtZT0iUGF0aCA1IiBkPSJNMTMxLjg5LDYyLjI3bC0xLjQzLTYuMzEtMy45OC45LDEuNjgsNy40NS0zLjA5LjctMi41OS0xMS40NiwxNi42NC0zLjc2LDIuNiwxMS40OS0zLjEuNy0xLjY5LTcuNDgtMy41MS43OSwxLjQzLDYuMzFaIiBmaWxsPSIjZjUzZTI2Ii8+CiAgPHBhdGggaWQ9IlBhdGhfNiIgZGF0YS1uYW1lPSJQYXRoIDYiIGQ9Ik0xMjUuMDYsNzYuNzhsMTYuNjEsMy44OS0xLjQsNS45N2E4LjYxNSw4LjYxNSwwLDAsMS0yLjMyLDQuNiw0LjQ1MSw0LjQ1MSwwLDAsMS01Ljg2LS4yNCwzLjUyNSwzLjUyNSwwLDAsMS0uOTQtMi4wNiwzLjYsMy42LDAsMCwxLTEuNzUsMS43LDMuODE3LDMuODE3LDAsMCwxLTIuNDUuMTYsNC41MTEsNC41MTEsMCwwLDEtMy4zMS0yLjQxLDcuNTc4LDcuNTc4LDAsMCwxLS4xOC00Ljg3Wm02LjEzLDUuNjYtMy45OC0uOTMtLjYyLDIuNjJhMi41NSwyLjU1LDAsMCwwLC4xMSwxLjc4LDEuNzcsMS43NywwLDAsMCwxLjI2LjkxLDEuODkzLDEuODkzLDAsMCwwLDIuNTctMS41OFptMi42Mi42Mi0uNDksMi4wOWEzLjA1MiwzLjA1MiwwLDAsMCwuMDQsMS45OCwxLjcxMiwxLjcxMiwwLDAsMCwxLjI1Ljg4LDEuODY0LDEuODY0LDAsMCwwLDEuNjYtLjI1LDMuMywzLjMsMCwwLDAsLjkyLTEuODRsLjQ2LTEuOTZaIiBmaWxsPSIjZjUzZTI2Ii8+CiAgPHBhdGggaWQ9IlBhdGhfNyIgZGF0YS1uYW1lPSJQYXRoIDciIGQ9Ik0xMjEuMjQsMTA2LjExbDMuMjgtNS41OEwxMjEsOTguNDdsLTMuODcsNi41OS0yLjczLTEuNiw1Ljk2LTEwLjEzLDE0LjcxLDguNjUtNS45NywxMC4xNS0yLjc0LTEuNjEsMy44OS02LjYxLTMuMS0xLjgyLTMuMjgsNS41OFoiIGZpbGw9IiNmNTNlMjYiLz4KICA8cGF0aCBpZD0iUGF0aF84IiBkYXRhLW5hbWU9IlBhdGggOCIgZD0iTTEwNy4yMiwxMTUuMDFsNC4xOS0zLjc3LTEuNC0zLjAzLDMuMjctMi45NCw2Ljc2LDE2Ljg3LTIuODcsMi41OS0xNi4xLTguNDYsMy4yOC0yLjk2Wm01LjU4LS43NS0yLjczLDIuNDUsNS4zMywzLjE3WiIgZmlsbD0iI2Y1M2UyNiIvPgogIDxwYXRoIGlkPSJQYXRoXzkiIGRhdGEtbmFtZT0iUGF0aCA5IiBkPSJNOTMuMjUsMTM1LjE3bDQuNjQtMi4xNi01Ljg2LTEyLjU5LDMuNzMtMS43Myw1Ljg2LDEyLjU5LDQuNTYtMi4xMiwxLjM0LDIuODgtMTIuOTMsNi4wMVoiIGZpbGw9IiNmNTNlMjYiLz4KICA8cGF0aCBpZD0iUGF0aF8xMCIgZGF0YS1uYW1lPSJQYXRoIDEwIiBkPSJNNzYuMDUsMTI4Ljk3YTEuNywxLjcsMCwwLDAsLjgxLDEuMzEsNy44Myw3LjgzLDAsMCwwLDIuMzYuNzUsMjIuOCwyMi44LDAsMCwxLDIuNzQuN2MyLjMzLjgsMy42MiwyLjE0LDMuODUsNC4wMmE0LjA1NCw0LjA1NCwwLDAsMS0uNSwyLjU5LDUuMzg0LDUuMzg0LDAsMCwxLTIuMTEsMS45Nyw5LjA4LDkuMDgsMCwwLDEtMy4yOSwxLjAzLDcuOTI3LDcuOTI3LDAsMCwxLTMuMzYtLjIzLDUuMTI1LDUuMTI1LDAsMCwxLTIuNDgtMS41Nyw0Ljg0NSw0Ljg0NSwwLDAsMS0xLjE1LTIuNjVsNC4wNy0uNTJhMi4wNTUsMi4wNTUsMCwwLDAsLjg0LDEuNTIsMi40ODYsMi40ODYsMCwwLDAsMS43OS4zNSwyLjg1OSwyLjg1OSwwLDAsMCwxLjY3LS43LDEuNDMxLDEuNDMxLDAsMCwwLS4zNy0yLjQsOS4wNDEsOS4wNDEsMCwwLDAtMi41OS0uNzgsMTUuMjc3LDE1LjI3NywwLDAsMS0zLjA0LS44NSw0LjksNC45LDAsMCwxLTMuMy00LjAxLDQuMTYsNC4xNiwwLDAsMSwxLjIzLTMuNyw3LjUxNyw3LjUxNywwLDAsMSw0LjQzLTEuODUsOS4yNjksOS4yNjksMCwwLDEsMy44Mi4yNiw1LjcxMyw1LjcxMywwLDAsMSwyLjc3LDEuNyw1LjMsNS4zLDAsMCwxLDEuMjIsMi44NWwtNC4wOS41MmEyLjYzMywyLjYzMywwLDAsMC0uOTYtMS45MiwzLjMyNSwzLjMyNSwwLDAsMC0yLjM3LS4zNSwyLjY2OCwyLjY2OCwwLDAsMC0xLjU0LjY0QTEuNDM4LDEuNDM4LDAsMCwwLDc2LjA1LDEyOC45N1oiIGZpbGw9IiNmNTNlMjYiLz4KICA8cGF0aCBpZD0iUGF0aF8xMSIgZGF0YS1uYW1lPSJQYXRoIDExIiBkPSJNNTQuMDMsMTMxLjM1YTEwLjY2NywxMC42NjcsMCwwLDEsLjM4LDIuMTMsNC40NzMsNC40NzMsMCwwLDEtLjI2LDEuODYsNC4zODEsNC4zODEsMCwwLDEtMi4zOSwyLjY4LDQuODMzLDQuODMzLDAsMCwxLTMuNzIuMDEsNC41NTEsNC41NTEsMCwwLDEtMi42MS0yLjE5LDMuODM5LDMuODM5LDAsMCwxLS4yLTMuMTgsNC43MjcsNC43MjcsMCwwLDEsMy41Ny0yLjgybDEuMDUtLjI4LTEuNDUtMy43MmE2LjE1OCw2LjE1OCwwLDAsMC0xLjU3LDIuNDRsLTMuMTItMS4xM2E4Ljg0NSw4Ljg0NSwwLDAsMSwzLjM4LTQuNjdsLTEuNDMtMy42OSw0LjE0LDEuNS40NCwxLjEyYTguMTE3LDguMTE3LDAsMCwxLDIuMTgtLjEzLDguOTczLDguOTczLDAsMCwxLDIuMjcuNTIsNS45LDUuOSwwLDAsMSwzLjM2LDIuNjMsNC40NDIsNC40NDIsMCwwLDEsLjI1LDMuODEsMy45MTgsMy45MTgsMCwwLDEtMS4zLDEuODEsOS4zMzMsOS4zMzMsMCwwLDEtMi45NywxLjMxWm0tMy4xLDIuODlhMy41NTksMy41NTksMCwwLDAtLjE2LTIuMThsLS45MS4yYTIuNTU3LDIuNTU3LDAsMCwwLS45OC40MiwxLjY5MiwxLjY5MiwwLDAsMC0uNTUuODEsMS4zNTgsMS4zNTgsMCwwLDAsLjAzLDEuMDEsMS4yMDUsMS4yMDUsMCwwLDAsLjc0LjY5LDEuMzMzLDEuMzMzLDAsMCwwLDEuMTEtLjA0QTEuNjMxLDEuNjMxLDAsMCwwLDUwLjkzLDEzNC4yNFptMi41Mi05LjY3YTQuMjg3LDQuMjg3LDAsMCwwLTIuMDEtLjIybDEuNyw0LjMzLjEyLS4wM2EyLjkxNCwyLjkxNCwwLDAsMCwxLjI2LTEuNTEsMi4xMjUsMi4xMjUsMCwwLDAtLjAxLTEuNTVBMS43NTIsMS43NTIsMCwwLDAsNTMuNDUsMTI0LjU3WiIgZmlsbD0iI2Y1M2UyNiIvPgogIDxwYXRoIGlkPSJQYXRoXzEyIiBkYXRhLW5hbWU9IlBhdGggMTIiIGQ9Ik0zMi44OSwxMDguNjRsMi45OSwyLjhMMjQuMjMsMTIzLjlsLTIuOTktMi44WiIgZmlsbD0iI2Y1M2UyNiIvPgogIDxwYXRoIGlkPSJQYXRoXzEzIiBkYXRhLW5hbWU9IlBhdGggMTMiIGQ9Ik0yMC4wNSw5NS45OCwxNyw4OS41bDIuODYtMS4zNSw0LjgsMTAuMkw5LjIyLDEwNS42Miw3LjQ3LDEwMS45WiIgZmlsbD0iI2Y1M2UyNiIvPgogIDxwYXRoIGlkPSJQYXRoXzE0IiBkYXRhLW5hbWU9IlBhdGggMTQiIGQ9Ik04Ljc1LDcyLjQyYTEwLjAyNCwxMC4wMjQsMCwwLDEsNC41MS4yOCw2LjgyNyw2LjgyNywwLDAsMSwzLjMxLDIuMTcsNy4yNzUsNy4yNzUsMCwwLDEsMS41OSwzLjY5LDcuNDA2LDcuNDA2LDAsMCwxLS40MywzLjk3LDYuODgyLDYuODgyLDAsMCwxLTIuNDUsMy4wMiw5Ljc1Myw5Ljc1MywwLDAsMS00LjA5LDEuNmwtLjk1LjE0YTEwLjE2MywxMC4xNjMsMCwwLDEtNC41MS0uMjcsNi44Miw2LjgyLDAsMCwxLTMuMzEtMi4xOCw3LjM4OCw3LjM4OCwwLDAsMS0xLjYtMy43Miw3LjI4OSw3LjI4OSwwLDAsMSwuNDYtMy45OEE2Ljk3Myw2Ljk3MywwLDAsMSwzLjgsNzQuMWE5Ljg2MSw5Ljg2MSwwLDAsMSw0LjE4LTEuNThabS0uMTEsNC4yNGE3LjIsNy4yLDAsMCwwLTMuNywxLjQsMi43MjYsMi43MjYsMCwwLDAtLjk1LDIuNmMuMywyLjA0LDEuOTksMi45LDUuMDcsMi41NmwxLjI0LS4xN2E3LjMxNiw3LjMxNiwwLDAsMCwzLjY5LTEuMzgsMi43NiwyLjc2LDAsMCwwLC45OC0yLjY0LDIuNjg2LDIuNjg2LDAsMCwwLTEuNjYtMi4xOSw3LjA5Myw3LjA5MywwLDAsMC0zLjg5LS4yOVoiIGZpbGw9IiNmNTNlMjYiLz4KICA8cGF0aCBpZD0iUGF0aF8xNSIgZGF0YS1uYW1lPSJQYXRoIDE1IiBkPSJNMTMuNjMsNjAuMzMsMi4wMSw1NC43OGwuODEtNC41MiwxNS43Nyw4LjY4LS44LDQuNDNMMCw2NS45NGwuODEtNC40OVoiIGZpbGw9IiNmNTNlMjYiLz4KICA8cGF0aCBpZD0iUGF0aF8xNiIgZGF0YS1uYW1lPSJQYXRoIDE2IiBkPSJNMTkuNDYsMzcuODRsLTMuMDEsNS43MywzLjYxLDEuOSwzLjU1LTYuNzcsMi44LDEuNDdMMjAuOTUsNTAuNTgsNS44NSw0Mi42NWw1LjQ3LTEwLjQzLDIuODEsMS40OC0zLjU2LDYuNzksMy4xOSwxLjY3LDMuMDEtNS43M1oiIGZpbGw9IiNmNTNlMjYiLz4KICA8cGF0aCBpZD0iUGF0aF8xNyIgZGF0YS1uYW1lPSJQYXRoIDE3IiBkPSJNMzcuODUsMjguNDJsLTMuMTIsMi42NkwyMy42NiwxOC4xbDMuMTItMi42NloiIGZpbGw9IiNmNTNlMjYiLz4KICA8cGF0aCBpZD0iUGF0aF8xOCIgZGF0YS1uYW1lPSJQYXRoIDE4IiBkPSJNNDYuOTksNy4wOCw0Mi40Miw5LjM5bDYuMjcsMTIuMzktMy42NywxLjg2TDM4Ljc1LDExLjI1bC00LjQ5LDIuMjctMS40My0yLjgzTDQ1LjU2LDQuMjVaIiBmaWxsPSIjZjUzZTI2Ii8+Cjwvc3ZnPgo="},fhmS:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTE3IiBoZWlnaHQ9IjciIHZpZXdCb3g9IjAgMCAxMTcgNyI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IHdpZHRoPSIxMTciIGhlaWdodD0iNyIgZmlsbD0ibm9uZSIvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPGcgaWQ9IlJlcGVhdF9HcmlkXzIiIGRhdGEtbmFtZT0iUmVwZWF0IEdyaWQgMiIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAtcGF0aCkiPgogICAgPHBhdGggaWQ9IlBvbHlnb25fMSIgZGF0YS1uYW1lPSJQb2x5Z29uIDEiIGQ9Ik00LDAsOCw3SDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4IDcpIHJvdGF0ZSgxODApIiBmaWxsPSIjMWIxYjFjIi8+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMykiPgogICAgICA8cGF0aCBpZD0iUG9seWdvbl8xLTIiIGRhdGEtbmFtZT0iUG9seWdvbiAxIiBkPSJNNCwwLDgsN0gwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOCA3KSByb3RhdGUoMTgwKSIgZmlsbD0iIzFiMWIxYyIvPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjYpIj4KICAgICAgPHBhdGggaWQ9IlBvbHlnb25fMS0zIiBkYXRhLW5hbWU9IlBvbHlnb24gMSIgZD0iTTQsMCw4LDdIMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDggNykgcm90YXRlKDE4MCkiIGZpbGw9IiMxYjFiMWMiLz4KICAgIDwvZz4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM5KSI+CiAgICAgIDxwYXRoIGlkPSJQb2x5Z29uXzEtNCIgZGF0YS1uYW1lPSJQb2x5Z29uIDEiIGQ9Ik00LDAsOCw3SDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4IDcpIHJvdGF0ZSgxODApIiBmaWxsPSIjMWIxYjFjIi8+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MikiPgogICAgICA8cGF0aCBpZD0iUG9seWdvbl8xLTUiIGRhdGEtbmFtZT0iUG9seWdvbiAxIiBkPSJNNCwwLDgsN0gwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOCA3KSByb3RhdGUoMTgwKSIgZmlsbD0iIzFiMWIxYyIvPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjUpIj4KICAgICAgPHBhdGggaWQ9IlBvbHlnb25fMS02IiBkYXRhLW5hbWU9IlBvbHlnb24gMSIgZD0iTTQsMCw4LDdIMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDggNykgcm90YXRlKDE4MCkiIGZpbGw9IiMxYjFiMWMiLz4KICAgIDwvZz4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc4KSI+CiAgICAgIDxwYXRoIGlkPSJQb2x5Z29uXzEtNyIgZGF0YS1uYW1lPSJQb2x5Z29uIDEiIGQ9Ik00LDAsOCw3SDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4IDcpIHJvdGF0ZSgxODApIiBmaWxsPSIjMWIxYjFjIi8+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MSkiPgogICAgICA8cGF0aCBpZD0iUG9seWdvbl8xLTgiIGRhdGEtbmFtZT0iUG9seWdvbiAxIiBkPSJNNCwwLDgsN0gwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOCA3KSByb3RhdGUoMTgwKSIgZmlsbD0iIzFiMWIxYyIvPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA0KSI+CiAgICAgIDxwYXRoIGlkPSJQb2x5Z29uXzEtOSIgZGF0YS1uYW1lPSJQb2x5Z29uIDEiIGQ9Ik00LDAsOCw3SDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4IDcpIHJvdGF0ZSgxODApIiBmaWxsPSIjMWIxYjFjIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K"},jcIW:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"frontmatter":{"src":{"publicURL":"/static/Idontwannedie-Casquette-d312fd9e5bf462b14dcb5fe7d6b6e1de.mp3"},"id":5,"title":"I dont wanne die"}}},{"node":{"frontmatter":{"src":{"publicURL":"/static/PIETER-Casquette-f592d9dbe51899e830c9527712b2764b.mp3"},"id":4,"title":"PIETER"}}},{"node":{"frontmatter":{"src":{"publicURL":"/static/LeBron-Casquette-dcbd8114e032b6068804dbf2eb317700.mp3"},"id":6,"title":"LeBron"}}},{"node":{"frontmatter":{"src":{"publicURL":"/static/InDustrie-Casquette-b18467e4652f56b80d80bc857fce16a2.mp3"},"id":3,"title":"InDustrie"}}},{"node":{"frontmatter":{"src":{"publicURL":"/static/WANNE-BE-WITH-YOU-Casquette-6f0873a9a797790a3a0347be232faa0b.mp3"},"id":1,"title":"Wanne be with you"}}},{"node":{"frontmatter":{"src":{"publicURL":"/static/Christmas-Casquette-717eb8a6853aedb4d65f9720e4a1df3b.mp3"},"id":2,"title":"Christmas"}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-ba24cbd0f1d871c330be.js.map