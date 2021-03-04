import { State } from '../core/constant';
import Cook from './Cook';

export default class Kitchen {
  private nbCooks: any[] = [];
  private state: State;
  private stock: object;
  constructor(cooks: number) {
    this.assignCooks(cooks);
    this.state = State.Open;
    this.stock = {};
  }

  public assignCooks = (cooks: number): void => {
    for (let i = 0; i < cooks; i++) {
      const cook = new Cook();
      this.nbCooks.push(cook);
    }
  };

  public getNbCooks(): Cook[] {
    return this.nbCooks;
  }
}
