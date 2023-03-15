<template>
    <elements-collection :collection-title="collectionTitle">
        <category-card :key="category.slug" v-for="category in categories" :title="category.title"
                       :image-url="category.image" :slug="category.slug" class="category-card"></category-card>
    </elements-collection>
</template>

<script>
import ElementsCollection from '@/components/collections/ElementsCollection.vue'
import CategoryCard from '@/components/CategoryCard.vue'

export default {
    name: 'CategoriesCollection',
    components: {
        CategoryCard,
        ElementsCollection
    },
    props: {
        collectionTitle: {
            required: false,
            type: [String, undefined]
        },
        categories: {
            required: true,
            type: Array
        }
    }
}
</script>

<style scoped>
.category-card {
    margin-right: 30px;
}
</style>
