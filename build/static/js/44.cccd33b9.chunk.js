(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[44],{572:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n(72),i=function(e){if(Object(c.a)()&&window.document.documentElement){var t=Array.isArray(e)?e:[e],n=window.document.documentElement;return t.some((function(e){return e in n.style}))}return!1};function s(e,t){return Array.isArray(e)||void 0===t?i(e):function(e,t){if(!i(e))return!1;var n=document.createElement("div"),c=n.style[e];return n.style[e]=t,n.style[e]!==c}(e,t)}},578:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return a}));var c,i=n(72),s=(n(572),function(){return Object(i.a)()&&window.document.documentElement}),a=function(){if(!s())return!1;if(void 0!==c)return c;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),c=1===e.scrollHeight,document.body.removeChild(e),c}},583:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n(188);var i=n(138);function s(e){return function(e){if(Array.isArray(e))return Object(c.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(i.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},586:function(e,t,n){"use strict";var c=n(7),i=n(0),s=n(578);t.a=function(){var e=i.useState(!1),t=Object(c.a)(e,2),n=t[0],a=t[1];return i.useEffect((function(){a(Object(s.b)())}),[]),n}},624:function(e,t,n){},886:function(e,t,n){"use strict";n.r(t);var c=n(583),i=n(82),s=n(0),a=n(915),l=n(628),o=n(544),r=n(169),d=n(556),j=n(109),b=n(696),m=n(227),h=n(866),u=(n(624),n(64)),O=n(1);t.default=function(){var e=a.a.useForm(),t=Object(i.a)(e,1)[0],n=l.a.TabPane,p=o.a.TextArea,x=Object(s.useState)(""),f=Object(i.a)(x,2),g=f[0],w=f[1],v=Object(s.useState)(""),y=Object(i.a)(v,2),C=y[0],N=y[1],A=Object(s.useState)(!1),S=Object(i.a)(A,2),F=S[0],D=S[1],B=Object(s.useState)("MCQ_Assignment"),I=Object(i.a)(B,2),E=I[0],M=I[1],T=Object(s.useState)("1"),k=Object(i.a)(T,2),z=k[0],Q=k[1],H=Object(s.useState)([]),L=Object(i.a)(H,2),_=L[0],V=L[1],R=Object(s.useState)([{Question:"",OptionA:"",OptionB:"",OptionC:"",OptionD:"",OptionSwitchA:"",OptionSwitchB:"",OptionSwitchC:"",OptionSwitchD:""}]),P=Object(i.a)(R,2),q=P[0],J=P[1],Z={files:{listStyle:"none",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"13px",border:"1px solid lightblue",padding:"10px",borderRadius:"9px",background:"#0093ff0a"},uploadFile:{position:"absolute",width:"100%",height:"100%",opacity:0},".uploadFile::-webkit-file-upload-button":{visibility:"hidden"},".uploadFile::before":{content:"'Drag & Drop'",display:"inline-block",padding:"10px",border:"1px solid #ccc",borderRadius:"4px",cursor:"pointer"},".uploadFile:hover::before":{backgroundColor:"#ccc"}};var G=function(e,t,n){var i=Object(c.a)(q);"Question"==e?i[t].Question=n:"OptionA"==e?i[t].OptionA=n:"OptionSwitchA"==e?i[t].OptionSwitchA=n:"OptionSwitchB"==e?i[t].OptionSwitchB=n:"OptionSwitchC"==e?i[t].OptionSwitchC=n:"OptionSwitchD"==e?i[t].OptionSwitchD=n:"OptionB"==e?i[t].OptionB=n:"OptionC"==e?i[t].OptionC=n:"OptionD"==e&&(i[t].OptionD=n),J(i),console.log(i)};return Object(O.jsxs)("div",{children:[Object(O.jsxs)(a.a,{layout:"vertical",onFinish:function(e){console.log(e)},form:t,name:"control-hooks",children:[Object(O.jsxs)(l.a,{activeKey:z,onTabClick:function(e){Q(e)},children:[Object(O.jsx)(n,{tab:Object(O.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(O.jsx)(u.m,{className:"mr-2 "}),Object(O.jsx)("span",{className:"ml-2",children:"Basic Details"})]}),children:Object(O.jsx)("div",{className:"border rounded p-3 bg-white",children:Object(O.jsxs)("div",{style:{gap:"60px"},className:"d-flex ",children:[Object(O.jsxs)("div",{style:{width:"45%"},children:[Object(O.jsx)(a.a.Item,{name:"id",label:"Assignment Id",children:Object(O.jsx)("h4",{children:"25"})}),Object(O.jsx)(a.a.Item,{name:"period",label:"Assignment Details",children:Object(O.jsx)(p,{rows:4,placeholder:"Type Here ...",value:g,onChange:function(e){return w(e.target.value)}})})]}),Object(O.jsx)("div",{style:{width:"45%"},children:Object(O.jsx)(a.a.Item,{name:"name",label:"Assignment Name",children:Object(O.jsx)(o.a,{placeholder:"Assignment Name"})})})]})})},"1"),Object(O.jsxs)(n,{tab:Object(O.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(O.jsx)(u.g,{className:"mr-2 "}),Object(O.jsx)("span",{className:"ml-2",children:"Assignment Questions"})]}),children:[Object(O.jsx)("div",{className:"border rounded p-3 mt-4 bg-white",children:Object(O.jsx)("div",{className:"my-3 w-50",children:Object(O.jsx)(a.a.Item,{className:"w-75",name:"assignment_type",label:"Assignment Type",children:Object(O.jsx)(r.a,{defaultValue:"MCQ_Assignment",style:{width:"100%"},onChange:function(e){M(e),console.log("selected ".concat(e))},options:[{value:"MCQ_Assignment",label:"MCQ Assignment"},{value:"Readding_Assignment",label:"Readding Assignment"}]})})})}),"MCQ_Assignment"!==E?Object(O.jsxs)(O.Fragment,{children:[" ",Object(O.jsxs)("div",{className:"border rounded p-3 mt-4 bg-white",children:[Object(O.jsx)("div",{className:"my-3 w-50",children:Object(O.jsx)(a.a.Item,{className:"w-75",name:"assignment_title",label:"Assignment Title",children:Object(O.jsx)(o.a,{placeholder:"Type here"})})}),Object(O.jsx)("div",{className:"my-3 w-50",children:Object(O.jsx)(a.a.Item,{className:"w-75",name:"assessment_details",label:"Assessment Details",children:Object(O.jsx)(p,{rows:4,placeholder:"Type Here ...",value:C,onChange:function(e){return N(e.target.value)}})})})]}),Object(O.jsxs)("div",{className:"border rounded p-3 mt-4 bg-white",children:[Object(O.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center position-relative uploaddoc",children:[Object(O.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",fill:"none",viewBox:"0 0 64 64",children:[Object(O.jsx)("path",{fill:"#0E7CEB",d:"M18.57 15.51l7.86 7a2 2 0 001.33.51H56v34.9A2.93 2.93 0 0153.26 61H5.74A2.93 2.93 0 013 57.92V18a2.85 2.85 0 012.68-3h11.56a2 2 0 011.33.51z"}),Object(O.jsx)("path",{fill:"#D7E6EF",d:"M49 57H7V3h42v54z"}),Object(O.jsx)("path",{fill:"#0E7CEB",d:"M45 23h16v-6a2 2 0 00-2-2h-6l-8 8z"}),Object(O.jsx)("path",{fill:"#F7FCFF",d:"M14 9h42v14H14V9z"}),Object(O.jsx)("path",{fill:"#0E7CEB",d:"M25.69 15.51l7.42 7a1.8 1.8 0 001.25.51H61v34.9A2.87 2.87 0 0158.41 61H13.59A2.87 2.87 0 0111 57.92V18a2.79 2.79 0 012.53-3h10.9c.47 0 .922.184 1.26.51z"}),Object(O.jsx)("path",{fill:"#F7FCFF",d:"M36 55c7.18 0 13-5.82 13-13s-5.82-13-13-13-13 5.82-13 13 5.82 13 13 13z"}),Object(O.jsx)("path",{fill:"#D7E6EF",d:"M52 13H32a1 1 0 000 2h20a1 1 0 000-2zm0 4H37a1 1 0 000 2h15a1 1 0 000-2z"}),Object(O.jsx)("path",{fill:"#44394A",d:"M36.5 49.28l6.72-6.72a5.501 5.501 0 00-7.78-7.78l-8.84 8.84a1.002 1.002 0 000 1.42A1 1 0 0028 45l8.84-8.84a3.5 3.5 0 114.95 4.95l-6.71 6.71a1.998 1.998 0 01-3.38-.571A2 2 0 0132.26 45L39 38.32a.5.5 0 01.71 0 .48.48 0 010 .71l-6 6a1 1 0 101.42 1.41l6-6a2.503 2.503 0 00-3.54-3.54l-6.72 6.72a4 4 0 000 5.66 4.003 4.003 0 005.66 0h-.03z"})]}),Object(O.jsx)("h5",{className:"mb-0 mt-2",children:"Drag & Drop Files Here"}),Object(O.jsx)("h5",{className:"mb-0",children:"Or"}),Object(O.jsx)("h5",{className:"mb-0",style:{color:"#4096ff"},children:"Choosen File"}),Object(O.jsx)("input",{style:Z.uploadFile,className:"uploadFile",type:"file",multiple:!0,onChange:function(e){for(var t=e.target.files,n=[],i=0;i<t.length;i++)n.push(t[i]);V([].concat(Object(c.a)(_),[n[0]]))}})]}),Object(O.jsx)("div",{className:"mt-4",children:_.length>0&&Object(O.jsx)("ul",{className:"p-0",style:{width:"40%"},children:_.map((function(e,t){return Object(O.jsxs)("li",{className:"my-3",style:Z.files,children:[" ",Object(O.jsxs)("div",{className:"d-flex align-items-center",children:[Object(O.jsx)(u.bb,{})," ",Object(O.jsxs)("span",{className:"ml-2",children:[e.name," "]}),"  "]}),Object(O.jsxs)("span",{style:{cursor:"pointer"},onClick:function(){return function(e){var t=_.filter((function(t,n){return n!==e}));V(t)}(t)},children:[" ",Object(O.jsx)(m.a,{})," "]})]},e.name)}))})})]})]}):Object(O.jsxs)(O.Fragment,{children:[q.map((function(e,t){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"border rounded p-3 mt-4 bg-white",children:[Object(O.jsx)("div",{className:"my-3 w-50",children:Object(O.jsx)(a.a.Item,{className:"w-75",name:"Question".concat(t+1),label:"Question ".concat(t+1),children:Object(O.jsx)(o.a,{placeholder:"Type here",onChange:function(e){return G("Question",t,e.target.value)}})})}),Object(O.jsxs)("div",{className:"d-flex align-items-center justify-content-between my-3 w-50",children:[Object(O.jsx)(a.a.Item,{className:"w-75",name:"OptionA".concat(t+1),label:"Option A",children:Object(O.jsx)(o.a,{className:"w-100",placeholder:"Type here",onChange:function(e){return G("OptionA",t,e.target.value)}})}),Object(O.jsx)(a.a.Item,{children:Object(O.jsx)(d.a,{size:"small",onChange:function(e){return G("OptionSwitchA",t,e)}})})]}),Object(O.jsxs)("div",{className:"d-flex align-items-center justify-content-between my-3 w-50",children:[Object(O.jsx)(a.a.Item,{className:"w-75",name:"OptionB".concat(t+1),label:"Option B",children:Object(O.jsx)(o.a,{className:"w-100",placeholder:"Type here",onChange:function(e){return G("OptionB",t,e.target.value)}})}),Object(O.jsx)(a.a.Item,{children:Object(O.jsx)(d.a,{size:"small",onChange:function(e){return G("OptionSwitchB",t,e)}})})]}),Object(O.jsxs)("div",{className:"d-flex align-items-center justify-content-between my-3 w-50",children:[Object(O.jsx)(a.a.Item,{className:"w-75",name:"OptionC".concat(t+1),label:"Option C",children:Object(O.jsx)(o.a,{className:"w-100",placeholder:"Type here",onChange:function(e){return G("OptionC",t,e.target.value)}})}),Object(O.jsx)(a.a.Item,{children:Object(O.jsx)(d.a,{size:"small",onChange:function(e){return G("OptionSwitchC",t,e)}})})]}),Object(O.jsxs)("div",{className:"d-flex align-items-center justify-content-between my-3 w-50",children:[Object(O.jsx)(a.a.Item,{className:"w-75",name:"OptionD".concat(t+1),label:"Option D",children:Object(O.jsx)(o.a,{className:"w-100",placeholder:"Type here",onChange:function(e){return G("OptionD",t,e.target.value)}})}),Object(O.jsx)(a.a.Item,{children:Object(O.jsx)(d.a,{size:"small",onChange:function(e){return G("OptionSwitchD",t,e)}})})]})]})})})),Object(O.jsx)("div",{className:"border rounded p-3 mt-4 bg-white d-flex justify-content-center custaddmoreque",onClick:function(){J([].concat(Object(c.a)(q),[{Question:"",OptionA:"",OptionB:"",OptionC:"",OptionD:"",OptionSwitchA:"",OptionSwitchB:"",OptionSwitchC:"",OptionSwitchD:""}])),console.log(q)},children:Object(O.jsxs)("h2",{className:"custaddmoreque",children:[Object(O.jsx)(h.a,{})," Add More Questions"]})})]})]},"2")]}),Object(O.jsx)(a.a.Item,{children:Object(O.jsxs)("div",{style:{gap:"10px"},className:"mt-5 d-flex justify-content-end",children:[z>1?Object(O.jsx)(j.a,{className:"px-4 font-weight-semibold",htmlType:"button",onClick:function(){if(z>1&&z<=2){var e=Number(z)-1;Q(e.toString())}},children:"Back"}):"",Object(O.jsx)(j.a,{className:"px-4 font-weight-semibold",htmlType:"button",children:"Clear All"}),z<2?Object(O.jsx)(j.a,{className:"px-4 font-weight-semibold text-white bg-info",onClick:function(){if(z>=0&&z<=1){var e=Number(z)+1;Q(e.toString())}},children:"Next"}):"",Object(O.jsx)(j.a,{className:"px-4 font-weight-semibold text-white bg-info",htmlType:"submit",children:"Save"})]})})]}),Object(O.jsx)(b.a,{width:400,footer:null,visible:F,onOk:function(){setTimeout((function(){D(!1)}),1e4)},onCancel:function(){D(!1)},children:Object(O.jsxs)("div",{className:"d-flex my-3 align-items-center flex-column justify-content-center",children:[Object(O.jsx)("svg",{width:"65",height:"64",viewBox:"0 0 65 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(O.jsx)("path",{d:"M32.5 0C37.4636 0 42.1609 1.13082 46.358 3.14781C44.64 4.50697 43.0471 5.81176 41.5629 7.06762C38.7358 6.04009 35.6859 5.48012 32.5054 5.48012C25.1823 5.48012 18.5496 8.44852 13.7545 13.2491C8.95396 18.0496 5.98556 24.6769 5.98556 32C5.98556 39.3231 8.95396 45.9504 13.7545 50.7509C18.555 55.5515 25.1823 58.5199 32.5054 58.5199C39.8286 58.5199 46.4613 55.5515 51.2564 50.7509C56.0569 45.9504 59.0253 39.3231 59.0253 32C59.0253 30.2603 58.8568 28.5532 58.536 26.9059C59.9115 25.1118 61.3196 23.3231 62.7603 21.5508C63.8911 24.8236 64.5054 28.3411 64.5054 32C64.5054 40.8345 60.9227 48.8372 55.1327 54.6273C49.3427 60.4173 41.34 64 32.5054 64C23.6709 64 15.6682 60.4173 9.87819 54.6273C4.08274 48.8372 0.5 40.8345 0.5 32C0.5 23.1655 4.08274 15.1628 9.87275 9.37275C15.6628 3.58274 23.6655 0 32.5 0ZM17.5928 26.7428L25.3998 26.6395L25.9815 26.7917C27.5581 27.6996 29.0423 28.738 30.4286 29.9123C31.429 30.7604 32.3858 31.6847 33.2938 32.685C36.0936 28.178 39.0783 24.0408 42.2316 20.2351C45.6838 16.0652 49.3481 12.2813 53.1973 8.82909L53.9584 8.53551H62.4776L60.7596 10.4438C55.4806 16.3099 50.691 22.3717 46.3634 28.6239C42.0359 34.8814 38.165 41.3401 34.7236 47.9891L33.6526 50.055L32.6685 47.9511C30.8527 44.053 28.6781 40.4757 26.0848 37.279C23.4915 34.0822 20.4742 31.2443 16.9567 28.8304L17.5928 26.7428Z",fill:"#00AB6F"})}),Object(O.jsx)("h3",{className:"font-weight-bold mt-4",children:"MembershipPlan Created!"}),Object(O.jsx)("span",{className:"text-center font-size-sm w-75 font-weight-semibold",children:"Membership Plan 1 crested successfully"})]})})]})}}}]);
//# sourceMappingURL=44.cccd33b9.chunk.js.map