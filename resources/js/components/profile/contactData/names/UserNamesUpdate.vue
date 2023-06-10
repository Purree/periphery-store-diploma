<template>
    <!-- @TODO: Уменьшить количество параметров -->
    <user-data-card :user-data-key="userDataKey"
                    :new-user-name-form="newUserNameForm"
                    :create-user-data-pending="createUserDataPending"
                    :is-add-data-button-visible="isAddDataButtonVisible"
                    :data="names"
                    :edited-user-data-form="editedUserDataForm"
                    :title-text="$t('profile.titles.names')"
                    :no-data-text="$t('profile.contactInformation.names.noNames')"
                    :add-data-text="$t('profile.contactInformation.names.addName')"
                    :get-edit-button-text-callback="name => generateFullName(name.firstName, name.middleName, name.lastName)"
                    :check-is-data-under-delete-callback="dataId => checkIsDataUnderDelete(dataId)"
                    @data-edit-button-click="name => onDataEditButtonClick(name)"
                    @add-data-button-click="isAddDataButtonVisible = false"
                    @data-delete-button-click="nameId => onDataDelete(nameId, userDataKey, API_DELETE_USER_NAME_URL())">
        <template #editDataForm>
            <user-name-update-form :pending="editUserDataPending"
                                   v-model:user-name-form="editedUserDataForm"
                                   @update-name="(newName) => usePending(onDataEdit, 'editUserDataPending',
                                   newName, userDataKey, API_UPDATE_USER_NAME_URL())"/>
        </template>
        <template #createDataForm>
            <user-name-update-form :pending="createUserDataPending" v-model:user-name-form="newUserNameForm"
                                   @update-name="(name) => usePending(onDataCreate, 'createUserDataPending', name,
                               userDataKey, API_CREATE_USER_NAME_URL())"/>
        </template>
    </user-data-card>
</template>

<script>
import UserNameUpdateForm from '@/components/profile/contactData/names/UserNameUpdateForm.vue'
import usePending from '@/mixins/usePending'
import userDataManipulation from '@/mixins/userDataManipulation'
import { API_CREATE_USER_NAME_URL, API_DELETE_USER_NAME_URL, API_UPDATE_USER_NAME_URL } from '@/api/users'
import { generateFullName } from '@/helpers/name'
import UserDataCard from '@/components/profile/contactData/UserDataCard.vue'

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
        UserDataCard,
        UserNameUpdateForm
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

</style>
