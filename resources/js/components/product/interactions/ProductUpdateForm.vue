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
                {{ $t('product.updateProduct.previewImage') }}
                <el-popover
                    placement="top-start"
                    :title="$t('general.attention')"
                    trigger="hover"
                    :content="$tc('product.updateProduct.previewImageInfo', 512)"
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
                    <based-text :title="$t('product.updateProduct.currentImage')"/>

                    <div class="previous-product-preview">
                        <item-image :image-url="previousProductPreviewImageUrl"/>
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
            <full-width-button :pending="pending" @click="onSubmit()">{{ $t('general.save') }}</full-width-button>
            <product-delete-button @delete-product="$emit('deleteProduct')"
                                   v-if="productToUpdate.slug"
                                   :slug="productToUpdate.slug"/>
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

export default {
    name: 'ProductUpdateForm',
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

.previous-product-preview {
    width: 128px;
    height: 128px;
}

.product-manipulate-buttons {
    display: flex;
}
</style>
