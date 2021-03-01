import { State } from '../core/constant';
import readlineSync from 'readline-sync';

export default class Kitchen {
  constructor() {
    this.state = State.Open;
  }
  private state: State;
  public createCook(howManyCooks: number): void {
    console.log(howManyCooks);
  }

  public CommandClient(): void {
    const menu = readlineSync.question('What is your order ? ');
    const globalRegex = new RegExp(
      '[a-zA-Z]+.(S|M|L|XL|XXL)+.x([1-9]|[1-9][0-9]+)(;|)',
      'g',
    );
    const MultipleCommands = new RegExp('.*;.*', 'g');
    if (globalRegex.test(menu)) {
      if (MultipleCommands.test(menu)) {
        const listProducts = menu.split(';');
        const data = '{"products":[]}';
        const json = JSON.parse(data);
        for (let i = 0; i < listProducts.length; i++) {
          let products = listProducts[i].split(' ');
          if (products.length > 3) {
            products = products.slice(1, products.length);
          }
          json['products'].push({
            name: products[0],
            size: products[1],
            time: products[2],
          });
        }
        console.log(json);
      } else {
        const products = menu.split(' ');
        const data = {
          name: products[0],
          size: products[1],
          time: products[2],
        };
        console.log(data);
      }
    } else {
      console.log('Your order is not correct');
    }
  }

  public orderIsReady(): void {
    console.log('votre commande est prête');
  }
}
