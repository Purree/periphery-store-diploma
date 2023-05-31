<template>
    <div>
        <div class="filter-block">
            <el-checkbox v-model="hasReviews">
                <based-text :title="$t('search.filters.hasReviews')"/>
            </el-checkbox>
        </div>
        <div class="filter-block">
            <based-text :title="$t('search.filters.priceBetween')"/>
            <div class="slider-inputs">
                <el-input v-model="minPrice"></el-input>
                <el-input v-model="maxPrice"></el-input>
            </div>
            <el-slider v-model="priceBetween" range :max="maxAvailablePrice"/>
        </div>
        <div class="filter-block">
            <based-text :title="$t('search.filters.sellers')+':'"/>
            <el-select-v2
                class="filter-select"
                v-model="selectedSellers"
                :disabled="sellersPending"
                filterable
                :options="sellersOptions"
                :placeholder="$t('search.filters.sellers')"
                multiple
            />
        </div>
        <div class="filter-block">
            <based-text :title="$t('search.filters.categories')+':'"/>
            <product-categories-select v-model:selected-categories="selectedCategories"/>
        </div>
        <full-width-button :pending="productsLoadingPending" @click="saveFilters()">
            {{ $t('search.filters.apply') }}
        </full-width-button>
    </div>
</template>

<script>
import BasedText from '@/components/BasedText.vue'
import getErrorsFromResponse, { openErrorNotification } from '@/helpers/errors'
import apiRequest from '@/helpers/apiRequest'
import { API_GET_PRODUCT_SELLERS_URL } from '@/api/products'
import FullWidthButton from '@/components/FullWidthButton.vue'
import searchKeywordsEnum from '@/helpers/enums/SearchKeywordsEnum'
import ProductCategoriesSelect from '@/components/search/ProductCategoriesSelect.vue'

export default {
    name: 'FiltersBlock',
    components: {
        ProductCategoriesSelect,
        FullWidthButton,
        BasedText
    },
    emits: ['updateFilters'],
    computed: {
        minPrice: {
            get() {
                return this.priceBetween[0]
            },
            set(value) {
                this.priceBetween[+(value >= this.maxPrice)] = +value
            }
        },
        maxPrice: {
            get() {
                return this.priceBetween[1]
            },
            set(value) {
                this.priceBetween[1] = +value
            }
        }
    },
    data() {
        return {
            hasReviews: false,
            priceBetween: [],
            categoriesOptions: [],
            selectedCategories: [],
            sellers: [],
            sellersOptions: [],
            selectedSellers: [],
            sellersPending: true,
            maxAvailablePrice: 1000000
        }
    },
    props: {
        productsLoadingPending: {
            required: true,
            type: Boolean
        }
    },
    methods: {
        async loadSellers() {
            try {
                this.sellers = (await apiRequest(API_GET_PRODUCT_SELLERS_URL)).data
                this.sellersOptions = this.sellers.map((seller) => {
                    return {
                        value: seller.id,
                        label: seller.name
                    }
                })

                this.sellersPending = false
            } catch (error) {
                openErrorNotification(getErrorsFromResponse(error))
                console.error(error)
            }
        },
        saveFilters() {
            const filters = {
                [searchKeywordsEnum.hasReviews]: this.hasReviews || null,
                [searchKeywordsEnum.sellers]: this.selectedSellers.join(',') || null,
                [searchKeywordsEnum.categories]: this.selectedCategories.join(',') || null,
                [searchKeywordsEnum.priceBetween]: this.getValidatedPriceBetween()
            }

            this.$emit('updateFilters', filters)
        },
        getValidatedPriceBetween() {
            const [minPrice, maxPrice] = [this.minPrice, this.maxPrice].sort((a, b) => a - b)

            if (minPrice === 0 && maxPrice === this.maxAvailablePrice) {
                return null
            }

            if (maxPrice === this.maxAvailablePrice) {
                return [minPrice, Number.MAX_SAFE_INTEGER]
            }

            return [minPrice, maxPrice]
        },
        getSelectedIdsFromString(selectedItemsIds) {
            return (selectedItemsIds || '')
                .split(',')
                .map(filter => parseInt(filter))
                .filter(filter => filter && !isNaN(filter))
        }
    },
    mounted() {
        this.priceBetween = [0, this.maxAvailablePrice]
        this.loadSellers()

        const cachedFilters = this.$route.query

        const cachedPriceBetween = cachedFilters[searchKeywordsEnum.priceBetween].map(Number)
        this.hasReviews = !!cachedFilters[searchKeywordsEnum.hasReviews]
        this.selectedSellers = this.getSelectedIdsFromString(cachedFilters[searchKeywordsEnum.sellers])
        this.selectedCategories = this.getSelectedIdsFromString(cachedFilters[searchKeywordsEnum.categories])
        this.priceBetween = cachedPriceBetween || [0, this.maxAvailablePrice]
    }
}
</script>

<style scoped>
.slider-inputs {
    display: flex;
}

.filter-select {
    width: 100%;
}

.filter-block {
    margin-bottom: 10px;
}
</style>
