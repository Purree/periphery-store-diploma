<template>
    <div>
        <el-avatar v-bind="$attrs" :src="user.avatar">
            <font-awesome-icon v-if="!user?.avatar" icon="user"></font-awesome-icon>
        </el-avatar>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'UserAvatar',
    computed: {
        ...mapState('auth', ['user'])
    }
}
</script>
