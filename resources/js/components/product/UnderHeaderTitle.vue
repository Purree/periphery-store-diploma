<template>
    <div>
        <div v-if="!pending">
            <view-title :text="text"/>
            <slot></slot>
        </div>
        <el-skeleton v-else class="under-header-title-skeleton"
                     animated>
            <template #template>
                <el-skeleton-item variant="rect"/>
            </template>
        </el-skeleton>
    </div>
</template>

<script>
import ViewTitle from '@/components/ViewTitle.vue'

export default {
    name: 'UnderHeaderTitle',
    components: { ViewTitle },
    props: {
        pending: {
            required: false,
            type: Boolean,
            default: false
        },
        text: {
            required: true
        }
    }
}
</script>

<style scoped>
.under-header-title-skeleton {
    height: 32px;

    & * {
        height: 100%;
    }
}
</style>
