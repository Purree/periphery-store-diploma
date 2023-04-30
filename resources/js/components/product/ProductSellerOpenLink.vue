<template>
    <div class="product-seller-link">
        <styled-router-link class="product-seller-link" :to="sellerRoute" :underline="false">
            <slot></slot>
        </styled-router-link>
    </div>
</template>

<script>
import StyledRouterLink from '@/components/StyledRouterLink.vue'
import SearchKeywordsEnum from '@/helpers/enums/SearchKeywordsEnum'

export default {
    name: 'ProductSellerOpenLink',
    components: { StyledRouterLink },
    props: {
        id: {
            required: true,
            type: String
        }
    },
    computed: {
        sellerRoute: {
            get() {
                return this.$router.resolve({
                    name: 'Search',
                    query: { [SearchKeywordsEnum.sellers]: this.id }
                })
            }
        }
    }
}
</script>

<style scoped>
:deep(.product-seller-link) {
    width: 100%;
}
:deep(.product-seller-link) .el-link__inner {
    width: 100%;
}
</style>
