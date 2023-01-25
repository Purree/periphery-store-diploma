<template>
    <el-menu-item v-bind="$attrs" :index="index">
        <div class="header-rounded-button">
            <el-avatar>
                <font-awesome-icon :icon="icon"></font-awesome-icon>
            </el-avatar>
            <div class="header-rounded-button-text">
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

<style scoped lang="scss">
.el-menu--popup {
    & .header-rounded-button {
        width: 100%;
        justify-content: start;
        margin-left: 50%;
        translate: -50%;
        flex-direction: row;
    }
    & .header-rounded-button-text {
        margin-left: 5px;
    }
}
.header-rounded-button {
    line-height: initial;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
