<template>
    <el-form-item :label="$t('product.updateProduct.title')" prop="title" class="form-item">
        <el-input
            class="form-item-input"
            v-model="productData.title"/>
    </el-form-item>
    <el-form-item :label="$t('product.updateProduct.metaTitle')" prop="metaTitle" class="form-item">
        <el-input
            class="form-item-input"
            v-model="productData.metaTitle"/>
    </el-form-item>
    <el-form-item :label="$t('product.updateProduct.description')" prop="description" class="form-item">
        <el-input
            class="form-item-input"
            v-model="productData.description"
            :autosize="{ minRows: 3 }"
            type="textarea"/>
    </el-form-item>
</template>

<script>
export default {
    name: 'ProductUpdateTextDataInputs',
    emits: ['update:product'],
    props: {
        product: {
            required: true,
            type: Object
        }
    },
    computed: {
        productData: {
            get() {
                return this.product
            },
            set(value) {
                this.$emit('update:product', value)
            }
        }
    }
}
</script>

<style scoped>

</style>
