import "./style.css";
import playGame from "./controller/CliController.js";

window.a = playGame();
console.log(window.a.player1.board);
