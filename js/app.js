var app = angular.module('shopping_cart', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'storeController',
      templateUrl: 'partials/storeController.html'
    })
    .when('/cart', {
      controller: 'cartController',
      templateUrl: 'partials/cartController.html'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);