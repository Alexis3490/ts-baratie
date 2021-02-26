"use strict";

var _cluster = _interopRequireDefault(require("cluster"));

var _os = _interopRequireDefault(require("os"));

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

if (_cluster["default"].isMaster) {
  for (var i = 0; i < _os["default"].cpus().length; i++) {
    _cluster["default"].fork();

    var menu = _readlineSync["default"].question('What is your order ? ');

    var globalRegex = new RegExp('[a-zA-Z]+.(S|M|L|XL|XXL)+.x([1-9]|[1-9][0-9]+)(;|)', 'g');
    var MultipleCommands = new RegExp('.*;.*', 'g');

    if (globalRegex.test(menu)) {
      if (MultipleCommands.test(menu)) {
        var listProducts = menu.split(';');
        console.log(listProducts.length);
        var data = '{"products":[]}';
        var json = JSON.parse(data);

        for (var _i = 0; _i < listProducts.length; _i++) {
          var products = listProducts[_i].split(' ');

          if (products.length > 3) {
            products = products.slice(1, products.length);
          }

          json['products'].push({
            name: products[0],
            size: products[1],
            time: products[2]
          });
        }

        console.log(json);
      } else {
        var _products = menu.split(' ');

        var _data = {
          name: _products[0],
          size: _products[1],
          time: _products[2]
        };
        console.log(_data);
      }
    } else {
      console.log('Your order is not correct');
    }
  }
}