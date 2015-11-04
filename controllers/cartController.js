angular.module('shopping_cart')
  .controller('cartController', ['$scope', 'itemFactory', function($scope, itemFactory) {
    itemFactory.loadData().then(function() {
      $scope.items = itemFactory.items;
    });
    // $scope.items = itemFactory;
    // $scope.items = function() {
    //   return itemFactory.items;
    // };

    $scope.total = function() {
      return itemFactory.getTotal();
    };

    $scope.clearItem = function(id) {
      itemFactory.clearItem(id);
    };

    $scope.changeQty = function(id, num) {
      itemFactory.changeQty(id, num);
    };

    $scope.buildArray = function(qty) {
      var array = [];
      for (var i = 1  ; i < parseInt(qty) + 11; i ++) {
        array.push(i);
      }
      return array;
    };

  }]);