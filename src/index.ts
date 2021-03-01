/* eslint-disable no-console */
/**
 * Recuperer les infos lors de la commande Yarn start
 * Creer une cuisine + associer le nombre de cuisinier par cuisine
 * Commander un plat via la ligne de commande
 * Verifier si la commande du plat est valide
 * Avec la commande "status" afficher les cuisines
 */

import { Worker, isMainThread } from 'worker_threads';
import cluster from 'cluster';
import Reception from './classes/Reception';
import Kitchen from './classes/Kitchen';


const main = () => {
  const args: string[] = process.argv.slice(2);

  if (args.length !== 3) {
    console.log('usage: yarn start <MULTIPLIER> <NUMBEROFCOOKS> <TIME>');
    process.exit(0);
  } else {
    const multiplier = parseInt(args[0]);
    const cooks = parseInt(args[1]);
    const time = args[2];

    const reception = new Reception();
    reception.createKitchen();

    //const kitchen = new Kitchen();
    //kitchen.CommandClient()


    // //Reception
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
