<template>
    <div class="product-seller-card">
        <div>
            {{ name }}
        </div>
        <div>
            <user-avatar :src="avatar" />
        </div>
    </div>
</template>

<script>
import UserAvatar from '@/components/profile/UserAvatar.vue'

export default {
    name: 'ProductSellerCard',
    components: { UserAvatar },
    props: {
        name: {
            required: true,
            type: String
        },
        avatar: {
            required: true,
            type: String
        }
    }
}
</script>

<style scoped>
    .product-seller-card {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
