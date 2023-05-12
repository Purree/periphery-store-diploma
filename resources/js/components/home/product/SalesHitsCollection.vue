<template>
    <products-collection v-if="salesHits.length > 0 || pending"
                         :collection-title="$t('home.products.salesHits')"
                         :products="salesHits"
                         :pending="pending"
                         class="sales-hits"/>
</template>

<script>
import ProductsCollection from '@/components/collections/ProductsCollection.vue'
import apiRequest from '@/helpers/apiRequest'
import { API_GET_SALES_HITS_URL } from '@/api/products'
import useErrorsCatch from '@/mixins/useErrorsCatch'

export default {
    name: 'SalesHitsCollection',
    components: { ProductsCollection },
    mixins: [useErrorsCatch],
    data() {
        return {
            salesHits: [],
            pending: true
        }
    },
    methods: {
        async loadSalesHits() {
            await this.useErrorsCatch(async() => {
                this.salesHits = (await apiRequest(API_GET_SALES_HITS_URL)).data
            })

            this.pending = false
        }
    },
    mounted() {
        this.loadSalesHits()
    }
}
</script>

<style scoped>

</style>
