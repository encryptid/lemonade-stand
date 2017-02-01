module.exports = {
    name: 'ResourceMgmt',
    func: function ($scope, StockService) {
        $scope.stock = StockService.pullStock();
        console.log($scope.stock);

    }
}