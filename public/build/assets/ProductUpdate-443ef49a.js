import{P as b}from"./ProductUpdateForm-06417b8c.js";import{_ as f,a6 as y,bq as w,a0 as v,g as m,a2 as P,o as i,a as l,e as o,w as h,a4 as U,t as I,r as a,i as k,d as g,F as T,b as x,c as E,f as A,aa as R,u as B,bF as L,a7 as q}from"./app-a44995be.js";import{f as F,g as $,h as O,i as H,j as G}from"./products-642553d7.js";import{P as N}from"./ProductCategoriesSelect-8f03a03c.js";import{E as V}from"./ProductDeleteButton-46b39347.js";import{I as j}from"./ItemImage-7e28fc3d.js";import"./el-form-item-4ed993c7.js";import"./el-popper-c3f23f9e.js";import"./el-switch-b953123d.js";import"./validator-ae9f5db2.js";import"./el-input-number-3e92875f.js";import"./el-tag-93898b7a.js";import"./el-select-v2-a905b73b.js";import"./strings-d8cf358b.js";import"./isEqual-e6c06f96.js";import"./debounce-573356e3.js";import"./categories-bca6ba28.js";const M={name:"ProductCategoriesUpdateCard",mixins:[y],emits:["updateCategories"],components:{ErrorsAlert:w,FullWidthButton:v,ProductCategoriesSelect:N},data(){return{updateCategoriesPending:!1,selectedCategories:[],errors:[]}},props:{categories:{required:!0,type:Array},externalPending:{required:!1,type:Boolean,default:!1},productSlug:{required:!0,type:String}},methods:{async updateCategories(){this.errors={};try{await m(F,{slug:this.productSlug},{categories:this.selectedCategories}),this.$emit("updateCategories")}catch(e){this.errors=P(e)}}},computed:{pending(){return this.externalPending||this.updateCategoriesPending}},watch:{categories(){this.selectedCategories=this.categories.map(e=>e.slug)}}};function W(e,t,_,C,r,s){const d=a("errors-alert"),c=a("product-categories-select"),p=a("full-width-button");return i(),l("div",null,[o(d,{errors:r.errors},null,8,["errors"]),o(c,{"selected-categories":r.selectedCategories,"onUpdate:selectedCategories":t[0]||(t[0]=n=>r.selectedCategories=n),pending:s.pending,class:"product-categories-select"},null,8,["selected-categories","pending"]),o(p,{class:"categories-save-button",pending:s.pending,onClick:t[1]||(t[1]=n=>e.usePending(s.updateCategories,"updateCategoriesPending"))},{default:h(()=>[U(I(e.$t("general.save")),1)]),_:1},8,["pending"])])}const z=f(M,[["render",W],["__scopeId","data-v-35a8ec82"]]);const J={name:"ProductImagesUpdateCard",emits:["imagesUpdate"],components:{FontAwesomeIcon:k,ErrorsAlert:w,FullWidthButton:v,ItemImage:j},mixins:[y],data(){return{newImages:[],errors:[],productUploadPending:!1,productImageDeletePending:!1}},props:{productSlug:{required:!0,type:String},externalPending:{required:!1,type:Boolean,default:!1},currentImages:{required:!0,type:Array}},methods:{async uploadImages(){if(this.errors=[],this.newImages.length===0){this.errors=[[this.$t("product.updateProduct.images.tooFewImages")]];return}const e=new FormData;this.newImages.forEach(t=>{e.append("images[]",t.raw)});try{await m($,{slug:this.productSlug},e),this.$emit("imagesUpdate"),this.newImages=[]}catch(t){this.errors=P(t)}},async deleteImage(e){this.errors=[];try{await m(O,{slug:this.productSlug,imageId:e}),this.$emit("imagesUpdate")}catch(t){this.errors=P(t)}}},computed:{maxLoadedImagesCount(){return 10-this.currentImages.length},pending(){return this.externalPending||this.productUploadPending||this.productImageDeletePending}}},K={class:"current-images-container"},Q={class:"images-upload-form"};function X(e,t,_,C,r,s){const d=a("item-image"),c=a("font-awesome-icon"),p=R,n=V,D=a("errors-alert"),S=a("full-width-button");return i(),l("div",null,[g("div",K,[(i(!0),l(T,null,x(_.currentImages,u=>(i(),l("div",{key:u.id,class:"current-image-block"},[o(d,{"image-url":u.link},null,8,["image-url"]),o(p,{disabled:s.pending,loading:s.pending,type:"danger",onClick:de=>e.usePending(s.deleteImage,"productImageDeletePending",u.id),class:"delete-image-button"},{default:h(()=>[o(c,{type:"danger",icon:"trash"},{default:h(()=>[U(I(e.$t("profile.avatar.buttons.delete")),1)]),_:1})]),_:2},1032,["disabled","loading","onClick"])]))),128))]),g("div",Q,[s.maxLoadedImagesCount?(i(),E(n,{key:0,class:"image-upload-container",drag:!0,multiple:!0,limit:s.maxLoadedImagesCount,"file-list":r.newImages,"onUpdate:fileList":t[0]||(t[0]=u=>r.newImages=u),"list-type":"picture-card",accept:"image/png, image/gif, image/jpeg","auto-upload":!1},null,8,["limit","file-list"])):A("",!0)]),o(D,{errors:r.errors},null,8,["errors"]),o(S,{pending:s.pending,onClick:t[1]||(t[1]=u=>e.usePending(s.uploadImages,"productUploadPending"))},{default:h(()=>[U(I(e.$t("general.save")),1)]),_:1},8,["pending"])])}const Y=f(J,[["render",X],["__scopeId","data-v-b183de10"]]);const Z={name:"ProductUpdateCard",components:{ProductImagesUpdateCard:Y,ProductCategoriesUpdateCard:z,ProductUpdateForm:b},data(){return{product:{},errors:{},pending:!1,productSlug:""}},mixins:[y,B,L],methods:{async onProductUpdateButtonClick(e){this.errors={},e.append("_method","PUT");try{this.product=(await m(H,{slug:this.productSlug},e)).data,this.updateTitle()}catch(t){this.errors=P(t)}},async onProductDeleteButtonClick(){await this.redirectToHome()},async loadProduct(){await this.useErrorsCatch(async()=>{const e=(await m(G,{slug:this.productSlug})).data;e.seller.id!==this.user.id&&await this.redirectToHome(),this.product=e,this.updateTitle()},async()=>{await this.redirectToHome()})},updateTitle(){this.updateDocumentTitle("titles.productUpdate",{product:this.product.metaTitle})},async redirectToHome(){await this.$router.push({name:"Home"})}},computed:{...q("auth",["user"])},mounted(){this.productSlug=this.$route.params.slug,this.usePending(this.loadProduct)}},ee={class:"card"},te={class:"card"},re={class:"card"};function se(e,t,_,C,r,s){const d=a("product-update-form"),c=a("product-categories-update-card"),p=a("product-images-update-card");return i(),l(T,null,[g("div",ee,[o(d,{"request-errors":r.errors,"product-to-update":r.product,pending:r.pending,onDeleteProduct:t[0]||(t[0]=n=>e.usePending(s.onProductDeleteButtonClick)),onUpdateProduct:t[1]||(t[1]=n=>e.usePending(s.onProductUpdateButtonClick,"pending",n))},null,8,["request-errors","product-to-update","pending"])]),g("div",te,[o(c,{onUpdateCategories:t[2]||(t[2]=n=>e.usePending(s.loadProduct)),"product-slug":r.productSlug,categories:r.product.categories||[],"external-pending":r.pending},null,8,["product-slug","categories","external-pending"])]),g("div",re,[o(p,{onImagesUpdate:t[3]||(t[3]=n=>e.usePending(s.loadProduct)),"product-slug":r.productSlug,"external-pending":r.pending,"current-images":r.product.images||[]},null,8,["product-slug","external-pending","current-images"])])],64)}const oe=f(Z,[["render",se],["__scopeId","data-v-6a5155e5"]]),ae={name:"ProductUpdate",components:{ProductUpdateCard:oe}};function ne(e,t,_,C,r,s){const d=a("product-update-card");return i(),E(d)}const Te=f(ae,[["render",ne]]);export{Te as default};
