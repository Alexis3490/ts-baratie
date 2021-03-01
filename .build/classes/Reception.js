"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _cluster = _interopRequireDefault(require("cluster"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Reception = /*#__PURE__*/function () {
  function Reception() {
    _classCallCheck(this, Reception);

    this.id = Reception._nb;
  }

  _createClass(Reception, [{
    key: "createKitchen",
    value: function createKitchen() {
      if (_cluster["default"].isMaster) {
        _cluster["default"].fork({
          kitchenId: this.id
        });
      } else {
        console.log(" Create Kitchen [".concat(this.id, "] with PID : ").concat(process.pid));
      }

      Reception._nb++;
      this.id = Reception._nb;
    }
  }]);

  return Reception;
}();

exports["default"] = Reception;