<template>
    <el-menu-item class="header-search-container inactive-header-element" index="1">
        <el-input
            class="header-search"
            :placeholder="$t('nav.search')"
            v-model="searchRequest"
        >
            <template v-slot:suffix>
                <el-button class="search-button">
                    <font-awesome-icon icon="search"></font-awesome-icon>
                </el-button>
            </template>
        </el-input>
    </el-menu-item>
</template>

<script>
export default {
    name: 'SearchInput',
    data() {
        return {
            searchRequest: ''
        }
    }
}
</script>

<style scoped>
:deep(.header-search .el-input__wrapper) {
    border-radius: var(--el-border-radius-round);
    padding-right: 0;
}

.search-button {
    border-radius: var(--el-border-radius-round);
}

:deep(.header-search-container) {
    flex-grow: 2;
    min-width: 205px;
}
</style>
