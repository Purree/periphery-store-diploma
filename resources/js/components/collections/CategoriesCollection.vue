<template>
    <elements-collection :collection-title="collectionTitle">
        <category-card :key="category.slug" v-for="category in categories" :title="category.title"
                       :image-url="category.image" :slug="category.slug" class="category-card"></category-card>
        <template v-if="pending">
            <collection-skeleton/>
        </template>
    </elements-collection>
</template>

<script>
import ElementsCollection from '@/components/collections/ElementsCollection.vue'
import CategoryCard from '@/components/CategoryCard.vue'
import CollectionSkeleton from '@/components/collections/CollectionSkeleton.vue'

export default {
    name: 'CategoriesCollection',
    components: {
        CollectionSkeleton,
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
        },
        pending: {
            required: false,
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
.category-card {
    margin-right: 30px;
}
</style>
