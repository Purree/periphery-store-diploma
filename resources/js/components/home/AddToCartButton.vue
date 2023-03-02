<template>
    <el-button type="primary" v-bind="$attrs">
        <font-awesome-icon icon="cart-shopping" class="cart-icon" />
        <div>
            {{ $t('general.addToCart') }}
        </div>
    </el-button>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
    name: 'AddToCartButton',
    components: { FontAwesomeIcon }
}
</script>

<style scoped>
    .cart-icon {
        margin-right: 5px;
    }
</style>
