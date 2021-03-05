import { State } from '../core/constant';

export default class Cook {
  private static _nb = 1;
  private id: number;
  private state: State;
  private order = '';

  constructor() {
    this.id = Cook._nb;
    Cook._nb++;
    this.state = State.Open;
  }

  public getOrder(): string {
    return this.order;
  }
  public setOrder(order: string): void {
    this.order = order;
  }
}
