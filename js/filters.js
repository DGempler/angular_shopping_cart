var app = angular.module('shopping_cart');

app.filter('convertTF', function() {
  return function(input) {
    if (input) {
      return 'Yes';
    } else {
      return 'No';
    }
  };
});

app.filter('addDecimal', function() {
  return function(num) {
    var string = num.toString();
    var split = string.split('');
    split.splice(split.length-2, 0, '.');
    var joined = split.join('');
    return joined;
  };
});

app.filter('zeroQuantity', function() {
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