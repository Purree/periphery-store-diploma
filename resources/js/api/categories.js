import { API } from '@/api/apiPrefixes.js'

export const API_GET_ALL_CATEGORIES_URL = ['get', API + 'categories']
export const API_GET_CATEGORY_PARENTS_URL = ['get', API + 'categories/{slug}/parents']
export const API_GET_POPULAR_CATEGORIES_URL = ['get', API + 'categories/popular']
