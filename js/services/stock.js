module.exports = {
    name: 'StockService',
    func: function ($http) {
        const stock = [
            { item: 'lemons', qty: 5, price: 2, },
            { item: 'sugar', qty: 4, price: 1.25, },
            { item: 'ice', qty: 3, price: .50, },
            { item: 'cups', qty: 2, price: .10, },
        ];

        return {
            pullStock() {
                console.log('pullStock running');
                return stock;
            }
        }
    }
}