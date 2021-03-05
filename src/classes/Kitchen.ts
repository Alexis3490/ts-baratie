import { State } from '../core/constant';
import { Stock } from '../core/constant';

import Cook from './Cook';

export default class Kitchen {
  private id: number;
  private static _nb = 1;

  private cooks: Cook[] = [];
  private state: State;
  private stock: Stock;
  private orders: string[] = [];
  private static instanceKitchens: Kitchen[] = [];
  constructor(cooks: number) {
    this.id = Kitchen._nb;
    Kitchen._nb++;
    this.assignCooks(cooks);
    this.state = State.Open;
    this.stock = {
      octopus: 5,
      sojaSauce: 5,
      rice: 5,
      pork: 5,
      eggs: 5,
      noodle: 5,
      chicken: 5,
      dough: 5,
      matcha: 5,
      chocolate: 5,
    };
    Kitchen.instanceKitchens.push(this);
  }

  public assignCooks(cooks: number): void {
    for (let i = 0; i < cooks; i++) {
      const cook = new Cook();
      this.cooks.push(cook);
    }
  }

  public getInstanceKitchens(): Kitchen[] {
    return Kitchen.instanceKitchens;
  }

  public addOders(order: string): void {
    this.orders.push(order);
  }

  public getOrders(): string[] {
    return this.orders;
  }

  public updateAllStocks(): void {
    for (const kitchen of this.getInstanceKitchens()) {
      kitchen.stock = {
        octopus: kitchen.stock.octopus + 1,
        sojaSauce: kitchen.stock.sojaSauce + 1,
        rice: kitchen.stock.rice + 1,
        pork: kitchen.stock.pork + 1,
        eggs: kitchen.stock.eggs + 1,
        noodle: kitchen.stock.noodle + 1,
        chicken: kitchen.stock.chicken + 1,
        dough: kitchen.stock.dough + 1,
        matcha: kitchen.stock.matcha + 1,
        chocolate: kitchen.stock.chocolate + 1,
      };
    }
  }

  public assignOrderToCook(): void {
    let finalIndex: number;
    for (let i = 0; i < this.orders.length; i++) {
      for (const index in this.cooks) {
        console.log('cook', this.cooks[index]);
        if (
          this.cooks[index].getOrder() !== null ||
          this.cooks[index].getOrder() == undefined
        ) {
          console.log('cook', this.cooks[index]);

          if (parseInt(index) != 0) {
            finalIndex = parseInt(index) - 1;
          } else {
            finalIndex = parseInt(index);
          }
          if (this.orders[finalIndex]) {
            this.cooks[index].setOrder(this.orders[finalIndex]);
          }

          this.orders = this.orders.filter(
            el => el !== this.orders[finalIndex],
          );
        }
      }
    }
  }
}
