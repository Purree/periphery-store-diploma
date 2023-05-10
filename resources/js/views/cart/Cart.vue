<template>
    <div>
        <view-title :text="$t('cart.cart')"/>

        <div class="cart-container">
            <div v-if="!pending">
                <div v-if="cartItems.length > 0">
                    <div v-for="product in products" :key="product.slug">
                        <product-card :product="product"
                                      class="product-card"
                                      :is-show-add-to-cart-button="true"/>
                        <el-divider/>
                    </div>

                    <based-text :title="$t('general.total') + ': ' + getCurrency(getTotalPrice)"/>
                    <!--          @TODO: Добавить функционал          -->
                    <full-width-button type="success">{{ $t('general.buy') }}</full-width-button>
                </div>
                <div v-else>
                    {{ $t('cart.noProducts') }}
                </div>
            </div>
            <div v-else>
                <div v-for="key in 10" :key="key">
                    <el-skeleton animated></el-skeleton>
                    <el-divider/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import ProductCard from '@/components/search/ProductCard.vue'
import BasedText from '@/components/BasedText.vue'
import FullWidthButton from '@/components/FullWidthButton.vue'
import price from '@/mixins/price'
import ViewTitle from '@/components/ViewTitle.vue'

export default {
    name: 'Cart',
    mixins: [price],
    components: {
        ViewTitle,
        FullWidthButton,
        BasedText,
        ProductCard
    },
    data() {
        return {
            pending: true
        }
    },
    methods: {
        ...mapActions('cart', ['loadCart'])
    },
    computed: {
        ...mapState('cart', ['cartItems']),
        ...mapGetters('cart', ['getTotalPrice']),
        products() {
            return this.cartItems.map(item => item.product)
        }
    },
    async mounted() {
        await this.loadCart()
        this.pending = false
    }
}
</script>

<style scoped>
.cart-container {
    min-height: 100px;
    margin-top: 10px;
}
</style>
