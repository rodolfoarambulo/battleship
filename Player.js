import Gameboard from "./Gameboard";

class Player {
  constructor(name) {
    this.name = name;
    this.playerBoard = new Gameboard();
  }

  attack(x, y, enemyBoard) {
    enemyBoard.receiveAttack(x, y);
  }
}

export default Player;