angular.module('shopping_cart')
  .factory('itemFactory', ['$http', function($http) {
    var items = {};
    items.items = [];
    items.categories = [];

    function addDecimal(num) {
      var string = num.toString();
      var split = string.split('');
      split.splice(split.length-2, 0, '.');
      var joined = split.join('');
      return joined;
    }

    function setSelectOptions(data) {
      data.forEach(function(teaObj) {
        teaObj.categories.forEach(function(category) {
          if (items.categories.indexOf(category) === -1) {
            items.categories.push(category);
          }
        });
      });
    }

    $http.get('../lib/data.json')
      .success(function(data) {
        items.items = data;
        setSelectOptions(data);
      })
      .error(function(error) {
        console.log(error);
    });

    items.addToBag = function(id, num) {
      var qty = isNaN(num) ? 1 : num;
      items.items.forEach(function(tea) {
        if (tea._id === id) {
          if (!tea.qty) {
            tea.qty = qty;
            tea.subTtl = qty * addDecimal(tea.price);
          } else {
            tea.qty += qty;
            tea.subTtl = tea.qty * addDecimal(tea.price);
          }
        }
      });
    };

    items.changeQty = function(id, num) {
      var qty = isNaN(num) ? 1 : num;
      items.items.forEach(function(tea) {
        if (tea._id === id) {
          tea.qty = qty;
          tea.subTtl = qty * addDecimal(tea.price);
        }
      });
    };

    items.clearItem = function(id) {
      items.items.forEach(function(tea) {
        if (tea._id === id) {
          delete tea.qty;
          delete tea.subTtl;
        }
      });
    };

    items.getItems = function() {
      return items.items;
    };

    items.getCategories = function() {
      return items.categories;
    };

    items.getBagCount = function() {
      var num = 0;
      items.items.forEach(function(tea) {
        if (tea.qty) {
          num += tea.qty;
        }
      });
      return num;
    };

    items.getTotal = function() {
      var total = 0;
      items.items.forEach(function(tea) {
        if (tea.subTtl) {
          total += tea.subTtl;
        }
      });
      return total;
    };

    return items;

  }]);