<template>
    <el-select-v2
        class="filter-select"
        v-model="computedSelectedCategories"
        :disabled="categoriesPending || pending"
        filterable
        :options="categoriesOptions"
        :placeholder="$t('search.filters.categories')"
        multiple
        v-bind="$attrs"
    />
</template>

<script>
import apiRequest from '@/helpers/apiRequest'
import { API_GET_ALL_CATEGORIES_URL } from '@/api/categories'
import getErrorsFromResponse, { openErrorNotification } from '@/helpers/errors'

export default {
    name: 'ProductCategoriesSelect',
    emits: ['update:selectedCategories'],
    data() {
        return {
            categoriesOptions: [],
            categoriesPending: true
        }
    },
    props: {
        selectedCategories: {
            required: true,
            type: Array
        },
        pending: {
            required: false,
            type: Boolean,
            default: false
        }
    },
    computed: {
        computedSelectedCategories: {
            get() {
                return this.selectedCategories
            },
            set(value) {
                this.$emit('update:selectedCategories', value)
            }
        }
    },
    methods: {
        bindCategories(categories) {
            this.categoriesOptions = categories.map((category) => {
                return {
                    value: category.slug,
                    label: category.title
                }
            })
        },
        async loadCategories() {
            try {
                const categories = (await apiRequest(API_GET_ALL_CATEGORIES_URL)).data
                this.bindCategories(categories)

                this.categoriesPending = false
            } catch (error) {
                openErrorNotification(getErrorsFromResponse(error))
            }
        }
    },
    async mounted() {
        await this.loadCategories()
    }
}
</script>

<style scoped>

</style>
