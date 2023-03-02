<template>
    <div class="rating-container" :class="getRatingMark() + '-rating'">
        <font-awesome-icon class="rating-icon" icon="star"></font-awesome-icon>
        <div>{{ rating.toFixed(2) }}</div>
    </div>
</template>

<script>
export default {
    name: 'ProductRating',
    props: {
        rating: {
            required: true,
            type: Number
        }
    },
    methods: {
        getRatingMark() {
            if (this.rating >= 4) {
                return 'good'
            } else if (this.rating < 4 && this.rating > 2.5) {
                return 'normal'
            } else {
                return 'bad'
            }
        }
    }
}
</script>

<style scoped>
.rating-container {
    display: flex;
}

.rating-icon {

}

.good-rating {
    color: var(--el-color-success);
}
.normal-rating {
    color: var(--el-color-warning);
}
.bad-rating {
    color: var(--el-color-danger);
}
</style>
