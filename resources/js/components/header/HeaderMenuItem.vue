<template>
    <el-menu-item v-bind="$attrs" @mousedown="onItemMouseDown">
        <slot></slot>
    </el-menu-item>
</template>

<script>
export default {
    name: 'HeaderMenuItem',
    methods: {
        onItemMouseDown(event) {
            if (event.button !== 1) {
                return
            }

            event.preventDefault()
            this.openItemInNewTab()
        },
        openItemInNewTab() {
            const index = this.$attrs.index || this.$attrs.route?.fullPath

            if (!index) {
                return
            }

            window.open(index, '_blank').focus()
        }
    }
}
</script>
