<template>
    <div class="card user-names-container">
        <profile-title :text="$t('profile.titles.names')"/>

        <div v-if="names.length === 0 && isAddNameButtonVisible">
            {{ $t('profile.contactInformation.names.noNames') }}
        </div>

        <div>
            <div class="user-name-manipulate-container" v-for="name in names" :key="name.id">
                <div class="user-name-manipulate-buttons-block">
                    <el-button type="primary" @click="onNameEditButtonClick(name)">
                        <template #default>
                            {{ name.firstName + ' ' + name.middleName + (name.lastName ? ' ' + name.lastName : '') }}
                        </template>
                        <template #icon>
                            <font-awesome-icon icon="pen"/>
                        </template>
                    </el-button>
                    <el-button :loading="checkIsNameUnderDelete(name.id)" :disabled="checkIsNameUnderDelete(name.id)"
                               @click="onNameDelete(name.id)" type="danger">
                        <template #icon>
                            <font-awesome-icon icon="trash"/>
                        </template>
                    </el-button>
                </div>
                <user-name-update-form :pending="editUserNamePending"
                                       class="user-edit-form"
                                       v-model:user-name-form="editedUserNameForm"
                                       v-if="Object.keys(editedUserNameForm).length > 0 && editedUserNameForm.id === name.id"
                                       @update-name="(newName) => usePending(onNameEdit, 'editUserNamePending', newName)"/>
            </div>
        </div>

        <full-width-button class="add-name-button"
                           type="primary"
                           v-if="isAddNameButtonVisible"
                           @click="isAddNameButtonVisible = false">
            {{ $t('profile.contactInformation.names.addName') }}
        </full-width-button>
        <user-name-update-form :pending="createUserNamePending" v-model:user-name-form="newUserNameForm"
                               @update-name="(name) => usePending(onNameCreate, 'createUserNamePending', name)"
                               v-else/>
    </div>
</template>

<script>
import ProfileTitle from '@/components/profile/ProfileTitle.vue'
import UserNameUpdateForm from '@/components/profile/contactData/names/UserNameUpdateForm.vue'
import FullWidthButton from '@/components/FullWidthButton.vue'
import usePending from '@/mixins/usePending'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import apiRequest from '@/helpers/apiRequest'
import { API_CREATE_USER_NAME_URL, API_DELETE_USER_NAME_URL, API_UPDATE_USER_NAME_URL } from '@/api/users'
import getErrorsFromResponse, { openErrorNotification } from '@/helpers/errors'
import { mapMutations } from 'vuex'

export default {
    name: 'UserNamesUpdate',
    mixins: [usePending],
    components: {
        FontAwesomeIcon,
        FullWidthButton,
        UserNameUpdateForm,
        ProfileTitle
    },
    data() {
        return {
            isAddNameButtonVisible: true,
            isNameEditFormVisible: false,
            createUserNamePending: false,
            editUserNamePending: false,
            deletedUserNames: [],
            newUserNameForm: {
                firstName: '',
                middleName: '',
                lastName: ''
            },
            editedUserNameForm: {}
        }
    },
    methods: {
        ...mapMutations('auth', ['deleteUserDataProperty', 'appendUserDataProperty', 'replaceUserDataProperty']),
        async onNameCreate(name) {
            try {
                this.appendUserDataProperty({
                    userDataKey: 'names',
                    userDataValue: (await apiRequest(API_CREATE_USER_NAME_URL, {}, name)).data
                })
                this.isAddNameButtonVisible = true
            } catch (errors) {
                openErrorNotification(getErrorsFromResponse(errors))
            }
        },
        async onNameEdit(name) {
            try {
                await apiRequest(API_UPDATE_USER_NAME_URL, { id: name.id }, name)
                this.replaceUserDataProperty({
                    userDataKey: 'names',
                    userDataValue: name
                })
                this.editedUserNameForm = {}
            } catch (errors) {
                openErrorNotification(getErrorsFromResponse(errors))
            }
        },
        onNameEditButtonClick(name) {
            this.editedUserNameForm = name
        },
        async onNameDelete(id) {
            if (this.checkIsNameUnderDelete(id)) {
                return
            }

            try {
                this.deletedUserNames.push(id)
                await apiRequest(API_DELETE_USER_NAME_URL, { id })
                this.deleteUserDataProperty({
                    userDataKey: 'names',
                    id
                })
            } catch (errors) {
                openErrorNotification(getErrorsFromResponse(errors))
            }

            this.deletedUserNames = this.deletedUserNames.filter(deletingUserName => deletingUserName !== id)
        },
        checkIsNameUnderDelete(id) {
            return this.deletedUserNames.includes(id)
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
.add-name-button {
    margin-top: 20px;
}

.user-name-manipulate-container {
    margin-top: 5px;
}

.user-name-manipulate-buttons-block {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
</style>
