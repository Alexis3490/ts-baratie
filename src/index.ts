import Kitchen from './classes/Kitchen';
import readline from 'readline';
import { checkMenu } from './core/helpers/checkMenu';
import chalk from 'chalk';
import updateAllStocks from './core/updateAllStocks';

const main = () => {
  let correctOrder = true;
  const args: string[] = process.argv.slice(2);

  if (args.length !== 3) {
    console.log('usage: yarn start <MULTIPLIER> <COOKS> <TIME>');
    process.exit(0);
  } else {
    const multiplier = parseInt(args[0]);
    const cooks = parseInt(args[1]);
    const time = parseInt(args[2]);

    console.log(
      chalk.blue(`Multiplier for the cooking time of the dish : ${multiplier}`),
    );
    console.log(chalk.blue(`The number of cooks per kitchen : ${cooks}`));
    console.log(
      chalk.blue(
        `The time in milliseconds, used by the kitchen stock to replace ingredients : ${time}`,
      ),
    );

    console.log('what is your order ?');

    const initialKitchen = new Kitchen(cooks);

    updateAllStocks(time, initialKitchen);

    const rl = readline.createInterface({
      input: process.stdin,
    });

    rl.on('line', (input: string) => {
      const orders = input.split(';');
      orders.filter(el => el !== '');
      for (const order of orders) {
        if (order !== '') {
          if (!checkMenu(order)) {
            correctOrder = false;
          }
        }
      }
      if (correctOrder) {
        let kitchens = initialKitchen.getInstanceKitchens();
        // Assign each orders by kitchen
        const orderPerKitchen: number =
          orders.length / initialKitchen.getInstanceKitchens().length;

        const limitOrderPerKitchen: number = 2 * cooks;
        console.log(orders.length);
        if (orders.length > limitOrderPerKitchen) {
          console.log(
            chalk.red('Each kitchen CANNOT accept more than 2 * N dishes'),
          );
        } else {
          for (let i = kitchens.length - 1; i < kitchens.length; i++) {
            if (
              orders.length + kitchens[i].getOrders().length <=
              limitOrderPerKitchen
            ) {
              for (const index in orders) {
                kitchens[i].addOders(orders[index]);
              }
            } else {
              new Kitchen(cooks);
              kitchens = initialKitchen.getInstanceKitchens();
            }
          }
          // console.log('--------- ALL KITCHENS NOW --------- ', kitchens);

          // assign each kitchen order by cook
          for (const kitchen of kitchens) {
            kitchen.assignOrderToCook();
            console.log(kitchen);
            for (const cook of kitchen.getCooks()) {
              if (cook.getOrder() !== '') {
                cook.buildOrder(time);
              }
            }
          }
        }
      }
    });
  }
};

main();
