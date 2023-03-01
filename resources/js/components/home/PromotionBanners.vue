<template>
    <el-carousel class="carousel carousel-with-bottom-indentation" trigger="click" :interval="10000">
        <el-carousel-item v-for="banner in banners" :key="banner.name" @click="onBannerClick(banner)"
                          :name="banner.name">
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
    },
    methods: {
        onBannerClick(banner) {
            this.$router.push(banner.url)
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

:deep(.el-carousel__container):hover:not(:has(.el-carousel__arrow:hover)) {
    cursor: pointer;
    opacity: 0.8;
}

:deep(.el-carousel__container), .carousel-image {
    border-radius: var(--el-border-radius-round);
}
</style>
