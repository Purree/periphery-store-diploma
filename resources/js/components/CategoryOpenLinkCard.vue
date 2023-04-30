<template>
    <styled-router-link :to="categoryRoute" :underline="underline">
        <slot></slot>
    </styled-router-link>
</template>

<script>
import StyledRouterLink from '@/components/StyledRouterLink.vue'
import SearchKeywordsEnum from '@/helpers/enums/SearchKeywordsEnum'

export default {
    name: 'CategoryOpenLinkCard',
    components: { StyledRouterLink },
    props: {
        slug: {
            required: true,
            type: String
        },
        underline: {
            required: false,
            type: Boolean,
            default: false
        }
    },
    computed: {
        categoryRoute: {
            get() {
                return this.$router.resolve({
                    name: 'Search',
                    query: { [SearchKeywordsEnum.categories]: this.slug }
                })
            }
        }
    }
}
</script>

<style scoped>

</style>
