<template>
    <div class="card" v-if="pending || extendedCategories.length > 0">
        <div class="categories-title">
            {{ $t('general.categories') }}:
        </div>
        <!--        TODO: Open category on click -->
        <div v-if="!pending">
            <ul v-for="category in extendedCategories" :key="category.slug" class="product-group">
                <li class="product-category">
                    <el-link href="#">{{ category.title }}</el-link>
                    <el-button class="load-parents-button" v-if="category.parent && !categoriesWithLoadedParent.includes(category.slug)"
                               @click="loadCategoryParents(category)"
                               :loading="categoriesParentsPending.includes(category.slug)">
                        {{ $t('general.expand') }}
                    </el-button>
                </li>
                <li v-if="category.parent">
                    <ul>
                        <li class="category-parent" v-for="parentCategory in category.parents"
                            :key="parentCategory.slug">
                            <el-link href="#">
                                {{ parentCategory.title }}
                            </el-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div v-else>
            <el-skeleton animated/>
        </div>
    </div>
</template>

<script>
import apiRequest from '@/helpers/apiRequest'
import { API_GET_CATEGORY_PARENTS_URL } from '@/api/categories'
import getErrorsFromResponse, { openErrorNotification } from '@/helpers/errors'

export default {
    name: 'ProductCategories',
    props: {
        categories: {
            required: false,
            type: Array,
            default: () => []
        },
        pending: {
            required: true,
            type: Boolean
        }
    },
    data() {
        return {
            extendedCategories: [],
            categoriesWithLoadedParent: [],
            categoriesParentsPending: []
        }
    },
    methods: {
        async loadCategoryParents(category) {
            if (this.categoriesWithLoadedParent.includes(category.slug) || this.categoriesParentsPending.includes(category.slug)) {
                return
            }
            this.categoriesParentsPending.push(category.slug)

            try {
                const parents = (await apiRequest(API_GET_CATEGORY_PARENTS_URL, { slug: category.slug })).data
                const currentCategory = this.extendedCategories.find((searchedCategory) => searchedCategory.slug === category.slug)
                currentCategory.parents = parents
                this.categoriesWithLoadedParent.push(category.slug)
            } catch (errors) {
                openErrorNotification(getErrorsFromResponse(errors))
            } finally {
                this.categoriesParentsPending.splice(category.slug)
            }
        }
    },
    watch: {
        categories() {
            this.extendedCategories = this.categories
        }
    }
}
</script>

<style scoped>
.categories-title {
    font-size: var(--el-font-size-extra-large);
    margin-bottom: 15px;
}

.category-parent {
    margin-left: 20px;
    list-style: circle;
    margin-top: 3px;
}

.product-category {
    display: flex;
    margin-top: 10px;
}
.product-category, .category-parent {
    min-height: 30px;
}

.load-parents-button {
    margin-left: 10px;
}
</style>
