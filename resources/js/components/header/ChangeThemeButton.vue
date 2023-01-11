<template>
    <el-switch v-bind="$attrs" v-model="themeBooleanColor" />
</template>

<script>
import changeTheme from '@/mixins/changeTheme'
import { mapState } from 'vuex'

export default {
    name: 'ChangeThemeButton',
    mixins: [changeTheme],
    computed: {
        ...mapState(['theme']),
        themeBooleanColor: {
            get() {
                return this.theme === 'dark'
            },
            set(value) {
                this.changeTheme(value ? 'dark' : 'light')
            }
        }
    }
}
</script>

<style scoped>

</style>
