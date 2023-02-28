<template>
    <el-carousel class="products-carousel carousel-with-bottom-indentation" trigger="click"
                 :interval="25000">
        <!--        TODO: Redirect to item.url on click -->
        <el-carousel-item v-for="product in products" :key="product.slug" :name="product.title">
            <div class="carousel-image" :style="'background-image: url(' + product.previewImage + ')'">
                {{ product }}
            </div>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
export default {
    name: 'ProductsWithDiscount',
    props: {
        products: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped lang="scss">
.products-carousel {
    --carousel-height: 300px;

    width: 677px;

    &:deep(.el-carousel__container) {
        background-color: var(--el-bg-color); // !!!!!!!!!!!!!!!
        border-radius: var(--el-border-radius-round);
    }
}
</style>
