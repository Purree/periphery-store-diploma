<template>
    <elements-collection :collection-title="collectionTitle">
        <category-card :key="category.slug" v-for="category in categories" :title="category.title"
                       :image-url="category.image" :slug="category.slug" class="category-card"></category-card>
        <template v-if="pending">
            <el-skeleton :key="categorySkeleton" v-for="categorySkeleton in 20" animated class="category-card-skeleton">
                <template #template>
                    <el-skeleton-item variant="rect" class="category-card-skeleton-item"/>
                </template>
            </el-skeleton>
        </template>
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
.category-card, .category-card-skeleton {
    margin-right: 30px;
}
.category-card-skeleton {
    width: 160px;
    height: 210px;
}
.category-card-skeleton-item {
    width: 100%;
    height: 100%;
}
</style>
