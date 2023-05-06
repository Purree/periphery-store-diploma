<template>
    <full-width-button v-if="!cartContainsProduct"
                       :pending="pending"
                       @click="usePending(addProductToCart)"
                       type="primary"
                       v-bind="$attrs">
        <font-awesome-icon icon="cart-shopping" class="cart-icon"/>
        <div>
            {{ $t('general.addProductToCart') }}
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
import { mapActions, mapState } from 'vuex'
import auth from '@/mixins/auth'
import PermissionsEnum from '@/helpers/enums/PermissionsEnum'

export default {
    name: 'AddToCartButton',
    mixins: [usePending, auth],
    components: {
        FullWidthButton,
        FontAwesomeIcon
    },
    data() {
        return {
            pending: false,
            addProductToCartTimeout: setTimeout(() => {}, 1)
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
                clearTimeout(this.addProductToCartTimeout)

                this.addProductToCartTimeout = setTimeout(() => {
                    this.usePending(this.addProductToCart, 'pending', value)
                }, 500)
            }
        }
    },
    methods: {
        ...mapActions('cart', ['changeProductInCartQuantity']),
        async addProductToCart(quantity = 1) {
            if (this.checkIsUserHasPermission(PermissionsEnum.buy_products)) {
                await this.changeProductInCartQuantity({
                    productSlug: this.productSlug,
                    quantity
                })
            } else {
                this.$router.push({ name: 'Login' })
            }
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
