"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _chalk = _interopRequireDefault(require("chalk"));

var _constant = require("../core/constant");

var _isBookedByCook = require("../core/helpers/isBookedByCook");

var Cook = /*#__PURE__*/function () {
  function Cook(kitchen) {
    (0, _classCallCheck2["default"])(this, Cook);
    (0, _defineProperty2["default"])(this, "id", void 0);
    (0, _defineProperty2["default"])(this, "state", void 0);
    (0, _defineProperty2["default"])(this, "order", '');
    (0, _defineProperty2["default"])(this, "kitchen", void 0);
    this.id = Cook._nb;
    Cook._nb++;
    this.state = _constant.StateCook.Available;
    this.kitchen = kitchen;
  }

  (0, _createClass2["default"])(Cook, [{
    key: "getOrder",
    value: function getOrder() {
      return this.order;
    }
  }, {
    key: "getState",
    value: function getState() {
      return this.state;
    }
  }, {
    key: "getId",
    value: function getId() {
      return this.id;
    }
  }, {
    key: "setOrder",
    value: function setOrder(order) {
      this.order = order;
    }
  }, {
    key: "buildOrder",
    value: function buildOrder(time) {
      var _this = this;

      var splitOrder = this.order.split(' ');
      var dish = splitOrder[0];
      var size = splitOrder[1];
      var numberFlat = splitOrder[2];
      numberFlat = numberFlat.replace('x', '');
      var dataDish = _constant.DishesData[dish];
      console.log(_chalk["default"].yellow("Cook ".concat(this.id, " of the kitchen ").concat(this.kitchen.getId(), " is preparing one ").concat(dish, " ").concat(size)));
      this.state = _constant.StateCook.Cooking;
      this.kitchen.setState(_constant.State.Waiting);
      setTimeout(function () {
        // console.log(this.kitchen.updateStockByCook(Object.keys(dataDish)));
        console.log(_chalk["default"].green("The dish ".concat(dish, " ").concat(size, " is ready now for the kitchen ").concat(_this.kitchen.getId(), " by the cook ").concat(_this.id)));

        _this.kitchen.saveCommand(_this.kitchen.getId(), dish);

        _this.state = _constant.StateCook.Available; // this.kitchen.setState(State.Available);

        _this.kitchen.removeDish(_this.order.trim());

        _this.order = ''; // console.log(this.kitchen);

        if (_this.order == '' && _this.kitchen.getOrders().length !== 0) {
          if (!(0, _isBookedByCook.isBookedByCook)(_this.kitchen)) {
            _this.order = _this.kitchen.getOrders()[0];

            _this.buildOrder(time);
          }
        }
      }, time * dataDish['time']);
    }
  }]);
  return Cook;
}();

exports["default"] = Cook;
(0, _defineProperty2["default"])(Cook, "_nb", 1);