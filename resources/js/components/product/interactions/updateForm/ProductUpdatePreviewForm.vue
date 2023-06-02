<template>
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
                v-model:file-list="previewImage"
                list-type="picture"
                accept="image/png, image/gif, image/jpeg"
                :auto-upload="false"/>
            <div v-if="previousProductPreviewImageUrl">
                <based-text :title="$t('product.updateProduct.images.currentImage')"/>

                <div class="previous-product-preview-container">
                    <el-button :disabled="pending"
                               :loading="pending"
                               type="danger"
                               plain
                               class="delete-previous-product-preview-button"
                               @click="$emit('deletePreviousProductPreview')">
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
</template>

<script>
import ItemImage from '@/components/home/ItemImage.vue'
import BasedText from '@/components/BasedText.vue'

export default {
    name: 'ProductUpdatePreviewForm',
    emits: ['update:productPreviewImage', 'deletePreviousProductPreview'],
    components: {
        BasedText,
        ItemImage
    },
    props: {
        previousProductPreviewImageUrl: {
            required: true,
            type: String
        },
        pending: {
            required: true,
            type: Boolean
        },
        productPreviewImage: {
            required: true
        }
    },
    computed: {
        previewImage: {
            get() {
                return this.productPreviewImage
            },
            set(value) {
                this.$emit('update:productPreviewImage', value)
            }
        }
    }
}
</script>

<style scoped>
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
</style>
