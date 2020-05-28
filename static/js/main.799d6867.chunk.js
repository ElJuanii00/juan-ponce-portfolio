(this["webpackJsonppersonal-portfolio"]=this["webpackJsonppersonal-portfolio"]||[]).push([[0],{110:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(11),l=t.n(o),i=t(4),c=t(10),m=t(133),s=t(93),d=t(145),p=t(148),f=t(59),g=t(41),u=t(134),b=t(136),E=t(137),h=t(138),y=t(46),v=t(139),w=t(147),N=t(70);var x=function(e){var a=Object(r.useState)(0),t=Object(g.a)(a,2)[1],n=0,o=Object(N.throttle)((function(){var a=(document.documentElement||document.body).scrollTop;t((function(e){return n=e,a})),e({previousScrollTop:n,currentScrollTop:a})}),250);Object(r.useEffect)((function(){return window.addEventListener("scroll",o),function(){return window.removeEventListener("scroll",o)}}),[o])},k=t(78),I=t.n(k),S=t(79),j=t.n(S),C=t(74),W=t.n(C),O=t(75),T=t.n(O),D=t(76),B=t.n(D),z=t(77),A=t.n(z),L=Object(m.a)((function(e){var a;return a={header:{display:"flex",justifyContent:"space-between",alignItems:"center",position:"fixed",padding:"3rem",height:"3rem",top:"0",left:"0",right:"0",zIndex:"1200",color:"white",transform:"translateY(0)",transition:"transform 0.3s ease"},headerBackgroundShow:{backgroundColor:"#111"},headerNavListWrapper:{display:"flex",padding:"0","& li":{listStyle:"none",margin:"0 1rem",padding:"0",fontWeight:"bold",cursor:"pointer"}},headerNavListItem:{fontWeight:"bold",color:"#fff",transition:"450ms all","&:hover":{color:"#56d8b7"}},headerNavHamburgerMenu:{display:"none",color:"white"},shadow:{boxShadow:"0 9px 9px -9px rgba(0, 0, 0, 1)"},hidden:{transform:"translateY(-100%)"}},Object(i.a)(a,e.breakpoints.down("md"),{header:{padding:"3rem 2rem"}}),Object(i.a)(a,e.breakpoints.down("xs"),{headerNavListWrapper:{display:"none"},headerNavHamburgerMenu:{display:"block"},headerNavDrawerMenu:{position:"relative","& .MuiDrawer-paperAnchorLeft":{width:"100%",backgroundColor:"#111"},"& .MuiList-padding":{padding:"0",margin:"4rem 0"},"& .MuiListItem-gutters":{padding:"1rem 2rem"}}}),a})),F=Object(c.h)((function(e){var a=L(),t=n.a.useState({top:!1,left:!1,bottom:!1,right:!1}),o=Object(g.a)(t,2),l=o[0],c=o[1],m=Object(r.useState)(!1),s=Object(g.a)(m,2),d=s[0],p=s[1],N=Object(r.useState)(!1),k=Object(g.a)(N,2),S=k[0],C=k[1];x((function(e){var a=e.previousScrollTop,t=e.currentScrollTop,r=a<t,n=t>80;C(t>2),setTimeout((function(){p(r&&n)}),400)}));var O=S?a.shadow:null,D=d?a.hidden:null,z=function(e,a){return function(t){c(Object(f.a)(Object(f.a)({},l),{},Object(i.a)({},e,a)))}};return n.a.createElement("header",{className:"".concat(a.header," ").concat(O," ").concat(D," ").concat(""===e.location.pathname.substr(1)?null:a.headerBackgroundShow)},n.a.createElement(y.a,{className:a.headerNavListItem,onClick:function(){return e.history.push("/")},style:{fontWeight:"900",cursor:"pointer"},variant:"subtitle1"},"Juan Ponce"),n.a.createElement("nav",null,n.a.createElement("ul",{className:a.headerNavListWrapper},n.a.createElement("li",{onClick:function(){return e.history.push("/")}},n.a.createElement(y.a,{className:a.headerNavListItem,variant:"subtitle1"},"Home")),n.a.createElement("li",{onClick:function(){return e.history.push("/resume")}},n.a.createElement(y.a,{className:a.headerNavListItem,variant:"subtitle1"},"Resume")),n.a.createElement("li",{onClick:function(){return e.history.push("/works")}},n.a.createElement(y.a,{className:a.headerNavListItem,variant:"subtitle1"},"Works")),n.a.createElement("li",{onClick:function(){return e.history.push("/contact")}},n.a.createElement(y.a,{className:a.headerNavListItem,variant:"subtitle1"},"Contact"))),["left"].map((function(t){return n.a.createElement(n.a.Fragment,{key:t},n.a.createElement(v.a,{className:a.headerNavHamburgerMenu,onClick:z(t,!0)},n.a.createElement(I.a,{style:{color:"white"}})),n.a.createElement(w.a,{className:a.headerNavDrawerMenu,anchor:t,open:l[t],onClose:z(t,!1)},n.a.createElement(v.a,{onClick:z(t,!1),style:{color:"white",position:"absolute",right:"0",margin:"1rem 1rem 0 0"}},n.a.createElement(j.a,null)),function(a){return n.a.createElement("div",{role:"presentation",onClick:z(a,!1),onKeyDown:z(a,!1)},n.a.createElement(u.a,null,["Home","Resume","Works","Contact"].map((function(a,t){return n.a.createElement(b.a,{onClick:function(){return e.history.push("Home"!==a?a.toLowerCase():"/")},button:!0,key:a},n.a.createElement(E.a,{style:{color:"white"}},0===t?n.a.createElement(W.a,null):1===t?n.a.createElement(T.a,null):2===t?n.a.createElement(B.a,null):n.a.createElement(A.a,null)),n.a.createElement(h.a,{style:{color:"white"},primary:a}))}))))}(t)))}))))})),P=t(140),M=t(80),G=t.n(M),H=t(81),R=t.n(H),J=t(82),q=t.n(J),U=t(83),K=t.n(U),Q=Object(m.a)((function(e){return Object(i.a)({footer:Object(i.a)({height:"0px",display:"flex",justifyContent:"space-between",alignItems:"flex-end",position:"fixed",bottom:"3rem",left:"3rem",right:"3rem",zIndex:"1000",color:"#fff"},e.breakpoints.down("md"),{position:"absolute"}),footerNav:{display:"flex",flexDirection:"column"},footerNavListWrapper:{display:"flex",flexDirection:"column",margin:"0",marginBottom:"-0.75rem",padding:"0",position:"relative","& li":{listStyle:"none"}},footerNavListItemLabel:{display:"flex",alignItems:"center",transformOrigin:"100% 0",position:"absolute",right:"0",lineHeight:"3rem",transform:"rotate(90deg)","&:after":{content:"''",right:"0",width:"50px",height:"1px",background:"#fff",margin:"0 0 0 1rem"}},footerNavListItemIcon:{color:"#fff",transition:"450ms all","&:hover":{color:"#56d8b7"}}},e.breakpoints.down("md"),{footerEMail:{display:"none"},footerNavListItemLabel:{display:"none"},footer:{bottom:"2rem",left:"2rem",right:"2rem",justifyContent:"flex-end"}})})),X=function(){var e=Q(),a=Object(c.g)();return n.a.createElement(p.a,{className:e.footer},n.a.createElement(y.a,{className:e.footerEMail,variant:"body2"},"E: me.juanponce@gmail.com"),n.a.createElement("nav",{className:a.isExact?e.footerNav:e.disable},n.a.createElement(y.a,{className:e.footerNavListItemLabel,variant:"body2"},"Follow Me"),n.a.createElement("ul",{className:e.footerNavListWrapper},n.a.createElement("li",null,n.a.createElement(P.a,{href:"https://www.linkedin.com/in/eljuanii00/"},n.a.createElement(v.a,{className:e.footerNavListItemIcon},n.a.createElement(G.a,null)))),n.a.createElement("li",null,n.a.createElement(P.a,{href:"https://www.instagram.com/eljuanii00/"},n.a.createElement(v.a,{className:e.footerNavListItemIcon},n.a.createElement(R.a,null)))),n.a.createElement("li",null,n.a.createElement(P.a,{href:"https://twitter.com/ElJuanii00/"},n.a.createElement(v.a,{className:e.footerNavListItemIcon},n.a.createElement(q.a,null)))),n.a.createElement("li",null,n.a.createElement(P.a,{href:"https://www.youtube.com/channel/UCOdGLEz1OWAHdEFdLb0lk9Q"},n.a.createElement(v.a,{className:e.footerNavListItemIcon},n.a.createElement(K.a,null)))))))},Y=function(e){var a=e.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement(F,null),a,n.a.createElement(X,null))},_=t(84),$=t.n(_),V=Object(m.a)((function(e){var a;return a={heroImage:{position:"absolute",backgroundSize:"cover",top:"0",left:"0",width:"100%",height:"100%",transition:"1000ms all","&::before":{position:"absolute",content:"''",top:"0",left:"0",right:"0",bottom:"0",backgroundColor:"rgba(0,0,0,0.20)",transition:"1000ms all"}},imageFigure:{position:"absolute",margin:"0",top:"0",left:"0",right:"0",bottom:"0","& img":{clipPath:"polygon(30% 0, 100% 25%, 60% 100%, 0 90%)",marginTop:"-2rem",marginLeft:"3rem",width:"56vw",height:"80vh",objectFit:"cover"}},heroPolygonDisabled:{clipPath:"polygon(0 0,20% 0,20% 0,40% 0,40% 0,60% 0,60% 0,80% 0,80% 0,100% 0,100% 0,100% 100%,100% 100%,80% 100%,80% 100%,60% 100%,60% 100%,40% 100%,40% 100%,20% 100%,20% 100%,0 100%)"},heroPolygonActive:{clipPath:"polygon(0 0,20% 0,20% 100%,40% 100%,40% 0,60% 0,60% 100%,80% 100%,80% 0,100% 0,100% 0,100% 100%,100% 0,80% 0,80% 100%,60% 100%,60% 0,40% 0,40% 100%,20% 100%,20% 0,0 0)"},heroHeader:{position:"absolute",top:"60vh",left:"50vw",color:"#fff",wordBreak:"break-word",wordWrap:"break-word",fontSize:"1.2rem",maxWidth:"27rem"},heroDetail:{color:"#fff",position:"absolute",left:"22%",bottom:"3rem",fontSize:"5rem",lineHeight:"4.5rem",textAlign:"center"}},Object(i.a)(a,e.breakpoints.down("sm"),{heroDetail:{display:"none"},imageFigure:{"& img":{clipPath:"none",marginTop:"0",marginLeft:"0",width:"100%",height:"100%",position:"relative"},"&:after":{content:"''",left:"0",right:"0",top:"0",bottom:"0",position:"absolute",background:"linear-gradient(to top,rgba(0,0,0,0.75) 5%, rgba(0,0,0,0))"}},heroHeader:{left:"3rem",top:"initial",bottom:"3rem",right:"6rem",display:"block",fontWeight:"normal"},heroPolygonDisabled:{clipPath:"polygon(0 0, 100% 0, 100% 50%, 100% 50%, 100% 100%, 0 100%, 0 50%, 0 50%)"},heroPolygonActive:{clipPath:"polygon(100% 0, 100% 0, 100% 50%, 0 50%, 0 100%, 0 100%, 0 50%, 100% 50%)"}}),Object(i.a)(a,e.breakpoints.down("xs"),{heroHeader:{left:"2rem",top:"65vh",fontSize:"1rem",bottom:"2rem"},heroDetail:{display:"block",left:"2rem",bottom:"2rem",fontSize:"1.2rem",fontWeight:"bolder",lineHeight:"initial"},imageFigure:{overflow:"hidden","& img":{clipPath:"polygon(25% 0,100% 25%,80% 100%,0 85%)",marginTop:"0",marginLeft:"-1rem",width:"110vw",height:"62vh"},"&:after":{content:""}}}),a})),Z=function(){var e=V();return n.a.createElement(n.a.Fragment,null,n.a.createElement(p.a,{position:"absolute",top:0,left:0,right:0,bottom:0},n.a.createElement("figure",{className:e.imageFigure},n.a.createElement("img",{src:$.a,alt:""}))),n.a.createElement(p.a,null,n.a.createElement(y.a,{className:e.heroHeader,variant:"h1"},"Hello, I'm ",n.a.createElement("strong",{style:{color:"#56D8B7"}},"Juan Ponce"),", UX/UI Designer and Frontend Developer from GDL, MEX."),n.a.createElement(y.a,{className:e.heroDetail,variant:"body1"},"I code cool ",n.a.createElement("strong",{style:{color:"#56D8B7"}},"websites"))))},ee=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(Z,null))},ae=t(150),te=Object(m.a)((function(e){var a,t;return{breadcrumbs:{width:"100%",height:"100vh"},breadcrumbsTitle:(a={color:"white",fontWeight:"bold",textTransform:"capitalize",position:"absolute",top:"0",bottom:"0",left:"0",right:"0",display:"flex",alignItems:"center",justifyContent:"center"},Object(i.a)(a,e.breakpoints.down("sm"),{fontSize:"3rem"}),Object(i.a)(a,e.breakpoints.down("xs"),{fontSize:"2rem"}),a),breadcrumbsWrapper:(t={display:"flex",justifyContent:"center",position:"absolute",left:"0",right:"0",bottom:"3rem"},Object(i.a)(t,e.breakpoints.down("md"),{bottom:"2rem",left:"2rem",justifyContent:"flex-start"}),Object(i.a)(t,"& li",{color:"rgba(255,255,255,.5)"}),t)}})),re=Object(c.h)((function(e){var a=te(),t=Object(c.g)();return n.a.createElement(n.a.Fragment,null,n.a.createElement(p.a,{className:a.breadcrumbs},n.a.createElement(y.a,{className:a.breadcrumbsTitle,variant:"h2"},t.url.substr(1)),n.a.createElement(ae.a,{className:a.breadcrumbsWrapper,"aria-label":"breadcrumb"},n.a.createElement(P.a,{style:{color:"white",cursor:"pointer",fontWeight:"bold"},href:"",onClick:function(){return e.history.push("/")}},"Home"),n.a.createElement(y.a,{style:{textTransform:"capitalize",fontWeight:"bold"},color:"inherit"},t.url.substr(1)))))})),ne=t(141),oe=t(86),le=t.n(oe),ie=Object(m.a)((function(e){return{biography:Object(i.a)({border:"1px solid #808787",padding:"2rem",margin:"2rem 0",display:"grid",gridTemplateColumns:"10rem 1fr",gridGap:"2rem"},e.breakpoints.down("xs"),{gridTemplateColumns:"1fr"}),biographyTypography:Object(i.a)({},e.breakpoints.down("xs"),{textAlign:"center"}),biographyItemContent:Object(i.a)({display:"grid",gridTemplateColumns:"1fr 1fr","& span":{color:"#fff"}},e.breakpoints.down("xs"),{gridTemplateColumns:"1fr","& span":{textAlign:"center"}}),biographyButtonWrapper:Object(i.a)({justifySelf:"end"},e.breakpoints.down("xs"),{justifySelf:"initial"}),biographyButtonItem:Object(i.a)({marginTop:"1rem",backgroundColor:"transparent",color:"#56D8B7",border:"1px solid #56D8B7","&:hover":{backgroundColor:"#56D8B7",color:"white",border:"1px solid transparent"}},e.breakpoints.down("xs"),{width:"100%"})}})),ce=function(){var e=ie();return n.a.createElement(p.a,{className:e.biography},n.a.createElement(p.a,null,n.a.createElement("img",{src:le.a,width:"100%",alt:""})),n.a.createElement(p.a,{display:"grid"},n.a.createElement(y.a,{className:e.biographyTypography,style:{color:"#fff",marginBottom:"1rem"},variant:"body1"},"Hello! I'm Juan Ponce. Frontend Developer and UX/UI from Guadalajara, Mexico. My passion is to create web pages that runs in any device and platform. I use modern tools that helps me optimize my code to satisfice the client needs. I love learning new abilities in order to enrich my knowledge and performance skills."),n.a.createElement(p.a,{className:e.biographyItemContent},n.a.createElement(y.a,{className:e.biographyTypography,variant:"subtitle1",style:{color:"#fff"}},n.a.createElement("span",{style:{color:"#56D8B7"}},"Age: "),"19"),n.a.createElement(y.a,{className:e.biographyTypography,variant:"subtitle1",style:{color:"#fff"}},n.a.createElement("span",{style:{color:"#56D8B7"}},"Freelance: "),"Available"),n.a.createElement(y.a,{className:e.biographyTypography,variant:"subtitle1",style:{color:"#fff"}},n.a.createElement("span",{style:{color:"#56D8B7"}},"Email: "),"me.juanponce@gmail.com"),n.a.createElement(y.a,{className:e.biographyTypography,variant:"subtitle1",style:{color:"#fff"}},n.a.createElement("span",{style:{color:"#56D8B7"}},"Residence: "),"M\xe9xico"),n.a.createElement(y.a,{className:e.biographyTypography,variant:"subtitle1",style:{color:"#fff"}},n.a.createElement("span",{style:{color:"#56D8B7"}},"Address: "),"Guadalajara")),n.a.createElement(p.a,{className:e.biographyButtonWrapper},n.a.createElement(ne.a,{href:"https://drive.google.com/file/d/1qWvAxIwqW2Rhftmam6dJSEJn1KOTJKe_/view?usp=sharing",className:e.biographyButtonItem,target:"_blank",variant:"contained"},"Download CV"))))},me=t(55),se=t.n(me),de=t(56),pe=t.n(de),fe=t(87),ge=t.n(fe),ue=t(88),be=t.n(ue),Ee=Object(m.a)((function(e){return{services:{margin:"5rem 0"},servicesTypography:Object(i.a)({},e.breakpoints.down("xs"),{textAlign:"center"}),servicesWrapper:Object(i.a)({display:"grid",gridTemplateColumns:"1fr 1fr",gridGap:"2rem"},e.breakpoints.down("xs"),{gridTemplateColumns:"1fr"}),servicesItem:{display:"flex",textAlign:"center",justifyContent:"space-evenly",alignItems:"center",flexDirection:"column",border:"1px solid #808787",padding:"2rem"}}})),he=function(){var e=Ee();return n.a.createElement(p.a,{className:e.services},n.a.createElement(y.a,{style:{color:"#fff",marginBottom:"2rem",fontWeight:"bolder",fontSize:"1.2rem"},variant:"h6"},"Services"),n.a.createElement(p.a,{className:e.servicesWrapper},n.a.createElement(p.a,{className:e.servicesItem},n.a.createElement(se.a,{style:{color:"#fff",fontSize:"2rem"}}),n.a.createElement(y.a,{style:{color:"#fff",fontWeight:"bold",fontSize:"1.2rem"},variant:"subtitle1"},"Web Development"),n.a.createElement(y.a,{style:{color:"#fff"},variant:"body1"},"Modern and smooth websites will help you reach all of your marketing strategies and beyond.")),n.a.createElement(p.a,{className:e.servicesItem},n.a.createElement(pe.a,{style:{color:"#fff",fontSize:"2rem"}}),n.a.createElement(y.a,{style:{color:"#fff",fontWeight:"bold",fontSize:"1.2rem"},variant:"subtitle1"},"WPO (Web Page Optimization)"),n.a.createElement(y.a,{style:{color:"#fff"},variant:"body1"},"I\xb4m implementing interesting stuff that optimize the load process in any browser that helps you posicionate on top search result.")),n.a.createElement(p.a,{className:e.servicesItem},n.a.createElement(ge.a,{style:{color:"#fff",fontSize:"2rem"}}),n.a.createElement(y.a,{style:{color:"#fff",fontWeight:"bold",fontSize:"1.2rem"},variant:"subtitle1"},"Prototypes"),n.a.createElement(y.a,{style:{color:"#fff"},variant:"body1"},"Generating unique ideas from scratch. Creating the wireframes from pencil and paper. Renderice it with Adobe XD program to make it alive.")),n.a.createElement(p.a,{className:e.servicesItem},n.a.createElement(be.a,{style:{color:"#fff",fontSize:"2rem"}}),n.a.createElement(y.a,{style:{color:"#fff",fontWeight:"bold",fontSize:"1.2rem"},variant:"subtitle1"},"Responsive Design"),n.a.createElement(y.a,{style:{color:"#fff"},variant:"body1"},"Developing an incredible website that runs in any device screen will increase the number of opportunities to reach you in contact."))))},ye=Object(m.a)((function(e){return{pricingTable:{margin:"5rem 0"},pricingTableTypography:Object(i.a)({},e.breakpoints.down("xs"),{textAlign:"center"}),pricingTableWrapper:Object(i.a)({display:"grid",gridTemplateColumns:"1fr 1fr",gridGap:"2rem"},e.breakpoints.down("xs"),{gridTemplateColumns:"1fr"}),pricingTableItem:{display:"flex",textAlign:"center",justifyContent:"space-evenly",alignItems:"center",flexDirection:"column",border:"1px solid #808787",padding:"2rem"},pricingTableContent:{"& span":{color:"#fff",textAlign:"center"},"&.b":{"& span":{textDecoration:"line-through",color:"#808787"}}},pricingTableButton:Object(i.a)({marginTop:"1rem",backgroundColor:"transparent",color:"#56D8B7",border:"1px solid #56D8B7","&:hover":{backgroundColor:"#56D8B7",color:"white",border:"1px solid transparent"},"&.Mui-disabled":{color:"rgba(86, 216, 183, 0.26)",border:"none",backgroundColor:"rgba(86, 216, 183, 0.12)"}},e.breakpoints.down("xs"),{width:"100%"})}})),ve=function(){var e=ye();return n.a.createElement(p.a,{className:e.pricingTable},n.a.createElement(y.a,{style:{color:"#fff",marginBottom:"2rem",fontWeight:"bolder",fontSize:"1.2rem"},variant:"h6"},"Pricing Table"),n.a.createElement(p.a,{className:e.pricingTableWrapper},n.a.createElement(p.a,{className:e.pricingTableItem},n.a.createElement(se.a,{style:{color:"#fff",fontSize:"2rem"}}),n.a.createElement(y.a,{style:{color:"#fff",fontWeight:"bold",fontSize:"1.2rem"},variant:"subtitle1"},"Landing Page (Basic)"),n.a.createElement(y.a,{style:{color:"#fff",fontSize:"1.6rem",margin:"1rem 0",fontWeight:"bold"},variant:"body1"},n.a.createElement("span",{style:{color:"#999",fontSize:"0.8rem",verticalAlign:"super",marginRight:".25rem"}},"$"),"10",n.a.createElement("span",{style:{color:"#999",fontSize:"0.8rem",verticalAlign:"baseline",marginLeft:".25rem"}},"hour")),n.a.createElement(u.a,{style:{padding:"0"}},n.a.createElement(b.a,{style:{padding:"0"}},n.a.createElement(h.a,{className:e.pricingTableContent,primary:"\u25fd Web Development"})),n.a.createElement(b.a,{style:{padding:"0"}},n.a.createElement(h.a,{className:e.pricingTableContent,primary:"\u25fd WPO"})),n.a.createElement(b.a,{style:{padding:"0"}},n.a.createElement(h.a,{className:e.pricingTableContent,primary:"\u25fd Responsive Design"})),n.a.createElement(b.a,{style:{padding:"0"}},n.a.createElement(h.a,{className:e.pricingTableContent,primary:"\u25fd Web Animation"})),n.a.createElement(b.a,{style:{padding:"0"}},n.a.createElement(h.a,{className:"".concat(e.pricingTableContent," b"),primary:"\u25fd 1 Product Stack"})),n.a.createElement(b.a,{style:{padding:"0"}},n.a.createElement(h.a,{className:"".concat(e.pricingTableContent," b"),primary:"\u25fd Payment Card Method"})),n.a.createElement(b.a,{style:{padding:"0"}},n.a.createElement(h.a,{className:"".concat(e.pricingTableContent," b"),primary:"\u25fd 1 Main Section"})),n.a.createElement(b.a,{style:{padding:"0"}},n.a.createElement(h.a,{className:e.pricingTableContent,primary:"\u25fd 2 Secoundary Section"})),n.a.createElement(b.a,{style:{padding:"0"}},n.a.createElement(h.a,{className:e.pricingTableContent,primary:"\u25fd 1 Gallery Stack (10 images max)"})),n.a.createElement(b.a,{style:{padding:"0"}},n.a.createElement(h.a,{className:e.pricingTableContent,primary:"\u25fd Caontact Section (Social Networks and Email Form)"}))),n.a.createElement(p.a,{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"},n.a.createElement(ne.a,{className:e.pricingTableButton,variant:"contained",disabled:!0},"Buy now"),n.a.createElement(y.a,{variant:"overline",style:{color:"#56D8B7"}},"Not Available"))),n.a.createElement(p.a,{className:e.pricingTableItem},n.a.createElement(pe.a,{style:{color:"#fff",fontSize:"2rem"}}),n.a.createElement(y.a,{style:{color:"#fff",fontWeight:"bold",fontSize:"1.2rem"},variant:"subtitle1"},"E-Commerce (Premium)"),n.a.createElement(y.a,{style:{color:"#fff",fontSize:"1.6rem",margin:"1rem 0",fontWeight:"bold"},variant:"body1"},n.a.createElement("span",{style:{color:"#999",fontSize:"0.8rem",verticalAlign:"super",marginRight:".25rem"}},"$"),"20",n.a.createElement("span",{style:{color:"#999",fontSize:"0.8rem",verticalAlign:"baseline",marginLeft:".25rem"}},"hour")),n.a.createElement(u.a,{style:{padding:"0"}},n.a.createElement(b.a,{style:{padding:"0"}},n.a.createElement(h.a,{className:e.pricingTableContent,primary:"\u25fd Web Development"})),n.a.createElement(b.a,{style:{padding:"0"}},n.a.createElement(h.a,{className:e.pricingTableContent,primary:"\u25fd WPO"})),n.a.createElement(b.a,{style:{padding:"0"}},n.a.createElement(h.a,{className:e.pricingTableContent,primary:"\u25fd Responsive Design"})),n.a.createElement(b.a,{style:{padding:"0"}},n.a.createElement(h.a,{className:e.pricingTableContent,primary:"\u25fd Web Animation"})),n.a.createElement(b.a,{style:{padding:"0"}},n.a.createElement(h.a,{className:e.pricingTableContent,primary:"\u25fd 1 Product Stack"})),n.a.createElement(b.a,{style:{padding:"0"}},n.a.createElement(h.a,{className:e.pricingTableContent,primary:"\u25fd Payment Card Method"})),n.a.createElement(b.a,{style:{padding:"0"}},n.a.createElement(h.a,{className:e.pricingTableContent,primary:"\u25fd 1 Main Section"})),n.a.createElement(b.a,{style:{padding:"0"}},n.a.createElement(h.a,{className:e.pricingTableContent,primary:"\u25fd 2 Secoundary Section"})),n.a.createElement(b.a,{style:{padding:"0"}},n.a.createElement(h.a,{className:e.pricingTableContent,primary:"\u25fd 1 Gallery Stack (10 images max)"})),n.a.createElement(b.a,{style:{padding:"0"}},n.a.createElement(h.a,{className:e.pricingTableContent,primary:"\u25fd Caontact Section (Social Networks and Email Form)"}))),n.a.createElement(p.a,{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"},n.a.createElement(ne.a,{className:e.pricingTableButton,variant:"contained",disabled:!0},"Buy now"),n.a.createElement(y.a,{variant:"overline",style:{color:"#56D8B7"}},"Not Available")))))},we=Object(m.a)((function(e){return{expAndEdu:Object(i.a)({margin:"5rem 0",display:"grid",gap:"2rem",gridTemplateColumns:"1fr 1fr"},e.breakpoints.down("xs"),{gridTemplateColumns:"1fr"}),expAndEduTypography:Object(i.a)({},e.breakpoints.down("xs"),{textAlign:"center"}),expAndEduWrapper:{display:"grid",gridTemplateColumns:"1fr",gridGap:"2rem"},expAndEduItem:Object(i.a)({display:"grid",gridGap:"0.25rem",border:"1px solid #808787",padding:"2rem"},e.breakpoints.down("xs"),{textAlign:"center"}),expAndEduButtonWrapper:Object(i.a)({justifySelf:"end"},e.breakpoints.down("xs"),{width:"100%"}),expAndEduButton:Object(i.a)({marginTop:"1rem",backgroundColor:"transparent",color:"#56D8B7",border:"1px solid #56D8B7","&:hover":{backgroundColor:"#56D8B7",color:"white",border:"1px solid transparent"}},e.breakpoints.down("xs"),{width:"100%"})}})),Ne=function(){var e=we();return n.a.createElement(p.a,{className:e.expAndEdu},n.a.createElement(p.a,null,n.a.createElement(y.a,{style:{color:"#fff",fontWeight:"bolder",fontSize:"1.2rem",marginBottom:"2rem"},variant:"h6"},"Experience"),n.a.createElement(p.a,{className:e.expAndEduWrapper},n.a.createElement(p.a,{className:e.expAndEduItem},n.a.createElement(y.a,{style:{color:"#56D8B7",fontWeight:"bold",fontSize:"1rem"},variant:"subtitle1"},"2019 - Present"),n.a.createElement(y.a,{style:{color:"#fff",fontSize:"1.2rem",fontWeight:"bold"},variant:"h6"},"Frontend Developer - Primal Technologies"),n.a.createElement(y.a,{style:{color:"#fff"},variant:"body1"},"Monitored in technical aspects of the front-end from the beginning of process to delivery terms.")))),n.a.createElement(p.a,null,n.a.createElement(y.a,{style:{color:"#fff",fontWeight:"bolder",fontSize:"1.2rem",marginBottom:"2rem"},variant:"h6"},"Education"),n.a.createElement(p.a,{className:e.expAndEduWrapper},n.a.createElement(p.a,{className:e.expAndEduItem},n.a.createElement(y.a,{style:{color:"#56D8B7",fontWeight:"bold",fontSize:"1rem"},variant:"subtitle1"},"2018-2022 (Present)"),n.a.createElement(y.a,{style:{color:"#fff",fontSize:"1.2rem",fontWeight:"bold"},variant:"h6"},"Software Engineer - Guadalajara "),n.a.createElement(y.a,{style:{color:"#fff"},variant:"body1"},"Currently studying Software Engineer for a Degree in Universidad Aut\xf3noma de Guadalajara.")),n.a.createElement(p.a,{className:e.expAndEduItem},n.a.createElement(y.a,{style:{color:"#56D8B7",fontWeight:"bold",fontSize:"1rem"},variant:"subtitle1"},"2018-2019"),n.a.createElement(y.a,{style:{color:"#fff",fontSize:"1.2rem",fontWeight:"bold"},variant:"h6"},"Frontend Developer - Platzi"),n.a.createElement(y.a,{style:{color:"#fff"},variant:"body1"},"Career - Git & GitHub, HTML5, CSS, JavaScript, React, Design System,  PostCSS preprocessor."),n.a.createElement(p.a,{className:e.expAndEduButtonWrapper},n.a.createElement(P.a,{href:"https://platzi.com/@ElJuanii00/carrera/arquitecto/diploma/",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"}},n.a.createElement(ne.a,{className:e.expAndEduButton,variant:"contained"},"Certificate")))))))},xe=t(149),ke=t(62),Ie=t.n(ke),Se=t(152),je=Object(m.a)((function(e){var a;return{lenguage:{margin:"5rem 0"},lenguageItemWrapper:Object(i.a)({border:"1px solid #808787",padding:"2rem",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(25rem, 1fr))"},e.breakpoints.down("xs"),{gridTemplateColumns:"initial",gridGap:"1rem",textAlign:"center"}),lenguageRating:(a={color:"#56D8B7",marginLeft:"-0.8rem"},Object(i.a)(a,e.breakpoints.down("xs"),{marginLeft:"0"}),Object(i.a)(a,"& .MuiRating-decimal",{margin:"0 0.25rem"}),Object(i.a)(a,"& .MuiRating-icon",Object(i.a)({margin:"0 0.5rem"},e.breakpoints.down("xs"),{margin:"0"})),Object(i.a)(a,"& .MuiRating-iconEmpty",{color:"#808787"}),a)}})),Ce=Object(Se.a)()((function(e){var a=je();return n.a.createElement(p.a,{className:a.lenguage},n.a.createElement(y.a,{style:{color:"#fff",fontWeight:"bolder",fontSize:"1.2rem",marginBottom:"2rem"},variant:"h6"},"Lenguage (Spanish - Native)"),n.a.createElement(p.a,{className:a.lenguageItemWrapper,borderColor:"transparent"},n.a.createElement(p.a,null,n.a.createElement(y.a,{style:{color:"#fff",fontSize:"1rem",fontWeight:"bold",margin:"0 0 0.5rem",padding:"0",border:"0"}},"English"),n.a.createElement(xe.a,{className:a.lenguageRating,icon:n.a.createElement(Ie.a,{fontSize:"inherit"}),name:"xs"!==e.width?"read-only":"half-read-only",precision:"xs"!==e.width?1:.5,readOnly:!0,value:"xs"!==e.width?9:4.5,max:"xs"!==e.width?10:5})),n.a.createElement(p.a,null,n.a.createElement(y.a,{style:{color:"#fff",fontSize:"1rem",fontWeight:"bold",margin:"0 0 0.5rem",padding:"0",border:"0"}},"Deutsch (Still Learning)"),n.a.createElement(xe.a,{className:a.lenguageRating,icon:n.a.createElement(Ie.a,{fontSize:"inherit"}),name:"xs"!==e.width?"read-only":"half-read-only",precision:"xs"!==e.width?1:.5,readOnly:!0,value:"xs"!==e.width?5:2.5,max:"xs"!==e.width?10:5}))))})),We=t(25),Oe=t.n(We),Te=Object(m.a)((function(e){return{knowledge:{margin:"5rem 0"},knowledgeTypography:{},knowledgeItem:Object(i.a)({border:"1px solid #808787",padding:"2rem"},e.breakpoints.down("xs"),{textAlign:"center"}),knowledgeContent:Object(i.a)({display:"grid",gridTemplateColumns:"1fr 1fr","& span":{color:"#fff"}},e.breakpoints.down("xs"),{gridTemplateColumns:"1fr","& span":{textAlign:"center"}}),knowledgeWrapper:{padding:"0"},knowledgeItemIcon:Object(i.a)({color:"#56D8B7",fontWeight:"bolder",marginRight:"0.5rem"},e.breakpoints.down("xs"),{marginRight:"0.25rem"})}})),De=function(){var e=Te();return n.a.createElement(p.a,{className:e.knowledge},n.a.createElement(y.a,{style:{color:"#fff",marginBottom:"2rem",fontWeight:"bolder",fontSize:"1.2rem"},variant:"h6"},"Knowledge"),n.a.createElement(p.a,{className:e.knowledgeItem},n.a.createElement(u.a,{className:e.knowledgeContent,style:{padding:"0"}},n.a.createElement(b.a,{className:e.knowledgeWrapper},n.a.createElement(Oe.a,{className:e.knowledgeItemIcon}),n.a.createElement(h.a,{primary:"Responsive design"})),n.a.createElement(b.a,{className:e.knowledgeWrapper},n.a.createElement(Oe.a,{className:e.knowledgeItemIcon}),n.a.createElement(h.a,{primary:"Web design prototype"})),n.a.createElement(b.a,{className:e.knowledgeWrapper},n.a.createElement(Oe.a,{className:e.knowledgeItemIcon}),n.a.createElement(h.a,{primary:"Website hosting"})),n.a.createElement(b.a,{className:e.knowledgeWrapper},n.a.createElement(Oe.a,{className:e.knowledgeItemIcon}),n.a.createElement(h.a,{primary:"Web Animation"})),n.a.createElement(b.a,{className:e.knowledgeWrapper},n.a.createElement(Oe.a,{className:e.knowledgeItemIcon}),n.a.createElement(h.a,{primary:"WPO (Web page optimization)"})),n.a.createElement(b.a,{className:e.knowledgeWrapper},n.a.createElement(Oe.a,{className:e.knowledgeItemIcon}),n.a.createElement(h.a,{primary:"Git & GitHub "})),n.a.createElement(b.a,{className:e.knowledgeWrapper},n.a.createElement(Oe.a,{className:e.knowledgeItemIcon}),n.a.createElement(h.a,{primary:"System Design"})),n.a.createElement(b.a,{className:e.knowledgeWrapper},n.a.createElement(Oe.a,{className:e.knowledgeItemIcon}),n.a.createElement(h.a,{primary:"React JS"})),n.a.createElement(b.a,{className:e.knowledgeWrapper},n.a.createElement(Oe.a,{className:e.knowledgeItemIcon}),n.a.createElement(h.a,{primary:"HTML, CSS & JS"})))))},Be=t(142),ze=Object(m.a)((function(e){return{codeSkills:{margin:"5rem 0"},codeSkillsWrapper:Object(i.a)({border:"1px solid #808787",padding:"2rem",display:"flex",justifyContent:"space-around"},e.breakpoints.down("xs"),{display:"grid",gridGap:"1rem",textAlign:"center"}),codeSkillsItem:{textAlign:"center"},codeSkillsItemCircularProgress:{width:"10rem",color:"#56D8B7",position:"relative","&:before":{position:"absolute",top:"0",left:"0",bottom:"0",right:"0",display:"flex",justifyContent:"center",alignItems:"center",color:"#fff",transform:"rotate(90deg)"},"&.a:before":{content:"'95%'"},"&.b:before":{content:"'90%'"},"&.c:before":{content:"'85%'"},"&.d:before":{content:"'80%'"},"& .MuiCircularProgress-circleStatic":{strokeWidth:"2"}}}})),Ae=function(){var e=ze();return n.a.createElement(p.a,{className:e.codeSkills},n.a.createElement(y.a,{style:{color:"#fff",marginBottom:"2rem",fontWeight:"bolder",fontSize:"1.2rem"},variant:"h6"},"Code Skills"),n.a.createElement(p.a,{className:e.codeSkillsWrapper},n.a.createElement(p.a,{className:e.codeSkillsItem},n.a.createElement(Be.a,{className:"".concat(e.codeSkillsItemCircularProgress," a"),style:{width:"5rem",height:"5rem"},variant:"static",value:95}),n.a.createElement(y.a,{style:{color:"#fff",textAlign:"center"},variant:"body1"},"HTML5 / CSS / JS")),n.a.createElement(p.a,{className:e.codeSkillsItem},n.a.createElement(Be.a,{className:"".concat(e.codeSkillsItemCircularProgress," b"),style:{width:"5rem",height:"5rem"},variant:"static",value:90}),n.a.createElement(y.a,{style:{color:"#fff",textAlign:"center"},variant:"body1"},"React JS")),n.a.createElement(p.a,{className:e.codeSkillsItem},n.a.createElement(Be.a,{className:"".concat(e.codeSkillsItemCircularProgress," c"),style:{width:"5rem",height:"5rem"},variant:"static",value:85}),n.a.createElement(y.a,{style:{color:"#fff",textAlign:"center"},variant:"body1"},"Python")),n.a.createElement(p.a,{className:e.codeSkillsItem},n.a.createElement(Be.a,{className:"".concat(e.codeSkillsItemCircularProgress," d"),style:{width:"5rem",height:"5rem"},variant:"static",value:80}),n.a.createElement(y.a,{style:{color:"#fff",textAlign:"center"},variant:"body1"},"MYSQL"))))},Le=Object(m.a)((function(e){return{quotes:{margin:"5rem 0"},quotesItem:{border:"1px solid #808787",padding:"2rem"},quotesItemQuote:Object(i.a)({color:"#fff",fontSize:"1.2rem"},e.breakpoints.down("xs"),{textAlign:"center"}),quotesItemAthor:Object(i.a)({color:"#B8B8B8",textAlign:"end",fontSize:"1rem"},e.breakpoints.down("xs"),{textAlign:"center"})}})),Fe=function(){var e=Le();return n.a.createElement(p.a,{className:e.quotes},n.a.createElement(p.a,{className:e.quotesItem},n.a.createElement(y.a,{className:e.quotesItemQuote,variant:"body1"},"\u201cDon\u2019t worry about failure you only have to be right once.\u201d"),n.a.createElement(y.a,{className:e.quotesItemAthor,variant:"body2"},"Drew Huston - Dropbox Co-Funder")))},Pe=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(re,null),n.a.createElement(ce,null),n.a.createElement(he,null),n.a.createElement(ve,null),n.a.createElement(Ne,null),n.a.createElement(Ce,null),n.a.createElement(De,null),n.a.createElement(Ae,null),n.a.createElement(Fe,null))},Me=t(89),Ge=t.n(Me),He=Object(m.a)((function(e){return{projectGallery:{margin:"5rem 0"},projectGalleryWrapper:Object(i.a)({display:"grid",gridTemplateColumns:"1fr 1fr",gridGap:"2rem"},e.breakpoints.down("xs"),{gridTemplateColumns:"1fr"}),projectGalleryItem:{transition:"450ms all",position:"relative","&:hover":{transform:"scale(1.05)"},"&:before":{position:"absolute",top:"0",left:"0",right:"0",bottom:"0",content:"''",backgroundColor:"rgba(255,255,255,0)",transition:"450ms all"},"&:hover:before":{backgroundColor:"rgba(255,255,255,0.1)"}}}})),Re=function(){var e=He();return n.a.createElement(p.a,{className:e.projectGallery},n.a.createElement(y.a,{style:{color:"#fff",marginBottom:"2rem",fontWeight:"bolder",fontSize:"1.2rem"},variant:"h6"},"Projects"),n.a.createElement(p.a,{className:e.projectGalleryWrapper},n.a.createElement(P.a,{className:e.projectGalleryItem,href:"https://eljuanii00.github.io/amd-automation"},n.a.createElement("img",{src:Ge.a,alt:"",width:"100%"}))))},Je=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(re,null),n.a.createElement(Re,null))},qe=t(90),Ue=t.n(qe),Ke=t(91),Qe=t.n(Ke),Xe=t(92),Ye=t.n(Xe),_e=Object(m.a)((function(e){return{contactForm:{margin:"5rem 0"},contactFormTypography:Object(i.a)({},e.breakpoints.down("xs"),{textAlign:"center"}),contactFormWrapper:Object(i.a)({display:"grid",gridTemplateColumns:"1fr 1fr",gridGap:"2rem"},e.breakpoints.down("xs"),{gridTemplateColumns:"1fr"}),contactFormItem:{display:"flex",textAlign:"center",justifyContent:"space-evenly",alignItems:"center",flexDirection:"column",border:"1px solid #808787",padding:"2rem"}}})),$e=function(){var e=_e();return n.a.createElement(p.a,{className:e.contactForm},n.a.createElement(y.a,{style:{color:"#fff",marginBottom:"2rem",fontWeight:"bolder",fontSize:"1.2rem"},variant:"h6"},"Contact Info"),n.a.createElement(p.a,{className:e.contactFormWrapper},n.a.createElement(p.a,{className:e.contactFormItem},n.a.createElement(Ue.a,{style:{color:"#fff",fontSize:"2rem"}}),n.a.createElement(y.a,{style:{color:"#fff",fontWeight:"bold",fontSize:"1.2rem"},variant:"subtitle1"},"Email"),n.a.createElement(y.a,{style:{color:"#fff"},variant:"body1"},"me.juanponce@gmail.com")),n.a.createElement(p.a,{className:e.contactFormItem},n.a.createElement(Qe.a,{style:{color:"#fff",fontSize:"2rem"}}),n.a.createElement(y.a,{style:{color:"#fff",fontWeight:"bold",fontSize:"1.2rem"},variant:"subtitle1"},"Address"),n.a.createElement(y.a,{style:{color:"#fff"},variant:"body1"},"Guadalajara, M\xe9xico")),n.a.createElement(p.a,{className:e.contactFormItem},n.a.createElement(Ye.a,{style:{color:"#fff",fontSize:"2rem"}}),n.a.createElement(y.a,{style:{color:"#fff",fontWeight:"bold",fontSize:"1.2rem"},variant:"subtitle1"},"Freelance"),n.a.createElement(y.a,{style:{color:"#fff"},variant:"body1"},"I am available for Freelance hire"))))},Ve=t(143),Ze=t(151),ea=t(154),aa=t(144),ta=Object(m.a)((function(e){return{contactInfo:{margin:"5rem 0"},contactInfoTypography:Object(i.a)({},e.breakpoints.down("xs"),{textAlign:"center"}),contactInfoWrapper:{border:"1px solid #808787",padding:"2rem",display:"grid",gridGap:"1rem"},contactInfoItem:{},contactInfoInput:{color:"white",backgroundColor:"transparent",outline:"none",borderTop:"0",borderLeft:"0",borderRight:"0",borderColor:"#808787",fontSize:"1rem","&::placeholder":{color:"#808787",fontSize:"1rem"},"&:before":{borderBottom:"1px solid #808787"},"&:hover:not(.Mui-disabled):before":{borderBottom:"2px solid #808787 !important"},"&:after":{borderBottom:"1px solid #808787"}},contactFormButtonWrapper:Object(i.a)({justifySelf:"end"},e.breakpoints.down("xs"),{justifySelf:"initial"}),contactFormButtonItem:Object(i.a)({marginTop:"1rem",backgroundColor:"transparent",color:"#56D8B7",border:"1px solid #56D8B7","&:hover":{backgroundColor:"#56D8B7",color:"white",border:"1px solid transparent"},"&.Mui-disabled":{color:"rgba(86, 216, 183, 0.26)",border:"none",backgroundColor:"rgba(86, 216, 183, 0.12)"}},e.breakpoints.down("xs"),{width:"100%"})}})),ra=function(){var e=ta();return n.a.createElement(p.a,{className:e.contactInfo},n.a.createElement(y.a,{style:{color:"#fff",marginBottom:"2rem",fontWeight:"bolder",fontSize:"1.2rem"},variant:"h6"},"Contact Form"),n.a.createElement(p.a,{className:e.contactInfoWrapper},n.a.createElement(Ve.a,{className:e.contactInfoItem},n.a.createElement(Ze.a,{style:{color:"#808787"},htmlFor:"name"},"Name"),n.a.createElement(ea.a,{className:e.contactInfoInput,id:"name","aria-describedby":"my-helper-text"})),n.a.createElement(Ve.a,{className:e.contactInfoItem},n.a.createElement(Ze.a,{style:{color:"#808787"},htmlFor:"email"},"Email address"),n.a.createElement(ea.a,{className:e.contactInfoInput,id:"email","aria-describedby":"my-helper-text"})),n.a.createElement(Ve.a,{className:e.contactInfoItem},n.a.createElement(aa.a,{className:e.contactInfoInput,rowsMin:10,id:"message","aria-label":"empty textarea",placeholder:"Message"})),n.a.createElement(Ve.a,{className:e.contactFormButtonWrapper},n.a.createElement(ne.a,{className:e.contactFormButtonItem,variant:"contained",disabled:!0},"Send Message"),n.a.createElement(y.a,{variant:"overline",style:{color:"#56D8B7",textAlign:"center"}},"Not Available"))))},na=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(re,null),n.a.createElement($e,null),n.a.createElement(ra,null))},oa=Object(m.a)((function(e){return{app:Object(i.a)({margin:"0 20%"},e.breakpoints.down("md"),{margin:"0 2rem"})}})),la=Object(s.a)({typography:{fontFamily:"'Lato', sans-serif"}}),ia=Object(c.h)((function(){var e=oa();return n.a.createElement(d.a,{theme:la},n.a.createElement(c.c,null,n.a.createElement(Y,null,n.a.createElement(p.a,{className:e.app},n.a.createElement(c.a,{exact:!0,path:"/",component:ee}),n.a.createElement(c.a,{path:"/resume",component:Pe}),n.a.createElement(c.a,{path:"/works",component:Je}),n.a.createElement(c.a,{path:"/contact",component:na})))))})),ca=t(31),ma=t(146);function sa(){var e=Object(c.f)().pathname;return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}l.a.render(n.a.createElement(ca.a,null,n.a.createElement(ma.a,null),n.a.createElement(sa,null),n.a.createElement(ia,null)),document.getElementById("root"))},84:function(e,a,t){e.exports=t.p+"static/media/background.32e628bc.jpg"},86:function(e,a,t){e.exports=t.p+"static/media/avatar.efe0ad9b.jpg"},89:function(e,a,t){e.exports=t.p+"static/media/amd-automation-project.1c78edcf.png"},99:function(e,a,t){e.exports=t(110)}},[[99,1,2]]]);
//# sourceMappingURL=main.799d6867.chunk.js.map