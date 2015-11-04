var app = angular.module('shopping_cart');

app.controller('storeController', ['$scope', 'itemFactory', function($scope, itemFactory) {
  $scope.items = function() {
    return itemFactory.items;
  };
  $scope.selectOptions =  ["" , "dark", "cold", "awesome", "dry", "hot", "lucid", "warm", "summer", "winter", "spring"];
  // $scope.searchSelect = function(option) {
  //   $scope.searchQuery = option;
  // };
  $scope.addToBag = function(id, num, scope) {
    itemFactory.addToBag(id, parseInt(num));
    scope.itemQuantity = 0;
  };

  $scope.getBagCount = function() {
    return itemFactory.getBagCount();
  };

  // $scope.setPriceSort = function(sort) {
  //   if (sort === "up") {

  //   }
  // }

}]);

app.controller('cartController', ['$scope', 'itemFactory', function($scope, itemFactory) {
  $scope.items = function() {
    return itemFactory.items;
  };

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
