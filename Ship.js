class Ship {
  constructor(length) {
    this.length = length;
    this.numOfHits = 0;
    this.sunk = false;
  }

  hit() {
    this.numOfHits++;
  }

  isSunk() {
    return (this.length - this.numOfHits <= 0);
  }
}

export default Ship;