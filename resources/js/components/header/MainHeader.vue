<template>
    <el-header class="header">
        <el-menu
            :router="true"
            :ellipsis="true"
            :class="'header-menu ' + containerClass"
            :default-active="activeIndex"
            mode="horizontal"
        >
            <root-menu-injector ref="rootMenu" :active-index="activeIndex"
                                :restricted-tab-indexes="restrictedTabIndexes"/>
            <header-menu-item class="header-logo-container" :index="this.getRoutePathByName('Home')">
                <store-icon
                    class="header-logo header-icon"
                />
            </header-menu-item>

            <div class="header-blocks-divider"/>
            <search-input class="inactive-header-element header-search-container"/>

            <div class="header-blocks-divider"/>
            <header-menu-rounded-button-item class="mobile-home-button-container"
                                             :index="this.getRoutePathByName('Home')"
                                             text=""
                                             icon="home" />

            <div class="header-blocks-divider"/>
            <header-menu-rounded-button-item
                :text="checkIsLoggedIn() ? $t('nav.buttons.profile') : $t('authorization.login')"
                :index="this.getRoutePathByNameIfLoggedInElseGetLoginRoute('Profile')">
                <template v-slot:icon>
                    <user-avatar></user-avatar>
                </template>
            </header-menu-rounded-button-item>
            <header-menu-rounded-button-item v-if="checkIsLoggedIn()"
                                             :text="$t('nav.buttons.orders')" icon="box"
                                             :index="this.getRoutePathByNameIfLoggedInElseGetLoginRoute('Home')"/>
            <header-menu-rounded-button-item v-if="checkIsLoggedIn()"
                                             :text="$t('nav.buttons.cart')" icon="cart-shopping"
                                             :index="this.getRoutePathByNameIfLoggedInElseGetLoginRoute('Home')"/>

            <additional-actions/>
        </el-menu>
    </el-header>
</template>

<script>
import StoreIcon from '@/components/header/StoreIcon.vue'
import HeaderMenuRoundedButtonItem from '@/components/header/HeaderMenuRoundedButtonItem.vue'
import RootMenuInjector from '@/components/header/RootMenuInjector.vue'
import AdditionalActions from '@/components/header/AdditionalActions.vue'
import route from '@/mixins/route'
import auth from '@/mixins/auth'
import UserAvatar from '@/components/profile/UserAvatar.vue'
import HeaderMenuItem from '@/components/header/HeaderMenuItem.vue'
import SearchInput from '@/components/header/search/SearchInput.vue'

export default {
    name: 'MainHeader',
    mixins: [route, auth],
    components: {
        SearchInput,
        HeaderMenuItem,
        UserAvatar,
        AdditionalActions,
        RootMenuInjector,
        HeaderMenuRoundedButtonItem,
        StoreIcon
    },
    data() {
        return {
            activeIndex: '/',
            restrictedTabIndexes: [null, '1']
        }
    },
    mounted() {
        this.activeIndex = this.$route.path
    },
    props: {
        containerClass: {
            required: false,
            type: String,
            default: 'container'
        }
    }
}
</script>

<style scoped lang="scss">
@import "@@/_variables.scss";
@import "@@/mixins.scss";

.header {
    height: var(--el-header-height);
    padding: 0;
    position: fixed;
    z-index: 999;
    width: 100%;
}

.header-blocks-divider {
    flex-grow: 1;
}

.el-menu--popup .el-menu-item {
    margin-bottom: 10px;
}

:deep(.header-menu) {
    height: var(--el-header-height);
}

:deep(.header-logo) {
    height: 100%;
}

:deep(.header-logo-container) {
    height: 100%;
    padding: 0;
    min-width: 57px;
    width: calc(initial + (var(--el-menu-base-level-padding) * 2)) px;
    @include max-screen-size('mobile') {
        display: none;
    }
}

:deep(.mobile-home-button-container) {
    @include screen-size('tablet') {
        display: none;
    }
}

@include max-screen-size('mobile') {
    .header-search-container {
        padding-right: 0;
    }
    :deep(.mobile-home-button-container) {
        padding: 0 10px;
    }

    :deep(.el-sub-menu) {
        max-width: 30px;
    }

    :deep(.el-sub-menu__title) {
        padding: 0;
    }
}

:deep(.inactive-header-element.is-active), :deep(.header-logo-container.is-active) {
    border-bottom-color: transparent !important;
}

:deep(.header-logo-container:active) {
    background-color: var(--el-color-primary) !important;
}

:deep(.inactive-header-element:focus), :deep(.inactive-header-element:hover) {
    cursor: default;
    background-color: initial !important;
}

:deep(.header-icon img) {
    width: initial;
}
</style>
