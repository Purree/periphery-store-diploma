<template>
    <user-data-card :user-data-key="userDataKey"
                    :new-user-name-form="newUserMobileForm"
                    :create-user-data-pending="createUserDataPending"
                    :is-add-data-button-visible="isAddDataButtonVisible"
                    :data="mobiles"
                    :title-text="$t('profile.titles.mobiles')"
                    :no-data-text="$t('profile.contactInformation.mobiles.noMobiles')"
                    :add-data-text="$t('profile.contactInformation.mobiles.addMobile')"
                    :edited-user-data-form="editedUserDataForm"
                    :get-edit-button-text-callback="mobile => mobile.mobile"
                    :check-is-data-under-delete-callback="dataId => checkIsDataUnderDelete(dataId)"
                    @data-edit-button-click="name => onDataEditButtonClick(name)"
                    @add-data-button-click="isAddDataButtonVisible = false"
                    @data-delete-button-click="nameId => onDataDelete(nameId, userDataKey, API_DELETE_USER_MOBILE_URL())">
        <template #editDataForm>
            <user-mobile-update-form :pending="editUserDataPending"
                                     v-model:user-mobile-form="editedUserDataForm"
                                     @update-mobile="(newMobile) => usePending(onDataEdit, 'editUserDataPending',
                                         newMobile, userDataKey, API_UPDATE_USER_MOBILE_URL())"/>
        </template>

        <template #createDataForm>
            <user-mobile-update-form :pending="createUserDataPending" v-model:user-mobile-form="newUserMobileForm"
                                     @update-mobile="(mobile) =>
                                 usePending(onDataCreate, 'createUserDataPending', mobile,
                                 userDataKey, API_CREATE_USER_MOBILE_URL())"
            />
        </template>
    </user-data-card>
</template>

<script>
import UserMobileUpdateForm from '@/components/profile/contactData/mobiles/UserMobileUpdateForm.vue'
import userDataManipulation from '@/mixins/userDataManipulation'
import usePending from '@/mixins/usePending'
import { API_CREATE_USER_MOBILE_URL, API_DELETE_USER_MOBILE_URL, API_UPDATE_USER_MOBILE_URL } from '@/api/users'
import UserDataCard from '@/components/profile/contactData/UserDataCard.vue'

export default {
    methods: {
        API_CREATE_USER_MOBILE_URL() {
            return API_CREATE_USER_MOBILE_URL
        },
        API_UPDATE_USER_MOBILE_URL() {
            return API_UPDATE_USER_MOBILE_URL
        },
        API_DELETE_USER_MOBILE_URL() {
            return API_DELETE_USER_MOBILE_URL
        }
    },
    mobile: 'UserMobilesUpdate',
    mixins: [usePending, userDataManipulation],
    components: {
        UserDataCard,
        UserMobileUpdateForm
    },
    data() {
        return {
            newUserMobileForm: {
                mobile: ''
            },
            userDataKey: 'mobiles'
        }
    },
    props: {
        mobiles: {
            required: true,
            type: Array
        }
    }
}
</script>

<style scoped>

</style>
