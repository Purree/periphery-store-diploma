<template>
    <div id="app">
        <div class="option-container">
            <h1>{{ msg }}</h1>
            <el-radio class="radio" v-model="radio" label="1">备选项 (Option 1)</el-radio>
            <el-radio class="radio" v-model="radio" label="2">备选项 (Option 2)</el-radio>
            <el-radio class="radio" v-model="radio" label="3">备选项 (Option 3)</el-radio>
        </div>
        <el-button v-on:click="visible = true">Click to open me</el-button>
        <el-dialog
            v-model="visible"
            width="30%"
            title="Inner Dialog"
            append-to-body
        />
    </div>
</template>
<script>
export default {
    name: 'app',
    data() {
        return {
            visible: false,
            msg: 'Welcome to "resources/js/components/Example.vue"',
            radio: '1'
        }
    }
}
</script>
