"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constant = require("../core/constant");

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Kitchen = /*#__PURE__*/function () {
  function Kitchen() {
    _classCallCheck(this, Kitchen);

    this.state = _constant.State.Open;
  }

  _createClass(Kitchen, [{
    key: "createCook",
    value: function createCook(howManyCooks) {
      console.log(howManyCooks);
    }
  }, {
    key: "CommandClient",
    value: function CommandClient() {
      var menu = _readlineSync["default"].question('What is your order ? ');

      var globalRegex = new RegExp('[a-zA-Z]+.(S|M|L|XL|XXL)+.x([1-9]|[1-9][0-9]+)(;|)', 'g');
      var MultipleCommands = new RegExp('.*;.*', 'g');

      if (globalRegex.test(menu)) {
        if (MultipleCommands.test(menu)) {
          var listProducts = menu.split(';');
          var data = '{"products":[]}';
          var json = JSON.parse(data);

          for (var i = 0; i < listProducts.length; i++) {
            var products = listProducts[i].split(' ');

            if (products.length > 3) {
              products = products.slice(1, products.length);
            }

            json['products'].push({
              name: products[0],
              size: products[1],
              time: products[2]
            });
          }

          this.menu = json;
          console.log(this.menu);
        } else {
          var _products = menu.split(' ');

          this.menu = {
            name: _products[0],
            size: _products[1],
            time: _products[2]
          };
          console.log(this.menu);
        }
      } else {
        console.log('Your order is not correct');
      }
    }
  }, {
    key: "orderIsReady",
    value: function orderIsReady() {
      console.log('votre commande est prête');
    }
  }]);

  return Kitchen;
}();

exports["default"] = Kitchen;