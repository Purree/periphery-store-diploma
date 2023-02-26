<template>
    <el-carousel class="carousel" trigger="click" :interval="4000" height="280px">
<!--        TODO: Redirect to item.url on click -->
        <el-carousel-item v-for="item in items" :key="item" :name="items.name">
            <div class="carousel-image" :style="'background-image: url(' + item.image + ')'"></div>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
export default {
    name: 'Carousel',
    props: {
        items: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.carousel {
    border-radius: 10px;
}
.carousel-image {
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    object-fit: cover;
}
</style>
