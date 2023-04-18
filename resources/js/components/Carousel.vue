<template>
    <el-carousel ref="carousel" :class="{'horizontal-carousel': isCarouselInHorizontalDirection()}" v-bind="$attrs"
                 @Touchstart="onTouchStart">
        <slot/>
    </el-carousel>
</template>

<script>
import swipe from '@/mixins/swipe'

export default {
    name: 'Carousel',
    mixins: [swipe],
    methods: {
        isCarouselInHorizontalDirection() {
            return this.direction !== 'vertical'
        },
        onSwipeRight() {
            if (this.isCarouselInHorizontalDirection()) {
                this.$refs.carousel.next()
            }
        },
        onSwipeLeft() {
            if (this.isCarouselInHorizontalDirection()) {
                this.$refs.carousel.prev()
            }
        }
    },
    computed: {
        direction: {
            get() {
                return this.$attrs.direction
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import "@@/_variables.scss";
@import "@@/mixins.scss";

:deep(.el-carousel__container) {
    height: inherit !important;
    min-height: inherit !important;
    max-height: inherit !important;
}

.horizontal-carousel :deep(.el-carousel__button) {
    @include screen-size('mobile') {
        width: 4px !important;
    }
    @include screen-size('tablet') {
        width: 8px !important;
    }
    @include screen-size('big-tablet') {
        width: 12px !important;
    }
    @include screen-size('small-desktop') {
        width: 16px !important;
    }
}
</style>
