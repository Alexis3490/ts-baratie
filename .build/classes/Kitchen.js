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

var Kitchen = /*#__PURE__*/function () {
  function Kitchen() {
    (0, _classCallCheck2["default"])(this, Kitchen);
    (0, _defineProperty2["default"])(this, "state", void 0);
    this.state = _constant.State.Open;
  }

  (0, _createClass2["default"])(Kitchen, [{
    key: "createCook",
    value: function createCook(howManyCooks) {
      console.log(howManyCooks);
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