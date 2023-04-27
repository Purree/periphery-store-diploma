import { API } from '@/api/apiPrefixes.js'

export const API_GET_REVIEW_REPLIES_URL = ['get', API + 'products/reviews/{id}']
export const API_CREATE_REVIEW_REPLY_URL = ['post', API + 'products/reviews/replies']
export const API_UPDATE_REVIEW_REPLY_URL = ['put', API + 'products/reviews/replies/{id}']
export const API_DELETE_REVIEW_REPLY_URL = ['delete', API + 'products/reviews/replies/{id}']
export const API_GET_REVIEW_REPLIES_ANSWERS_URL = ['get', API + 'products/reviews/replies/{id}']
