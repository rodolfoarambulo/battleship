import Ship from './Ship';

class Gameboard {
  constructor() {
    this.gameGrid = [];
    this.receivedShots = [];
    this.initialize();
  };

  initialize() {
    this.shotsReceived = 0;
    for (let i = 0; i < 10; i++) {
      this.gameGrid[i] = [];
      this.receivedShots[i] = [];
      for (let j = 0; j < 10; j++) {
        this.gameGrid[i][j] = null;
        this.receivedShots[i][j] = null;
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
      this.receivedShots[x][y] = 'hit';
    } else {
      this.receivedShots[x][y] = 'miss';
    }
    this.shotsReceived++;
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


