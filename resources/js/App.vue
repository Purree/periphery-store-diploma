<template>
    <el-config-provider :locale="locale">
        <AppLayout class="app-content">
            <router-view></router-view>
        </AppLayout>
    </el-config-provider>
</template>
<script>
import AppLayout from '@/layouts/AppLayout.vue'
import changeTheme from '@/mixins/changeTheme'
import changeLanguage from '@/mixins/changeLanguage'
import { mapState } from 'vuex'

export default {
    name: 'app',
    components: { AppLayout },
    mixins: [changeTheme, changeLanguage],
    mounted() {
        if (localStorage.getItem('theme') === 'dark' || (localStorage.getItem('theme') !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            this.changeTheme()
        }
        if (localStorage.getItem('language') === 'en' || (localStorage.getItem('language') !== 'ru' && navigator.language !== 'ru-RU')) {
            this.changeLanguage()
        }
    },
    computed: {
        ...mapState('language', ['locale'])
    }
}
</script>

<style scoped>
.app-content {
    min-height: 100vh;
}
</style>
