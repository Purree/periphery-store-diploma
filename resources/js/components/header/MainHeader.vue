<template>
    <el-header class="header">
        <el-menu
            :ellipsis="true"
            class="header-menu container"
            :default-active="activeIndex"
            mode="horizontal"
        >
            <root-menu-injector ref="rootMenu" :active-index="activeIndex"
                                :restricted-tab-indexes="restrictedTabIndexes"/>
            <el-menu-item class="header-logo-container" index="0">
                <styled-router-link :underline="false" class="header-logo header-logo-box" :to="{ 'name': 'Home' }">
                    <template v-slot:icon>
                        <store-icon
                            class="header-logo header-icon"
                        />
                    </template>
                </styled-router-link>
            </el-menu-item>

            <div class="header-blocks-divider"/>
            <el-menu-item class="header-search-container inactive-header-element" index="1">
                <el-input
                    class="header-search"
                    placeholder="Type something"
                >
                    <template v-slot:prefix>
                        <font-awesome-icon icon="search"></font-awesome-icon>
                    </template>
                </el-input>
            </el-menu-item>

            <div class="header-blocks-divider"/>
            <header-menu-rounded-button-item text="Profile" icon="user" index="2"/>
            <header-menu-rounded-button-item text="Orders" icon="box" index="3"/>
            <header-menu-rounded-button-item text="Cart" icon="cart-shopping" index="4"/>

            <additional-actions />
        </el-menu>
    </el-header>
</template>

<script>
import StyledRouterLink from '@/components/StyledRouterLink.vue'
import StoreIcon from '@/components/header/StoreIcon.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import HeaderMenuRoundedButtonItem from '@/components/header/HeaderMenuRoundedButtonItem.vue'
import RootMenuInjector from '@/components/header/RootMenuInjector.vue'
import AdditionalActions from '@/components/header/AdditionalActions.vue'

export default {
    name: 'MainHeader',
    components: {
        AdditionalActions,
        RootMenuInjector,
        HeaderMenuRoundedButtonItem,
        FontAwesomeIcon,
        StoreIcon,
        StyledRouterLink
    },
    data() {
        return {
            activeIndex: '0',
            restrictedTabIndexes: [null, '1']
        }
    }
}
</script>

<style scoped>
.header {
    height: var(--el-header-height);
    padding: 0;
    position: fixed;
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

:deep(.header-search .el-input__wrapper) {
    border-radius: 100px;
}

:deep(.header-search-container) {
    flex-grow: 2;
    min-width: 205px;
}

:deep(.header-logo-container) {
    height: 100%;
    padding: 0;
    min-width: 57px;
    width: calc(initial + (var(--el-menu-base-level-padding) * 2)) px;
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
