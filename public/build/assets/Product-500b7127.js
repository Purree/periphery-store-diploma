import{k as Be,l as G,af as le,cR as j,aR as de,cS as Le,m as Te,C as $e,p as ue,U as H,N as Re,H as ce,cT as Ae,cL as qe,Y as Fe,O as Oe,X as Ne,v as K,D as I,q as X,aV as ve,b0 as Y,T as pe,J as We,o as i,a as c,F as U,b as F,n as q,R as y,e as o,w as R,av as _e,c as h,bg as J,aw as me,f as k,al as we,j as ge,t as D,S as je,K as z,aN as fe,$ as ze,_ as x,s as He,cU as Me,r as d,d as P,b5 as Ge,cV as ye,a4 as B,a3 as Ke,h as Xe,B as Ye,b2 as Je,bs as Ze,u as Z,g as $,aa as Qe,a6 as Q,cW as et,cX as tt,cY as at,cZ as he,c_ as nt,a1 as be,a2 as ke,a0 as ee,a8 as it,a5 as st,a9 as rt,c$ as ot,d0 as lt,ae as dt,bF as ut,d1 as ct}from"./app-a44995be.js";import{j as vt}from"./products-642553d7.js";import{E as Pe,a as M}from"./price-0faa232d.js";import{P as pt,A as _t,a as mt,b as wt}from"./ProductPrice-83dfc561.js";import{C as gt,E as ft,P as ht,a as Rt}from"./CategoryOpenLinkCard-de364d2c.js";import{S as yt}from"./StyledRouterLink-17b363a0.js";import{U as bt}from"./UnderHeaderTitle-d82c5403.js";import{b as kt}from"./categories-bca6ba28.js";import{P as Ee}from"./ProfileTitle-6b33b777.js";import{E as Pt}from"./el-switch-b953123d.js";import"./el-form-item-4ed993c7.js";import"./el-input-number-3e92875f.js";import"./index-cfd6b18a.js";import"./throttle-7ddc0281.js";import"./debounce-573356e3.js";import"./ViewTitle-c8a84335.js";import"./validator-ae9f5db2.js";const Et=Be({modelValue:{type:Number,default:0},id:{type:String,default:void 0},lowThreshold:{type:Number,default:2},highThreshold:{type:Number,default:4},max:{type:Number,default:5},colors:{type:G([Array,Object]),default:()=>le(["","",""])},voidColor:{type:String,default:""},disabledVoidColor:{type:String,default:""},icons:{type:G([Array,Object]),default:()=>[j,j,j]},voidIcon:{type:de,default:()=>Le},disabledVoidIcon:{type:de,default:()=>j},disabled:Boolean,allowHalf:Boolean,showText:Boolean,showScore:Boolean,textColor:{type:String,default:""},texts:{type:G(Array),default:()=>le(["Extremely bad","Disappointed","Fair","Satisfied","Surprise"])},scoreTemplate:{type:String,default:"{value}"},size:Te,label:{type:String,default:void 0},clearable:{type:Boolean,default:!1}}),Ct={[$e]:e=>ue(e),[H]:e=>ue(e)},Vt=["id","aria-label","aria-labelledby","aria-valuenow","aria-valuetext","aria-valuemax"],It=["onMousemove","onClick"],xt=Re({name:"ElRate"}),St=Re({...xt,props:Et,emits:Ct,setup(e,{expose:a,emit:t}){const n=e;function l(s,g){const b=V=>ve(V),S=Object.keys(g).map(V=>+V).filter(V=>{const W=g[V];return(b(W)?W.excluded:!1)?s<V:s<=V}).sort((V,W)=>V-W),A=g[S[0]];return b(A)&&A.value||A}const r=ce(Ae,void 0),_=ce(qe,void 0),f=Fe(),u=Oe("rate"),{inputId:v,isLabeledByFormItem:m}=Ne(n,{formItemContext:_}),w=K(n.modelValue),p=K(-1),E=K(!0),L=I(()=>[u.b(),u.m(f.value)]),C=I(()=>n.disabled||(r==null?void 0:r.disabled)),T=I(()=>u.cssVarBlock({"void-color":n.voidColor,"disabled-void-color":n.disabledVoidColor,"fill-color":ae.value})),O=I(()=>{let s="";return n.showScore?s=n.scoreTemplate.replace(/\{\s*value\s*\}/,C.value?`${n.modelValue}`:`${w.value}`):n.showText&&(s=n.texts[Math.ceil(w.value)-1]),s}),N=I(()=>n.modelValue*100-Math.floor(n.modelValue)*100),Ce=I(()=>X(n.colors)?{[n.lowThreshold]:n.colors[0],[n.highThreshold]:{value:n.colors[1],excluded:!0},[n.max]:n.colors[2]}:n.colors),ae=I(()=>{const s=l(w.value,Ce.value);return ve(s)?"":s}),Ve=I(()=>{let s="";return C.value?s=`${N.value}%`:n.allowHalf&&(s="50%"),{color:ae.value,width:s}}),ne=I(()=>{let s=X(n.icons)?[...n.icons]:{...n.icons};return s=Y(s),X(s)?{[n.lowThreshold]:s[0],[n.highThreshold]:{value:s[1],excluded:!0},[n.max]:s[2]}:s}),Ie=I(()=>l(n.modelValue,ne.value)),xe=I(()=>C.value?pe(n.disabledVoidIcon)?n.disabledVoidIcon:Y(n.disabledVoidIcon):pe(n.voidIcon)?n.voidIcon:Y(n.voidIcon)),Se=I(()=>l(w.value,ne.value));function ie(s){const g=C.value&&N.value>0&&s-1<n.modelValue&&s>n.modelValue,b=n.allowHalf&&E.value&&s-.5<=w.value&&s>w.value;return g||b}function se(s){n.clearable&&s===n.modelValue&&(s=0),t(H,s),n.modelValue!==s&&t("change",s)}function De(s){C.value||(n.allowHalf&&E.value?se(w.value):se(s))}function Ue(s){if(C.value)return;let g=w.value;const b=s.code;return b===z.up||b===z.right?(n.allowHalf?g+=.5:g+=1,s.stopPropagation(),s.preventDefault()):(b===z.left||b===z.down)&&(n.allowHalf?g-=.5:g-=1,s.stopPropagation(),s.preventDefault()),g=g<0?0:g,g=g>n.max?n.max:g,t(H,g),t("change",g),g}function re(s,g){if(!C.value){if(n.allowHalf&&g){let b=g.target;fe(b,u.e("item"))&&(b=b.querySelector(`.${u.e("icon")}`)),(b.clientWidth===0||fe(b,u.e("decimal")))&&(b=b.parentNode),E.value=g.offsetX*2<=b.clientWidth,w.value=E.value?s-.5:s}else w.value=s;p.value=s}}function oe(){C.value||(n.allowHalf&&(E.value=n.modelValue!==Math.floor(n.modelValue)),w.value=n.modelValue,p.value=-1)}return We(()=>n.modelValue,s=>{w.value=s,E.value=n.modelValue!==Math.floor(n.modelValue)}),n.modelValue||t(H,0),a({setCurrentValue:re,resetCurrentValue:oe}),(s,g)=>{var b;return i(),c("div",{id:y(v),class:q([y(L),y(u).is("disabled",y(C))]),role:"slider","aria-label":y(m)?void 0:s.label||"rating","aria-labelledby":y(m)?(b=y(_))==null?void 0:b.labelId:void 0,"aria-valuenow":w.value,"aria-valuetext":y(O)||void 0,"aria-valuemin":"0","aria-valuemax":s.max,tabindex:"0",style:ge(y(T)),onKeydown:Ue},[(i(!0),c(U,null,F(s.max,(S,A)=>(i(),c("span",{key:A,class:q(y(u).e("item")),onMousemove:V=>re(S,V),onMouseleave:oe,onClick:V=>De(S)},[o(y(we),{class:q([y(u).e("icon"),{hover:p.value===S},y(u).is("active",S<=w.value)])},{default:R(()=>[ie(S)?k("v-if",!0):(i(),c(U,{key:0},[_e((i(),h(J(y(Se)),null,null,512)),[[me,S<=w.value]]),_e((i(),h(J(y(xe)),null,null,512)),[[me,!(S<=w.value)]])],64)),ie(S)?(i(),h(y(we),{key:1,style:ge(y(Ve)),class:q([y(u).e("icon"),y(u).e("decimal")])},{default:R(()=>[(i(),h(J(y(Ie))))]),_:1},8,["style","class"])):k("v-if",!0)]),_:2},1032,["class"])],42,It))),128)),s.showText||s.showScore?(i(),c("span",{key:0,class:q(y(u).e("text"))},D(y(O)),3)):k("v-if",!0)],46,Vt)}}});var Dt=je(St,[["__file","/home/runner/work/element-plus/element-plus/packages/components/rate/src/rate.vue"]]);const Ut=ze(Dt);const Bt={name:"ProductImagesCarousel",components:{Carousel:gt},mixins:[He],data(){return{isCarouselVertical:!0}},props:{images:{required:!1,type:Array,default:()=>[]},productPreview:{required:!1,type:[String,void 0]},pending:{required:!1,type:Boolean,default:!1}},methods:{updateCarouselButtonsBackgroundImage(){this.pending||this.$nextTick(()=>this.$refs.productCarousel.$el.querySelectorAll(".el-carousel__button").forEach((e,a)=>{this.isCarouselVertical?(e.style.backgroundColor="transparent",e.style.backgroundImage=`url(${this.allImages[a]})`):(e.style.backgroundColor="var(--el-color-white)",e.style.backgroundImage=null)}))},onScreenResize(){this.isCarouselVertical=this.checkIsScreenSizeBiggerThan(Me.smallDesktop),this.updateCarouselButtonsBackgroundImage()}},computed:{allImages:{get(){return this.images.length>0?[this.productPreview,...this.images.map(e=>e.link)]:[this.productPreview]}}},watch:{allImages(){this.updateCarouselButtonsBackgroundImage()},pending(){this.updateCarouselButtonsBackgroundImage()}},mounted(){this.onScreenResize(),window.addEventListener("resize",()=>{this.onScreenResize()})}},Lt=["src"];function Tt(e,a,t,n,l,r){const _=ft,f=d("carousel"),u=Pe,v=M;return t.pending?(i(),h(v,{key:1,class:"product-carousel product-carousel-skeleton",animated:""},{template:R(()=>[o(u,{variant:"image",class:"product-image"})]),_:1})):(i(),h(f,{key:0,class:"product-carousel",direction:l.isCarouselVertical?"vertical":"horizontal",ref:"productCarousel"},{default:R(()=>[(i(!0),c(U,null,F(r.allImages,m=>(i(),h(_,{class:"product-carousel-item",key:m},{default:R(()=>[P("img",{src:m,alt:"Product image",class:"product-image"},null,8,Lt)]),_:2},1024))),128))]),_:1},8,["direction"]))}const $t=x(Bt,[["render",Tt],["__scopeId","data-v-67fa5de0"]]);const At={name:"ProductSellerCard",components:{UserAvatar:Ge},props:{name:{required:!0,type:String},avatar:{required:!0,type:String}}},qt={class:"product-seller-card"};function Ft(e,a,t,n,l,r){const _=d("user-avatar");return i(),c("div",qt,[P("div",null,D(t.name),1),P("div",null,[o(_,{src:t.avatar},null,8,["src"])])])}const Ot=x(At,[["render",Ft],["__scopeId","data-v-91f2a880"]]);const Nt={name:"ProductDescription",components:{ExpandableBlock:ye},props:{description:{required:!0,default:String}}};function Wt(e,a,t,n,l,r){const _=d("expandable-block");return i(),h(_,{class:"product-description","max-height":250},{default:R(()=>[B(D(t.description),1)]),_:1})}const jt=x(Nt,[["render",Wt],["__scopeId","data-v-782605cf"]]);const zt={name:"ProductSellerOpenLink",components:{StyledRouterLink:yt},props:{id:{required:!0,type:[String,Number]}},computed:{sellerRoute:{get(){return this.$router.resolve({name:"Search",query:{[Ke.sellers]:this.id}})}}}},Ht={class:"product-seller-link"};function Mt(e,a,t,n,l,r){const _=d("styled-router-link");return i(),c("div",Ht,[o(_,{class:"product-seller-link",to:r.sellerRoute,underline:!1},{default:R(()=>[Xe(e.$slots,"default",{},void 0,!0)]),_:3},8,["to"])])}const Gt=x(zt,[["render",Mt],["__scopeId","data-v-bcdfb3de"]]);const Kt={name:"MainProductData",components:{UnderHeaderTitle:bt,ProductSellerOpenLink:Gt,ProductDescription:jt,ProductSellerCard:Ot,ProductFeedback:pt,BasedText:Ye,AddToCartButton:_t,ProductDiscount:ht,ProductImagesCarousel:$t,ProductPrice:mt},mixins:[Je],props:{product:{required:!0,type:Object,default:()=>{}},pending:{required:!0,type:Boolean}}},Xt={class:"product"},Yt={class:"product-card card"},Jt={class:"product-images"},Zt={class:"product-data"},Qt={class:"product-title-small-container"},ea={class:"product-seller-container"},ta={class:"main-product-data-container"},aa={key:0,class:"main-product-data"},na={class:"product-cost-data"};function ia(e,a,t,n,l,r){const _=d("under-header-title"),f=d("product-images-carousel"),u=d("based-text"),v=Pe,m=M,w=d("product-seller-card"),p=d("product-seller-open-link"),E=d("product-feedback"),L=d("product-discount"),C=d("product-price"),T=d("product-description"),O=d("add-to-cart-button"),N=Ze;return i(),c("div",Xt,[o(_,{text:t.product.title,pending:t.pending},null,8,["text","pending"]),P("div",Yt,[P("div",Jt,[t.product.images||t.product.previewImage||t.pending?(i(),h(f,{key:0,images:t.product.images,pending:t.pending,"product-preview":t.product.previewImage},null,8,["images","pending","product-preview"])):k("",!0)]),P("div",Zt,[P("div",Qt,[t.pending?(i(),h(m,{key:1,class:"product-title-small-skeleton",animated:""},{template:R(()=>[o(v,{variant:"rect"})]),_:1})):(i(),h(u,{key:0,class:"product-title",title:t.product.title},null,8,["title"]))]),P("div",ea,[t.pending?(i(),h(m,{key:1,class:"product-title-skeleton",animated:""},{template:R(()=>[o(v,{variant:"rect"})]),_:1})):(i(),h(p,{key:0,id:t.product.seller.id},{default:R(()=>[o(w,{avatar:t.product.seller.avatar,name:t.product.seller.name},null,8,["avatar","name"])]),_:1},8,["id"]))]),P("div",ta,[o(E,{rating:t.product.rating,"reviews-count":t.product.reviewsCount},null,8,["rating","reviews-count"]),t.pending?(i(),h(m,{key:1,animated:""})):(i(),c("div",aa,[P("div",na,[t.product.discount?(i(),h(L,{key:0,class:"product-discount",discount:t.product.discount},null,8,["discount"])):k("",!0),o(C,{class:"product-price",price:t.product.price,"discounted-price":t.product.priceWithDiscount},null,8,["price","discounted-price"]),t.product.description?(i(),h(T,{key:1,description:t.product.description},null,8,["description"])):k("",!0),t.product.isAvailableForBuying||!this.checkIsLoggedIn()?(i(),h(O,{key:2,"product-slug":t.product.slug},null,8,["product-slug"])):(i(),h(N,{key:3,title:e.$t("product.productUnavailable"),closable:!1,type:"info"},null,8,["title"]))])]))])])])])}const sa=x(Kt,[["render",ia],["__scopeId","data-v-a07127f0"]]);const ra={name:"ProductCategories",components:{CategoryOpenLinkCard:Rt},mixins:[Z],props:{categories:{required:!1,type:Array,default:()=>[]},pending:{required:!0,type:Boolean}},data(){return{extendedCategories:[],categoriesWithLoadedParent:[],categoriesParentsPending:[]}},methods:{async loadCategoryParents(e){this.categoriesWithLoadedParent.includes(e.slug)||this.categoriesParentsPending.includes(e.slug)||(this.categoriesParentsPending.push(e.slug),await this.useErrorsCatch(async()=>{const a=(await $(kt,{slug:e.slug})).data,t=this.extendedCategories.find(n=>n.slug===e.slug);t.parents=a,this.categoriesWithLoadedParent.push(e.slug)}),this.categoriesParentsPending.splice(e.slug))}},watch:{categories(){this.extendedCategories=this.categories}}},oa={key:0,class:"card"},la={class:"categories-title"},da={key:0},ua={class:"product-category"},ca={key:0},va={key:1};function pa(e,a,t,n,l,r){const _=d("category-open-link-card"),f=Qe,u=M;return t.pending||l.extendedCategories.length>0?(i(),c("div",oa,[P("div",la,D(e.$t("general.categories"))+": ",1),t.pending?(i(),c("div",va,[o(u,{animated:""})])):(i(),c("div",da,[(i(!0),c(U,null,F(l.extendedCategories,v=>(i(),c("ul",{key:v.slug,class:"product-group"},[P("li",ua,[o(_,{underline:!0,slug:v.slug},{default:R(()=>[B(D(v.title),1)]),_:2},1032,["slug"]),v.parent&&!l.categoriesWithLoadedParent.includes(v.slug)?(i(),h(f,{key:0,class:"load-parents-button",onClick:m=>r.loadCategoryParents(v),loading:l.categoriesParentsPending.includes(v.slug)},{default:R(()=>[B(D(e.$t("general.expand")),1)]),_:2},1032,["onClick","loading"])):k("",!0)]),v.parent?(i(),c("li",ca,[P("ul",null,[(i(!0),c(U,null,F(v.parents,m=>(i(),c("li",{class:"category-parent",key:m.slug},[o(_,{underline:!0,slug:m.slug},{default:R(()=>[B(D(m.title),1)]),_:2},1032,["slug"])]))),128))])])):k("",!0)]))),128))]))])):k("",!0)}const _a=x(ra,[["render",pa],["__scopeId","data-v-e47e645a"]]);const ma={name:"ReviewCard",mixins:[Q],emits:["deleteReview","editReview"],components:{RepliesBottomActionsPanel:et,ExpandableBlock:ye,ReviewHeader:tt,ReviewFeedback:at,ProductRating:wt},data(){return{replies:[],repliesPending:!1,isReplyButtonVisible:!0,reviewDeletePending:!1,isShowAddReplyButtonForce:!1}},props:{review:{required:!0,type:Object},isShowEditReplyButton:{required:!1,type:Boolean,default:!1}},methods:{API_GET_REVIEW_URL(){return he},API_DELETE_REVIEW_URL(){return nt},async loadReplies(){try{const e=(await $(he,{id:this.review.id})).data;this.replies.push(...e.replies)}catch(e){be(ke(e))}},onRepliesPush(e){this.replies.push(...e)},onRepliesReload(e){this.replies=e}}},wa={class:"review-rating"};function ga(e,a,t,n,l,r){var w,p;const _=d("review-header"),f=d("product-rating"),u=d("review-feedback"),v=d("expandable-block"),m=d("replies-bottom-actions-panel");return i(),c("div",null,[o(v,{"max-height":500},{default:R(()=>{var E,L,C,T;return[o(_,{created_at:t.review.created_at,updated_at:t.review.updated_at,"reviewer-avatar":(L=(E=t.review)==null?void 0:E.reviewer)==null?void 0:L.avatar,"reviewer-name":(T=(C=t.review)==null?void 0:C.reviewer)==null?void 0:T.name,"is-anonymous":t.review.isAnonymous},null,8,["created_at","updated_at","reviewer-avatar","reviewer-name","is-anonymous"]),P("div",wa,[o(f,{rating:t.review.rating},null,8,["rating"])]),o(u,{title:e.$t("general.reviews.advantages"),text:t.review.advantages},null,8,["title","text"]),o(u,{title:e.$t("general.reviews.disadvantages"),text:t.review.disadvantages},null,8,["title","text"]),o(u,{title:e.$t("general.reviews.comments"),text:t.review.comments},null,8,["title","text"])]}),_:1}),o(m,{"reply-id":null,"reviewer-id":((p=(w=t.review)==null?void 0:w.reviewer)==null?void 0:p.id)||null,"review-id":t.review.id,"delete-reply-api-url":r.API_DELETE_REVIEW_URL(),"is-show-edit-reply-button":t.isShowEditReplyButton,"load-replies-api-url":r.API_GET_REVIEW_URL(),replies:l.replies,"object-for-api-manipulation-id":t.review.id,"reply-children-count":t.review.repliesCount,"reply-children-key":"replies",onReviewEditButtonClick:a[0]||(a[0]=E=>e.$emit("editReview")),onDeleteReview:a[1]||(a[1]=E=>e.$emit("deleteReview")),onPushReplies:r.onRepliesPush,onReloadReplies:r.onRepliesReload},null,8,["reviewer-id","review-id","delete-reply-api-url","is-show-edit-reply-button","load-replies-api-url","replies","object-for-api-manipulation-id","reply-children-count","onPushReplies","onReloadReplies"])])}const te=x(ma,[["render",ga],["__scopeId","data-v-26c12236"]]);const fa={name:"LatestReview",emits:["deleteLatestReview"],components:{ProfileTitle:Ee,ReviewCard:te},props:{latestReview:{required:!0,type:Object}}},ha={key:0,class:"card latest-review-container"},Ra={class:"latest-review-title"};function ya(e,a,t,n,l,r){const _=d("profile-title"),f=d("review-card");return Object.keys(t.latestReview).length>0?(i(),c("div",ha,[P("div",Ra,[o(_,{text:e.$t("product.reviews.latestReview")},null,8,["text"])]),o(f,{onDeleteReview:a[0]||(a[0]=u=>this.$emit("deleteLatestReview")),review:t.latestReview},null,8,["review"])])):k("",!0)}const ba=x(fa,[["render",ya],["__scopeId","data-v-742ca203"]]);const ka={name:"ReviewEditForm",components:{FullWidthButton:ee},emits:["update:review","updateReview"],data(){return{validationRules:{rating:{required:!0},advantages:{required:!0},disadvantages:{required:!0},comments:{required:!0}}}},props:{review:{required:!0,type:Object},pending:{required:!0,type:Boolean}},methods:{async onFormSaveButtonClick(){await this.$refs.form.validate(e=>{e&&this.$emit("updateReview",this.formReview)})},updateValue(){this.$emit("update:review",this.formReview)}},computed:{formReview:{get(){return this.review},set(e){this.$emit("update:review",e)}}}},Pa={class:"review-settings-container"};function Ea(e,a,t,n,l,r){const _=Ut,f=it,u=Pt,v=st,m=d("full-width-button"),w=rt;return i(),h(w,{"label-position":"top",rules:l.validationRules,ref:"form",model:r.formReview},{default:R(()=>[P("div",Pa,[o(f,{label:e.$t("general.rating"),prop:"rating"},{default:R(()=>[o(_,{modelValue:r.formReview.rating,"onUpdate:modelValue":[a[0]||(a[0]=p=>r.formReview.rating=p),this.updateValue],clearable:"",colors:["var(--el-color-danger)","var(--el-color-warning)","var(--el-color-success)"]},null,8,["modelValue","onUpdate:modelValue","colors"])]),_:1},8,["label"]),o(f,{label:e.$t("general.reviews.anonymousReview")+"?",prop:"isAnonymous"},{default:R(()=>[o(u,{modelValue:r.formReview.isAnonymous,"onUpdate:modelValue":[a[1]||(a[1]=p=>r.formReview.isAnonymous=p),this.updateValue]},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["label"])]),o(f,{label:e.$t("general.reviews.advantages"),prop:"advantages"},{default:R(()=>[o(v,{modelValue:r.formReview.advantages,"onUpdate:modelValue":[a[2]||(a[2]=p=>r.formReview.advantages=p),this.updateValue],autosize:{minRows:3},type:"textarea",placeholder:e.$t("general.reviews.advantages")},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:1},8,["label"]),o(f,{label:e.$t("general.reviews.disadvantages"),prop:"disadvantages"},{default:R(()=>[o(v,{modelValue:r.formReview.disadvantages,"onUpdate:modelValue":[a[3]||(a[3]=p=>r.formReview.disadvantages=p),this.updateValue],autosize:{minRows:3},type:"textarea",placeholder:e.$t("general.reviews.disadvantages")},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:1},8,["label"]),o(f,{label:e.$t("general.reviews.comments"),prop:"comments"},{default:R(()=>[o(v,{modelValue:r.formReview.comments,"onUpdate:modelValue":[a[4]||(a[4]=p=>r.formReview.comments=p),this.updateValue],autosize:{minRows:3},type:"textarea",placeholder:e.$t("general.reviews.comments")},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:1},8,["label"]),o(m,{pending:t.pending,onClick:a[5]||(a[5]=p=>r.onFormSaveButtonClick())},{default:R(()=>[B(D(e.$t("general.save")),1)]),_:1},8,["pending"])]),_:1},8,["rules","model"])}const Ca=x(ka,[["render",Ea],["__scopeId","data-v-a4fef19f"]]),Va={name:"UserReview",mixins:[Q,Z],emits:["deleteReview","createReview","updateReview"],components:{ReviewEditForm:Ca,FullWidthButton:ee,ProfileTitle:Ee,ReviewCard:te},data(){return{isReviewEditFormVisible:!1,editedReview:{},pending:!1,productSlug:""}},props:{userReview:{required:!1,type:[null,Object],default:null},canCreateReview:{required:!0,type:Boolean}},methods:{showReviewEditForm(){this.isReviewEditFormVisible=!0},async onReviewFormSubmit(e){await this.useErrorsCatch(async()=>{const a=(await(this.isUserReviewExists?this.updateReview(e):this.createReview(e))).data;this.$emit("createReview",a),this.isReviewEditFormVisible=!1})},async updateReview(e){return await $(ot,{id:e.id},e)},async createReview(e){return e.isAnonymous??(e.isAnonymous=!1),await $(lt,{slug:this.productSlug},e)}},computed:{isUserReviewExists(){return this.userReview&&Object.keys(this.userReview).length>0},reviewForm:{get(){return{...this.userReview||{},...this.editedReview}},set(e){this.editedReview=e}}},mounted(){this.productSlug=this.$route.params.slug}},Ia={key:0,class:"card"};function xa(e,a,t,n,l,r){const _=d("profile-title"),f=d("review-card"),u=d("full-width-button"),v=d("review-edit-form");return r.isUserReviewExists||t.canCreateReview?(i(),c("div",Ia,[o(_,{text:e.$t("product.reviews.yourReview")},null,8,["text"]),l.isReviewEditFormVisible?(i(),h(v,{key:1,onUpdateReview:a[3]||(a[3]=m=>e.usePending(r.onReviewFormSubmit,"pending",m)),review:r.reviewForm,"onUpdate:review":a[4]||(a[4]=m=>r.reviewForm=m),pending:l.pending},null,8,["review","pending"])):(i(),c(U,{key:0},[r.isUserReviewExists?(i(),h(f,{key:0,onEditReview:a[0]||(a[0]=m=>r.showReviewEditForm()),onDeleteReview:a[1]||(a[1]=m=>e.$emit("deleteReview")),"is-show-edit-reply-button":!0,review:t.userReview},null,8,["review"])):k("",!0),r.isUserReviewExists?k("",!0):(i(),h(u,{key:1,onClick:a[2]||(a[2]=m=>r.showReviewEditForm())},{default:R(()=>[B(D(e.$t("product.reviews.leaveReview")),1)]),_:1}))],64))])):k("",!0)}const Sa=x(Va,[["render",xa]]);const Da={name:"ProductReviews",emits:["deleteReview","deleteLatestReview","loadReviews","deleteUserReview","createUserReview"],components:{UserReview:Sa,LatestReview:ba,FullWidthButton:ee,ReviewCard:te},props:{reviews:{required:!1,type:Array},latestReview:{required:!1,type:Object},pending:{required:!0,type:Boolean},userReview:{required:!1,type:[null,Object],default:null},reviewsCount:{required:!1,type:Number},reviewsPending:{required:!0,type:Boolean},canLeaveReview:{required:!1,type:Boolean,default:!1},reviewsPagination:{required:!1,type:Object}}},Ua={key:1,class:"main-reviews-card card"},Ba={key:0},La={key:0},Ta={key:1},$a={key:1};function Aa(e,a,t,n,l,r){const _=d("user-review"),f=d("latest-review"),u=d("review-card"),v=dt,m=d("full-width-button"),w=M;return i(),c(U,null,[t.pending?k("",!0):(i(),c(U,{key:0},[o(_,{onDeleteReview:a[0]||(a[0]=p=>e.$emit("deleteUserReview")),onCreateReview:a[1]||(a[1]=p=>e.$emit("createUserReview",p)),"can-create-review":t.canLeaveReview,"user-review":t.userReview},null,8,["can-create-review","user-review"]),o(f,{class:"latest-review-container",onDeleteLatestReview:a[2]||(a[2]=p=>e.$emit("deleteLatestReview")),"latest-review":t.latestReview||{}},null,8,["latest-review"])],64)),t.pending||t.reviews.length>0||t.reviewsCount>0?(i(),c("div",Ua,[t.pending?(i(),c("div",$a,[o(w,{animated:""})])):(i(),c("div",Ba,[t.reviews.length>0?(i(),c("div",La,[(i(!0),c(U,null,F(t.reviews,p=>(i(),c("div",{key:p.id},[o(u,{onDeleteReview:E=>this.$emit("deleteReview",p),review:p},null,8,["onDeleteReview","review"]),o(v)]))),128))])):k("",!0),t.reviewsCount>1&&(t.reviews.length<1||t.reviewsPagination.next_cursor!==null)?(i(),c("div",Ta,[o(m,{onClick:a[3]||(a[3]=p=>e.$emit("loadReviews")),pending:t.reviewsPending},{default:R(()=>[B(D(e.$t("product.reviews.allReviews")),1)]),_:1},8,["pending"])])):k("",!0)]))])):k("",!0)],64)}const qa=x(Da,[["render",Aa],["__scopeId","data-v-ae598b43"]]);const Fa={name:"Product",mixins:[Q,Z,ut],components:{ProductReviews:qa,ProductCategories:_a,MainProductData:sa},data(){return{product:{},reviews:[],reviewsPagination:{},productPending:!0,productReviewsPending:!1}},methods:{async getProduct(e){return await this.useErrorsCatch(async()=>{const t=(await $(vt,{slug:e})).data;return this.updateDocumentTitle("titles.product",{product:t.metaTitle}),t},a=>{var t;[403,404].includes((t=a==null?void 0:a.response)==null?void 0:t.status)&&this.$router.push({name:"Home"})})},async loadReviews(){var e;try{const a=(await $(ct,{slug:this.product.slug},{params:{cursor:(e=this.reviewsPagination)==null?void 0:e.next_cursor}})).data;this.reviews.push(...a.data),this.reviewsPagination=a.meta}catch(a){be(ke(a)),console.error(a)}},onReviewDelete(e){this.reviews=this.reviews.filter(a=>a.id!==e.id)}},async mounted(){var e,a;this.product=await this.getProduct((a=(e=this.$route)==null?void 0:e.params)==null?void 0:a.slug),this.productPending=!1}};function Oa(e,a,t,n,l,r){const _=d("main-product-data"),f=d("product-categories"),u=d("product-reviews");return i(),c(U,null,[o(_,{class:"main-product-data",product:l.product,pending:l.productPending},null,8,["product","pending"]),o(f,{class:"product-categories",pending:l.productPending,categories:l.product.categories},null,8,["pending","categories"]),o(u,{pending:l.productPending,"latest-review":l.product.latestReview,"reviews-pending":l.productReviewsPending,reviews:l.reviews,"reviews-pagination":l.reviewsPagination,"reviews-count":l.product.reviewsCount,"can-leave-review":l.product.canLeaveReview,"user-review":l.product.userReview,onDeleteUserReview:a[0]||(a[0]=v=>delete l.product.userReview),onCreateUserReview:a[1]||(a[1]=v=>l.product.userReview=v),onLoadReviews:a[2]||(a[2]=v=>e.usePending(r.loadReviews,"productReviewsPending")),onDeleteReview:r.onReviewDelete,onDeleteLatestReview:a[3]||(a[3]=v=>delete l.product.latestReview)},null,8,["pending","latest-review","reviews-pending","reviews","reviews-pagination","reviews-count","can-leave-review","user-review","onDeleteReview"])],64)}const rn=x(Fa,[["render",Oa],["__scopeId","data-v-611b2ee5"]]);export{rn as default};
