import { State } from '../core/constant';

export default class Kitchen {
  constructor() {
    this.state = State.Open;
  }
  private state: State;
  public createCook(howManyCooks: number): void {
    console.log(howManyCooks);
  }

  public orderIsReady(): void {
    console.log('votre commande est prête');
  }
}
