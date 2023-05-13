import getErrorsFromResponse, { openErrorNotification } from '@/helpers/errors'

export default {
    methods: {
        async useErrorsCatch(handler, catcher = undefined) {
            try {
                return await handler()
            } catch (errors) {
                openErrorNotification(getErrorsFromResponse(errors))

                if (catcher) {
                    return catcher(errors)
                }
            }
        }
    }
}
