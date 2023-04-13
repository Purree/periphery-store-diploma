<template>
    <div class="product">
        <item-title class="product-title" :title="product.title"/>
        <div class="product-card">
            <el-carousel direction="vertical" :autoplay="false">
                <el-carousel-item v-for="key in 20" :key="key">
                    <img src="/storage/product-images/image.jpg" alt="Product image">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
import apiRequest from '@/helpers/apiRequest'
import { API_GET_PRODUCT_URL } from '@/api/products'
import getErrorsFromResponse, { openErrorNotification } from '@/helpers/errors'
import ItemTitle from '@/components/home/ItemTitle.vue'

export default {
    name: 'Product',
    components: {
        ItemTitle
    },
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
.product {
    margin-top: 20px;
}

.product-title {
    margin-bottom: 5px;
    font-size: 32px;
    font-weight: bold;
}

.product-card {
    background: var(--el-bg-color);
    border-radius: var(--el-border-radius-round);
    padding: var(--el-border-radius-round);
}
</style>
