import{U as Po,r as g,a as R,g as M,s as F,_ as i,i as h,u as S,b as z,j as t,c as B,d as T,V as jo,X as Co,Y as Fo,o as Ro,B as Mo,Z as So,l as V,$ as zo,S as G,T as ro,L as uo,e as K,D as To,I as wo,W as Wo}from"./index-0931f6b4.js";import{F as Bo,a as so,f as no,C as No}from"./Card-673179e8.js";import{B as Z}from"./Button-ae5c82d4.js";import{i as qo,b as po,S as Eo,c as Uo,F as _o,O as Ao,a as Do}from"./InputAdornment-3b148fe1.js";import{i as to}from"./isMuiElement-03f6191c.js";import{u as Io}from"./Menu-74aac42a.js";function Ho(){const o=Po();return g.useMemo(()=>({back:()=>o(-1),forward:()=>o(1),reload:()=>window.location.reload(),push:r=>o(r),replace:r=>o(r,{replace:!0})}),[o])}function Oo(o){return R("MuiFormControl",o)}M("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const Vo=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],Go=o=>{const{classes:e,margin:r,fullWidth:s}=o,a={root:["root",r!=="none"&&`margin${h(r)}`,s&&"fullWidth"]};return T(a,Oo,e)},Ko=F("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:o},e)=>i({},e.root,e[`margin${h(o.margin)}`],o.fullWidth&&e.fullWidth)})(({ownerState:o})=>i({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},o.margin==="normal"&&{marginTop:16,marginBottom:8},o.margin==="dense"&&{marginTop:8,marginBottom:4},o.fullWidth&&{width:"100%"})),Zo=g.forwardRef(function(e,r){const s=S({props:e,name:"MuiFormControl"}),{children:a,className:d,color:u="primary",component:c="div",disabled:l=!1,error:n=!1,focused:p,fullWidth:f=!1,hiddenLabel:v=!1,margin:b="none",required:m=!1,size:C="medium",variant:x="outlined"}=s,w=z(s,Vo),P=i({},s,{color:u,component:c,disabled:l,error:n,fullWidth:f,hiddenLabel:v,margin:b,required:m,size:C,variant:x}),Y=Go(P),[L,J]=g.useState(()=>{let k=!1;return a&&g.Children.forEach(a,I=>{if(!to(I,["Input","Select"]))return;const W=to(I,["Select"])?I.props.input:I;W&&qo(W.props)&&(k=!0)}),k}),[_,N]=g.useState(()=>{let k=!1;return a&&g.Children.forEach(a,I=>{to(I,["Input","Select"])&&(po(I.props,!0)||po(I.props.inputProps,!0))&&(k=!0)}),k}),[A,q]=g.useState(!1);l&&A&&q(!1);const D=p!==void 0&&!l?p:A;let H;const Q=g.useMemo(()=>({adornedStart:L,setAdornedStart:J,color:u,disabled:l,error:n,filled:_,focused:D,fullWidth:f,hiddenLabel:v,size:C,onBlur:()=>{q(!1)},onEmpty:()=>{N(!1)},onFilled:()=>{N(!0)},onFocus:()=>{q(!0)},registerEffect:H,required:m,variant:x}),[L,u,l,n,_,D,f,v,H,m,C,x]);return t.jsx(Bo.Provider,{value:Q,children:t.jsx(Ko,i({as:c,ownerState:P,className:B(Y.root,d),ref:r},w,{children:a}))})}),Xo=Zo;function Yo(o){return R("MuiFormLabel",o)}const Jo=M("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),U=Jo,Qo=["children","className","color","component","disabled","error","filled","focused","required"],oe=o=>{const{classes:e,color:r,focused:s,disabled:a,error:d,filled:u,required:c}=o,l={root:["root",`color${h(r)}`,a&&"disabled",d&&"error",u&&"filled",s&&"focused",c&&"required"],asterisk:["asterisk",d&&"error"]};return T(l,Yo,e)},ee=F("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:o},e)=>i({},e.root,o.color==="secondary"&&e.colorSecondary,o.filled&&e.filled)})(({theme:o,ownerState:e})=>i({color:(o.vars||o).palette.text.secondary},o.typography.body1,{lineHeight:"1.4375em",padding:0,position:"relative",[`&.${U.focused}`]:{color:(o.vars||o).palette[e.color].main},[`&.${U.disabled}`]:{color:(o.vars||o).palette.text.disabled},[`&.${U.error}`]:{color:(o.vars||o).palette.error.main}})),re=F("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(o,e)=>e.asterisk})(({theme:o})=>({[`&.${U.error}`]:{color:(o.vars||o).palette.error.main}})),te=g.forwardRef(function(e,r){const s=S({props:e,name:"MuiFormLabel"}),{children:a,className:d,component:u="label"}=s,c=z(s,Qo),l=so(),n=no({props:s,muiFormControl:l,states:["color","required","focused","disabled","error","filled"]}),p=i({},s,{color:n.color||"primary",component:u,disabled:n.disabled,error:n.error,filled:n.filled,focused:n.focused,required:n.required}),f=oe(p);return t.jsxs(ee,i({as:u,ownerState:p,className:B(f.root,d),ref:r},c,{children:[a,n.required&&t.jsxs(re,{ownerState:p,"aria-hidden":!0,className:f.asterisk,children:[" ","*"]})]}))}),se=te;function ne(o){return R("MuiInputLabel",o)}M("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);const ie=["disableAnimation","margin","shrink","variant","className"],ae=o=>{const{classes:e,formControl:r,size:s,shrink:a,disableAnimation:d,variant:u,required:c}=o,l={root:["root",r&&"formControl",!d&&"animated",a&&"shrink",s&&s!=="normal"&&`size${h(s)}`,u],asterisk:[c&&"asterisk"]},n=T(l,ne,e);return i({},e,n)},le=F(se,{shouldForwardProp:o=>jo(o)||o==="classes",name:"MuiInputLabel",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:r}=o;return[{[`& .${U.asterisk}`]:e.asterisk},e.root,r.formControl&&e.formControl,r.size==="small"&&e.sizeSmall,r.shrink&&e.shrink,!r.disableAnimation&&e.animated,e[r.variant]]}})(({theme:o,ownerState:e})=>i({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},e.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},e.size==="small"&&{transform:"translate(0, 17px) scale(1)"},e.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},!e.disableAnimation&&{transition:o.transitions.create(["color","transform","max-width"],{duration:o.transitions.duration.shorter,easing:o.transitions.easing.easeOut})},e.variant==="filled"&&i({zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},e.size==="small"&&{transform:"translate(12px, 13px) scale(1)"},e.shrink&&i({userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"},e.size==="small"&&{transform:"translate(12px, 4px) scale(0.75)"})),e.variant==="outlined"&&i({zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},e.size==="small"&&{transform:"translate(14px, 9px) scale(1)"},e.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 32px)",transform:"translate(14px, -9px) scale(0.75)"}))),de=g.forwardRef(function(e,r){const s=S({name:"MuiInputLabel",props:e}),{disableAnimation:a=!1,shrink:d,className:u}=s,c=z(s,ie),l=so();let n=d;typeof n>"u"&&l&&(n=l.filled||l.focused||l.adornedStart);const p=no({props:s,muiFormControl:l,states:["size","variant","required"]}),f=i({},s,{disableAnimation:a,formControl:l,shrink:n,size:p.size,variant:p.variant,required:p.required}),v=ae(f);return t.jsx(le,i({"data-shrink":n,ownerState:f,ref:r,className:B(v.root,u)},c,{classes:v}))}),ce=de;function ue(o){return R("MuiFormHelperText",o)}const pe=M("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),fo=pe;var mo;const fe=["children","className","component","disabled","error","filled","focused","margin","required","variant"],me=o=>{const{classes:e,contained:r,size:s,disabled:a,error:d,filled:u,focused:c,required:l}=o,n={root:["root",a&&"disabled",d&&"error",s&&`size${h(s)}`,r&&"contained",c&&"focused",u&&"filled",l&&"required"]};return T(n,ue,e)},ge=F("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:r}=o;return[e.root,r.size&&e[`size${h(r.size)}`],r.contained&&e.contained,r.filled&&e.filled]}})(({theme:o,ownerState:e})=>i({color:(o.vars||o).palette.text.secondary},o.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${fo.disabled}`]:{color:(o.vars||o).palette.text.disabled},[`&.${fo.error}`]:{color:(o.vars||o).palette.error.main}},e.size==="small"&&{marginTop:4},e.contained&&{marginLeft:14,marginRight:14})),xe=g.forwardRef(function(e,r){const s=S({props:e,name:"MuiFormHelperText"}),{children:a,className:d,component:u="p"}=s,c=z(s,fe),l=so(),n=no({props:s,muiFormControl:l,states:["variant","size","disabled","error","filled","focused","required"]}),p=i({},s,{component:u,contained:n.variant==="filled"||n.variant==="outlined",variant:n.variant,size:n.size,disabled:n.disabled,error:n.error,filled:n.filled,focused:n.focused,required:n.required}),f=me(p);return t.jsx(ge,i({as:u,ownerState:p,className:B(f.root,d),ref:r},c,{children:a===" "?mo||(mo=t.jsx("span",{className:"notranslate",children:"​"})):a}))}),he=xe;function ve(o){return R("MuiTextField",o)}M("MuiTextField",["root"]);const be=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],Ce={standard:Uo,filled:_o,outlined:Ao},Fe=o=>{const{classes:e}=o;return T({root:["root"]},ve,e)},Ie=F(Xo,{name:"MuiTextField",slot:"Root",overridesResolver:(o,e)=>e.root})({}),ye=g.forwardRef(function(e,r){const s=S({props:e,name:"MuiTextField"}),{autoComplete:a,autoFocus:d=!1,children:u,className:c,color:l="primary",defaultValue:n,disabled:p=!1,error:f=!1,FormHelperTextProps:v,fullWidth:b=!1,helperText:m,id:C,InputLabelProps:x,inputProps:w,InputProps:P,inputRef:Y,label:L,maxRows:J,minRows:_,multiline:N=!1,name:A,onBlur:q,onChange:D,onFocus:H,placeholder:Q,required:k=!1,rows:I,select:W=!1,SelectProps:oo,type:yo,value:io,variant:O="outlined"}=s,Lo=z(s,be),ao=i({},s,{autoFocus:d,color:l,disabled:p,error:f,fullWidth:b,multiline:N,required:k,select:W,variant:O}),ko=Fe(ao),E={};O==="outlined"&&(x&&typeof x.shrink<"u"&&(E.notched=x.shrink),E.label=L),W&&((!oo||!oo.native)&&(E.id=void 0),E["aria-describedby"]=void 0);const j=Io(C),eo=m&&j?`${j}-helper-text`:void 0,lo=L&&j?`${j}-label`:void 0,$o=Ce[O],co=t.jsx($o,i({"aria-describedby":eo,autoComplete:a,autoFocus:d,defaultValue:n,fullWidth:b,multiline:N,name:A,rows:I,maxRows:J,minRows:_,type:yo,value:io,id:j,inputRef:Y,onBlur:q,onChange:D,onFocus:H,placeholder:Q,inputProps:w},E,P));return t.jsxs(Ie,i({className:B(ko.root,c),disabled:p,error:f,fullWidth:b,ref:r,required:k,color:l,variant:O,ownerState:ao},Lo,{children:[L!=null&&L!==""&&t.jsx(ce,i({htmlFor:j,id:lo},x,{children:L})),W?t.jsx(Eo,i({"aria-describedby":eo,id:j,labelId:lo,value:io,input:co},oo,{children:u})):co,m&&t.jsx(he,i({id:eo},v,{children:m}))]}))}),go=ye;function Le(o){return R("MuiCircularProgress",o)}M("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const ke=["className","color","disableShrink","size","style","thickness","value","variant"];let X=o=>o,xo,ho,vo,bo;const $=44,$e=Co(xo||(xo=X`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),Pe=Co(ho||(ho=X`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),je=o=>{const{classes:e,variant:r,color:s,disableShrink:a}=o,d={root:["root",r,`color${h(s)}`],svg:["svg"],circle:["circle",`circle${h(r)}`,a&&"circleDisableShrink"]};return T(d,Le,e)},Re=F("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:r}=o;return[e.root,e[r.variant],e[`color${h(r.color)}`]]}})(({ownerState:o,theme:e})=>i({display:"inline-block"},o.variant==="determinate"&&{transition:e.transitions.create("transform")},o.color!=="inherit"&&{color:(e.vars||e).palette[o.color].main}),({ownerState:o})=>o.variant==="indeterminate"&&Fo(vo||(vo=X`
      animation: ${0} 1.4s linear infinite;
    `),$e)),Me=F("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(o,e)=>e.svg})({display:"block"}),Se=F("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(o,e)=>{const{ownerState:r}=o;return[e.circle,e[`circle${h(r.variant)}`],r.disableShrink&&e.circleDisableShrink]}})(({ownerState:o,theme:e})=>i({stroke:"currentColor"},o.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},o.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:o})=>o.variant==="indeterminate"&&!o.disableShrink&&Fo(bo||(bo=X`
      animation: ${0} 1.4s ease-in-out infinite;
    `),Pe)),ze=g.forwardRef(function(e,r){const s=S({props:e,name:"MuiCircularProgress"}),{className:a,color:d="primary",disableShrink:u=!1,size:c=40,style:l,thickness:n=3.6,value:p=0,variant:f="indeterminate"}=s,v=z(s,ke),b=i({},s,{color:d,disableShrink:u,size:c,thickness:n,value:p,variant:f}),m=je(b),C={},x={},w={};if(f==="determinate"){const P=2*Math.PI*(($-n)/2);C.strokeDasharray=P.toFixed(3),w["aria-valuenow"]=Math.round(p),C.strokeDashoffset=`${((100-p)/100*P).toFixed(3)}px`,x.transform="rotate(-90deg)"}return t.jsx(Re,i({className:B(m.root,a),style:i({width:c,height:c},x,l),ownerState:b,ref:r,role:"progressbar"},w,v,{children:t.jsx(Me,{className:m.svg,ownerState:b,viewBox:`${$/2} ${$/2} ${$} ${$}`,children:t.jsx(Se,{className:m.circle,style:C,ownerState:b,cx:$,cy:$,r:($-n)/2,fill:"none",strokeWidth:n})})}))}),Te=ze;function we(o){return R("MuiLoadingButton",o)}const We=M("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),y=We,Be=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],Ne=o=>{const{loading:e,loadingPosition:r,classes:s}=o,a={root:["root",e&&"loading"],startIcon:[e&&`startIconLoading${h(r)}`],endIcon:[e&&`endIconLoading${h(r)}`],loadingIndicator:["loadingIndicator",e&&`loadingIndicator${h(r)}`]},d=T(a,we,s);return i({},s,d)},qe=o=>o!=="ownerState"&&o!=="theme"&&o!=="sx"&&o!=="as"&&o!=="classes",Ee=F(Z,{shouldForwardProp:o=>qe(o)||o==="classes",name:"MuiLoadingButton",slot:"Root",overridesResolver:(o,e)=>[e.root,e.startIconLoadingStart&&{[`& .${y.startIconLoadingStart}`]:e.startIconLoadingStart},e.endIconLoadingEnd&&{[`& .${y.endIconLoadingEnd}`]:e.endIconLoadingEnd}]})(({ownerState:o,theme:e})=>i({[`& .${y.startIconLoadingStart}, & .${y.endIconLoadingEnd}`]:{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0}},o.loadingPosition==="center"&&{transition:e.transitions.create(["background-color","box-shadow","border-color"],{duration:e.transitions.duration.short}),[`&.${y.loading}`]:{color:"transparent"}},o.loadingPosition==="start"&&o.fullWidth&&{[`& .${y.startIconLoadingStart}, & .${y.endIconLoadingEnd}`]:{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0,marginRight:-8}},o.loadingPosition==="end"&&o.fullWidth&&{[`& .${y.startIconLoadingStart}, & .${y.endIconLoadingEnd}`]:{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0,marginLeft:-8}})),Ue=F("span",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(o,e)=>{const{ownerState:r}=o;return[e.loadingIndicator,e[`loadingIndicator${h(r.loadingPosition)}`]]}})(({theme:o,ownerState:e})=>i({position:"absolute",visibility:"visible",display:"flex"},e.loadingPosition==="start"&&(e.variant==="outlined"||e.variant==="contained")&&{left:e.size==="small"?10:14},e.loadingPosition==="start"&&e.variant==="text"&&{left:6},e.loadingPosition==="center"&&{left:"50%",transform:"translate(-50%)",color:(o.vars||o).palette.action.disabled},e.loadingPosition==="end"&&(e.variant==="outlined"||e.variant==="contained")&&{right:e.size==="small"?10:14},e.loadingPosition==="end"&&e.variant==="text"&&{right:6},e.loadingPosition==="start"&&e.fullWidth&&{position:"relative",left:-10},e.loadingPosition==="end"&&e.fullWidth&&{position:"relative",right:-10})),_e=g.forwardRef(function(e,r){const s=S({props:e,name:"MuiLoadingButton"}),{children:a,disabled:d=!1,id:u,loading:c=!1,loadingIndicator:l,loadingPosition:n="center",variant:p="text"}=s,f=z(s,Be),v=Io(u),b=l??t.jsx(Te,{"aria-labelledby":v,color:"inherit",size:16}),m=i({},s,{disabled:d,loading:c,loadingIndicator:b,loadingPosition:n,variant:p}),C=Ne(m),x=c?t.jsx(Ue,{className:C.loadingIndicator,ownerState:m,children:b}):null;return t.jsxs(Ee,i({disabled:d||c,id:v,ref:r},f,{variant:p,classes:C,ownerState:m,children:[m.loadingPosition==="end"?a:x,m.loadingPosition==="end"?x:a]}))}),Ae=_e;function De(){const o=Ro(),e=Ho(),[r,s]=g.useState(!1),a=()=>{e.push("/dashboard")},d=t.jsxs(t.Fragment,{children:[t.jsxs(G,{spacing:3,children:[t.jsx(go,{name:"agb email",label:"agb Email address"}),t.jsx(go,{name:"password",label:"Password",type:r?"text":"password",InputProps:{endAdornment:t.jsx(Do,{position:"end",children:t.jsx(wo,{onClick:()=>s(!r),edge:"end",children:t.jsx(K,{icon:r?"eva:eye-fill":"eva:eye-off-fill"})})})}})]}),t.jsx(G,{direction:"row",alignItems:"center",justifyContent:"flex-end",sx:{my:3},children:t.jsx(uo,{variant:"subtitle2",underline:"hover",children:"Forgot password?"})}),t.jsx(Ae,{fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"inherit",onClick:a,children:"Login"})]});return t.jsxs(Mo,{sx:{...So({color:V(o.palette.background.default,.9),imgUrl:"/assets/background/overlay_4.jpg"}),height:1},children:[t.jsx(zo,{sx:{position:"fixed",top:{xs:16,md:24},left:{xs:16,md:24}}}),t.jsx(G,{alignItems:"center",justifyContent:"center",sx:{height:1},children:t.jsxs(No,{sx:{p:5,width:1,maxWidth:420},children:[t.jsx(ro,{variant:"h4",children:"Sign in to Minimal"}),t.jsxs(ro,{variant:"body2",sx:{mt:2,mb:5},children:["Don’t have an account?",t.jsx(uo,{variant:"subtitle2",sx:{ml:.5},children:"Get started"})]}),t.jsxs(G,{direction:"row",spacing:2,children:[t.jsx(Z,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",sx:{borderColor:V(o.palette.grey[500],.16)},children:t.jsx(K,{icon:"eva:google-fill",color:"#DF3E30"})}),t.jsx(Z,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",sx:{borderColor:V(o.palette.grey[500],.16)},children:t.jsx(K,{icon:"eva:facebook-fill",color:"#1877F2"})}),t.jsx(Z,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",sx:{borderColor:V(o.palette.grey[500],.16)},children:t.jsx(K,{icon:"eva:twitter-fill",color:"#1C9CEA"})})]}),t.jsx(To,{sx:{my:3},children:t.jsx(ro,{variant:"body2",sx:{color:"text.secondary"},children:"OR"})}),d]})})]})}function Xe(){return t.jsxs(t.Fragment,{children:[t.jsx(Wo,{children:t.jsx("title",{children:" Login | Azhar gB "})}),t.jsx(De,{})]})}export{Xe as default};