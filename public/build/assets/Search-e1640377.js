import{k as ye,l as ae,m as Se,U as de,I as pe,C as Ee,p as he,q as ze,v as ne,x as Ae,y as Ue,z as fe,D as b,E as $e,G as Ie,H as Xe,J as me,K as Ke,L as Oe,M as _e,N as ce,O as Ve,P as xe,Q as be,o as p,a as P,e as k,w as ue,d as B,t as ve,R as l,n as K,j as le,S as Ce,T as Pe,V as Ye,W as We,X as je,Y as qe,Z as Ge,c as oe,f as G,F as H,b as ie,$ as He,_ as Ne,a0 as Fe,B as Le,g as Qe,a1 as Je,a2 as Ze,a3 as I,a4 as Te,r as Q,a5 as De,a6 as et}from"./app-a44995be.js";import{a as tt}from"./price-0faa232d.js";import{a as lt}from"./allProducts-0c28a109.js";import"./el-tag-93898b7a.js";import{E as nt}from"./el-select-v2-a905b73b.js";import{E as Re,a as st}from"./el-popper-c3f23f9e.js";import{E as rt}from"./el-input-number-3e92875f.js";import"./el-tooltip-4ed993c7.js";import{E as at}from"./el-checkbox-5bbe208d.js";import{b as ot}from"./products-642553d7.js";import{P as it}from"./ProductCategoriesSelect-8f03a03c.js";import{d as ke}from"./debounce-573356e3.js";import{P as ut}from"./ProductCard-e8641878.js";import"./validator-ae9f5db2.js";import"./strings-d8cf358b.js";import"./isEqual-e6c06f96.js";import"./categories-bca6ba28.js";import"./ProductPrice-83dfc561.js";import"./ProductOpenLink-5db88c1a.js";import"./StyledRouterLink-17b363a0.js";import"./ItemImage-7e28fc3d.js";const Me=Symbol("sliderContextKey"),dt=ye({modelValue:{type:ae([Number,Array]),default:0},id:{type:String,default:void 0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},showInput:Boolean,showInputControls:{type:Boolean,default:!0},size:Se,inputSize:Se,showStops:Boolean,showTooltip:{type:Boolean,default:!0},formatTooltip:{type:ae(Function),default:void 0},disabled:Boolean,range:Boolean,vertical:Boolean,height:String,debounce:{type:Number,default:300},label:{type:String,default:void 0},rangeStartLabel:{type:String,default:void 0},rangeEndLabel:{type:String,default:void 0},formatValueText:{type:ae(Function),default:void 0},tooltipClass:{type:String,default:void 0},placement:{type:String,values:Re,default:"top"},marks:{type:ae(Object)},validateEvent:{type:Boolean,default:!0}}),ge=e=>he(e)||ze(e)&&e.every(he),ct={[de]:ge,[pe]:ge,[Ee]:ge},mt=(e,t,r)=>{const n=ne();return Ae(async()=>{e.range?(Array.isArray(e.modelValue)?(t.firstValue=Math.max(e.min,e.modelValue[0]),t.secondValue=Math.min(e.max,e.modelValue[1])):(t.firstValue=e.min,t.secondValue=e.max),t.oldValue=[t.firstValue,t.secondValue]):(typeof e.modelValue!="number"||Number.isNaN(e.modelValue)?t.firstValue=e.min:t.firstValue=Math.min(e.max,Math.max(e.min,e.modelValue)),t.oldValue=t.firstValue),Ue(window,"resize",r),await fe(),r()}),{sliderWrapper:n}},ft=e=>b(()=>e.marks?Object.keys(e.marks).map(Number.parseFloat).sort((r,n)=>r-n).filter(r=>r<=e.max&&r>=e.min).map(r=>({point:r,position:(r-e.min)*100/(e.max-e.min),mark:e.marks[r]})):[]),vt=(e,t,r)=>{const{form:n,formItem:s}=$e(),u=Ie(),o=ne(),h=ne(),g={firstButton:o,secondButton:h},d=b(()=>e.disabled||(n==null?void 0:n.disabled)||!1),f=b(()=>Math.min(t.firstValue,t.secondValue)),a=b(()=>Math.max(t.firstValue,t.secondValue)),V=b(()=>e.range?`${100*(a.value-f.value)/(e.max-e.min)}%`:`${100*(t.firstValue-e.min)/(e.max-e.min)}%`),v=b(()=>e.range?`${100*(f.value-e.min)/(e.max-e.min)}%`:"0%"),L=b(()=>e.vertical?{height:e.height}:{}),T=b(()=>e.vertical?{height:V.value,bottom:v.value}:{width:V.value,left:v.value}),R=()=>{u.value&&(t.sliderSize=u.value[`client${e.vertical?"Height":"Width"}`])},z=m=>{const _=e.min+m*(e.max-e.min)/100;if(!e.range)return o;let C;return Math.abs(f.value-_)<Math.abs(a.value-_)?C=t.firstValue<t.secondValue?"firstButton":"secondButton":C=t.firstValue>t.secondValue?"firstButton":"secondButton",g[C]},E=m=>{const _=z(m);return _.value.setPosition(m),_},A=m=>{t.firstValue=m,y(e.range?[f.value,a.value]:m)},x=m=>{t.secondValue=m,e.range&&y([f.value,a.value])},y=m=>{r(de,m),r(pe,m)},S=async()=>{await fe(),r(Ee,e.range?[f.value,a.value]:e.modelValue)},J=m=>{var _,C,D,ee,te,q;if(d.value||t.dragging)return;R();let X=0;if(e.vertical){const F=(D=(C=(_=m.touches)==null?void 0:_.item(0))==null?void 0:C.clientY)!=null?D:m.clientY;X=(u.value.getBoundingClientRect().bottom-F)/t.sliderSize*100}else{const F=(q=(te=(ee=m.touches)==null?void 0:ee.item(0))==null?void 0:te.clientX)!=null?q:m.clientX,M=u.value.getBoundingClientRect().left;X=(F-M)/t.sliderSize*100}if(!(X<0||X>100))return E(X)};return{elFormItem:s,slider:u,firstButton:o,secondButton:h,sliderDisabled:d,minValue:f,maxValue:a,runwayStyle:L,barStyle:T,resetSize:R,setPosition:E,emitChange:S,onSliderWrapperPrevent:m=>{var _,C;((_=g.firstButton.value)!=null&&_.dragging||(C=g.secondButton.value)!=null&&C.dragging)&&m.preventDefault()},onSliderClick:m=>{J(m)&&S()},onSliderDown:async m=>{const _=J(m);_&&(await fe(),_.value.onButtonDown(m))},setFirstValue:A,setSecondValue:x}},{left:gt,down:ht,right:bt,up:yt,home:pt,end:Vt,pageUp:wt,pageDown:St}=Ke,_t=(e,t,r)=>{const n=ne(),s=ne(!1),u=b(()=>t.value instanceof Function),o=b(()=>u.value&&t.value(e.modelValue)||e.modelValue),h=ke(()=>{r.value&&(s.value=!0)},50),g=ke(()=>{r.value&&(s.value=!1)},50);return{tooltip:n,tooltipVisible:s,formatValue:o,displayTooltip:h,hideTooltip:g}},Pt=(e,t,r)=>{const{disabled:n,min:s,max:u,step:o,showTooltip:h,precision:g,sliderSize:d,formatTooltip:f,emitChange:a,resetSize:V,updateDragging:v}=Xe(Me),{tooltip:L,tooltipVisible:T,formatValue:R,displayTooltip:z,hideTooltip:E}=_t(e,f,h),A=ne(),x=b(()=>`${(e.modelValue-s.value)/(u.value-s.value)*100}%`),y=b(()=>e.vertical?{bottom:x.value}:{left:x.value}),S=()=>{t.hovering=!0,z()},J=()=>{t.hovering=!1,t.dragging||E()},Z=i=>{n.value||(i.preventDefault(),X(i),window.addEventListener("mousemove",F),window.addEventListener("touchmove",F),window.addEventListener("mouseup",M),window.addEventListener("touchend",M),window.addEventListener("contextmenu",M),A.value.focus())},O=i=>{n.value||(t.newPosition=Number.parseFloat(x.value)+i/(u.value-s.value)*100,Y(t.newPosition),a())},j=()=>{O(-o.value)},m=()=>{O(o.value)},_=()=>{O(-o.value*4)},C=()=>{O(o.value*4)},D=()=>{n.value||(Y(0),a())},ee=()=>{n.value||(Y(100),a())},te=i=>{let w=!0;[gt,ht].includes(i.key)?j():[bt,yt].includes(i.key)?m():i.key===pt?D():i.key===Vt?ee():i.key===St?_():i.key===wt?C():w=!1,w&&i.preventDefault()},q=i=>{let w,U;return i.type.startsWith("touch")?(U=i.touches[0].clientY,w=i.touches[0].clientX):(U=i.clientY,w=i.clientX),{clientX:w,clientY:U}},X=i=>{t.dragging=!0,t.isClick=!0;const{clientX:w,clientY:U}=q(i);e.vertical?t.startY=U:t.startX=w,t.startPosition=Number.parseFloat(x.value),t.newPosition=t.startPosition},F=i=>{if(t.dragging){t.isClick=!1,z(),V();let w;const{clientX:U,clientY:W}=q(i);e.vertical?(t.currentY=W,w=(t.startY-t.currentY)/d.value*100):(t.currentX=U,w=(t.currentX-t.startX)/d.value*100),t.newPosition=t.startPosition+w,Y(t.newPosition)}},M=()=>{t.dragging&&(setTimeout(()=>{t.dragging=!1,t.hovering||E(),t.isClick||Y(t.newPosition),a()},0),window.removeEventListener("mousemove",F),window.removeEventListener("touchmove",F),window.removeEventListener("mouseup",M),window.removeEventListener("touchend",M),window.removeEventListener("contextmenu",M))},Y=async i=>{if(i===null||Number.isNaN(+i))return;i<0?i=0:i>100&&(i=100);const w=100/((u.value-s.value)/o.value);let W=Math.round(i/w)*w*(u.value-s.value)*.01+s.value;W=Number.parseFloat(W.toFixed(g.value)),W!==e.modelValue&&r(de,W),!t.dragging&&e.modelValue!==t.oldValue&&(t.oldValue=e.modelValue),await fe(),t.dragging&&z(),L.value.updatePopper()};return me(()=>t.dragging,i=>{v(i)}),{disabled:n,button:A,tooltip:L,tooltipVisible:T,showTooltip:h,wrapperStyle:y,formatValue:R,handleMouseEnter:S,handleMouseLeave:J,onButtonDown:Z,onKeyDown:te,setPosition:Y}},kt=(e,t,r,n)=>({stops:b(()=>{if(!e.showStops||e.min>e.max)return[];if(e.step===0)return[];const o=(e.max-e.min)/e.step,h=100*e.step/(e.max-e.min),g=Array.from({length:o-1}).map((d,f)=>(f+1)*h);return e.range?g.filter(d=>d<100*(r.value-e.min)/(e.max-e.min)||d>100*(n.value-e.min)/(e.max-e.min)):g.filter(d=>d>100*(t.firstValue-e.min)/(e.max-e.min))}),getStopStyle:o=>e.vertical?{bottom:`${o}%`}:{left:`${o}%`}}),Bt=(e,t,r,n,s,u)=>{const o=d=>{s(de,d),s(pe,d)},h=()=>e.range?![r.value,n.value].every((d,f)=>d===t.oldValue[f]):e.modelValue!==t.oldValue,g=()=>{var d,f;e.min>e.max&&Oe("Slider","min should not be greater than max.");const a=e.modelValue;e.range&&Array.isArray(a)?a[1]<e.min?o([e.min,e.min]):a[0]>e.max?o([e.max,e.max]):a[0]<e.min?o([e.min,a[1]]):a[1]>e.max?o([a[0],e.max]):(t.firstValue=a[0],t.secondValue=a[1],h()&&(e.validateEvent&&((d=u==null?void 0:u.validate)==null||d.call(u,"change").catch(V=>_e())),t.oldValue=a.slice())):!e.range&&typeof a=="number"&&!Number.isNaN(a)&&(a<e.min?o(e.min):a>e.max?o(e.max):(t.firstValue=a,h()&&(e.validateEvent&&((f=u==null?void 0:u.validate)==null||f.call(u,"change").catch(V=>_e())),t.oldValue=a)))};g(),me(()=>t.dragging,d=>{d||g()}),me(()=>e.modelValue,(d,f)=>{t.dragging||Array.isArray(d)&&Array.isArray(f)&&d.every((a,V)=>a===f[V])&&t.firstValue===d[0]&&t.secondValue===d[1]||g()},{deep:!0}),me(()=>[e.min,e.max],()=>{g()})},Et=ye({modelValue:{type:Number,default:0},vertical:Boolean,tooltipClass:String,placement:{type:String,values:Re,default:"top"}}),xt={[de]:e=>he(e)},Ct=["tabindex"],Nt=ce({name:"ElSliderButton"}),Ft=ce({...Nt,props:Et,emits:xt,setup(e,{expose:t,emit:r}){const n=e,s=Ve("slider"),u=xe({hovering:!1,dragging:!1,isClick:!1,startX:0,currentX:0,startY:0,currentY:0,startPosition:0,newPosition:0,oldValue:n.modelValue}),{disabled:o,button:h,tooltip:g,showTooltip:d,tooltipVisible:f,wrapperStyle:a,formatValue:V,handleMouseEnter:v,handleMouseLeave:L,onButtonDown:T,onKeyDown:R,setPosition:z}=Pt(n,u,r),{hovering:E,dragging:A}=be(u);return t({onButtonDown:T,onKeyDown:R,setPosition:z,hovering:E,dragging:A}),(x,y)=>(p(),P("div",{ref_key:"button",ref:h,class:K([l(s).e("button-wrapper"),{hover:l(E),dragging:l(A)}]),style:le(l(a)),tabindex:l(o)?-1:0,onMouseenter:y[0]||(y[0]=(...S)=>l(v)&&l(v)(...S)),onMouseleave:y[1]||(y[1]=(...S)=>l(L)&&l(L)(...S)),onMousedown:y[2]||(y[2]=(...S)=>l(T)&&l(T)(...S)),onTouchstart:y[3]||(y[3]=(...S)=>l(T)&&l(T)(...S)),onFocus:y[4]||(y[4]=(...S)=>l(v)&&l(v)(...S)),onBlur:y[5]||(y[5]=(...S)=>l(L)&&l(L)(...S)),onKeydown:y[6]||(y[6]=(...S)=>l(R)&&l(R)(...S))},[k(l(st),{ref_key:"tooltip",ref:g,visible:l(f),placement:x.placement,"fallback-placements":["top","bottom","right","left"],"stop-popper-mouse-event":!1,"popper-class":x.tooltipClass,disabled:!l(d),persistent:""},{content:ue(()=>[B("span",null,ve(l(V)),1)]),default:ue(()=>[B("div",{class:K([l(s).e("button"),{hover:l(E),dragging:l(A)}])},null,2)]),_:1},8,["visible","placement","popper-class","disabled"])],46,Ct))}});var Be=Ce(Ft,[["__file","/home/runner/work/element-plus/element-plus/packages/components/slider/src/button.vue"]]);const Lt=ye({mark:{type:ae([String,Object]),default:void 0}});var Tt=ce({name:"ElSliderMarker",props:Lt,setup(e){const t=Ve("slider"),r=b(()=>Pe(e.mark)?e.mark:e.mark.label),n=b(()=>Pe(e.mark)?void 0:e.mark.style);return()=>Ye("div",{class:t.e("marks-text"),style:n.value},r.value)}});const Rt=["id","role","aria-label","aria-labelledby"],Mt={key:1},zt=ce({name:"ElSlider"}),At=ce({...zt,props:dt,emits:ct,setup(e,{expose:t,emit:r}){const n=e,s=Ve("slider"),{t:u}=We(),o=xe({firstValue:0,secondValue:0,oldValue:0,dragging:!1,sliderSize:1}),{elFormItem:h,slider:g,firstButton:d,secondButton:f,sliderDisabled:a,minValue:V,maxValue:v,runwayStyle:L,barStyle:T,resetSize:R,emitChange:z,onSliderWrapperPrevent:E,onSliderClick:A,onSliderDown:x,setFirstValue:y,setSecondValue:S}=vt(n,o,r),{stops:J,getStopStyle:Z}=kt(n,o,V,v),{inputId:O,isLabeledByFormItem:j}=je(n,{formItemContext:h}),m=qe(),_=b(()=>n.inputSize||m.value),C=b(()=>n.label||u("el.slider.defaultLabel",{min:n.min,max:n.max})),D=b(()=>n.range?n.rangeStartLabel||u("el.slider.defaultRangeStartLabel"):C.value),ee=b(()=>n.formatValueText?n.formatValueText(i.value):`${i.value}`),te=b(()=>n.rangeEndLabel||u("el.slider.defaultRangeEndLabel")),q=b(()=>n.formatValueText?n.formatValueText(w.value):`${w.value}`),X=b(()=>[s.b(),s.m(m.value),s.is("vertical",n.vertical),{[s.m("with-input")]:n.showInput}]),F=ft(n);Bt(n,o,V,v,r,h);const M=b(()=>{const c=[n.min,n.max,n.step].map($=>{const se=`${$}`.split(".")[1];return se?se.length:0});return Math.max.apply(null,c)}),{sliderWrapper:Y}=mt(n,o,R),{firstValue:i,secondValue:w,sliderSize:U}=be(o),W=c=>{o.dragging=c};return Ge(Me,{...be(n),sliderSize:U,disabled:a,precision:M,emitChange:z,resetSize:R,updateDragging:W}),t({onSliderClick:A}),(c,$)=>{var se,we;return p(),P("div",{id:c.range?l(O):void 0,ref_key:"sliderWrapper",ref:Y,class:K(l(X)),role:c.range?"group":void 0,"aria-label":c.range&&!l(j)?l(C):void 0,"aria-labelledby":c.range&&l(j)?(se=l(h))==null?void 0:se.labelId:void 0,onTouchstart:$[2]||($[2]=(...N)=>l(E)&&l(E)(...N)),onTouchmove:$[3]||($[3]=(...N)=>l(E)&&l(E)(...N))},[B("div",{ref_key:"slider",ref:g,class:K([l(s).e("runway"),{"show-input":c.showInput&&!c.range},l(s).is("disabled",l(a))]),style:le(l(L)),onMousedown:$[0]||($[0]=(...N)=>l(x)&&l(x)(...N)),onTouchstart:$[1]||($[1]=(...N)=>l(x)&&l(x)(...N))},[B("div",{class:K(l(s).e("bar")),style:le(l(T))},null,6),k(Be,{id:c.range?void 0:l(O),ref_key:"firstButton",ref:d,"model-value":l(i),vertical:c.vertical,"tooltip-class":c.tooltipClass,placement:c.placement,role:"slider","aria-label":c.range||!l(j)?l(D):void 0,"aria-labelledby":!c.range&&l(j)?(we=l(h))==null?void 0:we.labelId:void 0,"aria-valuemin":c.min,"aria-valuemax":c.range?l(w):c.max,"aria-valuenow":l(i),"aria-valuetext":l(ee),"aria-orientation":c.vertical?"vertical":"horizontal","aria-disabled":l(a),"onUpdate:modelValue":l(y)},null,8,["id","model-value","vertical","tooltip-class","placement","aria-label","aria-labelledby","aria-valuemin","aria-valuemax","aria-valuenow","aria-valuetext","aria-orientation","aria-disabled","onUpdate:modelValue"]),c.range?(p(),oe(Be,{key:0,ref_key:"secondButton",ref:f,"model-value":l(w),vertical:c.vertical,"tooltip-class":c.tooltipClass,placement:c.placement,role:"slider","aria-label":l(te),"aria-valuemin":l(i),"aria-valuemax":c.max,"aria-valuenow":l(w),"aria-valuetext":l(q),"aria-orientation":c.vertical?"vertical":"horizontal","aria-disabled":l(a),"onUpdate:modelValue":l(S)},null,8,["model-value","vertical","tooltip-class","placement","aria-label","aria-valuemin","aria-valuemax","aria-valuenow","aria-valuetext","aria-orientation","aria-disabled","onUpdate:modelValue"])):G("v-if",!0),c.showStops?(p(),P("div",Mt,[(p(!0),P(H,null,ie(l(J),(N,re)=>(p(),P("div",{key:re,class:K(l(s).e("stop")),style:le(l(Z)(N))},null,6))),128))])):G("v-if",!0),l(F).length>0?(p(),P(H,{key:2},[B("div",null,[(p(!0),P(H,null,ie(l(F),(N,re)=>(p(),P("div",{key:re,style:le(l(Z)(N.position)),class:K([l(s).e("stop"),l(s).e("marks-stop")])},null,6))),128))]),B("div",{class:K(l(s).e("marks"))},[(p(!0),P(H,null,ie(l(F),(N,re)=>(p(),oe(l(Tt),{key:re,mark:N.mark,style:le(l(Z)(N.position))},null,8,["mark","style"]))),128))],2)],64)):G("v-if",!0)],38),c.showInput&&!c.range?(p(),oe(l(rt),{key:0,ref:"input","model-value":l(i),class:K(l(s).e("input")),step:c.step,disabled:l(a),controls:c.showInputControls,min:c.min,max:c.max,debounce:c.debounce,size:l(_),"onUpdate:modelValue":l(y),onChange:l(z)},null,8,["model-value","class","step","disabled","controls","min","max","debounce","size","onUpdate:modelValue","onChange"])):G("v-if",!0)],42,Rt)}}});var Ut=Ce(At,[["__file","/home/runner/work/element-plus/element-plus/packages/components/slider/src/slider.vue"]]);const $t=He(Ut);const It={name:"FiltersBlock",components:{ProductCategoriesSelect:it,FullWidthButton:Fe,BasedText:Le},emits:["updateFilters"],computed:{minPrice:{get(){return this.priceBetween[0]},set(e){this.priceBetween[+(e>=this.maxPrice)]=+e}},maxPrice:{get(){return this.priceBetween[1]},set(e){this.priceBetween[1]=+e}}},data(){return{hasReviews:!1,priceBetween:[],categoriesOptions:[],selectedCategories:[],sellers:[],sellersOptions:[],selectedSellers:[],sellersPending:!0,maxAvailablePrice:1e6}},props:{productsLoadingPending:{required:!0,type:Boolean}},methods:{async loadSellers(){try{this.sellers=(await Qe(ot)).data,this.sellersOptions=this.sellers.map(e=>({value:e.id,label:e.name})),this.sellersPending=!1}catch(e){Je(Ze(e)),console.error(e)}},saveFilters(){const e={[I.hasReviews]:this.hasReviews||null,[I.sellers]:this.selectedSellers.join(",")||null,[I.categories]:this.selectedCategories.join(",")||null,[I.priceBetween]:this.getValidatedPriceBetween()};this.$emit("updateFilters",e)},getValidatedPriceBetween(){const[e,t]=[this.minPrice,this.maxPrice].sort((r,n)=>r-n);return e===0&&t===this.maxAvailablePrice?null:t===this.maxAvailablePrice?[e,Number.MAX_SAFE_INTEGER]:[e,t]},getFiltersFromQuery(e){return e&&typeof e=="string"?e.split(","):e}},mounted(){this.priceBetween=[0,this.maxAvailablePrice],this.loadSellers();const e=this.$route.query,t=e[I.priceBetween];this.hasReviews=!!e[I.hasReviews],this.selectedSellers=this.getFiltersFromQuery(e[I.sellers]).map(r=>parseInt(r)).filter(r=>r&&!isNaN(r)),this.selectedCategories=this.getFiltersFromQuery(e[I.categories]),this.priceBetween=(t||[0,this.maxAvailablePrice]).map(Number)}},Xt={class:"filter-block"},Kt={class:"filter-block"},Ot={class:"slider-inputs"},Yt={class:"filter-block"},Wt={class:"filter-block"};function jt(e,t,r,n,s,u){const o=Q("based-text"),h=at,g=De,d=$t,f=nt,a=Q("product-categories-select"),V=Q("full-width-button");return p(),P("div",null,[B("div",Xt,[k(h,{modelValue:s.hasReviews,"onUpdate:modelValue":t[0]||(t[0]=v=>s.hasReviews=v)},{default:ue(()=>[k(o,{title:e.$t("search.filters.hasReviews")},null,8,["title"])]),_:1},8,["modelValue"])]),B("div",Kt,[k(o,{title:e.$t("search.filters.priceBetween")},null,8,["title"]),B("div",Ot,[k(g,{modelValue:u.minPrice,"onUpdate:modelValue":t[1]||(t[1]=v=>u.minPrice=v)},null,8,["modelValue"]),k(g,{modelValue:u.maxPrice,"onUpdate:modelValue":t[2]||(t[2]=v=>u.maxPrice=v)},null,8,["modelValue"])]),k(d,{modelValue:s.priceBetween,"onUpdate:modelValue":t[3]||(t[3]=v=>s.priceBetween=v),range:"",max:s.maxAvailablePrice},null,8,["modelValue","max"])]),B("div",Yt,[k(o,{title:e.$t("search.filters.sellers")+":"},null,8,["title"]),k(f,{class:"filter-select",modelValue:s.selectedSellers,"onUpdate:modelValue":t[4]||(t[4]=v=>s.selectedSellers=v),disabled:s.sellersPending,filterable:"",options:s.sellersOptions,placeholder:e.$t("search.filters.sellers"),multiple:""},null,8,["modelValue","disabled","options","placeholder"])]),B("div",Wt,[k(o,{title:e.$t("search.filters.categories")+":"},null,8,["title"]),k(a,{"selected-categories":s.selectedCategories,"onUpdate:selectedCategories":t[5]||(t[5]=v=>s.selectedCategories=v)},null,8,["selected-categories"])]),k(V,{pending:r.productsLoadingPending,onClick:t[6]||(t[6]=v=>u.saveFilters())},{default:ue(()=>[Te(ve(e.$t("search.filters.apply")),1)]),_:1},8,["pending"])])}const qt=Ne(It,[["render",jt],["__scopeId","data-v-22a056a4"]]);const Gt={name:"Search",components:{ProductCard:ut,FullWidthButton:Fe,FiltersBlock:qt,BasedText:Le},mixins:[lt,et],data(){return{products:[],productsPending:!1,searchBy:""}},methods:{reloadProducts(){this.products=[],this.productsPagination=[],this.loadProducts()},loadProducts(){const e=this.$route.query;this.searchBy=e[I.searchBy],this.usePending(this.pushProductsToArray,"productsPending",this.productsPagination.next_cursor,e)},updateFilters(e){const t={[I.searchBy]:this.searchBy,...e};this.$router.push({name:"Search",query:this.deleteNullableFilters(t)})},deleteNullableFilters(e){const t={};return Object.keys(e).forEach(r=>{const n=e[r];n&&(t[r]=n)}),Object.assign(t)}},mounted(){this.reloadProducts()},watch:{$route(){this.reloadProducts()}}},Ht={class:"search-by-title-container"},Qt={class:"search-container"},Jt={class:"search-filters-container"},Zt={class:"search-filters-block card"},Dt={key:0},el={key:0},tl={key:1,class:"empty-products-error card"},ll={key:1};function nl(e,t,r,n,s,u){var a;const o=Q("based-text"),h=Q("filters-block"),g=Q("product-card"),d=tt,f=Q("full-width-button");return p(),P(H,null,[B("div",Ht,[k(o,{class:"search-by-title",title:s.searchBy},null,8,["title"])]),B("div",Qt,[B("div",Jt,[B("div",Zt,[k(h,{"products-loading-pending":s.productsPending,onUpdateFilters:u.updateFilters},null,8,["products-loading-pending","onUpdateFilters"])])]),B("div",null,[!s.productsPending||s.products.length>0?(p(),P("div",Dt,[s.products.length>0?(p(),P("div",el,[(p(!0),P(H,null,ie(s.products,V=>(p(),oe(g,{product:V,key:V.slug,"is-show-add-to-cart-button":!0},null,8,["product"]))),128))])):G("",!0),!s.productsPending&&s.products.length===0?(p(),P("div",tl,ve(e.$t("search.noProducts")),1)):G("",!0)])):(p(),P("div",ll,[(p(),P(H,null,ie(20,V=>k(d,{key:V,class:"product-card card",animated:""})),64))])),(a=e.productsPagination)!=null&&a.next_cursor?(p(),oe(f,{key:2,pending:s.productsPending,onClick:t[0]||(t[0]=V=>u.loadProducts())},{default:ue(()=>[Te(ve(e.$t("general.showMore")),1)]),_:1},8,["pending"])):G("",!0)])])],64)}const kl=Ne(Gt,[["render",nl],["__scopeId","data-v-89cfe283"]]);export{kl as default};