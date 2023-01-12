<template>
    <div></div>
</template>

<script>
export default {
    name: 'RootMenuInjector',
    inject: ['rootMenu'],
    props: {
        activeIndex: {
            type: String,
            required: true
        },
        restrictedTabIndexes: {
            type: Array,
            required: true
        }
    },
    mounted() {
        const handleMenuItemClick = this.rootMenu.handleMenuItemClick

        this.rootMenu.handleMenuItemClick = (...params) => {
            if (this.restrictedTabIndexes.includes(params[0].index)) {
                return
            }
            handleMenuItemClick(...params)
        }
    }
}
</script>

<style scoped>

</style>
