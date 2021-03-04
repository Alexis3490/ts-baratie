import { State } from '../core/constant';
import Cook from './Cook';

export default class Kitchen {
  private nbCooks: Cook[];
  private state: State;
  private stock: object;
  constructor(cooks: number) {
    this.assignCooks(cooks);
    this.state = State.Open;
    this.stock = {};
    this.nbCooks = [];
  }

  public assignCooks = (cooks: number): void => {
    const cooker = [];
    for (let i = 0; i < cooks; i++) {
      const cook = new Cook();
      cooker.push(cook);
    }
    this.nbCooks = cooker;
  };

  public getNbCooks(): number {
    return this.nbCooks.length;
  }
}
