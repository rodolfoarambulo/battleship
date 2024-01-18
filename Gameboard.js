import Ship from './Ship';

class Gameboard {
  constructor() {
    this.gameGrid = [];
    this.missedShots = [];
    this.initialize();
  };

  initialize() {
    for (let i = 0; i < 10; i++) {
      this.gameGrid[i] = [];
      this.missedShots[i] = [];
      for (let j = 0; j < 10; j++) {
        this.gameGrid[i][j] = null;
        this.missedShots[i][j] = false;
      }
    }
  };

  placeShip(x, y, length) {
    const ship = new Ship(length);
    this.gameGrid[x][y] = ship;
  };

  receiveAttack(x, y) {
    if (this.gameGrid[x][y] != null) {
      this.gameGrid[x][y].hit();
    } else {
      this.missedShots[x][y] = true;
    }
  };

  areAllShipsSunk() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (this.gameGrid[i][j] === null) {
          continue;
        }
        if (this.gameGrid[i][j].isSunk() === false) {
          return false;
        }
      }
    }
    return true;
  }
}

export default Gameboard;


