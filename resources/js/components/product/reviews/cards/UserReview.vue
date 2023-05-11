<template>
    <div class="card" v-if="isUserReviewExists || canCreateReview">
        <profile-title :text="$t('product.reviews.yourReview')"/>
        <template v-if="!isReviewEditFormVisible">
            <review-card @edit-review="showReviewEditForm()"
                         @delete-review="$emit('deleteReview')"
                         :is-show-edit-reply-button="true"
                         v-if="isUserReviewExists"
                         :review="userReview"/>

            <full-width-button @click="showReviewEditForm()"
                               v-if="!isUserReviewExists">
                {{ $t('product.reviews.leaveReview') }}
            </full-width-button>
        </template>
        <template v-else>
            <review-edit-form @update-review="(review) => usePending(onReviewFormSubmit, 'pending', review)"
                              v-model:review="reviewForm"
                              :pending="pending"/>
        </template>
    </div>
</template>

<script>
import ReviewCard from '@/components/product/reviews/ReviewCard.vue'
import ProfileTitle from '@/components/profile/ProfileTitle.vue'
import FullWidthButton from '@/components/FullWidthButton.vue'
import ReviewEditForm from '@/components/product/reviews/ReviewEditForm.vue'
import usePending from '@/mixins/usePending'
import useErrorsCatch from '@/mixins/useErrorsCatch'
import apiRequest from '@/helpers/apiRequest'
import { API_CREATE_REVIEW_URL, API_UPDATE_REVIEW_URL } from '@/api/reviews'

export default {
    name: 'UserReview',
    mixins: [usePending, useErrorsCatch],
    emits: ['deleteReview', 'createReview', 'updateReview'],
    components: {
        ReviewEditForm,
        FullWidthButton,
        ProfileTitle,
        ReviewCard
    },
    data() {
        return {
            isReviewEditFormVisible: false,
            editedReview: {},
            pending: false,
            productSlug: ''
        }
    },
    props: {
        userReview: {
            required: false,
            type: [null, Object],
            default: null
        },
        canCreateReview: {
            required: true,
            type: Boolean
        }
    },
    methods: {
        showReviewEditForm() {
            this.isReviewEditFormVisible = true
        },
        async onReviewFormSubmit(form) {
            await this.useErrorsCatch(async() => {
                const updatedReview = (
                    await (
                        this.isUserReviewExists
                            ? this.updateReview(form)
                            : this.createReview(form)
                    )
                ).data

                this.$emit('createReview', updatedReview)
                this.isReviewEditFormVisible = false
            })
        },
        async updateReview(form) {
            return await apiRequest(API_UPDATE_REVIEW_URL, { id: form.id }, form)
        },
        async createReview(form) {
            form.isAnonymous ??= false

            return await apiRequest(API_CREATE_REVIEW_URL, { slug: this.productSlug }, form)
        }
    },
    computed: {
        isUserReviewExists() {
            return this.userReview && Object.keys(this.userReview).length > 0
        },
        reviewForm: {
            get() {
                return { ...(this.userReview || {}), ...this.editedReview }
            },
            set(value) {
                this.editedReview = value
            }
        }
    },
    mounted() {
        this.productSlug = this.$route.params.slug
    }
}
</script>

<style scoped>

</style>
