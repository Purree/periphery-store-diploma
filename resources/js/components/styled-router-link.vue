<template>
    <router-link custom :to="this.to" v-slot="{ navigate, href }">
        <el-link v-bind="$attrs" :href="href" @click="navigate">
            <slot></slot>
        </el-link>
    </router-link>
</template>

<script>
export default {
    name: 'styled-router-link',
    props: {
        to: {
            required: true
        }
    }
}
</script>

<style scoped>

</style>
