const DEFAULT_TITLE = 'titles.main'

export default {
    methods: {
        updateDocumentTitle(...title) {
            document.title = this.$t(...(title[0] ? title : [DEFAULT_TITLE]))
        }
    }
}
