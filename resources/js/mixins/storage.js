export default {
    methods: {
        asset(path) {
            const basePath = (window._asset || '')
            return basePath + path
        },
        stored_asset(path) {
            const basePath = (window._asset || '') + 'storage/'
            return basePath + path
        }
    }
}
