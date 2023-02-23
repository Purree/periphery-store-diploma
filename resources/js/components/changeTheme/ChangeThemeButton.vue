<template>
    <el-switch v-bind="$attrs" :inactive-icon="inactiveThemeIcon" :active-icon="activeThemeIcon"
               v-model="themeBooleanColor"/>
</template>

<script>
import changeTheme from '@/mixins/theme'
import { mapState } from 'vuex'
import { markRaw } from 'vue'
import DarkThemeIcon from '@/components/changeTheme/DarkThemeIcon.vue'
import LightThemeIcon from '@/components/changeTheme/LightThemeIcon.vue'

export default {
    name: 'ChangeThemeButton',
    mixins: [changeTheme],
    data() {
        return {
            activeThemeIcon: markRaw(DarkThemeIcon),
            inactiveThemeIcon: markRaw(LightThemeIcon)
        }
    },
    computed: {
        ...mapState('theme', ['theme']),
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
