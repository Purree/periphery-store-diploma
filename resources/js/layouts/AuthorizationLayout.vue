<template>
    <div class="container">
        <div class="store-logo">
            <router-link :to="{ name: 'Home' }">
                <store-icon></store-icon>
            </router-link>
        </div>
        <div class="authorization-form">
            <form>
                <el-tabs type="border-card" v-model="activeTabName" @tab-click="handleClick">
                    <el-tab-pane :key="route" v-for="route in routes" :label="$t('authorization.' + lcFirst(route))"
                                 :name="route"></el-tab-pane>

                    <slot></slot>
                </el-tabs>
            </form>
        </div>
    </div>
</template>

<script>
import StoreIcon from '@/components/header/StoreIcon.vue'

export default {
    name: 'AuthenticationLayout',
    components: { StoreIcon },
    data() {
        return {
            routes: ['Login', 'Register'],
            activeTabName: 'Login'
        }
    },
    mounted() {
        this.activeTabName = this.$route.name
    },
    methods: {
        handleClick(tab) {
            this.$router.push({ name: tab.props.name })
        },
        lcFirst(string) {
            return string.charAt(0).toLowerCase() + string.slice(1)
        }
    }
}
</script>

<style scoped>
.store-logo {
    width: 75px;
    height: 75px;
}

.authorization-form {
    max-width: 400px;
    margin: 80px auto;
}
</style>
