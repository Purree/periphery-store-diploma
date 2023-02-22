import { API_LOGOUT_URL } from '@/api/auth.js'
import router from '@/routes/index.js'
import apiRequest from '@/helpers/apiRequest'
import { API_CURRENT_USER_URL } from '@/api/users'

export default {
    state: {
        isLoggedIn: false,
        user: {}
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        setIsLoggedIn(state, isLoggedIn = !state.isLoggedIn) {
            isLoggedIn = !!isLoggedIn

            localStorage.setItem('isLoggedIn', `${isLoggedIn}`)
            state.isLoggedIn = isLoggedIn
        }
    },
    getters: {
        getUser(state) {
            return state.user
        },
        isLoggedIn(state) {
            return state.isLoggedIn
        }
    },
    actions: {
        async changeStatusToLoggedIn({ commit }) {
            const currentUserResponse = await apiRequest(API_CURRENT_USER_URL)
            commit('setIsLoggedIn', true)
            commit('setUser', currentUserResponse.data)
        },
        async logout({ commit }) {
            await apiRequest(API_LOGOUT_URL)
            commit('setIsLoggedIn', false)
            commit('setUser', {})

            if (router.currentRoute.value.meta?.requiresAuth) {
                router.push({
                    name: 'Login',
                    query: {
                        redirect: router.currentRoute.value.path
                    }
                })
            }
        }
    },
    namespaced: true
}
