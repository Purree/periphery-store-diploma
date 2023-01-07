export async function loadLayoutMiddleware(route) {
    const { layout } = route.meta
    const fileName = layout || 'AppLayoutDefault'
    const fileNameWithoutExtension = fileName.split('.vue')[0]

    const component = await import(`../../layouts/${fileNameWithoutExtension}.vue`)
    route.meta.layoutComponent = component.default
}
