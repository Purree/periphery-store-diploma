<template>
    <el-main>
        <el-affix :offset="10">
            <styled-router-link style="font-size: var(--el-font-size-extra-large)" type="primary" :to="{ 'name': 'Home' }">
                <font-awesome-icon icon="home"></font-awesome-icon>
            </styled-router-link>
        </el-affix>
        <slot></slot>
    </el-main>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import StyledRouterLink from '@/components/StyledRouterLink.vue'

export default {
    name: 'ErrorLayout',
    components: { StyledRouterLink, FontAwesomeIcon }
}
</script>
