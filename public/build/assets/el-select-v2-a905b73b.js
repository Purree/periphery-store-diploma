import{b9 as Ze,bn as vl,D as h,c3 as hl,ah as Dt,c4 as gl,c5 as Ve,l as Te,k as Xe,af as bl,N as Me,O as be,v as k,P as je,R as I,J as we,aQ as yl,V as Oe,aG as Z,p as We,x as $t,ak as Sl,bg as Ne,T as wt,z as _,c6 as wl,S as ct,o as L,a as W,t as le,n as E,j as ie,d as G,c7 as Vl,h as Ue,H as Il,ar as Ol,e as ee,aJ as Vt,c8 as ne,aV as ke,K as Cl,q as Be,c9 as Tl,aE as nt,W as El,E as Ml,aW as It,ca as zl,cb as Rl,Y as Ll,M as Nl,ag as kl,U as Ft,C as Ht,al as Bl,cc as Al,Q as Ot,Z as Dl,r as Ke,cd as Ct,av as Pe,w as Y,f as ve,F as Le,b as tt,c as he,b4 as ce,aw as $l,aY as Fl,aZ as Hl}from"./app-a44995be.js";import{u as Wl,E as Kl,a as Pl}from"./el-popper-c3f23f9e.js";import{E as Ul}from"./el-tag-93898b7a.js";import{i as Gl}from"./validator-ae9f5db2.js";import{e as ql}from"./strings-d8cf358b.js";import{i as Tt}from"./isEqual-e6c06f96.js";import{d as jl}from"./debounce-573356e3.js";const Wt=e=>Ze?window.requestAnimationFrame(e):setTimeout(e,16),Kt=e=>Ze?window.cancelAnimationFrame(e):clearTimeout(e),Ql={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},ge=new Map;let Et;Ze&&(document.addEventListener("mousedown",e=>Et=e),document.addEventListener("mouseup",e=>{for(const t of ge.values())for(const{documentHandler:o}of t)o(e,Et)}));function Mt(e,t){let o=[];return Array.isArray(t.arg)?o=t.arg:vl(t.arg)&&o.push(t.arg),function(s,i){const u=t.instance.popperRef,c=s.target,n=i==null?void 0:i.target,m=!t||!t.instance,g=!c||!n,r=e.contains(c)||e.contains(n),f=e===c,a=o.length&&o.some(H=>H==null?void 0:H.contains(c))||o.length&&o.includes(n),N=u&&(u.contains(c)||u.contains(n));m||g||r||f||a||N||t.value(s,i)}}const Yl={beforeMount(e,t){ge.has(e)||ge.set(e,[]),ge.get(e).push({documentHandler:Mt(e,t),bindingFn:t.value})},updated(e,t){ge.has(e)||ge.set(e,[]);const o=ge.get(e),s=o.findIndex(u=>u.bindingFn===t.oldValue),i={documentHandler:Mt(e,t),bindingFn:t.value};s>=0?o.splice(s,1,i):o.push(i)},unmounted(e){ge.delete(e)}};var zt=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Zl(e,t){return!!(e===t||zt(e)&&zt(t))}function Xl(e,t){if(e.length!==t.length)return!1;for(var o=0;o<e.length;o++)if(!Zl(e[o],t[o]))return!1;return!0}function Jl(e,t){t===void 0&&(t=Xl);var o=null;function s(){for(var i=[],u=0;u<arguments.length;u++)i[u]=arguments[u];if(o&&o.lastThis===this&&t(i,o.lastArgs))return o.lastResult;var c=e.apply(this,i);return o={lastResult:c,lastArgs:i,lastThis:this},c}return s.clear=function(){o=null},s}const xl=()=>{const t=Dt().proxy.$props;return h(()=>{const o=(s,i,u)=>({});return t.perfMode?hl(o):Jl(o)})},_l=50,Rt="itemRendered",Lt="scroll",Pt="forward",Ut="backward",Ae="auto",Gt="smart",qt="start",Qe="center",jt="end",Ee="horizontal",dt="vertical",en="ltr",Ge="rtl",ot="negative",Qt="positive-ascending",Yt="positive-descending",tn={[Ee]:"left",[dt]:"top"},ln=20,nn={[Ee]:"deltaX",[dt]:"deltaY"},on=({atEndEdge:e,atStartEdge:t,layout:o},s)=>{let i,u=0;const c=m=>m<0&&t.value||m>0&&e.value;return{hasReachedEdge:c,onWheel:m=>{Kt(i);const g=m[nn[o.value]];c(u)&&c(u+g)||(u+=g,gl()||m.preventDefault(),i=Wt(()=>{s(u),u=0}))}}},at=Ve({type:Te([Number,Function]),required:!0}),st=Ve({type:Number}),it=Ve({type:Number,default:2}),an=Ve({type:String,values:["ltr","rtl"],default:"ltr"}),rt=Ve({type:Number,default:0}),Ye=Ve({type:Number,required:!0}),Zt=Ve({type:String,values:["horizontal","vertical"],default:dt}),Xt=Xe({className:{type:String,default:""},containerElement:{type:Te([String,Object]),default:"div"},data:{type:Te(Array),default:()=>bl([])},direction:an,height:{type:[String,Number],required:!0},innerElement:{type:[String,Object],default:"div"},style:{type:Te([Object,String,Array])},useIsScrolling:{type:Boolean,default:!1},width:{type:[Number,String],required:!1},perfMode:{type:Boolean,default:!0},scrollbarAlwaysOn:{type:Boolean,default:!1}}),sn=Xe({cache:it,estimatedItemSize:st,layout:Zt,initScrollOffset:rt,total:Ye,itemSize:at,...Xt}),ut={type:Number,default:6},Jt={type:Number,default:0},xt={type:Number,default:2};Xe({columnCache:it,columnWidth:at,estimatedColumnWidth:st,estimatedRowHeight:st,initScrollLeft:rt,initScrollTop:rt,itemKey:{type:Te(Function),default:({columnIndex:e,rowIndex:t})=>`${t}:${e}`},rowCache:it,rowHeight:at,totalColumn:Ye,totalRow:Ye,hScrollbarSize:ut,vScrollbarSize:ut,scrollbarStartGap:Jt,scrollbarEndGap:xt,role:String,...Xt});const rn=Xe({alwaysOn:Boolean,class:String,layout:Zt,total:Ye,ratio:{type:Number,required:!0},clientSize:{type:Number,required:!0},scrollFrom:{type:Number,required:!0},scrollbarSize:ut,startGap:Jt,endGap:xt,visible:Boolean}),lt=(e,t)=>e<t?Pt:Ut,De=e=>e===en||e===Ge||e===Ee;let Ie=null;function Nt(e=!1){if(Ie===null||e){const t=document.createElement("div"),o=t.style;o.width="50px",o.height="50px",o.overflow="scroll",o.direction="rtl";const s=document.createElement("div"),i=s.style;return i.width="100px",i.height="100px",t.appendChild(s),document.body.appendChild(t),t.scrollLeft>0?Ie=Yt:(t.scrollLeft=1,t.scrollLeft===0?Ie=ot:Ie=Qt),document.body.removeChild(t),Ie}return Ie}function un({move:e,size:t,bar:o},s){const i={},u=`translate${o.axis}(${e}px)`;return i[o.size]=t,i.transform=u,i.msTransform=u,i.webkitTransform=u,s==="horizontal"?i.height="100%":i.width="100%",i}const cn=Me({name:"ElVirtualScrollBar",props:rn,emits:["scroll","start-move","stop-move"],setup(e,{emit:t}){const o=h(()=>e.startGap+e.endGap),s=be("virtual-scrollbar"),i=be("scrollbar"),u=k(),c=k();let n=null,m=null;const g=je({isDragging:!1,traveled:0}),r=h(()=>Ql[e.layout]),f=h(()=>e.clientSize-I(o)),a=h(()=>({position:"absolute",width:`${Ee===e.layout?f.value:e.scrollbarSize}px`,height:`${Ee===e.layout?e.scrollbarSize:f.value}px`,[tn[e.layout]]:"2px",right:"2px",bottom:"2px",borderRadius:"4px"})),N=h(()=>{const b=e.ratio,B=e.clientSize;if(b>=100)return Number.POSITIVE_INFINITY;if(b>=50)return b*B/100;const v=B/3;return Math.floor(Math.min(Math.max(b*B,ln),v))}),H=h(()=>{if(!Number.isFinite(N.value))return{display:"none"};const b=`${N.value}px`;return un({bar:r.value,size:b,move:g.traveled},e.layout)}),A=h(()=>Math.floor(e.clientSize-N.value-I(o))),q=()=>{window.addEventListener("mousemove",w),window.addEventListener("mouseup",j);const b=I(c);b&&(m=document.onselectstart,document.onselectstart=()=>!1,b.addEventListener("touchmove",w),b.addEventListener("touchend",j))},C=()=>{window.removeEventListener("mousemove",w),window.removeEventListener("mouseup",j),document.onselectstart=m,m=null;const b=I(c);b&&(b.removeEventListener("touchmove",w),b.removeEventListener("touchend",j))},P=b=>{b.stopImmediatePropagation(),!(b.ctrlKey||[1,2].includes(b.button))&&(g.isDragging=!0,g[r.value.axis]=b.currentTarget[r.value.offset]-(b[r.value.client]-b.currentTarget.getBoundingClientRect()[r.value.direction]),t("start-move"),q())},j=()=>{g.isDragging=!1,g[r.value.axis]=0,t("stop-move"),C()},w=b=>{const{isDragging:B}=g;if(!B||!c.value||!u.value)return;const v=g[r.value.axis];if(!v)return;Kt(n);const S=(u.value.getBoundingClientRect()[r.value.direction]-b[r.value.client])*-1,V=c.value[r.value.offset]-v,D=S-V;n=Wt(()=>{g.traveled=Math.max(e.startGap,Math.min(D,A.value)),t("scroll",D,A.value)})},oe=b=>{const B=Math.abs(b.target.getBoundingClientRect()[r.value.direction]-b[r.value.client]),v=c.value[r.value.offset]/2,S=B-v;g.traveled=Math.max(0,Math.min(S,A.value)),t("scroll",S,A.value)};return we(()=>e.scrollFrom,b=>{g.isDragging||(g.traveled=Math.ceil(b*A.value))}),yl(()=>{C()}),()=>Oe("div",{role:"presentation",ref:u,class:[s.b(),e.class,(e.alwaysOn||g.isDragging)&&"always-on"],style:a.value,onMousedown:Z(oe,["stop","prevent"]),onTouchstartPrevent:P},Oe("div",{ref:c,class:i.e("thumb"),style:H.value,onMousedown:P},[]))}}),_t=({name:e,getOffset:t,getItemSize:o,getItemOffset:s,getEstimatedTotalSize:i,getStartIndexForOffset:u,getStopIndexForStartIndex:c,initCache:n,clearCache:m,validateProps:g})=>Me({name:e??"ElVirtualList",props:sn,emits:[Rt,Lt],setup(r,{emit:f,expose:a}){g(r);const N=Dt(),H=be("vl"),A=k(n(r,N)),q=xl(),C=k(),P=k(),j=k(),w=k({isScrolling:!1,scrollDir:"forward",scrollOffset:We(r.initScrollOffset)?r.initScrollOffset:0,updateRequested:!1,isScrollbarDragging:!1,scrollbarAlwaysOn:r.scrollbarAlwaysOn}),oe=h(()=>{const{total:p,cache:O}=r,{isScrolling:M,scrollDir:K,scrollOffset:z}=I(w);if(p===0)return[0,0,0,0];const F=u(r,z,I(A)),$=c(r,F,z,I(A)),pe=!M||K===Ut?Math.max(1,O):1,me=!M||K===Pt?Math.max(1,O):1;return[Math.max(0,F-pe),Math.max(0,Math.min(p-1,$+me)),F,$]}),b=h(()=>i(r,I(A))),B=h(()=>De(r.layout)),v=h(()=>[{position:"relative",[`overflow-${B.value?"x":"y"}`]:"scroll",WebkitOverflowScrolling:"touch",willChange:"transform"},{direction:r.direction,height:We(r.height)?`${r.height}px`:r.height,width:We(r.width)?`${r.width}px`:r.width},r.style]),S=h(()=>{const p=I(b),O=I(B);return{height:O?"100%":`${p}px`,pointerEvents:I(w).isScrolling?"none":void 0,width:O?`${p}px`:"100%"}}),V=h(()=>B.value?r.width:r.height),{onWheel:D}=on({atStartEdge:h(()=>w.value.scrollOffset<=0),atEndEdge:h(()=>w.value.scrollOffset>=b.value),layout:h(()=>r.layout)},p=>{var O,M;(M=(O=j.value).onMouseUp)==null||M.call(O),Q(Math.min(w.value.scrollOffset+p,b.value-V.value))}),R=()=>{const{total:p}=r;if(p>0){const[z,F,$,pe]=I(oe);f(Rt,z,F,$,pe)}const{scrollDir:O,scrollOffset:M,updateRequested:K}=I(w);f(Lt,O,M,K)},X=p=>{const{clientHeight:O,scrollHeight:M,scrollTop:K}=p.currentTarget,z=I(w);if(z.scrollOffset===K)return;const F=Math.max(0,Math.min(K,M-O));w.value={...z,isScrolling:!0,scrollDir:lt(z.scrollOffset,F),scrollOffset:F,updateRequested:!1},_(ue)},J=p=>{const{clientWidth:O,scrollLeft:M,scrollWidth:K}=p.currentTarget,z=I(w);if(z.scrollOffset===M)return;const{direction:F}=r;let $=M;if(F===Ge)switch(Nt()){case ot:{$=-M;break}case Yt:{$=K-O-M;break}}$=Math.max(0,Math.min($,K-O)),w.value={...z,isScrolling:!0,scrollDir:lt(z.scrollOffset,$),scrollOffset:$,updateRequested:!1},_(ue)},te=p=>{I(B)?J(p):X(p),R()},de=(p,O)=>{const M=(b.value-V.value)/O*p;Q(Math.min(b.value-V.value,M))},Q=p=>{p=Math.max(p,0),p!==I(w).scrollOffset&&(w.value={...I(w),scrollOffset:p,scrollDir:lt(I(w).scrollOffset,p),updateRequested:!0},_(ue))},U=(p,O=Ae)=>{const{scrollOffset:M}=I(w);p=Math.max(0,Math.min(p,r.total-1)),Q(t(r,p,O,M,I(A)))},re=p=>{const{direction:O,itemSize:M,layout:K}=r,z=q.value(m&&M,m&&K,m&&O);let F;if(wl(z,String(p)))F=z[p];else{const $=s(r,p,I(A)),pe=o(r,p,I(A)),me=I(B),$e=O===Ge,ze=me?$:0;z[p]=F={position:"absolute",left:$e?void 0:`${ze}px`,right:$e?`${ze}px`:void 0,top:me?0:`${$}px`,height:me?"100%":`${pe}px`,width:me?`${pe}px`:"100%"}}return F},ue=()=>{w.value.isScrolling=!1,_(()=>{q.value(-1,null,null)})},fe=()=>{const p=C.value;p&&(p.scrollTop=0)};$t(()=>{if(!Ze)return;const{initScrollOffset:p}=r,O=I(C);We(p)&&O&&(I(B)?O.scrollLeft=p:O.scrollTop=p),R()}),Sl(()=>{const{direction:p,layout:O}=r,{scrollOffset:M,updateRequested:K}=I(w),z=I(C);if(K&&z)if(O===Ee)if(p===Ge)switch(Nt()){case ot:{z.scrollLeft=-M;break}case Qt:{z.scrollLeft=M;break}default:{const{clientWidth:F,scrollWidth:$}=z;z.scrollLeft=$-F-M;break}}else z.scrollLeft=M;else z.scrollTop=M});const x={ns:H,clientSize:V,estimatedTotalSize:b,windowStyle:v,windowRef:C,innerRef:P,innerStyle:S,itemsToRender:oe,scrollbarRef:j,states:w,getItemStyle:re,onScroll:te,onScrollbarScroll:de,onWheel:D,scrollTo:Q,scrollToItem:U,resetScrollTop:fe};return a({windowRef:C,innerRef:P,getItemStyleCache:q,scrollTo:Q,scrollToItem:U,resetScrollTop:fe,states:w}),x},render(r){var f;const{$slots:a,className:N,clientSize:H,containerElement:A,data:q,getItemStyle:C,innerElement:P,itemsToRender:j,innerStyle:w,layout:oe,total:b,onScroll:B,onScrollbarScroll:v,onWheel:S,states:V,useIsScrolling:D,windowStyle:R,ns:X}=r,[J,te]=j,de=Ne(A),Q=Ne(P),U=[];if(b>0)for(let x=J;x<=te;x++)U.push((f=a.default)==null?void 0:f.call(a,{data:q,key:x,index:x,isScrolling:D?V.isScrolling:void 0,style:C(x)}));const re=[Oe(Q,{style:w,ref:"innerRef"},wt(Q)?U:{default:()=>U})],ue=Oe(cn,{ref:"scrollbarRef",clientSize:H,layout:oe,onScroll:v,ratio:H*100/this.estimatedTotalSize,scrollFrom:V.scrollOffset/(this.estimatedTotalSize-H),total:b}),fe=Oe(de,{class:[X.e("window"),N],style:R,onScroll:B,onWheel:S,ref:"windowRef",key:0},wt(de)?[re]:{default:()=>[re]});return Oe("div",{key:0,class:[X.e("wrapper"),V.scrollbarAlwaysOn?"always-on":""]},[fe,ue])}}),dn=_t({name:"ElFixedSizeList",getItemOffset:({itemSize:e},t)=>t*e,getItemSize:({itemSize:e})=>e,getEstimatedTotalSize:({total:e,itemSize:t})=>t*e,getOffset:({height:e,total:t,itemSize:o,layout:s,width:i},u,c,n)=>{const m=De(s)?i:e,g=Math.max(0,t*o-m),r=Math.min(g,u*o),f=Math.max(0,(u+1)*o-m);switch(c===Gt&&(n>=f-m&&n<=r+m?c=Ae:c=Qe),c){case qt:return r;case jt:return f;case Qe:{const a=Math.round(f+(r-f)/2);return a<Math.ceil(m/2)?0:a>g+Math.floor(m/2)?g:a}case Ae:default:return n>=f&&n<=r?n:n<f?f:r}},getStartIndexForOffset:({total:e,itemSize:t},o)=>Math.max(0,Math.min(e-1,Math.floor(o/t))),getStopIndexForStartIndex:({height:e,total:t,itemSize:o,layout:s,width:i},u,c)=>{const n=u*o,m=De(s)?i:e,g=Math.ceil((m+c-n)/o);return Math.max(0,Math.min(t-1,u+g-1))},initCache(){},clearCache:!0,validateProps(){}}),Ce=(e,t,o)=>{const{itemSize:s}=e,{items:i,lastVisitedIndex:u}=o;if(t>u){let c=0;if(u>=0){const n=i[u];c=n.offset+n.size}for(let n=u+1;n<=t;n++){const m=s(n);i[n]={offset:c,size:m},c+=m}o.lastVisitedIndex=t}return i[t]},fn=(e,t,o)=>{const{items:s,lastVisitedIndex:i}=t;return(i>0?s[i].offset:0)>=o?el(e,t,0,i,o):pn(e,t,Math.max(0,i),o)},el=(e,t,o,s,i)=>{for(;o<=s;){const u=o+Math.floor((s-o)/2),c=Ce(e,u,t).offset;if(c===i)return u;c<i?o=u+1:c>i&&(s=u-1)}return Math.max(0,o-1)},pn=(e,t,o,s)=>{const{total:i}=e;let u=1;for(;o<i&&Ce(e,o,t).offset<s;)o+=u,u*=2;return el(e,t,Math.floor(o/2),Math.min(o,i-1),s)},kt=({total:e},{items:t,estimatedItemSize:o,lastVisitedIndex:s})=>{let i=0;if(s>=e&&(s=e-1),s>=0){const n=t[s];i=n.offset+n.size}const c=(e-s-1)*o;return i+c},mn=_t({name:"ElDynamicSizeList",getItemOffset:(e,t,o)=>Ce(e,t,o).offset,getItemSize:(e,t,{items:o})=>o[t].size,getEstimatedTotalSize:kt,getOffset:(e,t,o,s,i)=>{const{height:u,layout:c,width:n}=e,m=De(c)?n:u,g=Ce(e,t,i),r=kt(e,i),f=Math.max(0,Math.min(r-m,g.offset)),a=Math.max(0,g.offset-m+g.size);switch(o===Gt&&(s>=a-m&&s<=f+m?o=Ae:o=Qe),o){case qt:return f;case jt:return a;case Qe:return Math.round(a+(f-a)/2);case Ae:default:return s>=a&&s<=f?s:s<a?a:f}},getStartIndexForOffset:(e,t,o)=>fn(e,o,t),getStopIndexForStartIndex:(e,t,o,s)=>{const{height:i,total:u,layout:c,width:n}=e,m=De(c)?n:i,g=Ce(e,t,s),r=o+m;let f=g.offset+g.size,a=t;for(;a<u-1&&f<r;)a++,f+=Ce(e,a,s).size;return a},initCache({estimatedItemSize:e=_l},t){const o={items:{},estimatedItemSize:e,lastVisitedIndex:-1};return o.clearCacheAfterIndex=(s,i=!0)=>{var u,c;o.lastVisitedIndex=Math.min(o.lastVisitedIndex,s-1),(u=t.exposed)==null||u.getItemStyleCache(-1),i&&((c=t.proxy)==null||c.$forceUpdate())},o},clearCache:!1,validateProps:({itemSize:e})=>{}}),vn=Me({props:{item:{type:Object,required:!0},style:Object,height:Number},setup(){return{ns:be("select")}}});function hn(e,t,o,s,i,u){return e.item.isTitle?(L(),W("div",{key:0,class:E(e.ns.be("group","title")),style:ie([e.style,{lineHeight:`${e.height}px`}])},le(e.item.label),7)):(L(),W("div",{key:1,class:E(e.ns.be("group","split")),style:ie(e.style)},[G("span",{class:E(e.ns.be("group","split-dash")),style:ie({top:`${e.height/2}px`})},null,6)],6))}var gn=ct(vn,[["render",hn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select-v2/src/group-item.vue"]]);function bn(e,{emit:t}){return{hoverItem:()=>{e.disabled||t("hover",e.index)},selectOptionClick:()=>{e.disabled||t("select",e.item,e.index)}}}const yn={allowCreate:Boolean,autocomplete:{type:String,default:"none"},automaticDropdown:Boolean,clearable:Boolean,clearIcon:{type:[String,Object],default:Vl},effect:{type:String,default:"light"},collapseTags:Boolean,collapseTagsTooltip:{type:Boolean,default:!1},maxCollapseTags:{type:Number,default:1},defaultFirstOption:Boolean,disabled:Boolean,estimatedOptionHeight:{type:Number,default:void 0},filterable:Boolean,filterMethod:Function,height:{type:Number,default:170},itemHeight:{type:Number,default:34},id:String,loading:Boolean,loadingText:String,label:String,modelValue:[Array,String,Number,Boolean,Object],multiple:Boolean,multipleLimit:{type:Number,default:0},name:String,noDataText:String,noMatchText:String,remoteMethod:Function,reserveKeyword:{type:Boolean,default:!0},options:{type:Array,required:!0},placeholder:{type:String},teleported:Wl.teleported,persistent:{type:Boolean,default:!0},popperClass:{type:String,default:""},popperOptions:{type:Object,default:()=>({})},remote:Boolean,size:{type:String,validator:Gl},valueKey:{type:String,default:"value"},scrollbarAlwaysOn:{type:Boolean,default:!1},validateEvent:{type:Boolean,default:!0},placement:{type:Te(String),values:Kl,default:"bottom-start"}},Sn={data:Array,disabled:Boolean,hovering:Boolean,item:Object,index:Number,style:Object,selected:Boolean,created:Boolean},wn=Me({props:Sn,emits:["select","hover"],setup(e,{emit:t}){const o=be("select"),{hoverItem:s,selectOptionClick:i}=bn(e,{emit:t});return{ns:o,hoverItem:s,selectOptionClick:i}}}),Vn=["aria-selected"];function In(e,t,o,s,i,u){return L(),W("li",{"aria-selected":e.selected,style:ie(e.style),class:E([e.ns.be("dropdown","option-item"),e.ns.is("selected",e.selected),e.ns.is("disabled",e.disabled),e.ns.is("created",e.created),{hover:e.hovering}]),onMouseenter:t[0]||(t[0]=(...c)=>e.hoverItem&&e.hoverItem(...c)),onClick:t[1]||(t[1]=Z((...c)=>e.selectOptionClick&&e.selectOptionClick(...c),["stop"]))},[Ue(e.$slots,"default",{item:e.item,index:e.index,disabled:e.disabled},()=>[G("span",null,le(e.item.label),1)])],46,Vn)}var On=ct(wn,[["render",In],["__file","/home/runner/work/element-plus/element-plus/packages/components/select-v2/src/option-item.vue"]]);const tl=Symbol("ElSelectV2Injection");var Cn=Me({name:"ElSelectDropdown",props:{data:{type:Array,required:!0},hoveringIndex:Number,width:Number},setup(e,{slots:t,expose:o}){const s=Il(tl),i=be("select"),u=k([]),c=k(),n=h(()=>e.data.length);we(()=>n.value,()=>{var v,S;(S=(v=s.popper.value).updatePopper)==null||S.call(v)});const m=h(()=>Ol(s.props.estimatedOptionHeight)),g=h(()=>m.value?{itemSize:s.props.itemHeight}:{estimatedSize:s.props.estimatedOptionHeight,itemSize:v=>u.value[v]}),r=(v=[],S)=>{const{props:{valueKey:V}}=s;return ke(S)?v&&v.some(D=>ne(D,V)===ne(S,V)):v.includes(S)},f=(v,S)=>{if(ke(S)){const{valueKey:V}=s.props;return ne(v,V)===ne(S,V)}else return v===S},a=(v,S)=>{const{valueKey:V}=s.props;return s.props.multiple?r(v,ne(S,V)):f(v,ne(S,V))},N=(v,S)=>{const{disabled:V,multiple:D,multipleLimit:R}=s.props;return V||!S&&(D?R>0&&v.length>=R:!1)},H=v=>e.hoveringIndex===v;o({listRef:c,isSized:m,isItemDisabled:N,isItemHovering:H,isItemSelected:a,scrollToItem:v=>{const S=c.value;S&&S.scrollToItem(v)},resetScrollTop:()=>{const v=c.value;v&&v.resetScrollTop()}});const C=v=>{const{index:S,data:V,style:D}=v,R=I(m),{itemSize:X,estimatedSize:J}=I(g),{modelValue:te}=s.props,{onSelect:de,onHover:Q}=s,U=V[S];if(U.type==="Group")return ee(gn,{item:U,style:D,height:R?X:J},null);const re=a(te,U),ue=N(te,re),fe=H(S);return ee(On,Vt(v,{selected:re,disabled:U.disabled||ue,created:!!U.created,hovering:fe,item:U,onSelect:de,onHover:Q}),{default:x=>{var p;return((p=t.default)==null?void 0:p.call(t,x))||ee("span",null,[U.label])}})},{onKeyboardNavigate:P,onKeyboardSelect:j}=s,w=()=>{P("forward")},oe=()=>{P("backward")},b=()=>{s.expanded=!1},B=v=>{const{code:S}=v,{tab:V,esc:D,down:R,up:X,enter:J}=Cl;switch(S!==V&&(v.preventDefault(),v.stopPropagation()),S){case V:case D:{b();break}case R:{w();break}case X:{oe();break}case J:{j();break}}};return()=>{var v;const{data:S,width:V}=e,{height:D,multiple:R,scrollbarAlwaysOn:X}=s.props;if(S.length===0)return ee("div",{class:i.b("dropdown"),style:{width:`${V}px`}},[(v=t.empty)==null?void 0:v.call(t)]);const J=I(m)?dn:mn;return ee("div",{class:[i.b("dropdown"),i.is("multiple",R)]},[ee(J,Vt({ref:c},I(g),{className:i.be("dropdown","list"),scrollbarAlwaysOn:X,data:S,height:D,width:V,total:S.length,onKeydown:B}),{default:te=>ee(C,te,null)})])}}});function Tn(e,t){const o=k(0),s=k(null),i=h(()=>e.allowCreate&&e.filterable);function u(r){const f=a=>a.value===r;return e.options&&e.options.some(f)||t.createdOptions.some(f)}function c(r){i.value&&(e.multiple&&r.created?o.value++:s.value=r)}function n(r){if(i.value)if(r&&r.length>0&&!u(r)){const f={value:r,label:r,created:!0,disabled:!1};t.createdOptions.length>=o.value?t.createdOptions[o.value]=f:t.createdOptions.push(f)}else if(e.multiple)t.createdOptions.length=o.value;else{const f=s.value;t.createdOptions.length=0,f&&f.created&&t.createdOptions.push(f)}}function m(r){if(!i.value||!r||!r.created||r.created&&e.reserveKeyword&&t.inputValue===r.label)return;const f=t.createdOptions.findIndex(a=>a.value===r.value);~f&&(t.createdOptions.splice(f,1),o.value--)}function g(){i.value&&(t.createdOptions.length=0,o.value=0)}return{createNewOption:n,removeNewOption:m,selectNewOption:c,clearAllNewOption:g}}const En=e=>{const t=[];return e.forEach(o=>{Be(o.options)?(t.push({label:o.label,isTitle:!0,type:"Group"}),o.options.forEach(s=>{t.push(s)}),t.push({type:"Group"})):t.push(o)}),t};function Mn(e){const t=k(!1);return{handleCompositionStart:()=>{t.value=!0},handleCompositionUpdate:u=>{const c=u.target.value,n=c[c.length-1]||"";t.value=!Tl(n)},handleCompositionEnd:u=>{t.value&&(t.value=!1,nt(e)&&e(u))}}}const Bt="",At=11,zn={larget:51,default:42,small:33},Rn=(e,t)=>{const{t:o}=El(),s=be("select-v2"),i=be("input"),{form:u,formItem:c}=Ml(),n=je({inputValue:Bt,displayInputValue:Bt,calculatedWidth:0,cachedPlaceholder:"",cachedOptions:[],createdOptions:[],createdLabel:"",createdSelected:!1,currentPlaceholder:"",hoveringIndex:-1,comboBoxHovering:!1,isOnComposition:!1,isSilentBlur:!1,isComposing:!1,inputLength:20,selectWidth:200,initialInputHeight:0,previousQuery:null,previousValue:void 0,query:"",selectedLabel:"",softFocus:!1,tagInMultiLine:!1}),m=k(-1),g=k(-1),r=k(null),f=k(null),a=k(null),N=k(null),H=k(null),A=k(null),q=k(null),C=k(!1),P=h(()=>e.disabled||(u==null?void 0:u.disabled)),j=h(()=>{const l=R.value.length*34;return l>e.height?e.height:l}),w=h(()=>!It(e.modelValue)),oe=h(()=>{const l=e.multiple?Array.isArray(e.modelValue)&&e.modelValue.length>0:w.value;return e.clearable&&!P.value&&n.comboBoxHovering&&l}),b=h(()=>e.remote&&e.filterable?"":zl),B=h(()=>b.value&&s.is("reverse",C.value)),v=h(()=>(c==null?void 0:c.validateState)||""),S=h(()=>Rl[v.value]),V=h(()=>e.remote?300:0),D=h(()=>{const l=R.value;return e.loading?e.loadingText||o("el.select.loading"):e.remote&&n.inputValue===""&&l.length===0?!1:e.filterable&&n.inputValue&&l.length>0?e.noMatchText||o("el.select.noMatch"):l.length===0?e.noDataText||o("el.select.noData"):null}),R=h(()=>{const l=d=>{const y=n.inputValue,T=new RegExp(ql(y),"i");return y?T.test(d.label||""):!0};return e.loading?[]:En(e.options.concat(n.createdOptions).map(d=>{if(Be(d.options)){const y=d.options.filter(l);if(y.length>0)return{...d,options:y}}else if(e.remote||l(d))return d;return null}).filter(d=>d!==null))}),X=h(()=>R.value.every(l=>l.disabled)),J=Ll(),te=h(()=>J.value==="small"?"small":"default"),de=h(()=>{const l=A.value,d=te.value||"default",y=l?Number.parseInt(getComputedStyle(l).paddingLeft):0,T=l?Number.parseInt(getComputedStyle(l).paddingRight):0;return n.selectWidth-T-y-zn[d]}),Q=()=>{var l;g.value=((l=H.value)==null?void 0:l.offsetWidth)||200},U=h(()=>({width:`${n.calculatedWidth===0?At:Math.ceil(n.calculatedWidth)+At}px`})),re=h(()=>Be(e.modelValue)?e.modelValue.length===0&&!n.displayInputValue:e.filterable?n.displayInputValue.length===0:!0),ue=h(()=>{const l=e.placeholder||o("el.select.placeholder");return e.multiple||It(e.modelValue)?l:n.selectedLabel}),fe=h(()=>{var l,d;return(d=(l=N.value)==null?void 0:l.popperRef)==null?void 0:d.contentRef}),x=h(()=>{if(e.multiple){const l=e.modelValue.length;if(e.modelValue.length>0)return R.value.findIndex(d=>d.value===e.modelValue[l-1])}else if(e.modelValue)return R.value.findIndex(l=>l.value===e.modelValue);return-1}),p=h({get(){return C.value&&D.value!==!1},set(l){C.value=l}}),O=h(()=>n.cachedOptions.slice(0,e.maxCollapseTags)),M=h(()=>n.cachedOptions.slice(e.maxCollapseTags)),{createNewOption:K,removeNewOption:z,selectNewOption:F,clearAllNewOption:$}=Tn(e,n),{handleCompositionStart:pe,handleCompositionUpdate:me,handleCompositionEnd:$e}=Mn(l=>St(l)),ze=()=>{var l,d,y;(d=(l=f.value)==null?void 0:l.focus)==null||d.call(l),(y=N.value)==null||y.updatePopper()},Je=()=>{if(!e.automaticDropdown&&!P.value)return n.isComposing&&(n.softFocus=!0),_(()=>{var l,d;C.value=!C.value,(d=(l=f.value)==null?void 0:l.focus)==null||d.call(l)})},ft=()=>(e.filterable&&n.inputValue!==n.selectedLabel&&(n.query=n.selectedLabel),mt(n.inputValue),_(()=>{K(n.inputValue)})),pt=jl(ft,V.value),mt=l=>{n.previousQuery!==l&&(n.previousQuery=l,e.filterable&&nt(e.filterMethod)?e.filterMethod(l):e.filterable&&e.remote&&nt(e.remoteMethod)&&e.remoteMethod(l))},ll=l=>{Tt(e.modelValue,l)||t(Ht,l)},Re=l=>{t(Ft,l),ll(l),n.previousValue=l==null?void 0:l.toString()},nl=(l=[],d)=>{if(!ke(d))return l.indexOf(d);const y=e.valueKey;let T=-1;return l.some((ae,se)=>ne(ae,y)===ne(d,y)?(T=se,!0):!1),T},ye=l=>ke(l)?ne(l,e.valueKey):l,ol=l=>ke(l)?l.label:l,xe=()=>_(()=>{var l,d;if(!f.value)return;const y=A.value;H.value.height=y.offsetHeight,C.value&&D.value!==!1&&((d=(l=N.value)==null?void 0:l.updatePopper)==null||d.call(l))}),vt=()=>{var l,d;if(al(),Q(),(d=(l=N.value)==null?void 0:l.updatePopper)==null||d.call(l),e.multiple)return xe()},al=()=>{const l=A.value;l&&(n.selectWidth=l.getBoundingClientRect().width)},ht=(l,d,y=!0)=>{var T,ae;if(e.multiple){let se=e.modelValue.slice();const He=nl(se,ye(l));He>-1?(se=[...se.slice(0,He),...se.slice(He+1)],n.cachedOptions.splice(He,1),z(l)):(e.multipleLimit<=0||se.length<e.multipleLimit)&&(se=[...se,ye(l)],n.cachedOptions.push(l),F(l),Se(d)),Re(se),l.created&&(n.query="",mt(""),n.inputLength=20),e.filterable&&!e.reserveKeyword&&((ae=(T=f.value).focus)==null||ae.call(T),Fe("")),e.filterable&&(n.calculatedWidth=q.value.getBoundingClientRect().width),xe(),fl()}else m.value=d,n.selectedLabel=l.label,Re(ye(l)),C.value=!1,n.isComposing=!1,n.isSilentBlur=y,F(l),l.created||$(),Se(d)},sl=(l,d)=>{const{valueKey:y}=e,T=e.modelValue.indexOf(ne(d,y));if(T>-1&&!P.value){const ae=[...e.modelValue.slice(0,T),...e.modelValue.slice(T+1)];return n.cachedOptions.splice(T,1),Re(ae),t("remove-tag",ne(d,y)),n.softFocus=!0,z(d),_(ze)}l.stopPropagation()},il=l=>{const d=n.isComposing;n.isComposing=!0,n.softFocus?n.softFocus=!1:d||t("focus",l)},gt=l=>(n.softFocus=!1,_(()=>{var d,y;(y=(d=f.value)==null?void 0:d.blur)==null||y.call(d),q.value&&(n.calculatedWidth=q.value.getBoundingClientRect().width),n.isSilentBlur?n.isSilentBlur=!1:n.isComposing&&t("blur",l),n.isComposing=!1})),rl=()=>{n.displayInputValue.length>0?Fe(""):C.value=!1},ul=l=>{if(n.displayInputValue.length===0){l.preventDefault();const d=e.modelValue.slice();d.pop(),z(n.cachedOptions.pop()),Re(d)}},cl=()=>{let l;return Be(e.modelValue)?l=[]:l=void 0,n.softFocus=!0,e.multiple?n.cachedOptions=[]:n.selectedLabel="",C.value=!1,Re(l),t("clear"),$(),_(ze)},Fe=l=>{n.displayInputValue=l,n.inputValue=l},bt=(l,d=void 0)=>{const y=R.value;if(!["forward","backward"].includes(l)||P.value||y.length<=0||X.value)return;if(!C.value)return Je();d===void 0&&(d=n.hoveringIndex);let T=-1;l==="forward"?(T=d+1,T>=y.length&&(T=0)):l==="backward"&&(T=d-1,(T<0||T>=y.length)&&(T=y.length-1));const ae=y[T];if(ae.disabled||ae.type==="Group")return bt(l,T);Se(T),_e(T)},dl=()=>{if(C.value)~n.hoveringIndex&&R.value[n.hoveringIndex]&&ht(R.value[n.hoveringIndex],n.hoveringIndex,!1);else return Je()},Se=l=>{n.hoveringIndex=l},yt=()=>{n.hoveringIndex=-1},fl=()=>{var l;const d=f.value;d&&((l=d.focus)==null||l.call(d))},St=l=>{const d=l.target.value;if(Fe(d),n.displayInputValue.length>0&&!C.value&&(C.value=!0),n.calculatedWidth=q.value.getBoundingClientRect().width,e.multiple&&xe(),e.remote)pt();else return ft()},pl=()=>(C.value=!1,gt()),ml=()=>(n.inputValue=n.displayInputValue,_(()=>{~x.value&&(Se(x.value),_e(n.hoveringIndex))})),_e=l=>{a.value.scrollToItem(l)},et=()=>{if(yt(),e.multiple)if(e.modelValue.length>0){let l=!1;n.cachedOptions.length=0,n.previousValue=e.modelValue.toString(),e.modelValue.forEach(d=>{const y=R.value.findIndex(T=>ye(T)===d);~y&&(n.cachedOptions.push(R.value[y]),l||Se(y),l=!0)})}else n.cachedOptions=[],n.previousValue=void 0;else if(w.value){n.previousValue=e.modelValue;const l=R.value,d=l.findIndex(y=>ye(y)===ye(e.modelValue));~d?(n.selectedLabel=l[d].label,Se(d)):n.selectedLabel=`${e.modelValue}`}else n.selectedLabel="",n.previousValue=void 0;$(),Q()};return we(C,l=>{var d,y;t("visible-change",l),l?(y=(d=N.value).update)==null||y.call(d):(n.displayInputValue="",n.previousQuery=null,K(""))}),we(()=>e.modelValue,(l,d)=>{var y;(!l||l.toString()!==n.previousValue)&&et(),!Tt(l,d)&&e.validateEvent&&((y=c==null?void 0:c.validate)==null||y.call(c,"change").catch(T=>Nl()))},{deep:!0}),we(()=>e.options,()=>{const l=f.value;(!l||l&&document.activeElement!==l)&&et()},{deep:!0}),we(R,()=>_(a.value.resetScrollTop)),we(()=>p.value,l=>{l||yt()}),$t(()=>{et()}),kl(H,vt),{collapseTagSize:te,currentPlaceholder:ue,expanded:C,emptyText:D,popupHeight:j,debounce:V,filteredOptions:R,iconComponent:b,iconReverse:B,inputWrapperStyle:U,popperSize:g,dropdownMenuVisible:p,hasModelValue:w,shouldShowPlaceholder:re,selectDisabled:P,selectSize:J,showClearBtn:oe,states:n,tagMaxWidth:de,nsSelectV2:s,nsInput:i,calculatorRef:q,controlRef:r,inputRef:f,menuRef:a,popper:N,selectRef:H,selectionRef:A,popperRef:fe,validateState:v,validateIcon:S,showTagList:O,collapseTagList:M,debouncedOnInputChange:pt,deleteTag:sl,getLabel:ol,getValueKey:ye,handleBlur:gt,handleClear:cl,handleClickOutside:pl,handleDel:ul,handleEsc:rl,handleFocus:il,handleMenuEnter:ml,handleResize:vt,toggleMenu:Je,scrollTo:_e,onInput:St,onKeyboardNavigate:bt,onKeyboardSelect:dl,onSelect:ht,onHover:Se,onUpdateInputValue:Fe,handleCompositionStart:pe,handleCompositionEnd:$e,handleCompositionUpdate:me}},Ln=Me({name:"ElSelectV2",components:{ElSelectMenu:Cn,ElTag:Ul,ElTooltip:Pl,ElIcon:Bl},directives:{ClickOutside:Yl,ModelText:Al},props:yn,emits:[Ft,Ht,"remove-tag","clear","visible-change","focus","blur"],setup(e,{emit:t}){const o=h(()=>{const{modelValue:i,multiple:u}=e,c=u?[]:void 0;return Be(i)?u?i:c:u?c:i}),s=Rn(je({...Ot(e),modelValue:o}),t);return Dl(tl,{props:je({...Ot(e),height:s.popupHeight,modelValue:o}),popper:s.popper,onSelect:s.onSelect,onHover:s.onHover,onKeyboardNavigate:s.onKeyboardNavigate,onKeyboardSelect:s.onKeyboardSelect}),{...s,modelValue:o}}}),Nn={key:0},kn=["id","autocomplete","aria-expanded","aria-labelledby","disabled","readonly","name","unselectable"],Bn=["textContent"],An=["id","aria-labelledby","aria-expanded","autocomplete","disabled","name","readonly","unselectable"],Dn=["textContent"];function $n(e,t,o,s,i,u){const c=Ke("el-tag"),n=Ke("el-tooltip"),m=Ke("el-icon"),g=Ke("el-select-menu"),r=Ct("model-text"),f=Ct("click-outside");return Pe((L(),W("div",{ref:"selectRef",class:E([e.nsSelectV2.b(),e.nsSelectV2.m(e.selectSize)]),onClick:t[24]||(t[24]=Z((...a)=>e.toggleMenu&&e.toggleMenu(...a),["stop"])),onMouseenter:t[25]||(t[25]=a=>e.states.comboBoxHovering=!0),onMouseleave:t[26]||(t[26]=a=>e.states.comboBoxHovering=!1)},[ee(n,{ref:"popper",visible:e.dropdownMenuVisible,teleported:e.teleported,"popper-class":[e.nsSelectV2.e("popper"),e.popperClass],"gpu-acceleration":!1,"stop-popper-mouse-event":!1,"popper-options":e.popperOptions,"fallback-placements":["bottom-start","top-start","right","left"],effect:e.effect,placement:e.placement,pure:"",transition:`${e.nsSelectV2.namespace.value}-zoom-in-top`,trigger:"click",persistent:e.persistent,onBeforeShow:e.handleMenuEnter,onHide:t[23]||(t[23]=a=>e.states.inputValue=e.states.displayInputValue)},{default:Y(()=>[G("div",{ref:"selectionRef",class:E([e.nsSelectV2.e("wrapper"),e.nsSelectV2.is("focused",e.states.isComposing||e.expanded),e.nsSelectV2.is("hovering",e.states.comboBoxHovering),e.nsSelectV2.is("filterable",e.filterable),e.nsSelectV2.is("disabled",e.selectDisabled)])},[e.$slots.prefix?(L(),W("div",Nn,[Ue(e.$slots,"prefix")])):ve("v-if",!0),e.multiple?(L(),W("div",{key:1,class:E(e.nsSelectV2.e("selection"))},[e.collapseTags&&e.modelValue.length>0?(L(),W(Le,{key:0},[(L(!0),W(Le,null,tt(e.showTagList,a=>(L(),W("div",{key:e.getValueKey(a),class:E(e.nsSelectV2.e("selected-item"))},[ee(c,{closable:!e.selectDisabled&&!(a!=null&&a.disable),size:e.collapseTagSize,type:"info","disable-transitions":"",onClose:N=>e.deleteTag(N,a)},{default:Y(()=>[G("span",{class:E(e.nsSelectV2.e("tags-text")),style:ie({maxWidth:`${e.tagMaxWidth}px`})},le(a==null?void 0:a.label),7)]),_:2},1032,["closable","size","onClose"])],2))),128)),G("div",{class:E(e.nsSelectV2.e("selected-item"))},[e.modelValue.length>e.maxCollapseTags?(L(),he(c,{key:0,closable:!1,size:e.collapseTagSize,type:"info","disable-transitions":""},{default:Y(()=>[e.collapseTagsTooltip?(L(),he(n,{key:0,disabled:e.dropdownMenuVisible,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:!1},{default:Y(()=>[G("span",{class:E(e.nsSelectV2.e("tags-text")),style:ie({maxWidth:`${e.tagMaxWidth}px`})},"+ "+le(e.modelValue.length-e.maxCollapseTags),7)]),content:Y(()=>[G("div",{class:E(e.nsSelectV2.e("selection"))},[(L(!0),W(Le,null,tt(e.collapseTagList,a=>(L(),W("div",{key:e.getValueKey(a),class:E(e.nsSelectV2.e("selected-item"))},[ee(c,{closable:!e.selectDisabled&&!a.disabled,size:e.collapseTagSize,class:"in-tooltip",type:"info","disable-transitions":"",onClose:N=>e.deleteTag(N,a)},{default:Y(()=>[G("span",{class:E(e.nsSelectV2.e("tags-text")),style:ie({maxWidth:`${e.tagMaxWidth}px`})},le(e.getLabel(a)),7)]),_:2},1032,["closable","size","onClose"])],2))),128))],2)]),_:1},8,["disabled","effect"])):(L(),W("span",{key:1,class:E(e.nsSelectV2.e("tags-text")),style:ie({maxWidth:`${e.tagMaxWidth}px`})},"+ "+le(e.modelValue.length-e.maxCollapseTags),7))]),_:1},8,["size"])):ve("v-if",!0)],2)],64)):(L(!0),W(Le,{key:1},tt(e.states.cachedOptions,a=>(L(),W("div",{key:e.getValueKey(a),class:E(e.nsSelectV2.e("selected-item"))},[ee(c,{closable:!e.selectDisabled&&!a.disabled,size:e.collapseTagSize,type:"info","disable-transitions":"",onClose:N=>e.deleteTag(N,a)},{default:Y(()=>[G("span",{class:E(e.nsSelectV2.e("tags-text")),style:ie({maxWidth:`${e.tagMaxWidth}px`})},le(e.getLabel(a)),7)]),_:2},1032,["closable","size","onClose"])],2))),128)),G("div",{class:E([e.nsSelectV2.e("selected-item"),e.nsSelectV2.e("input-wrapper")]),style:ie(e.inputWrapperStyle)},[Pe(G("input",{id:e.id,ref:"inputRef",autocomplete:e.autocomplete,"aria-autocomplete":"list","aria-haspopup":"listbox",autocapitalize:"off","aria-expanded":e.expanded,"aria-labelledby":e.label,class:E([e.nsSelectV2.is(e.selectSize),e.nsSelectV2.e("combobox-input")]),disabled:e.disabled,role:"combobox",readonly:!e.filterable,spellcheck:"false",type:"text",name:e.name,unselectable:e.expanded?"on":void 0,"onUpdate:modelValue":t[0]||(t[0]=(...a)=>e.onUpdateInputValue&&e.onUpdateInputValue(...a)),onFocus:t[1]||(t[1]=(...a)=>e.handleFocus&&e.handleFocus(...a)),onBlur:t[2]||(t[2]=(...a)=>e.handleBlur&&e.handleBlur(...a)),onInput:t[3]||(t[3]=(...a)=>e.onInput&&e.onInput(...a)),onCompositionstart:t[4]||(t[4]=(...a)=>e.handleCompositionStart&&e.handleCompositionStart(...a)),onCompositionupdate:t[5]||(t[5]=(...a)=>e.handleCompositionUpdate&&e.handleCompositionUpdate(...a)),onCompositionend:t[6]||(t[6]=(...a)=>e.handleCompositionEnd&&e.handleCompositionEnd(...a)),onKeydown:[t[7]||(t[7]=ce(Z(a=>e.onKeyboardNavigate("backward"),["stop","prevent"]),["up"])),t[8]||(t[8]=ce(Z(a=>e.onKeyboardNavigate("forward"),["stop","prevent"]),["down"])),t[9]||(t[9]=ce(Z((...a)=>e.onKeyboardSelect&&e.onKeyboardSelect(...a),["stop","prevent"]),["enter"])),t[10]||(t[10]=ce(Z((...a)=>e.handleEsc&&e.handleEsc(...a),["stop","prevent"]),["esc"])),t[11]||(t[11]=ce(Z((...a)=>e.handleDel&&e.handleDel(...a),["stop"]),["delete"]))]},null,42,kn),[[r,e.states.displayInputValue]]),e.filterable?(L(),W("span",{key:0,ref:"calculatorRef","aria-hidden":"true",class:E(e.nsSelectV2.e("input-calculator")),textContent:le(e.states.displayInputValue)},null,10,Bn)):ve("v-if",!0)],6)],2)):(L(),W(Le,{key:2},[G("div",{class:E([e.nsSelectV2.e("selected-item"),e.nsSelectV2.e("input-wrapper")])},[Pe(G("input",{id:e.id,ref:"inputRef","aria-autocomplete":"list","aria-haspopup":"listbox","aria-labelledby":e.label,"aria-expanded":e.expanded,autocapitalize:"off",autocomplete:e.autocomplete,class:E(e.nsSelectV2.e("combobox-input")),disabled:e.disabled,name:e.name,role:"combobox",readonly:!e.filterable,spellcheck:"false",type:"text",unselectable:e.expanded?"on":void 0,onCompositionstart:t[12]||(t[12]=(...a)=>e.handleCompositionStart&&e.handleCompositionStart(...a)),onCompositionupdate:t[13]||(t[13]=(...a)=>e.handleCompositionUpdate&&e.handleCompositionUpdate(...a)),onCompositionend:t[14]||(t[14]=(...a)=>e.handleCompositionEnd&&e.handleCompositionEnd(...a)),onFocus:t[15]||(t[15]=(...a)=>e.handleFocus&&e.handleFocus(...a)),onBlur:t[16]||(t[16]=(...a)=>e.handleBlur&&e.handleBlur(...a)),onInput:t[17]||(t[17]=(...a)=>e.onInput&&e.onInput(...a)),onKeydown:[t[18]||(t[18]=ce(Z(a=>e.onKeyboardNavigate("backward"),["stop","prevent"]),["up"])),t[19]||(t[19]=ce(Z(a=>e.onKeyboardNavigate("forward"),["stop","prevent"]),["down"])),t[20]||(t[20]=ce(Z((...a)=>e.onKeyboardSelect&&e.onKeyboardSelect(...a),["stop","prevent"]),["enter"])),t[21]||(t[21]=ce(Z((...a)=>e.handleEsc&&e.handleEsc(...a),["stop","prevent"]),["esc"]))],"onUpdate:modelValue":t[22]||(t[22]=(...a)=>e.onUpdateInputValue&&e.onUpdateInputValue(...a))},null,42,An),[[r,e.states.displayInputValue]])],2),e.filterable?(L(),W("span",{key:0,ref:"calculatorRef","aria-hidden":"true",class:E([e.nsSelectV2.e("selected-item"),e.nsSelectV2.e("input-calculator")]),textContent:le(e.states.displayInputValue)},null,10,Dn)):ve("v-if",!0)],64)),e.shouldShowPlaceholder?(L(),W("span",{key:3,class:E([e.nsSelectV2.e("placeholder"),e.nsSelectV2.is("transparent",e.multiple?e.modelValue.length===0:!e.hasModelValue)])},le(e.currentPlaceholder),3)):ve("v-if",!0),G("span",{class:E(e.nsSelectV2.e("suffix"))},[e.iconComponent?Pe((L(),he(m,{key:0,class:E([e.nsSelectV2.e("caret"),e.nsInput.e("icon"),e.iconReverse])},{default:Y(()=>[(L(),he(Ne(e.iconComponent)))]),_:1},8,["class"])),[[$l,!e.showClearBtn]]):ve("v-if",!0),e.showClearBtn&&e.clearIcon?(L(),he(m,{key:1,class:E([e.nsSelectV2.e("caret"),e.nsInput.e("icon")]),onClick:Z(e.handleClear,["prevent","stop"])},{default:Y(()=>[(L(),he(Ne(e.clearIcon)))]),_:1},8,["class","onClick"])):ve("v-if",!0),e.validateState&&e.validateIcon?(L(),he(m,{key:2,class:E([e.nsInput.e("icon"),e.nsInput.e("validateIcon")])},{default:Y(()=>[(L(),he(Ne(e.validateIcon)))]),_:1},8,["class"])):ve("v-if",!0)],2)],2)]),content:Y(()=>[ee(g,{ref:"menuRef",data:e.filteredOptions,width:e.popperSize,"hovering-index":e.states.hoveringIndex,"scrollbar-always-on":e.scrollbarAlwaysOn},{default:Y(a=>[Ue(e.$slots,"default",Fl(Hl(a)))]),empty:Y(()=>[Ue(e.$slots,"empty",{},()=>[G("p",{class:E(e.nsSelectV2.e("empty"))},le(e.emptyText?e.emptyText:""),3)])]),_:3},8,["data","width","hovering-index","scrollbar-always-on"])]),_:3},8,["visible","teleported","popper-class","popper-options","effect","placement","transition","persistent","onBeforeShow"])],34)),[[f,e.handleClickOutside,e.popperRef]])}var qe=ct(Ln,[["render",$n],["__file","/home/runner/work/element-plus/element-plus/packages/components/select-v2/src/select.vue"]]);qe.install=e=>{e.component(qe.name,qe)};const Fn=qe,jn=Fn;export{jn as E};
