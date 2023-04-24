import { ElNotification } from 'element-plus'

export default function getErrorsFromResponse(errors) {
    console.log(errors)
    console.log(errors.response)

    return errors?.response ? errors.response.data?.errors || { server: [errors.response.data.message] } : errors
}

export function openErrorNotification(errors) {
    if (!Array.isArray(errors)) {
        errors = [errors]
    }
    errors.forEach((error) => {
        if (typeof error === 'string') {
            showNotification(error)
        } else if (typeof error === 'object') {
            if (Array.isArray(error)) {
                openErrorNotification(error)
            } else {
                openErrorNotification(Object.values(error))
            }
        } else {
            showNotification(error)
        }
    })
}

function showNotification(error) {
    return ElNotification({
        title: 'Error',
        message: error,
        position: 'bottom-right',
        type: 'error'
    })
}
