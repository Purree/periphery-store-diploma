import apiRequest from '@/helpers/apiRequest'
import { API_GET_ALL_CART_ITEMS_URL, API_UPDATE_PRODUCTS_IN_CART_COUNT_URL } from '@/api/cart'
import { getMinimalProductPrice } from '@/helpers/price'
import useErrorsCatch from '@/mixins/useErrorsCatch'

export default {
    state: {
        cartItems: []
    },
    mutations: {
        setCartItems: (state, newItems) => {
            state.cartItems = newItems
        },
        appendCart: (state, newItems) => {
            newItems.forEach((newItem) => {
                if (state.cartItems.some(item => item.id === newItem.id)) {
                    state.cartItems = state.cartItems.map(oldItem => oldItem.id === newItem.id ? newItem : oldItem)
                } else {
                    state.cartItems.push(newItem)
                }
            })
        },
        deleteProductFromCart(state, productSlug) {
            state.cartItems = state.cartItems.filter(oldItem => oldItem.product.slug !== productSlug)
        }
    },
    getters: {
        getTotalPrice(state) {
            return state.cartItems.reduce(
                (previousValue, item) => {
                    return previousValue + (getMinimalProductPrice(item.product) * item.quantity)
                }, 0
            )
        }
    },
    actions: {
        async loadCart({ commit }) {
            await useErrorsCatch.methods.useErrorsCatch(async() => {
                const cartItems = (await apiRequest(API_GET_ALL_CART_ITEMS_URL)).data
                commit('setCartItems', cartItems)
            })
        },
        async changeProductInCartQuantity({ commit }, {
            productSlug,
            quantity
        }) {
            await useErrorsCatch.methods.useErrorsCatch(async() => {
                const newCartProduct = (await apiRequest(
                    API_UPDATE_PRODUCTS_IN_CART_COUNT_URL,
                    { product: productSlug },
                    { quantity }
                )).data

                if (Object.values(newCartProduct).length === 0) {
                    commit('deleteProductFromCart', productSlug)
                } else {
                    commit('appendCart', [newCartProduct])
                }
            })
        }
    },
    namespaced: true
}
