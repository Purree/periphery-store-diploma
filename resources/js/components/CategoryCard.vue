<template>
    <!--    TODO: Открывать slug категории при клике-->
    <el-card class="category-card" :body-style="{paddingTop: 0}">
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
    </el-card>
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
    width: calc(160px + var(--el-card-padding));
    height: calc(210px + calc(var(--el-card-padding) / 2));
}

.category-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.category-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--el-border-radius-round);
    width: 100%;
    height: 100%;
}

.category-image {
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;
}

.category-title {
    margin-top: 10px;
    font-weight: bold;
    text-align: center;
}
</style>
