import Kitchen from './classes/Kitchen';
import readline from 'readline';
import { checkMenu } from './core/helpers/checkMenu';
import chalk from 'chalk';
import { stocks } from './core/constant';

const main = (): void => {
  let correctOrder = true;
  const args: string[] = process.argv.slice(2);

  if (args.length !== 3) {
    console.log('usage: yarn start <MULTIPLIER> <COOKS> <TIME>');
    process.exit(0);
  } else {
    const multiplier = parseInt(args[0]);
    const cooks = parseInt(args[1]);
    const time = args[2];

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

    const rl = readline.createInterface({
      input: process.stdin,
    });

    rl.on('line', (input: string) => {
      const orders = input.split(';');
      orders.filter(el => el !== '');
      for (const order of orders) {
        if (order !== '' && input !== 'status' && input !== 'save') {
          if (!checkMenu(order)) {
            correctOrder = false;
          }
        }
      }

      if (input == 'status') {
        for (let i = 0; i < 2; i++) {
          console.log(initialKitchen.getInstanceKitchens()[i].getStock(stocks));
        }
      }
      if (input == 'save') {
        console.log('test');
        initialKitchen.saveCommand(1, 'test');
      }

      if (correctOrder && input != 'status' && input != 'save') {
        const orderPerKitchen: number =
          orders.length / initialKitchen.getInstanceKitchens().length;

        const limitOrderPerKitchen: number = 2 * cooks;

        console.log(orderPerKitchen);
        console.log(limitOrderPerKitchen);
        console.log(orders);

        if (orders.length > limitOrderPerKitchen) {
          console.log(
            chalk.red('Each kitchen CANNOT accept more than 2 * N dishes'),
          );
        } else {
          for (const kictchen of initialKitchen.getInstanceKitchens()) {
            for (const index in orders) {
              kictchen.addOrders(orders[index]);
            }
            //console.log(kictchen);
          }
        }
      }
    });
  }
};

main();
