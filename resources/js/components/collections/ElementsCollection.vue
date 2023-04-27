<template>
    <div class="collection-container">
        <slot name="title" v-if="collectionTitle">
            <list-title class="title" :title="collectionTitle"/>
        </slot>

        <div class="elements-container">
            <div class="collection-controls" v-if="isControlsVisible">
                <div v-if="collectionScrollPosition !== 0" class="left-collection-control-container">
                    <slot name="leftCollectionControl">
                        <collection-control-button @click="scrollCollectionToDirection('left')" direction="left"/>
                    </slot>
                </div>
                <div v-if="collectionScrollPosition !== collectionScrollWidth"
                     class="right-collection-control-container">
                    <slot name="rightCollectionControl">
                        <collection-control-button @click="scrollCollectionToDirection('right')" direction="right"/>
                    </slot>
                </div>
            </div>
            <div>
                <div ref="collectionElements" class="elements"
                     :style="`max-height: ${maxHeight}; ${isScrollVisible ? 'overflow-x: scroll' : ''}`">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CollectionControlButton from '@/components/collections/CollectionControlButton.vue'
import CollectionWhenScrollIsVisibleEnum from '@/helpers/enums/CollectionWhenScrollIsVisibleEnum'
import ListTitle from '@/components/ListTitle.vue'
import screenWidth from '@/mixins/screenWidth'

export default {
    name: 'ElementsCollection',
    components: {
        ListTitle,
        CollectionControlButton
    },
    mixins: [screenWidth],
    data() {
        return {
            collectionScrollPosition: 0,
            collectionScrollWidth: 0
        }
    },
    props: {
        collectionTitle: {
            required: false,
            type: [String, undefined]
        },
        maxHeight: {
            required: false,
            type: String,
            default: '340px'
        },
        whenScrollIsVisible: {
            required: false,
            // Instance of CollectionWhenScrollIsVisibleEnum
            type: String,
            default: CollectionWhenScrollIsVisibleEnum.onPhone
        },
        isControlsVisible: {
            required: false,
            type: Boolean,
            default: true
        }
    },
    methods: {
        scrollCollectionToDirection(direction) {
            const collectionElements = this.$refs.collectionElements
            const scrollLength = collectionElements.clientWidth * (direction === 'left' ? -1 : 1)

            collectionElements.scrollBy({
                left: scrollLength,
                behavior: 'smooth'
            })
        },
        updateCollectionScrollWidth() {
            const collectionElements = this.$refs.collectionElements

            this.collectionScrollWidth = collectionElements.scrollWidth - collectionElements.clientWidth
        }
    },
    computed: {
        isScrollVisible() {
            switch (this.whenScrollIsVisible) {
            case CollectionWhenScrollIsVisibleEnum.onPhone:
                return this.deviceType === 'mobile'
            case CollectionWhenScrollIsVisibleEnum.onComputer:
                return this.deviceType !== 'mobile'
            case CollectionWhenScrollIsVisibleEnum.always:
                return true
            default:
                return false
            }
        }
    },
    mounted() {
        const collectionElements = this.$refs.collectionElements

        this.updateCollectionScrollWidth()
        window.addEventListener('resize', () => {
            this.updateCollectionScrollWidth()
        })
        collectionElements.addEventListener('scroll', () => {
            this.collectionScrollPosition = collectionElements.scrollLeft
        })
    }
}
</script>

<style scoped lang="scss">
.collection-container {
    overflow: hidden;
}

.elements-container {
    position: relative;
}

.collection-controls > * {
    z-index: 1;
}

.title {
    margin-bottom: 20px;
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

.left-collection-control-container {
    position: absolute;
    top: 50%;
    transform: translate(50%, -50%);
    left: 0;
}

.right-collection-control-container {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    right: 0;
}

</style>
