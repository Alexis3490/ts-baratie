"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _Kitchen = _interopRequireDefault(require("./classes/Kitchen"));

var _readline = _interopRequireDefault(require("readline"));

var _checkMenu = require("./core/helpers/checkMenu");

var _chalk = _interopRequireDefault(require("chalk"));

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
    var time = args[2];
    console.log(_chalk["default"].blue("Multiplier for the cooking time of the dish : ".concat(multiplier)));
    console.log(_chalk["default"].blue("The number of cooks per kitchen : ".concat(cooks)));
    console.log(_chalk["default"].blue("The time in milliseconds, used by the kitchen stock to replace ingredients : ".concat(time)));
    console.log('what is your order ?');

    var rl = _readline["default"].createInterface({
      input: process.stdin
    });

    rl.on('line', function (input) {
      var orders = input.split(';');

      var _iterator = _createForOfIteratorHelper(orders),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var order = _step.value;

          if (order !== '') {
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

      if (correctOrder) {
        var initialKitchen = new _Kitchen["default"]();
        console.log(initialKitchen.getNbCooks().length);

        if (initialKitchen.getNbCooks().length == 0) {
          console.log('passe');
          initialKitchen.assignCooks(cooks);
        }

        console.log(initialKitchen.getNbCooks());
      }
    });
  }
};

main();