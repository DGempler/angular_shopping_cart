angular.module('shopping_cart')
  .controller('storeController', ['$scope', 'itemFactory', function($scope, itemFactory) {
    $scope.selectOptions = itemFactory.getCategories();
    itemFactory.getItems().then(function(items) {
      $scope.items = items;
    });

    // // $scope.items = function() {
    // //   return itemFactory.items;
    // };

    $scope.addToBag = function(id, num, scope) {
      itemFactory.addToBag(id, parseInt(num));
      scope.itemQuantity = 0;
    };

    $scope.getBagCount = function() {
      return itemFactory.getBagCount();
    };

  }]);