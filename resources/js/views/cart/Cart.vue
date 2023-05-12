<template>
    <div>
        <view-title :text="$t('cart.cart')"/>

        <div class="cart-container">
            <div v-if="!pending || cartItems.length > 0">
                <div v-if="cartItems.length > 0">
                    <div v-for="product in products" :key="product.slug">
                        <product-card :product="product"
                                      class="product-card"
                                      :is-show-add-to-cart-button="true"/>
                        <el-divider/>
                    </div>

                    <based-text :title="$t('general.total') + ': ' + getCurrency(getTotalPrice)"/>
                    <full-width-button type="success"
                                       @click="onBuyButtonClick"
                                       :pending="pending">
                        {{ $t('general.buy') }}
                    </full-width-button>
                    <submit-cart-message v-model:is-visible="isBuyCartDialogVisible"
                                         :pending="pending"
                                         @submit-cart="(userData) => usePending(onCartSubmit, 'pending', userData)"/>
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
import useErrorsCatch from '@/mixins/useErrorsCatch'
import usePending from '@/mixins/usePending'
import { API_CREATE_ORDER_URL } from '@/api/orders'
import apiRequest from '@/helpers/apiRequest'
import SubmitCartMessage from '@/components/cart/SubmitCartMessage.vue'

export default {
    name: 'Cart',
    mixins: [price, useErrorsCatch, usePending],
    components: {
        SubmitCartMessage,
        ViewTitle,
        FullWidthButton,
        BasedText,
        ProductCard
    },
    data() {
        return {
            pending: true,
            isBuyCartDialogVisible: false
        }
    },
    methods: {
        ...mapActions('cart', ['loadCart']),
        onBuyButtonClick() {
            this.isBuyCartDialogVisible = true
        },
        async onCartSubmit({
            userNameId,
            userMobileId,
            userAddressId
        }) {
            await this.useErrorsCatch(async() => {
                this.isBuyCartDialogVisible = false

                await apiRequest(API_CREATE_ORDER_URL, {}, {
                    userNameId,
                    userMobileId,
                    userAddressId
                })

                await this.$router.push({ name: 'Orders' })
            })
        }
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
