<template>
    <el-container direction="vertical" class="app-container">
        <main-header></main-header>
        <el-main class="main container">
            <slot></slot>
        </el-main>
    </el-container>
</template>

<script>
import MainHeader from '@/components/header/MainHeader.vue'

export default {
    name: 'AppLayoutDefault',
    components: { MainHeader }
}
</script>

<style scoped>
.app-container {
    min-height: 100vh;
    position: relative;
}
</style>
