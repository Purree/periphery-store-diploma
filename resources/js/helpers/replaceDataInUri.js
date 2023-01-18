/**
 * Replace tags in link via given data
 *
 * @param {string} uri - Format link/{data}/link/data2
 * @param {object} data. Format {'data': 'text', 'data2': 'test'}
 *
 * @return string
 */
export default (uri, data) => {
    const replacementTags = Object.keys(data)

    let completedUri = uri

    replacementTags.forEach((tag) => {
        completedUri = completedUri.replaceAll(`{${tag}}`, data[tag])
    })

    return completedUri
}
