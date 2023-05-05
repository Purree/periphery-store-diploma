import apiRequest from '@/helpers/apiRequest'
import { API_UPDATE_PRODUCTS_IN_CART_COUNT_URL } from '@/api/cart'
import getErrorsFromResponse, { openErrorNotification } from '@/helpers/errors'

export default {
    state: {
        cartItems: []
    },
    mutations: {
        replaceCartItem: (state, newItem) => {
            if (state.cartItems.some(item => item.id === newItem.id)) {
                state.cartItems = state.cartItems.map(el => el.id === newItem.id ? newItem : el)
            } else {
                state.cartItems.push(newItem)
            }
        },
        deleteProductFromCart(state, productSlug) {
            state.cartItems.filter(oldItem => oldItem.product.slug === productSlug)
        }
    },
    actions: {
        async loadCart() {
            // @TODO
            await apiRequest()
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
