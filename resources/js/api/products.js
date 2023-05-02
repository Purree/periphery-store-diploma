import { API } from '@/api/apiPrefixes.js'

export const API_GET_PRODUCTS_URL = ['get', API + 'products']
export const API_CREATE_PRODUCT_URL = ['post', API + 'products']
export const API_GET_PRODUCT_URL = ['get', API + 'products/{slug}']

// Use with formData.append("_method", "PUT")
export const API_UPDATE_PRODUCT_URL = ['post', API + 'products/{slug}']
export const API_DELETE_PRODUCT_URL = ['delete', API + 'products/{slug}']
export const API_GET_USER_PRODUCTS_URL = ['get', API + 'users/products']
export const API_GET_PRODUCT_SELLERS_URL = ['get', API + 'products/sellers']
export const API_GET_PRODUCT_REVIEWS_URL = ['get', API + 'products/{slug}/reviews']
export const API_GET_DISCOUNTED_PRODUCTS_URL = ['get', API + 'products/discounted']
