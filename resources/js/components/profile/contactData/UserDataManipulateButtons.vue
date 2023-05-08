<template>
    <div class="user-data-manipulate-buttons-block">
        <el-button type="primary" @click="$emit('editButtonClick')">
            <template #default>
                {{ userDataEditButtonText }}
            </template>
            <template #icon>
                <font-awesome-icon icon="pen"/>
            </template>
        </el-button>
        <el-button :loading="deleteUserDataPending" :disabled="deleteUserDataPending"
                   @click="$emit('deleteButtonClick')" type="danger">
            <template #icon>
                <font-awesome-icon icon="trash"/>
            </template>
        </el-button>
    </div>
</template>

<script>
export default {
    name: 'UserDataManipulateButtons',
    emits: ['editButtonClick', 'deleteButtonClick'],
    props: {
        userDataEditButtonText: {
            required: true,
            type: String
        },
        deleteUserDataPending: {
            required: true,
            type: Boolean
        }
    }
}
</script>

<style scoped>
.user-data-manipulate-buttons-block {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
</style>
