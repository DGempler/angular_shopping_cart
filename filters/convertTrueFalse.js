angular.module('shopping_cart')
  .filter('convertTF', function() {
    return function(input) {
      if (input) {
        return 'Yes';
      } else {
        return 'No';
      }
    };
  });