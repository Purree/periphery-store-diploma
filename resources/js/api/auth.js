import { API } from '@/api/apiPrefixes.js'

export const API_LOGIN_URL = ['post', API + 'session']
export const API_REGISTRATION_URL = ['post', API + 'users']
export const API_LOGOUT_URL = ['delete', API + 'session']
