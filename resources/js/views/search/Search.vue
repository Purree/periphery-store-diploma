<template>
    <div class="search-by-title-container">
        <based-text class="search-by-title" :title="searchBy"/>
    </div>
    <div class="search-container">
        <div class="search-filters-container">
            <div class="search-filters-block card">
                <filters-block :products-loading-pending="productsPending" @update-filters="updateFilters"/>
            </div>
        </div>
        <div>
            <div v-if="!productsPending || products.length > 0">
                <div v-if="products.length > 0">
                    <product-card v-for="product in products"
                                  :product="product"
                                  :key="product.slug"
                                  :is-show-add-to-cart-button="true"/>
                </div>
                <div v-if="!productsPending && products.length === 0" class="empty-products-error card">
                    {{ $t('search.noProducts') }}
                </div>
            </div>
            <div v-else>
                <el-skeleton v-for="key in 20" :key="key" class="product-card card" animated/>
            </div>

            <full-width-button :pending="productsPending" @click="loadProducts()"
                               v-if="productsPagination?.next_cursor">{{ $t('general.showMore') }}
            </full-width-button>
        </div>
    </div>
</template>

<script>
import allProducts from '@/mixins/allProducts'
import usePending from '@/mixins/usePending'
import searchKeywordsEnum from '@/helpers/enums/SearchKeywordsEnum'
import BasedText from '@/components/BasedText.vue'
import FiltersBlock from '@/components/search/FiltersBlock.vue'
import FullWidthButton from '@/components/FullWidthButton.vue'
import ProductCard from '@/components/search/ProductCard.vue'

export default {
    name: 'Search',
    components: {
        ProductCard,
        FullWidthButton,
        FiltersBlock,
        BasedText
    },
    mixins: [allProducts, usePending],
    data() {
        return {
            products: [],
            productsPending: false,
            searchBy: ''
        }
    },
    methods: {
        reloadProducts() {
            this.products = []
            this.productsPagination = []
            this.loadProducts()
        },
        loadProducts() {
            const filters = this.$route.query

            this.searchBy = filters[searchKeywordsEnum.searchBy]
            this.usePending(
                this.pushProductsToArray,
                'productsPending',
                this.productsPagination.next_cursor,
                filters
            )
        },
        updateFilters(filters) {
            const allFilters = {
                [searchKeywordsEnum.searchBy]: this.searchBy,
                ...filters
            }

            this.$router.push({
                name: 'Search',
                query: this.deleteNullableFilters(allFilters)
            })
        },
        deleteNullableFilters(filters) {
            const notNullFilters = {}
            Object.keys(filters).forEach(key => {
                const filterValue = filters[key]

                if (filterValue) {
                    notNullFilters[key] = filterValue
                }
            })

            return Object.assign(notNullFilters)
        }
    },
    mounted() {
        this.reloadProducts()
    },
    watch: {
        $route() {
            this.reloadProducts()
        }
    }
}
</script>

<style scoped lang="scss">
@import "@@/_variables.scss";
@import "@@/mixins.scss";

.search-by-title-container {
    font-weight: bold;
    margin-block: 10px;
}

.search-by-title {
    font-size: var(--el-font-size-super-large);
}

.search-container {
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-column-gap: 20px;
    height: 100px;
    @include max-screen-size('big-tablet') {
        display: flex;
        flex-direction: column;
    }
}

:deep(.product-card) {
    margin-bottom: 20px;
    height: 200px;
}

.empty-products-error {
    font-weight: bold;
    font-size: var(--el-font-size-large);
    color: var(--el-color-error);
}

.search-filters-container {
    position: relative;
    margin-bottom: 20px;
}

.search-filters-block {
    position: sticky;
    top: 0;
}
</style>
