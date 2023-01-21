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
        login({ commit }) {
            commit('setIsLoggedIn', true)

            apiRequest(API_CURRENT_USER_URL).then((response) => {
                commit('setUser', response.data)

                if (router.currentRoute.params.redirect) {
                    router.push(router.currentRoute.params.redirect)
                } else {
                    router.push('/')
                }
            }).catch(errors => {
                console.log(errors.response)
            })
        },
        logout({ commit }) {
            return apiRequest(API_LOGOUT_URL)
                .catch((error) => {
                    console.log(error.response.data)
                }).then(() => {
                    commit('setIsLoggedIn', false)
                })
        }
    },
    namespaced: true
}
