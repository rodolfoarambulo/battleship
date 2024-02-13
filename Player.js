import Gameboard from "./Gameboard";

export class Player {
  constructor(name) {
    this.name = name;
    this.playerBoard = new Gameboard();
  }

  attack(x, y, enemyBoard) {
    enemyBoard.receiveAttack(x, y);
  }
}

export class Computer extends Player {
  constructor() {
    super('Computer');
  }

  roll() {
    return Math.floor(Math.random() * 9);
  }

  attack(enemyBoard) {
    let x = this.roll();
    let y = this.roll();
    enemyBoard.receiveAttack(x, y);
  }
}
