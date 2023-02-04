import { API } from '@/api/apiPrefixes.js'

export const API_CURRENT_USER_URL = ['get', API + 'users/me']
export const API_UPDATE_USER_URL = ['put', API + 'users/{id}']
export const API_UPDATE_USER_AVATAR_URL = ['post', API + 'users/{id}/avatar']
export const API_DELETE_USER_AVATAR_URL = ['delete', API + 'users/{id}/avatar']
