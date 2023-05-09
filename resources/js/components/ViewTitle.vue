<template>
    <based-text :title="text" class="title"/>
</template>

<script>
import BasedText from '@/components/BasedText.vue'

export default {
    name: 'ViewTitle',
    components: { BasedText },
    props: {
        text: {
            required: true,
            type: String
        }
    }
}
</script>

<style scoped>
.title {
    font-size: var(--el-font-size-super-large)
}
</style>
