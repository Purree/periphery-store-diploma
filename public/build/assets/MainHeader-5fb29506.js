import{S}from"./StoreIcon-2e06c801.js";import{_ as l,r as t,o as i,c as d,w as r,h as b,D as v,d as f,e as o,t as k,E as N,G as T,a as P,i as H,H as V,I as y,v as q,k as A,J as E,p as U,K as B,L as D,M as G,z,N as j,O as K,U as O,P as x,f as $,n as F,Q as J,R as Q}from"./app-064bcfd2.js";import{s as W}from"./SearchKeywordsEnum-1c50111d.js";const X={name:"HeaderMenuItem",methods:{onItemMouseDown(e){e.button===1&&(e.preventDefault(),this.openItemInNewTab())},openItemInNewTab(){var n;const e=this.$attrs.index||((n=this.$attrs.route)==null?void 0:n.fullPath);e&&window.open(e,"_blank").focus()}}};function Y(e,n,u,m,a,c){const s=t("el-menu-item");return i(),d(s,v(e.$attrs,{onMousedown:c.onItemMouseDown}),{default:r(()=>[b(e.$slots,"default")]),_:3},16,["onMousedown"])}const L=l(X,[["render",Y]]);const Z={name:"HeaderMenuRoundedButtonItem",components:{HeaderMenuItem:L},props:{icon:{type:String,required:!1},text:{type:String,required:!0}}},ee={class:"header-rounded-button"},te={class:"header-rounded-button-text"};function ne(e,n,u,m,a,c){const s=t("font-awesome-icon"),_=t("el-avatar"),h=t("header-menu-item");return i(),d(h,N(T(e.$attrs)),{default:r(()=>[f("div",ee,[b(e.$slots,"icon",{},()=>[o(_,null,{default:r(()=>[o(s,{icon:u.icon},null,8,["icon"])]),_:1})],!0),f("div",te,k(u.text),1)])]),_:3},16)}const oe=l(Z,[["render",ne],["__scopeId","data-v-0644b451"]]),se={name:"RootMenuInjector",inject:["rootMenu"],props:{activeIndex:{type:String,required:!0},restrictedTabIndexes:{type:Array,required:!0}},mounted(){const e=this.rootMenu.handleMenuItemClick;this.rootMenu.handleMenuItemClick=(...n)=>{this.restrictedTabIndexes.includes(n[0].index)||e(...n)}}};function ae(e,n,u,m,a,c){return i(),P("div")}const ce=l(se,[["render",ae]]),re={name:"DarkThemeIcon",components:{FontAwesomeIcon:H}};function ie(e,n,u,m,a,c){const s=t("font-awesome-icon");return i(),d(s,{icon:"moon"})}const ue=l(re,[["render",ie]]),de={name:"LightThemeIcon"};function _e(e,n,u,m,a,c){const s=t("font-awesome-icon");return i(),d(s,{icon:"sun"})}const le=l(de,[["render",_e]]),me={name:"ChangeThemeButton",mixins:[V],data(){return{activeThemeIcon:y(ue),inactiveThemeIcon:y(le)}},computed:{...q("theme",["theme"]),themeBooleanColor:{get(){return this.theme==="dark"},set(e){this.changeTheme(e?"dark":"light")}}}};function he(e,n,u,m,a,c){const s=t("el-switch");return i(),d(s,v(e.$attrs,{"inactive-icon":a.inactiveThemeIcon,"active-icon":a.activeThemeIcon,modelValue:c.themeBooleanColor,"onUpdate:modelValue":n[0]||(n[0]=_=>c.themeBooleanColor=_)}),null,16,["inactive-icon","active-icon","modelValue"])}const pe=l(me,[["render",he]]),ge={name:"ChangeLanguageButton",components:{FullWidthButton:A},mixins:[E]};function fe(e,n,u,m,a,c){const s=t("full-width-button");return i(),d(s,v(e.$attrs,{onClick:e.changeLanguage}),{default:r(()=>[U(k(e.$t("nav.buttons.additionalActions.changeLanguage")),1)]),_:1},16,["onClick"])}const Ie=l(ge,[["render",fe]]);const $e={name:"AdditionalActions",mixins:[B],components:{LogoutButton:D,ChangeLanguageButton:Ie,ChangeThemeButton:pe},methods:{openLogoutMessage(){G.success(this.$t("authorization.successfullyLoggedOut"))}}};function ve(e,n,u,m,a,c){const s=t("change-theme-button"),_=t("el-menu-item"),h=t("change-language-button"),g=t("logout-button"),p=t("el-menu-item-group");return i(),d(p,{class:"header-additional-actions",title:e.$t("nav.buttons.additionalActions.name")},{default:r(()=>[o(_,{class:"inactive-header-element"},{default:r(()=>[o(s)]),_:1}),o(_,{class:"inactive-header-element"},{default:r(()=>[o(h)]),_:1}),z(o(_,{class:"inactive-header-element"},{default:r(()=>[o(g,{onLogout:c.openLogoutMessage,type:"danger"},null,8,["onLogout"])]),_:1},512),[[j,e.checkIsLoggedIn()]])]),_:1},8,["title"])}const ye=l($e,[["render",ve],["__scopeId","data-v-0f1e5b1d"]]),xe={methods:{getRouteByName(e){return this.$router.resolve({name:e})},getRoutePathByName(e){return this.getRouteByName(e).fullPath},getRouteByNameIfLoggedInElseGetLoginRoute(e){return this.$store.getters["auth/isLoggedIn"]?this.getRouteByName(e):this.getRouteByName("Login")},getRoutePathByNameIfLoggedInElseGetLoginRoute(e){return this.getRouteByNameIfLoggedInElseGetLoginRoute(e).fullPath}}};const be={name:"SearchInput",data(){return{searchRequest:""}},methods:{onSearchButtonClick(){this.$router.push({name:"Search",query:this.searchRequest?{[W.searchBy]:this.searchRequest}:{}})}}};function ke(e,n,u,m,a,c){const s=t("font-awesome-icon"),_=t("el-button"),h=t("el-input"),g=t("el-menu-item");return i(),d(g,{class:"header-search-container inactive-header-element",index:"1"},{default:r(()=>[o(h,{class:"header-search",placeholder:e.$t("nav.search"),modelValue:a.searchRequest,"onUpdate:modelValue":n[1]||(n[1]=p=>a.searchRequest=p),onKeyup:n[2]||(n[2]=K(p=>c.onSearchButtonClick(),["enter"]))},{suffix:r(()=>[o(_,{class:"search-button",onClick:n[0]||(n[0]=p=>c.onSearchButtonClick())},{default:r(()=>[o(s,{icon:"search"})]),_:1})]),_:1},8,["placeholder","modelValue"])]),_:1})}const Be=l(be,[["render",ke],["__scopeId","data-v-0430d958"]]);const Le={name:"MainHeader",mixins:[xe,B],components:{SearchInput:Be,HeaderMenuItem:L,UserAvatar:O,AdditionalActions:ye,RootMenuInjector:ce,HeaderMenuRoundedButtonItem:oe,StoreIcon:S},data(){return{activeIndex:"/",restrictedTabIndexes:[null,"1"]}},methods:{checkIsUserCanBuy(){return this.checkIsUserHasPermission(x.buy_products)},checkIsUserCanViewSearch(){return!this.checkIsLoggedIn()||this.checkIsUserHasPermission(x.view_products)}},mounted(){this.activeIndex=this.$route.path},props:{containerClass:{required:!1,type:String,default:"container"}}},w=e=>(J("data-v-2691611d"),e=e(),Q(),e),we=w(()=>f("div",{class:"header-blocks-divider"},null,-1)),Re=w(()=>f("div",{class:"header-blocks-divider"},null,-1));function Ce(e,n,u,m,a,c){const s=t("root-menu-injector"),_=t("store-icon"),h=t("header-menu-item"),g=t("search-input"),p=t("user-avatar"),I=t("header-menu-rounded-button-item"),R=t("additional-actions"),C=t("el-menu"),M=t("el-header");return i(),d(M,{class:"header"},{default:r(()=>[o(C,{router:!0,ellipsis:!0,class:F("header-menu "+u.containerClass),"default-active":a.activeIndex,mode:"horizontal"},{default:r(()=>[o(s,{ref:"rootMenu","active-index":a.activeIndex,"restricted-tab-indexes":a.restrictedTabIndexes},null,8,["active-index","restricted-tab-indexes"]),o(h,{class:"header-logo-container",index:this.getRoutePathByName("Home")},{default:r(()=>[o(_,{class:"header-logo header-icon"})]),_:1},8,["index"]),we,c.checkIsUserCanViewSearch()?(i(),d(g,{key:0,class:"inactive-header-element header-search-container"})):$("",!0),Re,o(I,{text:e.checkIsLoggedIn()?e.$t("nav.buttons.profile"):e.$t("authorization.login"),index:this.getRoutePathByNameIfLoggedInElseGetLoginRoute("Profile")},{icon:r(()=>[o(p)]),_:1},8,["text","index"]),e.checkIsLoggedIn()&&this.checkIsUserCanBuy()?(i(),d(I,{key:1,text:e.$t("nav.buttons.orders"),icon:"box",index:this.getRoutePathByNameIfLoggedInElseGetLoginRoute("Orders")},null,8,["text","index"])):$("",!0),e.checkIsLoggedIn()&&this.checkIsUserCanBuy()?(i(),d(I,{key:2,text:e.$t("nav.buttons.cart"),icon:"cart-shopping",index:this.getRoutePathByNameIfLoggedInElseGetLoginRoute("Cart")},null,8,["text","index"])):$("",!0),o(R)]),_:1},8,["class","default-active"])]),_:1})}const Te=l(Le,[["render",Ce],["__scopeId","data-v-2691611d"]]);export{Te as M};
