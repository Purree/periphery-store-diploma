import{g as r,l as a,m as e}from"./app-17bd0390.js";import{c as n}from"./products-0a2918a3.js";const p={data(){return{products:[],productsPagination:[]}},methods:{async getAllProducts(t=void 0,o={}){return(await r(n,{},{params:{cursor:t,...o}})).data},async pushProductsToArray(t=void 0,o={}){try{const s=await this.getAllProducts(t,o);this.products.push(...s.data),this.productsPagination=s.meta}catch(s){a(e(s)),console.error(s)}}}};export{p as a};