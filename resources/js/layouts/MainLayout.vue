<template>
        <el-container direction="vertical" style="min-height: 100vh">
            <main-header></main-header>
            <el-main class="main container">
                <slot></slot>
            </el-main>
        </el-container>
</template>

<script>
import MainHeader from '@/components/header/MainHeader.vue'

export default {
    name: 'MainLayout',
    components: { MainHeader }
}
</script>
