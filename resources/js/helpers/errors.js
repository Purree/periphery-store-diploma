export default function getErrorsFromResponse(errors) {
    console.log(errors.response)
    return errors.response.data?.errors || { server: [errors.response.data.message] }
}
