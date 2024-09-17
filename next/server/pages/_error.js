"use strict";(()=>{var e={};e.id=820,e.ids=[820,888,660],e.modules={1323:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},6968:(e,t,r)=>{r.a(e,async(e,o)=>{try{r.r(t),r.d(t,{config:()=>m,default:()=>c,getServerSideProps:()=>g,getStaticPaths:()=>f,getStaticProps:()=>p,reportWebVitals:()=>x,routeModule:()=>_,unstable_getServerProps:()=>S,unstable_getServerSideProps:()=>y,unstable_getStaticParams:()=>b,unstable_getStaticPaths:()=>P,unstable_getStaticProps:()=>h});var a=r(7093),i=r(5244),n=r(1323),l=r(4684),s=r(3900),u=r(8435),d=e([s]);s=(d.then?(await d)():d)[0];let c=(0,n.l)(u,"default"),p=(0,n.l)(u,"getStaticProps"),f=(0,n.l)(u,"getStaticPaths"),g=(0,n.l)(u,"getServerSideProps"),m=(0,n.l)(u,"config"),x=(0,n.l)(u,"reportWebVitals"),h=(0,n.l)(u,"unstable_getStaticProps"),P=(0,n.l)(u,"unstable_getStaticPaths"),b=(0,n.l)(u,"unstable_getStaticParams"),S=(0,n.l)(u,"unstable_getServerProps"),y=(0,n.l)(u,"unstable_getServerSideProps"),_=new a.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/_error",pathname:"/_error",bundlePath:"",filename:""},components:{App:s.default,Document:l.default},userland:u});o()}catch(e){o(e)}})},8435:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let o=r(167),a=o._(r(6689)),i=o._(r(4764)),n={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function l(e){let{res:t,err:r}=e;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}let s={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};class u extends a.default.Component{render(){let{statusCode:e,withDarkMode:t=!0}=this.props,r=this.props.title||n[e]||"An unexpected error has occurred";return a.default.createElement("div",{style:s.error},a.default.createElement(i.default,null,a.default.createElement("title",null,e?e+": "+r:"Application error: a client-side exception has occurred")),a.default.createElement("div",{style:s.desc},a.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?a.default.createElement("h1",{className:"next-error-h1",style:s.h1},e):null,a.default.createElement("div",{style:s.wrap},a.default.createElement("h2",{style:s.h2},this.props.title||e?r:a.default.createElement(a.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}u.displayName="ErrorPage",u.getInitialProps=l,u.origGetInitialProps=l,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4684:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var o=r(997),a=r(6859);function i(){return(0,o.jsxs)(a.Html,{lang:"en",children:[o.jsx(a.Head,{}),(0,o.jsxs)("body",{children:[o.jsx(a.Main,{}),o.jsx(a.NextScript,{})]})]})}},5244:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},6641:e=>{e.exports=require("next-seo")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},1175:e=>{e.exports=require("react-query")},997:e=>{e.exports=require("react/jsx-runtime")},1964:e=>{e.exports=import("@floating-ui/react")},8916:e=>{e.exports=import("@react-aria/focus")},7001:e=>{e.exports=import("@react-aria/interactions")},3258:e=>{e.exports=import("@reduxjs/toolkit")},1928:e=>{e.exports=import("@tanstack/react-virtual")},3291:e=>{e.exports=import("react-redux")},3590:e=>{e.exports=import("react-toastify")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[491,723,859,900],()=>r(6968));module.exports=o})();