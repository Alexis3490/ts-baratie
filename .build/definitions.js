"use strict";

var State;

(function (State) {
  State[State["Open"] = 0] = "Open";
  State[State["Wating"] = 1] = "Wating";
  State[State["Close"] = 2] = "Close";
})(State || (State = {}));