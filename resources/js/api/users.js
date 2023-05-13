import { API } from '@/api/apiPrefixes.js'

export const API_CURRENT_USER_URL = ['get', API + 'users/me']
export const API_UPDATE_USER_URL = ['put', API + 'users/{id}']
export const API_DELETE_USER_NAME_URL = ['delete', API + 'users/names/{id}']
export const API_CREATE_USER_NAME_URL = ['post', API + 'users/names']
export const API_UPDATE_USER_NAME_URL = ['put', API + 'users/names/{id}']
export const API_DELETE_USER_ADDRESS_URL = ['delete', API + 'users/addresses/{id}']
export const API_CREATE_USER_ADDRESS_URL = ['post', API + 'users/addresses']
export const API_UPDATE_USER_AVATAR_URL = ['post', API + 'users/{id}/avatar']
export const API_DELETE_USER_AVATAR_URL = ['delete', API + 'users/{id}/avatar']
export const API_UPDATE_USER_ADDRESS_URL = ['put', API + 'users/addresses/{id}']
export const API_DELETE_USER_MOBILE_URL = ['delete', API + 'users/mobiles/{id}']
export const API_CREATE_USER_MOBILE_URL = ['post', API + 'users/mobiles']
export const API_UPDATE_USER_MOBILE_URL = ['put', API + 'users/mobiles/{id}']
