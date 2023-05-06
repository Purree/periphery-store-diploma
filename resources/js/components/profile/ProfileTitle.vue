<template>
    <based-text class="profile-title" :title="text" />
    <el-divider/>
</template>

<script>
import BasedText from '@/components/BasedText.vue'

export default {
    name: 'ProfileTitle',
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
.profile-title {
    text-align: center;
    font-size: var(--el-font-size-extra-large);
    display: block;
    width: 100%;
}
</style>
