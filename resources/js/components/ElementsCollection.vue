<template>
    <div class="collection-container">
        <slot name="title">
            <div v-if="collectionTitle" class="collection-title">
                {{ collectionTitle }}
            </div>
        </slot>
        <!--        TODO: Add controls-->
        <div class="elements" :style="`height: ${height}; ${isScrollVisible ? 'overflow-x: scroll' : ''}`">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ElementsCollection',
    props: {
        collectionTitle: {
            required: false,
            type: [String, undefined]
        },
        height: {
            required: false,
            type: String,
            default: '340px'
        },
        isScrollVisible: {
            required: false,
            type: Boolean,
            default: true
        }
    }
}
</script>

<style scoped lang="scss">
.collection-container {
    overflow: hidden;
}

.collection-title {
    font-size: 1.6rem;
    font-weight: bold;
}

.elements {
    --scroll-background-color: var(--el-bg-color);
    --scroll-color: var(--el-color-primary);
    position: relative;
    width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    white-space: nowrap;
    scrollbar-width: thin;
    scrollbar-color: var(--scroll-color) var(--scroll-background-color);

    &::-webkit-scrollbar {
        width: 12px;
    }

    &::-webkit-scrollbar-track {
        background: var(--scroll-background-color);
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--scroll-color);
        border-radius: 20px;
        border: 3px solid var(--scroll-background-color);
    }
}

:deep(.elements) > * {
    display: inline-block;
}

</style>
