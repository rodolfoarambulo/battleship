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
    if (this.length - this.numOfHits <= 0) {
      this.sunk = true;
      return true;
    }
    return false;
  }
}

export default Ship;