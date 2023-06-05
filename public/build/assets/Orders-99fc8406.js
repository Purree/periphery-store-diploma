import{V as b}from"./ViewTitle-4a1f20fc.js";import{_ as y,r as t,o as e,c as C,w as c,h as q,am as w,d,e as n,q as $,t as _,a as o,b as v,F as g,v as x,u as L,g as R}from"./app-a341633d.js";import{a as A}from"./orders-18c6fee6.js";import{p as D}from"./price-38bf80ae.js";import{I as E}from"./ItemImage-14603b6e.js";import{P as N}from"./ProductOpenLink-ba57e14e.js";import{S as I}from"./StyledRouterLink-43c7e266.js";import{O as P}from"./OrderStatusTag-0e4c7e4e.js";const V={name:"OrderOpenLink",components:{StyledRouterLink:I},props:{to:{required:!0,type:Object}}};function B(r,k,a,O,u,i){const l=t("styled-router-link");return e(),C(l,{to:a.to,underline:!1},{default:c(()=>[q(r.$slots,"default")]),_:3},8,["to"])}const T=y(V,[["render",B]]);const F={name:"OrderCard",components:{OrderStatusTag:P,OrderOpenLink:T,StyledRouterLink:I,ProductOpenLink:N,ItemImage:E},methods:{beautifyDate:w},mixins:[D],props:{createdAt:{required:!0,type:String},orderId:{required:!0,type:[Number,String]},totalCost:{required:!0,type:Number},status:{required:!0,type:String},items:{required:!0,type:Array}},computed:{products(){return this.items.map(r=>r.product).slice(0,4)},orderRoute:{get(){return this.$router.resolve({name:"Order",params:{id:this.orderId}})}}}},j={class:"order-header"},G={class:"left-header-part-container"},U={class:"order-price"},z={class:"items-container"},H={class:"order-products-container"};function J(r,k,a,O,u,i){const l=t("order-open-link"),p=t("styled-router-link"),m=t("order-status-tag"),f=t("item-image"),s=t("product-open-link"),S=t("el-card");return e(),C(S,null,{header:c(()=>[d("div",j,[d("div",G,[n(l,{to:i.orderRoute,class:"order-created-text"},{default:c(()=>[$(_(r.$t("orders.orderDated"))+" "+_(i.beautifyDate(a.createdAt)),1)]),_:1},8,["to"]),n(p,{class:"order-link",to:i.orderRoute},{default:c(()=>[$(_(a.orderId),1)]),_:1},8,["to"])]),d("div",U,_(r.getCurrency(a.totalCost)),1)])]),default:c(()=>[d("div",z,[d("div",null,[d("div",null,_(r.$t("orders.status"))+": ",1),n(m,{class:"order-status",status:a.status},null,8,["status"])]),d("div",H,[(e(!0),o(g,null,v(i.products,h=>(e(),o("div",{key:h.slug},[n(s,{slug:h.slug},{default:c(()=>[n(f,{class:"order-product-image","image-url":h.previewImage},null,8,["image-url"])]),_:2},1032,["slug"])]))),128))])])]),_:1})}const K=y(F,[["render",J],["__scopeId","data-v-7edc8a42"]]);const M={name:"Orders",components:{OrderCard:K,ViewTitle:b},mixins:[x,L],data(){return{pending:!1,orders:[]}},methods:{async loadOrders(){await this.useErrorsCatch(async()=>{this.orders=(await R(A)).data})}},mounted(){this.orders=this.usePending(this.loadOrders)}},Q={class:"cart-container"},W={key:0},X={key:0},Y={key:1},Z={key:1};function ee(r,k,a,O,u,i){const l=t("view-title"),p=t("order-card"),m=t("el-divider"),f=t("el-skeleton");return e(),o("div",null,[n(l,{text:r.$t("orders.orders")},null,8,["text"]),d("div",Q,[u.pending?(e(),o("div",Z,[(e(),o(g,null,v(10,s=>d("div",{key:s},[n(f,{animated:""}),n(m)])),64))])):(e(),o("div",W,[u.orders.length>0?(e(),o("div",X,[(e(!0),o(g,null,v(u.orders,s=>(e(),o("div",{key:s.id},[n(p,{status:s.status,"total-cost":s.totalCost,"order-id":s.id,"created-at":s.createdAt,items:s.items},null,8,["status","total-cost","order-id","created-at","items"]),n(m)]))),128))])):(e(),o("div",Y,_(r.$t("orders.noOrders")),1))]))])])}const ce=y(M,[["render",ee],["__scopeId","data-v-0e11fb6e"]]);export{ce as default};