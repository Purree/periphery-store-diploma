<template>
    <div class="input-row">
        <div class="slot-block" :style="'width:' + (slotWidth || '50%')">
            <slot></slot>
        </div>
        <el-input v-bind="$attrs" v-model="modelValue"></el-input>
    </div>
</template>

<script>
export default {
    data() {
        return {
            modelValue: ''
        }
    },
    name: 'InputRow',
    props: ['slotWidth']
}
</script>

<style scoped>
.input-row {
    display: flex;
    flex-direction: row;
    margin-bottom: 5px;
}
.slot-block {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}
</style>
