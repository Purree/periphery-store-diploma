import { API } from '@/api/apiPrefixes.js'

export const API_GET_ALL_CART_ITEMS_URL = ['get', API + 'carts/items']
export const API_UPDATE_PRODUCTS_IN_CART_COUNT_URL = ['put', API + 'carts/items/{product}']
export const API_DELETE_PRODUCT_FROM_CART_URL = ['delete', API + 'carts/items/{product}']
