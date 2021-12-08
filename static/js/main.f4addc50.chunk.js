(this.webpackJsonpyarris_website=this.webpackJsonpyarris_website||[]).push([[0],{18:function(e,t,a){},24:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var i=a(2),n=a.n(i),o=a(13),s=a.n(o),r=(a(18),a(3)),c=a(6),l=a(8),h=a(7),d=a(4),b=(a(24),a(0)),u=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"Header",children:[Object(b.jsx)("h1",{children:"Adam Yarris"}),Object(b.jsxs)("div",{className:"icon-row",children:[Object(b.jsx)("a",{href:"mailto:adam@yarr.is",title:"adam@yarr.is",className:"icon",target:"_blank",children:Object(b.jsx)(d.a,{icon:"envelope"})}),Object(b.jsx)("a",{href:"https://github.com/RubbaBoy",title:"GitHub",className:"icon",target:"_blank",children:Object(b.jsx)(d.a,{icon:["fab","github"]})}),Object(b.jsx)("a",{href:"https://www.linkedin.com/in/adam-yarris/",title:"LinkedIn",className:"icon",target:"_blank",children:Object(b.jsx)(d.a,{icon:["fab","linkedin"]})}),Object(b.jsx)("a",{href:"https://yarr.is/resume",title:"Resume",className:"icon",target:"_blank",children:Object(b.jsx)(d.a,{icon:"file"})})]})]})}}]),a}(n.a.Component),m=(a(26),a(27),function e(t,a,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0;Object(r.a)(this,e),this.name=void 0,this.languages=void 0,this.description=void 0,this.github=void 0,this.website=void 0,this.name=t,this.languages=a,this.description=i,this.github=n,this.website=o}),p=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.project;return Object(b.jsxs)("div",{className:"Project",children:[Object(b.jsxs)("div",{className:"title-line",children:[Object(b.jsx)("h4",{children:e.name}),Object(b.jsx)("div",{className:"languages",children:e.languages.map((function(e){return Object(b.jsx)("span",{className:"language",children:e})}))}),Object(b.jsx)(d.a,{icon:["fab","github"],className:"icon"})]}),Object(b.jsx)("p",{children:e.description})]})}}]),a}(n.a.Component),g=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).projects=[new m("MS Paint IDE",["Java","JavaScript","C#","HTML","SCSS","PHP"],"A program to use a custom OCR (NewOCR) to read images and parse them as code, performing IDE actions including compilation, syntax highlighting, buildsystem support, basic refactoring, LSP integration, and Google Assistant support.","https://github.com/MSPaintIDE/MSPaintIDE","https://ms-paint-i.de/"),new m("Craftathon",["Java"],"Lead the team at the charity organization Craftathon, raising $7,600 for children in domestic violence homes and shelters.",void 0,"https://craftathon.org/"),new m("HolySheet",["Dart","Java","HTML","SCSS"],"Developed an unlimited cold file storage system by efficiently encoding them into Google Sheets. This is serverless and highly scaleable with Docker & Kubernetes, hosted on AWS. The system is accessible through a file browser web app, native desktop app, CLI, REST API, gRPC API, and Java API.","https:/github.com/HolySheet/HolySheet"),new m("NewOCR",["Java"],"Constructed an OCR from scratch, with 98+% accuracy on all printable ASCII characters on trained fonts. Designed to read computer-generated text of an arbitrary size on a trained font, and provide typeset data used to reconstruct the input image with modified text. This project cited several research papers on similar technology to make a unique detection system.","https://github.com/MSPaintIDE/NewOCR","https://wiki.newocr.dev/"),new m("BYOB",["TypeScript"],"A GitHub Action and service to allow for dynamically updated README badges from GitHub Action triggers.","https://github.com/RubbaBoy/BYOB","https://github.com/marketplace/actions/bring-your-own-badge"),new m("ChatFilter",["Java"],"A fast and highly configurable chat filter, targeted to be used in multiplayer games. Made for Craftathon, with benchmarking and full specifications available.","https://github.com/RubbaBoy/ChatFilter"),new m("EmojIDE",["Java"],"A working and reactive IDE in Discord emojis, featuring emoji management across 41 Discord servers. This was made for the r/ProgrammerHumor Hackathon, getting second place.","https://github.com/RubbaBoy/EmojIDE","https://www.youtube.com/watch?v=06pMgnB6e6o"),new m("BFJVM",["Java"],"A program to compile Brainfuck into JVM classes without the use of any libraries or external tools for compiling.","https://github.com/RubbaBoy/BFJVM"),new m("Notedown",["Dart"],"A markdown-based note taking app made in Flutter. Complete with Google authentication for cross-platform syncing.","https://github.com/RubbaBoy/Notedown"),new m("Spogit",["Java"],"Spotify playlists over Git. This allows for pushing playlists to Git servers such as GitHub, and making forks and PRs to other people's playlists.","https://github.com/RubbaBoy/Spogit"),new m("BinaryCamera",["Java"],"BinaryCamera's goal is to allow the user to type in their computer using nothing but their light. The binary is typed in by turning their light on/off as ones and zeros, recorded through their webcam.","https://github.com/RubbaBoy/BinaryCamera","https://www.youtube.com/watch?v=RxDjbndYzxo"),new m("CodeFormatter",["Java"],"Formats your code (Or whole GitHub repos) by moving all brackets and semicolons to the side in a perfect line to match your perfect code.","https://github.com/RubbaBoy/CodeFormatter","https://rubbaboy.me/codeformatter/"),new m("WSS",["JavaScript","HTML","CSS"],"Convert nested CSS into full webpages, with the ability to recreate any webpage in just CSS.","https://github.com/RubbaBoy/WSS")],e.projectsRef=Object(i.createRef)(),e.handleScroll=function(){var t,a,i,n,o=window.scrollY+window.innerHeight,s=(null!==(t=null===(a=e.projectsRef)||void 0===a||null===(i=a.current)||void 0===i?void 0:i.offsetTop)&&void 0!==t?t:0)+.15*window.innerHeight;if(o>=s)null===(n=e.projectsRef.current)||void 0===n||n.classList.add("showing");else if(o<s){var r;null===(r=e.projectsRef.current)||void 0===r||r.classList.remove("showing")}},e}return Object(c.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"main-content-wrapper",children:[Object(b.jsx)(u,{}),Object(b.jsx)("div",{className:"summary",children:Object(b.jsxs)("p",{children:["Hey! I'm Adam, a 19-year-old programmer and Eagle Scout from New Hampshire. I've been programming as a hobby for around 8 years, devoting nearly all of my time to development of software and tools, some being more serious than others.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"I am currently in my sophomore year at RIT pursuing Computer Science, working as a software developer at ",Object(b.jsx)("a",{href:"https://witr.rit.edu/",target:"_blank",children:"WITR"}),"."]})}),Object(b.jsx)("div",{className:"scroll-container",children:Object(b.jsxs)("svg",{className:"arrows",children:[Object(b.jsx)("path",{className:"a1",d:"M0 0 L30 32 L60 0"}),Object(b.jsx)("path",{className:"a2",d:"M0 20 L30 52 L60 20"}),Object(b.jsx)("path",{className:"a3",d:"M0 40 L30 72 L60 40"})]})}),Object(b.jsx)("div",{ref:this.projectsRef,className:"projects",children:this.projects.map((function(e){return Object(b.jsx)(p,{project:e})}))})]})}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll,{passive:!0})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}}]),a}(n.a.Component),j=a(5),f=a(9),v=a(12);j.b.add(f.c,f.a,v.b,v.a,f.b),s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)("div",{className:"flex-wrapper",children:Object(b.jsx)(g,{})})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.f4addc50.chunk.js.map