<template>
    <elements-collection :collection-title="collectionTitle">
        <div :key="i" v-for="i in 10" style="width: 400px; height: 100%;" :style="'background-color: #' + Math.floor(100000 + Math.random() * 900000)"></div>
    </elements-collection>
</template>

<script>
import ElementsCollection from '@/components/collections/ElementsCollection.vue'

export default {
    name: 'ProductsCollection',
    components: { ElementsCollection },
    props: {
        collectionTitle: {
            required: false,
            type: [String, undefined]
        }
    }
}
</script>

<style scoped>

</style>
