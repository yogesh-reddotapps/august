(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[70],{609:function(e,t,c){"use strict";var n=c(7),a=c(0),i=c(635);t.a=function(){var e=a.useState(!1),t=Object(n.a)(e,2),c=t[0],s=t[1];return a.useEffect((function(){s(Object(i.b)())}),[]),c}},617:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));var n=c(72),a=function(e){if(Object(n.a)()&&window.document.documentElement){var t=Array.isArray(e)?e:[e],c=window.document.documentElement;return t.some((function(e){return e in c.style}))}return!1};function i(e,t){return Array.isArray(e)||void 0===t?a(e):function(e,t){if(!a(e))return!1;var c=document.createElement("div"),n=c.style[e];return c.style[e]=t,c.style[e]!==n}(e,t)}},635:function(e,t,c){"use strict";c.d(t,"a",(function(){return i})),c.d(t,"b",(function(){return s}));var n,a=c(72),i=(c(617),function(){return Object(a.a)()&&window.document.documentElement}),s=function(){if(!i())return!1;if(void 0!==n)return n;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),n=1===e.scrollHeight,document.body.removeChild(e),n}},710:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));var n=c(188);var a=c(141);function i(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},711:function(e,t,c){"use strict";c.d(t,"a",(function(){return m}));var n=c(3),a=c(5),i=c(7),s=c(0),r=c(6),l=c.n(r),o=c(47),d=c(80);function j(e){var t=e.className,c=e.direction,i=e.index,r=e.marginDirection,l=e.children,o=e.split,d=e.wrap,j=s.useContext(m),b=j.horizontalSize,u=j.verticalSize,p=j.latestIndex,h={};return j.supportFlexGap||("vertical"===c?i<p&&(h={marginBottom:b/(o?2:1)}):h=Object(n.a)(Object(n.a)({},i<p&&Object(a.a)({},r,b/(o?2:1))),d&&{paddingBottom:u})),null===l||void 0===l?null:s.createElement(s.Fragment,null,s.createElement("div",{className:t,style:h},l),i<p&&o&&s.createElement("span",{className:"".concat(t,"-split"),style:h},o))}var b=c(609),u=function(e,t){var c={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(c[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(c[n[a]]=e[n[a]])}return c},m=s.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),p={small:8,middle:16,large:24};t.b=function(e){var t,c=s.useContext(d.b),r=c.getPrefixCls,h=c.space,O=c.direction,x=e.size,f=void 0===x?(null===h||void 0===h?void 0:h.size)||"small":x,v=e.align,y=e.className,g=e.children,N=e.direction,w=void 0===N?"horizontal":N,S=e.prefixCls,k=e.split,C=e.style,E=e.wrap,A=void 0!==E&&E,z=u(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),D=Object(b.a)(),I=s.useMemo((function(){return(Array.isArray(f)?f:[f,f]).map((function(e){return function(e){return"string"===typeof e?p[e]:e||0}(e)}))}),[f]),B=Object(i.a)(I,2),P=B[0],F=B[1],W=Object(o.a)(g,{keepEmpty:!0}),_=void 0===v&&"horizontal"===w?"center":v,G=r("space",S),R=l()(G,"".concat(G,"-").concat(w),(t={},Object(a.a)(t,"".concat(G,"-rtl"),"rtl"===O),Object(a.a)(t,"".concat(G,"-align-").concat(_),_),t),y),q="".concat(G,"-item"),J="rtl"===O?"marginLeft":"marginRight",L=0,M=W.map((function(e,t){return null!==e&&void 0!==e&&(L=t),s.createElement(j,{className:q,key:"".concat(q,"-").concat(t),direction:w,index:t,marginDirection:J,split:k,wrap:A},e)})),T=s.useMemo((function(){return{horizontalSize:P,verticalSize:F,latestIndex:L,supportFlexGap:D}}),[P,F,L,D]);if(0===W.length)return null;var U={};return A&&(U.flexWrap="wrap",D||(U.marginBottom=-F)),D&&(U.columnGap=P,U.rowGap=F),s.createElement("div",Object(n.a)({className:R,style:Object(n.a)(Object(n.a)({},U),C)},z),s.createElement(m.Provider,{value:T},M))}},736:function(e,t,c){"use strict";var n=c(3),a=c(5),i=c(0),s=c(6),r=c.n(s),l=c(80),o=function(e,t){var c={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(c[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(c[n[a]]=e[n[a]])}return c};t.a=function(e){return i.createElement(l.a,null,(function(t){var c,s=t.getPrefixCls,l=t.direction,d=e.prefixCls,j=e.type,b=void 0===j?"horizontal":j,u=e.orientation,m=void 0===u?"center":u,p=e.className,h=e.children,O=e.dashed,x=e.plain,f=o(e,["prefixCls","type","orientation","className","children","dashed","plain"]),v=s("divider",d),y=m.length>0?"-".concat(m):m,g=!!h,N=r()(v,"".concat(v,"-").concat(b),(c={},Object(a.a)(c,"".concat(v,"-with-text"),g),Object(a.a)(c,"".concat(v,"-with-text").concat(y),g),Object(a.a)(c,"".concat(v,"-dashed"),!!O),Object(a.a)(c,"".concat(v,"-plain"),!!x),Object(a.a)(c,"".concat(v,"-rtl"),"rtl"===l),c),p);return i.createElement("div",Object(n.a)({className:N},f,{role:"separator"}),h&&i.createElement("span",{className:"".concat(v,"-inner-text")},h))}))}},948:function(e,t,c){"use strict";c.r(t);var n=c(25),a=c.n(n),i=c(83),s=c(15),r=c(710),l=c(71),o=c(736),d=c(567),j=c(711),b=c(0),u=c(226),m=c(53),p=c(220),h=c.n(p),O=c(221),x=c(1),f={files:{listStyle:"none",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"13px",border:"1px solid lightblue",padding:"10px",borderRadius:"9px",background:"#0093ff0a"},uploadFile:{position:"absolute",width:"100%",height:"100%",opacity:0},".uploadFile::-webkit-file-upload-button":{visibility:"hidden"},".uploadFile::before":{content:"'Drag & Drop'",display:"inline-block",padding:"10px",border:"1px solid #ccc",borderRadius:"4px",cursor:"pointer"},".uploadFile:hover::before":{backgroundColor:"#ccc"}},v=[{name:"file.pdf",timeStamp:"Uploaded 10 days ago"},{name:"file2.pdf",timeStamp:"Uploaded 10 days ago"}];t.default=function(){var e=Object(b.useState)("mcq"),t=Object(l.a)(e,2),c=t[0],n=t[1],p=Object(b.useState)(null),y=Object(l.a)(p,2),g=y[0],N=y[1],w=Object(b.useState)([]),S=Object(l.a)(w,2),k=S[0],C=S[1],E=new URLSearchParams(document.location.search),A=E.get("student_id"),z=E.get("ID"),D=Object(b.useState)([{question:"1. What is the leading cause of construction workh5lace fatalities?",options:["Option A","Option B","Option C","Option D"],value:"Option A"},{question:"1. What is the leading cause of construction workh5lace fatalities?",options:["Option A","Option B","Option C","Option D"],value:"Option B"}]),I=Object(l.a)(D,2),B=I[0],P=I[1],F=function(){var e=Object(i.a)(a.a.mark((function e(t,c){var i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("".concat(O.a,"/view-assignment-submission"),{assignment_id:c,student_id:t});case 2:"mcq"===(i=e.sent).data.data[0].submission_type&&(C(JSON.parse(i.data.data[0].description)),console.log(JSON.parse(i.data.data[0].description))),n(i.data.data[0].submission_type),N(i.data.data[0]);case 6:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}();return Object(b.useEffect)((function(){A&&z&&F(A,z)}),[]),Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"border rounded p-3 mb-4 bg-white",children:[Object(x.jsx)("div",{children:Object(x.jsx)("div",{children:Object(x.jsx)("div",{className:"d-flex align-items-end flex-column",children:Object(x.jsx)("h5",{className:"mb-2 bg-success text-white rounded px-2 py-1",children:"Completed"})})})}),Object(x.jsx)("div",{style:{background:"#fafafb"},className:"mb-4 rounded d-flex align-items-start w-100 p-3 justify-content-between",children:Object(x.jsxs)("div",{style:{gap:"10px"},className:"d-flex align-items-start justify-content-between",children:[" ",Object(x.jsx)("div",{children:Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:"/img/Avatar.png"})})}),Object(x.jsx)("div",{children:Object(x.jsxs)("div",{children:[Object(x.jsx)("h5",{className:"m-0",children:"Student"}),Object(x.jsxs)("h5",{className:"m-0 text-info",children:["Jane Cooper ",Object(x.jsx)("img",{src:"/img/female.png"})," "]})]})}),Object(x.jsx)(o.a,{style:{height:"60px"},type:"vertical"}),Object(x.jsx)("div",{children:Object(x.jsxs)("div",{style:{width:"220px"},className:"d-flex justify-content-center align-items-start",children:[Object(x.jsx)("img",{className:"mt-1",height:30,width:30,src:"/img/avatar3.png",alt:"img"}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h5",{className:"m-0 ml-2",children:"Course"}),Object(x.jsx)("p",{className:"m-0 ml-2",children:"Workplace Safety and Health in Construction Sites"})]})]})}),Object(x.jsx)(o.a,{style:{height:"60px"},type:"vertical"}),Object(x.jsx)("div",{children:Object(x.jsxs)("div",{children:[Object(x.jsx)("h5",{className:"m-0",children:"Batch ID"}),Object(x.jsx)("p",{style:{color:"black"},className:"m-0 text-black",children:"#WS-B1"})]})}),Object(x.jsx)(o.a,{style:{height:"60px"},type:"vertical"}),Object(x.jsx)("div",{children:Object(x.jsxs)("div",{children:[Object(x.jsx)("h5",{className:"m-0",children:"Class ID"}),Object(x.jsx)("p",{style:{color:"black"},className:"m-0 text-black",children:"#W001"})]})}),Object(x.jsx)(o.a,{style:{height:"60px"},type:"vertical"}),Object(x.jsx)("div",{children:Object(x.jsxs)("div",{children:[Object(x.jsx)("h5",{className:"m-0",children:"Subject"}),Object(x.jsx)("p",{style:{color:"black"},className:"m-0 text-black",children:"Workplace Safety"})]})}),Object(x.jsx)(o.a,{style:{height:"60px"},type:"vertical"}),Object(x.jsx)("div",{children:Object(x.jsxs)("div",{children:[Object(x.jsx)("h5",{className:"m-0",children:"Assignment"}),Object(x.jsx)("p",{style:{color:"black"},className:"m-0 text-black",children:"Assignment 1"})]})}),Object(x.jsx)(o.a,{style:{height:"60px"},type:"vertical"}),Object(x.jsx)("div",{children:Object(x.jsxs)("div",{children:[Object(x.jsx)("h5",{className:"m-0",children:"Lesson Name"}),Object(x.jsx)("p",{style:{color:"black"},className:"m-0 text-black",children:"Workplace Safety Introduction"})]})}),Object(x.jsx)(o.a,{style:{height:"60px"},type:"vertical"}),Object(x.jsx)("div",{children:Object(x.jsxs)("div",{children:[Object(x.jsx)("h5",{className:"m-0",children:"Type"}),Object(x.jsx)("p",{style:{color:"black"},className:"m-0 text-black",children:"MCQ"})]})})]})})]}),"mcq"===c&&k.map((function(e,t){return Object(x.jsxs)("div",{className:"border rounded mb-4 bg-white",children:[Object(x.jsxs)("div",{className:"p-3",style:{background:"#add8e636",borderTopLeftRadius:"0.625rem",borderTopRightRadius:"0.625rem"},children:[Object(x.jsx)("h4",{style:{color:"#6292FC"},children:"Question 1/25"}),Object(x.jsx)("h5",{style:{margin:0},children:"Mark : 1"})]}),Object(x.jsx)("div",{className:"p-3",children:Object(x.jsx)("h5",{children:e.title})}),Object(x.jsx)("div",{className:"px-4 pb-3",children:Object(x.jsx)(d.a.Group,{style:{width:"600px"},onChange:function(e){return function(e,t){var c=Object(r.a)(B);c[e]=Object(s.a)(Object(s.a)({},c[e]),{},{value:t.target.value}),P(c)}(t,e)},value:e.choosen_option,children:Object(x.jsx)(j.b,{className:"w-100",direction:"vertical",children:e.options.map((function(t,c){return Object(x.jsx)("div",{className:t===e.correct_option?"correctOpt":"normalOpt",children:Object(x.jsxs)(d.a,{disabled:!0,className:"p-2",value:t,children:[0===c&&Object(x.jsx)("span",{className:"customCircle",children:"A"}),1===c&&Object(x.jsx)("span",{className:"customCircle",children:"B"}),2===c&&Object(x.jsx)("span",{className:"customCircle",children:"C"}),3===c&&Object(x.jsx)("span",{className:"customCircle",children:"D"}),Object(x.jsxs)("h5",{children:[t,t===e.correct_option&&Object(x.jsx)("span",{className:"tick",children:Object(x.jsx)(u.a,{style:{color:"#048B4A"}})})]})]})})}))})})})]})})),"Descriptive"===c&&Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:"bg-white border rounded p-3",children:[Object(x.jsx)("h5",{className:"text-info",children:"Submission Details"}),Object(x.jsx)("div",{children:v.length>0&&Object(x.jsx)("ul",{className:"p-0",style:{width:"40%"},children:v.map((function(e,t){return Object(x.jsxs)("li",{className:"my-3",style:f.files,children:[" ",Object(x.jsxs)("div",{className:"d-flex align-items-start",children:[Object(x.jsx)(m.ib,{})," ",Object(x.jsxs)("span",{className:"ml-2",children:[e.name,Object(x.jsx)("p",{className:"m-0",children:e.timeStamp})," "]})]})]},e.name)}))})})]})}),"txt"===c&&Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:"bg-white border rounded p-3",children:[Object(x.jsx)("h5",{className:"text-info",children:"Submission Details"}),Object(x.jsx)("div",{children:null!==g&&g.description})]})})]})}}}]);
//# sourceMappingURL=70.b0976397.chunk.js.map