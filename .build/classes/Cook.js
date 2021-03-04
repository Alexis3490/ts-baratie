"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var Cook = /*#__PURE__*/function () {
  function Cook() {
    (0, _classCallCheck2["default"])(this, Cook);
    (0, _defineProperty2["default"])(this, "id", 0);
  }

  (0, _createClass2["default"])(Cook, [{
    key: "defineId",
    value: function defineId() {
      this.id = Cook._nb;
      Cook._nb++;
    }
  }]);
  return Cook;
}();

exports["default"] = Cook;
(0, _defineProperty2["default"])(Cook, "_nb", 1);