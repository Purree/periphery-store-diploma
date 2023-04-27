<template>
    <div class="expandable-block expanded" ref="expandableBlock" :style="'--max-height: ' + maxHeight + 'px'">
        <el-link :underline="false" class="show-more-button" @click="expandBlock()">
            <span class="show-more-text">
                {{
                    $t('general.showMore')
                }}
            </span>
        </el-link>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ExpandableBlock',
    props: {
        maxHeight: {
            required: true,
            type: Number
        }
    },
    methods: {
        expandBlock() {
            this.$refs.expandableBlock.classList.add('expanded')
        },
        reduceBlock() {
            this.$refs.expandableBlock.classList.remove('expanded')
        }
    },
    mounted() {
        if (this.$refs.expandableBlock.offsetHeight > this.maxHeight) {
            this.reduceBlock()
        }
    }
}
</script>

<style scoped>
.expandable-block:not(.expanded) {
    /*Get max height from vue data*/
    max-height: var(--max-height);
    overflow: hidden;
    position: relative;
}

.expandable-block.expanded .show-more-button {
    display: none;
}

.show-more-button {
    display: flex;
    justify-content: center;
    align-items: end;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 15%;
    background: linear-gradient(transparent, var(--el-bg-color));
}

.show-more-text {
    padding: 10px;
    background: var(--el-bg-color);
    border-top-right-radius: var(--el-border-radius-round);
    border-top-left-radius: var(--el-border-radius-round);
}
</style>
