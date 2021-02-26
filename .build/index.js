"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _Reception = _interopRequireDefault(require("./classes/Reception"));

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
    reception.createKitchen(); // //Reception
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