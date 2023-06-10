import{_ as l,g as c,l as n,m as d,r as p,o as g,c as u,E as m}from"./app-17bd0390.js";import{a as C}from"./categories-2e15c2b3.js";const f={name:"ProductCategoriesSelect",emits:["update:selectedCategories"],data(){return{categoriesOptions:[],categoriesPending:!0}},props:{selectedCategories:{required:!0,type:Array},pending:{required:!1,type:Boolean,default:!1}},computed:{computedSelectedCategories:{get(){return this.selectedCategories},set(e){this.$emit("update:selectedCategories",e)}}},methods:{bindCategories(e){this.categoriesOptions=e.map(t=>({value:t.slug,label:t.title}))},async loadCategories(){try{const e=(await c(C)).data;this.bindCategories(e),this.categoriesPending=!1}catch(e){n(d(e))}}},async mounted(){await this.loadCategories()}};function _(e,t,r,h,s,o){const a=p("el-select-v2");return g(),u(a,m({class:"filter-select",modelValue:o.computedSelectedCategories,"onUpdate:modelValue":t[0]||(t[0]=i=>o.computedSelectedCategories=i),disabled:s.categoriesPending||r.pending,filterable:"",options:s.categoriesOptions,placeholder:e.$t("search.filters.categories"),multiple:""},e.$attrs),null,16,["modelValue","disabled","options","placeholder"])}const E=l(f,[["render",_]]);export{E as P};