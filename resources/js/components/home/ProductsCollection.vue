<template>
    <elements-collection :collection-title="collectionTitle">
        <div :key="i" v-for="i in 10" style="width: 100%; height: 100%; background-color: red"></div>
    </elements-collection>
</template>

<script>
import ElementsCollection from '@/components/ElementsCollection.vue'

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
