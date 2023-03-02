export default {
    methods: {
        getCurrency(price) {
            return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(price)
        }
    }
}
