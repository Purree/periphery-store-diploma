<template>
    <products-collection v-if="salesHits.length > 0 || pending"
                         :collection-title="$t('home.products.salesHits')"
                         :products="salesHits"
                         :pending="pending"
                         class="sales-hits"/>
</template>

<script>
import ProductsCollection from '@/components/collections/ProductsCollection.vue'
import getErrorsFromResponse, { openErrorNotification } from '@/helpers/errors'
import apiRequest from '@/helpers/apiRequest'
import { API_GET_SALES_HITS_URL } from '@/api/products'

export default {
    name: 'SalesHitsCollection',
    components: { ProductsCollection },
    data() {
        return {
            salesHits: [],
            pending: true
        }
    },
    methods: {
        async loadSalesHits() {
            try {
                this.salesHits = (await apiRequest(API_GET_SALES_HITS_URL)).data
            } catch (errors) {
                openErrorNotification(getErrorsFromResponse(errors))
            }

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
