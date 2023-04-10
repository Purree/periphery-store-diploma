<template>
    <header-menu-item v-bind="$attrs">
        <div class="header-rounded-button">
            <slot name="icon">
                <el-avatar>
                    <font-awesome-icon :icon="icon"></font-awesome-icon>
                </el-avatar>
            </slot>
            <div class="header-rounded-button-text">
                {{ text }}
            </div>
        </div>
    </header-menu-item>
</template>

<script>
import HeaderMenuItem from '@/components/header/HeaderMenuItem.vue'

export default {
    name: 'HeaderMenuRoundedButtonItem',
    components: { HeaderMenuItem },
    props: {
        icon: {
            type: String,
            required: false
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
