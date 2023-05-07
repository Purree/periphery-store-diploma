<template>
    <div class="profile-container" v-if="checkIsUserHasPermission(PermissionsEnum.change_own_data)">
        <profile-title :text="$t('profile.titles.personalInformation')"/>
        <user-avatar-change></user-avatar-change>
        <div>
            <main-user-information-change></main-user-information-change>
        </div>
    </div>
    <user-contact-information-change/>
    <div class="products-for-sale-container card" v-if="canUserManipulateProducts">
        <profile-title :text="$t('profile.titles.yourProducts')"/>
        <seller-products/>
    </div>
</template>

<script>
import MainUserInformationChange from '@/components/profile/MainUserInformationChange.vue'
import UserAvatarChange from '@/components/profile/UserAvatarChange.vue'
import auth from '@/mixins/auth'
import PermissionsEnum from '@/helpers/enums/PermissionsEnum'
import SellerProducts from '@/views/user/SellerProducts.vue'
import UserContactInformationChange from '@/components/profile/contactData/UserContactInformationChange.vue'
import ProfileTitle from '@/components/profile/ProfileTitle.vue'

export default {
    name: 'Profile',
    computed: {
        PermissionsEnum() {
            return PermissionsEnum
        },
        canUserManipulateProducts() {
            return this.checkIsUserHasAnyPermission(
                PermissionsEnum.create_products,
                PermissionsEnum.update_own_products,
                PermissionsEnum.delete_own_products,
                PermissionsEnum.manipulate_all_products
            )
        }
    },
    mixins: [auth],
    components: {
        ProfileTitle,
        UserContactInformationChange,
        SellerProducts,
        UserAvatarChange,
        MainUserInformationChange
    }
}
</script>

<style scoped>
.profile-container {
    background: var(--el-bg-color);
    padding-inline: 20px;
    padding-top: 20px;
    padding-bottom: 1px;
    border-bottom-left-radius: var(--el-border-radius-round);
    border-bottom-right-radius: var(--el-border-radius-round);
}

.products-for-sale-container {
    margin-top: 10px;
    min-height: 100px;
}
</style>
