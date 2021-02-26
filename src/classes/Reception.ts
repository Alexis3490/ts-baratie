import cluster from 'cluster';

export default class Reception {
  private static _nb = 1;
  private id: number;

  constructor() {
    this.id = Reception._nb;
  }
  public createKitchen(): void {
    if (cluster.isMaster) {
      cluster.fork({ kitchenId: this.id });
    } else {
      console.log(` Create Kitchen [${this.id}] with PID : ${process.pid}`);
    }
    Reception._nb++;
    this.id = Reception._nb;
  }
}
