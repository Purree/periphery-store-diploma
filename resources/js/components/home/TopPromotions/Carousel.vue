<template>
    <el-carousel ref="carousel" v-bind="$attrs" @Touchstart="onTouchStart">
        <slot />
    </el-carousel>
</template>

<script>
import swipe from '@/mixins/swipe'

export default {
    name: 'Carousel',
    mixins: [swipe],
    methods: {
        onSwipeRight() {
            this.$refs.carousel.next()
        },
        onSwipeLeft() {
            this.$refs.carousel.prev()
        }

    }
}
</script>

<style scoped lang="scss">
@import "@@/_variables.scss";
@import "@@/mixins.scss";
@include max-screen-size('big-tablet') {
    :deep(.el-carousel__container) {
        height: inherit !important;
        min-height: inherit !important;
        max-height: inherit !important;
    }
}
</style>
