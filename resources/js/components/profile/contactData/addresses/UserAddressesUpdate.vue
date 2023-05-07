<template>
    <div class="card user-addresses-container">
        <profile-title :text="$t('profile.titles.addresses')"/>
    </div>
</template>

<script>
import ProfileTitle from '@/components/profile/ProfileTitle.vue'

export default {
    name: 'UserAddressesUpdate',
    components: { ProfileTitle }
}
</script>

<style scoped>

</style>
