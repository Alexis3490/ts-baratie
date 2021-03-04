export default class Cook {
  private static _nb = 1;
  private id: number;

  constructor() {
    this.id = Cook._nb;
    Cook._nb++;
  }
}
