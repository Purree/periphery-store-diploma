import{_ as r,r as l,o as i,c as _,w as p,h,D as f,a as m,d as u,t as d}from"./app-064bcfd2.js";import{S as g}from"./StyledRouterLink-6817f9b5.js";import{s as $}from"./SearchKeywordsEnum-1c50111d.js";const y={methods:{onTouchStart(e){if(e.changedTouches.length!==1)return;const o=e.changedTouches[0].clientX;addEventListener("touchend",t=>this.onTouchEnd(t,o),{once:!0})},onTouchEnd(e,o){if(e.changedTouches.length!==1)return;const t=e.changedTouches[0].clientX;o<t?this.onSwipeLeft():o>t&&this.onSwipeRight()}}};const v={name:"Carousel",mixins:[y],methods:{isCarouselInHorizontalDirection(){return this.direction!=="vertical"},onSwipeRight(){this.isCarouselInHorizontalDirection()&&this.$refs.carousel.next()},onSwipeLeft(){this.isCarouselInHorizontalDirection()&&this.$refs.carousel.prev()}},computed:{direction:{get(){return this.$attrs.direction}}}};function C(e,o,t,a,c,s){const n=l("el-carousel");return i(),_(n,f({ref:"carousel",class:{"horizontal-carousel":s.isCarouselInHorizontalDirection()}},e.$attrs,{onTouchstartPassive:e.onTouchStart}),{default:p(()=>[h(e.$slots,"default",{},void 0,!0)]),_:3},16,["class","onTouchstartPassive"])}const B=r(v,[["render",C],["__scopeId","data-v-9785e251"]]);const S={name:"ProductDiscount",props:{discount:{required:!0,type:Number}}},T={class:"discount-container"},D={class:"discount-description"},k={class:"discount"};function w(e,o,t,a,c,s){return i(),m("div",T,[u("div",D,d(e.$t("general.discount")),1),u("div",k,"-"+d(t.discount)+"%",1)])}const R=r(S,[["render",w],["__scopeId","data-v-95460984"]]),P={name:"CategoryOpenLinkCard",components:{StyledRouterLink:g},props:{slug:{required:!0,type:String},underline:{required:!1,type:Boolean,default:!1}},computed:{categoryRoute:{get(){return this.$router.resolve({name:"Search",query:{[$.categories]:this.slug}})}}}};function I(e,o,t,a,c,s){const n=l("styled-router-link");return i(),_(n,{to:s.categoryRoute,underline:t.underline},{default:p(()=>[h(e.$slots,"default")]),_:3},8,["to","underline"])}const q=r(P,[["render",I]]);export{B as C,R as P,q as a};
