<template>
    <div class="price-container" :class="{'price-variables': !isPriceSizeOverwritten}">
        <div class="price" v-if="discountedPrice !== undefined">{{ getCurrency(discountedPrice) }}</div>
        <div :class="discountedPrice === undefined ? 'price' : 'old-price'">{{ getCurrency(price) }}</div>
    </div>
</template>

<script>
import price from '@/mixins/price'

export default {
    name: 'ProductPrice',
    mixins: [price],
    props: {
        price: {
            type: Number,
            required: true
        },
        discountedPrice: {
            type: [Number, undefined],
            required: false
        },
        isPriceSizeOverwritten: {
            type: [Boolean, undefined],
            required: false
        }
    }
}
</script>

<style scoped lang="scss">
@import "@@/_variables.scss";
@import "@@/mixins.scss";

@include max-screen-size('big-tablet') {
    .price {
        font-size: var(--price-mobile-size);
    }
    .old-price {
        font-size: var(--old-price-mobile-size);
    }
}

@include screen-size('big-tablet') {
    .price {
        font-size: var(--price-size);
    }
    .old-price {
        font-size: var(--old-price-size);
    }
}

.price-variables {
    --price-size: var(--el-font-size-extra-large);
    --old-price-size: var(--el-font-size-base);
    --price-mobile-size: var(--el-font-size-base);
    --old-price-mobile-size: var(--el-font-size-extra-small);
}

.price-container {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;

    & > *:not(:last-child) {
        margin-right: 10px;
    }
}

.old-price {
    text-decoration: line-through;
    color: var(--el-color-info-light-5);
    word-break: break-all;
}

.price {
    word-break: break-all;
}
</style>
