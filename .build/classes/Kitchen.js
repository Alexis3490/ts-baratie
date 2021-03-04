"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var Kitchen = function Kitchen(nbCooks) {
  (0, _classCallCheck2["default"])(this, Kitchen);
  (0, _defineProperty2["default"])(this, "nbCooks", void 0);
  this.nbCooks = nbCooks;
};

exports["default"] = Kitchen;