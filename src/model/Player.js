import gameBoard from "./GameBoard.js";
export default class Player {
  #gameBoard;
  #name;
  #type;

  constructor(name, type) {
    this.#gameBoard = gameBoard();
    this.#name = name;
    this.#type = type;
  }

  get board() {
    return this.#gameBoard.board;
  }

  get name() {
    return this.#name;
  }

  get ships() {
    return this.#gameBoard.ships;
  }

  get gameBoard() {
    return this.#gameBoard;
  }
}
