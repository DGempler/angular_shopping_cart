angular.module('shopping_cart')
  .filter('zeroQuantity', function() {
    return function(teaArray) {
      var newTeaArray = [];
      teaArray.forEach(function(tea) {
        if (tea.qty) {
          newTeaArray.push(tea);
        }
      });
      return newTeaArray;
    };
  });