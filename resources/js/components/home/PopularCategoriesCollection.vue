<template>
    <categories-collection v-if="popularCategories.length > 0 || popularCategoriesPending"
                           :collection-title="$t('home.categories.popularCategories')"
                           :categories="popularCategories" class="popular-categories"
                           :pending="popularCategoriesPending"/>
</template>

<script>
import CategoriesCollection from '@/components/collections/CategoriesCollection.vue'
import apiRequest from '@/helpers/apiRequest'
import { API_GET_POPULAR_CATEGORIES_URL } from '@/api/categories'
import useErrorsCatch from '@/mixins/useErrorsCatch'

export default {
    name: 'PopularCategoriesCollection',
    components: { CategoriesCollection },
    mixins: [useErrorsCatch],
    data() {
        return {
            popularCategories: [],
            popularCategoriesPending: true
        }
    },
    methods: {
        async getPopularCategories() {
            const popularCategoriesResponse = await apiRequest(API_GET_POPULAR_CATEGORIES_URL)
            return popularCategoriesResponse.data
        }
    },
    async mounted() {
        await this.useErrorsCatch(async() => {
            this.popularCategories = await this.getPopularCategories()
            this.popularCategoriesPending = false
        })
    }
}
</script>

<style scoped>

</style>
