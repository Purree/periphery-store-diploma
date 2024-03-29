import { API } from '@/api/apiPrefixes.js'

export const API_GET_PRODUCTS_URL = ['get', API + 'products']
export const API_CREATE_PRODUCT_URL = ['post', API + 'products']
export const API_GET_PRODUCT_URL = ['get', API + 'products/{slug}']
export const API_GET_SALES_HITS_URL = ['get', API + 'products/hits']

// Use with formData.append("_method", "PUT")
export const API_UPDATE_PRODUCT_URL = ['post', API + 'products/{slug}']

export const API_DELETE_PRODUCT_URL = ['delete', API + 'products/{slug}']
export const API_GET_USER_PRODUCTS_URL = ['get', API + 'users/products']
export const API_GET_PRODUCT_SELLERS_URL = ['get', API + 'products/sellers']
export const API_GET_DISCOUNTED_PRODUCTS_URL = ['get', API + 'products/discounted']
export const API_UPLOAD_PRODUCT_IMAGES_URL = ['post', API + 'products/{slug}/images']
export const API_DELETE_PRODUCT_IMAGE_URL = ['delete', API + 'products/{slug}/images/{imageId}']
export const API_DELETE_PRODUCT_PREVIEW_URL = ['delete', API + 'products/{slug}/preview']
export const API_UPDATE_PRODUCT_CATEGORIES_URL = ['put', API + 'products/{slug}/categories']
