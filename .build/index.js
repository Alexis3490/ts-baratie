"use strict";

var _Reception = _interopRequireDefault(require("./classes/Reception"));

var _Kitchen = _interopRequireDefault(require("./classes/Kitchen"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable no-console */

/**
 * Recuperer les infos lors de la commande Yarn start
 * Creer une cuisine + associer le nombre de cuisinier par cuisine
 * Commander un plat via la ligne de commande
 * Verifier si la commande du plat est valide
 * Avec la commande "status" afficher les cuisines
 */
var main = function main() {
  var args = process.argv.slice(2);

  if (args.length !== 3) {
    console.log('usage: yarn start <MULTIPLIER> <NUMBEROFCOOKS> <TIME>');
    process.exit(0);
  } else {
    var multiplier = parseInt(args[0]);
    var cooks = parseInt(args[1]);
    var time = args[2];
    var reception = new _Reception["default"]();
    reception.createKitchen();
    var kitchen = new _Kitchen["default"]();
    kitchen.CommandClient(); // //Reception
    // if (cluster.isMaster) {
    //   //create Kitchen
    //   cluster.fork({ kitchenId: 1 });
    // } else {
    //   //in Kitchen
    //   if (isMainThread) {
    //     //create Cooker
    //     new Worker(__filename);
    //     console.log(isMainThread);
    //     console.log(
    //       `[${process.env.kitchenId}] I am the kitchen ${process.pid}`,
    //     );
    //   } else {
    //     // in Cook
    //     console.log('cook');
    //   }
    // }
  }
};

main();