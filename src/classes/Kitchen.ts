import { State, stocks } from '../core/constant';
import Cook from './Cook';
import fs from 'fs';
import { listOrder } from '../core/helpers/listOrder';

export default class Kitchen {
  private id: number;
  private static _nb = 1;
  private nbCooks: Cook[] = [];
  private state: State;
  private status: string | undefined;
  private commands: object | number;
  private numberDishesPerOrder: object | number;
  private static instanceKitchens: Kitchen[] = [];

  constructor(cooks: number) {
    this.id = Kitchen._nb;
    Kitchen._nb++;
    this.assignCooks(cooks);
    this.state = State.Open;
    this.commands = {};
    this.numberDishesPerOrder = {};
    this.getStock(stocks);
    Kitchen.instanceKitchens.push(this);
  }

  public assignCooks = (cooks: number): void => {
    for (let i = 0; i < cooks; i++) {
      const cook = new Cook();
      this.nbCooks.push(cook);
    }
  };

  public getInstanceKitchens(): Kitchen[] {
    return Kitchen.instanceKitchens;
  }

  public getNbCooks(): Cook[] {
    return this.nbCooks;
  }

  public addOrders = (order: string): void => {
    this.commands = listOrder(order)[0];
  };

  public getNumberDishesPerOrder = (order: string): void => {
    this.numberDishesPerOrder = listOrder(order)[1];
  };

  public getStock = (stock: any): string => {
    const keys = Object.keys(stock);
    const value = Object.values(stock);
    const kitchen = '{}';
    const json = JSON.parse(kitchen);
    const obj: any = {};
    for (let i = 1; i < keys.length; i++) {
      obj[keys[i]] = value[i];
    }
    json.stocks = obj;
    json.state = this.state;
    json.kitchen = this.id;
    return (this.status = JSON.stringify(json, null, 2));
  };

  public saveCommand = (id: number, dish: string): void => {
    const directory = 'data';
    const path = `${directory}/data.txt`;
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory);
    }
    if (fs.existsSync(path)) {
      fs.appendFileSync(
        path,
        `\nThe kitchen number ${id} make the dish : ${dish}`,
      );
    } else {
      fs.writeFileSync(path, `The kitchen number ${id} make the dish ${dish}`);
    }
  };
}
