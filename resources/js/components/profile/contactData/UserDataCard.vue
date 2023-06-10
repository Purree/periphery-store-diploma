<template>
    <div class="card">
        <profile-title :text="titleText"/>

        <no-data-message :data="data"
                         :is-add-data-button-visible="isAddDataButtonVisible"
                         :text="noDataText"/>

        <div>
            <div class="user-data-manipulate-container" v-for="dataObject in data" :key="dataObject.id">
                <user-data-manipulate-buttons
                    @edit-button-click="$emit('dataEditButtonClick', dataObject)"
                    @delete-button-click="$emit('dataDeleteButtonClick', dataObject.id)"
                    :delete-user-data-pending="checkIsDataUnderDeleteCallback(dataObject.id)"
                    :user-data-edit-button-text="getEditButtonTextCallback(dataObject)"/>
                <slot v-if="Object.keys(editedUserDataForm).length > 0 && editedUserDataForm.id === dataObject.id"
                      name="editDataForm"></slot>
            </div>
        </div>

        <add-data-button v-if="isAddDataButtonVisible"
                         @click="$emit('addDataButtonClick')"
                         :text="addDataText"/>
        <slot name="createDataForm" v-else></slot>
    </div>
</template>

<script>
import NoDataMessage from '@/components/profile/contactData/NoDataMessage.vue'
import UserDataManipulateButtons from '@/components/profile/contactData/UserDataManipulateButtons.vue'
import ProfileTitle from '@/components/profile/ProfileTitle.vue'
import AddDataButton from '@/components/profile/contactData/AddDataButton.vue'

export default {
    name: 'UserDataCard',
    components: {
        AddDataButton,
        ProfileTitle,
        UserDataManipulateButtons,
        NoDataMessage
    },
    props: {
        data: {
            required: true,
            type: Array
        },
        isAddDataButtonVisible: {
            required: true,
            type: Boolean
        },
        getEditButtonTextCallback: {
            required: true,
            type: Function
        },
        checkIsDataUnderDeleteCallback: {
            required: true,
            type: Function
        },
        editedUserDataForm: {
            required: true,
            type: Object
        },
        titleText: {
            required: true,
            type: String
        },
        noDataText: {
            required: true,
            type: String
        },
        addDataText: {
            required: true,
            type: String
        }
    }
}
</script>

<style scoped>
.user-data-manipulate-container {
    margin-top: 5px;
}
</style>
