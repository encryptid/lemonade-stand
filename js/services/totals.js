module.exports = {
    name: 'TotalsService',
    func: function ($http) {
        const totals = [
            { title: 'day', amount: 7, },
            { title: 'money', amount: 25, }, 
            { title: 'visitors', amount: 4, },
            { title: 'customers', amount: 3, },
        ];

        return {
            getTotals() {
                console.log('getTotals running')
                return totals;
            }
        };

    }
}