export default class Ship {
  #length;
  #hit;
  #sunk;

  constructor(length) {
    this.#length = length;
    this.#hit = 0;
    this.#sunk = false;
  }

  get length() {
    return this.#length;
  }

  get hit() {
    return this.#hit;
  }

  isSunk() {
    this.#sunk = this.#hit === this.#length;
    return this.#sunk;
  }

  set hit(hit) {
    this.#hit += 1;
    this.isSunk();
  }

  get sunk() {
    return this.#sunk;
  }
}
