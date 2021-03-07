"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DishesData = exports.stocks = exports.Dishsize = exports.DishType = exports.StateCook = exports.State = void 0;
var State;
exports.State = State;

(function (State) {
  State["Available"] = "available";
  State["Waiting"] = "Waiting";
  State["Close"] = "Close";
})(State || (exports.State = State = {}));

var StateCook;
exports.StateCook = StateCook;

(function (StateCook) {
  StateCook["Available"] = "available";
  StateCook["Cooking"] = "Cooking";
})(StateCook || (exports.StateCook = StateCook = {}));

var DishType;
exports.DishType = DishType;

(function (DishType) {
  DishType[DishType["Takoyaki"] = 1] = "Takoyaki";
  DishType[DishType["Katsudon"] = 2] = "Katsudon";
  DishType[DishType["Udon"] = 4] = "Udon";
  DishType[DishType["Ramen"] = 8] = "Ramen";
  DishType[DishType["MatchaCookie"] = 16] = "MatchaCookie";
})(DishType || (exports.DishType = DishType = {}));

var Dishsize;
exports.Dishsize = Dishsize;

(function (Dishsize) {
  Dishsize[Dishsize["S"] = 1] = "S";
  Dishsize[Dishsize["M"] = 2] = "M";
  Dishsize[Dishsize["L"] = 4] = "L";
  Dishsize[Dishsize["XL"] = 8] = "XL";
  Dishsize[Dishsize["XXL"] = 16] = "XXL";
})(Dishsize || (exports.Dishsize = Dishsize = {}));

var stocks;
exports.stocks = stocks;

(function (stocks) {
  stocks[stocks["octopus"] = 5] = "octopus";
  stocks[stocks["sojaSauce"] = 5] = "sojaSauce";
  stocks[stocks["rice"] = 5] = "rice";
  stocks[stocks["pork"] = 5] = "pork";
  stocks[stocks["eggs"] = 5] = "eggs";
  stocks[stocks["noodle"] = 5] = "noodle";
  stocks[stocks["chicken"] = 5] = "chicken";
  stocks[stocks["dough"] = 5] = "dough";
  stocks[stocks["matcha"] = 5] = "matcha";
  stocks[stocks["chocolate"] = 5] = "chocolate";
})(stocks || (exports.stocks = stocks = {}));

var DishesData = {
  Takoyaki: {
    octopus: 1,
    sojaSauce: 1,
    time: 1
  },
  Katsudon: {
    rice: 1,
    pork: 1,
    eggs: 1,
    time: 2
  },
  Udon: {
    noodle: 1,
    pork: 1,
    eggs: 1,
    time: 2
  },
  Ramen: {
    noodle: 1,
    chicken: 1,
    eggs: 1,
    time: 2
  },
  MatchaCookie: {
    dough: 1,
    matcha: 1,
    chocolate: 1,
    time: 4
  }
};
exports.DishesData = DishesData;