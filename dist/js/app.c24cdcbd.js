(function(){var t={2122:function(t,e,o){"use strict";var a=o(9242),n=o(3396);const r={id:"main-container","data-scroll-container":""},i=(0,n._)("div",{class:"hover-circle"},[(0,n._)("div",{class:"hover-circle-wrap"},[(0,n._)("div",{class:"hover-circle-in"},"Visit")])],-1);function s(t,e,o,a,s,l){const c=(0,n.up)("Loader"),d=(0,n.up)("Background"),u=(0,n.up)("Navigation"),m=(0,n.up)("HeroSection"),p=(0,n.up)("About"),v=(0,n.up)("Works"),g=(0,n.up)("Contact");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(c),(0,n._)("main",r,[s.refreshComponent?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(d,{key:0})),(0,n.Wm)(u),(0,n.Wm)(m),(0,n.Wm)(p),(0,n.Wm)(v),(0,n.Wm)(g)]),i],64)}var l=o(8552),c=o(5073);const d={id:"loading"},u=(0,n.uE)('<h2 data-v-25945679><span class="letter" data-v-25945679>W</span><span class="letter" data-v-25945679>E</span><span class="letter" data-v-25945679>L</span><span class="letter" data-v-25945679>C</span><span class="letter" data-v-25945679>O</span><span class="letter" data-v-25945679>M</span><span class="letter" data-v-25945679>E</span></h2>',1),m=[u];function p(t,e,o,a,r,i){return(0,n.wg)(),(0,n.iD)("div",d,m)}var v={name:"Loader"},g=o(89);const h=(0,g.Z)(v,[["render",p],["__scopeId","data-v-25945679"]]);var f=h;const b=t=>((0,n.dD)("data-v-94d47410"),t=t(),(0,n.Cn)(),t),_=(0,n.uE)('<div class="btn prlx__item" data-move="40" data-move-text="20" data-v-94d47410><div class="btn-fill" data-v-94d47410></div><div class="btn-text prlx__text" data-v-94d47410><div class="btn-bars" data-v-94d47410></div><div class="btn-text-inner" data-v-94d47410></div></div></div>',1),w=[_],y={class:"navigation"},x={class:"nav-inner"},k={class:"links-wrap"},S={class:"link-li"},z=b((()=>(0,n._)("div",{class:"btn-text"},[(0,n._)("div",{class:"btn-text-inner prlx__text"},"Home")],-1))),P=[z],T={class:"link-li"},C=b((()=>(0,n._)("div",{class:"btn-text"},[(0,n._)("div",{class:"btn-text-inner prlx__text"},"About")],-1))),L=[C],E={class:"link-li"},q=b((()=>(0,n._)("div",{class:"btn-text"},[(0,n._)("div",{class:"btn-text-inner prlx__text"},"Works")],-1))),M=[q],H={class:"link-li"},j=b((()=>(0,n._)("div",{class:"btn-text"},[(0,n._)("div",{class:"btn-text-inner prlx__text"},"Contact")],-1))),A=[j];function Z(t,e,o,a,r,i){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",{class:"btn-burger hamburger",onClick:e[0]||(e[0]=(...t)=>i.MenuHandle&&i.MenuHandle(...t))},w),(0,n._)("div",{class:"overlay",onClick:e[1]||(e[1]=(...t)=>i.MenuHandle&&i.MenuHandle(...t))}),(0,n._)("nav",y,[(0,n._)("div",x,[(0,n._)("ul",k,[(0,n._)("li",S,[(0,n._)("span",{class:"link prlx__item","data-move":"30","data-move-text":"20",onClick:e[2]||(e[2]=t=>i.MenuScrollTo(0,0,0))},P)]),(0,n._)("li",T,[(0,n._)("span",{class:"link prlx__item","data-move":"30","data-move-text":"20",onClick:e[3]||(e[3]=t=>i.MenuScrollTo("#razo-about",0,0))},L)]),(0,n._)("li",E,[(0,n._)("span",{class:"link prlx__item","data-move":"30","data-move-text":"20",onClick:e[4]||(e[4]=t=>i.MenuScrollTo("#works-section",0,0))},M)]),(0,n._)("li",H,[(0,n._)("span",{class:"link prlx__item","data-move":"30","data-move-text":"20",onClick:e[5]||(e[5]=t=>i.MenuScrollTo("#razo-contact",0,0))},A)])])])])],64)}var W={name:"Navigation",mounted(){document.addEventListener("keydown",(t=>{"Escape"===t.code&&document.querySelector(".hamburger").classList.contains("active")&&this.MenuHandle()}))},methods:{MenuHandle(){document.querySelector(".hamburger").classList.contains("active")?(document.querySelector(".hamburger").classList.remove("active"),document.querySelector("main").classList.remove("nav-active"),this.$scroll.start()):(document.querySelector(".hamburger").classList.add("active"),document.querySelector("main").classList.add("nav-active"),this.$scroll.stop())},MenuScrollTo(t){return this.$scroll.scrollTo(t,0,0),this.MenuHandle(),!1}}};const O=(0,g.Z)(W,[["render",Z],["__scopeId","data-v-94d47410"]]);var D=O;const I={id:"background",class:"background"},$=(0,n._)("canvas",{class:"particles"},null,-1),B=[$];function R(t,e,o,a,r,i){return(0,n.wg)(),(0,n.iD)("section",I,B)}var Y=o(1114),U=o(5461),F={name:"Background",mounted(){window.addEventListener("load",this.removeElem);const t=new Y.dpR,e=t.load("/cross.png"),o=(new U.XS,document.querySelector("canvas.particles")),a=new Y.xsS,n=new Y.u9r,r=1e3,i=new Float32Array(3*r);for(let _=0;_<3*r;_++)i[_]=5*(Math.random()-.5);n.setAttribute("position",new Y.TlE(i,3));const s=new Y.UY4({size:.016,map:e,transparent:!0,color:"#455ce9"}),l=new Y.woe(n,s);a.add(l);const c=new Y.cek(16777215,.1);c.position.x=2,c.position.y=3,c.position.z=4,a.add(c);const d={width:window.innerWidth,height:window.innerHeight};function u(){d.width=window.innerWidth,d.height=window.innerHeight,m.aspect=d.width/d.height,m.updateProjectionMatrix(),p.setSize(d.width,d.height),p.setPixelRatio(Math.min(window.devicePixelRatio,2))}window.addEventListener("resize",u);const m=new Y.cPb(75,d.width/d.height,.1,100);m.position.x=0,m.position.y=0,m.position.z=2,a.add(m);const p=new Y.CP7({canvas:o});p.setSize(d.width,d.height),p.setPixelRatio(Math.min(window.devicePixelRatio,2)),p.setClearColor(new Y.Ilk("#161616"));let v=500,g=500;function h(t){v=t.clientX,g=t.clientY}var f=new Y.SUY;let b=null;window.innerWidth>1023?(document.addEventListener("mousemove",h),b=()=>{var t=f.getElapsedTime();l.rotation.x=3e-5*t*-g,l.rotation.y=3e-5*t*-v,p.render(a,m),window.requestAnimationFrame(b)}):b=()=>{var t=f.getElapsedTime();l.rotation.x=3e-5*t*1e3,l.rotation.y=3e-5*t*700,p.render(a,m),window.requestAnimationFrame(b)},b()},methods:{removeElem(){document.querySelector(".dg.ac").remove()}}};const X=(0,g.Z)(F,[["render",R]]);var N=X;const G={id:"razo-hero","data-scroll-section":"","data-scroll-section-id":"section0"},J={class:"container hero-container","data-scroll":"","data-scroll-speed":"3"},Q=(0,n.uE)('<span class="hello-text razo-hero-animation">Hi, my name is</span><h1 class="razo-title"><span class="title-item"><span class="razo-hero-animation"> Razmik </span></span><span class="title-item"><span class="razo-hero-animation"> Matinyan </span></span></h1><p class="razo-about razo-hero-animation"> I create and develop websites with cool animations and interactions. Let&#39;s start work together! </p>',3),V={class:"razo-contact razo-hero-animation"},K=(0,n._)("div",{class:"btn-fill"},null,-1),tt=(0,n._)("span",{class:"btn-text minwidth"},[(0,n._)("span",{class:"btn-text-inner prlx__text"}," Write Me ")],-1),et=[K,tt];function ot(t,e,o,a,r,i){return(0,n.wg)(),(0,n.iD)("section",G,[(0,n._)("div",J,[Q,(0,n._)("div",V,[(0,n._)("button",{class:"btn bg-blue prlx__item",onClick:e[0]||(e[0]=t=>i.ToBlock("#razo-contact",3e3))},et)])])])}var at={name:"HeroSection",methods:{ToBlock(t,e){this.$scroll.scrollTo(t,{duration:e})}}};const nt=(0,g.Z)(at,[["render",ot]]);var rt=nt,it=o.p+"img/blob-1.9e68189d.svg",st=o.p+"img/blob-2.ef7f87ae.svg";const lt={id:"razo-about",class:"section","data-scroll-section":"","data-scroll-section-id":"section1"},ct=(0,n.uE)('<div class="container about-container container-flex about-container"><div class="about-left" data-scroll data-scroll-speed="2"><p class="razo-about-text first-text"> I am 20 years old Web Developer from Armenia. I work at Zeel Project for 2 years and i have worked on many projects with our team. I developed websites with different types, such as: Commercial websites, Web Platforms, Landing pages and etc. </p><p class="razo-about-text second-text"> Here are the tools that i use in projects: </p><ul class="razo-list"><li class="razo-about-text">HTML, CSS</li><li class="razo-about-text">JavaScript, jQuery, GSAP, Vue JS</li><li class="razo-about-text">PHP (CMS DataLife Engine)</li><li class="razo-about-text">MySQL</li></ul></div><div class="about-right" data-scroll data-scroll-speed="-5"><h2 class="circle prlx__item" data-move="60"><div class="circle-text prlx__text"><span class="to-split">About Me • About Me • About Me • About Me •</span></div></h2></div></div><div class="blob-1" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-2"><img src="'+it+'" alt="Blob 1"></div><div class="blob-2" data-scroll data-scroll-speed="4"><img src="'+st+'" alt="Blob 2"></div>',3),dt=[ct];function ut(t,e,o,a,r,i){return(0,n.wg)(),(0,n.iD)("section",lt,dt)}l.ZP.registerPlugin(c.i);var mt={name:"About",mounted(){this.$initSmoothScroll(c.i),this.initWordsSplit(),this.initScrollTrigger(),this.$addTextCircle("#razo-about",8.3),l.ZP.to("#razo-about .circle",{scrollTrigger:{trigger:"#razo-about",start:"top bottom",end:"bottom -1000px",scrub:!0},rotation:180})},unmounted(){this.$destroySmoothScroll()},methods:{initWordsSplit(){for(var t=document.querySelectorAll(".razo-about-text"),e=0;e<t.length;e++){var o=t.item(e);o.innerHTML=o.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g,'$1<span class="prlx__item"><span class="splited prlx__text"><span class="splited-in">$2</span></span></span>')}var a=document.querySelectorAll(".first-text .splited-in");a.forEach((t=>{"20"===t.innerHTML&&(t.style.color="#334BD3"),"Armenia."===t.innerHTML&&(t.style.color="#334BD3",t.innerHTML="<a style='color: #334BD3' href='https://en.wikipedia.org/wiki/Armenia' target='_blank'>"+t.innerHTML+"</a>"),"Zeel"!==t.innerHTML&&"Project"!==t.innerHTML||(t.style.color="#334BD3",t.innerHTML="<a style='color: #334BD3' href='https://zeelproject.com' target='_blank'>"+t.innerHTML+"</a>")}))},initScrollTrigger(){let t=document.querySelector("#razo-about"),e=document.querySelectorAll(".razo-about-text");e.forEach((function(e,o){let a=e.querySelectorAll(".razo-about-text .splited-in");var n=l.ZP.timeline({scrollTrigger:{trigger:t,toggleActions:"play none none reset",start:"50px 100%",end:"100% 0%"}});n.from(a,{y:"100%",stagger:o/o*2*.02,ease:"power3.out",duration:1,delay:.2})}))}}};const pt=(0,g.Z)(mt,[["render",ut]]);var vt=pt,gt=o(7139),ht=o.p+"img/logo-black.5c805562.svg";const ft=(0,n.uE)('<section id="razo-works" class="section works-section" data-scroll-section data-scroll-section-id="section2" data-v-8ebd6904><div class="container works-container" data-scroll data-scroll-speed="-6" data-v-8ebd6904><h2 class="circle prlx__item" data-move="60" data-v-8ebd6904><div class="circle-text prlx__text" data-v-8ebd6904><span class="to-split" data-v-8ebd6904>Works • Works • Works • Works • Works •</span></div></h2><div class="svg-wrap" data-v-8ebd6904><div class="svg-path" data-v-8ebd6904><svg id="mysvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448.51 93.39" data-v-8ebd6904><g id="Слой_2" data-name="Слой 2" data-v-8ebd6904><g id="path" data-v-8ebd6904><path class="pathline" d="M444.41,24.06c-21.67-1.66-125.83-9-161.65.31C271.5,27.3,249,37.68,242.14,47.05c-4.62,6.3-9.74,23.57-6.33,30.6,2.7,5.57,12.79,14.24,29.41,14.24s19.2-5.36,23.34-9.49c3.5-3.51,5.58-12.91,6.33-17.81.58-3.81-1.53-11.35-3.56-14.63-3.45-5.57-12.54-12.06-18.07-15.56C266.42,30.07,252.8,21.12,245.31,18c-7.94-3.25-24.69-7.76-33.24-8.44C202,8.82,181.78,11,172,13.3c-7.44,1.75-21.2,8.77-28.49,11.07s-22.33,7-30.06,7.39c-9.45.48-26.09-2.9-34.55-7.12C72.05,21.22,54.24,13.57,50,10.79c-5.44-3.57-15-8.7-21.5-9.1C23.05,1.36,9.17,1.54,3,1.64" data-v-8ebd6904></path></g></g></svg><div class="circled-logo" data-v-8ebd6904><img class="logo-for-path" src="'+ht+'" alt="Black R Logo" data-v-8ebd6904></div></div></div></div></section>',1),bt={id:"works-section",class:"section works-section","data-scroll-section":"","data-scroll-section-id":"section3"},_t={class:"container works-wrapper works-container"},wt={class:"works-list reset"},yt={class:"work-in"},xt=["href"],kt={class:"work-row image-row"},St=["src","alt"],zt={class:"work-row name-row"},Pt={class:"work-title"},Tt={class:"work-row type-row"},Ct={class:"work-type"};function Lt(t,e,o,a,r,i){return(0,n.wg)(),(0,n.iD)(n.HY,null,[ft,(0,n._)("section",bt,[(0,n._)("div",_t,[(0,n._)("ul",wt,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.works,(t=>((0,n.wg)(),(0,n.iD)("li",{key:t.id,class:(0,gt.C_)(["work",t.name])},[(0,n._)("div",yt,[(0,n._)("a",{href:t.link,class:"work-link",target:"_blank"},[(0,n._)("div",kt,[(0,n._)("div",{class:"image-wrapper",style:(0,gt.j5)(`background-color:${t.color}`)},[(0,n._)("img",{src:i.getImgUrl(t.id+".jpg"),alt:t.name},null,8,St)],4)]),(0,n._)("div",zt,[(0,n._)("h4",Pt,(0,gt.zw)(t.name),1)]),(0,n._)("div",Tt,[(0,n._)("span",Ct,(0,gt.zw)(t.type),1)])],8,xt)])],2)))),128))])])])],64)}var Et=o(4870),qt=o(7586);l.ZP.registerPlugin(c.i,qt.X);var Mt={name:"Works",setup(){const t=(0,Et.iH)([{id:1,name:"Personal",type:"Solo",link:"https://razmatinyan.com/",color:"#6129cb"},{id:2,name:"Zeel Portfolio",type:"Teamwork",link:"https://portfolio.zeelproject.com/",color:"#383838"},{id:3,name:"Zeel Blog",type:"Teamwork",link:"https://blog.zeelproject.com/",color:"#cfcfcf"},{id:4,name:"Toon Project",type:"Teamwork",link:"https://toonproject.com/",color:"#2a4383"},{id:5,name:"Decoline",type:"Teamwork",link:"https://decoline.org/",color:"#49854c"},{id:6,name:"Sisters",type:"Teamwork",link:"https://sistersdresses.com/",color:"#956262"},{id:7,name:"Transport Arm",type:"Solo",link:"https://transport-arm.am/",color:"#7a3a3a"}]);return{works:t}},mounted(){this.$initSmoothScroll(c.i),this.$addTextCircle("#razo-works",9),l.ZP.to("#razo-works .circle",{scrollTrigger:{trigger:"#razo-works",start:"top bottom",end:"bottom top",scrub:!0},rotation:180}),l.ZP.timeline({defaults:{duration:1,ease:"none"},scrollTrigger:{trigger:"#razo-works",scrub:1,start:"100px 100%",end:"100% 30%"}}).from(".circled-logo",{motionPath:{path:".pathline",align:".pathline",autoRotate:180,offsetX:0,offsetY:0}});var t=l.ZP.timeline({scrollTrigger:{trigger:document.querySelector(".work"),toggleActions:"play",start:"top center",end:"center bottom"}});t.from("#works-section .work",{y:"80px",opacity:0,stagger:.25,ease:"all .7s cubic-bezier(.7, 0, .3, 1)",duration:.4,delay:0})},unmounted(){this.$destroySmoothScroll()},methods:{getImgUrl(t){return o(8796)("./"+t)}}};const Ht=(0,g.Z)(Mt,[["render",Lt],["__scopeId","data-v-8ebd6904"]]);var jt=Ht;const At=t=>((0,n.dD)("data-v-44731608"),t=t(),(0,n.Cn)(),t),Zt=At((()=>(0,n._)("footer",{id:"razo-contact",class:"section contact-section","data-scroll-section":"","data-scroll-section-id":"section4"},[(0,n._)("div",{class:"container contact-container","data-scroll":"","data-scroll-speed":"-4"},[(0,n._)("h2",{class:"form-title"},[(0,n.Uk)("Let's start "),(0,n._)("br"),(0,n.Uk)(" work together")]),(0,n._)("div",{class:"circle prlx__item","data-move":"60"},[(0,n._)("div",{class:"circle-text prlx__text"},[(0,n._)("span",{class:"to-split"},"Contact • Contact • Contact • Contact •")])]),(0,n._)("div",{class:"form-wrapper"},[(0,n._)("div",{class:"form-left"},[(0,n._)("form",{id:"razo-form",action:"https://formspree.io/f/xrgvewgr",method:"POST"},[(0,n._)("div",{class:"form-row contact-animation"},[(0,n._)("label",null,"What's you name?"),(0,n._)("input",{type:"text",class:"field",name:"name",required:"",placeholder:"Razmik Matinyan *"})]),(0,n._)("div",{class:"form-row contact-animation"},[(0,n._)("label",null,"What's your email?"),(0,n._)("input",{type:"email",class:"field",name:"email",required:"",placeholder:"razmatinyan28@gmail.com *"})]),(0,n._)("div",{class:"form-row contact-animation"},[(0,n._)("label",null,"Your message"),(0,n._)("textarea",{type:"text",class:"field",name:"message",rows:"7",required:"",placeholder:"Hello, can you help me with... *"})]),(0,n._)("div",{class:"form-button"},[(0,n._)("div",{class:"button-wrapper","data-scroll":"","data-scroll-speed":"-2","data-scroll-direction":"horizontal"},[(0,n._)("button",{id:"razo-form-button",class:"btn bg-blue prlx__item","data-move":"50","data-move-text":"30"},[(0,n._)("div",{class:"btn-fill"}),(0,n._)("span",{class:"btn-text"},[(0,n._)("span",{class:"btn-text-inner prlx__text"}," Send ")])])])])])]),(0,n._)("div",{class:"form-right"},[(0,n._)("h3",{class:"contact-animation"},"Contact Details"),(0,n._)("ul",{class:"link-list"},[(0,n._)("li",{class:"link contact-animation"},[(0,n._)("a",{href:"mailto:razmatinyan28@gmail.com",class:"prlx__item"},[(0,n._)("span",{class:"btn-text prlx__text"},[(0,n._)("span",{class:"btn-text-inner"},"razmatinyan28@gmail.com")])])]),(0,n._)("li",{class:"link contact-animation"},[(0,n._)("a",{href:"tel:+37498109918",class:"prlx__item"},[(0,n._)("span",{class:"btn-text prlx__text"},[(0,n._)("span",{class:"btn-text-inner"},"+374 98 109 918")])])])]),(0,n._)("h3",{class:"contact-animation"},"Social"),(0,n._)("ul",{class:"link-list"},[(0,n._)("li",{class:"link contact-animation"},[(0,n._)("a",{href:"https://github.com/razmatinyan",class:"prlx__item",target:"_blank"},[(0,n._)("span",{class:"btn-text prlx__text"},[(0,n._)("span",{class:"btn-text-inner"},"Github")])])])])])])])],-1))),Wt=At((()=>(0,n._)("div",{class:"footer-bottom","data-scroll-section":"","data-scroll-section-id":"section5"},[(0,n._)("p",null,"© Razmik Matinyan")],-1)));function Ot(t,e,o,a,r,i){return(0,n.wg)(),(0,n.iD)(n.HY,null,[Zt,Wt],64)}var Dt=o(2492),It=o.n(Dt);l.ZP.registerPlugin(c.i);var $t={name:"Contact",mounted(){if(this.$initSmoothScroll(c.i),this.$addTextCircle("#razo-contact",9),document.getElementById("razo-form").addEventListener("submit",this.FormHandler),l.ZP.to("#razo-contact .circle",{scrollTrigger:{trigger:"#razo-contact",start:"top bottom",end:"bottom top",scrub:!0},rotation:180}),document.querySelectorAll(".field").forEach(((t,e)=>{t.addEventListener("input",(function(){""!==this.value?this.previousSibling.style.opacity=".4":this.previousSibling.style.opacity="1"}))})),window.innerWidth<2560){var t=l.ZP.timeline({scrollTrigger:{trigger:document.querySelector("#razo-contact"),toggleActions:"play none none reverse",start:"top center",end:"center bottom"}});t.from("#razo-contact .contact-animation",{y:"100px",opacity:0,stagger:.25,ease:".7s cubic-bezier(.7, 0, .3, 1)",duration:.4,delay:0})}},methods:{async FormHandler(t){t.preventDefault();var e=document.getElementById("razo-form"),o=new FormData(t.target);fetch(t.target.action,{method:e.method,body:o,headers:{Accept:"application/json"}}).then((t=>{t.ok?(It().fire("Thank you!","I will answer you as soon as possible!","success"),e.reset()):It().fire({icon:"error",title:"Oops...",text:"There was a problem submitting your form!"})})).catch((t=>{It().fire({icon:"error",title:"Oops...",text:"There was a problem submitting your form!"})}))}}};const Bt=(0,g.Z)($t,[["render",Ot],["__scopeId","data-v-44731608"]]);var Rt=Bt;l.ZP.registerPlugin(c.i);var Yt={name:"App",components:{Loader:f,Navigation:D,Background:N,HeroSection:rt,About:vt,Works:jt,Contact:Rt},data(){return{refreshInterval:null,refreshComponent:!1}},mounted(){let t=document.querySelectorAll(".razo-hero-animation");t.forEach((t=>{t.style.transform="translateY(100px)",t.style.opacity="0"})),this.$scroll.stop(),this.$nextTick((()=>{var t=l.ZP.timeline();t.to("html",{"--pseudo-width":"100%",duration:2,delay:.8}),t.to("#loading h2 .letter",{ease:"Power3.easeOut",y:0,stagger:.1,duration:2,delay:0},"-=1.6"),t.to("#loading h2 .letter",{ease:"Power3.easeOut",scale:0,rotate:"-35",stagger:.05,duration:.8,delay:0}),t.to("#loading",{ease:"Power4.easeInOut",duration:1,top:"calc(-100%)",delay:0,onComplete:()=>{document.querySelector("#loading").style.opacity=0}},"-=.4"),t.from("#main-container",{ease:"Power4.easeOut",top:"80%",duration:.8,onComplete:()=>{document.querySelector("#main-container").style.position="initial",this.$initSmoothScroll(c.i),this.$scroll.start();const t=document.querySelectorAll(".c-scrollbar");t.length>1&&t[0].remove()}},"-=.7"),t.to(".razo-hero-animation",{y:0,opacity:1,stagger:.2,ease:"power3.out",duration:.4,delay:0})})),this.initButtonsInteractions(),this.initParallaxInteractions(),this.initStickyButton(),this.refreshInterval=setInterval((()=>{this.refreshComponent=!0,setTimeout((()=>{this.refreshComponent=!1}),1)}),6e4),console.log("%c © Razmik Matinyan ","background: linear-gradient(to right, #455CE9, #334BD3); padding:5px; font-size: 12px; color: #ffffff"),console.log("%c Website is made by Razmik Matinyan ","background: linear-gradient(to right, #455CE9, #334BD3); padding:5px; font-size: 12px; color: #ffffff"),console.log("%c Some UI elements and ideas are inspired and taken from https://dennissnellenberg.com/ ","background: linear-gradient(to right, #455CE9, #334BD3); padding:5px; font-size: 12px; color: #ffffff")},unmounted(){this.$destroySmoothScroll(),clearInterval(this.refreshInterval)},methods:{initButtonsInteractions(){var t=document.querySelectorAll(".btn");t.forEach((t=>{t.addEventListener("mouseenter",(function(){l.ZP.to(this.querySelector(".btn-fill"),{startAt:{y:"76%"},y:"0%",ease:"Power2.easeInOut"})})),t.addEventListener("mouseleave",(function(){l.ZP.to(this.querySelector(".btn-fill"),{y:"-76%",ease:"Power2.easeInOut"})}))}))},initParallaxInteractions(){if(window.innerWidth>1024){var t=20,e=10,o=document.querySelectorAll(".prlx__item");function a(o){var a=o.currentTarget,n=a.getBoundingClientRect(),r=a.getAttribute("data-move")??t,i=a.getAttribute("data-move-text")??e;l.ZP.to(a,{x:((o.clientX-n.left)/a.offsetWidth-.7)*r,y:((o.clientY-n.top)/a.offsetHeight-.7)*r,ease:"power3.easeOut"}),l.ZP.to(this.querySelector(".prlx__text"),{x:((o.clientX-n.left)/a.offsetWidth-.7)*i,y:((o.clientY-n.top)/a.offsetHeight-.7)*i,ease:"power3.easeOut"})}o.forEach((t=>{t.addEventListener("mousemove",a),t.addEventListener("mouseleave",(function(t){l.ZP.to(t.currentTarget,{x:0,y:0,ease:"elastic.easeOut"}),l.ZP.to(this.querySelector(".prlx__text"),{x:0,y:0,ease:"elastic.easeOut"})}))}))}},initStickyButton(){if(window.innerWidth>540){var t=document.querySelector(".hover-circle"),e=0,o=0,a=0,n=0;document.addEventListener("mousemove",(function(t){a=t.clientX,n=t.clientY})),l.ZP.to({},.01,{repeat:-1,onRepeat:function(){e+=(a-e)/4,o+=(n-o)/4,l.ZP.set(t,{css:{left:e,top:o}})}}),document.querySelectorAll("#works-section .work-link").forEach((t=>{t.addEventListener("mouseenter",(function(){document.querySelector(".hover-circle").classList.add("active")})),t.addEventListener("mouseleave",(function(){document.querySelector(".hover-circle").classList.remove("active")})),t.addEventListener("mousedown",(function(t){document.querySelector(".hover-circle").classList.add("clicked")})),t.addEventListener("mouseup",(function(){document.querySelector(".hover-circle").classList.remove("clicked")}))}))}}}};const Ut=(0,g.Z)(Yt,[["render",s]]);var Ft=Ut,Xt=o(9057),Nt={install(t,e){let o;t.config.globalProperties.$initSmoothScroll=function(e){o=new Xt.ZP({el:document.querySelector("[data-scroll-container]"),smooth:!0,smartphone:{smooth:!0},tablet:{smooth:!0}}),o.stop(),window.onresize=o.update(),o.on("scroll",(()=>e.update())),e.scrollerProxy("[data-scroll-container]",{scrollTop(t){return t?o.scrollTo(t,0,0):o.scroll.instance.scroll.y},getBoundingClientRect(){return{top:0,left:0,width:window.innerWidth,height:window.innerHeight}},pinType:document.querySelector("[data-scroll-container]").style.transform?"transform":"fixed"}),e.defaults({scroller:document.querySelector("[data-scroll-container]")});const a=document.querySelectorAll(".c-scrollbar");a.length>1&&a[0].remove(),e.addEventListener("refresh",(()=>o.update())),e.refresh(),t.config.globalProperties.$scroll=o},t.config.globalProperties.$destroySmoothScroll=function(){this.$scroll.destroy()}}},Gt={install(t,e){t.config.globalProperties.$addTextCircle=function(t,e){const o=document.querySelectorAll(t+" .circle");o.forEach((t=>{var o=t.querySelector(".to-split");o.innerHTML=o.innerText.split("").map(((t,o)=>`<span style="transform: rotate(${o*e}deg)">${t}</span>`)).join("")}))}}};l.ZP.registerPlugin(c.i);const Jt=(0,a.ri)(Ft);Jt.use(Nt).use(Gt).mount("#raz")},8796:function(t,e,o){var a={"./1.jpg":2569,"./2.jpg":4696,"./3.jpg":8894,"./4.jpg":8299,"./5.jpg":1945,"./6.jpg":2586,"./7.jpg":3486};function n(t){var e=r(t);return o(e)}function r(t){if(!o.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=r,t.exports=n,n.id=8796},2569:function(t,e,o){"use strict";t.exports=o.p+"img/1.11eccb39.jpg"},4696:function(t,e,o){"use strict";t.exports=o.p+"img/2.38f7822f.jpg"},8894:function(t,e,o){"use strict";t.exports=o.p+"img/3.ecb3a4b0.jpg"},8299:function(t,e,o){"use strict";t.exports=o.p+"img/4.7244221c.jpg"},1945:function(t,e,o){"use strict";t.exports=o.p+"img/5.f5b6eff4.jpg"},2586:function(t,e,o){"use strict";t.exports=o.p+"img/6.ae0b1313.jpg"},3486:function(t,e,o){"use strict";t.exports=o.p+"img/7.fe0aa07b.jpg"}},e={};function o(a){var n=e[a];if(void 0!==n)return n.exports;var r=e[a]={exports:{}};return t[a].call(r.exports,r,r.exports,o),r.exports}o.m=t,function(){var t=[];o.O=function(e,a,n,r){if(!a){var i=1/0;for(d=0;d<t.length;d++){a=t[d][0],n=t[d][1],r=t[d][2];for(var s=!0,l=0;l<a.length;l++)(!1&r||i>=r)&&Object.keys(o.O).every((function(t){return o.O[t](a[l])}))?a.splice(l--,1):(s=!1,r<i&&(i=r));if(s){t.splice(d--,1);var c=n();void 0!==c&&(e=c)}}return e}r=r||0;for(var d=t.length;d>0&&t[d-1][2]>r;d--)t[d]=t[d-1];t[d]=[a,n,r]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var a in e)o.o(e,a)&&!o.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.p="/"}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,r,i=a[0],s=a[1],l=a[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(l)var d=l(o)}for(e&&e(a);c<i.length;c++)r=i[c],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(d)},a=self["webpackChunkrazmatinyan_com"]=self["webpackChunkrazmatinyan_com"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=o.O(void 0,[998],(function(){return o(2122)}));a=o.O(a)})();
//# sourceMappingURL=app.c24cdcbd.js.map