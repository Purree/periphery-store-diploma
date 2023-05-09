<template>
    <styled-router-link :to="to" :underline="false">
        <slot></slot>
    </styled-router-link>
</template>

<script>
import StyledRouterLink from '@/components/StyledRouterLink.vue'

export default {
    name: 'OrderOpenLink',
    components: { StyledRouterLink },
    props: {
        to: {
            required: true,
            type: Object
        }
    }
}
</script>
