import apiRequest from '@/helpers/apiRequest'
import { API_GET_PRODUCTS_URL } from '@/api/products'
import getErrorsFromResponse, { openErrorNotification } from '@/helpers/errors'

export default {
    data() {
        return {
            products: [],
            productsPagination: []
        }
    },
    methods: {
        async getAllProducts(cursor = undefined, filters = {}) {
            const productsResponse = await apiRequest(
                API_GET_PRODUCTS_URL,
                {},
                { params: { cursor, ...filters } }
            )
            return productsResponse.data
        },
        async pushProductsToArray(cursor = undefined, filters = {}) {
            try {
                const allProductsResponse = await this.getAllProducts(cursor, filters)

                this.products.push(...allProductsResponse.data)
                this.productsPagination = allProductsResponse.meta
            } catch (error) {
                openErrorNotification(getErrorsFromResponse(error))
                console.error(error)
            }
        }
    }
}
