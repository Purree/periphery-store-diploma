<template>
    <el-form label-position="top" :rules="validationRules" ref="form" :model="product">
        <errors-alert :errors="{...requestErrors, ...errors}"/>
        <el-form-item :label="$t('product.updateProduct.title')" prop="title" class="form-item">
            <el-input
                class="form-item-input"
                v-model="product.title"/>
        </el-form-item>
        <el-form-item :label="$t('product.updateProduct.metaTitle')" prop="metaTitle" class="form-item">
            <el-input
                class="form-item-input"
                v-model="product.metaTitle"/>
        </el-form-item>
        <el-form-item :label="$t('product.updateProduct.description')" prop="description" class="form-item">
            <el-input
                class="form-item-input"
                v-model="product.description"
                :autosize="{ minRows: 3 }"
                type="textarea"/>
        </el-form-item>
        <el-form-item prop="previewImage" class="form-item">
            <template #label>
                {{ $t('product.updateProduct.images.previewImage') }}
                <el-popover
                    placement="top-start"
                    :title="$t('general.attention')"
                    trigger="hover"
                    :content="$tc('product.updateProduct.images.previewImageInfo', 512)"
                >
                    <template #reference>
                        <font-awesome-icon class="preview-image-info-popover-icon" icon="circle-info"/>
                    </template>
                </el-popover>
            </template>
            <template #default>
                <el-upload
                    class="form-item-input"
                    :drag="true"
                    :limit="1"
                    v-model:file-list="product.previewImage"
                    list-type="picture"
                    accept="image/png, image/gif, image/jpeg"
                    :auto-upload="false"/>
                <div v-if="previousProductPreviewImageUrl">
                    <based-text :title="$t('product.updateProduct.images.currentImage')"/>

                    <div class="previous-product-preview-container">
                        <el-button :disabled="generalPending"
                                   :loading="generalPending"
                                   type="danger"
                                   plain
                                   class="delete-previous-product-preview-button"
                                   @click="usePending(onPreviousProductPreviewDelete, 'previousProductPreviewImageDeletePending')">
                            <font-awesome-icon type="danger"
                                               icon="trash">
                                {{
                                    $t('profile.avatar.buttons.delete')
                                }}
                            </font-awesome-icon>
                        </el-button>
                        <div class="previous-product-preview">
                            <item-image :image-url="previousProductPreviewImageUrl"/>
                        </div>
                    </div>
                </div>
            </template>
        </el-form-item>
        <el-form-item :label="$t('product.updateProduct.price')" prop="price" class="form-item">
            <el-input-number
                class="form-item-input"
                v-model="product.price"/>
        </el-form-item>
        <el-form-item :label="$t('product.updateProduct.discount')" prop="discount" class="form-item">
            <el-input-number
                :min="0"
                :max="100"
                class="form-item-input"
                v-model="product.discount"/>
        </el-form-item>
        <el-form-item :label="$t('product.updateProduct.quantity')" prop="quantity" class="form-item">
            <el-input-number
                class="form-item-input"
                :min="0"
                v-model="product.quantity"/>
        </el-form-item>
        <el-form-item :label="$t('product.updateProduct.isAvailable')" prop="isAvailable" class="form-item">
            <el-switch
                class="form-item-input"
                :active-text="$t('product.updateProduct.available')"
                :inactive-text="$t('product.updateProduct.unavailable')"
                v-model="product.isAvailable"
                size="large"
            />
        </el-form-item>
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
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ItemImage from '@/components/home/ItemImage.vue'
import BasedText from '@/components/BasedText.vue'
import ProductDeleteButton from '@/components/product/interactions/ProductDeleteButton.vue'
import usePending from '@/mixins/usePending'
import apiRequest from '@/helpers/apiRequest'
import { API_DELETE_PRODUCT_PREVIEW_URL } from '@/api/products'
import getErrorsFromResponse from '@/helpers/errors'

export default {
    name: 'ProductUpdateForm',
    computed: {
        generalPending() {
            return this.pending || this.previousProductPreviewImageDeletePending
        }
    },
    mixins: [usePending],
    components: {
        ProductDeleteButton,
        BasedText,
        ItemImage,
        FontAwesomeIcon,
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
.form-item, .form-item-input {
    width: 100%;
}

.preview-image-info-popover-icon {
    color: var(--el-color-primary);
}

.preview-image-info-popover-icon:hover {
    cursor: pointer;
}

.previous-product-preview-container {
    position: relative;
}

.delete-previous-product-preview-button {
    position: absolute;
}

.previous-product-preview {
    width: 128px;
    height: 128px;
}

.product-manipulate-buttons {
    display: flex;
}
</style>
