import Player from "../model/Player.js";
import PcController from "./PcController";

/**
 * Code impemented to play battleship in the command line
 */

const playGame = () => {
  const pcController = PcController();
  const player1 = new Player("Jairo", "real");
  const player2 = pcController.initPlayer();

  player1.ships.forEach((ship) => {
    const direction = "horizontal";
    const x = ship.length;
    const y = 10 - ship.length;
    player1.gameBoard.placeShip(ship, [x, y], direction);
  });

  let currentPlayer = player1;

  const playRound = (coords) => {
    const attackPlayer = currentPlayer === player1 ? player2 : player1;
    const result = attackPlayer.gameBoard.receiveAttack(coords);
    currentPlayer = currentPlayer === player1 ? player2 : player1;
    return attackPlayer;
  };

  const getCurrPlayer = function () {
    return currentPlayer;
  };

  return {
    playRound,
    player1,
    player2,
    getCurrPlayer,
  };
};

export default playGame;
