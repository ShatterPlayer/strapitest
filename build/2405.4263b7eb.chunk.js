(self.webpackChunkstrapitest=self.webpackChunkstrapitest||[]).push([[2405],{89881:(h,y,n)=>{var a=n(47816),f=n(99291),m=f(a);h.exports=m},69199:(h,y,n)=>{var a=n(89881),f=n(98612);function m(u,s){var p=-1,g=f(u)?Array(u.length):[];return a(u,function(d,O,j){g[++p]=s(d,O,j)}),g}h.exports=m},82689:(h,y,n)=>{var a=n(29932),f=n(97786),m=n(67206),u=n(69199),s=n(71131),p=n(7518),g=n(85022),d=n(6557),O=n(1469);function j(M,P,b){P.length?P=a(P,function(E){return O(E)?function(S){return f(S,E.length===1?E[0]:E)}:E}):P=[d];var x=-1;P=a(P,p(m));var R=u(M,function(E,S,F){var w=a(P,function(Z){return Z(E)});return{criteria:w,index:++x,value:E}});return s(R,function(E,S){return g(E,S,b)})}h.exports=j},25970:(h,y,n)=>{var a=n(63012),f=n(79095);function m(u,s){return a(u,s,function(p,g){return f(u,g)})}h.exports=m},63012:(h,y,n)=>{var a=n(97786),f=n(10611),m=n(71811);function u(s,p,g){for(var d=-1,O=p.length,j={};++d<O;){var M=p[d],P=a(s,M);g(P,M)&&f(j,m(M,s),P)}return j}h.exports=u},71131:h=>{function y(n,a){var f=n.length;for(n.sort(a);f--;)n[f]=n[f].value;return n}h.exports=y},26393:(h,y,n)=>{var a=n(33448);function f(m,u){if(m!==u){var s=m!==void 0,p=m===null,g=m===m,d=a(m),O=u!==void 0,j=u===null,M=u===u,P=a(u);if(!j&&!P&&!d&&m>u||d&&O&&M&&!j&&!P||p&&O&&M||!s&&M||!g)return 1;if(!p&&!d&&!P&&m<u||P&&s&&g&&!p&&!d||j&&s&&g||!O&&g||!M)return-1}return 0}h.exports=f},85022:(h,y,n)=>{var a=n(26393);function f(m,u,s){for(var p=-1,g=m.criteria,d=u.criteria,O=g.length,j=s.length;++p<O;){var M=a(g[p],d[p]);if(M){if(p>=j)return M;var P=s[p];return M*(P=="desc"?-1:1)}}return m.index-u.index}h.exports=f},99291:(h,y,n)=>{var a=n(98612);function f(m,u){return function(s,p){if(s==null)return s;if(!a(s))return m(s,p);for(var g=s.length,d=u?g:-1,O=Object(s);(u?d--:++d<g)&&p(O[d],d,O)!==!1;);return s}}h.exports=f},92052:(h,y,n)=>{var a=n(42980),f=n(13218);function m(u,s,p,g,d,O){return f(u)&&f(s)&&(O.set(s,u),a(u,s,void 0,m,O),O.delete(s)),u}h.exports=m},66913:(h,y,n)=>{var a=n(96874),f=n(5976),m=n(92052),u=n(30236),s=f(function(p){return p.push(void 0,m),a(u,void 0,p)});h.exports=s},30236:(h,y,n)=>{var a=n(42980),f=n(21463),m=f(function(u,s,p,g){a(u,s,p,g)});h.exports=m},78718:(h,y,n)=>{var a=n(25970),f=n(99021),m=f(function(u,s){return u==null?{}:a(u,s)});h.exports=m},89734:(h,y,n)=>{var a=n(21078),f=n(82689),m=n(5976),u=n(16612),s=m(function(p,g){if(p==null)return[];var d=g.length;return d>1&&u(p,g[0],g[1])?g=[]:d>2&&u(g[0],g[1],g[2])&&(g=[g[0]]),f(p,a(g,1),[])});h.exports=s},29558:(h,y,n)=>{"use strict";n.d(y,{Z:()=>vt});var a=n(50841),f=n(67294),m=n(74806),u=n(680),s=n(80361),p=n(25687),g=n(16284),d=n(88222),O=n(16143);function j(t,l){return Object.keys(t).reduce(function(r,e){return r[e]=(0,s.pi)({timeZone:l},t[e]),r},{})}function M(t,l){var r=Object.keys((0,s.pi)((0,s.pi)({},t),l));return r.reduce(function(e,i){return e[i]=(0,s.pi)((0,s.pi)({},t[i]||{}),l[i]||{}),e},{})}function P(t,l){if(!l)return t;var r=g.C.formats;return(0,s.pi)((0,s.pi)((0,s.pi)({},r),t),{date:M(j(r.date,l),j(t.date||{},l)),time:M(j(r.time,l),j(t.time||{},l))})}var b=function(t,l,r,e,i){var o=t.locale,c=t.formats,v=t.messages,T=t.defaultLocale,I=t.defaultFormats,L=t.fallbackOnEmptyString,B=t.onError,N=t.timeZone,V=t.defaultRichTextElements;r===void 0&&(r={id:""});var q=r.id,C=r.defaultMessage;(0,p.kG)(!!q,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var A=String(q),D=v&&Object.prototype.hasOwnProperty.call(v,A)&&v[A];if(Array.isArray(D)&&D.length===1&&D[0].type===O.wD.literal)return D[0].value;if(!e&&D&&typeof D=="string"&&!V)return D.replace(/'\{(.*?)\}'/gi,"{$1}");if(e=(0,s.pi)((0,s.pi)({},V),e||{}),c=P(c,N),I=P(I,N),!D){if(L===!1&&D==="")return D;if((!C||o&&o.toLowerCase()!==T.toLowerCase())&&B(new d.$6(r,o)),C)try{var k=l.getMessageFormat(C,T,I,i);return k.format(e)}catch(W){return B(new d.X9('Error formatting default message for: "'.concat(A,'", rendering default message verbatim'),o,r,W)),typeof C=="string"?C:A}return A}try{var k=l.getMessageFormat(D,o,c,(0,s.pi)({formatters:l},i||{}));return k.format(e)}catch(W){B(new d.X9('Error formatting message: "'.concat(A,'", using ').concat(C?"default message":"id"," as fallback."),o,r,W))}if(C)try{var k=l.getMessageFormat(C,T,I,i);return k.format(e)}catch(W){B(new d.X9('Error formatting the default message for: "'.concat(A,'", rendering message verbatim'),o,r,W))}return typeof D=="string"?D:typeof C=="string"?C:A},x=n(82644),R=["style","currency","currencyDisplay","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem"];function E(t,l,r){var e=t.locale,i=t.formats,o=t.onError;r===void 0&&(r={});var c=r.format,v=c&&(0,x.TB)(i,"number",c,o)||{},T=(0,x.L6)(r,R,v);return l(e,T)}function S(t,l,r,e){e===void 0&&(e={});try{return E(t,l,e).format(r)}catch(i){t.onError(new d.Qe("Error formatting number.",t.locale,i))}return String(r)}function F(t,l,r,e){e===void 0&&(e={});try{return E(t,l,e).formatToParts(r)}catch(i){t.onError(new d.Qe("Error formatting number.",t.locale,i))}return[]}var w=n(11050),Z=["numeric","style"];function z(t,l,r){var e=t.locale,i=t.formats,o=t.onError;r===void 0&&(r={});var c=r.format,v=!!c&&(0,x.TB)(i,"relative",c,o)||{},T=(0,x.L6)(r,Z,v);return l(e,T)}function U(t,l,r,e,i){i===void 0&&(i={}),e||(e="second");var o=Intl.RelativeTimeFormat;o||t.onError(new w.u_(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,w.jK.MISSING_INTL_API));try{return z(t,l,i).format(r,e)}catch(c){t.onError(new d.Qe("Error formatting relative time.",t.locale,c))}return String(r)}var $=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function K(t,l,r,e){var i=t.locale,o=t.formats,c=t.onError,v=t.timeZone;e===void 0&&(e={});var T=e.format,I=(0,s.pi)((0,s.pi)({},v&&{timeZone:v}),T&&(0,x.TB)(o,l,T,c)),L=(0,x.L6)(e,$,I);return l==="time"&&!L.hour&&!L.minute&&!L.second&&!L.timeStyle&&!L.dateStyle&&(L=(0,s.pi)((0,s.pi)({},L),{hour:"numeric",minute:"numeric"})),r(i,L)}function _(t,l){for(var r=[],e=2;e<arguments.length;e++)r[e-2]=arguments[e];var i=r[0],o=r[1],c=o===void 0?{}:o,v=typeof i=="string"?new Date(i||0):i;try{return K(t,"date",l,c).format(v)}catch(T){t.onError(new d.Qe("Error formatting date.",t.locale,T))}return String(v)}function tt(t,l){for(var r=[],e=2;e<arguments.length;e++)r[e-2]=arguments[e];var i=r[0],o=r[1],c=o===void 0?{}:o,v=typeof i=="string"?new Date(i||0):i;try{return K(t,"time",l,c).format(v)}catch(T){t.onError(new d.Qe("Error formatting time.",t.locale,T))}return String(v)}function et(t,l){for(var r=[],e=2;e<arguments.length;e++)r[e-2]=arguments[e];var i=r[0],o=r[1],c=r[2],v=c===void 0?{}:c,T=t.timeZone,I=t.locale,L=t.onError,B=(0,x.L6)(v,$,T?{timeZone:T}:{});try{return l(I,B).formatRange(i,o)}catch(N){L(new d.Qe("Error formatting date time range.",t.locale,N))}return String(i)}function rt(t,l){for(var r=[],e=2;e<arguments.length;e++)r[e-2]=arguments[e];var i=r[0],o=r[1],c=o===void 0?{}:o,v=typeof i=="string"?new Date(i||0):i;try{return K(t,"date",l,c).formatToParts(v)}catch(T){t.onError(new d.Qe("Error formatting date.",t.locale,T))}return[]}function nt(t,l){for(var r=[],e=2;e<arguments.length;e++)r[e-2]=arguments[e];var i=r[0],o=r[1],c=o===void 0?{}:o,v=typeof i=="string"?new Date(i||0):i;try{return K(t,"time",l,c).formatToParts(v)}catch(T){t.onError(new d.Qe("Error formatting time.",t.locale,T))}return[]}var at=["type"];function ot(t,l,r,e){var i=t.locale,o=t.onError;e===void 0&&(e={}),Intl.PluralRules||o(new w.u_(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,w.jK.MISSING_INTL_API));var c=(0,x.L6)(e,at);try{return l(i,c).select(r)}catch(v){o(new d.Qe("Error formatting plural.",i,v))}return"other"}var it=["type","style"],G=Date.now();function st(t){return"".concat(G,"_").concat(t,"_").concat(G)}function lt(t,l,r,e){e===void 0&&(e={});var i=H(t,l,r,e).reduce(function(o,c){var v=c.value;return typeof v!="string"?o.push(v):typeof o[o.length-1]=="string"?o[o.length-1]+=v:o.push(v),o},[]);return i.length===1?i[0]:i.length===0?"":i}function H(t,l,r,e){var i=t.locale,o=t.onError;e===void 0&&(e={});var c=Intl.ListFormat;c||o(new w.u_(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,w.jK.MISSING_INTL_API));var v=(0,x.L6)(e,it);try{var T={},I=r.map(function(L,B){if(typeof L=="object"){var N=st(B);return T[N]=L,N}return String(L)});return l(i,v).formatToParts(I).map(function(L){return L.type==="literal"?L:(0,s.pi)((0,s.pi)({},L),{value:T[L.value]||L.value})})}catch(L){o(new d.Qe("Error formatting list.",i,L))}return r}var ut=["style","type","fallback","languageDisplay"];function ft(t,l,r,e){var i=t.locale,o=t.onError,c=Intl.DisplayNames;c||o(new w.u_(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,w.jK.MISSING_INTL_API));var v=(0,x.L6)(e,ut);try{return l(i,v).of(r)}catch(T){o(new d.Qe("Error formatting display name.",i,T))}}function mt(t){var l=t?t[Object.keys(t)[0]]:void 0;return typeof l=="string"}function ct(t){t.onWarn&&t.defaultRichTextElements&&mt(t.messages||{})&&t.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function dt(t,l){var r=(0,x.ax)(l),e=(0,s.pi)((0,s.pi)({},x.Z0),t),i=e.locale,o=e.defaultLocale,c=e.onError;return i?!Intl.NumberFormat.supportedLocalesOf(i).length&&c?c(new d.gb('Missing locale data for locale: "'.concat(i,'" in Intl.NumberFormat. Using default locale: "').concat(o,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(i).length&&c&&c(new d.gb('Missing locale data for locale: "'.concat(i,'" in Intl.DateTimeFormat. Using default locale: "').concat(o,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(c&&c(new d.OV('"locale" was not configured, using "'.concat(o,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),e.locale=e.defaultLocale||"en"),ct(e),(0,s.pi)((0,s.pi)({},e),{formatters:r,formatNumber:S.bind(null,e,r.getNumberFormat),formatNumberToParts:F.bind(null,e,r.getNumberFormat),formatRelativeTime:U.bind(null,e,r.getRelativeTimeFormat),formatDate:_.bind(null,e,r.getDateTimeFormat),formatDateToParts:rt.bind(null,e,r.getDateTimeFormat),formatTime:tt.bind(null,e,r.getDateTimeFormat),formatDateTimeRange:et.bind(null,e,r.getDateTimeFormat),formatTimeToParts:nt.bind(null,e,r.getDateTimeFormat),formatPlural:ot.bind(null,e,r.getPluralRules),formatMessage:b.bind(null,e,r),$t:b.bind(null,e,r),formatList:lt.bind(null,e,r.getListFormat),formatListToParts:H.bind(null,e,r.getListFormat),formatDisplayName:ft.bind(null,e,r.getDisplayNames)})}var gt=n(61092);function Q(t){return{locale:t.locale,timeZone:t.timeZone,fallbackOnEmptyString:t.fallbackOnEmptyString,formats:t.formats,textComponent:t.textComponent,messages:t.messages,defaultLocale:t.defaultLocale,defaultFormats:t.defaultFormats,onError:t.onError,onWarn:t.onWarn,wrapRichTextChunksInFragment:t.wrapRichTextChunksInFragment,defaultRichTextElements:t.defaultRichTextElements}}function X(t){return t&&Object.keys(t).reduce(function(l,r){var e=t[r];return l[r]=(0,gt.Gt)(e)?(0,u.dt)(e):e,l},{})}var Y=function(t,l,r,e){for(var i=[],o=4;o<arguments.length;o++)i[o-4]=arguments[o];var c=X(e),v=b.apply(void 0,(0,a.ev)([t,l,r,c],i,!1));return Array.isArray(v)?f.Children.toArray(v):v},J=function(t,l){var r=t.defaultRichTextElements,e=(0,a._T)(t,["defaultRichTextElements"]),i=X(r),o=dt((0,a.pi)((0,a.pi)((0,a.pi)({},u.Z0),e),{defaultRichTextElements:i}),l),c={locale:o.locale,timeZone:o.timeZone,fallbackOnEmptyString:o.fallbackOnEmptyString,formats:o.formats,defaultLocale:o.defaultLocale,defaultFormats:o.defaultFormats,messages:o.messages,onError:o.onError,defaultRichTextElements:i};return(0,a.pi)((0,a.pi)({},o),{formatMessage:Y.bind(null,c,o.formatters),$t:Y.bind(null,c,o.formatters)})},pt=function(t){(0,a.ZT)(l,t);function l(){var r=t!==null&&t.apply(this,arguments)||this;return r.cache=(0,x.Sn)(),r.state={cache:r.cache,intl:J(Q(r.props),r.cache),prevConfig:Q(r.props)},r}return l.getDerivedStateFromProps=function(r,e){var i=e.prevConfig,o=e.cache,c=Q(r);return(0,u.wU)(i,c)?null:{intl:J(c,o),prevConfig:c}},l.prototype.render=function(){return(0,u.lq)(this.state.intl),f.createElement(m.zt,{value:this.state.intl},this.props.children)},l.displayName="IntlProvider",l.defaultProps=u.Z0,l}(f.PureComponent);const vt=pt},34726:(h,y,n)=>{"use strict";n.d(y,{D:()=>m});var a=n(85893),f=n(16607);const m=({children:u})=>(0,a.jsx)(f.x,{paddingLeft:10,paddingRight:10,children:u})},90731:(h,y,n)=>{"use strict";n.d(y,{T:()=>j});var a=n(85893),f=n(67294),m=n(88972);const u=b=>{const x=(0,f.useRef)(null),[R,E]=(0,f.useState)(!0),S=([F])=>{E(F.isIntersecting)};return(0,f.useEffect)(()=>{const F=x.current,w=new IntersectionObserver(S,b);return F&&w.observe(x.current),()=>{F&&w.disconnect()}},[x,b]),[x,R]};var s=n(79698);const p=(b,x)=>{const R=(0,s.W)(x);(0,f.useLayoutEffect)(()=>{const E=new ResizeObserver(R);return Array.isArray(b)?b.forEach(S=>{S.current&&E.observe(S.current)}):b.current&&E.observe(b.current),()=>{E.disconnect()}},[b,R])};var g=n(16607),d=n(96987),O=n(10574);const j=b=>{const x=(0,f.useRef)(null),[R,E]=(0,f.useState)(null),[S,F]=u({root:null,rootMargin:"0px",threshold:0});return p(S,()=>{S.current&&E(S.current.getBoundingClientRect())}),(0,f.useEffect)(()=>{x.current&&E(x.current.getBoundingClientRect())},[x]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{style:{height:R?.height},ref:S,children:F&&(0,a.jsx)(P,{ref:x,...b})}),!F&&(0,a.jsx)(P,{...b,sticky:!0,width:R?.width})]})};j.displayName="HeaderLayout";const M=(0,m.ZP)(g.x)`
  width: ${({width:b})=>b?`${b/16}rem`:void 0};
  z-index: ${({theme:b})=>b.zIndices[1]};
`,P=f.forwardRef(({navigationAction:b,primaryAction:x,secondaryAction:R,subtitle:E,title:S,sticky:F,width:w,...Z},z)=>{const U=typeof E=="string";return F?(0,a.jsx)(M,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:w,"data-strapi-header-sticky":!0,children:(0,a.jsxs)(d.k,{justifyContent:"space-between",children:[(0,a.jsxs)(d.k,{children:[b&&(0,a.jsx)(g.x,{paddingRight:3,children:b}),(0,a.jsxs)(g.x,{children:[(0,a.jsx)(O.Z,{variant:"beta",as:"h1",...Z,children:S}),U?(0,a.jsx)(O.Z,{variant:"pi",textColor:"neutral600",children:E}):E]}),R?(0,a.jsx)(g.x,{paddingLeft:4,children:R}):null]}),(0,a.jsx)(d.k,{children:x?(0,a.jsx)(g.x,{paddingLeft:2,children:x}):void 0})]})}):(0,a.jsxs)(g.x,{ref:z,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:b?6:8,background:"neutral100","data-strapi-header":!0,children:[b?(0,a.jsx)(g.x,{paddingBottom:2,children:b}):null,(0,a.jsxs)(d.k,{justifyContent:"space-between",children:[(0,a.jsxs)(d.k,{minWidth:0,children:[(0,a.jsx)(O.Z,{as:"h1",variant:"alpha",...Z,children:S}),R?(0,a.jsx)(g.x,{paddingLeft:4,children:R}):null]}),x]}),U?(0,a.jsx)(O.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:E}):E]})})},40720:(h,y,n)=>{"use strict";n.d(y,{o:()=>s});var a=n(85893),f=n(88972),m=n(16607);const u=(0,f.ZP)(m.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,s=({labelledBy:p="main-content-title",...g})=>(0,a.jsx)(u,{"aria-labelledby":p,as:"main",id:"main-content",tabIndex:-1,...g})},47754:(h,y,n)=>{"use strict";n.d(y,{z:()=>s});var a=n(85893),f=n(88972),m=n(16607);const u=(0,f.ZP)(m.x)`
  text-decoration: none;

  &:focus {
    left: ${({theme:p})=>p.spaces[3]};
    top: ${({theme:p})=>p.spaces[3]};
  }
`,s=({children:p})=>(0,a.jsx)(u,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",left:"-100%",padding:3,position:"absolute",top:"-100%",hasRadius:!0,zIndex:9999,children:p})},5907:(h,y,n)=>{"use strict";n.d(y,{$:()=>u});const a={color:{alternative100:"#181826",alternative200:"#4a4a6a",alternative500:"#ac73e6",alternative600:"#ac73e6",alternative700:"#e0c1f4",buttonNeutral0:"#ffffff",buttonPrimary500:"#7b79ff",buttonPrimary600:"#4945ff",danger100:"#181826",danger200:"#4a4a6a",danger500:"#ee5e52",danger600:"#ee5e52",danger700:"#ee5e52",neutral0:"#212134",neutral100:"#181826",neutral1000:"#ffffff",neutral150:"#32324d",neutral200:"#4a4a6a",neutral300:"#666687",neutral400:"#a5a5ba",neutral500:"#c0c0cf",neutral600:"#a5a5ba",neutral700:"#eaeaef",neutral800:"#ffffff",neutral900:"#ffffff",primary100:"#181826",primary200:"#4a4a6a",primary500:"#4945ff",primary600:"#7b79ff",primary700:"#7b79ff",secondary100:"#181826",secondary200:"#4a4a6a",secondary500:"#66b7f1",secondary600:"#66b7f1",secondary700:"#b8e1ff",success100:"#181826",success200:"#4a4a6a",success500:"#5cb176",success600:"#5cb176",success700:"#c6f0c2",warning100:"#181826",warning200:"#4a4a6a",warning500:"#f29d41",warning600:"#f29d41",warning700:"#fae7b9"}},f={shadow:{filterShadow:"1px 1px 10px rgba(3, 3, 5, 0.35)",focus:"inset 2px 0px 0px rgb(39, 31, 224), inset 0px 2px 0px rgb(39, 31, 224), inset -2px 0px 0px rgb(39, 31, 224), inset 0px -2px 0px rgb(39, 31, 224)",focusShadow:"0px 0px 6px rgba(76, 191, 255, 0.75)",popupShadow:"1px 1px 10px rgba(3, 3, 5, 0.35)",tableShadow:"1px 1px 10px rgba(3, 3, 5, 0.2)"}};var m=n(55189);const u={colors:a.color,shadows:f.shadow,...m.x}},98:(h,y,n)=>{"use strict";n.d(y,{Z:()=>m});var a=n(85893);const f=u=>(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...u,children:(0,a.jsx)("path",{fill:"#212134",d:"M0 10.7c0-.11.09-.2.2-.2h18.06l-8.239-8.239a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L23.86 11.86a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L10.02 22.02a.2.2 0 0 1 0-.282L18.26 13.5H.2a.2.2 0 0 1-.2-.2v-2.6Z"})}),m=f}}]);