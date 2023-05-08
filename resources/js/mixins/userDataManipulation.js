import { mapMutations } from 'vuex'
import apiRequest from '@/helpers/apiRequest'
import getErrorsFromResponse, { openErrorNotification } from '@/helpers/errors'

export default {
    data() {
        return {
            isAddDataButtonVisible: true,
            createUserDataPending: false,
            editUserDataPending: false,
            deletedUserData: [],
            editedUserDataForm: {}
            // You need to declare userDataKey with name of data key that returns from server as ex. userDataKey: 'names'
        }
    },
    methods: {
        ...mapMutations('auth', ['deleteUserDataProperty', 'appendUserDataProperty', 'replaceUserDataProperty']),
        async onDataCreate(data, userDataKey, apiObject) {
            try {
                this.appendUserDataProperty({
                    userDataKey,
                    userDataValue: (await apiRequest(apiObject, {}, data)).data
                })
                this.isAddDataButtonVisible = true
            } catch (errors) {
                openErrorNotification(getErrorsFromResponse(errors))
            }
        },
        async onDataEdit(data, userDataKey, apiObject) {
            try {
                await apiRequest(apiObject, { id: data.id }, data)
                this.replaceUserDataProperty({
                    userDataKey,
                    userDataValue: data
                })
                this.editedUserDataForm = {}
            } catch (errors) {
                openErrorNotification(getErrorsFromResponse(errors))
            }
        },
        onDataEditButtonClick(data) {
            this.editedUserDataForm = data
        },
        async onDataDelete(id, userDataKey, apiObject) {
            if (this.checkIsDataUnderDelete(id)) {
                return
            }

            try {
                this.deletedUserData.push(id)
                await apiRequest(apiObject, { id })
                this.deleteUserDataProperty({
                    userDataKey,
                    id
                })
            } catch (errors) {
                openErrorNotification(getErrorsFromResponse(errors))
            }

            this.deletedUserData = this.deletedUserData.filter(deletingUserName => deletingUserName !== id)
        },
        checkIsDataUnderDelete(id) {
            return this.deletedUserData.includes(id)
        }
    }
}
