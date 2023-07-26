(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[75],{641:function(e,t,s){"use strict";var n=s(0),a=s.n(n),c=s(570),r=s(1),i=a.a.forwardRef((function(e,t){return Object(r.jsx)(c.a,{component:e.svg,className:e.className})}));t.a=i},736:function(e,t,s){"use strict";var n=s(3),a=s(5),c=s(0),r=s(6),i=s.n(r),o=s(80),l=function(e,t){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(s[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(s[n[a]]=e[n[a]])}return s};t.a=function(e){return c.createElement(o.a,null,(function(t){var s,r=t.getPrefixCls,o=t.direction,u=e.prefixCls,d=e.type,j=void 0===d?"horizontal":d,m=e.orientation,h=void 0===m?"center":m,b=e.className,g=e.children,x=e.dashed,p=e.plain,f=l(e,["prefixCls","type","orientation","className","children","dashed","plain"]),O=r("divider",u),v=h.length>0?"-".concat(h):h,w=!!g,y=i()(O,"".concat(O,"-").concat(j),(s={},Object(a.a)(s,"".concat(O,"-with-text"),w),Object(a.a)(s,"".concat(O,"-with-text").concat(v),w),Object(a.a)(s,"".concat(O,"-dashed"),!!x),Object(a.a)(s,"".concat(O,"-plain"),!!p),Object(a.a)(s,"".concat(O,"-rtl"),"rtl"===o),s),b);return c.createElement("div",Object(n.a)({className:y},f,{role:"separator"}),g&&c.createElement("span",{className:"".concat(O,"-inner-text")},g))}))}},750:function(e,t,s){"use strict";var n=s(220),a=s.n(n),c=s(9),r=s(763).a(),i=s(35),o=s(316),l=a.a.create({baseURL:c.a,timeout:6e4}),u="/auth/login";l.interceptors.request.use((function(e){var t=localStorage.getItem(i.b);return t&&(e.headers.authorization=t),t||e.headers["public-request"]||(r.push(u),window.location.reload()),e}),(function(e){o.a.error({message:"Error"}),Promise.reject(e)})),l.interceptors.response.use((function(e){return e.data}),(function(e){var t={message:""};return 400!==e.response.status&&403!==e.response.status||(t.message="Authentication Fail",t.description="Please login again",localStorage.removeItem(i.b),r.push(u),window.location.reload()),404===e.response.status&&(t.message="Not Found"),500===e.response.status&&(t.message="Internal Server Error"),508===e.response.status&&(t.message="Time Out"),o.a.error(t),Promise.reject(e)}));var d=l,j={login:function(e){return d({url:"/posts",method:"post",headers:{"public-request":"true"},data:e})},signUp:function(e){return d({url:"/auth/signup",method:"post",headers:{"public-request":"true"},data:e})}};t.a=j},772:function(e,t,s){"use strict";var n=s(0),a=s(39),c=s(736),r=s(108),i=s(974),o=s(896),l=s(566),u=s(900),d=s(978),j=s(53),m=s(641),h=s(59),b=s(750),g=s(42),x=s(766),p=s(1),f=function(e){var t=Object(g.useHistory)(),s=e.otherSignIn,a=e.showForgetPassword,h=e.hideAuthMessage,f=e.onForgetPasswordClick,O=e.showLoading,v=e.extra,w=e.loading,y=e.showMessage,N=e.message,P=e.authenticated,k=e.showAuthMessage,I=e.token,C=e.redirect,S=e.allowRedirect;Object(n.useEffect)((function(){null!==I&&S&&t.push(C),y&&setTimeout((function(){h()}),3e3)}));var F=Object(p.jsxs)("div",{children:[Object(p.jsx)(c.a,{children:Object(p.jsx)("span",{className:"text-muted font-size-base font-weight-normal",children:"or connect with"})}),Object(p.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(p.jsx)(r.a,{onClick:function(){O()},className:"mr-2",disabled:w,icon:Object(p.jsx)(m.a,{svg:j.K}),children:"Google"}),Object(p.jsx)(r.a,{onClick:function(){O()},icon:Object(p.jsx)(m.a,{svg:j.C}),disabled:w,children:"Facebook"})]})]});return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(x.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:y?1:0,marginBottom:y?20:0},children:Object(p.jsx)(i.a,{type:"error",showIcon:!0,message:N})}),Object(p.jsxs)(o.a,{layout:"vertical",name:"login-form",onFinish:function(e){O();b.a.login(e).then((function(e){P("fakeToken")})).then((function(e){k(e)}))},children:[Object(p.jsx)(o.a.Item,{name:"email",label:"Email",rules:[{required:!0,message:"Please input your email"},{type:"email",message:"Please enter a validate email!"}],children:Object(p.jsx)(l.a,{prefix:Object(p.jsx)(u.a,{className:"text-primary"})})}),Object(p.jsx)(o.a.Item,{name:"password",label:Object(p.jsxs)("div",{className:"".concat(a?"d-flex justify-content-between w-100 align-items-center":""),children:[Object(p.jsx)("span",{children:"Password"}),a&&Object(p.jsx)("span",{onClick:function(){return f},className:"cursor-pointer font-size-sm font-weight-normal text-muted",children:"Forget Password?"})]}),rules:[{required:!0,message:"Please input your password"}],children:Object(p.jsx)(l.a.Password,{prefix:Object(p.jsx)(d.a,{className:"text-primary"})})}),Object(p.jsx)(o.a.Item,{children:Object(p.jsx)(r.a,{type:"primary",htmlType:"submit",block:!0,loading:w,children:"Sign In"})}),s?F:null,v]})]})};f.defaultProps={otherSignIn:!0,showForgetPassword:!1};var O={showAuthMessage:h.c,showLoading:h.d,hideAuthMessage:h.b,authenticated:h.a};t.a=Object(a.b)((function(e){var t=e.auth;return{loading:t.loading,message:t.message,showMessage:t.showMessage,token:t.token,redirect:t.redirect}}),O)(f)},962:function(e,t,s){"use strict";s.r(t);var n=s(15),a=(s(0),s(772)),c=s(747),r=s(748),i=s(39),o=s(1),l={backgroundImage:"url(".concat("/img/others/img-17.jpg",")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"};t.default=function(e){var t=Object(i.c)((function(e){return e.theme.currentTheme}));return Object(o.jsx)("div",{className:"h-100 ".concat("light"===t?"bg-white":""),children:Object(o.jsxs)(c.a,{justify:"center",className:"align-items-stretch h-100",children:[Object(o.jsx)(r.a,{xs:20,sm:20,md:24,lg:16,children:Object(o.jsx)("div",{className:"container d-flex flex-column justify-content-center h-100",children:Object(o.jsx)(c.a,{justify:"center",children:Object(o.jsxs)(r.a,{xs:24,sm:24,md:20,lg:12,xl:8,children:[Object(o.jsx)("h1",{children:"Sign In"}),Object(o.jsxs)("p",{children:["Don't have an account yet? ",Object(o.jsx)("a",{href:"/auth/register-2",children:"Sign Up"})]}),Object(o.jsx)("div",{className:"mt-4",children:Object(o.jsx)(a.a,Object(n.a)({},e))})]})})})}),Object(o.jsx)(r.a,{xs:0,sm:0,md:0,lg:8,children:Object(o.jsxs)("div",{className:"d-flex flex-column justify-content-between h-100 px-4",style:l,children:[Object(o.jsx)("div",{className:"text-right",children:Object(o.jsx)("img",{src:"/img/logo-white.png",alt:"logo"})}),Object(o.jsx)(c.a,{justify:"center",children:Object(o.jsxs)(r.a,{xs:0,sm:0,md:0,lg:20,children:[Object(o.jsx)("img",{className:"img-fluid mb-5",src:"/img/others/img-18.png",alt:""}),Object(o.jsx)("h1",{className:"text-white",children:"Welcome to emilus"}),Object(o.jsx)("p",{className:"text-white",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat, vel convallis elit fermentum pellentesque."})]})}),Object(o.jsx)("div",{className:"d-flex justify-content-end pb-4",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("a",{className:"text-white",href:"/#",onClick:function(e){return e.preventDefault()},children:"Term & Conditions"}),Object(o.jsx)("span",{className:"mx-2 text-white",children:" | "}),Object(o.jsx)("a",{className:"text-white",href:"/#",onClick:function(e){return e.preventDefault()},children:"Privacy & Policy"})]})})]})})]})})}}}]);
//# sourceMappingURL=75.cb11a633.chunk.js.map