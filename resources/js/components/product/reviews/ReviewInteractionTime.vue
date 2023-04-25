<template>
    <div>
        <div>
            <based-text class="review-date"
                        :title="$t('general.created') + ': ' + beautifyDate(created_at)"/>
        </div>
        <div v-if="updated_at && beautifyDate(created_at) !== beautifyDate(updated_at)">
            <based-text class="review-date"
                        :title="$t('general.updated') + ': ' + beautifyDate(updated_at)"/>
        </div>
    </div>
</template>

<script>
import BasedText from '@/components/BasedText.vue'

export default {
    name: 'ReviewInteractionTime',
    components: { BasedText },
    methods: {
        beautifyDate(date) {
            return new Date(date).toLocaleDateString()
        }
    },
    props: {
        created_at: {
            required: true,
            type: String
        },
        updated_at: {
            required: false,
            type: [String, undefined, null]
        }
    }
}
</script>

<style scoped>
.review-date {
    word-break: initial;
}
</style>
