export default {
    methods: {
        async usePending(handler, key = 'pending', ...e) {
            if (this[key]) {
                return
            }
            this[key] = true

            await handler(...e)

            this[key] = false
        }
    }
}
