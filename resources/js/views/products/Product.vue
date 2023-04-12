<template>
    <div>

    </div>
</template>

<script>
import apiRequest from '@/helpers/apiRequest'
import { API_GET_PRODUCT_URL } from '@/api/products'
import getErrorsFromResponse, { openErrorNotification } from '@/helpers/errors'

export default {
    name: 'Product',
    data() {
        return {
            product: {}
        }
    },
    methods: {
        async getProduct(slug) {
            try {
                const productResponse = await apiRequest(API_GET_PRODUCT_URL, { slug })
                return productResponse.data
            } catch (errors) {
                if (errors?.response?.status === 404) {
                    this.$router.push({ name: 'Home' })
                    openErrorNotification(this.$t('errors.pageNotFound'))
                    return {}
                }

                openErrorNotification(getErrorsFromResponse(errors))
                return {}
            }
        }
    },
    async mounted() {
        this.product = await this.getProduct(this.$route?.params?.slug)
    }
}
</script>

<style scoped>

</style>
