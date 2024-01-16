import Ship from './Ship';

class Gameboard {
  constructor() {
    this.board = [];
    this.missedShots = [];
    this.initialize();
  };

  initialize() {
    for (let i = 0; i < 10; i++) {
      this.board[i] = [];
      this.missedShots[i] = [];
      for (let j = 0; j < 10; j++) {
        this.board[i][j] = null;
        this.missedShots[i][j] = false;
      }
    }
  };

  placeShip(x, y, length) {
    const ship = new Ship(length);
    this.board[x][y] = ship;
  };

  receiveAttack(x, y) {
    if (this.board[x][y] != null) {
      this.board[x][y].hit();
    } else {
      this.missedShots[x][y] = true;
    }
  };

  areAllShipsSunk() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (this.board[i][j] === null) {
          continue;
        }
        if (this.board[i][j].isSunk() === false) {
          return false;
        }
      }
    }
    return true;
  }
}

export default Gameboard;


