<template>
    <div class="card user-mobiles-container">
        <profile-title :text="$t('profile.titles.mobiles')"/>
    </div>
</template>

<script>
import ProfileTitle from '@/components/profile/ProfileTitle.vue'

export default {
    name: 'UserMobilesUpdate',
    components: { ProfileTitle }
}
</script>

<style scoped>

</style>
