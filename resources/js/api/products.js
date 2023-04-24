import { API } from '@/api/apiPrefixes.js'

export const API_GET_PRODUCTS_URL = ['get', API + 'products']
export const API_CREATE_PRODUCT_URL = ['post', API + 'products']
export const API_GET_PRODUCT_URL = ['get', API + 'products/{slug}']
export const API_UPDATE_PRODUCT_URL = ['put', API + 'products/{slug}']
export const API_DELETE_PRODUCT_URL = ['delete', API + 'products/{slug}']
export const API_GET_PRODUCT_REVIEWS_URL = ['get', API + 'products/{slug}/reviews']
export const API_GET_DISCOUNTED_PRODUCTS_URL = ['get', API + 'products/discounted']
