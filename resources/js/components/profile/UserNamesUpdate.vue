<template>
    <div class="card user-names-container">
        <profile-title :text="$t('profile.titles.names')"/>
    </div>
</template>

<script>
import ProfileTitle from '@/components/profile/ProfileTitle.vue'

export default {
    name: 'UserNamesUpdate',
    components: { ProfileTitle }
}
</script>

<style scoped>

</style>
