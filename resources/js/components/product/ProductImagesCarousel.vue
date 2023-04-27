<template>
    <carousel v-if="!pending" class="product-carousel" :direction="isCarouselVertical ? 'vertical' : 'horizontal'"
              ref="productCarousel">
        <el-carousel-item class="product-carousel-item" v-for="image in allImages" :key="image">
            <img :src="image" alt="Product image" class="product-image">
        </el-carousel-item>
    </carousel>
    <el-skeleton v-else class="product-carousel product-carousel-skeleton"
                 animated>
        <template #template>
            <el-skeleton-item variant="image" class="product-image"/>
        </template>
    </el-skeleton>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import screenWidth from '@/mixins/screenWidth'
import { screenSizes } from '@/helpers/enums/ScreenSizesEnum'

export default {
    name: 'ProductImagesCarousel',
    components: { Carousel },
    mixins: [screenWidth],
    data() {
        return {
            isCarouselVertical: true
        }
    },
    props: {
        images: {
            required: false,
            type: Array,
            default: () => []
        },
        productPreview: {
            required: false,
            type: [String, undefined]
        },
        pending: {
            required: false,
            type: Boolean,
            default: false
        }
    },
    methods: {
        updateCarouselButtonsBackgroundImage() {
            if (this.pending) {
                return
            }

            this.$nextTick(() =>
                this.$refs.productCarousel.$el.querySelectorAll('.el-carousel__button').forEach((el, i) => {
                    if (this.isCarouselVertical) {
                        el.style.backgroundColor = 'transparent'
                        el.style.backgroundImage = `url(${this.allImages[i]})`
                    } else {
                        el.style.backgroundColor = 'var(--el-color-white)'
                        el.style.backgroundImage = null
                    }
                })
            )
        },
        onScreenResize() {
            this.isCarouselVertical = screenWidth.methods.checkIsScreenSizeBiggerThan(screenSizes.smallDesktop)
            this.updateCarouselButtonsBackgroundImage()
        }
    },
    computed: {
        allImages: {
            get() {
                if (this.images.length > 0) {
                    return [this.productPreview, ...this.images]
                }

                return [this.productPreview]
            }
        }
    },
    watch: {
        allImages() {
            this.updateCarouselButtonsBackgroundImage()
        },
        pending() {
            this.updateCarouselButtonsBackgroundImage()
        }
    },
    mounted() {
        this.onScreenResize()
        window.addEventListener('resize', () => {
            this.onScreenResize()
        })
    }
}
</script>

<style scoped lang="scss">
@import "@@/_variables.scss";
@import "@@/mixins.scss";

.product-carousel {
    height: 100%;
}

.product-carousel-skeleton {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.product-carousel-skeleton * {
    height: 100%;
}

:deep(.el-carousel__indicators):has(.el-carousel__indicator--vertical) {
    left: 0;
    right: auto;
}

:deep(.el-carousel__indicator--vertical) {
    margin: var(--el-carousel-indicator-padding-horizontal) var(--el-carousel-indicator-padding-vertical);
    padding: 0;

    & button {
        height: 32px;
        width: 32px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }
}

:deep(.el-carousel__indicator--horizontal) {
    background-color: rgba(0, 0, 0, 0.1)
}

.product-carousel-item {
    display: flex;
    align-items: center;
    justify-content: center;
}

.product-image {
    --product-image-size: 470px;

    height: var(--product-image-size);
    width: var(--product-image-size);
    @include max-screen-size('small-desktop') {
        --product-image-size: 310px;
    }
    @include max-screen-size('big-tablet') {
        --product-image-size: 300px;
    }
    @include max-screen-size('mobile') {
        --product-image-size: 220px;
    }
}

</style>
