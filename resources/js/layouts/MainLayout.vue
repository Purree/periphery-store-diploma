<template>
    <el-main class="container">
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
    }
</style>
