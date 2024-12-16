import Ship from "./Ship.js";
export default function GameBoard() {
  let board = [];
  for (let i = 0; i < 10; i++) {
    let row = [];
    for (let j = 0; j < 10; j++) {
      row.push(0);
    }
    board.push(row);
  }

  const ships = [];
  for (let i = 2; i <= 6; i++) {
    ships.push(new Ship(i));
  }

  const placeShip = function (ship, coords, direction) {
    if (
      typeof ship === "object" &&
      typeof coords === "object" &&
      typeof direction === "string"
    ) {
      const size = ship.length;
      const b = JSON.parse(JSON.stringify(this.board));
      let x = coords[0];
      let y = coords[1];
      for (let i = 0; i < size; i++) {
        if (b[x][y] !== 0) {
          return null;
        }
        b[x][y] = size;
        y = direction === "horizontal" ? y + 1 : y;
        x = direction === "vertical" ? x + 1 : x;
      }
      this.board = b;
      return board;
    }
    return null;
  };

  const receiveAttack = function (coords) {
    if (this.board[coords[0]][coords[1]] !== 0) {
      const val = this.board[coords[0]][coords[1]];
      if (val === -1 || val === 1) {
        return {
          ship: null,
          sunk: false,
        };
      }
      this.board[coords[0]][coords[1]] = 1;
      const ship = ships[val - 2];
      ship.hit = 1;
      const sunkships = ships.filter((item) => item.sunk);
      return {
        ship: ship,
        sunk: sunkships.length === ships.length,
      };
    }
    this.board[coords[0]][coords[1]] = -1;
    return {
      ship: null,
      sunk: false,
    };
  };

  return {
    board,
    ships,
    placeShip,
    receiveAttack,
  };
}
