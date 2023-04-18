<template>
    <div class="product">
        <item-title class="product-title" :title="product.title"/>
        <div class="product-card">
            <carousel class="product-carousel" direction="vertical">
                <el-carousel-item v-for="key in 20" :key="key">
                    <img src="/storage/product-images/image.jpg" alt="Product image" class="product-image">
                </el-carousel-item>
            </carousel>
        </div>
    </div>
</template>

<script>
import apiRequest from '@/helpers/apiRequest'
import { API_GET_PRODUCT_URL } from '@/api/products'
import getErrorsFromResponse, { openErrorNotification } from '@/helpers/errors'
import ItemTitle from '@/components/home/ItemTitle.vue'
import Carousel from '@/components/Carousel.vue'

export default {
    name: 'Product',
    components: {
        Carousel,
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

<style scoped lang="scss">
.product {
    margin-top: 20px;
}

.product-title {
    margin-bottom: 5px;
    font-size: 32px;
    font-weight: bold;
}

.product-card {
    height: 550px;
    background: var(--el-bg-color);
    border-radius: var(--el-border-radius-round);
    padding: var(--el-border-radius-round);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.product-carousel {
    height: 100%;
}

:deep(.el-carousel__indicators) {
    left: 0;
    right: auto;
}

:deep(.el-carousel__indicator--vertical) {
    margin: var(--el-carousel-indicator-padding-horizontal) var(--el-carousel-indicator-padding-vertical);
    padding: 0;

    & button {
        border: 1px solid var(--el-color-black);
        background-color: var(--el-color-white);
    }

    .product-image {
        height: 100%;
    }
}
</style>
