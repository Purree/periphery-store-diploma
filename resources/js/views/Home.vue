<template>
    <carousel :items="banners"></carousel>
</template>

<script>
import Carousel from '@/components/home/Carousel.vue'

export default {
    name: 'Home',
    components: { Carousel },
    data() {
        return {
            // @TODO: Add banners to database and replace this.
            banners: [{
                name: 'test',
                url: '/404',
                image: 'http://diploma.com/storage/banners/banner.jpg'
            }, {
                name: 'test2',
                url: '/404',
                image: 'http://diploma.com/storage/banners/banner.jpg'
            }, {
                name: 'test3',
                url: '/404',
                image: 'http://diploma.com/storage/banners/banner.jpg'
            }
            ]
        }
    }
}
</script>

<style scoped>

</style>
