(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[22],{710:function(e,t,s){"use strict";s.d(t,"a",(function(){return l}));var a=s(188);var c=s(141);function l(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},959:function(e,t,s){"use strict";s.r(t);var a=s(25),c=s.n(a),l=s(83),n=s(710),i=s(71),r=s(0),o=s(566),j=s(897),d=s(170),h=s(108),b=s(567),u=s(969),x=s(42),m=s(784),p=s.n(m),O=(s(791),s(53)),f=s(220),v=s.n(f),g=s(187),C=s(221),N=s(1),y={uploadFile:{position:"absolute",width:"100%",height:"100%",opacity:0},".uploadFile::-webkit-file-upload-button":{visibility:"hidden"},".uploadFile::before":{content:"'Drag & Drop'",display:"inline-block",padding:"10px",border:"1px solid #ccc",borderRadius:"4px",cursor:"pointer"},".uploadFile:hover::before":{backgroundColor:"#ccc"}};t.default=function(){var e=Object(x.useHistory)(),t=Object(g.useLocation)(),s=Object(r.useState)("0"),a=Object(i.a)(s,2),m=a[0],f=a[1],w=Object(r.useState)(0),F=Object(i.a)(w,2),E=F[0],A=F[1],H=Object(r.useState)(null),z=Object(i.a)(H,2),M=z[0],L=z[1],V=Object(r.useState)(null),S=Object(i.a)(V,2),_=S[0],B=S[1],D=Object(r.useState)(null),k=Object(i.a)(D,2),R=k[0],T=k[1],U=Object(r.useState)(""),Q=Object(i.a)(U,2),I=Q[0],P=Q[1],W=Object(r.useState)(null),J=Object(i.a)(W,2),Z=(J[0],J[1],Object(r.useState)("")),G=Object(i.a)(Z,2),q=G[0],K=G[1],X=Object(r.useState)(1),Y=Object(i.a)(X,2),$=Y[0],ee=Y[1],te=Object(r.useState)([]),se=Object(i.a)(te,2),ae=se[0],ce=se[1],le=Object(r.useState)([]),ne=Object(i.a)(le,2),ie=ne[0],re=ne[1],oe=new URLSearchParams(t.search),je=oe.get("lesson_id"),de=oe.get("course_id"),he=oe.get("subject_id"),be=Object(r.useState)([]),ue=Object(i.a)(be,2),xe=ue[0],me=ue[1],pe=Object(r.useState)(!1),Oe=Object(i.a)(pe,2),fe=Oe[0],ve=Oe[1],ge=Object(r.useState)([{text:""},{text:""},{text:""},{text:""}]),Ce=Object(i.a)(ge,2),Ne=Ce[0],ye=Ce[1],we=function(e){var t=e.target.files;B(t);for(var s=[],a=0;a<t.length;a++){var c=t[a],l=Object(N.jsx)("audio",{className:"customAudio",src:URL.createObjectURL(c),controls:!0,style:{margin:"0 10px 10px 0"}},a);s.push(l)}me(s)},Fe=function(e){var t=e.target.files;L(t);for(var s=[],a=0;a<t.length;a++){var c=t[a],l=Object(N.jsx)("video",{src:URL.createObjectURL(c),controls:!0,style:{maxWidth:"100%",margin:"0 10px 10px 0"}},a);s.push(l)}ce(s)},Ee=function(){var e=Object(l.a)(c.a.mark((function e(t){var s,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(s=new FormData).append("file",t),e.next=5,v.a.post("".concat(C.a,"/upload"),s);case 5:return a=e.sent,console.log("Upload successful!",a.data),e.abrupt("return",a.data.url);case 10:e.prev=10,e.t0=e.catch(0),console.error("Upload failed!",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),Ae=function(){var t=Object(l.a)(c.a.mark((function t(){var s,a,l;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s=new FormData,0==m&&(a=q),1!=m){t.next=7;break}return t.next=5,Ee(M[0]);case 5:a=t.sent,console.log(a);case 7:if(2!=m){t.next=11;break}return t.next=10,Ee(_[0]);case 10:a=t.sent;case 11:return 3==m&&(a={title:R,image:"placeholder",options:Ne,correct_option:1}),s.append("lesson_content",a),s.append("lesson_type",m),s.append("estimated_time",E),s.append("subject_id",he),s.append("course_id",de),s.append("board_id",2),s.append("lesson_name",I),t.next=21,v.a.post("".concat(C.a,"/admin-new-lesson"),s);case 21:l=t.sent,console.log(l),ve(!0),setTimeout((function(){ve(!1),e.goBack()}),1200);case 25:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),He=function(){var e=Object(l.a)(c.a.mark((function e(t,s){var a,l,n,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("".concat(C.a,"/view-lesson"),{lesson_id:t,subject_id:s});case 2:a=e.sent,l=a.data.data[0],P(l.lesson_name),A(l.estimated_time),f(l.lesson_type.toString()),2===l.lesson_type&&(n=Object(N.jsx)("audio",{className:"customAudio",src:l.lesson_content,controls:!0,style:{margin:"0 10px 10px 0"}}),me(n)),1===l.lesson_type&&(i=Object(N.jsx)("video",{src:l.lesson_content,controls:!0,style:{maxWidth:"100%",margin:"0 10px 10px 0"}}),ce(i));case 9:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){He(je,he)}),[]),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("div",{className:"border rounded p-3 mb-4 bg-white",children:[Object(N.jsxs)("h5",{className:"text-info mb-4",children:[je?"Edit":"Add New"," Lesson"]}),Object(N.jsxs)("div",{className:"mt-4 w-50",children:[Object(N.jsx)("h5",{children:"Lesson Name"}),Object(N.jsx)(o.a,{placeholder:"Lesson Name",value:I,onChange:function(e){return P(e.target.value)}})]}),Object(N.jsxs)("div",{className:"mt-4",children:[Object(N.jsx)("h5",{children:"Estimated Time (Mins)"}),Object(N.jsx)(j.a,{className:"w-50",value:E,onChange:function(e){return A(e)}})]}),Object(N.jsxs)("div",{className:"mt-4",children:[Object(N.jsx)("h5",{children:"Lesson Type"}),Object(N.jsx)(d.a,{className:"w-50",value:m,defaultValue:Object(N.jsxs)("div",{className:"d-flex align-items-center",children:[" ",Object(N.jsx)(O.Q,{})," Text"]}),onChange:function(e){return f(e)},options:[{value:"0",label:Object(N.jsxs)("div",{className:"d-flex align-items-center",children:[" ",Object(N.jsx)(O.Q,{})," Text"]})},{value:"1",label:Object(N.jsxs)("div",{className:"d-flex align-items-center",children:[" ",Object(N.jsx)(O.R,{})," Video"]})},{value:"2",label:Object(N.jsxs)("div",{className:"d-flex align-items-center",children:[" ",Object(N.jsx)(O.O,{})," Audio"]})},{value:"3",label:Object(N.jsxs)("div",{className:"d-flex align-items-center",children:[" ",Object(N.jsx)(O.P,{})," Question"]})},{value:"4",label:Object(N.jsxs)("div",{className:"d-flex align-items-center",children:[" ",Object(N.jsx)(O.N,{})," AR/VR"]})}]})]})]}),"0"===m&&Object(N.jsxs)("div",{className:"border rounded p-3 mb-4 bg-white",children:[Object(N.jsx)("h5",{className:"mb-4",children:Object(N.jsxs)("div",{className:"d-flex align-items-center",children:[" ",Object(N.jsx)(O.Q,{})," Text"]})}),Object(N.jsx)(p.a,{style:{height:"200px",marginBottom:"49px"},theme:"snow",value:q,onChange:K})]}),"1"===m&&Object(N.jsxs)("div",{className:"border rounded p-3 mb-4 bg-white",children:[Object(N.jsx)("h5",{className:"mb-4",children:Object(N.jsxs)("div",{className:"d-flex align-items-center",children:[" ",Object(N.jsx)(O.R,{})," Video"]})}),0!=ae.length?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("div",{style:{display:"flex",width:"100%",height:"450px",justifyContent:"center"},children:ae}),Object(N.jsx)("div",{className:"my-2 d-flex justify-content-center",children:Object(N.jsxs)(h.a,{className:"text-white bg-info changeVideo",children:[Object(N.jsx)("input",{style:y.uploadFile,className:"uploadFile",type:"file",multiple:!0,onChange:Fe}),"Change Video"]})})]}):Object(N.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center position-relative uploaddoc",children:[Object(N.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",fill:"none",viewBox:"0 0 64 64",children:[Object(N.jsx)("path",{fill:"#0E7CEB",d:"M18.57 15.51l7.86 7a2 2 0 001.33.51H56v34.9A2.93 2.93 0 0153.26 61H5.74A2.93 2.93 0 013 57.92V18a2.85 2.85 0 012.68-3h11.56a2 2 0 011.33.51z"}),Object(N.jsx)("path",{fill:"#D7E6EF",d:"M49 57H7V3h42v54z"}),Object(N.jsx)("path",{fill:"#0E7CEB",d:"M45 23h16v-6a2 2 0 00-2-2h-6l-8 8z"}),Object(N.jsx)("path",{fill:"#F7FCFF",d:"M14 9h42v14H14V9z"}),Object(N.jsx)("path",{fill:"#0E7CEB",d:"M25.69 15.51l7.42 7a1.8 1.8 0 001.25.51H61v34.9A2.87 2.87 0 0158.41 61H13.59A2.87 2.87 0 0111 57.92V18a2.79 2.79 0 012.53-3h10.9c.47 0 .922.184 1.26.51z"}),Object(N.jsx)("path",{fill:"#F7FCFF",d:"M36 55c7.18 0 13-5.82 13-13s-5.82-13-13-13-13 5.82-13 13 5.82 13 13 13z"}),Object(N.jsx)("path",{fill:"#D7E6EF",d:"M52 13H32a1 1 0 000 2h20a1 1 0 000-2zm0 4H37a1 1 0 000 2h15a1 1 0 000-2z"}),Object(N.jsx)("path",{fill:"#44394A",d:"M36.5 49.28l6.72-6.72a5.501 5.501 0 00-7.78-7.78l-8.84 8.84a1.002 1.002 0 000 1.42A1 1 0 0028 45l8.84-8.84a3.5 3.5 0 114.95 4.95l-6.71 6.71a1.998 1.998 0 01-3.38-.571A2 2 0 0132.26 45L39 38.32a.5.5 0 01.71 0 .48.48 0 010 .71l-6 6a1 1 0 101.42 1.41l6-6a2.503 2.503 0 00-3.54-3.54l-6.72 6.72a4 4 0 000 5.66 4.003 4.003 0 005.66 0h-.03z"})]}),Object(N.jsx)("h5",{className:"mb-0 mt-2",children:"Drag & Drop Files Here"}),Object(N.jsx)("h5",{className:"mb-0",children:"Or"}),Object(N.jsx)("h5",{className:"mb-0",style:{color:"#4096ff"},children:"Choosen File"}),Object(N.jsx)("input",{style:y.uploadFile,className:"uploadFile",type:"file",multiple:!0,onChange:Fe})]})]}),"2"===m&&Object(N.jsxs)("div",{className:"border rounded p-3 mb-4 bg-white",children:[Object(N.jsx)("h5",{className:"mb-4",children:Object(N.jsxs)("div",{className:"d-flex align-items-center",children:[" ",Object(N.jsx)(O.O,{})," Audio"]})}),0==xe.length?Object(N.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center position-relative uploaddoc",children:[Object(N.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",fill:"none",viewBox:"0 0 64 64",children:[Object(N.jsx)("path",{fill:"#0E7CEB",d:"M18.57 15.51l7.86 7a2 2 0 001.33.51H56v34.9A2.93 2.93 0 0153.26 61H5.74A2.93 2.93 0 013 57.92V18a2.85 2.85 0 012.68-3h11.56a2 2 0 011.33.51z"}),Object(N.jsx)("path",{fill:"#D7E6EF",d:"M49 57H7V3h42v54z"}),Object(N.jsx)("path",{fill:"#0E7CEB",d:"M45 23h16v-6a2 2 0 00-2-2h-6l-8 8z"}),Object(N.jsx)("path",{fill:"#F7FCFF",d:"M14 9h42v14H14V9z"}),Object(N.jsx)("path",{fill:"#0E7CEB",d:"M25.69 15.51l7.42 7a1.8 1.8 0 001.25.51H61v34.9A2.87 2.87 0 0158.41 61H13.59A2.87 2.87 0 0111 57.92V18a2.79 2.79 0 012.53-3h10.9c.47 0 .922.184 1.26.51z"}),Object(N.jsx)("path",{fill:"#F7FCFF",d:"M36 55c7.18 0 13-5.82 13-13s-5.82-13-13-13-13 5.82-13 13 5.82 13 13 13z"}),Object(N.jsx)("path",{fill:"#D7E6EF",d:"M52 13H32a1 1 0 000 2h20a1 1 0 000-2zm0 4H37a1 1 0 000 2h15a1 1 0 000-2z"}),Object(N.jsx)("path",{fill:"#44394A",d:"M36.5 49.28l6.72-6.72a5.501 5.501 0 00-7.78-7.78l-8.84 8.84a1.002 1.002 0 000 1.42A1 1 0 0028 45l8.84-8.84a3.5 3.5 0 114.95 4.95l-6.71 6.71a1.998 1.998 0 01-3.38-.571A2 2 0 0132.26 45L39 38.32a.5.5 0 01.71 0 .48.48 0 010 .71l-6 6a1 1 0 101.42 1.41l6-6a2.503 2.503 0 00-3.54-3.54l-6.72 6.72a4 4 0 000 5.66 4.003 4.003 0 005.66 0h-.03z"})]}),Object(N.jsx)("h5",{className:"mb-0 mt-2",children:"Drag & Drop Files Here"}),Object(N.jsx)("h5",{className:"mb-0",children:"Or"}),Object(N.jsx)("h5",{className:"mb-0",style:{color:"#4096ff"},children:"Choosen File"}),Object(N.jsx)("input",{style:y.uploadFile,className:"uploadFile",type:"file",multiple:!0,onChange:we})]}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("div",{style:{display:"flex",width:"100%",height:"450px",justifyContent:"space-around"},className:"flex-column align-items-center",children:[Object(N.jsx)(O.i,{}),xe," "]}),Object(N.jsx)("div",{className:"my-2 d-flex justify-content-center",children:Object(N.jsxs)(h.a,{className:"text-white bg-info changeVideo",children:[Object(N.jsx)("input",{style:y.uploadFile,className:"uploadFile",type:"file",multiple:!0,onChange:we}),"Change Audio"]})})]})]}),"3"===m&&Object(N.jsxs)("div",{className:"border rounded p-3 mb-4 bg-white",children:[Object(N.jsxs)("div",{className:"w-50",children:[Object(N.jsx)("h5",{children:Object(N.jsxs)("div",{className:"d-flex align-items-center",children:[" ",Object(N.jsx)(O.P,{})," Question"]})}),Object(N.jsx)(o.a,{className:"my-4",value:R,onChange:function(e){return T(e.target.value)},placeholder:"Question Title"}),Object(N.jsx)(b.a.Group,{onChange:function(e){return ee(e.target.value)},value:$,className:"d-flex flex-column w-100",children:Ne&&Ne.map((function(e,t){return Object(N.jsxs)(b.a,{className:"my-2 customradioInput",value:t,children:[Object(N.jsx)(o.a,{onChange:function(e){return function(e,t){var s=Object(n.a)(Ne);s[t]={text:e},ye(s)}(e.target.value,t)},value:e.text,placeholder:"Option ".concat(t+1)}),Object(N.jsx)(h.a,{onClick:function(){return function(e){var t=Ne.filter((function(t,s){return s!==e}));ye(t)}(t)},className:"p-0 ml-2",children:Object(N.jsx)(O.x,{twoToneColor:"#ED2939"})})]})}))})]}),Object(N.jsxs)("h5",{style:{cursor:"pointer"},className:"my-2 text-info",onClick:function(){ye([].concat(Object(n.a)(Ne),[{value:""}]))},children:[" ","+ Add New Option"," "]})]}),"4"===m&&Object(N.jsxs)("div",{className:"border rounded p-3 mb-4 bg-white",children:[Object(N.jsx)("h5",{className:"mb-4",children:Object(N.jsxs)("div",{className:"d-flex align-items-center",children:[" ",Object(N.jsx)(O.R,{})," AR/VR"]})}),0!=ie.length?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("div",{style:{display:"flex",width:"100%",height:"450px",justifyContent:"center"},children:ie}),Object(N.jsx)("div",{className:"my-2 d-flex justify-content-center",children:Object(N.jsxs)(h.a,{className:"text-white bg-info changeVideo",children:[Object(N.jsx)("input",{style:y.uploadFile,className:"uploadFile",type:"file",multiple:!0,onChange:Fe}),"Change Video"]})})]}):Object(N.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center position-relative uploaddoc",children:[Object(N.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",fill:"none",viewBox:"0 0 64 64",children:[Object(N.jsx)("path",{fill:"#0E7CEB",d:"M18.57 15.51l7.86 7a2 2 0 001.33.51H56v34.9A2.93 2.93 0 0153.26 61H5.74A2.93 2.93 0 013 57.92V18a2.85 2.85 0 012.68-3h11.56a2 2 0 011.33.51z"}),Object(N.jsx)("path",{fill:"#D7E6EF",d:"M49 57H7V3h42v54z"}),Object(N.jsx)("path",{fill:"#0E7CEB",d:"M45 23h16v-6a2 2 0 00-2-2h-6l-8 8z"}),Object(N.jsx)("path",{fill:"#F7FCFF",d:"M14 9h42v14H14V9z"}),Object(N.jsx)("path",{fill:"#0E7CEB",d:"M25.69 15.51l7.42 7a1.8 1.8 0 001.25.51H61v34.9A2.87 2.87 0 0158.41 61H13.59A2.87 2.87 0 0111 57.92V18a2.79 2.79 0 012.53-3h10.9c.47 0 .922.184 1.26.51z"}),Object(N.jsx)("path",{fill:"#F7FCFF",d:"M36 55c7.18 0 13-5.82 13-13s-5.82-13-13-13-13 5.82-13 13 5.82 13 13 13z"}),Object(N.jsx)("path",{fill:"#D7E6EF",d:"M52 13H32a1 1 0 000 2h20a1 1 0 000-2zm0 4H37a1 1 0 000 2h15a1 1 0 000-2z"}),Object(N.jsx)("path",{fill:"#44394A",d:"M36.5 49.28l6.72-6.72a5.501 5.501 0 00-7.78-7.78l-8.84 8.84a1.002 1.002 0 000 1.42A1 1 0 0028 45l8.84-8.84a3.5 3.5 0 114.95 4.95l-6.71 6.71a1.998 1.998 0 01-3.38-.571A2 2 0 0132.26 45L39 38.32a.5.5 0 01.71 0 .48.48 0 010 .71l-6 6a1 1 0 101.42 1.41l6-6a2.503 2.503 0 00-3.54-3.54l-6.72 6.72a4 4 0 000 5.66 4.003 4.003 0 005.66 0h-.03z"})]}),Object(N.jsx)("h5",{className:"mb-0 mt-2",children:"Drag & Drop Files Here"}),Object(N.jsx)("h5",{className:"mb-0",children:"Or"}),Object(N.jsx)("h5",{className:"mb-0",style:{color:"#4096ff"},children:"Choosen File"}),Object(N.jsx)("input",{style:y.uploadFile,className:"uploadFile",type:"file",multiple:!0,onChange:function(e){var t=e.target.files;L(t);for(var s=[],a=0;a<t.length;a++){var c=t[a],l=Object(N.jsx)("video",{src:URL.createObjectURL(c),controls:!0,style:{maxWidth:"100%",margin:"0 10px 10px 0"}},a);s.push(l)}re(s)}})]})]}),Object(N.jsxs)("div",{className:"d-flex mt-3 justify-content-end",children:[Object(N.jsx)(h.a,{onClick:function(){return e.goBack()},children:"Cancel"}),Object(N.jsxs)(h.a,{className:"text-white bg-info ml-3",onClick:Ae,children:[" ","Save"," "]})]}),Object(N.jsx)(u.a,{width:500,footer:null,visible:fe,children:Object(N.jsxs)("div",{className:"d-flex my-3 align-items-center flex-column justify-content-center",children:[Object(N.jsx)("svg",{width:"65",height:"64",viewBox:"0 0 65 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(N.jsx)("path",{d:"M32.5 0C37.4636 0 42.1609 1.13082 46.358 3.14781C44.64 4.50697 43.0471 5.81176 41.5629 7.06762C38.7358 6.04009 35.6859 5.48012 32.5054 5.48012C25.1823 5.48012 18.5496 8.44852 13.7545 13.2491C8.95396 18.0496 5.98556 24.6769 5.98556 32C5.98556 39.3231 8.95396 45.9504 13.7545 50.7509C18.555 55.5515 25.1823 58.5199 32.5054 58.5199C39.8286 58.5199 46.4613 55.5515 51.2564 50.7509C56.0569 45.9504 59.0253 39.3231 59.0253 32C59.0253 30.2603 58.8568 28.5532 58.536 26.9059C59.9115 25.1118 61.3196 23.3231 62.7603 21.5508C63.8911 24.8236 64.5054 28.3411 64.5054 32C64.5054 40.8345 60.9227 48.8372 55.1327 54.6273C49.3427 60.4173 41.34 64 32.5054 64C23.6709 64 15.6682 60.4173 9.87819 54.6273C4.08274 48.8372 0.5 40.8345 0.5 32C0.5 23.1655 4.08274 15.1628 9.87275 9.37275C15.6628 3.58274 23.6655 0 32.5 0ZM17.5928 26.7428L25.3998 26.6395L25.9815 26.7917C27.5581 27.6996 29.0423 28.738 30.4286 29.9123C31.429 30.7604 32.3858 31.6847 33.2938 32.685C36.0936 28.178 39.0783 24.0408 42.2316 20.2351C45.6838 16.0652 49.3481 12.2813 53.1973 8.82909L53.9584 8.53551H62.4776L60.7596 10.4438C55.4806 16.3099 50.691 22.3717 46.3634 28.6239C42.0359 34.8814 38.165 41.3401 34.7236 47.9891L33.6526 50.055L32.6685 47.9511C30.8527 44.053 28.6781 40.4757 26.0848 37.279C23.4915 34.0822 20.4742 31.2443 16.9567 28.8304L17.5928 26.7428Z",fill:"#00AB6F"})}),Object(N.jsx)("h3",{className:"font-weight-bold mt-4 text-center",children:"New subject created successfully!"})]})})]})}}}]);
//# sourceMappingURL=22.8036928f.chunk.js.map