<template>
    <div>
        <div class="current-images-container">
            <div v-for="image in currentImages" :key="image.id" class="current-image-block">
                <item-image :image-url="image.link"/>
                <el-button :disabled="pending"
                           :loading="pending"
                           type="danger"
                           @click="usePending(deleteImage, 'productImageDeletePending', image.id)"
                           class="delete-image-button">
                    <font-awesome-icon type="danger"
                                       icon="trash">
                        {{
                            $t('profile.avatar.buttons.delete')
                        }}
                    </font-awesome-icon>
                </el-button>
            </div>
        </div>
        <div class="images-upload-form">
            <el-upload
                v-if="maxLoadedImagesCount"
                class="image-upload-container"
                :drag="true"
                :multiple="true"
                :limit="maxLoadedImagesCount"
                v-model:file-list="newImages"
                list-type="picture-card"
                accept="image/png, image/gif, image/jpeg"
                :auto-upload="false"/>
        </div>
        <errors-alert :errors="errors"/>
        <full-width-button :pending="pending" @click="usePending(uploadImages, 'productUploadPending')">{{
                $t('general.save')
            }}
        </full-width-button>
    </div>
</template>

<script>
import ItemImage from '@/components/home/ItemImage.vue'
import { API_DELETE_PRODUCT_IMAGE_URL, API_UPLOAD_PRODUCT_IMAGES_URL } from '@/api/products'
import apiRequest from '@/helpers/apiRequest'
import usePending from '@/mixins/usePending'
import FullWidthButton from '@/components/FullWidthButton.vue'
import ErrorsAlert from '@/components/errors/ErrorsAlert.vue'
import getErrorsFromResponse from '@/helpers/errors'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
    name: 'ProductImagesUpdateCard',
    emits: ['imagesUpdate'],
    components: {
        FontAwesomeIcon,
        ErrorsAlert,
        FullWidthButton,
        ItemImage
    },
    mixins: [usePending],
    data() {
        return {
            newImages: [],
            errors: [],
            productUploadPending: false,
            productImageDeletePending: false
        }
    },
    props: {
        productSlug: {
            required: true,
            type: String
        },
        externalPending: {
            required: false,
            type: Boolean,
            default: false
        },
        currentImages: {
            required: true,
            type: Array
        }
    },
    methods: {
        async uploadImages() {
            this.errors = []

            if (this.newImages.length === 0) {
                this.errors = [[this.$t('product.updateProduct.images.tooFewImages')]]
                return
            }

            const imagesFormData = new FormData()
            this.newImages.forEach(image => {
                imagesFormData.append('images[]', image.raw)
            })

            try {
                await apiRequest(API_UPLOAD_PRODUCT_IMAGES_URL, { slug: this.productSlug }, imagesFormData)
                this.$emit('imagesUpdate')
                this.newImages = []
            } catch (errors) {
                this.errors = getErrorsFromResponse(errors)
            }
        },
        async deleteImage(id) {
            this.errors = []

            try {
                await apiRequest(API_DELETE_PRODUCT_IMAGE_URL, {
                    slug: this.productSlug,
                    imageId: id
                })
                this.$emit('imagesUpdate')
            } catch (errors) {
                this.errors = getErrorsFromResponse(errors)
            }
        }
    },
    computed: {
        maxLoadedImagesCount() {
            return 10 - this.currentImages.length
        },
        pending() {
            return this.externalPending || this.productUploadPending || this.productImageDeletePending
        }
    }
}
</script>

<style scoped>
.current-images-container {
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 10px;
}

.current-image-block {
    position: relative;
    height: 200px;
    aspect-ratio: 1 / 1;
    width: 200px;
}

.delete-image-button {
    position: absolute;
    top: 5px;
    right: 5px;
}

.image-upload-container {
    width: 100%;
}

.images-upload-form {
    margin-bottom: 10px;
}

:deep(.el-upload-list--picture-card), .image-upload-container, .current-images-container {
    display: flex;
    justify-content: center;
}
</style>
