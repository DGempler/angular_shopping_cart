angular.module('shopping_cart')
  .filter('countForEmpty', function() {
    return function(num) {
      if (num) {
        return num;
      } else {
        return "Empty";
      }
    };
  });