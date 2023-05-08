<template>
    <div class="card user-mobiles-container">
        <!--    @TODO Переделать логику. Всё, кроме user-mobile-update-form вынести в компонент, а формы
    обернуть слотами -->
        <profile-title :text="$t('profile.titles.mobiles')"/>

        <no-data-message :data="mobiles"
                         :is-add-data-button-visible="isAddDataButtonVisible"
                         :text="$t('profile.contactInformation.mobiles.noMobiles')"/>

        <div>
            <div class="user-mobile-manipulate-container" v-for="mobile in mobiles" :key="mobile.id">
                <user-data-manipulate-buttons
                    @edit-button-click="onDataEditButtonClick(mobile)"
                    @delete-button-click="onDataDelete(mobile.id, userDataKey, API_DELETE_USER_MOBILE_URL())"
                    :delete-user-data-pending="checkIsDataUnderDelete(mobile.id)"
                    :user-data-edit-button-text="mobile.mobile"/>
                <user-mobile-update-form :pending="editUserDataPending"
                                         v-model:user-mobile-form="editedUserDataForm"
                                         v-if="Object.keys(editedUserDataForm).length > 0 &&
                                         editedUserDataForm.id === mobile.id"
                                         @update-mobile="(newMobile) => usePending(onDataEdit, 'editUserDataPending',
                                         newMobile, userDataKey, API_UPDATE_USER_MOBILE_URL())"/>
            </div>
        </div>

        <add-data-button v-if="isAddDataButtonVisible"
                         @click="isAddDataButtonVisible = false"
                         :text="$t('profile.contactInformation.mobiles.addMobile')"/>
        <user-mobile-update-form :pending="createUserDataPending" v-model:user-mobile-form="newUserMobileForm"
                                 @update-mobile="(mobile) =>
                                 usePending(onDataCreate, 'createUserDataPending', mobile,
                                 userDataKey, API_CREATE_USER_MOBILE_URL())"
                                 v-else/>
    </div>
</template>

<script>
import ProfileTitle from '@/components/profile/ProfileTitle.vue'
import NoDataMessage from '@/components/profile/contactData/NoDataMessage.vue'
import AddDataButton from '@/components/profile/contactData/AddDataButton.vue'
import UserDataManipulateButtons from '@/components/profile/contactData/UserDataManipulateButtons.vue'
import UserMobileUpdateForm from '@/components/profile/contactData/mobiles/UserMobileUpdateForm.vue'
import userDataManipulation from '@/mixins/userDataManipulation'
import usePending from '@/mixins/usePending'
import { API_CREATE_USER_MOBILE_URL, API_DELETE_USER_MOBILE_URL, API_UPDATE_USER_MOBILE_URL } from '@/api/users'

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
        UserMobileUpdateForm,
        UserDataManipulateButtons,
        AddDataButton,
        NoDataMessage,
        ProfileTitle
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
.user-mobile-manipulate-container {
    margin-top: 5px;
}
</style>
