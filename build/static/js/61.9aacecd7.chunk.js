(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[61],{677:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var c=i(192);var a=i(142);function s(e){return function(e){if(Array.isArray(e))return Object(c.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},678:function(e,t,i){"use strict";i.d(t,"a",(function(){return j}));var c=i(2),a=i(5),s=i(7),r=i(0),n=i(6),l=i.n(n),o=i(50),d=i(71);function m(e){var t=e.className,i=e.direction,s=e.index,n=e.marginDirection,l=e.children,o=e.split,d=e.wrap,m=r.useContext(j),p=m.horizontalSize,u=m.verticalSize,b=m.latestIndex,h={};return m.supportFlexGap||("vertical"===i?s<b&&(h={marginBottom:p/(o?2:1)}):h=Object(c.a)(Object(c.a)({},s<b&&Object(a.a)({},n,p/(o?2:1))),d&&{paddingBottom:u})),null===l||void 0===l?null:r.createElement(r.Fragment,null,r.createElement("div",{className:t,style:h},l),s<b&&o&&r.createElement("span",{className:"".concat(t,"-split"),style:h},o))}var p=i(225),u=function(e,t){var i={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(i[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(c=Object.getOwnPropertySymbols(e);a<c.length;a++)t.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(e,c[a])&&(i[c[a]]=e[c[a]])}return i},j=r.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),b={small:8,middle:16,large:24};t.b=function(e){var t,i=r.useContext(d.b),n=i.getPrefixCls,h=i.space,x=i.direction,O=e.size,v=void 0===O?(null===h||void 0===h?void 0:h.size)||"small":O,f=e.align,g=e.className,y=e.children,N=e.direction,w=void 0===N?"horizontal":N,C=e.prefixCls,k=e.split,S=e.style,D=e.wrap,z=void 0!==D&&D,A=u(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),E=Object(p.a)(),I=r.useMemo((function(){return(Array.isArray(v)?v:[v,v]).map((function(e){return function(e){return"string"===typeof e?b[e]:e||0}(e)}))}),[v]),L=Object(s.a)(I,2),B=L[0],F=L[1],P=Object(o.a)(y,{keepEmpty:!0}),W=void 0===f&&"horizontal"===w?"center":f,R=n("space",C),G=l()(R,"".concat(R,"-").concat(w),(t={},Object(a.a)(t,"".concat(R,"-rtl"),"rtl"===x),Object(a.a)(t,"".concat(R,"-align-").concat(W),W),t),g),M="".concat(R,"-item"),Q="rtl"===x?"marginLeft":"marginRight",T=0,q=P.map((function(e,t){return null!==e&&void 0!==e&&(T=t),r.createElement(m,{className:M,key:"".concat(M,"-").concat(t),direction:w,index:t,marginDirection:Q,split:k,wrap:z},e)})),J=r.useMemo((function(){return{horizontalSize:B,verticalSize:F,latestIndex:T,supportFlexGap:E}}),[B,F,T,E]);if(0===P.length)return null;var U={};return z&&(U.flexWrap="wrap",E||(U.marginBottom=-F)),E&&(U.columnGap=B,U.rowGap=F),r.createElement("div",Object(c.a)({className:G,style:Object(c.a)(Object(c.a)({},U),S)},A),r.createElement(j.Provider,{value:J},q))}},681:function(e,t,i){"use strict";var c=i(2),a=i(5),s=i(0),r=i(6),n=i.n(r),l=i(71),o=function(e,t){var i={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(i[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(c=Object.getOwnPropertySymbols(e);a<c.length;a++)t.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(e,c[a])&&(i[c[a]]=e[c[a]])}return i};t.a=function(e){return s.createElement(l.a,null,(function(t){var i,r=t.getPrefixCls,l=t.direction,d=e.prefixCls,m=e.type,p=void 0===m?"horizontal":m,u=e.orientation,j=void 0===u?"center":u,b=e.className,h=e.children,x=e.dashed,O=e.plain,v=o(e,["prefixCls","type","orientation","className","children","dashed","plain"]),f=r("divider",d),g=j.length>0?"-".concat(j):j,y=!!h,N=n()(f,"".concat(f,"-").concat(p),(i={},Object(a.a)(i,"".concat(f,"-with-text"),y),Object(a.a)(i,"".concat(f,"-with-text").concat(g),y),Object(a.a)(i,"".concat(f,"-dashed"),!!x),Object(a.a)(i,"".concat(f,"-plain"),!!O),Object(a.a)(i,"".concat(f,"-rtl"),"rtl"===l),i),b);return s.createElement("div",Object(c.a)({className:N},v,{role:"separator"}),h&&s.createElement("span",{className:"".concat(f,"-inner-text")},h))}))}},908:function(e,t,i){"use strict";i.r(t);var c=i(15),a=i(677),s=i(86),r=i(681),n=i(542),l=i(678),o=i(0),d=i(149),m=i(55),p=i(1),u={files:{listStyle:"none",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"13px",border:"1px solid lightblue",padding:"10px",borderRadius:"9px",background:"#0093ff0a"},uploadFile:{position:"absolute",width:"100%",height:"100%",opacity:0},".uploadFile::-webkit-file-upload-button":{visibility:"hidden"},".uploadFile::before":{content:"'Drag & Drop'",display:"inline-block",padding:"10px",border:"1px solid #ccc",borderRadius:"4px",cursor:"pointer"},".uploadFile:hover::before":{backgroundColor:"#ccc"}},j=[{name:"file.pdf",timeStamp:"Uploaded 10 days ago"},{name:"file2.pdf",timeStamp:"Uploaded 10 days ago"}];t.default=function(){var e=Object(o.useState)("MCQ"),t=Object(s.a)(e,2),i=t[0],b=(t[1],Object(o.useState)([{question:"1. What is the leading cause of construction workh5lace fatalities?",options:["Option A","Option B","Option C","Option D"],value:"Option A"},{question:"1. What is the leading cause of construction workh5lace fatalities?",options:["Option A","Option B","Option C","Option D"],value:"Option B"}])),h=Object(s.a)(b,2),x=h[0],O=h[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"border rounded p-3 mb-4 bg-white",children:Object(p.jsx)("div",{style:{background:"#fafafb"},className:"mb-4 rounded d-flex align-items-start w-100 p-3 justify-content-between",children:Object(p.jsxs)("div",{style:{gap:"10px"},className:"d-flex align-items-start justify-content-between",children:[" ",Object(p.jsx)("div",{children:Object(p.jsx)("div",{children:Object(p.jsx)("img",{src:"/img/Avatar.png"})})}),Object(p.jsx)("div",{children:Object(p.jsxs)("div",{children:[Object(p.jsx)("h5",{className:"m-0",children:"Student"}),Object(p.jsxs)("h5",{className:"m-0 text-info",children:["Jane Cooper ",Object(p.jsx)("img",{src:"/img/female.png"})," "]})]})}),Object(p.jsx)(r.a,{style:{height:"60px"},type:"vertical"}),Object(p.jsx)("div",{children:Object(p.jsxs)("div",{style:{width:"220px"},className:"d-flex justify-content-center align-items-start",children:[Object(p.jsx)("img",{className:"mt-1",height:30,width:30,src:"/img/avatar3.png",alt:"img"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h5",{className:"m-0 ml-2",children:"Course"}),Object(p.jsx)("p",{className:"m-0 ml-2",children:"Workplace Safety and Health in Construction Sites"})]})]})}),Object(p.jsx)(r.a,{style:{height:"60px"},type:"vertical"}),Object(p.jsx)("div",{children:Object(p.jsxs)("div",{children:[Object(p.jsx)("h5",{className:"m-0",children:"Batch ID"}),Object(p.jsx)("p",{style:{color:"black"},className:"m-0 text-black",children:"#WS-B1"})]})}),Object(p.jsx)(r.a,{style:{height:"60px"},type:"vertical"}),Object(p.jsx)("div",{children:Object(p.jsxs)("div",{children:[Object(p.jsx)("h5",{className:"m-0",children:"Class ID"}),Object(p.jsx)("p",{style:{color:"black"},className:"m-0 text-black",children:"#W001"})]})}),Object(p.jsx)(r.a,{style:{height:"60px"},type:"vertical"}),Object(p.jsx)("div",{children:Object(p.jsxs)("div",{children:[Object(p.jsx)("h5",{className:"m-0",children:"Subject"}),Object(p.jsx)("p",{style:{color:"black"},className:"m-0 text-black",children:"Workplace Safety"})]})}),Object(p.jsx)(r.a,{style:{height:"60px"},type:"vertical"}),Object(p.jsx)("div",{children:Object(p.jsxs)("div",{children:[Object(p.jsx)("h5",{className:"m-0",children:"Assignment"}),Object(p.jsx)("p",{style:{color:"black"},className:"m-0 text-black",children:"Assignment 1"})]})}),Object(p.jsx)(r.a,{style:{height:"60px"},type:"vertical"}),Object(p.jsx)("div",{children:Object(p.jsxs)("div",{children:[Object(p.jsx)("h5",{className:"m-0",children:"Lesson Name"}),Object(p.jsx)("p",{style:{color:"black"},className:"m-0 text-black",children:"Workplace Safety Introduction"})]})}),Object(p.jsx)(r.a,{style:{height:"60px"},type:"vertical"}),Object(p.jsx)("div",{children:Object(p.jsxs)("div",{children:[Object(p.jsx)("h5",{className:"m-0",children:"Type"}),Object(p.jsx)("p",{style:{color:"black"},className:"m-0 text-black",children:"MCQ"})]})})]})})}),"MCQ"===i&&x.map((function(e,t){return Object(p.jsxs)("div",{className:"border rounded mb-4 bg-white",children:[Object(p.jsxs)("div",{className:"p-3",style:{background:"#add8e636",borderTopLeftRadius:"0.625rem",borderTopRightRadius:"0.625rem"},children:[Object(p.jsx)("h4",{style:{color:"#6292FC"},children:"Question 1/25"}),Object(p.jsx)("h5",{style:{margin:0},children:"Mark : 1"})]}),Object(p.jsx)("div",{className:"p-3",children:Object(p.jsx)("h5",{children:e.question})}),Object(p.jsx)("div",{className:"px-4 pb-3",children:Object(p.jsx)(n.a.Group,{style:{width:"600px"},onChange:function(e){return function(e,t){var i=Object(a.a)(x);i[e]=Object(c.a)(Object(c.a)({},i[e]),{},{value:t.target.value}),O(i)}(t,e)},value:e.value,children:Object(p.jsx)(l.b,{className:"w-100",direction:"vertical",children:e.options.map((function(t,i){return Object(p.jsx)("div",{className:e.value===t?"correctOpt":"normalOpt",children:Object(p.jsxs)(n.a,{disabled:!0,className:"p-2",value:t,children:[0===i&&Object(p.jsx)("span",{className:"customCircle",children:"A"}),1===i&&Object(p.jsx)("span",{className:"customCircle",children:"B"}),2===i&&Object(p.jsx)("span",{className:"customCircle",children:"C"}),3===i&&Object(p.jsx)("span",{className:"customCircle",children:"D"}),Object(p.jsxs)("h5",{children:[t,e.value===t&&Object(p.jsx)("span",{className:"tick",children:Object(p.jsx)(d.a,{style:{color:"#048B4A"}})})]})]})})}))})})})]})})),"Descriptive"===i&&Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"bg-white border rounded p-3",children:[Object(p.jsx)("h5",{className:"text-info",children:"Submission Details"}),Object(p.jsx)("div",{children:j.length>0&&Object(p.jsx)("ul",{className:"p-0",style:{width:"40%"},children:j.map((function(e,t){return Object(p.jsxs)("li",{className:"my-3",style:u.files,children:[" ",Object(p.jsxs)("div",{className:"d-flex align-items-start",children:[Object(p.jsx)(m.ib,{})," ",Object(p.jsxs)("span",{className:"ml-2",children:[e.name,Object(p.jsx)("p",{className:"m-0",children:e.timeStamp})," "]})]})]},e.name)}))})})]})}),"Reading"===i&&Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"bg-white border rounded p-3",children:[Object(p.jsx)("h5",{className:"text-info",children:"Submission Details"}),Object(p.jsx)("div",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus."})]})})]})}}}]);
//# sourceMappingURL=61.9aacecd7.chunk.js.map