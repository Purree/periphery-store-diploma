<template>
    <div class="control-button">
        <font-awesome-icon :icon="direction === 'left' ? 'arrow-left' : 'arrow-right'" />
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
    name: 'CollectionControlButton',
    components: { FontAwesomeIcon },
    props: {
        direction: {
            required: true,
            // right or left
            type: String
        }
    }
}
</script>

<style scoped>
.control-button {
    --control-button-size: 40px;

    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--control-button-size);
    height: var(--control-button-size);
    border-radius: var(--el-border-radius-round);
    background: var(--el-bg-color-page);
    cursor: pointer;
    opacity: 50%;
}
.control-button:hover {
    transition: 300ms opacity;
    opacity: 90%;
}
</style>
