<template>
    <el-header class="header">
        <el-menu
            class="header-menu container"
            default-active="1"
            mode="horizontal"
        >
            <el-menu-item class="" index="1">
                <div class="header-menu-item">Processing Center</div>
            </el-menu-item>
        </el-menu>
    </el-header>
</template>

<script>
export default {
    name: 'MainHeader'
}
</script>

<style scoped>
.header {
    height: var(--el-header-height);
    padding: 0;
}
/deep/.header-menu {
    height: var(--el-header-height);
}
</style>
