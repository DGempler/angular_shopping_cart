angular.module('shopping_cart')
  .filter('addDecimal', function() {
    return function(num) {
      var string = num.toString();
      var split = string.split('');
      split.splice(split.length-2, 0, '.');
      var joined = split.join('');
      return joined;
    };
  });