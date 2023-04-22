<template>
    <div class="product-description expanded" ref="productDescription" :style="'--max-height: ' + maxDescriptionHeight + 'px'">
        <el-link :underline="false" class="show-more-button" @click="expandDescription()">{{ $t('general.showMore') }}</el-link>
        {{ description }}
    </div>
</template>

<script>
export default {
    name: 'ProductDescription',
    props: {
        description: {
            required: true,
            default: String
        }
    },
    data() {
        return {
            maxDescriptionHeight: 250
        }
    },
    methods: {
        expandDescription() {
            this.$refs.productDescription.classList.add('expanded')
        },
        reduceDescription() {
            this.$refs.productDescription.classList.remove('expanded')
        }
    },
    mounted() {
        if (this.$refs.productDescription.offsetHeight > this.maxDescriptionHeight) {
            this.reduceDescription()
        }
    }
}
</script>

<style scoped>
.product-description {
    margin-bottom: 10px;
    word-break: break-word;
}

.product-description:not(.expanded) {
    /*Get max height from vue data*/
    max-height: var(--max-height);
    overflow: hidden;
    position: relative;
}

.product-description.expanded .show-more-button {
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
</style>
