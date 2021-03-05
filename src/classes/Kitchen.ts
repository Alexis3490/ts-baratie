import { State } from '../core/constant';
import Cook from './Cook';
import { listMenu } from '../core/helpers/listMenu';

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
    menu: string,
  ): { size: string; name: string; time: string } | number => {
    this.commands = listMenu(menu)[0];
    return listMenu(menu)[0];
  };

  public GetNumberDishesPerOrder = (
    menu: string,
  ): { size: string; name: string; time: string } | number => {
    this.numberDishesPerOrder = listMenu(menu)[1];
    return listMenu(menu)[1];
  };
}
