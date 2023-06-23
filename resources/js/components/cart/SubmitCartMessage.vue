<template>
    <el-dialog
        destroy-on-close
        v-model="isDialogVisible"
        :title="$t('cart.cart')"
        width="90%"
    >
        <div>{{ $t('cart.buyMessage.info') }}</div>

        <el-form label-position="top" v-if="userNames.length > 0 && userAddresses.length > 0 && userMobiles.length > 0">
            <el-form-item :label="$t('profile.titles.names')">
                <el-select-v2 v-model="userName"
                              :options="userNameOptions" class="user-data-select"/>
            </el-form-item>
            <el-form-item :label="$t('profile.titles.mobiles')">
                <el-select-v2 v-model="userMobile"
                              :options="userMobileOptions" class="user-data-select"/>
            </el-form-item>
            <el-form-item :label="$t('profile.titles.addresses')">
                <el-select-v2 v-model="userAddress"
                              :options="userAddressOptions" class="user-data-select"/>
            </el-form-item>
        </el-form>

        <div v-else>
            <styled-router-link class="open-profile-link" :to="{ name: 'Profile' }">
                {{ this.$t('cart.buyMessage.emptyUserData') }}
            </styled-router-link>
        </div>
        <template #footer>
      <span class="dialog-footer">
        <el-button @click="isDialogVisible = false">{{ $t('general.cancel') }}</el-button>
        <el-button type="primary" :loading="pending"
                   :disabled="pending || !(userName && userAddress && userMobile)"
                   @click="$emit('submitCart',{
                        userNameId: userName,
                        userAddressId: userAddress,
                        userMobileId: userMobile
                   })">
          {{ $t('general.save') }}
        </el-button>
      </span>
        </template>
    </el-dialog>
</template>

<script>
import { mapState } from 'vuex'
import StyledRouterLink from '@/components/StyledRouterLink.vue'

export default {
    name: 'SubmitCartMessage',
    components: { StyledRouterLink },
    emits: ['update:isVisible', 'submitCart'],
    data() {
        return {
            userName: null,
            userAddress: null,
            userMobile: null
        }
    },
    props: {
        isVisible: {
            required: true,
            type: Boolean
        },
        pending: {
            required: true,
            type: Boolean
        }
    },
    computed: {
        ...mapState('auth', ['user']),
        isDialogVisible: {
            get() {
                return this.isVisible
            },
            set(value) {
                this.$emit('update:isVisible', value)
            }
        },
        userNames() {
            return this.user.names
        },
        userNameOptions() {
            return this.userNames.map(userName => ({
                value: userName.id,
                label: userName.fullName
            }))
        },
        userMobiles() {
            return this.user.mobiles
        },
        userMobileOptions() {
            return this.userMobiles.map(userMobile => ({
                value: userMobile.id,
                label: userMobile.mobile
            }))
        },
        userAddresses() {
            return this.user.addresses
        },
        userAddressOptions() {
            return this.userAddresses.map(userAddress => ({
                value: userAddress.id,
                label: userAddress.address
            }))
        }
    }
}
</script>

<style scoped>
.user-data-select {
    width: 100%;
}

:deep(.open-profile-link) {
    color: var(--el-color-primary);
}
</style>
