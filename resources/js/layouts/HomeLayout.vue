<template>
    <el-container direction="vertical" class="app-container" v-infinite-scroll="onPageEndReached" :infinite-scroll-distance="500">
        <main-header container-class="home-container"></main-header>
        <el-main class="main">
            <slot></slot>
        </el-main>
    </el-container>
</template>

<script>
import MainHeader from '@/components/header/MainHeader.vue'

export default {
    name: 'HomeLayout',
    components: { MainHeader },
    methods: {
        onPageEndReached() {
            const pageEndReachedEvent = new Event('pageEndReached')

            document.dispatchEvent(pageEndReachedEvent)
        }
    }
}
</script>

<style scoped>
.app-container {
    min-height: 100vh;
    position: relative;
}

.main {
    background: var(--el-bg-color-page);
    padding: 0 !important;
    display: flex;
    flex-flow: column;
}
</style>
