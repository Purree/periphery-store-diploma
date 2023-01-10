<template>
    <div class="store-icon">
        <el-image
            v-bind="$attrs"
            :src="stored_asset('logo.png')"
            fit="cover"
        />
    </div>
</template>

<script>
import storage from '@/mixins/storage'

export default {
    name: 'StoreIcon',
    mixins: [storage]
}
</script>

<style scoped>

</style>
