"use strict";(self.webpackChunkrabbittracks=self.webpackChunkrabbittracks||[]).push([[957,830,41],{8668:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"src/assets/images/rabbitpaw.jpg"},9616:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"src/assets/images/rabbitphoto.jpg"},8957:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=l(n(7294)),u=n(9655),c=(0,o.lazy)((()=>Promise.resolve().then((()=>l(n(3650)))))),d=(0,o.lazy)((()=>Promise.resolve().then((()=>l(n(6924)))))),f=(0,o.lazy)((()=>Promise.resolve().then((()=>l(n(2893)))))),s=(0,o.lazy)((()=>Promise.resolve().then((()=>l(n(8497)))))),m=i(n(8138));t.default=()=>o.default.createElement(u.Routes,null,o.default.createElement(u.Route,{path:"*",element:o.default.createElement(m.default,null)}),o.default.createElement(u.Route,{path:"/",element:o.default.createElement(f,null)}),o.default.createElement(u.Route,{path:"/signup",element:o.default.createElement(s,null)}),o.default.createElement(u.Route,{path:"/userprojects",element:o.default.createElement(d,null)}),o.default.createElement(u.Route,{path:"/messages",element:o.default.createElement(c,null)}))},6983:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=l(n(7294)),u=i(n(3253)),c=i(n(3241)),d=i(n(9348)),f=i(n(8193)),s=i(n(3035)),m=i(n(5867));t.default=function({isShown:e,handleClose:t,handleSave:n,headerText:a,setNameErr:r,setURLErr:l,projectNameError:i,projectURLError:p}){return o.createElement("div",null,o.createElement(u.default,{isOpen:e,onRequestClose:t,appElement:document.getElementById("root"),style:{overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{maxWidth:"500px",maxHeight:"300px",position:"relative",top:"100px",left:"50%",transform:"translateX(-50%)",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"50px",display:"grid",gridTemplateRows:"40px 65px 65px 65px"}}},o.createElement(m.default,null,o.createElement("b",null,a)),o.createElement(c.default,{fullWidth:!0},o.createElement(d.default,{htmlFor:"project-name"},"Project Name"),o.createElement(f.default,{id:"project-name",error:i,onChange:()=>{r(!1)}})),o.createElement(c.default,{fullWidth:!0},o.createElement(d.default,{htmlFor:"project-url"},"Project URL"),o.createElement(f.default,{id:"project-url",error:p,onChange:()=>{l(!1)}})),o.createElement("span",null,o.createElement(s.default,{id:"save-button",onClick:n,variant:"contained"},"Save"),o.createElement(s.default,{id:"save-button",onClick:t,variant:"outlined"},"Cancel"))))}},1071:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=a(n(7294)),l=n(1660),i=a(n(5697)),o=a(n(2814)),u=a(n(8541)),c=a(n(9492)),d=a(n(7041));t.default=function(e){const{messages:t}=e,n=r.default.memo((function(e){const{width:t,value:n}=e,a=r.default.useRef(null),l=r.default.useRef(null),i=r.default.useRef(null),[f,s]=r.default.useState(null),[m,p]=r.default.useState(!1),[h,v]=r.default.useState(!1);return r.default.useEffect((()=>{if(m)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)};function e(e){"Escape"!==e.key&&"Esc"!==e.key||p(!1)}}),[p,m]),r.default.createElement(o.default,{ref:a,onMouseEnter:()=>{const e=(t=i.current).scrollHeight>t.clientHeight||t.scrollWidth>t.clientWidth;var t;v(e),s(l.current),p(!0)},onMouseLeave:()=>{p(!1)},sx:{alignItems:"center",lineHeight:"24px",width:"100%",height:"100%",position:"relative",display:"flex"}},r.default.createElement(r.default.Fragment,null,r.default.createElement(o.default,{ref:l,sx:{height:"100%",width:t,display:"block",position:"absolute",top:0}}),r.default.createElement(o.default,{ref:i,sx:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},r.default.createElement(r.default.Fragment,null,n)),h&&r.default.createElement(d.default,{open:m&&null!==f,anchorEl:f,style:{width:t,offset:-17}},r.default.createElement(c.default,{elevation:1,style:{minHeight:"fit-content",whiteSpace:"nowrap",width:"fit-content"}},r.default.createElement(u.default,{variant:"body2",style:{padding:8}},n)))))}));function a(e){return r.default.createElement(n,{value:e.value||"",width:e.colDef.computedWidth})}n.propTypes={value:i.default.any.isRequired,width:i.default.number.isRequired},a.propTypes={colDef:i.default.object.isRequired,value:i.default.string};const f=[{field:"consumerTag",headerName:"consumerTag",renderCell:a,flex:1.5},{field:"deliveryTag",headerName:"deliveryTag",renderCell:a,flex:1},{field:"redelivered",headerName:"redelivered",renderCell:a,flex:1},{field:"exchange",headerName:"exchange",renderCell:a,flex:1},{field:"routingKey",headerName:"routingKey",renderCell:a,flex:1},{field:"contentType",headerName:"contentType",renderCell:a,flex:1},{field:"contentEncoding",headerName:"contentEncoding",renderCell:a,flex:1},{field:"deliveryMode",headerName:"deliveryMode",renderCell:a,flex:1},{field:"priority",headerName:"priority",renderCell:a,flex:1},{field:"correlationId",headerName:"correlationId",renderCell:a,flex:1},{field:"replyTo",headerName:"replyTo",renderCell:a,flex:1},{field:"expiration",headerName:"expiration",renderCell:a,flex:1},{field:"messageId",headerName:"messageId",renderCell:a,flex:1},{field:"timestamp",headerName:"timestamp",renderCell:a,flex:1},{field:"type",headerName:"type",renderCell:a,flex:1},{field:"userId",headerName:"userId",renderCell:a,flex:1},{field:"appId",headerName:"appId",renderCell:a,flex:1},{field:"clusterId",headerName:"clusterId",renderCell:a,flex:1}],s=t.map((e=>({id:e.message_id,consumerTag:e.consumertag,deliveryTag:e.deliverytag,redelivered:e.redelivered,exchange:e.exchange,routingKey:e.routingkey,contentType:e.contenttype,contentEncoding:e.contentencoding,deliveryMode:e.deliverymode,priority:e.priority,correlationId:e.correlationid,replyTo:e.replyto,expiration:e.expiration,messageId:e.messageid,timestamp:e.timestamp?new Date(Number(e.timestamp)).toISOString():"",type:e.type,userId:e.userid,appId:e.appid,clusterId:e.clusterid})));return r.default.createElement("div",{style:{height:"80vh",width:"100%"}},r.default.createElement(l.DataGrid,{rows:s,columns:f,pageSize:10,rowsPerPageOptions:[10],components:{Toolbar:l.GridToolbar},initialState:{sorting:{sortModel:[{field:"timestamp",sort:"desc"}]},columns:{columnVisibilityModel:{contentType:!1,contentEncoding:!1,deliveryMode:!1,priority:!1,correlationId:!1,replyTo:!1,expiration:!1,messageId:!1,timestamp:!1,type:!1,userId:!1,appId:!1,clusterId:!1}}}}))}},7236:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=a(n(7294));t.default=function(){return r.default.createElement("div",null,r.default.createElement("h2",{id:"error-message"},"----- Page not found! -----"))}},2893:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},i=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,l){function i(e){try{u(a.next(e))}catch(e){l(e)}}function o(e){try{u(a.throw(e))}catch(e){l(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,o)}u((a=a.apply(e,t||[])).next())}))},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=l(n(7294)),c=n(9655),d=o(n(3464)),f=o(n(3035)),s=o(n(3480)),m=o(n(6729)),p=o(n(4983)),h=o(n(63)),v=o(n(2814)),g=o(n(4706)),b=o(n(3845)),_=o(n(8541)),y=o(n(7715)),E=o(n(185)),w=(0,u.lazy)((()=>Promise.resolve().then((()=>l(n(2233)))))),j=o(n(6388)),O=o(n(4876));function x(e){return u.default.createElement(_.default,Object.assign({variant:"body2",color:"text.secondary",align:"center"},e),"Copyright © ",u.default.createElement(p.default,{color:"inherit",href:"https://mui.com/"},"RabbitTracks")," ",(new Date).getFullYear(),".")}const P=(0,E.default)();t.default=function(){const[e,t]=(0,u.useState)(!1),[n,a]=(0,u.useState)(""),[r,l]=(0,u.useState)("");let o=(0,c.useNavigate)();return u.default.createElement(u.default.Fragment,null,u.default.createElement(O.default,null),u.default.createElement(w,{theme:P},u.default.createElement(y.default,{component:"main",maxWidth:"xs"},u.default.createElement(s.default,null),u.default.createElement(v.default,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"}},u.default.createElement(d.default,{sx:{m:1,bgcolor:"info.main"}},u.default.createElement(b.default,null)),u.default.createElement(_.default,{component:"h1",variant:"h5"},"Login"),e&&u.default.createElement(g.default,{severity:"error",onClose:()=>{t(!1),a(""),l("")}},"Incorrect login credentials"),u.default.createElement(v.default,{component:"form",onSubmit:e=>i(this,void 0,void 0,(function*(){e.preventDefault();const n=new FormData(e.currentTarget);yield j.default.post("/auth/login",{email:n.get("email"),password:n.get("password")}).then((e=>{t(!1),o("/userprojects")})).catch((e=>{t(!0)}))})),noValidate:!0,sx:{mt:1}},u.default.createElement(m.default,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:n,onChange:e=>a(e.target.value)}),u.default.createElement(m.default,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:r,onChange:e=>l(e.target.value)}),u.default.createElement(f.default,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2}},"Sign In"),u.default.createElement(h.default,{container:!0,justifyContent:"center"},u.default.createElement(h.default,{item:!0},u.default.createElement(p.default,{href:"/signup",variant:"body2"},"Don't have an account? Sign Up"))))),u.default.createElement(x,{sx:{mt:8,mb:4}}))))}},6548:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},i=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,l){function i(e){try{u(a.next(e))}catch(e){l(e)}}function o(e){try{u(a.throw(e))}catch(e){l(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,o)}u((a=a.apply(e,t||[])).next())}))},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=l(n(7294)),c=n(9655),d=o(n(6129)),f=o(n(2814)),s=o(n(380)),m=o(n(1177)),p=o(n(8201)),h=o(n(3133)),v=o(n(6683)),g=n(9655),b=o(n(6388));t.default=function(){let e=(0,c.useNavigate)();const[t,n]=u.useState(null);return u.createElement(f.default,{sx:{flexGrow:1}},u.createElement(d.default,{position:"static",id:"nav-bar"},u.createElement(s.default,null,u.createElement(u.Fragment,null,u.createElement("h2",{id:"header-title"},"RABBIT ",u.createElement("b",{id:"first-word"},"TRACKS")),u.createElement("div",null,u.createElement(m.default,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:e=>{n(e.currentTarget)},color:"inherit"},u.createElement(p.default,{id:"icon-button"})),u.createElement(v.default,{id:"menu-appbar",anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(t),onClose:()=>{n(null)}},u.createElement(g.Link,{to:"/"},u.createElement(h.default,{onClick:t=>i(this,void 0,void 0,(function*(){t.preventDefault(),yield b.default.post("/auth/logout").then((t=>{e("/")})).catch((e=>{}))}))},"Logout"))))))))}},4876:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=a(n(7294)),l=a(n(6129)),i=a(n(2814));t.default=function(){return r.default.createElement(i.default,{sx:{flexGrow:1}},r.default.createElement(l.default,{position:"static",id:"nav-bar"},r.default.createElement("div",{id:"welcome-title"},r.default.createElement("h1",null,"WELCOME TO RABBIT ",r.default.createElement("b",{id:"first-word"},"TRACKS"),r.default.createElement("br",null))),r.default.createElement("div",null,r.default.createElement("div",{id:"welcome-statement"},r.default.createElement("h3",null,"Track. Reprocess. Repeat.")))))}},5593:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},i=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,l){function i(e){try{u(a.next(e))}catch(e){l(e)}}function o(e){try{u(a.throw(e))}catch(e){l(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,o)}u((a=a.apply(e,t||[])).next())}))},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=l(n(7294)),c=n(9655),d=o(n(6129)),f=o(n(2814)),s=o(n(380)),m=o(n(8541)),p=o(n(1177)),h=o(n(8201)),v=o(n(3133)),g=o(n(6683)),b=n(9655),_=o(n(8668)),y=o(n(6388));t.default=function(){let e=(0,c.useNavigate)();const[t,n]=u.useState(null);return u.createElement(f.default,{sx:{flexGrow:1}},u.createElement(d.default,{position:"static",id:"nav-bar"},u.createElement(s.default,null,u.createElement(m.default,{variant:"h6",component:"div"},u.createElement(b.Link,{to:"/userprojects"},u.createElement("span",{className:"hovertext","data-hover":"Go to projects"},u.createElement("img",{id:"rabbit-paw-pic",src:_.default,loading:"lazy"})))),u.createElement(u.Fragment,null,u.createElement("h2",{id:"header-title2"},"RABBIT ",u.createElement("b",{id:"first-word"},"TRACKS")),u.createElement("div",null,u.createElement(p.default,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:e=>{n(e.currentTarget)},color:"inherit"},u.createElement(h.default,{id:"icon-button"})),u.createElement(g.default,{id:"menu-appbar",anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(t),onClose:()=>{n(null)}},u.createElement(b.Link,{to:"/"},u.createElement(v.default,{onClick:t=>i(this,void 0,void 0,(function*(){t.preventDefault(),yield y.default.post("/auth/logout").then((t=>{e("/")})).catch((e=>{}))}))},"Logout"))))))))}},2337:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=a(n(7294)),l=a(n(6129)),i=a(n(2814));t.default=function(){return r.default.createElement(i.default,{sx:{flexGrow:1}},r.default.createElement(l.default,{position:"static",id:"nav-bar"},r.default.createElement("div",{id:"welcome-title"},r.default.createElement("h1",null,"RABBIT ",r.default.createElement("b",{id:"first-word"},"TRACKS"),r.default.createElement("br",null))),r.default.createElement("div",null,r.default.createElement("div",{id:"welcome-statement"},r.default.createElement("h3",null,"Start tracking your RabbitMQ message failures today!")))))}},8497:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},i=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,l){function i(e){try{u(a.next(e))}catch(e){l(e)}}function o(e){try{u(a.throw(e))}catch(e){l(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,o)}u((a=a.apply(e,t||[])).next())}))},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=l(n(7294)),c=n(9250),d=(0,u.lazy)((()=>Promise.resolve().then((()=>l(n(3464)))))),f=o(n(3035)),s=o(n(3480)),m=o(n(6729)),p=o(n(4983)),h=o(n(63)),v=o(n(2814)),g=o(n(3845)),b=o(n(8541)),_=o(n(7715)),y=o(n(185)),E=(0,u.lazy)((()=>Promise.resolve().then((()=>l(n(2233)))))),w=(0,u.lazy)((()=>Promise.resolve().then((()=>l(n(2337)))))),j=o(n(6388));function O(e){return u.default.createElement(b.default,Object.assign({variant:"body2",color:"text.secondary",align:"center"},e),"Copyright © ",u.default.createElement(p.default,{color:"inherit",href:"https://mui.com/"},"RabbitTracks")," ",(new Date).getFullYear(),".")}const x=(0,y.default)();t.default=function(){let e=(0,c.useNavigate)();return u.default.createElement(u.default.Fragment,null,u.default.createElement(w,null),u.default.createElement(E,{theme:x},u.default.createElement(_.default,{component:"main",maxWidth:"xs"},u.default.createElement(s.default,null),u.default.createElement(v.default,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"}},u.default.createElement(d,{sx:{m:1,bgcolor:"secondary.main"}},u.default.createElement(g.default,null)),u.default.createElement(b.default,{component:"h1",variant:"h5"},"Sign up"),u.default.createElement(v.default,{component:"form",noValidate:!0,onSubmit:t=>i(this,void 0,void 0,(function*(){t.preventDefault();const n=new FormData(t.currentTarget);yield j.default.post("/auth/signup",{firstName:n.get("firstName"),lastName:n.get("lastName"),email:n.get("email"),password:n.get("password"),passwordConfirm:n.get("passwordConfirm")}).then((t=>{e("/userprojects")})).catch((e=>{}))})),sx:{mt:3}},u.default.createElement(h.default,{container:!0,spacing:2},u.default.createElement(h.default,{item:!0,xs:12,sm:6},u.default.createElement(m.default,{autoComplete:"given-name",name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})),u.default.createElement(h.default,{item:!0,xs:12,sm:6},u.default.createElement(m.default,{required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"family-name"})),u.default.createElement(h.default,{item:!0,xs:12},u.default.createElement(m.default,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})),u.default.createElement(h.default,{item:!0,xs:12},u.default.createElement(m.default,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password"})),u.default.createElement(h.default,{item:!0,xs:12},u.default.createElement(m.default,{required:!0,fullWidth:!0,name:"passwordConfirm",label:"Confirm password",type:"password",id:"passwordConfirm",autoComplete:"confirm-password"}))),u.default.createElement(f.default,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2}},"Sign Up"),u.default.createElement(h.default,{container:!0,justifyContent:"center"},u.default.createElement(p.default,{href:"/",variant:"body2"},"Already have an account? Login")))),u.default.createElement(O,{sx:{mt:5}}))))}},5572:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=l(n(7294)),u=n(9655),c=i(n(6388));t.default=function(e){const{projects:t}=e;let n=(0,u.useNavigate)();const a=t.map(((e,t)=>o.createElement("div",{className:"projects-container",key:t},o.createElement("div",{className:"projects-div"},o.createElement("p",null,e.project_name),o.createElement("button",{className:"messages-btn",onClick:()=>{return t=e.project_id,n("/messages",{state:{projectID:t}}),void c.default.post("/messages/run-consume",{projectID:t},{headers:{"Content-Type":"application/json"}}).catch((e=>{}));var t}},"Click here to see failed messages")))));return o.createElement("div",null,a)}},8138:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=l(n(7294)),u=n(9655),c=(0,o.lazy)((()=>Promise.resolve().then((()=>l(n(7236)))))),d=i(n(9616));t.default=function(){return o.default.createElement(o.default.Fragment,null,o.default.createElement(c,null),o.default.createElement("div",{id:"error-image"},o.default.createElement("div",{id:"error-message"},o.default.createElement(u.Link,{to:"/userprojects"},o.default.createElement("img",{src:d.default,alt:" <-- Sad Rabbit photo",title:"Sad Rabbit photo",height:"300",loading:"lazy"}))),o.default.createElement("div",null,o.default.createElement("h1",{id:"error-text"},o.default.createElement("b",null,"Click on the Rabbit to get back to the home screen!")))))}},3650:function(e,t,n){var a=n(5108),r=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),l=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return l(t,e),t},o=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,l){function i(e){try{u(a.next(e))}catch(e){l(e)}}function o(e){try{u(a.throw(e))}catch(e){l(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,o)}u((a=a.apply(e,t||[])).next())}))},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const c=u(n(6388)),d=i(n(7294)),f=n(7294),s=n(9655),m=(0,d.lazy)((()=>Promise.resolve().then((()=>i(n(1071)))))),p=(0,d.lazy)((()=>Promise.resolve().then((()=>i(n(5593)))))),h=n(7046);t.default=()=>{const[e,t]=(0,f.useState)([]),{state:n}=(0,s.useLocation)(),r=()=>o(void 0,void 0,void 0,(function*(){try{const{data:e}=yield c.default.post("/messages/get-all-messages",{project_id:n.projectID});t(e)}catch(e){}}));return(0,f.useEffect)((()=>{r();const e=(0,h.io)("http://localhost:3000/messages");return e.on("connect",(()=>{e.emit("join","consume-messages")})),e.on("message-added",(e=>{r()})),e.on("disconnect",(()=>a.log("Client side websocket has disconnected"))),()=>{e.disconnect()}}),[]),d.default.createElement(d.default.Fragment,null,d.default.createElement(p,null),d.default.createElement(m,{messages:e}))}},6924:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},i=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,l){function i(e){try{u(a.next(e))}catch(e){l(e)}}function o(e){try{u(a.throw(e))}catch(e){l(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,o)}u((a=a.apply(e,t||[])).next())}))},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=o(n(6388)),c=l(n(7294)),d=n(7294),f=(0,c.lazy)((()=>Promise.resolve().then((()=>l(n(5572)))))),s=(0,c.lazy)((()=>Promise.resolve().then((()=>l(n(6983)))))),m=(0,c.lazy)((()=>Promise.resolve().then((()=>l(n(6548))))));t.default=()=>{const[e,t]=(0,d.useState)([]),[n,a]=(0,d.useState)(!1),[r,l]=(0,d.useState)(!1),[o,p]=(0,d.useState)(!1),h=()=>i(void 0,void 0,void 0,(function*(){try{const{data:e}=yield u.default.get("/user/get-all-user-projects");t(e)}catch(e){}}));return(0,d.useEffect)((()=>{h()}),[]),c.default.createElement("div",null,c.default.createElement("div",null,c.default.createElement(m,null)),c.default.createElement("div",null,c.default.createElement("button",{className:"add-project-btn",onClick:e=>a(!0)},"Add Project"),c.default.createElement(s,{isShown:n,handleClose:()=>{a(!1),l(!1),p(!1)},handleSave:()=>i(void 0,void 0,void 0,(function*(){const e=document.getElementById("project-name").value,t=document.getElementById("project-url").value;e&&t?yield u.default.post("/user/addproject",{projectName:e,projectURL:t},{headers:{"Content-Type":"application/json"}}).then((e=>{a(!1),h()})).catch((e=>{})):(e||l(!0),t||p(!0))})),headerText:"Add New Project",setNameErr:l,setURLErr:p,projectNameError:r,projectURLError:o})),c.default.createElement("div",null,c.default.createElement(f,{projects:e})))}}}]);