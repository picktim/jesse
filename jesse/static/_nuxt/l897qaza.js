import{o as a,c as p,b as l,h as W,V as ke,r as x,F as Y,n as ie,v as S,w,Y as ae,D as n,t as q,a0 as fe,a1 as pe,d as r,a2 as Me,a3 as Re,M as F,b5 as Q,G as K,N as z,W as xe,$ as Ae,y as se,aX as $e,j as C,K as N,e as we,aV as Oe,S as Be,a$ as Ce,b6 as Ne,b0 as ze,a5 as De,a6 as ge,a as Fe,a7 as qe,a8 as He,aa as We,ab as Ye,ac as Qe,i as Ze,B as Ge,k as J,l as Je,m as Ke,Z as ve,E as V,L as ye,P as te,Q as Xe,R as et,T as tt}from"./P2RTDEVw.js";import{a as st,r as ot}from"./D14gKO9u.js";import{d as Te,r as be,_ as rt,a as nt,b as lt,c as at,f as it,e as ut}from"./Bm-y-GSe.js";import{_ as dt}from"./Dp8W6R0p.js";import{_ as ct}from"./FNX9_brP.js";import{s as he,T as mt,l as ft,d as pt,_ as gt}from"./CA432Fil.js";import{u as vt}from"./C6Z10G10.js";import"./CgnKy_Hz.js";function _e(L,s){return a(),p("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[l("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"})])}function yt(L,s){return a(),p("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[l("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"})])}const bt={base:"animate-pulse",background:"bg-gray-100 dark:bg-gray-800",rounded:"rounded-md"},ht={class:"mb-4"},_t={class:""},kt={class:"relative rounded-lg shadow flex divide-x divide-gray-200 dark:divide-gray-700","aria-label":"Tabs"},xt=["to","onClick"],$t=["onClick"],wt=["onClick"],Ct={class:"absolute right-[1em] focus:outline-none"},Tt=l("span",{"aria-hidden":"true",class:"absolute inset-x-0 bottom-0 h-0.5 bg-transparent dark:bg-gray-600"},null,-1),Vt=W({__name:"LiveTabs",props:{currentTab:{},tabs:{}},emits:["close","cancel"],setup(L,{emit:s}){const _=ke(),v=x(_.params.id),h=x(!1),t=x(!1),T=x(null),y=x(null),c=s;function m(i){if(Object.keys(Q().tabs).length>=K().planLimits.live_trading_tabs){z("error",`You have reached the limit of "${K().planLimits.live_trading_tabs}" tabs for your "${K().plan}" plan. Please upgrade your plan to add more tabs.`);return}Q().addTab(i)}function $(i){xe().push(`/live/${i}`)}function P(i){if(!i.form.routes.length)return"New Tab";if(i.results.exception.error&&i.results.monitoring)return"Error";const f=i.form.routes[0];let d="";const U=i.form.exchange;return U&&(d+=`${U} • `),f.strategy&&(d+=`${f.strategy} • `),f.symbol&&(d+=`${f.symbol} • `),f.timeframe&&(d+=`${f.timeframe}`),d=d.endsWith(" • ")?d.slice(0,-3):d,i.results.monitoring&&!i.results.finished?`🟢 ${d}`:i.results.exception.error&&i.results.monitoring?`🔴 ${d}`:i.results.showResults?`${d} | Results`:d}function j(i){T.value=i.id,i.results.exception.error||i.results.finished||i.results.booting?h.value=!0:c("close",T.value)}return(i,f)=>{const d=Ae,U=se,H=$e;return a(),p("div",ht,[l("div",_t,[l("nav",kt,[(a(!0),p(Y,null,ie(i.tabs,b=>(a(),S(d,{key:b.id,class:"relative group min-w-0 flex-1 overflow-hidden text-center flex items-center",text:P(b),"open-delay":700,onMouseup:Re(D=>j(b),["middle"])},{default:w(()=>[l("div",{to:`/live/${b.id}`,class:ae([b.id===n(v)?"text-gray-900 dark:text-gray-100 font-bold ":"text-gray-500 dark:text-gray-300 hover:text-gray-700 font-medium ","whitespace-nowrap py-3 px-4 inline-block select-none cursor-pointer focus:outline-none w-full text-xs bg-gray-50 dark:bg-backdrop-dark"]),onClick:D=>$(b.id)},[l("span",null,q(P(b)),1),l("span",{"aria-hidden":"true",class:ae([b.id===n(v)&&Object.keys(i.tabs).length>1?"bg-indigo-400":"bg-transparent dark:bg-gray-600","absolute inset-x-0 bottom-0 h-0.5"])},null,2)],10,xt),(b.results.booting||b.results.monitoring)&&!b.results.finished?fe((a(),p("button",{key:0,class:"absolute right-[0.5em] focus:outline-none",onClick:D=>{t.value=!0,y.value=b.id}},[r(n(st),{class:"h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-200 bg-gray-100 dark:bg-gray-700 rounded-full","aria-hidden":"true"})],8,$t)),[[pe,Object.keys(i.tabs).length>1]]):fe((a(),p("button",{key:1,class:"absolute right-[0.5em] focus:outline-none",onClick:D=>j(b)},[r(n(Me),{class:"h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-200 bg-gray-100 dark:bg-gray-700 rounded-full","aria-hidden":"true"})],8,wt)),[[pe,Object.keys(i.tabs).length>1]])]),_:2},1032,["text","onMouseup"]))),128)),r(d,{text:"New Tab",popper:{arrow:!0}},{default:w(()=>[l("div",{class:"select-none cursor-pointer text-gray-400 dark:text-gray-100 hover:text-gray-600 focus:outline-none group relative w-14 overflow-hidden bg-gray-50 dark:bg-backdrop-dark py-3 px-4 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-center",onClick:f[0]||(f[0]=b=>m(i.currentTab))},[l("button",Ct,[r(n(ot),{class:"h-6 w-6 rounded-full","aria-hidden":"true"})]),Tt])]),_:1})])]),r(H,{modelValue:n(t),"onUpdate:modelValue":f[2]||(f[2]=b=>F(t)?t.value=b:null),title:"Termination Confirm",description:"Are you sure you want to terminate this session?",type:"info"},{default:w(()=>[r(U,{variant:"solid",color:"red",class:"flex justify-center",label:"Terminate",onClick:f[1]||(f[1]=b=>{c("cancel",n(y)),t.value=!1})})]),_:1},8,["modelValue"]),r(H,{modelValue:n(h),"onUpdate:modelValue":f[4]||(f[4]=b=>F(h)?h.value=b:null),title:"Close Live Tab Confirm",description:"Are you sure you want to close this tab?",cancelBtnContent:"cancel",type:"info"},{default:w(()=>[r(U,{variant:"solid",color:"red",class:"flex justify-center",label:"Close",onClick:f[3]||(f[3]=b=>{c("close",n(T)),h.value=!1})})]),_:1},8,["modelValue"])])}}}),Lt=W({__name:"LiveOrders",props:{orders:{}},setup(L){const s=L,_=C(()=>{if(!s.orders.length)return[];const v=[];for(let h=s.orders.length-1;h>=0;h--){const t=s.orders[h];v.push([{value:t.id.slice(-12),style:"text-xs",tooltip:t.id,tag:"code"},{value:N.timestampToTimeOnly(t.created_at),style:"text-xs",tooltip:N.timestampToTime(t.created_at)},{value:t.symbol,style:"text-xs"},{value:t.type,style:"text-xs"},{value:t.side,style:N.colorBasedOnSide(t.side)},{value:t.price,style:"text-xs"},{value:t.qty,style:N.colorBasedOnSide(t.side)},{value:t.status,style:"text-xs"}])}return v});return(v,h)=>{const t=Te,T=dt;return n(_).length?(a(),S(t,{key:0,data:n(_),"header-items":["ID","Created","Symbol","Type","Side","Price","QTY","Status"],header:""},null,8,["data"])):(a(),S(T,{key:1}))}}}),St=l("p",null," If you think something is wrong with your running live session, you can submit a report. By submitting this form, the logs of this session will be sent to Jesse's developers so we can see what's going on. ",-1),Et=l("br",null,null,-1),It=l("p",null,[we("Your exchange API keys and strategies are safe and "),l("b",null,"are never sent to us.")],-1),Pt=l("br",null,null,-1),jt=l("br",null,null,-1),Ut=l("br",null,null,-1),Mt={class:"flex justify-end item-center"},Rt={class:"flex justify-end"},At=W({__name:"ReportLiveSession",props:{session:{}},emits:["close"],setup(L,{emit:s}){const _=s,v=x(!1),h=L,t=x({description:"",email:""}),T=()=>{_("close")},y=async()=>{if(v.value=!0,!t.value.description){z("error","Please enter a description."),v.value=!1;return}const{data:c,error:m}=await Oe("/report-exception",{description:t.value.description,email:t.value.email,traceback:"manual report",mode:"live",attach_logs:!0,session_id:h.session},!0);if(v.value=!1,m.value&&m.value.statusCode!==200){z("error",`[${m.value.statusCode}]: ${m.value.statusText}`);return}const $=c.value;$.status==="success"?(t.value.description="",t.value.email="",z("success",$.message),T()):$.status==="error"&&z("error",$.message)};return(c,m)=>{const $=Be,P=Ce,j=Ne,i=se,f=ze;return a(),p(Y,null,[St,Et,It,Pt,r(f,{state:n(t),class:"space-y-4",onSubmit:y},{default:w(()=>[r(P,{label:"Email (optional)",help:"Enter your email address for us to know who sent the email and possibly reply back to you."},{default:w(()=>[r($,{modelValue:n(t).email,"onUpdate:modelValue":m[0]||(m[0]=d=>n(t).email=d),placeholder:"Email address...",type:"email"},null,8,["modelValue"])]),_:1}),jt,r(P,{label:"Description:",name:"Description"},{default:w(()=>[r(j,{modelValue:n(t).description,"onUpdate:modelValue":m[1]||(m[1]=d=>n(t).description=d),rows:10,placeholder:"Describe what you think is wrong in this session..."},null,8,["modelValue"])]),_:1}),Ut,l("div",Mt,[l("div",Rt,[r(i,{color:"gray",variant:"link",class:"mr-8",label:"Cancel",onClick:m[2]||(m[2]=d=>T())}),r(i,{type:"submit",class:"w-48 flex justify-center",label:"Submit",loading:n(v),disabled:n(v)},null,8,["loading","disabled"])])])]),_:1},8,["state"])],64)}}}),Ot=De(ge.ui.strategy,ge.ui.skeleton,bt),Bt=W({inheritAttrs:!1,props:{class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(L){const{ui:s,attrs:_}=qe("skeleton",He(L,"ui"),Ot),v=C(()=>We(Ye(s.value.base,s.value.background,s.value.rounded),L.class));return{ui:s,attrs:_,skeletonClass:v}}});function Nt(L,s,_,v,h,t){return a(),p("div",Qe({class:L.skeletonClass},L.attrs),null,16)}const zt=Fe(Bt,[["render",Nt]]),Dt={class:"mb-16"},Ft={key:0,class:"rounded overflow-hidden border-2 border-gray-100 dark:border-gray-600 p-4"},qt={key:1},Ht=W({__name:"CandlesChart",props:{form:{},results:{}},setup(L){const s=Ze(),_=C(()=>Ge().params.id),v=x(!0),h=x(2),t=L,T=x();let y=null,c=null;const m={orderEntries:{},positionEntry:null},$=C(()=>s.value),P=t.form.exchange,j=C(()=>`${P}-${t.results.selectedRoute.symbol}-${t.results.selectedRoute.timeframe}`),i=C(()=>t.results.currentCandles),f=C(()=>{const g=t.results.positions.find(k=>k[0].value===t.results.selectedRoute.symbol);return g===void 0?[]:g}),d=C(()=>f.value[2].value),U=C(()=>Number(f.value[1].value)>0?"long":Number(f.value[1].value)<0?"short":"close");J(i,(g,k)=>{c!==null&&oe(g[j.value])}),J($,g=>{ee(g)}),J(d,(g,k)=>{c!==null&&g!==k&&D()}),J(()=>t.results.orders,()=>{c!==null&&X()},{deep:!0}),Je(async()=>{setTimeout(async()=>{await H()},200)});async function H(){v.value=!0,await Q().fetchCandles(_.value),v.value=!1,he.width=T.value.clientWidth,y=mt(T.value,he),y.applyOptions({watermark:{visible:!0,fontSize:16,horzAlign:"left",vertAlign:"bottom",color:"#888",text:`${t.results.selectedRoute.symbol} • ${t.results.selectedRoute.timeframe}`}}),c=y.addCandlestickSeries(),c.setData(t.results.candles),y.timeScale().fitContent(),c.applyOptions({priceFormat:{type:"price",precision:h.value,minMove:.01}}),D(),X(),ee($.value)}Ke(()=>{b()});function b(){y!==null&&(y.remove(),y=null),c&&(c=null)}function D(){const g=U.value==="long"?"#00AB5C":"#FF497D";if(m.positionEntry&&c.removePriceLine(m.positionEntry),Number(d.value)>0){const k={price:Number(d.value),color:g,lineWidth:1,lineStyle:0,axisLabelVisible:!0,title:"Entry Price"};m.positionEntry=c.createPriceLine(k)}}function X(){const g=f.value[0].value;for(const k in m.orderEntries)c.removePriceLine(m.orderEntries[k]),delete m.orderEntries[k];t.results.orders.forEach(k=>{const I=k.side==="buy"?"#00AB5C":"#FF497D",O=ve.startCase(ve.lowerCase(`${k.side} ${k.type}`));if((k.status==="ACTIVE"||k.status==="QUEUED")&&k.symbol===g){const B={price:Number(k.price),color:I,lineWidth:1,lineStyle:0,axisLabelVisible:!0,title:O};m.orderEntries[k.id]=c.createPriceLine(B)}})}function oe(g){if(g===void 0)throw new TypeError("candle is undefined!");if(t.results.candles.length===0||t.results.candles[t.results.candles.length-1].time>g.time)return;const I=String(g.open).indexOf("."),O=I===-1?0:String(g.open).length-I-1;h.value!==O&&(h.value=O,c.applyOptions({priceFormat:{type:"price",precision:h.value,minMove:Math.pow(10,-O).toFixed(O)}})),c.update(g)}function ee(g){y!==null&&y.applyOptions(g==="light"?ft.chart:pt.chart)}function re(g){t.results.selectedRoute=g,b(),H()}return(g,k)=>{const I=zt,O=se;return a(),p("div",Dt,[n(v)?(a(),p("div",Ft,[r(I,{class:"h-4 w-full mb-4"}),r(I,{class:"h-4 w-2/3 mb-4"}),r(I,{class:"h-4 w-1/2 mb-4"}),r(I,{class:"h-4 w-full mb-4"}),r(I,{class:"h-4 w-full mb-4"}),r(I,{class:"h-4 w-2/3 mb-4"}),r(I,{class:"h-4 w-full mb-4"}),r(I,{class:"h-4 w-full"})])):V("",!0),l("div",{ref_key:"chartContainer",ref:T,class:ae({"rounded overflow-hidden border-2 border-gray-100 dark:border-gray-600":!n(v)})},null,2),t.form.routes.length>1?(a(),p("div",qt,[(a(!0),p(Y,null,ie(t.form.routes,B=>(a(),S(O,{key:B.symbol,variant:"soft",color:"gray",disabled:g.results.selectedRoute.symbol===B.symbol&&g.results.selectedRoute.timeframe===B.timeframe,class:"mt-2 mr-2",onClick:ue=>re(B)},{default:w(()=>[we(q(B.symbol)+" • "+q(B.timeframe),1)]),_:2},1032,["disabled","onClick"]))),128))])):V("",!0)])}}}),Wt={key:0,class:"flex flex-col items-center justify-center select-none mt-[10%]"},Yt=["textContent"],Qt={class:"mt-8"},Zt={key:1,class:"mx-auto container mt-8"},Gt={key:0,"data-cy":"live-page-content"},Jt={class:"flex justify-between items-center"},Kt=l("span",null," No exchange API keys found. Please add at least one: ",-1),Xt={class:"grid grid-cols-1 gap-6"},es={class:"flex justify-between items-center"},ts=l("span",null," No notification API keys found. Please add at least one: ",-1),ss={key:1},os={key:0,class:"mb-8"},rs=l("span",null,"More",-1),ns={key:0},ls={key:0,class:"mt-8 lg:mt-0"},as={key:1,"data-cy":"live-action-button"},is={key:1,class:"my-8 border-2 dark:border-gray-600 rounded-full"},us={key:2,class:"bg-white dark:bg-gray-700 grid grid-cols-1 gap-6 border dark:border-gray-600 rounded py-4 px-6 select-none"},ds={class:"text-sm font-medium text-gray-500 dark:text-gray-400 truncate"},cs={class:"text-sm font-semibold text-gray-900 dark:text-gray-100"},ms={class:"flex justify-between items-center"},fs={class:"flex justify-start items-center"},ps=l("span",null,"Info Logs:",-1),gs={class:"focus:outline-none flex justify-start items-center"},vs={class:"text-sm font-semibold text-gray-900 dark:text-gray-100"},ys={class:"flex justify-between items-center"},bs={class:"flex justify-start items-center"},hs=l("span",null,"Error Logs:",-1),_s={class:"focus:outline-none flex justify-start items-center"},ks={class:"text-sm font-semibold text-gray-900 dark:text-gray-100"},xs={key:3},$s=W({__name:"LiveTab",props:{form:{},results:{},session:{}},setup(L){const s=L,_=x([]),v=x(!1),h=x(!1),t=x(!1),T=x(!1),y=x(!1),c=x(!1),m=x(!1),$=x(!1),P=x(!1),j=x(!1),i=K(),f=Q(),d=x([]);async function U(){if(!(s.results.monitoring||s.results.booting)){if(!s.form.paper_mode){const e=i.exchangeApiKeys.find(o=>o.id===s.form.exchange_api_key_id);e&&(s.form.exchange=e.exchange)}try{d.value.length||(d.value=await K().getExchangeSupportedSymbols(s.form.exchange));for(let e=0;e<s.form.routes.length;e++)d.value.includes(s.form.routes[e].symbol)||(s.form.routes[e].symbol=d.value[0]);if(s.form.data_routes.length>0)for(let e=0;e<s.form.data_routes.length;e++)d.value.includes(s.form.data_routes[e].symbol)||(s.form.data_routes[e].symbol=d.value[0])}catch(e){console.error("Error updating supported symbols:",e)}}}s.form.exchange&&(!s.results.monitoring&&!s.results.booting||!d.value.length)&&U(),J(()=>s.form.exchange,async(e,o)=>{e!==o&&(d.value=[],await U())});const H=C(()=>{const e=[{label:"Exchange",value:s.results.generalInfo.exchange},{label:"Current Time",value:N.timestampToTime(s.results.generalInfo.current_time)},{label:"Debug Mode",value:s.results.generalInfo.debug_mode},{label:"Paper Trade",value:s.results.generalInfo.paper_mode},{label:"PNL",value:`${s.results.generalInfo.pnl} (${s.results.generalInfo.pnl_perc}%)`},{label:"Started",value:N.timestampToTime(s.results.generalInfo.started_at)},{label:"Started/Current Balance",value:`${s.results.generalInfo.started_balance} / ${s.results.generalInfo.current_balance}`},{label:"Trades",value:`${s.results.generalInfo.count_trades}`}];return s.results.generalInfo.leverage_type!=="spot"&&(e.push({label:"Available Margin",value:`${s.results.generalInfo.available_margin}`}),e.push({label:"Leverage",value:`${s.results.generalInfo.leverage}x (${s.results.generalInfo.leverage_type})`})),e}),b=C(()=>i.notificationApiKeys.map(e=>({label:`${e.name} - ${e.driver}`,value:e.id}))),D=C(()=>Math.round(s.results.progressbar.estimated_remaining_seconds)===0?"Please wait...":`${Math.round(s.results.progressbar.estimated_remaining_seconds)} seconds remaining...`),X=C(()=>{if(!s.results.orders)return[];const e=[],o=5,M=s.results.orders.length,R=M-o>=0?M-o:0;for(let Z=M-1;Z>=R;Z--){const E=s.results.orders[Z],A=E.status==="PARTIALLY FILLED"?`${E.filled_qty}/${E.qty}`:E.qty;e.push([{value:N.timestampToTimeOnly(E.created_at),style:"text-xs",tooltip:N.timestampToTime(E.created_at)},{value:E.symbol,style:"text-xs"},{value:E.type,style:"text-xs"},{value:E.side,style:N.colorBasedOnSide(E.side)},{value:E.price,style:"text-xs"},{value:A,style:N.colorBasedOnSide(E.side)},{value:E.status,style:"text-xs"}])}return e}),oe=C(()=>{let e=[];const o=i.jesseSupportedTimeframes;return i.settings.live.generate_candles_from_1m||!s.form.exchange?e=o.map(M=>i.planLimits.timeframes.includes(M)?{label:M,value:M,disabled:!1}:{label:`${M} (Upgrade required)`,value:M,disabled:!0}):e=i.exchangeInfo[s.form.exchange].supported_timeframes.map(R=>i.planLimits.timeframes.includes(R)?{label:R,value:R,disabled:!1}:{label:`${R} (Upgrade required)`,value:R,disabled:!0}),e}),ee=C(()=>i.liveTradingExchangeNames.map(e=>i.planLimits.exchanges.includes(e)?{label:e,value:e,disabled:!1}:{label:`${e} (Upgrade required)`,value:e,disabled:!0})),re=C(()=>i.exchangeApiKeys.map(e=>i.planLimits.exchanges.includes(e.exchange)?{label:`${e.exchange} - ${e.name}`,value:e.id,disabled:!1}:{label:`${e.exchange} - ${e.name} (Upgrade required)`,value:e.id,disabled:!0})),g=f.cancel,k=f.newLive;function I(e){if(_.value.length){for(let o=0;o<_.value.length;o++)z("error",_.value[o]);return}if(s.form.paper_mode&&!s.form.exchange||!s.form.paper_mode&&s.form.exchange_api_key_id===""){z("error","Please select an exchange");return}f.start(e)}function O(e){j.value=!1,f.stop(e)}function B(){h.value=!0,navigator.clipboard.writeText(s.results.infoLogs),z("success","Logs copied successfully"),T.value=!0,setTimeout(()=>{T.value=!1},3e3)}function ue(){t.value=!0,navigator.clipboard.writeText(s.results.errorLogs),z("success","Logs copied successfully"),y.value=!0,setTimeout(()=>{y.value=!1},3e3)}const de=C(()=>["basic","pro","enterprise","basic-lifetime","pro-lifetime","enterprise-lifetime","lifetime"].includes(i.plan));return(e,o)=>{const M=Lt,R=Xe,Z=At,E=rt,A=se,Ve=$e,Le=nt,ce=lt,G=et,ne=ct,Se=at,me=tt,Ee=Ce,Ie=Ht,le=Te,Pe=it,je=gt,Ue=ut;return a(),p(Y,null,[r(R,{modelValue:n(c),"onUpdate:modelValue":o[0]||(o[0]=u=>F(c)?c.value=u:null),size:"ultra",title:"Orders"},{default:w(()=>[r(M,{orders:e.results.orders},null,8,["orders"])]),_:1},8,["modelValue"]),r(R,{modelValue:n(m),"onUpdate:modelValue":o[2]||(o[2]=u=>F(m)?m.value=u:null),size:"small",title:"Report An Issue"},{default:w(()=>[r(Z,{session:e.session,onClose:o[1]||(o[1]=u=>m.value=!1)},null,8,["session"])]),_:1},8,["modelValue"]),r(R,{modelValue:n($),"onUpdate:modelValue":o[3]||(o[3]=u=>F($)?$.value=u:null),title:"Info Logs"},{default:w(()=>[r(E,{logs:e.results.infoLogs},null,8,["logs"])]),buttons:w(()=>[l("button",{class:"ml-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none",onClick:B},[n(T)?(a(),S(n(ye),{key:0,class:"h-6 w-6","aria-hidden":"true"})):V("",!0),!n(T)&&e.results.infoLogs.length!=0?(a(),S(n(be),{key:1,class:"h-6 w-6","aria-hidden":"true"})):V("",!0)])]),_:1},8,["modelValue"]),r(R,{modelValue:n(P),"onUpdate:modelValue":o[4]||(o[4]=u=>F(P)?P.value=u:null),title:"Error Logs"},{default:w(()=>[r(E,{logs:e.results.errorLogs},null,8,["logs"])]),buttons:w(()=>[l("button",{class:"ml-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none",onClick:ue},[n(y)?(a(),S(n(ye),{key:0,class:"h-6 w-6","aria-hidden":"true"})):V("",!0),!n(y)&&e.results.errorLogs.length!=0?(a(),S(n(be),{key:1,class:"h-6 w-6","aria-hidden":"true"})):V("",!0)])]),_:1},8,["modelValue"]),r(Ve,{modelValue:n(j),"onUpdate:modelValue":o[6]||(o[6]=u=>F(j)?j.value=u:null),title:"Termination Confirm",description:"Are you sure you want to terminate this session?",type:"info"},{default:w(()=>[r(A,{variant:"solid",color:"red",class:"flex justify-center",label:"Terminate",onClick:o[5]||(o[5]=u=>O((e._.provides[te]||e.$route).params.id))})]),_:1},8,["modelValue"]),e.results.booting?(a(),p("div",Wt,[l("div",null,[r(Le,{progress:e.results.progressbar.current},null,8,["progress"])]),e.results.exception.error?V("",!0):(a(),p("h3",{key:0,class:"mt-8 animate-pulse",textContent:q(n(D))},null,8,Yt)),l("div",Qt,[e.form.debug_mode?(a(),S(A,{key:0,icon:"i-heroicons-clipboard-document-list",variant:"solid",label:"View Logs",size:"xl",class:"flex justify-center w-64",onClick:o[7]||(o[7]=u=>$.value=!0)})):V("",!0),r(A,{color:"gray",class:"w-64 flex justify-center mt-4",size:"xl",ui:{color:{gray:{solid:"text-rose-500 dark:text-rose-400"}}},icon:"i-heroicons-no-symbol",variant:"solid",label:"Cancel",trailing:!1,onClick:o[8]||(o[8]=u=>n(g)((e._.provides[te]||e.$route).params.id))})]),e.results.exception.error?(a(),p("div",Zt,[r(ce,{modelValue:n(v),"onUpdate:modelValue":o[9]||(o[9]=u=>F(v)?v.value=u:null),title:e.results.exception.error,content:e.results.exception.traceback,mode:"live","debug-mode":e.form.debug_mode},null,8,["modelValue","title","content","debug-mode"])])):V("",!0)])):(a(),S(Ue,{key:1},{left:w(()=>[!e.results.booting&&!e.results.monitoring&&!e.results.showResults?(a(),p("div",Gt,[r(G,{class:"mb-4",title:"Exchange"}),e.form.paper_mode?(a(),S(ne,{key:0,modelValue:e.form.exchange,"onUpdate:modelValue":o[10]||(o[10]=u=>e.form.exchange=u),placeholder:"Select an exchange...",searchable:"",options:n(ee),"value-attribute":"value",size:"lg",class:"mt-2 mb-16",onChange:U},null,8,["modelValue","options"])):(a(),S(ne,{key:1,modelValue:e.form.exchange_api_key_id,"onUpdate:modelValue":o[11]||(o[11]=u=>e.form.exchange_api_key_id=u),placeholder:"Select an exchange...",searchable:"",options:n(re),"value-attribute":"value",size:"lg",class:"mt-2 mb-16",onChange:U},{empty:w(()=>[l("div",Jt,[Kt,r(A,{to:"/exchange-api-keys",icon:"i-heroicons-plus",type:"link",variant:"solid",size:"sm",label:"Add Exchange API Key"})])]),_:1},8,["modelValue","options"])),r(Se,{"total-routes-error":n(_),form:e.form,results:e.results,mode:"live",symbols:n(d),timeframes:n(oe)},null,8,["total-routes-error","form","results","symbols","timeframes"]),r(G,{class:"mt-16 mb-4",title:"Options"}),l("div",Xt,[r(me,{modelValue:e.form.debug_mode,"onUpdate:modelValue":o[12]||(o[12]=u=>e.form.debug_mode=u),title:"Debug Mode",description:"Logs more details, helpful for debugging."},null,8,["modelValue"]),r(me,{modelValue:e.form.paper_mode,"onUpdate:modelValue":o[13]||(o[13]=u=>e.form.paper_mode=u),title:"Paper Trade",disabled:!n(de),"disabled-guide":n(de)?"":"Premium plan required",description:"Trade in real-time using actual exchange data with PAPER money."},null,8,["modelValue","disabled","disabled-guide"]),r(Ee,{label:"Notifications:",help:"Select a notification driver to receive notifications"},{default:w(()=>[r(ne,{modelValue:e.form.notification_api_key_id,"onUpdate:modelValue":o[14]||(o[14]=u=>e.form.notification_api_key_id=u),placeholder:"Select a notification driver",size:"lg",options:n(b),"value-attribute":"value"},{empty:w(()=>[l("div",es,[ts,r(A,{to:"/notification-api-keys",icon:"i-heroicons-plus",type:"link",variant:"solid",size:"sm",label:"Add Notification API Key"})])]),_:1},8,["modelValue","options"])]),_:1})])])):V("",!0),e.results.monitoring?(a(),p("div",ss,[e.results.exception.error?(a(),p("div",os,[r(ce,{title:e.results.exception.error,content:e.results.exception.traceback,mode:"live","debug-mode":e.form.debug_mode},null,8,["title","content","debug-mode"])])):V("",!0),e.results.monitoring&&!e.results.finished&&!e.results.exception.error?(a(),S(Ie,{key:1,results:e.results,form:e.form,exchange:e.form.exchange},null,8,["results","form","exchange"])):V("",!0),r(G,{class:"mb-4",title:"Routes"}),r(le,{data:e.results.routes,"header-items":["Symbol","Timeframe","Strategy"],header:""},null,8,["data"]),r(G,{class:"mt-12 mb-4",title:"Positions"}),r(le,{data:e.results.positions,"header-items":["Symbol","QTY","Entry","Price","Liq Price","PNL"],header:""},null,8,["data"]),r(Pe,{class:"mt-12 mb-4",title:"Orders"},{default:w(()=>[l("button",{type:"button",class:"inline-flex items-center shadow-sm px-4 py-1.5 border border-gray-300 dark:border-gray-900 text-sm leading-5 font-medium rounded-full text-gray-700 dark:text-gray-100 bg-white dark:bg-backdrop-dark hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none",onClick:o[15]||(o[15]=u=>c.value=!0)},[r(n(yt),{class:"-ml-1.5 mr-1 h-5 w-5 text-gray-400","aria-hidden":"true"}),rs])]),_:1}),r(le,{data:n(X),"header-items":["Created","Symbol","Type","Side","Price","QTY","Status"],header:""},null,8,["data"])])):V("",!0)]),right:w(()=>[e.results.booting?V("",!0):(a(),p("div",ns,[e.results.monitoring?(a(),p("div",ls,[e.results.finished?(a(),S(A,{key:0,class:"w-full flex justify-center",variant:"solid",icon:"i-heroicons-plus",size:"xl",label:"New session",onClick:o[16]||(o[16]=u=>n(k)((e._.provides[te]||e.$route).params.id))})):(a(),S(A,{key:1,class:"w-full flex justify-center",variant:"solid",color:"gray",icon:"i-heroicons-no-symbol",size:"xl",label:e.results.terminating?"Terminating...":"Terminate",ui:{color:{gray:{solid:"text-rose-500 dark:text-rose-400"}}},onClick:o[17]||(o[17]=u=>j.value=!0)},null,8,["label"])),e.results.monitoring||e.results.finished?(a(),S(A,{key:2,class:"w-full flex justify-center mt-4",variant:"solid",color:"gray",icon:"i-heroicons-flag",size:"xl",label:"Report",onClick:o[18]||(o[18]=u=>m.value=!0)})):V("",!0)])):(a(),p("div",as,[r(A,{class:"w-full flex justify-center",icon:"i-heroicons-bolt",size:"xl",variant:"solid",label:"Start",trailing:!1,onClick:o[19]||(o[19]=u=>I((e._.provides[te]||e.$route).params.id))})]))])),e.results.monitoring?(a(),p("hr",is)):V("",!0),e.results.monitoring?(a(),p("dl",us,[(a(!0),p(Y,null,ie(n(H),u=>(a(),p("div",{key:u.label,class:"flex justify-between items-center"},[l("div",ds,q(u.label)+":",1),l("div",cs,q(u.value),1)]))),128)),l("div",ms,[l("div",fs,[l("button",{class:"text-sm font-medium text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 truncate flex items-center hover:underline cursor-pointer focus:outline-none",onClick:o[20]||(o[20]=u=>$.value=!0)},[ps,l("span",gs,[r(n(_e),{class:"w-6 h-6 ml-2"})])])]),l("div",vs,q(e.results.generalInfo.count_info_logs),1)]),l("div",ys,[l("div",bs,[l("button",{class:"text-sm font-medium text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 truncate flex items-center hover:underline cursor-pointer focus:outline-none",onClick:o[21]||(o[21]=u=>P.value=!0)},[hs,l("span",_s,[r(n(_e),{class:"w-6 h-6 ml-2 cursor-pointer"})])])]),l("div",ks,q(e.results.generalInfo.count_error_logs),1)])])):V("",!0),e.results.monitoring&&e.results.watchlist.length?(a(),p("div",xs,[r(G,{class:"mt-8 mb-4",title:"Watch List"}),r(je,{data:e.results.watchlist},null,8,["data"])])):V("",!0)]),_:1}))],64)}}}),ws={class:"w-full"},js=W({__name:"[id]",setup(L){vt({title:"Live/Paper trading - Jesse"});const s=Q(),_=C(()=>s.tabs),v=ke(),h=C(()=>v.params.id),t=C(()=>{if(!_.value[h.value]){const y=Object.keys(_.value);if(y.length>0){const c=_.value[y[0]];return xe().push(`/live/${c.id}`),c}}return _.value[h.value]});(!Object.keys(t.value).includes("selectedRoute")||Object.keys(t.value.results.selectedRoute).length==0||T(t.value.results.selectedRoute,t.value.form.routes[0]))&&(t.value.results.selectedRoute=t.value.form.routes[0]),t.value.form.exchange==""&&(t.value.form.exchange=t.value.results.generalInfo.exchange),Object.keys(_.value).length===0&&Q().addTab();function T(y,c){return y.length!==c.length?!1:y.every((m,$)=>m===c[$])}return(y,c)=>{const m=Vt,$=$s;return a(),p(Y,null,[l("div",ws,[r(m,{"current-tab":t.value?t.value.id:null,tabs:_.value,onClose:n(s).closeTab,onCancel:n(s).cancel},null,8,["current-tab","tabs","onClose","onCancel"])]),t.value?(a(),S($,{key:0,form:t.value.form,results:t.value.results,session:h.value},null,8,["form","results","session"])):V("",!0)],64)}}});export{js as default};