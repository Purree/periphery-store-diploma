<template>
    <el-header class="header">
        <el-menu
            class="header-menu container"
            default-active="0"
            mode="horizontal"
        >
            <el-menu-item class="header-logo-container" index="0">
                <styled-router-link :underline="false" class="header-logo" :to="{ 'name': 'Home' }">
                    <template v-slot:icon>
                        <store-icon
                            class="header-logo header-icon"
                        />
                    </template>
                </styled-router-link>
            </el-menu-item>

            <div class="header-blocks-divider"/>
            <el-menu-item class="header-search-container" index="1">
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
        </el-menu>
    </el-header>
</template>

<script>
import StyledRouterLink from '@/components/StyledRouterLink.vue'
import StoreIcon from '@/components/header/StoreIcon.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import HeaderMenuRoundedButtonItem from '@/components/header/HeaderMenuRoundedButtonItem.vue'

export default {
    name: 'MainHeader',
    components: {
        HeaderMenuRoundedButtonItem,
        FontAwesomeIcon,
        StoreIcon,
        StyledRouterLink
    }
}
</script>

<style scoped>
.header {
    height: var(--el-header-height);
    padding: 0;
}

.header-blocks-divider {
    flex-grow: 1;
}

:deep(.header-menu) {
    height: var(--el-header-height);
}

:deep(.header-logo, .header-logo-container) {
    height: 100%;
}

:deep(.header-search .el-input__wrapper) {
    border-radius: 100px;
}

:deep(.header-search-container) {
    flex-grow: 2;
    min-width: 205px;
}

:deep(.header-search-container.is-active), :deep(.header-logo-container.is-active) {
    border-bottom-color: transparent !important;
}

:deep(.header-logo-container:active) {
    background-color: var(--el-color-primary) !important;
}

:deep(.header-search-container:focus), :deep(.header-search-container:hover) {
    cursor: default;
    background-color: var(--el-bg-color) !important;
}

:deep(.header-icon img) {
    width: initial;
}
</style>
