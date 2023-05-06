export function getMinimalProductPrice(product) {
    return getMinimalPrice(product.price, product.priceWithDiscount)
}

export function getMinimalPrice(price, priceWithDiscount = undefined) {
    return checkIsDiscountExists(price, priceWithDiscount) ? priceWithDiscount : price
}

export function checkIsDiscountExists(price, priceWithDiscount = undefined) {
    return priceWithDiscount !== undefined && priceWithDiscount !== price
}
