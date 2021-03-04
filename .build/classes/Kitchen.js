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

var _Cook = _interopRequireDefault(require("./Cook"));

var Kitchen = /*#__PURE__*/function () {
  function Kitchen() {
    (0, _classCallCheck2["default"])(this, Kitchen);
    (0, _defineProperty2["default"])(this, "nbCooks", []);
    (0, _defineProperty2["default"])(this, "state", void 0);
    (0, _defineProperty2["default"])(this, "stock", void 0);
    this.state = _constant.State.Open;
    this.stock = {};
  }

  (0, _createClass2["default"])(Kitchen, [{
    key: "assignCooks",
    value: function assignCooks(cooks) {
      for (var i = 0; i < cooks; i++) {
        var cook = new _Cook["default"]();
        cook.defineId();
        this.nbCooks.push(cook);
      }
    }
  }, {
    key: "getNbCooks",
    value: function getNbCooks() {
      return this.nbCooks;
    }
  }]);
  return Kitchen;
}();

exports["default"] = Kitchen;