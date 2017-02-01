module.exports = {
    name: 'Dashboard',
    func: function ($scope, TotalsService) {
        $scope.stats = TotalsService.getTotals();
        console.log($scope.stats);

    }
}