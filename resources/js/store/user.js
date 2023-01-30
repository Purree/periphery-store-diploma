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
        isLoggedIn(state) {
            return state.isLoggedIn
        }
    },
    actions: {
        async login({ commit }) {
            try {
                const currentUserResponse = await apiRequest(API_CURRENT_USER_URL)
                commit('setIsLoggedIn', true)
                commit('setUser', currentUserResponse.data)

                router.push(router.currentRoute.params?.redirect ?? '/')
            } catch (error) {
                console.log(error)
                console.log(error.response)
            }
        },
        async logout({ commit }) {
            try {
                await apiRequest(API_LOGOUT_URL)
                commit('setIsLoggedIn', false)
                commit('setUser', {})
            } catch (error) {
                console.log(error)
                console.log(error.response.data)
            }
        }
    },
    namespaced: true
}
