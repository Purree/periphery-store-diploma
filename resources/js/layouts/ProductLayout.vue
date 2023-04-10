<template>
    <el-container direction="vertical" class="app-container">
        <main-header container-class="home-container"></main-header>
        <el-main class="main home-container">
            <div class="product-container">
                <slot></slot>
            </div>
        </el-main>
    </el-container>
</template>

<script>
import MainHeader from '@/components/header/MainHeader.vue'

export default {
    name: 'ProductLayout',
    components: { MainHeader }
}
</script>

<style scoped>
.app-container {
    min-height: 100vh;
    position: relative;
}

.main {
    background: var(--el-bg-color-page);
    display: flex;
    flex-flow: column;
}

.product-container {
    flex-grow: 1;
    background: var(--el-bg-color);
}
</style>
