<template>
    <el-form-item :label="$t('product.updateProduct.price')" prop="price" class="form-item">
        <el-input-number
            class="form-item-input"
            v-model="productData.price"/>
    </el-form-item>
    <el-form-item :label="$t('product.updateProduct.discount')" prop="discount" class="form-item">
        <el-input-number
            :min="0"
            :max="100"
            class="form-item-input"
            v-model="productData.discount"/>
    </el-form-item>
    <el-form-item :label="$t('product.updateProduct.quantity')" prop="quantity" class="form-item">
        <el-input-number
            class="form-item-input"
            :min="0"
            v-model="productData.quantity"/>
    </el-form-item>
    <el-form-item :label="$t('product.updateProduct.isAvailable')" prop="isAvailable" class="form-item">
        <el-switch
            class="form-item-input"
            :active-text="$t('product.updateProduct.available')"
            :inactive-text="$t('product.updateProduct.unavailable')"
            v-model="productData.isAvailable"
            size="large"
        />
    </el-form-item>
</template>

<script>
export default {
    name: 'ProductUpdateComplexDataInputs',
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
