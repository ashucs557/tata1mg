"use strict";(()=>{var e={};e.id=399,e.ids=[399,888,660],e.modules={1323:(e,s)=>{Object.defineProperty(s,"l",{enumerable:!0,get:function(){return function e(s,i){return i in s?s[i]:"then"in s&&"function"==typeof s.then?s.then(s=>e(s,i)):"function"==typeof s&&"default"===i?s:void 0}}})},322:(e,s,i)=>{i.a(e,async(e,l)=>{try{i.r(s),i.d(s,{config:()=>p,default:()=>m,getServerSideProps:()=>j,getStaticPaths:()=>h,getStaticProps:()=>x,reportWebVitals:()=>f,routeModule:()=>S,unstable_getServerProps:()=>I,unstable_getServerSideProps:()=>g,unstable_getStaticParams:()=>N,unstable_getStaticPaths:()=>v,unstable_getStaticProps:()=>u});var n=i(7093),r=i(5244),a=i(1323),t=i(4684),c=i(3900),d=i(2309),o=e([c,d]);[c,d]=o.then?(await o)():o;let m=(0,a.l)(d,"default"),x=(0,a.l)(d,"getStaticProps"),h=(0,a.l)(d,"getStaticPaths"),j=(0,a.l)(d,"getServerSideProps"),p=(0,a.l)(d,"config"),f=(0,a.l)(d,"reportWebVitals"),u=(0,a.l)(d,"unstable_getStaticProps"),v=(0,a.l)(d,"unstable_getStaticPaths"),N=(0,a.l)(d,"unstable_getStaticParams"),I=(0,a.l)(d,"unstable_getServerProps"),g=(0,a.l)(d,"unstable_getServerSideProps"),S=new n.PagesRouteModule({definition:{kind:r.x.PAGES,page:"/test-details",pathname:"/test-details",bundlePath:"",filename:""},components:{App:c.default,Document:t.default},userland:d});l()}catch(e){l(e)}})},3624:(e,s,i)=>{i.d(s,{Z:()=>t});var l=i(997),n=i(8243),r=i(5675),a=i.n(r);i(6689);let t=({title:e,children:s,isOpen:i,onClick:r})=>l.jsx(l.Fragment,{children:l.jsx("div",{className:"w-full mb-5",children:l.jsx("div",{className:"",children:(0,l.jsxs)("div",{className:"accord-drop",children:[(0,l.jsxs)("div",{onClick:r,className:"accor-head group flex w-full items-center justify-between",children:[l.jsx("span",{children:e}),l.jsx(a(),{src:n.Z.AccordIcon,className:`${i?"rotate-180":""}`,alt:"accordion-icon"})]}),i&&l.jsx("div",{className:"accor-cont",children:l.jsx("ul",{className:"accordion-content",children:s})})]})})})})},1566:(e,s,i)=>{i.d(s,{Z:()=>l});let l={API_BASE_URL:"https://admin-api.demo.com/api/",LIVE_API_BASE_URL:"https://liveapi.demo.com/api/",X_ACCESS_TOKEN:"60f291aa46ea447060f291aa46ea447019d83ba30be508e419d83ba30be508e4",MEDIA_IMG_URL:"https://media.demo.com/images/"}},86:(e,s,i)=>{i.d(s,{Z:()=>l});let l={TEST_OVERVIEW:"test/overiew"}},4684:(e,s,i)=>{i.r(s),i.d(s,{default:()=>r});var l=i(997),n=i(6859);function r(){return(0,l.jsxs)(n.Html,{lang:"en",children:[l.jsx(n.Head,{}),(0,l.jsxs)("body",{children:[l.jsx(n.Main,{}),l.jsx(n.NextScript,{})]})]})}},2309:(e,s,i)=>{i.a(e,async(e,l)=>{try{i.r(s),i.d(s,{default:()=>j,getStaticProps:()=>p});var n=i(997),r=i(3624),a=i(8243),t=i(6144),c=i(986),d=i(6641),o=i(5675),m=i.n(o),x=i(6689),h=e([c]);c=(h.then?(await h)():h)[0];let j=({metaDetail:e})=>{let[s,i]=(0,x.useState)({0:!0,1:!1,2:!1,3:!1,4:!1,5:!1}),[l,c]=(0,x.useState)(0),o=e=>{console.log(typeof e,"index"),c(e);let s={0:!1,1:!1,2:!1,3:!1,4:!1,5:!1};s[e.toString()]=!0,i(s)},h=e=>{c(parseInt(e)),i({...s,[e]:!s[e]})};return(0,n.jsxs)(n.Fragment,{children:[n.jsx(d.NextSeo,{title:e?.SeoTitle,description:e?.SeoDescription,canonical:""}),(0,n.jsxs)("div",{className:"container test-detail-sec",children:[(0,n.jsxs)("div",{className:"test-detail-head",children:[n.jsx("div",{className:"",children:n.jsx("h1",{children:"B0104 - ( 1-3 )-SS-D GLUCAN LEVEL"})}),(0,n.jsxs)("div",{className:"flex",children:[n.jsx("a",{href:"https://wa.me/9717661304",children:n.jsx(t.Z.WhatsappIcon,{})}),n.jsx("a",{href:"",children:n.jsx(t.Z.ShareIcon,{})}),n.jsx("a",{href:"mailto:demo@1mg.in",children:n.jsx(t.Z.EmailIcon,{})}),n.jsx("a",{href:"",children:n.jsx(t.Z.ChatIcon,{})}),n.jsx("a",{href:"#",onClick:()=>{let e=`
          <html>
            <head>
              <title>Print Dummy Data</title>
              <style>
                body { font-family: Arial, sans-serif; text-align: center; }
                h1 { color: #333; }
              </style>
            </head>
            <body>
              <h1>Dummy Data</h1>
              <p>This is some dummy data for printing.</p>
              <p>Print this content by clicking 'Print'.</p>
            </body>
          </html>
        `,s=window.open("","","width=600,height=400");s?(s.document.write(e),s.document.close(),s.focus(),s.print()):console.error("Failed to open print window. Please ensure popups are not blocked.")},children:n.jsx(t.Z.PdfIcon,{})}),n.jsx("a",{href:"#",onClick:()=>{let e=new Blob(["This is a dummy file for download"],{type:"application/pdf"}),s=document.createElement("a");s.href=window.URL.createObjectURL(e),s.download="dummyFile.pdf",s.click()},children:n.jsx(t.Z.DownloadIcon,{})})]})]}),n.jsx("div",{className:"test-detail-cont",children:(0,n.jsxs)("div",{className:"grid  grid-cols-1 md:grid-cols-12 md:gap-4 gap-y-3 ",children:[n.jsx("div",{className:" md:col-span-3",children:n.jsx("div",{children:n.jsx("ul",{className:"test-overview",children:["Overview","Sample Guidelines & Forms","Clinical Information & Resources","Reports","Additional information","Test Price & Other Details"].map((e,s)=>n.jsx("li",{className:l===s?"active":"",onClick:()=>o(s),children:e},s))})})}),n.jsx("div",{className:" col-span-6 ",children:(0,n.jsxs)("div",{className:"",children:[n.jsx(r.Z,{onClick:()=>h("0"),isOpen:s["0"],title:"Test Information",children:(0,n.jsxs)("ul",{className:"test-info",children:[n.jsx("li",{children:(0,n.jsxs)("div",{children:[n.jsx("h4",{children:"Test code"}),n.jsx("p",{children:" A0001"})]})}),n.jsx("li",{children:(0,n.jsxs)("div",{children:[n.jsx("h4",{children:"Test name "}),n.jsx("p",{children:"ABNORMAL HAEMOGLOBIN STUDIESHB VARIANTSBLOOD"})]})}),n.jsx("li",{children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("h4",{className:"flex items-center",children:["Department",n.jsx("div",{className:"ml-1",children:n.jsx(m(),{src:a.Z.InfomIcon,alt:"information-icon"})})]}),n.jsx("p",{children:" HEMATOLOGY"})]})}),n.jsx("li",{children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("h4",{className:"flex items-center",children:["Method",n.jsx("div",{className:"ml-1",children:n.jsx(m(),{src:a.Z.InfomIcon,alt:"information-icon"})})]}),n.jsx("p",{children:" HPLC"})]})}),n.jsx("li",{children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("h4",{className:"flex items-center",children:["Test parameters (Name)",n.jsx("div",{className:"ml-1",children:n.jsx(m(),{src:a.Z.InfomIcon,alt:"information-icon"})})]}),n.jsx("p",{children:"Abnormal Haemoglobin Studies (HBF,HBA0,HBA2,HBD,HBS,HBC,HBE,)"})]})}),n.jsx("li",{children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("h4",{className:"flex items-center",children:["Test parameters (Count)",n.jsx("div",{className:"ml-1",children:n.jsx(m(),{src:a.Z.InfomIcon,alt:"information-icon"})})]}),n.jsx("p",{children:" 7"})]})}),n.jsx("li",{children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("h4",{className:"flex items-center",children:["Report display name",n.jsx("div",{className:"ml-1",children:n.jsx(m(),{src:a.Z.InfomIcon,alt:"information-icon"})})]}),n.jsx("p",{children:" Abnormal Haemoglobin Studies, Hb Variants"})]})}),n.jsx("li",{children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("h4",{className:"flex items-center",children:["Alternate Name",n.jsx("div",{className:"ml-1",children:n.jsx(m(),{src:a.Z.InfomIcon,alt:"information-icon"})})]}),n.jsx("p",{children:"Hemoglobin Variant Analysis with EDTA Blood"})]})}),n.jsx("li",{children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("h4",{className:"flex items-center",children:["Published on",n.jsx("div",{className:"ml-1",children:n.jsx(m(),{src:a.Z.InfomIcon,alt:"information-icon"})})]}),n.jsx("p",{children:"15-07-2024 12:42:55"})]})}),n.jsx("li",{children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("h4",{className:"flex items-center",children:["Walkin",n.jsx("div",{className:"ml-1",children:n.jsx(m(),{src:a.Z.InfomIcon,alt:"information-icon"})})]}),n.jsx("p",{children:" No"})]})})]})}),n.jsx(r.Z,{onClick:()=>h("1"),isOpen:s["1"],title:"Sample Information",children:(0,n.jsxs)("ul",{className:"test-info",children:[n.jsx("li",{children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("h4",{className:"flex items-center",children:["Sample container",n.jsx("div",{className:"ml-1",children:n.jsx(m(),{src:a.Z.InfomIcon,alt:"information-icon"})})]}),n.jsx("p",{children:"EDTA Vacutainer"})]})}),n.jsx("li",{children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("h4",{className:"flex items-center",children:["Sample type",n.jsx("div",{className:"ml-1",children:n.jsx(m(),{src:a.Z.InfomIcon,alt:"information-icon"})})]}),n.jsx("p",{children:"EDTA Blood"})]})}),n.jsx("li",{children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("h4",{className:"flex items-center",children:["Sample volume",n.jsx("div",{className:"ml-1",children:n.jsx(m(),{src:a.Z.InfomIcon,alt:"information-icon"})})]}),n.jsx("p",{children:"1 ml"})]})}),n.jsx("li",{children:(0,n.jsxs)("div",{children:[n.jsx("h4",{className:"flex items-center",children:"Shipping Temperature & Sample Stability"}),n.jsx("div",{children:(0,n.jsxs)("ul",{className:"flex items-center gap-4",children:[n.jsx("li",{className:"tempera-box",children:(0,n.jsxs)("div",{children:[n.jsx("h4",{children:"S 2-8 C"}),n.jsx("p",{children:"Ambient"})]})}),n.jsx("li",{className:"tempera-box",children:(0,n.jsxs)("div",{children:[n.jsx("h4",{children:"A 25 C"}),n.jsx("p",{children:"1 Day"})]})}),n.jsx("li",{className:"tempera-box",children:(0,n.jsxs)("div",{children:[n.jsx("h4",{children:"R 28 C"}),n.jsx("p",{children:"1 Day"})]})}),n.jsx("li",{className:"tempera-box",children:(0,n.jsxs)("div",{children:[n.jsx("h4",{children:"F 20 C"}),n.jsx("p",{children:" "})]})})]})})]})}),n.jsx("li",{children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("h4",{className:"flex items-center",children:["Rejected, if any",n.jsx("div",{className:"ml-1",children:n.jsx(m(),{src:a.Z.InfomIcon,alt:"information-icon"})})]}),n.jsx("p",{children:"Qns,Hemolysed,clotted"})]})}),n.jsx("li",{children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("h4",{className:"flex items-center",children:["Collection instruction",n.jsx("div",{className:"ml-1",children:n.jsx(m(),{src:a.Z.InfomIcon,alt:"information-icon"})})]}),n.jsx("p",{children:"3 ml EDTA whole blood. Age, DOB, History of Blood transfusion in last 3 months, Parental/ family history of any abnormal Hb, History of requiring multiple or recurrent blood transfusion if any, all details TRF is mandatory."})]})})]})}),n.jsx(r.Z,{onClick:()=>h("2"),isOpen:s["2"],title:"Clinical Information",children:(0,n.jsxs)("ul",{className:"test-info",children:[n.jsx("li",{children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("h4",{className:"flex items-center",children:["Clinical Utility",n.jsx("div",{className:"ml-1",children:n.jsx(m(),{src:a.Z.InfomIcon,alt:"information-icon"})})]}),n.jsx("p",{className:"",children:"Diagnose and characterize abnormal hemoglobin variants. This assay is useful in the diagnosis of Beta Thalassemia. It quantitates the percent of fetal hemoglobin & HbA2 & assists in the diagnosis of disorders with elevated levels of HbF & HbA2.."})]})}),n.jsx("li",{children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("h4",{className:"flex items-center",children:["Clinical instruction",n.jsx("div",{className:"ml-1",children:n.jsx(m(),{src:a.Z.InfomIcon,alt:"information-icon"})})]}),n.jsx("p",{children:"Clinical History if any"})]})})]})}),n.jsx(r.Z,{onClick:()=>h("3"),isOpen:s["3"],title:"Reports",children:n.jsx("ul",{className:"test-info",children:n.jsx("li",{children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("h4",{className:"flex justify-between items-center",children:[(0,n.jsxs)("div",{className:"flex items-center",children:["Reports",n.jsx("div",{className:"ml-1",children:n.jsx(m(),{src:a.Z.InfomIcon,alt:"information-icon"})})]}),(0,n.jsxs)("div",{className:"flex items-center",children:[n.jsx("span",{children:"Last updated on"}),n.jsx("p",{className:"text-[#ABABAB] font-medium ml-1",children:"15-07-2024 12:42:55"})]})]}),(0,n.jsxs)("div",{className:"flex gap-x-10 mt-2",children:[(0,n.jsxs)("div",{className:"w-28",children:[n.jsx(m(),{src:a.Z.PDFImg,alt:"pdf-img"}),n.jsx("p",{children:"A0001_Abnormal HaemoglobinStudies HbVariantsBlood"})]}),(0,n.jsxs)("div",{className:"w-28",children:[n.jsx(m(),{src:a.Z.PDFImg,alt:"pdf-img"}),n.jsx("p",{children:"A0001_Abnormal HaemoglobinStudies HbVariantsBlood"})]})]})]})})})}),n.jsx(r.Z,{onClick:()=>h("4"),isOpen:s["4"],title:"Test Schedule",children:(0,n.jsxs)("ul",{className:"test-info",children:[n.jsx("li",{children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("h4",{className:"flex items-center",children:["Test schedule Days",n.jsx("div",{className:"ml-1",children:n.jsx(m(),{src:a.Z.InfomIcon,alt:"information-icon"})})]}),n.jsx("p",{children:"MO,TU,WE,TH,FR,SA"})]})}),n.jsx("li",{children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("h4",{className:"flex items-center",children:["Test schedule",n.jsx("div",{className:"ml-1",children:n.jsx(m(),{src:a.Z.InfomIcon,alt:"information-icon"})})]}),n.jsx("p",{children:"Daily: 9am and Next day 5pm"})]})}),n.jsx("li",{children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("h4",{className:"flex items-center",children:["Reported on",n.jsx("div",{className:"ml-1",children:n.jsx(m(),{src:a.Z.InfomIcon,alt:"information-icon"})})]}),n.jsx("p",{children:"Next day 5pm"})]})}),n.jsx("li",{children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("h4",{className:"flex items-center",children:["Sample retention",n.jsx("div",{className:"ml-1",children:n.jsx(m(),{src:a.Z.InfomIcon,alt:"information-icon"})})]}),n.jsx("p",{children:"3 Days"})]})})]})}),n.jsx(r.Z,{onClick:()=>h("5"),isOpen:s["5"],title:"Test Price & Other Details",children:(0,n.jsxs)("ul",{className:"test-info",children:[n.jsx("li",{children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("h4",{className:"flex items-center",children:["Test fees",n.jsx("div",{className:"ml-1",children:n.jsx(m(),{src:a.Z.InfomIcon,alt:"information-icon"})})]}),n.jsx("p",{children:"₹ 1060"})]})}),n.jsx("li",{children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("h4",{className:"flex items-center",children:["Category",n.jsx("div",{className:"ml-1",children:n.jsx(m(),{src:a.Z.InfomIcon,alt:"information-icon"})})]}),n.jsx("p",{children:"C"})]})}),n.jsx("li",{children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("h4",{className:"flex items-center",children:["Section name",n.jsx("div",{className:"ml-1",children:n.jsx(m(),{src:a.Z.InfomIcon,alt:"information-icon"})})]}),n.jsx("p",{children:"General Haematology"})]})}),n.jsx("li",{children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("h4",{className:"flex items-center",children:["Sub section name",n.jsx("div",{className:"ml-1",children:n.jsx(m(),{src:a.Z.InfomIcon,alt:"information-icon"})})]}),n.jsx("p",{children:" Thallassaemia Studies"})]})})]})})]})}),n.jsx("div",{className:" col-span-3",children:(0,n.jsxs)("div",{className:"md:inline-grid gap-5 md:block hidden ",children:[n.jsx("div",{children:n.jsx(m(),{src:a.Z.AdvertiseImg1,alt:"advertise"})}),n.jsx("div",{children:n.jsx(m(),{src:a.Z.AdvertiseImg2,alt:"advertise"})})]})})]})})]})]})},p=async e=>{let s=await c.Z.getMeta("test-details");return{props:{metaDetail:s?.Data||[]},revalidate:10}};l()}catch(e){l(e)}})},877:(e,s,i)=>{i.a(e,async(e,l)=>{try{i.d(s,{V:()=>t});var n=i(1566),r=i(9648),a=e([r]);let t=(r=(a.then?(await a)():a)[0]).default.create({baseURL:n.Z.API_BASE_URL});t.interceptors.request.use(e=>(e.headers["X-Access-Token"]=n.Z.X_ACCESS_TOKEN,e)),r.default.create({baseURL:n.Z.LIVE_API_BASE_URL}).interceptors.request.use(e=>e),t.interceptors.response.use(e=>e,e=>{let{status:s}=e.response??{};return Promise.reject(e)}),l()}catch(e){l(e)}})},986:(e,s,i)=>{i.a(e,async(e,l)=>{try{i.d(s,{Z:()=>t});var n=i(86),r=i(877),a=e([r]);r=(a.then?(await a)():a)[0];let t={getMeta:async e=>{try{let{data:s}=await r.V.get(n.Z.TEST_OVERVIEW,{params:{slug:e}});return s}catch(e){}}};l()}catch(e){l(e)}})},5244:(e,s)=>{var i;Object.defineProperty(s,"x",{enumerable:!0,get:function(){return i}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(i||(i={}))},6641:e=>{e.exports=require("next-seo")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},1175:e=>{e.exports=require("react-query")},997:e=>{e.exports=require("react/jsx-runtime")},1964:e=>{e.exports=import("@floating-ui/react")},8916:e=>{e.exports=import("@react-aria/focus")},7001:e=>{e.exports=import("@react-aria/interactions")},3258:e=>{e.exports=import("@reduxjs/toolkit")},1928:e=>{e.exports=import("@tanstack/react-virtual")},9648:e=>{e.exports=import("axios")},3291:e=>{e.exports=import("react-redux")},3590:e=>{e.exports=import("react-toastify")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var s=require("../webpack-runtime.js");s.C(e);var i=e=>s(s.s=e),l=s.X(0,[491,723,859,900],()=>i(322));module.exports=l})();