<template>
    <el-main class="container main-content box is-under-header">
        <slot></slot>
    </el-main>
</template>

<script>
export default {
    name: 'MainLayout'
}
</script>

<style scoped>
    .container {
        display: flex;
        height: 100vh;
    }
</style>
