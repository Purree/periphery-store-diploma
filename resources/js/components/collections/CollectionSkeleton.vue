<template>
    <el-skeleton :key="collectionSkeleton" v-for="collectionSkeleton in 20" animated class="collection-card-skeleton">
        <template #template>
            <el-skeleton-item variant="rect" class="collection-card-skeleton-item"/>
        </template>
    </el-skeleton>
</template>

<script>
export default {
    name: 'CollectionSkeleton'
}
</script>

<style scoped>
.collection-card-skeleton {
    margin-right: 30px;
    width: 160px;
    height: 210px;
}
.collection-card-skeleton-item {
    width: 100%;
    height: 100%;
}
</style>
