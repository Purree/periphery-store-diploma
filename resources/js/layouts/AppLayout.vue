<template>
    <Transition :name="this.$route.meta.transition || 'fade'">
        <div :key="this.$route?.matched[0]?.name || Math.random()">
            <component :is="this.$route.meta.layoutComponent">
                <slot/>
            </component>
        </div>
    </Transition>
</template>

<script>
export default {
    name: 'AppLayout'
}
</script>
