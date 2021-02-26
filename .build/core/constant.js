"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.State = void 0;
var State;
exports.State = State;

(function (State) {
  State[State["Open"] = 0] = "Open";
  State[State["Waiting"] = 1] = "Waiting";
  State[State["Close"] = 2] = "Close";
})(State || (exports.State = State = {}));