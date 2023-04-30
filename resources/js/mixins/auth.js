import { mapState } from 'vuex'
import { isUserHasPermissions, isUserHasRole } from '@/helpers/accessRights'

export default {
    methods: {
        checkIsLoggedIn() {
            return this.$store.getters['auth/isLoggedIn']
        },
        checkIsUserHasRole(role) {
            return isUserHasRole(this.user, role)
        },
        checkIsUserHasPermission(permission) {
            return this.checkIsUserHasPermissions(permission)
        },
        checkIsUserHasPermissions(...permissions) {
            return isUserHasPermissions(this.user, ...permissions)
        }
    },
    computed: {
        ...mapState('auth', ['user'])
    }
}
