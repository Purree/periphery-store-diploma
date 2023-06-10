<template>
    <user-data-card :user-data-key="userDataKey"
                    :new-user-name-form="newUserAddressForm"
                    :create-user-data-pending="createUserDataPending"
                    :is-add-data-button-visible="isAddDataButtonVisible"
                    :data="addresses"
                    :edited-user-data-form="editedUserDataForm"
                    :get-edit-button-text-callback="address => address.address"
                    :title-text="$t('profile.titles.addresses')"
                    :no-data-text="$t('profile.contactInformation.addresses.noAddresses')"
                    :add-data-text="$t('profile.contactInformation.addresses.addAddress')"
                    :check-is-data-under-delete-callback="dataId => checkIsDataUnderDelete(dataId)"
                    @data-edit-button-click="name => onDataEditButtonClick(name)"
                    @add-data-button-click="isAddDataButtonVisible = false"
                    @data-delete-button-click="nameId => onDataDelete(nameId, userDataKey, API_DELETE_USER_ADDRESS_URL())">
        <template #editDataForm>
            <user-address-update-form :pending="editUserDataPending"
                                      v-model:user-address-form="editedUserDataForm"
                                      @update-address="(newAddress) => usePending(onDataEdit, 'editUserDataPending',
                                       newAddress, userDataKey, API_UPDATE_USER_ADDRESS_URL())"/>
        </template>

        <template #createDataForm>
            <user-address-update-form :pending="createUserDataPending" v-model:user-address-form="newUserAddressForm"
                                      @update-address="(address) => usePending(onDataCreate, 'createUserDataPending', address,
                               userDataKey, API_CREATE_USER_ADDRESS_URL())"
            />
        </template>
    </user-data-card>
</template>

<script>
import usePending from '@/mixins/usePending'
import userDataManipulation from '@/mixins/userDataManipulation'
import UserAddressUpdateForm from '@/components/profile/contactData/addresses/UserAddressUpdateForm.vue'
import { API_CREATE_USER_ADDRESS_URL, API_DELETE_USER_ADDRESS_URL, API_UPDATE_USER_ADDRESS_URL } from '@/api/users'
import UserDataCard from '@/components/profile/contactData/UserDataCard.vue'

export default {
    methods: {
        API_CREATE_USER_ADDRESS_URL() {
            return API_CREATE_USER_ADDRESS_URL
        },
        API_UPDATE_USER_ADDRESS_URL() {
            return API_UPDATE_USER_ADDRESS_URL
        },
        API_DELETE_USER_ADDRESS_URL() {
            return API_DELETE_USER_ADDRESS_URL
        }
    },
    address: 'UserAddressesUpdate',
    mixins: [usePending, userDataManipulation],
    components: {
        UserDataCard,
        UserAddressUpdateForm
    },
    data() {
        return {
            newUserAddressForm: {
                address: ''
            },
            userDataKey: 'addresses'
        }
    },
    props: {
        addresses: {
            required: true,
            type: Array
        }
    }
}
</script>

<style scoped>

</style>
