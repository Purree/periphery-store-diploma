<template>
    <div class="card user-names-container">
        <!--    @TODO Переделать логику. Всё, кроме user-name-update-form вынести в компонент, а формы обернуть слотами -->
        <profile-title :text="$t('profile.titles.names')"/>

        <no-data-message :data="names"
                         :is-add-data-button-visible="isAddDataButtonVisible"
                         :text="$t('profile.contactInformation.names.noNames')"/>

        <div>
            <div class="user-name-manipulate-container" v-for="name in names" :key="name.id">
                <user-data-manipulate-buttons
                    @edit-button-click="onDataEditButtonClick(name)"
                    @delete-button-click="onDataDelete(name.id, userDataKey, API_DELETE_USER_NAME_URL())"
                    :delete-user-data-pending="checkIsDataUnderDelete(name.id)"
                    :user-data-edit-button-text="generateFullName(name.firstName, name.middleName, name.lastName)"/>
                <user-name-update-form :pending="editUserDataPending"
                                       v-model:user-name-form="editedUserDataForm"
                                       v-if="Object.keys(editedUserDataForm).length > 0 && editedUserDataForm.id === name.id"
                                       @update-name="(newName) => usePending(onDataEdit, 'editUserDataPending',
                                       newName, userDataKey, API_UPDATE_USER_NAME_URL())"/>
            </div>
        </div>

        <add-data-button v-if="isAddDataButtonVisible"
                         @click="isAddDataButtonVisible = false"
                         :text="$t('profile.contactInformation.names.addName')"/>
        <user-name-update-form :pending="createUserDataPending" v-model:user-name-form="newUserNameForm"
                               @update-name="(name) => usePending(onDataCreate, 'createUserDataPending', name,
                               userDataKey, API_CREATE_USER_NAME_URL())"
                               v-else/>
    </div>
</template>

<script>
import ProfileTitle from '@/components/profile/ProfileTitle.vue'
import UserNameUpdateForm from '@/components/profile/contactData/names/UserNameUpdateForm.vue'
import usePending from '@/mixins/usePending'
import NoDataMessage from '@/components/profile/contactData/NoDataMessage.vue'
import UserDataManipulateButtons from '@/components/profile/contactData/UserDataManipulateButtons.vue'
import AddDataButton from '@/components/profile/contactData/AddDataButton.vue'
import userDataManipulation from '@/mixins/userDataManipulation'
import { API_CREATE_USER_NAME_URL, API_DELETE_USER_NAME_URL, API_UPDATE_USER_NAME_URL } from '@/api/users'
import { generateFullName } from '@/helpers/name'

export default {
    name: 'UserNamesUpdate',
    methods: {
        generateFullName,
        API_DELETE_USER_NAME_URL() {
            return API_DELETE_USER_NAME_URL
        },
        API_UPDATE_USER_NAME_URL() {
            return API_UPDATE_USER_NAME_URL
        },
        API_CREATE_USER_NAME_URL() {
            return API_CREATE_USER_NAME_URL
        }
    },
    mixins: [usePending, userDataManipulation],
    components: {
        AddDataButton,
        UserDataManipulateButtons,
        NoDataMessage,
        UserNameUpdateForm,
        ProfileTitle
    },
    data() {
        return {
            newUserNameForm: {
                firstName: '',
                middleName: '',
                lastName: ''
            },
            userDataKey: 'names'
        }
    },
    props: {
        names: {
            required: true,
            type: Array
        }
    }
}
</script>

<style scoped>
.user-name-manipulate-container {
    margin-top: 5px;
}
</style>
