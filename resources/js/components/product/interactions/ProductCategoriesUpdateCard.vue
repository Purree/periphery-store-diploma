<template>
    <div>
        <errors-alert :errors="errors"/>
        <product-categories-select v-model:selected-categories="selectedCategories"
                                   :pending="pending"
                                   class="product-categories-select"/>
        <full-width-button class="categories-save-button"
                           :pending="pending"
                           @click="usePending(updateCategories, 'updateCategoriesPending')">
            {{ $t('general.save') }}
        </full-width-button>
    </div>
</template>

<script>
import ProductCategoriesSelect from '@/components/search/ProductCategoriesSelect.vue'
import FullWidthButton from '@/components/FullWidthButton.vue'
import ErrorsAlert from '@/components/errors/ErrorsAlert.vue'
import apiRequest from '@/helpers/apiRequest'
import getErrorsFromResponse from '@/helpers/errors'
import { API_UPDATE_PRODUCT_CATEGORIES_URL } from '@/api/products'
import usePending from '@/mixins/usePending'

export default {
    name: 'ProductCategoriesUpdateCard',
    mixins: [usePending],
    emits: ['updateCategories'],
    components: {
        ErrorsAlert,
        FullWidthButton,
        ProductCategoriesSelect
    },
    data() {
        return {
            updateCategoriesPending: false,
            selectedCategories: [],
            errors: []
        }
    },
    props: {
        categories: {
            required: true,
            type: Array
        },
        externalPending: {
            required: false,
            type: Boolean,
            default: false
        },
        productSlug: {
            required: true,
            type: String
        }
    },
    methods: {
        async updateCategories() {
            this.errors = {}

            try {
                await apiRequest(
                    API_UPDATE_PRODUCT_CATEGORIES_URL,
                    { slug: this.productSlug },
                    { categories: this.selectedCategories }
                )

                this.$emit('updateCategories')
            } catch (errors) {
                this.errors = getErrorsFromResponse(errors)
            }
        }
    },
    computed: {
        pending() {
            return this.externalPending || this.updateCategoriesPending
        }
    },
    watch: {
        categories() {
            this.selectedCategories = this.categories.map((category) => category.slug)
        }
    }
}
</script>

<style scoped>
.product-categories-select {
    width: 100%;
}

.categories-save-button {
    margin-top: 10px;
}
</style>
