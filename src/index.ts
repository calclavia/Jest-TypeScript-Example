
export class Counter {
  constructor(private _count) {

  }

  get count() {
    return this._count
  }

  increment() {
    this._count++;
  }
}
