<template>
    <div class="card user-addresses-container">
        <profile-title :text="$t('profile.titles.addresses')"/>

        <no-data-message :data="addresses"
                         :is-add-data-button-visible="isAddDataButtonVisible"
                         :text="$t('profile.contactInformation.addresses.noAddresses')"/>

        <div>
            <div class="user-address-manipulate-container" v-for="address in addresses" :key="address.id">
                <user-data-manipulate-buttons
                    @edit-button-click="onDataEditButtonClick(address)"
                    @delete-button-click="onDataDelete(address.id, userDataKey, API_DELETE_USER_ADDRESS_URL())"
                    :delete-user-data-pending="checkIsDataUnderDelete(address.id)"
                    :user-data-edit-button-text="address.address"/>
                <user-address-update-form :pending="editUserDataPending"
                                       v-model:user-address-form="editedUserDataForm"
                                       v-if="Object.keys(editedUserDataForm).length > 0 && editedUserDataForm.id === address.id"
                                       @update-address="(newAddress) => usePending(onDataEdit, 'editUserDataPending',
                                       newAddress, userDataKey, API_UPDATE_USER_ADDRESS_URL())"/>
            </div>
        </div>

        <add-data-button v-if="isAddDataButtonVisible"
                         @click="isAddDataButtonVisible = false"
                         :text="$t('profile.contactInformation.addresses.addAddress')"/>
        <user-address-update-form :pending="createUserDataPending" v-model:user-address-form="newUserAddressForm"
                               @update-address="(address) => usePending(onDataCreate, 'createUserDataPending', address,
                               userDataKey, API_CREATE_USER_ADDRESS_URL())"
                               v-else/>
    </div>
</template>

<script>
import ProfileTitle from '@/components/profile/ProfileTitle.vue'
import NoDataMessage from '@/components/profile/contactData/NoDataMessage.vue'
import AddDataButton from '@/components/profile/contactData/AddDataButton.vue'
import UserDataManipulateButtons from '@/components/profile/contactData/UserDataManipulateButtons.vue'
import usePending from '@/mixins/usePending'
import userDataManipulation from '@/mixins/userDataManipulation'
import UserAddressUpdateForm from '@/components/profile/contactData/addresses/UserAddressUpdateForm.vue'
import { API_CREATE_USER_ADDRESS_URL, API_DELETE_USER_ADDRESS_URL, API_UPDATE_USER_ADDRESS_URL } from '@/api/users'

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
        UserAddressUpdateForm,
        AddDataButton,
        UserDataManipulateButtons,
        NoDataMessage,
        ProfileTitle
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
.user-address-manipulate-container {
    margin-top: 5px;
}
</style>
