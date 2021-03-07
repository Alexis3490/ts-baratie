"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _Kitchen = _interopRequireDefault(require("./classes/Kitchen"));

var _readline = _interopRequireDefault(require("readline"));

var _checkMenu = require("./core/helpers/checkMenu");

var _chalk = _interopRequireDefault(require("chalk"));

var _updateAllStocks = _interopRequireDefault(require("./core/helpers/updateAllStocks"));

var _affectOrder = require("./core/helpers/order/affectOrder");

var _fs = _interopRequireDefault(require("fs"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var main = function main() {
  var correctOrder = true;
  var args = process.argv.slice(2);

  if (args.length !== 3) {
    console.log('usage: yarn start <MULTIPLIER> <COOKS> <TIME>');
    process.exit(0);
  } else {
    var multiplier = parseInt(args[0]);
    var cooks = parseInt(args[1]);
    var time = parseInt(args[2]);
    var directory = 'data';
    var path = "".concat(directory, "/data.txt");

    if (_fs["default"].existsSync(path)) {
      _fs["default"].truncate(path, 0, function () {//console.log('file empty');
      });
    }

    console.log(_chalk["default"].blue("Multiplier for the cooking time of the dish : ".concat(multiplier)));
    console.log(_chalk["default"].blue("The number of cooks per kitchen : ".concat(cooks)));
    console.log(_chalk["default"].blue("The time in milliseconds, used by the kitchen stock to replace ingredients : ".concat(time)));
    console.log('What is your order ?');
    var initialKitchen = new _Kitchen["default"](cooks);
    (0, _updateAllStocks["default"])(time, initialKitchen);

    var rl = _readline["default"].createInterface({
      input: process.stdin
    });

    rl.on('line', function (input) {
      var orders = input.split(';');
      orders.filter(function (el) {
        return el !== '';
      });

      var _iterator = _createForOfIteratorHelper(orders),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var order = _step.value;

          if (order !== '' && input !== 'status') {
            if (!(0, _checkMenu.checkMenu)(order)) {
              correctOrder = false;
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (input == 'status') {
        var _iterator2 = _createForOfIteratorHelper(initialKitchen.getInstanceKitchens()),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var kitchen = _step2.value;
            console.log(kitchen.getStatus());
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }

      if (correctOrder && input != 'status') {
        var kitchens = initialKitchen.getInstanceKitchens();
        var limitOrderPerKitchen = 2 * cooks;

        if (orders.length > limitOrderPerKitchen) {
          console.log(_chalk["default"].red('Each kitchen CANNOT accept more than 2 * N dishes'));
        } else {
          (0, _affectOrder.affectOrderToKitchen)(kitchens, orders, limitOrderPerKitchen, cooks, initialKitchen); // assign each kitchen order by cook

          (0, _affectOrder.affectOrderToCook)(kitchens, time);
        }
      }
    });
  }
};

main();