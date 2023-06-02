<template>
    <el-form label-position="top" :rules="validationRules" ref="form" :model="product">
        <errors-alert :errors="{...requestErrors, ...errors}"/>
        <product-update-text-data-inputs v-model:product="product"/>

        <product-update-preview-form v-model:product-preview-image="product.previewImage"
                                     @delete-previous-product-preview="usePending(onPreviousProductPreviewDelete, 'previousProductPreviewImageDeletePending')"
                                     :pending="generalPending"
                                     :previous-product-preview-image-url="previousProductPreviewImageUrl"/>

        <product-update-complex-data-inputs v-model:product="product"/>
        <div class="product-manipulate-buttons">
            <full-width-button :pending="generalPending" @click="onSubmit()">{{
                    $t('general.save')
                }}
            </full-width-button>
            <product-delete-button @delete-product="$emit('deleteProduct')"
                                   v-if="productToUpdate?.slug"
                                   :slug="productToUpdate?.slug"/>
        </div>
    </el-form>
</template>

<script>
import FullWidthButton from '@/components/FullWidthButton.vue'
import ErrorsAlert from '@/components/errors/ErrorsAlert.vue'
import ProductDeleteButton from '@/components/product/interactions/ProductDeleteButton.vue'
import usePending from '@/mixins/usePending'
import apiRequest from '@/helpers/apiRequest'
import { API_DELETE_PRODUCT_PREVIEW_URL } from '@/api/products'
import getErrorsFromResponse from '@/helpers/errors'
import ProductUpdatePreviewForm from '@/components/product/interactions/updateForm/ProductUpdatePreviewForm.vue'
import ProductUpdateTextDataInputs from '@/components/product/interactions/updateForm/ProductUpdateTextDataInputs.vue'
import ProductUpdateComplexDataInputs
    from '@/components/product/interactions/updateForm/ProductUpdateComplexDataInputs.vue'

export default {
    name: 'ProductUpdateForm',
    computed: {
        generalPending() {
            return this.pending || this.previousProductPreviewImageDeletePending
        }
    },
    mixins: [usePending],
    components: {
        ProductUpdateComplexDataInputs,
        ProductUpdateTextDataInputs,
        ProductUpdatePreviewForm,
        ProductDeleteButton,
        ErrorsAlert,
        FullWidthButton
    },
    emits: ['updateProduct', 'deleteProduct'],
    data() {
        return {
            product: {
                title: '',
                metaTitle: '',
                description: '',
                previewImage: [],
                price: -1,
                discount: 0,
                quantity: 0,
                isAvailable: false
            },
            previousProductPreviewImageUrl: '',
            previousProductPreviewImageDeletePending: false,
            validationRules: {
                title: { required: true },
                metaTitle: { required: true },
                description: { required: true },
                price: { type: 'number' },
                discount: { type: 'number' },
                quantity: { type: 'number' },
                isAvailable: { required: true }
            },
            errors: {}
        }
    },
    props: {
        pending: {
            required: false,
            type: Boolean,
            default: false
        },
        requestErrors: {
            required: false,
            type: Object,
            default: () => {
            }
        },
        productToUpdate: {
            required: false,
            type: Object,
            default: () => {
            }
        }
    },
    methods: {
        async onSubmit() {
            this.errors = {}

            await this.$refs.form.validate((valid, fields) => {
                if (valid) {
                    this.onFormValidation()
                } else {
                    this.errors = {
                        ...this.errors,
                        ...{ validation: [this.$t('profile.mainInformation.errors.validationMessage')] }
                    }
                }
            })
        },
        async onPreviousProductPreviewDelete() {
            try {
                await apiRequest(API_DELETE_PRODUCT_PREVIEW_URL, { slug: this.productToUpdate.slug })

                this.previousProductPreviewImageUrl = ''
            } catch (e) {
                this.errors = getErrorsFromResponse(e)
            }
        },
        onFormValidation() {
            const product = Object.assign({}, this.product)
            product.previewImage = product.previewImage.length === 1 ? product.previewImage[0].raw : null
            product.isAvailable = product.isAvailable ? '1' : '0'

            const productFormData = new FormData()
            Object.keys(product).forEach((key) => {
                if (product[key] !== null) {
                    productFormData.append(key, product[key])
                }
            })

            this.$emit('updateProduct', productFormData)
        }
    },
    watch: {
        productToUpdate() {
            const cachedProduct = this.productToUpdate
            this.previousProductPreviewImageUrl = cachedProduct.previewImage
            delete cachedProduct.previewImage

            this.product = { ...this.product, ...cachedProduct }
        }
    }
}
</script>

<style scoped>
:deep(.form-item), :deep(.form-item-input) {
    width: 100%;
}

.product-manipulate-buttons {
    display: flex;
}
</style>
