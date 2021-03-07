"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _constant = require("../core/constant");

var _fs = _interopRequireDefault(require("fs"));

var _Cook = _interopRequireDefault(require("./Cook"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var Kitchen = /*#__PURE__*/function () {
  function Kitchen(cooks) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, Kitchen);
    (0, _defineProperty2["default"])(this, "id", void 0);
    (0, _defineProperty2["default"])(this, "cooks", []);
    (0, _defineProperty2["default"])(this, "state", void 0);
    (0, _defineProperty2["default"])(this, "status", void 0);
    (0, _defineProperty2["default"])(this, "stock", void 0);
    (0, _defineProperty2["default"])(this, "orders", []);
    (0, _defineProperty2["default"])(this, "getStatus", function () {
      var keys = Object.keys(_this.stock);
      var value = Object.values(_this.stock);
      var kitchen = '{}';
      var json = JSON.parse(kitchen);
      var obj = {};

      for (var i = 1; i < keys.length; i++) {
        obj[keys[i]] = value[i];
      }

      json.kitchen = _this.id;
      json.stocks = obj;
      json.state = _this.state;

      var _iterator = _createForOfIteratorHelper(_this.cooks),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var cook = _step.value;
          json["cook_".concat(cook.getId(), "_state")] = cook.getState();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return json;
    });
    (0, _defineProperty2["default"])(this, "saveCommand", function (id, dish) {
      var directory = 'data';
      var path = "".concat(directory, "/data.txt");

      if (!_fs["default"].existsSync(directory)) {
        _fs["default"].mkdirSync(directory);
      }

      if (_fs["default"].existsSync(path)) {
        _fs["default"].appendFileSync(path, "\nThe kitchen number ".concat(id, " make the dish ").concat(dish));
      } else {
        _fs["default"].writeFileSync(path, "The kitchen number ".concat(id, " make the dish ").concat(dish));
      }
    });
    this.id = Kitchen._nb;
    Kitchen._nb++;
    this.assignCooks(cooks);
    this.state = _constant.State.Available;
    this.stock = {
      octopus: 5,
      sojaSauce: 5,
      rice: 5,
      pork: 5,
      eggs: 5,
      noodle: 5,
      chicken: 5,
      dough: 5,
      matcha: 5,
      chocolate: 5
    };
    Kitchen.instanceKitchens.push(this);
  }

  (0, _createClass2["default"])(Kitchen, [{
    key: "assignCooks",
    value: function assignCooks(cooks) {
      for (var i = 0; i < cooks; i++) {
        var cook = new _Cook["default"](this);
        this.cooks.push(cook);
      }
    }
  }, {
    key: "getInstanceKitchens",
    value: function getInstanceKitchens() {
      return Kitchen.instanceKitchens;
    }
  }, {
    key: "addOders",
    value: function addOders(order) {
      this.orders.push(order.trim());
    }
  }, {
    key: "getOrders",
    value: function getOrders() {
      return this.orders;
    }
  }, {
    key: "updateAllStocks",
    value: function updateAllStocks() {
      var _iterator2 = _createForOfIteratorHelper(this.getInstanceKitchens()),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var kitchen = _step2.value;
          kitchen.stock = {
            octopus: kitchen.stock.octopus + 1,
            sojaSauce: kitchen.stock.sojaSauce + 1,
            rice: kitchen.stock.rice + 1,
            pork: kitchen.stock.pork + 1,
            eggs: kitchen.stock.eggs + 1,
            noodle: kitchen.stock.noodle + 1,
            chicken: kitchen.stock.chicken + 1,
            dough: kitchen.stock.dough + 1,
            matcha: kitchen.stock.matcha + 1,
            chocolate: kitchen.stock.chocolate + 1
          };
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "assignOrderToCook",
    value: function assignOrderToCook() {
      for (var i = 0; i < this.orders.length; i++) {
        for (var index in this.cooks) {
          if (this.cooks[index].getOrder() !== null || this.cooks[index].getOrder() == undefined) {
            if (this.orders[index]) {
              this.cooks[index].setOrder(this.orders[index]);
              this.cooks[index];
            }
          }
        }
      }
    }
  }, {
    key: "getCooks",
    value: function getCooks() {
      return this.cooks;
    }
  }, {
    key: "getId",
    value: function getId() {
      return this.id;
    }
  }, {
    key: "updateStockByCook",
    value: function updateStockByCook(dataDish) {
      for (var index in dataDish) {
        if (parseInt(index) !== dataDish.length - 1) {
          this.stock[dataDish[index]] = this.stock[dataDish[index]] - 1;
        }
      }

      return this.stock;
    }
  }, {
    key: "setState",
    value: function setState(state) {
      this.state = state;
    }
  }, {
    key: "removeDish",
    value: function removeDish(dish) {
      this.orders = this.orders.filter(function (el) {
        return el !== dish;
      });

      if (this.orders.length === 0) {
        this.state = _constant.State.Available;
      }
    }
  }]);
  return Kitchen;
}();

exports["default"] = Kitchen;
(0, _defineProperty2["default"])(Kitchen, "_nb", 1);
(0, _defineProperty2["default"])(Kitchen, "instanceKitchens", []);