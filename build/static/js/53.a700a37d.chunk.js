(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[53],{587:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(71),r=function(e){if(Object(a.a)()&&window.document.documentElement){var t=Array.isArray(e)?e:[e],n=window.document.documentElement;return t.some((function(e){return e in n.style}))}return!1};function c(e,t){return Array.isArray(e)||void 0===t?r(e):function(e,t){if(!r(e))return!1;var n=document.createElement("div"),a=n.style[e];return n.style[e]=t,n.style[e]!==a}(e,t)}},590:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l}));var a,r=n(71),c=(n(587),function(){return Object(r.a)()&&window.document.documentElement}),l=function(){if(!c())return!1;if(void 0!==a)return a;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),a=1===e.scrollHeight,document.body.removeChild(e),a}},705:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="http://18.140.159.50:3333/api"},737:function(e,t,n){"use strict";var a=n(5),r=n(3),c=n(0),l=n(6),i=n.n(l),o=n(232),u=n(12),s=n(7),d=n(37),m=n(79),f=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},p=c.createContext(null),b=function(e,t){var n=e.defaultValue,l=e.children,o=e.options,b=void 0===o?[]:o,v=e.prefixCls,h=e.className,y=e.style,j=e.onChange,O=f(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),g=c.useContext(m.b),w=g.getPrefixCls,C=g.direction,k=c.useState(O.value||n||[]),E=Object(s.a)(k,2),N=E[0],P=E[1],I=c.useState([]),S=Object(s.a)(I,2),V=S[0],A=S[1];c.useEffect((function(){"value"in O&&P(O.value||[])}),[O.value]);var M=function(){return b.map((function(e){return"string"===typeof e?{label:e,value:e}:e}))},B=w("checkbox",v),L="".concat(B,"-group"),R=Object(d.a)(O,["value","disabled"]);b&&b.length>0&&(l=M().map((function(e){return c.createElement(x,{prefixCls:B,key:e.value.toString(),disabled:"disabled"in e?e.disabled:O.disabled,value:e.value,checked:-1!==N.indexOf(e.value),onChange:e.onChange,className:"".concat(L,"-item"),style:e.style},e.label)})));var T={toggleOption:function(e){var t=N.indexOf(e.value),n=Object(u.a)(N);-1===t?n.push(e.value):n.splice(t,1),"value"in O||P(n);var a=M();null===j||void 0===j||j(n.filter((function(e){return-1!==V.indexOf(e)})).sort((function(e,t){return a.findIndex((function(t){return t.value===e}))-a.findIndex((function(e){return e.value===t}))})))},value:N,disabled:O.disabled,name:O.name,registerValue:function(e){A((function(t){return[].concat(Object(u.a)(t),[e])}))},cancelValue:function(e){A((function(t){return t.filter((function(t){return t!==e}))}))}},_=i()(L,Object(a.a)({},"".concat(L,"-rtl"),"rtl"===C),h);return c.createElement("div",Object(r.a)({className:_,style:y},R,{ref:t}),c.createElement(p.Provider,{value:T},l))},v=c.forwardRef(b),h=c.memo(v),y=n(40),j=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},O=function(e,t){var n,l=e.prefixCls,u=e.className,s=e.children,d=e.indeterminate,f=void 0!==d&&d,b=e.style,v=e.onMouseEnter,h=e.onMouseLeave,O=e.skipGroup,g=void 0!==O&&O,x=j(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup"]),w=c.useContext(m.b),C=w.getPrefixCls,k=w.direction,E=c.useContext(p),N=c.useRef(x.value);c.useEffect((function(){null===E||void 0===E||E.registerValue(x.value),Object(y.a)("checked"in x||!!E||!("value"in x),"Checkbox","`value` is not a valid prop, do you mean `checked`?")}),[]),c.useEffect((function(){if(!g)return x.value!==N.current&&(null===E||void 0===E||E.cancelValue(N.current),null===E||void 0===E||E.registerValue(x.value)),function(){return null===E||void 0===E?void 0:E.cancelValue(x.value)}}),[x.value]);var P=C("checkbox",l),I=Object(r.a)({},x);E&&!g&&(I.onChange=function(){x.onChange&&x.onChange.apply(x,arguments),E.toggleOption&&E.toggleOption({label:s,value:x.value})},I.name=E.name,I.checked=-1!==E.value.indexOf(x.value),I.disabled=x.disabled||E.disabled);var S=i()((n={},Object(a.a)(n,"".concat(P,"-wrapper"),!0),Object(a.a)(n,"".concat(P,"-rtl"),"rtl"===k),Object(a.a)(n,"".concat(P,"-wrapper-checked"),I.checked),Object(a.a)(n,"".concat(P,"-wrapper-disabled"),I.disabled),n),u),V=i()(Object(a.a)({},"".concat(P,"-indeterminate"),f));return c.createElement("label",{className:S,style:b,onMouseEnter:v,onMouseLeave:h},c.createElement(o.a,Object(r.a)({},I,{prefixCls:P,className:V,ref:t})),void 0!==s&&c.createElement("span",null,s))},g=c.forwardRef(O);g.displayName="Checkbox";var x=g,w=x;w.Group=h,w.__ANT_CHECKBOX=!0;t.a=w},884:function(e,t,n){},949:function(e,t,n){"use strict";n.r(t);var a=n(27),r=n.n(a),c=n(95),l=(n(0),n(884),n(885)),i=n(540),o=n(737),u=n(107),s=n(607),d=n.n(s),m=(n(705),n(10),n(223)),f=n(1);t.default=function(){var e=Object(m.useHistory)(),t=function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Success:",n),t.next=3,d()({method:"POST",url:"http://18.140.159.50:3333/api/admin-login",data:{email:n.username,password:n.password},headers:{"content-type":"application/json"}}).then((function(t){localStorage.setItem("token",t.data.token.token),e.push("/app")})).catch((function(e){console.log(e)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(f.jsx)("div",{className:"login_background",style:{backgroundImage:"url(/img/background.jpg)",display:"flex",height:"100vh",width:"100%",justifyContent:"center",alignItems:"center"},children:Object(f.jsxs)("div",{className:"login_container",children:[Object(f.jsx)("div",{style:{textAlign:"center",marginBottom:"20px"},children:Object(f.jsx)("img",{src:"/img/logo.png"})}),Object(f.jsx)("div",{style:{width:"100%"},children:Object(f.jsxs)(l.a,{name:"basic",layout:"vertical",style:{maxWidth:600},initialValues:{remember:!0},onFinish:t,autoComplete:"off",children:[Object(f.jsx)(l.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(f.jsx)(i.a,{placeholder:"NRIC/FIN Number"})}),Object(f.jsx)(l.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(f.jsx)(i.a.Password,{placeholder:"4 Digit Pin"})}),Object(f.jsx)(l.a.Item,{name:"remember",valuePropName:"checked",children:Object(f.jsx)(o.a,{children:"Remember me"})}),Object(f.jsx)(l.a.Item,{children:Object(f.jsx)(u.a,{type:"primary",htmlType:"submit",style:{width:"100%",marginTop:"17px",marginBottom:"12px"},children:"Log In"})})]})}),Object(f.jsxs)("div",{className:"belowloginbutton",children:["By continuing, you agree to the August International Pte Ltd"," ",Object(f.jsx)("span",{style:{color:"#0068B3"},children:"Terms & Services"})]})]})})}}}]);
//# sourceMappingURL=53.a700a37d.chunk.js.map