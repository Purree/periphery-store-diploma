<template>
    <full-width-button type="primary" v-bind="$attrs">
        <font-awesome-icon icon="cart-shopping" class="cart-icon" />
        <div>
            {{ $t('general.addToCart') }}
        </div>
    </full-width-button>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import FullWidthButton from '@/components/FullWidthButton.vue'

export default {
    name: 'AddToCartButton',
    components: { FullWidthButton, FontAwesomeIcon }
}
</script>

<style scoped>
    .cart-icon {
        margin-right: 5px;
    }
</style>
