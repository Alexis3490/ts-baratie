"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _cluster = _interopRequireDefault(require("cluster"));

var Reception = /*#__PURE__*/function () {
  function Reception() {
    (0, _classCallCheck2["default"])(this, Reception);
    (0, _defineProperty2["default"])(this, "id", void 0);
    this.id = Reception._nb;
  }

  (0, _createClass2["default"])(Reception, [{
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
  }, {
    key: "orderDish",
    value: function orderDish() {
      console.log('commandé un plat');
    }
  }, {
    key: "kitchenState",
    value: function kitchenState() {
      console.log('etat cuisine ect ');
    }
  }, {
    key: "displayData",
    value: function displayData() {
      console.log('affiche les informations');
    }
  }, {
    key: "save",
    value: function save() {
      console.log('conserver un enregistrement');
    }
  }]);
  return Reception;
}();

exports["default"] = Reception;
(0, _defineProperty2["default"])(Reception, "_nb", 1);