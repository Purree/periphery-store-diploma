import { mapMutations } from 'vuex'
import apiRequest from '@/helpers/apiRequest'
import useErrorsCatch from '@/mixins/useErrorsCatch'

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
            await useErrorsCatch.methods.useErrorsCatch(async() => {
                this.appendUserDataProperty({
                    userDataKey,
                    userDataValue: (await apiRequest(apiObject, {}, data)).data
                })
                this.isAddDataButtonVisible = true
            })
        },
        async onDataEdit(data, userDataKey, apiObject) {
            await useErrorsCatch.methods.useErrorsCatch(async() => {
                const updatedData = (await apiRequest(apiObject, { id: data.id }, data)).data

                this.deleteUserDataProperty({
                    userDataKey,
                    id: data.id
                })
                this.appendUserDataProperty({
                    userDataKey,
                    userDataValue: updatedData
                })
                this.editedUserDataForm = {}
            })
        },
        onDataEditButtonClick(data) {
            this.editedUserDataForm = data
        },
        async onDataDelete(id, userDataKey, apiObject) {
            if (this.checkIsDataUnderDelete(id)) {
                return
            }

            await useErrorsCatch.methods.useErrorsCatch(async() => {
                this.deletedUserData.push(id)
                await apiRequest(apiObject, { id })
                this.deleteUserDataProperty({
                    userDataKey,
                    id
                })
            })

            this.deletedUserData = this.deletedUserData.filter(deletingUserName => deletingUserName !== id)
        },
        checkIsDataUnderDelete(id) {
            return this.deletedUserData.includes(id)
        }
    }
}
