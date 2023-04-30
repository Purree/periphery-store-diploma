<template>
    <router-link class="mocha" custom :to="this.to" v-slot="{ navigate, href }">
        <el-link v-bind="$attrs" :href="href" @click="navigate">
            <template v-slot:icon>
                <slot name="icon"></slot>
            </template>
            <template v-slot:default>
                <slot></slot>
            </template>
        </el-link>
    </router-link>
</template>

<script>
export default {
    name: 'StyledRouterLink',
    props: {
        to: {
            required: true
        }
    }
}
</script>

<style scoped>

</style>
