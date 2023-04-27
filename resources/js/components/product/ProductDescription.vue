<template>
    <expandable-block class="product-description" :max-height="250">
        <template #default>
            {{ description }}
        </template>
    </expandable-block>
</template>

<script>
import ExpandableBlock from '@/components/ExpandableBlock.vue'

export default {
    name: 'ProductDescription',
    components: { ExpandableBlock },
    props: {
        description: {
            required: true,
            default: String
        }
    }
}
</script>

<style scoped>
.product-description {
    margin-bottom: 10px;
    word-break: break-word;
}
</style>
