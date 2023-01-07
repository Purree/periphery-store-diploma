<template>
    <div class="home-icon">
        <router-link :to="{ 'name': 'Home' }">
            <font-awesome-icon icon="home"></font-awesome-icon>
        </router-link>
    </div>
    <slot></slot>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
    name: 'ErrorLayout',
    components: { FontAwesomeIcon }
}
</script>

<style scoped>
.home-icon {
    position: absolute;
    left: 10px;
    top: 10px;
}
</style>
