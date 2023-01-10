<template>
    <el-menu-item :index="index">
        <div class="header-rounded-button">
            <el-avatar>
                <font-awesome-icon :icon="icon"></font-awesome-icon>
            </el-avatar>
            <div>
                {{ text }}
            </div>
        </div>
    </el-menu-item>
</template>

<script>
export default {
    name: 'HeaderMenuRoundedButtonItem',
    props: {
        index: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.header-rounded-button {
    line-height: initial;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
