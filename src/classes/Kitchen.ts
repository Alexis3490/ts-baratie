import { State } from '../core/constant';
import Cook from './Cook';

export default class Kitchen {
  private id: number;
  private static _nb = 1;

  private nbCooks: Cook[] = [];
  private state: State;
  private stock: object;
  private orders: string[] = [];
  private static instanceKitchens: Kitchen[] = [];
  constructor(cooks: number) {
    this.id = Kitchen._nb;
    Kitchen._nb++;
    this.assignCooks(cooks);
    this.state = State.Open;
    this.stock = {};
    Kitchen.instanceKitchens.push(this);
  }

  public assignCooks(cooks: number): void {
    for (let i = 0; i < cooks; i++) {
      const cook = new Cook();
      this.nbCooks.push(cook);
    }
  }

  public getInstanceKitchens(): Kitchen[] {
    return Kitchen.instanceKitchens;
  }

  public addOders(order: string): void {
    this.orders.push(order);
  }

  public getNbCooks(): Cook[] {
    return this.nbCooks;
  }
}
