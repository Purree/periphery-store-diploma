import{aE as w,L as C,z as h,aC as I,_ as N,av as k,c as A,w as b,o as D,e as m,h as O,r as x}from"./app-a44995be.js";import{M as B}from"./MainHeader-a139403f.js";import{E as R,a as $}from"./el-main-55090c3b.js";import{E as F}from"./el-backtop-6756a83d.js";import{g as M}from"./StoreIcon-d3841b25.js";import{t as g}from"./throttle-7ddc0281.js";import"./el-tooltip-4ed993c7.js";import"./el-popper-c3f23f9e.js";import"./el-switch-b953123d.js";import"./validator-ae9f5db2.js";import"./index-8eb88add.js";import"./debounce-573356e3.js";const i="ElInfiniteScroll",V=50,P=200,U=0,j={delay:{type:Number,default:P},distance:{type:Number,default:U},disabled:{type:Boolean,default:!1},immediate:{type:Boolean,default:!0}},E=(e,n)=>Object.entries(j).reduce((o,[t,a])=>{var d,c;const{type:u,default:r}=a,l=e.getAttribute(`infinite-scroll-${t}`);let s=(c=(d=n[l])!=null?d:l)!=null?c:r;return s=s==="false"?!1:s,s=u(s),o[t]=Number.isNaN(s)?r:s,o},{}),S=e=>{const{observer:n}=e[i];n&&(n.disconnect(),delete e[i].observer)},z=(e,n)=>{const{container:o,containerEl:t,instance:a,observer:d,lastScrollTop:c}=e[i],{disabled:u,distance:r}=E(e,a),{clientHeight:l,scrollHeight:s,scrollTop:f}=t,y=f-c;if(e[i].lastScrollTop=f,d||u||y<0)return;let p=!1;if(o===e)p=s-(l+f)<=r;else{const{clientTop:T,scrollHeight:H}=e,L=M(e,t);p=f+l>=L+T+H-r}p&&n.call(a)};function _(e,n){const{containerEl:o,instance:t}=e[i],{disabled:a}=E(e,t);a||o.clientHeight===0||(o.scrollHeight<=o.clientHeight?n.call(t):S(e))}const K={async mounted(e,n){const{instance:o,value:t}=n;w(t)||C(i,"'v-infinite-scroll' binding value must be a function"),await h();const{delay:a,immediate:d}=E(e,o),c=I(e,!0),u=c===window?document.documentElement:c,r=g(z.bind(null,e,t),a);if(c){if(e[i]={instance:o,container:c,containerEl:u,delay:a,cb:t,onScroll:r,lastScrollTop:u.scrollTop},d){const l=new MutationObserver(g(_.bind(null,e,t),V));e[i].observer=l,l.observe(e,{childList:!0,subtree:!0}),_(e,t)}c.addEventListener("scroll",r)}},unmounted(e){const{container:n,onScroll:o}=e[i];n==null||n.removeEventListener("scroll",o),S(e)},async updated(e){if(!e[i])await h();else{const{containerEl:n,cb:o,observer:t}=e[i];n.clientHeight&&t&&_(e,o)}}},v=K;v.install=e=>{e.directive("InfiniteScroll",v)};const Y=v;const q={name:"HomeLayout",components:{MainHeader:B},methods:{onPageEndReached(){const e=new Event("pageEndReached");document.dispatchEvent(e)}}};function G(e,n,o,t,a,d){const c=x("main-header"),u=F,r=$,l=R,s=Y;return k((D(),A(l,{direction:"vertical",class:"app-container","infinite-scroll-distance":500},{default:b(()=>[m(c,{"container-class":"home-container"}),m(r,{class:"main"},{default:b(()=>[m(u),O(e.$slots,"default",{},void 0,!0)]),_:3})]),_:3})),[[s,d.onPageEndReached]])}const ae=N(q,[["render",G],["__scopeId","data-v-0541eaa1"]]);export{ae as default};
