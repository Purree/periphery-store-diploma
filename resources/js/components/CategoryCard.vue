<template>
    <!--    TODO: Открывать slug категории при клике-->
    <div class="category-card">
        <div class="category-container">
            <div class="category-image-container">
                <div class="category-image">
                    <item-image :image-url="imageUrl"/>
                </div>
            </div>
            <div class="category-title">
                <item-title :title="title"/>
            </div>
        </div>
    </div>
</template>

<script>
import ItemImage from '@/components/home/ItemImage.vue'
import ItemTitle from '@/components/home/ItemTitle.vue'

export default {
    name: 'CategoryCard',
    components: {
        ItemTitle,
        ItemImage
    },
    props: {
        imageUrl: {
            required: true,
            type: String
        },
        title: {
            required: true,
            type: String
        },
        slug: {
            required: true,
            type: String
        }
    }
}
</script>

<style scoped>
.category-card {
    position: relative;
    width: 160px;
    height: 210px;
}

.category-container {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.category-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--el-bg-color-page);
    border-radius: var(--el-border-radius-round);
    width: 160px;
    height: 160px;
}

.category-image {
    width: 120px;
    height: 120px;
}

.category-title {
    margin-top: 10px;
    font-weight: bold;
    text-align: center;
}
</style>
