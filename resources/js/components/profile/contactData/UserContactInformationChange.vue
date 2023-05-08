<template>
    <user-names-update :names="this.user.names" class="user-names-container"/>
    <user-mobiles-update :mobiles="this.user.mobiles" class="user-mobiles-container"/>
    <user-addresses-update :addresses="this.user.addresses" class="user-addresses-container"/>
</template>

<script>
import UserAddressesUpdate from '@/components/profile/contactData/addresses/UserAddressesUpdate.vue'
import UserNamesUpdate from '@/components/profile/contactData/names/UserNamesUpdate.vue'
import UserMobilesUpdate from '@/components/profile/contactData/mobiles/UserMobilesUpdate.vue'
import { mapState } from 'vuex'

export default {
    name: 'UserContactInformationChange',
    components: { UserMobilesUpdate, UserNamesUpdate, UserAddressesUpdate },
    computed: {
        ...mapState('auth', ['user'])
    }
}
</script>

<style scoped>
.user-names-container, .user-addresses-container, .user-mobiles-container {
    margin-top: 10px;
}
</style>
