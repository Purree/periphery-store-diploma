import apiRequest from '@/helpers/apiRequest'
import { API_GET_ALL_CART_ITEMS_URL, API_UPDATE_PRODUCTS_IN_CART_COUNT_URL } from '@/api/cart'
import getErrorsFromResponse, { openErrorNotification } from '@/helpers/errors'

export default {
    state: {
        cartItems: []
    },
    mutations: {
        appendCart: (state, items) => {
            state.cartItems.push(...items)
        },
        replaceCartItem: (state, newItem) => {
            if (state.cartItems.some(item => item.id === newItem.id)) {
                state.cartItems = state.cartItems.map(oldItem => oldItem.id === newItem.id ? newItem : oldItem)
            } else {
                state.cartItems.push(newItem)
            }
        },
        deleteProductFromCart(state, productSlug) {
            state.cartItems.map(oldItem => oldItem.product.slug === productSlug)
        }
    },
    actions: {
        async loadCart({ commit }) {
            try {
                const cartItems = (await apiRequest(API_GET_ALL_CART_ITEMS_URL)).data
                commit('appendCart', cartItems)
            } catch (errors) {
                openErrorNotification(getErrorsFromResponse(errors))
            }
        },
        async addProductToCart({ commit }, {
            productSlug,
            quantity
        }) {
            try {
                const newCartProduct = (await apiRequest(
                    API_UPDATE_PRODUCTS_IN_CART_COUNT_URL,
                    { product: productSlug },
                    { quantity }
                )).data

                if (Object.values(newCartProduct).length === 0) {
                    commit('deleteProductFromCart', productSlug)
                } else {
                    commit('replaceCartItem', newCartProduct)
                }
            } catch (errors) {
                openErrorNotification(getErrorsFromResponse(errors))
            }
        }
    },
    namespaced: true
}
