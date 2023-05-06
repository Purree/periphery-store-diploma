<template>
    <user-names-update class="user-names-container"/>
    <user-mobiles-update class="user-mobiles-container"/>
    <user-addresses-update class="user-addresses-container"/>
</template>

<script>
import UserAddressesUpdate from '@/components/profile/UserAddressesUpdate.vue'
import UserNamesUpdate from '@/components/profile/UserNamesUpdate.vue'
import UserMobilesUpdate from '@/components/profile/UserMobilesUpdate.vue'

export default {
    name: 'UserContactInformationChange',
    components: { UserMobilesUpdate, UserNamesUpdate, UserAddressesUpdate }
}
</script>

<style scoped>
.user-names-container, .user-addresses-container, .user-mobiles-container {
    margin-top: 10px;
}
</style>
