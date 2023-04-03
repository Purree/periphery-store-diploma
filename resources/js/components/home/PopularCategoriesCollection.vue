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
import getErrorsFromResponse, { openErrorNotification } from '@/helpers/errors'

export default {
    name: 'PopularCategoriesCollection',
    components: { CategoriesCollection },
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
        try {
            this.popularCategories = await this.getPopularCategories()
            this.popularCategoriesPending = false
        } catch (error) {
            openErrorNotification(getErrorsFromResponse(error))
            console.error(error)
        }
    }
}
</script>

<style scoped>

</style>
