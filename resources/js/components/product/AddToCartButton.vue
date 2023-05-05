<template>
    <full-width-button v-if="!cartContainsProduct"
                       :pending="pending"
                       @click="usePending(addProductToCart)"
                       type="primary"
                       v-bind="$attrs">
        <font-awesome-icon icon="cart-shopping" class="cart-icon"/>
        <div>
            {{ $t('general.addToCart') }}
        </div>
    </full-width-button>
    <div v-else>
        <el-input-number :min="0" v-model="cartProductCount" class="fullwidth-button"/>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import FullWidthButton from '@/components/FullWidthButton.vue'
import usePending from '@/mixins/usePending'
import { mapState } from 'vuex'

export default {
    name: 'AddToCartButton',
    mixins: [usePending],
    components: {
        FullWidthButton,
        FontAwesomeIcon
    },
    data() {
        return {
            pending: false,
            addToCartTimeout: setTimeout(() => {}, 1)
        }
    },
    props: {
        productSlug: {
            required: true,
            type: String
        }
    },
    computed: {
        ...mapState('cart', ['cartItems']),
        cartContainsProduct() {
            return this.cartItems.some(item => item.product.slug === this.productSlug)
        },
        cartProductCount: {
            get() {
                return this.cartItems.find(item => item.product.slug === this.productSlug).quantity
            },
            set(value) {
                clearTimeout(this.addToCartTimeout)

                this.addToCartTimeout = setTimeout(() => {
                    this.usePending(this.addProductToCart, 'pending', value)
                }, 500)
            }
        }
    },
    methods: {
        async addProductToCart(quantity = 1) {
            await this.$store.dispatch('cart/addProductToCart', {
                productSlug: this.productSlug,
                quantity
            })
        }
    }
}
</script>

<style scoped>
.cart-icon {
    margin-right: 5px;
}

.fullwidth-button {
    width: 100%;
}
</style>
