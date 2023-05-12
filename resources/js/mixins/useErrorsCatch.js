import getErrorsFromResponse, { openErrorNotification } from '@/helpers/errors'

export default {
    methods: {
        async useErrorsCatch(handler, catcher = undefined) {
            try {
                await handler()
            } catch (errors) {
                openErrorNotification(getErrorsFromResponse(errors))

                if (catcher) {
                    catcher(errors)
                }
            }
        }
    }
}
