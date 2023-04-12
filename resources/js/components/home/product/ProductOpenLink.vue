<template>
    <styled-router-link :to="productRoute" :underline="false">
        <slot></slot>
    </styled-router-link>
</template>

<script>
import StyledRouterLink from '@/components/StyledRouterLink.vue'

export default {
    name: 'ProductOpenLink',
    components: { StyledRouterLink },
    props: {
        slug: {
            required: true,
            type: String
        }
    },
    computed: {
        productRoute: {
            get() {
                return this.$router.resolve({
                    name: 'Product',
                    params: { slug: this.slug }
                })
            }
        }
    }
}
</script>
