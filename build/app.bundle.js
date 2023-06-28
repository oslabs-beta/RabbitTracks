"use strict";(self.webpackChunkrabbittracks=self.webpackChunkrabbittracks||[]).push([[143],{4706:(e,t,r)=>{r.r(t),r.d(t,{alertClasses:()=>g,default:()=>L,getAlertUtilityClass:()=>h});var a=r(3366),o=r(7462),l=r(7294),n=r(6010),i=r(4780),s=r(1796),c=r(1719),d=r(8884),p=r(6622),v=r(8881),u=r(4867);function h(e){return(0,u.Z)("MuiAlert",e)}const g=(0,r(1588).Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]);var m=r(2557),f=r(41),x=r(5893);const A=(0,f.Z)((0,x.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),C=(0,f.Z)((0,x.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),Z=(0,f.Z)((0,x.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),M=(0,f.Z)((0,x.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined");var S,j=r(6903);const k=["action","children","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"],$=(0,c.ZP)(v.Z,{name:"MuiAlert",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`${r.variant}${(0,p.Z)(r.color||r.severity)}`]]}})((({theme:e,ownerState:t})=>{const r="light"===e.palette.mode?s._j:s.$n,a="light"===e.palette.mode?s.$n:s._j,l=t.color||t.severity;return(0,o.Z)({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},l&&"standard"===t.variant&&{color:e.vars?e.vars.palette.Alert[`${l}Color`]:r(e.palette[l].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${l}StandardBg`]:a(e.palette[l].light,.9),[`& .${g.icon}`]:e.vars?{color:e.vars.palette.Alert[`${l}IconColor`]}:{color:"dark"===e.palette.mode?e.palette[l].main:e.palette[l].light}},l&&"outlined"===t.variant&&{color:e.vars?e.vars.palette.Alert[`${l}Color`]:r(e.palette[l].light,.6),border:`1px solid ${(e.vars||e).palette[l].light}`,[`& .${g.icon}`]:e.vars?{color:e.vars.palette.Alert[`${l}IconColor`]}:{color:"dark"===e.palette.mode?e.palette[l].main:e.palette[l].light}},l&&"filled"===t.variant&&(0,o.Z)({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${l}FilledColor`],backgroundColor:e.vars.palette.Alert[`${l}FilledBg`]}:{backgroundColor:"dark"===e.palette.mode?e.palette[l].dark:e.palette[l].main,color:e.palette.getContrastText("dark"===e.palette.mode?e.palette[l].dark:e.palette[l].main)}))})),y=(0,c.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,t)=>t.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),b=(0,c.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),z=(0,c.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),w={success:(0,x.jsx)(A,{fontSize:"inherit"}),warning:(0,x.jsx)(C,{fontSize:"inherit"}),error:(0,x.jsx)(Z,{fontSize:"inherit"}),info:(0,x.jsx)(M,{fontSize:"inherit"})},L=l.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiAlert"}),{action:l,children:s,className:c,closeText:v="Close",color:u,icon:g,iconMapping:f=w,onClose:A,role:C="alert",severity:Z="success",variant:M="standard"}=r,L=(0,a.Z)(r,k),R=(0,o.Z)({},r,{color:u,severity:Z,variant:M}),I=(e=>{const{variant:t,color:r,severity:a,classes:o}=e,l={root:["root",`${t}${(0,p.Z)(r||a)}`,`${t}`],icon:["icon"],message:["message"],action:["action"]};return(0,i.Z)(l,h,o)})(R);return(0,x.jsxs)($,(0,o.Z)({role:C,elevation:0,ownerState:R,className:(0,n.Z)(I.root,c),ref:t},L,{children:[!1!==g?(0,x.jsx)(y,{ownerState:R,className:I.icon,children:g||f[Z]||w[Z]}):null,(0,x.jsx)(b,{ownerState:R,className:I.message,children:s}),null!=l?(0,x.jsx)(z,{ownerState:R,className:I.action,children:l}):null,null==l&&A?(0,x.jsx)(z,{ownerState:R,className:I.action,children:(0,x.jsx)(m.Z,{size:"small","aria-label":v,title:v,color:"inherit",onClick:A,children:S||(S=(0,x.jsx)(j.Z,{fontSize:"small"}))})}):null]}))}))}},e=>{e.O(0,[626,538,746,804,413,629,991,461,957],(()=>(8957,e(e.s=8957)))),e.O()}]);