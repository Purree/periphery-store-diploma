<template>
    <div class="discount-container">
        <div class="discount-description">{{ $t('general.discount') }}</div>
        <div class="discount">-{{ discount }}%</div>
    </div>
</template>

<script>
export default {
    name: 'ProductDiscount',
    props: {
        discount: {
            required: true,
            type: Number
        }
    }
}
</script>

<style scoped lang="scss">
@import "@@/_variables.scss";
@import "@@/mixins.scss";
@include max-screen-size('big-tablet') {
    .discount-description, .discount {
        font-size: var(--el-font-size-base);
    }
}

.discount-container {
    --discount-height: 26px;
    width: 100%;
    height: var(--discount-height);
    display: flex;
}

.discount-description, .discount {
    text-align: center;
    padding: 4px 10px;
}

.discount-description {
    width: 50%;
    border-radius: var(--el-border-radius-base) 0 0 var(--el-border-radius-base);
    position: relative;
    background-color: var(--el-color-info-light-7);
}

.discount {
    width: 50%;
    border-radius: 0 var(--el-border-radius-base) var(--el-border-radius-base) 0;
    background: var(--el-color-primary);
}

.discount-description:after {
    --discount-devider-width: 10px;
    position: absolute;
    content: "";
    top: 0;
    right: calc(var(--discount-devider-width) * -1);
    border-style: solid;
    border-width: var(--discount-height) var(--discount-devider-width) 0 0;
    border-color: var(--el-color-info-light-7) transparent transparent transparent;
}
</style>
