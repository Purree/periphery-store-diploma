<template>
    <el-popconfirm :title="$t('product.updateProduct.productDeleteConfirm')"
                   @confirm="usePending(deleteProduct)"
                   :confirm-button-text="$t('general.yes')"
                   :cancel-button-text="$t('general.no')">
        <template #reference>
            <full-width-button :pending="pending" type="danger">{{
                    $t('general.delete')
                }}
            </full-width-button>
        </template>
    </el-popconfirm>
</template>

<script>
import FullWidthButton from '@/components/FullWidthButton.vue'
import apiRequest from '@/helpers/apiRequest'
import { API_DELETE_PRODUCT_URL } from '@/api/products'
import getErrorsFromResponse, { openErrorNotification } from '@/helpers/errors'
import usePending from '@/mixins/usePending'

export default {
    name: 'ProductDeleteButton',
    mixins: [usePending],
    emits: ['deleteProduct'],
    components: { FullWidthButton },
    data() {
        return {
            pending: false
        }
    },
    props: {
        slug: {
            required: true,
            type: String
        }
    },
    methods: {
        async deleteProduct() {
            try {
                await apiRequest(API_DELETE_PRODUCT_URL, { slug: this.slug })

                this.$emit('deleteProduct')
            } catch (errors) {
                openErrorNotification(getErrorsFromResponse(errors))
            }
        }
    }
}
</script>

<style scoped>

</style>
