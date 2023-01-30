import { API } from '@/api/apiPrefixes.js'

export const API_CURRENT_USER_URL = ['get', API + 'users/me']
export const API_UPDATE_USER_URL = ['put', API + 'users/{id}']
