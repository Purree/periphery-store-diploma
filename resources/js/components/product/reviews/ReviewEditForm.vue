<template>
    <el-form label-position="top" :rules="validationRules" ref="form" :model="formReview">
        <div class="review-settings-container">
            <el-form-item :label="$t('general.rating')" prop="rating">
                <el-rate v-model="formReview.rating"
                         clearable
                         @update:model-value="this.updateValue"
                         :colors="['var(--el-color-danger)', 'var(--el-color-warning)', 'var(--el-color-success)']"/>
            </el-form-item>
            <el-form-item :label="$t('general.reviews.anonymousReview') + '?'" prop="isAnonymous">
                <el-switch v-model="formReview.isAnonymous" @update:model-value="this.updateValue"/>
            </el-form-item>
        </div>
        <el-form-item :label="$t('general.reviews.advantages')" prop="advantages">
            <el-input
                v-model="formReview.advantages"
                @update:model-value="this.updateValue"
                :autosize="{ minRows: 3 }"
                type="textarea"
                :placeholder="$t('general.reviews.advantages')"
            />
        </el-form-item>
        <el-form-item :label="$t('general.reviews.disadvantages')" prop="disadvantages">
            <el-input
                v-model="formReview.disadvantages"
                @update:model-value="this.updateValue"
                :autosize="{ minRows: 3 }"
                type="textarea"
                :placeholder="$t('general.reviews.disadvantages')"
            />
        </el-form-item>
        <el-form-item :label="$t('general.reviews.comments')" prop="comments">
            <el-input
                v-model="formReview.comments"
                :autosize="{ minRows: 3 }"
                @update:model-value="this.updateValue"
                type="textarea"
                :placeholder="$t('general.reviews.comments')"
            />
        </el-form-item>

        <full-width-button :pending="pending" @click="onFormSaveButtonClick()">
            {{ $t('general.save') }}
        </full-width-button>
    </el-form>
</template>

<script>
import FullWidthButton from '@/components/FullWidthButton.vue'

export default {
    name: 'ReviewEditForm',
    components: { FullWidthButton },
    emits: ['update:review', 'updateReview'],
    data() {
        return {
            validationRules: {
                rating: { required: true },
                advantages: { required: true },
                disadvantages: { required: true },
                comments: { required: true }
            }
        }
    },
    props: {
        review: {
            required: true,
            type: Object
        },
        pending: {
            required: true,
            type: Boolean
        }
    },
    methods: {
        async onFormSaveButtonClick() {
            await this.$refs.form.validate((valid) => {
                if (valid) {
                    this.$emit('updateReview', this.formReview)
                }
            })
        },
        updateValue() {
            this.$emit('update:review', this.formReview)
        }
    },
    computed: {
        formReview: {
            get() {
                return this.review
            },
            set(value) {
                this.$emit('update:review', value)
            }
        }
    }
}
</script>

<style scoped>
.review-settings-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>
