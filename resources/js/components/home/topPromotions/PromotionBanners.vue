<template>
    <carousel class="carousel" indicator-position="outside" trigger="click" :interval="10000">
        <el-carousel-item v-for="banner in banners" :key="banner.name" @click="onBannerClick(banner)"
                          :name="banner.name" :class="{'clickable': !!banner.url}">
            <img class="carousel-image" :src="banner.image" :alt="banner.name"/>
        </el-carousel-item>
    </carousel>
</template>

<script>
import Carousel from '@/components/Carousel.vue'

export default {
    name: 'PromotionBanners',
    components: { Carousel },
    props: {
        banners: {
            type: Array,
            required: true
        }
    },
    methods: {
        onBannerClick(banner) {
            const bannerURL = banner.url

            if (bannerURL === null) {
                return
            }

            if (window.location.hostname === new URL(bannerURL).hostname) {
                return this.$router.push(bannerURL)
            }

            window.open(bannerURL, '_blank').focus()
        }
    }
}
</script>

<style scoped lang="scss">
.carousel {
    width: 100%;
    height: 100%;
}

.carousel-image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

:deep(.el-carousel__container) {
    height: calc(100% - calc(var(--el-carousel-indicator-height) + var(--el-carousel-indicator-padding-vertical) * 2)) !important;

    & .clickable:hover:not(:has(.el-carousel__arrow:hover)) {
        cursor: pointer;
        opacity: 0.8;
    }

    &, .carousel-image {
        border-radius: var(--el-border-radius-round);
    }
}
</style>
