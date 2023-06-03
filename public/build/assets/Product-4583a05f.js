import{_ as h,s as j,ac as z,r as n,o as r,c as m,w as p,a as d,F as P,b as x,d as g,e as s,U as N,t as y,ad as A,q as E,p as G,h as H,B as M,L as K,f as R,u as L,g as C,v as B,ae as Y,af as J,ag as Q,ah as D,ai as X,l as $,m as F,k as S,aj as Z,ak as ee,a9 as te,al as ie}from"./app-a341633d.js";import{j as ne}from"./products-7ae8b1be.js";import{P as re,A as se,a as oe,b as ae}from"./ProductPrice-2706239b.js";import{C as le,P as de,a as ue}from"./CategoryOpenLinkCard-06ca59ac.js";import{S as ce}from"./StyledRouterLink-43c7e266.js";import{U as _e}from"./UnderHeaderTitle-e8e1bf90.js";import{b as ve}from"./categories-df12348f.js";import{P as T}from"./ProfileTitle-f62bd153.js";import"./price-38bf80ae.js";import"./ViewTitle-4a1f20fc.js";const pe={name:"ProductImagesCarousel",components:{Carousel:le},mixins:[j],data(){return{isCarouselVertical:!0}},props:{images:{required:!1,type:Array,default:()=>[]},productPreview:{required:!1,type:[String,void 0]},pending:{required:!1,type:Boolean,default:!1}},methods:{updateCarouselButtonsBackgroundImage(){this.pending||this.$nextTick(()=>this.$refs.productCarousel.$el.querySelectorAll(".el-carousel__button").forEach((e,i)=>{this.isCarouselVertical?(e.style.backgroundColor="transparent",e.style.backgroundImage=`url(${this.allImages[i]})`):(e.style.backgroundColor="var(--el-color-white)",e.style.backgroundImage=null)}))},onScreenResize(){this.isCarouselVertical=this.checkIsScreenSizeBiggerThan(z.smallDesktop),this.updateCarouselButtonsBackgroundImage()}},computed:{allImages:{get(){return this.images.length>0?[this.productPreview,...this.images.map(e=>e.link)]:[this.productPreview]}}},watch:{allImages(){this.updateCarouselButtonsBackgroundImage()},pending(){this.updateCarouselButtonsBackgroundImage()}},mounted(){this.onScreenResize(),window.addEventListener("resize",()=>{this.onScreenResize()})}},me=["src"];function we(e,i,t,f,a,o){const u=n("el-carousel-item"),v=n("carousel"),w=n("el-skeleton-item"),l=n("el-skeleton");return t.pending?(r(),m(l,{key:1,class:"product-carousel product-carousel-skeleton",animated:""},{template:p(()=>[s(w,{variant:"image",class:"product-image"})]),_:1})):(r(),m(v,{key:0,class:"product-carousel",direction:a.isCarouselVertical?"vertical":"horizontal",ref:"productCarousel"},{default:p(()=>[(r(!0),d(P,null,x(o.allImages,c=>(r(),m(u,{class:"product-carousel-item",key:c},{default:p(()=>[g("img",{src:c,alt:"Product image",class:"product-image"},null,8,me)]),_:2},1024))),128))]),_:1},8,["direction"]))}const ge=h(pe,[["render",we],["__scopeId","data-v-67fa5de0"]]);const Re={name:"ProductSellerCard",components:{UserAvatar:N},props:{name:{required:!0,type:String},avatar:{required:!0,type:String}}},fe={class:"product-seller-card"};function he(e,i,t,f,a,o){const u=n("user-avatar");return r(),d("div",fe,[g("div",null,y(t.name),1),g("div",null,[s(u,{src:t.avatar},null,8,["src"])])])}const ye=h(Re,[["render",he],["__scopeId","data-v-91f2a880"]]);const ke={name:"ProductDescription",components:{ExpandableBlock:A},props:{description:{required:!0,default:String}}};function Pe(e,i,t,f,a,o){const u=n("expandable-block");return r(),m(u,{class:"product-description","max-height":250},{default:p(()=>[E(y(t.description),1)]),_:1})}const be=h(ke,[["render",Pe],["__scopeId","data-v-782605cf"]]);const Ee={name:"ProductSellerOpenLink",components:{StyledRouterLink:ce},props:{id:{required:!0,type:[String,Number]}},computed:{sellerRoute:{get(){return this.$router.resolve({name:"Search",query:{[G.sellers]:this.id}})}}}},Ce={class:"product-seller-link"};function Ie(e,i,t,f,a,o){const u=n("styled-router-link");return r(),d("div",Ce,[s(u,{class:"product-seller-link",to:o.sellerRoute,underline:!1},{default:p(()=>[H(e.$slots,"default",{},void 0,!0)]),_:3},8,["to"])])}const Ve=h(Ee,[["render",Ie],["__scopeId","data-v-bcdfb3de"]]);const Ue={name:"MainProductData",components:{UnderHeaderTitle:_e,ProductSellerOpenLink:Ve,ProductDescription:be,ProductSellerCard:ye,ProductFeedback:re,BasedText:M,AddToCartButton:se,ProductDiscount:de,ProductImagesCarousel:ge,ProductPrice:oe},mixins:[K],props:{product:{required:!0,type:Object,default:()=>{}},pending:{required:!0,type:Boolean}}},xe={class:"product"},Le={class:"product-card card"},Be={class:"product-images"},Se={class:"product-data"},qe={class:"product-title-small-container"},De={class:"product-seller-container"},Ae={class:"main-product-data-container"},$e={key:0,class:"main-product-data"},Fe={class:"product-cost-data"};function Te(e,i,t,f,a,o){const u=n("under-header-title"),v=n("product-images-carousel"),w=n("based-text"),l=n("el-skeleton-item"),c=n("el-skeleton"),k=n("product-seller-card"),_=n("product-seller-open-link"),b=n("product-feedback"),I=n("product-discount"),V=n("product-price"),U=n("product-description"),O=n("add-to-cart-button"),W=n("el-alert");return r(),d("div",xe,[s(u,{text:t.product.title,pending:t.pending},null,8,["text","pending"]),g("div",Le,[g("div",Be,[t.product.images||t.product.previewImage||t.pending?(r(),m(v,{key:0,images:t.product.images,pending:t.pending,"product-preview":t.product.previewImage},null,8,["images","pending","product-preview"])):R("",!0)]),g("div",Se,[g("div",qe,[t.pending?(r(),m(c,{key:1,class:"product-title-small-skeleton",animated:""},{template:p(()=>[s(l,{variant:"rect"})]),_:1})):(r(),m(w,{key:0,class:"product-title",title:t.product.title},null,8,["title"]))]),g("div",De,[t.pending?(r(),m(c,{key:1,class:"product-title-skeleton",animated:""},{template:p(()=>[s(l,{variant:"rect"})]),_:1})):(r(),m(_,{key:0,id:t.product.seller.id},{default:p(()=>[s(k,{avatar:t.product.seller.avatar,name:t.product.seller.name},null,8,["avatar","name"])]),_:1},8,["id"]))]),g("div",Ae,[s(b,{rating:t.product.rating,"reviews-count":t.product.reviewsCount},null,8,["rating","reviews-count"]),t.pending?(r(),m(c,{key:1,animated:""})):(r(),d("div",$e,[g("div",Fe,[t.product.discount?(r(),m(I,{key:0,class:"product-discount",discount:t.product.discount},null,8,["discount"])):R("",!0),s(V,{class:"product-price",price:t.product.price,"discounted-price":t.product.priceWithDiscount},null,8,["price","discounted-price"]),t.product.description?(r(),m(U,{key:1,description:t.product.description},null,8,["description"])):R("",!0),t.product.isAvailableForBuying||!this.checkIsLoggedIn()?(r(),m(O,{key:2,"product-slug":t.product.slug},null,8,["product-slug"])):(r(),m(W,{key:3,title:e.$t("product.productUnavailable"),closable:!1,type:"info"},null,8,["title"]))])]))])])])])}const Oe=h(Ue,[["render",Te],["__scopeId","data-v-a07127f0"]]);const We={name:"ProductCategories",components:{CategoryOpenLinkCard:ue},mixins:[L],props:{categories:{required:!1,type:Array,default:()=>[]},pending:{required:!0,type:Boolean}},data(){return{extendedCategories:[],categoriesWithLoadedParent:[],categoriesParentsPending:[]}},methods:{async loadCategoryParents(e){this.categoriesWithLoadedParent.includes(e.slug)||this.categoriesParentsPending.includes(e.slug)||(this.categoriesParentsPending.push(e.slug),await this.useErrorsCatch(async()=>{const i=(await C(ve,{slug:e.slug})).data,t=this.extendedCategories.find(f=>f.slug===e.slug);t.parents=i,this.categoriesWithLoadedParent.push(e.slug)}),this.categoriesParentsPending.splice(e.slug))}},watch:{categories(){this.extendedCategories=this.categories}}},je={key:0,class:"card"},ze={class:"categories-title"},Ne={key:0},Ge={class:"product-category"},He={key:0},Me={key:1};function Ke(e,i,t,f,a,o){const u=n("category-open-link-card"),v=n("el-button"),w=n("el-skeleton");return t.pending||a.extendedCategories.length>0?(r(),d("div",je,[g("div",ze,y(e.$t("general.categories"))+": ",1),t.pending?(r(),d("div",Me,[s(w,{animated:""})])):(r(),d("div",Ne,[(r(!0),d(P,null,x(a.extendedCategories,l=>(r(),d("ul",{key:l.slug,class:"product-group"},[g("li",Ge,[s(u,{underline:!0,slug:l.slug},{default:p(()=>[E(y(l.title),1)]),_:2},1032,["slug"]),l.parent&&!a.categoriesWithLoadedParent.includes(l.slug)?(r(),m(v,{key:0,class:"load-parents-button",onClick:c=>o.loadCategoryParents(l),loading:a.categoriesParentsPending.includes(l.slug)},{default:p(()=>[E(y(e.$t("general.expand")),1)]),_:2},1032,["onClick","loading"])):R("",!0)]),l.parent?(r(),d("li",He,[g("ul",null,[(r(!0),d(P,null,x(l.parents,c=>(r(),d("li",{class:"category-parent",key:c.slug},[s(u,{underline:!0,slug:c.slug},{default:p(()=>[E(y(c.title),1)]),_:2},1032,["slug"])]))),128))])])):R("",!0)]))),128))]))])):R("",!0)}const Ye=h(We,[["render",Ke],["__scopeId","data-v-e47e645a"]]);const Je={name:"ReviewCard",mixins:[B],emits:["deleteReview","editReview"],components:{RepliesBottomActionsPanel:Y,ExpandableBlock:A,ReviewHeader:J,ReviewFeedback:Q,ProductRating:ae},data(){return{replies:[],repliesPending:!1,isReplyButtonVisible:!0,reviewDeletePending:!1,isShowAddReplyButtonForce:!1}},props:{review:{required:!0,type:Object},isShowEditReplyButton:{required:!1,type:Boolean,default:!1}},methods:{API_GET_REVIEW_URL(){return D},API_DELETE_REVIEW_URL(){return X},async loadReplies(){try{const e=(await C(D,{id:this.review.id})).data;this.replies.push(...e.replies)}catch(e){$(F(e))}},onRepliesPush(e){this.replies.push(...e)},onRepliesReload(e){this.replies=e}}},Qe={class:"review-rating"};function Xe(e,i,t,f,a,o){var k,_;const u=n("review-header"),v=n("product-rating"),w=n("review-feedback"),l=n("expandable-block"),c=n("replies-bottom-actions-panel");return r(),d("div",null,[s(l,{"max-height":500},{default:p(()=>{var b,I,V,U;return[s(u,{created_at:t.review.created_at,updated_at:t.review.updated_at,"reviewer-avatar":(I=(b=t.review)==null?void 0:b.reviewer)==null?void 0:I.avatar,"reviewer-name":(U=(V=t.review)==null?void 0:V.reviewer)==null?void 0:U.name,"is-anonymous":t.review.isAnonymous},null,8,["created_at","updated_at","reviewer-avatar","reviewer-name","is-anonymous"]),g("div",Qe,[s(v,{rating:t.review.rating},null,8,["rating"])]),s(w,{title:e.$t("general.reviews.advantages"),text:t.review.advantages},null,8,["title","text"]),s(w,{title:e.$t("general.reviews.disadvantages"),text:t.review.disadvantages},null,8,["title","text"]),s(w,{title:e.$t("general.reviews.comments"),text:t.review.comments},null,8,["title","text"])]}),_:1}),s(c,{"reply-id":null,"reviewer-id":((_=(k=t.review)==null?void 0:k.reviewer)==null?void 0:_.id)||null,"review-id":t.review.id,"delete-reply-api-url":o.API_DELETE_REVIEW_URL(),"is-show-edit-reply-button":t.isShowEditReplyButton,"load-replies-api-url":o.API_GET_REVIEW_URL(),replies:a.replies,"object-for-api-manipulation-id":t.review.id,"reply-children-count":t.review.repliesCount,"reply-children-key":"replies",onReviewEditButtonClick:i[0]||(i[0]=b=>e.$emit("editReview")),onDeleteReview:i[1]||(i[1]=b=>e.$emit("deleteReview")),onPushReplies:o.onRepliesPush,onReloadReplies:o.onRepliesReload},null,8,["reviewer-id","review-id","delete-reply-api-url","is-show-edit-reply-button","load-replies-api-url","replies","object-for-api-manipulation-id","reply-children-count","onPushReplies","onReloadReplies"])])}const q=h(Je,[["render",Xe],["__scopeId","data-v-26c12236"]]);const Ze={name:"LatestReview",emits:["deleteLatestReview"],components:{ProfileTitle:T,ReviewCard:q},props:{latestReview:{required:!0,type:Object}}},et={key:0,class:"card latest-review-container"},tt={class:"latest-review-title"};function it(e,i,t,f,a,o){const u=n("profile-title"),v=n("review-card");return Object.keys(t.latestReview).length>0?(r(),d("div",et,[g("div",tt,[s(u,{text:e.$t("product.reviews.latestReview")},null,8,["text"])]),s(v,{onDeleteReview:i[0]||(i[0]=w=>this.$emit("deleteLatestReview")),review:t.latestReview},null,8,["review"])])):R("",!0)}const nt=h(Ze,[["render",it],["__scopeId","data-v-742ca203"]]);const rt={name:"ReviewEditForm",components:{FullWidthButton:S},emits:["update:review","updateReview"],data(){return{validationRules:{rating:{required:!0},advantages:{required:!0},disadvantages:{required:!0},comments:{required:!0}}}},props:{review:{required:!0,type:Object},pending:{required:!0,type:Boolean}},methods:{async onFormSaveButtonClick(){await this.$refs.form.validate(e=>{e&&this.$emit("updateReview",this.formReview)})},updateValue(){this.$emit("update:review",this.formReview)}},computed:{formReview:{get(){return this.review},set(e){this.$emit("update:review",e)}}}},st={class:"review-settings-container"};function ot(e,i,t,f,a,o){const u=n("el-rate"),v=n("el-form-item"),w=n("el-switch"),l=n("el-input"),c=n("full-width-button"),k=n("el-form");return r(),m(k,{"label-position":"top",rules:a.validationRules,ref:"form",model:o.formReview},{default:p(()=>[g("div",st,[s(v,{label:e.$t("general.rating"),prop:"rating"},{default:p(()=>[s(u,{modelValue:o.formReview.rating,"onUpdate:modelValue":[i[0]||(i[0]=_=>o.formReview.rating=_),this.updateValue],clearable:"",colors:["var(--el-color-danger)","var(--el-color-warning)","var(--el-color-success)"]},null,8,["modelValue","onUpdate:modelValue","colors"])]),_:1},8,["label"]),s(v,{label:e.$t("general.reviews.anonymousReview")+"?",prop:"isAnonymous"},{default:p(()=>[s(w,{modelValue:o.formReview.isAnonymous,"onUpdate:modelValue":[i[1]||(i[1]=_=>o.formReview.isAnonymous=_),this.updateValue]},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["label"])]),s(v,{label:e.$t("general.reviews.advantages"),prop:"advantages"},{default:p(()=>[s(l,{modelValue:o.formReview.advantages,"onUpdate:modelValue":[i[2]||(i[2]=_=>o.formReview.advantages=_),this.updateValue],autosize:{minRows:3},type:"textarea",placeholder:e.$t("general.reviews.advantages")},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:1},8,["label"]),s(v,{label:e.$t("general.reviews.disadvantages"),prop:"disadvantages"},{default:p(()=>[s(l,{modelValue:o.formReview.disadvantages,"onUpdate:modelValue":[i[3]||(i[3]=_=>o.formReview.disadvantages=_),this.updateValue],autosize:{minRows:3},type:"textarea",placeholder:e.$t("general.reviews.disadvantages")},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:1},8,["label"]),s(v,{label:e.$t("general.reviews.comments"),prop:"comments"},{default:p(()=>[s(l,{modelValue:o.formReview.comments,"onUpdate:modelValue":[i[4]||(i[4]=_=>o.formReview.comments=_),this.updateValue],autosize:{minRows:3},type:"textarea",placeholder:e.$t("general.reviews.comments")},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:1},8,["label"]),s(c,{pending:t.pending,onClick:i[5]||(i[5]=_=>o.onFormSaveButtonClick())},{default:p(()=>[E(y(e.$t("general.save")),1)]),_:1},8,["pending"])]),_:1},8,["rules","model"])}const at=h(rt,[["render",ot],["__scopeId","data-v-a4fef19f"]]),lt={name:"UserReview",mixins:[B,L],emits:["deleteReview","createReview","updateReview"],components:{ReviewEditForm:at,FullWidthButton:S,ProfileTitle:T,ReviewCard:q},data(){return{isReviewEditFormVisible:!1,editedReview:{},pending:!1,productSlug:""}},props:{userReview:{required:!1,type:[null,Object],default:null},canCreateReview:{required:!0,type:Boolean}},methods:{showReviewEditForm(){this.isReviewEditFormVisible=!0},async onReviewFormSubmit(e){await this.useErrorsCatch(async()=>{const i=(await(this.isUserReviewExists?this.updateReview(e):this.createReview(e))).data;this.$emit("createReview",i),this.isReviewEditFormVisible=!1})},async updateReview(e){return await C(Z,{id:e.id},e)},async createReview(e){return e.isAnonymous??(e.isAnonymous=!1),await C(ee,{slug:this.productSlug},e)}},computed:{isUserReviewExists(){return this.userReview&&Object.keys(this.userReview).length>0},reviewForm:{get(){return{...this.userReview||{},...this.editedReview}},set(e){this.editedReview=e}}},mounted(){this.productSlug=this.$route.params.slug}},dt={key:0,class:"card"};function ut(e,i,t,f,a,o){const u=n("profile-title"),v=n("review-card"),w=n("full-width-button"),l=n("review-edit-form");return o.isUserReviewExists||t.canCreateReview?(r(),d("div",dt,[s(u,{text:e.$t("product.reviews.yourReview")},null,8,["text"]),a.isReviewEditFormVisible?(r(),m(l,{key:1,onUpdateReview:i[3]||(i[3]=c=>e.usePending(o.onReviewFormSubmit,"pending",c)),review:o.reviewForm,"onUpdate:review":i[4]||(i[4]=c=>o.reviewForm=c),pending:a.pending},null,8,["review","pending"])):(r(),d(P,{key:0},[o.isUserReviewExists?(r(),m(v,{key:0,onEditReview:i[0]||(i[0]=c=>o.showReviewEditForm()),onDeleteReview:i[1]||(i[1]=c=>e.$emit("deleteReview")),"is-show-edit-reply-button":!0,review:t.userReview},null,8,["review"])):R("",!0),o.isUserReviewExists?R("",!0):(r(),m(w,{key:1,onClick:i[2]||(i[2]=c=>o.showReviewEditForm())},{default:p(()=>[E(y(e.$t("product.reviews.leaveReview")),1)]),_:1}))],64))])):R("",!0)}const ct=h(lt,[["render",ut]]);const _t={name:"ProductReviews",emits:["deleteReview","deleteLatestReview","loadReviews","deleteUserReview","createUserReview"],components:{UserReview:ct,LatestReview:nt,FullWidthButton:S,ReviewCard:q},props:{reviews:{required:!1,type:Array},latestReview:{required:!1,type:Object},pending:{required:!0,type:Boolean},userReview:{required:!1,type:[null,Object],default:null},reviewsCount:{required:!1,type:Number},reviewsPending:{required:!0,type:Boolean},canLeaveReview:{required:!1,type:Boolean,default:!1},reviewsPagination:{required:!1,type:Object}}},vt={key:1,class:"main-reviews-card card"},pt={key:0},mt={key:0},wt={key:1},gt={key:1};function Rt(e,i,t,f,a,o){const u=n("user-review"),v=n("latest-review"),w=n("review-card"),l=n("el-divider"),c=n("full-width-button"),k=n("el-skeleton");return r(),d(P,null,[t.pending?R("",!0):(r(),d(P,{key:0},[s(u,{onDeleteReview:i[0]||(i[0]=_=>e.$emit("deleteUserReview")),onCreateReview:i[1]||(i[1]=_=>e.$emit("createUserReview",_)),"can-create-review":t.canLeaveReview,"user-review":t.userReview},null,8,["can-create-review","user-review"]),s(v,{class:"latest-review-container",onDeleteLatestReview:i[2]||(i[2]=_=>e.$emit("deleteLatestReview")),"latest-review":t.latestReview||{}},null,8,["latest-review"])],64)),t.pending||t.reviews.length>0||t.reviewsCount>0?(r(),d("div",vt,[t.pending?(r(),d("div",gt,[s(k,{animated:""})])):(r(),d("div",pt,[t.reviews.length>0?(r(),d("div",mt,[(r(!0),d(P,null,x(t.reviews,_=>(r(),d("div",{key:_.id},[s(w,{onDeleteReview:b=>this.$emit("deleteReview",_),review:_},null,8,["onDeleteReview","review"]),s(l)]))),128))])):R("",!0),t.reviewsCount>1&&(t.reviews.length<1||t.reviewsPagination.next_cursor!==null)?(r(),d("div",wt,[s(c,{onClick:i[3]||(i[3]=_=>e.$emit("loadReviews")),pending:t.reviewsPending},{default:p(()=>[E(y(e.$t("product.reviews.allReviews")),1)]),_:1},8,["pending"])])):R("",!0)]))])):R("",!0)],64)}const ft=h(_t,[["render",Rt],["__scopeId","data-v-ae598b43"]]);const ht={name:"Product",mixins:[B,L,te],components:{ProductReviews:ft,ProductCategories:Ye,MainProductData:Oe},data(){return{product:{},reviews:[],reviewsPagination:{},productPending:!0,productReviewsPending:!1}},methods:{async getProduct(e){return await this.useErrorsCatch(async()=>{const t=(await C(ne,{slug:e})).data;return this.updateDocumentTitle("titles.product",{product:t.metaTitle}),t},i=>{var t;[403,404].includes((t=i==null?void 0:i.response)==null?void 0:t.status)&&this.$router.push({name:"Home"})})},async loadReviews(){var e;try{const i=(await C(ie,{slug:this.product.slug},{params:{cursor:(e=this.reviewsPagination)==null?void 0:e.next_cursor}})).data;this.reviews.push(...i.data),this.reviewsPagination=i.meta}catch(i){$(F(i)),console.error(i)}},onReviewDelete(e){this.reviews=this.reviews.filter(i=>i.id!==e.id)}},async mounted(){var e,i;this.product=await this.getProduct((i=(e=this.$route)==null?void 0:e.params)==null?void 0:i.slug),this.productPending=!1}};function yt(e,i,t,f,a,o){const u=n("main-product-data"),v=n("product-categories"),w=n("product-reviews");return r(),d(P,null,[s(u,{class:"main-product-data",product:a.product,pending:a.productPending},null,8,["product","pending"]),s(v,{class:"product-categories",pending:a.productPending,categories:a.product.categories},null,8,["pending","categories"]),s(w,{pending:a.productPending,"latest-review":a.product.latestReview,"reviews-pending":a.productReviewsPending,reviews:a.reviews,"reviews-pagination":a.reviewsPagination,"reviews-count":a.product.reviewsCount,"can-leave-review":a.product.canLeaveReview,"user-review":a.product.userReview,onDeleteUserReview:i[0]||(i[0]=l=>delete a.product.userReview),onCreateUserReview:i[1]||(i[1]=l=>a.product.userReview=l),onLoadReviews:i[2]||(i[2]=l=>e.usePending(o.loadReviews,"productReviewsPending")),onDeleteReview:o.onReviewDelete,onDeleteLatestReview:i[3]||(i[3]=l=>delete a.product.latestReview)},null,8,["pending","latest-review","reviews-pending","reviews","reviews-pagination","reviews-count","can-leave-review","user-review","onDeleteReview"])],64)}const Bt=h(ht,[["render",yt],["__scopeId","data-v-611b2ee5"]]);export{Bt as default};
