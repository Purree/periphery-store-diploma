<template>
    <el-menu-item class="header-search-container inactive-header-element" index="1">
        <el-input
            class="header-search"
            :placeholder="$t('nav.search')"
            v-model="searchRequest"
            @keyup.enter="onSearchButtonClick()"
        >
            <template v-slot:suffix>
                <el-button class="search-button" @click="onSearchButtonClick()">
                    <font-awesome-icon icon="search"></font-awesome-icon>
                </el-button>
            </template>
        </el-input>
    </el-menu-item>
</template>

<script>
import SearchKeywordsEnum from '@/helpers/enums/SearchKeywordsEnum'

export default {
    name: 'SearchInput',
    data() {
        return {
            searchRequest: ''
        }
    },
    methods: {
        onSearchButtonClick() {
            this.$router.push({
                name: 'Search',
                query: this.searchRequest
                    ? {
                        [SearchKeywordsEnum.searchBy]: this.searchRequest
                    }
                    : {}
            })
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
    width: 100%;
}
</style>
