<template>
    <full-width-button class="add-data-button"
                       type="primary"
                       @click="$emit('click')">
        {{ text }}
    </full-width-button>
</template>

<script>
import FullWidthButton from '@/components/FullWidthButton.vue'

export default {
    name: 'AddDataButton',
    components: { FullWidthButton },
    emits: ['click'],
    props: {
        text: {
            required: true,
            type: String
        }
    }
}
</script>

<style scoped>
.add-data-button {
    margin-top: 20px;
}
</style>
