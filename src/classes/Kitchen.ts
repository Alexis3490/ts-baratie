import { State } from '../core/constant';
import { Stock } from '../core/constant';

import Cook from './Cook';

export default class Kitchen {
  private id: number;
  private static _nb = 1;

  private cooks: Cook[] = [];
  private state: State;
  private stock: any;
  private orders: string[] = [];
  private static instanceKitchens: Kitchen[] = [];
  constructor(cooks: number) {
    this.id = Kitchen._nb;
    Kitchen._nb++;
    this.assignCooks(cooks);
    this.state = State.Available;
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
      const cook = new Cook(this);
      this.cooks.push(cook);
    }
  }

  public getInstanceKitchens(): Kitchen[] {
    return Kitchen.instanceKitchens;
  }

  public addOders(order: string): void {
    this.orders.push(order.trim());
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
    for (let i = 0; i < this.orders.length; i++) {
      for (const index in this.cooks) {
        if (
          this.cooks[index].getOrder() !== null ||
          this.cooks[index].getOrder() == undefined
        ) {
          if (this.orders[index]) {
            this.cooks[index].setOrder(this.orders[index]);
            this.cooks[index];
          }
        }
      }
    }
  }

  public getCooks(): Cook[] {
    return this.cooks;
  }
  public getId(): number {
    return this.id;
  }
  public updateStockByCook(dataDish: string[]): Stock {
    for (const index in dataDish) {
      if (parseInt(index) !== dataDish.length - 1) {
        this.stock[dataDish[index]] = this.stock[dataDish[index]] - 1;
      }
    }

    return this.stock;
  }
  public setState(state: State): void {
    this.state = state;
  }

  public removeDish(dish: string): void {
    this.orders = this.orders.filter(el => el !== dish);
    if (this.orders.length === 0) {
      this.state = State.Available;
    }
  }
}
