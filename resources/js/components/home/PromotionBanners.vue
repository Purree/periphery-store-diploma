<template>
    <el-carousel class="carousel carousel-with-bottom-indentation" trigger="click" :interval="10000">
<!--        TODO: Redirect to item.url on click -->
        <el-carousel-item v-for="banner in banners" :key="banner.name" :name="banner.name">
            <div class="carousel-image" :style="'background-image: url(' + banner.image + ')'"></div>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
export default {
    name: 'PromotionBanners',
    props: {
        banners: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.carousel {
    width: 100%;
    height: 100%;
}
.carousel-image {
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    object-fit: cover;
}
:deep(.el-carousel__container), .carousel-image {
    border-radius: var(--el-border-radius-round);
}
</style>
