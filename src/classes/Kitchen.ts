import { State } from '../core/constant';
import Cook from './Cook';
import { listOrder } from '../core/helpers/listOrder';

export default class Kitchen {
  private nbCooks: Cook[] = [];
  private state: State;
  private stock: object;
  private commands: object | number;
  private numberDishesPerOrder: object | number;

  constructor(cooks: number) {
    this.assignCooks(cooks);
    this.state = State.Open;
    this.stock = {};
    this.commands = {};
    this.numberDishesPerOrder = {};
  }

  public assignCooks = (cooks: number): void => {
    for (let i = 0; i < cooks; i++) {
      const cook = new Cook();
      this.nbCooks.push(cook);
    }
  };

  public getNbCooks(): number {
    return this.nbCooks.length;
  }

  public getCommand = (
    order: string,
  ): { size: string; name: string; time: string } | number => {
    this.commands = listOrder(order)[0];
    return listOrder(order)[0];
  };

  public GetNumberDishesPerOrder = (
    order: string,
  ): { size: string; name: string; time: string } | number => {
    this.numberDishesPerOrder = listOrder(order)[1];
    return listOrder(order)[1];
  };
}
