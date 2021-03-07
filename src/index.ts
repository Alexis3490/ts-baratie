import Kitchen from './classes/Kitchen';
import readline from 'readline';
import { checkMenu } from './core/helpers/checkMenu';
import chalk from 'chalk';
import updateAllStocks from './core/helpers/updateAllStocks';
import { affectOrderToKitchen } from './core/helpers/affectOrder';
import { affectOrderToCook } from './core/helpers/affectOrder';

import fs from 'fs';

const main = (): void => {
  let correctOrder = true;
  const args: string[] = process.argv.slice(2);

  if (args.length !== 3) {
    console.log('usage: yarn start <MULTIPLIER> <COOKS> <TIME>');
    process.exit(0);
  } else {
    const multiplier = parseInt(args[0]);
    const cooks = parseInt(args[1]);
    const time = parseInt(args[2]);

    const directory = 'data';
    const path = `${directory}/data.txt`;
    if (fs.existsSync(path)) {
      fs.truncate(path, 0, () => {
        //console.log('file empty');
      });
    }

    console.log(
      chalk.blue(`Multiplier for the cooking time of the dish : ${multiplier}`),
    );
    console.log(chalk.blue(`The number of cooks per kitchen : ${cooks}`));
    console.log(
      chalk.blue(
        `The time in milliseconds, used by the kitchen stock to replace ingredients : ${time}`,
      ),
    );

    console.log('What is your order ?');

    const initialKitchen = new Kitchen(cooks);

    updateAllStocks(time, initialKitchen);

    const rl = readline.createInterface({
      input: process.stdin,
    });

    rl.on('line', (input: string) => {
      const orders = input.split(';');
      orders.filter(el => el !== '');
      for (const order of orders) {
        if (order !== '' && input !== 'status') {
          if (!checkMenu(order)) {
            correctOrder = false;
          }
        }
      }
      if (input == 'status') {
        for (const kitchen of initialKitchen.getInstanceKitchens()) {
          console.log(kitchen.getStatus());
        }
      }
      if (correctOrder && input != 'status') {
        const kitchens = initialKitchen.getInstanceKitchens();
        const limitOrderPerKitchen: number = 2 * cooks;
        if (orders.length > limitOrderPerKitchen) {
          console.log(
            chalk.red('Each kitchen CANNOT accept more than 2 * N dishes'),
          );
        } else {
          affectOrderToKitchen(
            kitchens,
            orders,
            limitOrderPerKitchen,
            cooks,
            initialKitchen,
          );
          affectOrderToCook(kitchens, time);
        }
      }
    });
  }
};

main();
