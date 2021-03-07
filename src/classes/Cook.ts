import chalk from 'chalk';
import { DishesData, State, StateCook } from '../core/constant';
import { isBookedByCook } from '../core/helpers/isBookedByCook';
import Kitchen from './Kitchen';

export default class Cook {
  private static _nb = 1;
  private id: number;
  private state: StateCook;
  private order = '';
  private kitchen: Kitchen;

  constructor(kitchen: Kitchen) {
    this.id = Cook._nb;
    Cook._nb++;
    this.state = StateCook.Available;
    this.kitchen = kitchen;
  }

  public getOrder(): string {
    return this.order;
  }
  public getState(): StateCook {
    return this.state;
  }
  public getId(): number {
    return this.id;
  }
  public setOrder(order: string): void {
    this.order = order;
  }
  public buildOrder(time: number): void {
    const splitOrder: string[] = this.order.split(' ');
    const dish: string = splitOrder[0];
    const size: string = splitOrder[1];
    let numberFlat: string = splitOrder[2];
    numberFlat = numberFlat.replace('x', '');
    const dataDish = DishesData[dish];

    console.log(
      chalk.yellow(
        `Cook ${
          this.id
        } of the kitchen ${this.kitchen.getId()} is preparing one ${dish} ${size}`,
      ),
    );
    this.state = StateCook.Cooking;
    this.kitchen.setState(State.Waiting);
    setTimeout(() => {
      // console.log(this.kitchen.updateStockByCook(Object.keys(dataDish)));
      console.log(
        chalk.green(
          `The dish ${dish} ${size} is ready now for the kitchen ${this.kitchen.getId()} by the cook ${
            this.id
          }`,
        ),
      );
      this.kitchen.saveCommand(this.kitchen.getId(), dish);
      this.state = StateCook.Available;
      // this.kitchen.setState(State.Available);
      this.kitchen.removeDish(this.order.trim());
      this.order = '';
      // console.log(this.kitchen);

      if (this.order == '' && this.kitchen.getOrders().length !== 0) {
        if (!isBookedByCook(this.kitchen)) {
          this.order = this.kitchen.getOrders()[0];
          this.buildOrder(time);
        }
      }
    }, time * dataDish['time']);
  }
}
