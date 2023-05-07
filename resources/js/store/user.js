import { API_LOGOUT_URL } from '@/api/auth.js'
import router from '@/routes/index.js'
import apiRequest from '@/helpers/apiRequest'
import { API_CURRENT_USER_URL } from '@/api/users'
import { GuardedRouteMetaEnum } from '@/helpers/enums/GuardedRouteMetaEnum'

export default {
    state: {
        isLoggedIn: false,
        user: {},
        userPromise: null
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        deleteUserDataProperty(state, {
            userDataKey,
            id
        }) {
            state.user[userDataKey] = state.user[userDataKey].filter(userName => userName.id !== id)
        },
        appendUserDataProperty(state, {
            userDataKey,
            userDataValue
        }) {
            state.user[userDataKey].push(userDataValue)
        },
        replaceUserDataProperty(state, {
            userDataKey,
            userDataValue
        }) {
            state.user[userDataKey] =
                state.user[userDataKey].map(userData => userData.id === userDataValue.id
                    ? { ...userData, ...userDataValue }
                    : userData)
        },
        setUserPromise(state, userPromise) {
            state.userPromise = userPromise
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
        getUserPromise(state) {
            return state.userPromise
        },
        isLoggedIn(state) {
            return state.isLoggedIn
        }
    },
    actions: {
        async changeStatusToLoggedIn({
            commit,
            getters
        }) {
            let getUserPromise = getters.getUserPromise
            if (getUserPromise === null) {
                getUserPromise = apiRequest(API_CURRENT_USER_URL)
                commit('setUserPromise', getUserPromise)
            }
            const currentUserResponse = await getUserPromise
            commit('setUserPromise', null)
            commit('setIsLoggedIn', true)
            commit('setUser', currentUserResponse.data)
        },
        async logout({ commit }) {
            await apiRequest(API_LOGOUT_URL)
            commit('setIsLoggedIn', false)
            commit('setUser', {})

            if (router.currentRoute.value.meta[GuardedRouteMetaEnum.requiresAuth]) {
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
