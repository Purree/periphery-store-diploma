import getErrorsFromResponse, { openErrorNotification } from '@/helpers/errors'

export default {
    methods: {
        async useErrorsCatch(handler, catcher = undefined) {
            try {
                await handler()
            } catch (errors) {
                if (!catcher) {
                    openErrorNotification(getErrorsFromResponse(errors))
                } else {
                    catcher(errors)
                }
            }
        }
    }
}
