(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[52],{578:function(e,t,n){"use strict";var c=n(7),a=n(0),i=n(590);t.a=function(){var e=a.useState(!1),t=Object(c.a)(e,2),n=t[0],r=t[1];return a.useEffect((function(){r(Object(i.b)())}),[]),n}},587:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var c=n(71),a=function(e){if(Object(c.a)()&&window.document.documentElement){var t=Array.isArray(e)?e:[e],n=window.document.documentElement;return t.some((function(e){return e in n.style}))}return!1};function i(e,t){return Array.isArray(e)||void 0===t?a(e):function(e,t){if(!a(e))return!1;var n=document.createElement("div"),c=n.style[e];return n.style[e]=t,n.style[e]!==c}(e,t)}},590:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}));var c,a=n(71),i=(n(587),function(){return Object(a.a)()&&window.document.documentElement}),r=function(){if(!i())return!1;if(void 0!==c)return c;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),c=1===e.scrollHeight,document.body.removeChild(e),c}},674:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var c=n(185);var a=n(140);function i(e){return function(e){if(Array.isArray(e))return Object(c.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},675:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c=n(3),a=n(5),i=n(7),r=n(0),s=n(6),l=n.n(s),o=n(47),d=n(79);function u(e){var t=e.className,n=e.direction,i=e.index,s=e.marginDirection,l=e.children,o=e.split,d=e.wrap,u=r.useContext(b),j=u.horizontalSize,m=u.verticalSize,p=u.latestIndex,h={};return u.supportFlexGap||("vertical"===n?i<p&&(h={marginBottom:j/(o?2:1)}):h=Object(c.a)(Object(c.a)({},i<p&&Object(a.a)({},s,j/(o?2:1))),d&&{paddingBottom:m})),null===l||void 0===l?null:r.createElement(r.Fragment,null,r.createElement("div",{className:t,style:h},l),i<p&&o&&r.createElement("span",{className:"".concat(t,"-split"),style:h},o))}var j=n(578),m=function(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(c=Object.getOwnPropertySymbols(e);a<c.length;a++)t.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(e,c[a])&&(n[c[a]]=e[c[a]])}return n},b=r.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),p={small:8,middle:16,large:24};t.b=function(e){var t,n=r.useContext(d.b),s=n.getPrefixCls,h=n.space,O=n.direction,x=e.size,f=void 0===x?(null===h||void 0===h?void 0:h.size)||"small":x,v=e.align,y=e.className,g=e.children,N=e.direction,w=void 0===N?"horizontal":N,C=e.prefixCls,E=e.split,S=e.style,k=e.wrap,A=void 0!==k&&k,z=m(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),B=Object(j.a)(),P=r.useMemo((function(){return(Array.isArray(f)?f:[f,f]).map((function(e){return function(e){return"string"===typeof e?p[e]:e||0}(e)}))}),[f]),D=Object(i.a)(P,2),I=D[0],G=D[1],M=Object(o.a)(g,{keepEmpty:!0}),F=void 0===v&&"horizontal"===w?"center":v,R=s("space",C),T=l()(R,"".concat(R,"-").concat(w),(t={},Object(a.a)(t,"".concat(R,"-rtl"),"rtl"===O),Object(a.a)(t,"".concat(R,"-align-").concat(F),F),t),y),W="".concat(R,"-item"),q="rtl"===O?"marginLeft":"marginRight",J=0,Q=M.map((function(e,t){return null!==e&&void 0!==e&&(J=t),r.createElement(u,{className:W,key:"".concat(W,"-").concat(t),direction:w,index:t,marginDirection:q,split:E,wrap:A},e)})),H=r.useMemo((function(){return{horizontalSize:I,verticalSize:G,latestIndex:J,supportFlexGap:B}}),[I,G,J,B]);if(0===M.length)return null;var L={};return A&&(L.flexWrap="wrap",B||(L.marginBottom=-G)),B&&(L.columnGap=I,L.rowGap=G),r.createElement("div",Object(c.a)({className:T,style:Object(c.a)(Object(c.a)({},L),S)},z),r.createElement(b.Provider,{value:H},Q))}},679:function(e,t,n){"use strict";var c=n(3),a=n(5),i=n(0),r=n(6),s=n.n(r),l=n(79),o=function(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(c=Object.getOwnPropertySymbols(e);a<c.length;a++)t.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(e,c[a])&&(n[c[a]]=e[c[a]])}return n};t.a=function(e){return i.createElement(l.a,null,(function(t){var n,r=t.getPrefixCls,l=t.direction,d=e.prefixCls,u=e.type,j=void 0===u?"horizontal":u,m=e.orientation,b=void 0===m?"center":m,p=e.className,h=e.children,O=e.dashed,x=e.plain,f=o(e,["prefixCls","type","orientation","className","children","dashed","plain"]),v=r("divider",d),y=b.length>0?"-".concat(b):b,g=!!h,N=s()(v,"".concat(v,"-").concat(j),(n={},Object(a.a)(n,"".concat(v,"-with-text"),g),Object(a.a)(n,"".concat(v,"-with-text").concat(y),g),Object(a.a)(n,"".concat(v,"-dashed"),!!O),Object(a.a)(n,"".concat(v,"-plain"),!!x),Object(a.a)(n,"".concat(v,"-rtl"),"rtl"===l),n),p);return i.createElement("div",Object(c.a)({className:N},f,{role:"separator"}),h&&i.createElement("span",{className:"".concat(v,"-inner-text")},h))}))}},705:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c="http://18.140.159.50:3333/api"},938:function(e,t,n){"use strict";n.r(t);var c=n(15),a=n(674),i=n(70),r=n(679),s=n(538),l=n(675),o=n(0),d=n(221),u=(n(53),n(705)),j=n(607),m=n.n(j),b=n(1);t.default=function(){var e=Object(o.useState)("MCQ"),t=Object(i.a)(e,2),n=t[0],j=(t[1],Object(o.useState)([{question:"1. What is the leading cause of construction workh5lace fatalities?",options:["Option A","Option B","Option C","Option D"],value:"Option A"},{question:"1. What is the leading cause of construction workh5lace fatalities?",options:["Option A","Option B","Option C","Option D"],value:"Option B"}])),p=Object(i.a)(j,2),h=p[0],O=p[1];Object(o.useEffect)((function(){x()}),[]);var x=function(){m.a.get("".concat(u.a,"/view-submission/16"),{headers:{"Content-Type":"application/json"}}).then((function(e){})).catch((function(e){console.log(e)}))};return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"border rounded p-3 mb-4 bg-white",children:[Object(b.jsx)("div",{children:Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"d-flex align-items-end flex-column",children:Object(b.jsx)("h5",{className:"mb-2 bg-success text-white rounded px-2 py-1",children:"Completed"})})})}),Object(b.jsx)("div",{style:{background:"#fafafb"},className:"mb-4 rounded d-flex align-items-start w-100 p-3 justify-content-between",children:Object(b.jsxs)("div",{style:{gap:"10px"},className:"d-flex align-items-start justify-content-between w-100",children:[Object(b.jsx)("div",{children:Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:"/img/Avatar.png",alt:"..."})})}),Object(b.jsx)("div",{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h5",{className:"m-0",children:"Student"}),Object(b.jsxs)("h5",{className:"m-0 text-info",children:["Jane Cooper ",Object(b.jsx)("img",{src:"/img/female.png",alt:"..."})," "]})]})}),Object(b.jsx)(r.a,{style:{height:"60px"},type:"vertical"}),Object(b.jsx)("div",{children:Object(b.jsxs)("div",{style:{width:"220px"},className:"d-flex justify-content-center align-items-start",children:[Object(b.jsx)("img",{className:"mt-1",height:30,width:30,src:"/img/avatar3.png",alt:"img"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h5",{className:"m-0 ml-2",children:"Course"}),Object(b.jsx)("p",{className:"m-0 ml-2",children:"Workplace Safety and Health in Construction Sites"})]})]})}),Object(b.jsx)(r.a,{style:{height:"60px"},type:"vertical"}),Object(b.jsx)("div",{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h5",{className:"m-0",children:"Batch ID"}),Object(b.jsx)("p",{style:{color:"black"},className:"m-0 text-black",children:"#WS-B1"})]})}),Object(b.jsx)(r.a,{style:{height:"60px"},type:"vertical"}),Object(b.jsx)("div",{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h5",{className:"m-0",children:"Assessment Title"}),Object(b.jsx)("p",{style:{color:"black"},className:"m-0 text-black",children:"Assessment 1"})]})}),Object(b.jsx)(r.a,{style:{height:"60px"},type:"vertical"}),Object(b.jsx)("div",{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h5",{className:"m-0",children:"Submission Date"}),Object(b.jsx)("p",{style:{color:"black"},className:"m-0 text-black",children:"12 May 2023"})]})}),Object(b.jsx)(r.a,{style:{height:"60px"},type:"vertical"}),Object(b.jsx)("div",{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h5",{className:"m-0",children:"Result"}),Object(b.jsx)("p",{style:{color:"black"},className:"m-0 text-black",children:"25/20"})]})})]})})]}),"MCQ"===n&&h.map((function(e,t){return Object(b.jsxs)("div",{className:"border rounded mb-4 bg-white",children:[Object(b.jsxs)("div",{className:"p-3",style:{background:"#add8e636",borderTopLeftRadius:"0.625rem",borderTopRightRadius:"0.625rem"},children:[Object(b.jsx)("h4",{style:{color:"#6292FC"},children:"Question 1/25"}),Object(b.jsx)("h5",{style:{margin:0},children:"Mark : 1"})]}),Object(b.jsx)("div",{className:"p-3",children:Object(b.jsx)("h5",{children:e.question})}),Object(b.jsx)("div",{className:"px-4 pb-3",children:Object(b.jsx)(s.a.Group,{style:{width:"600px"},onChange:function(e){return function(e,t){var n=Object(a.a)(h);n[e]=Object(c.a)(Object(c.a)({},n[e]),{},{value:t.target.value}),O(n)}(t,e)},value:e.value,children:Object(b.jsx)(l.b,{className:"w-100",direction:"vertical",children:e.options.map((function(t,n){return Object(b.jsx)("div",{className:e.value===t?"correctOpt":"normalOpt",children:Object(b.jsxs)(s.a,{disabled:!0,className:"p-2",value:t,children:[0===n&&Object(b.jsx)("span",{className:"customCircle",children:"A"}),1===n&&Object(b.jsx)("span",{className:"customCircle",children:"B"}),2===n&&Object(b.jsx)("span",{className:"customCircle",children:"C"}),3===n&&Object(b.jsx)("span",{className:"customCircle",children:"D"}),Object(b.jsxs)("h5",{children:[t,e.value===t&&Object(b.jsx)("span",{className:"tick",children:Object(b.jsx)(d.a,{style:{color:"#048B4A"}})})]})]})})}))})})})]})}))]})}}}]);
//# sourceMappingURL=52.eb376bd2.chunk.js.map