import Gameboard from "./Gameboard";

test('Ship exists on (x, y)', () => {
  const testBoard = new Gameboard();
  testBoard.placeShip(0, 2, 5);
  expect(testBoard.gameGrid[0][2]).not.toBeNull();
});

test('receiveAttack() hits ship and numOfHits increments', () => {
  const testBoard = new Gameboard();
  testBoard.placeShip(0, 0, 5);
  testBoard.receiveAttack(0, 0);
  expect(testBoard.gameGrid[0][0].numOfHits).toBeGreaterThan(0);
});

test('receiveAttack() misses, missedShots increments', () => {
  const testBoard = new Gameboard();
  testBoard.placeShip(1, 0, 5);
  testBoard.receiveAttack(0, 0);
  expect(testBoard.receivedShots[0][0]).toBeTruthy();
});

test('areAllShipsSunk() returns true if all ship.sunk are true', () => {
  const testBoard = new Gameboard();
  testBoard.placeShip(0, 0, 1);
  testBoard.placeShip(0, 1, 1);
  testBoard.placeShip(1, 0, 1);
  testBoard.placeShip(1, 1, 1);
  testBoard.receiveAttack(0, 0);
  testBoard.receiveAttack(0, 1);
  testBoard.receiveAttack(1, 0);
  testBoard.receiveAttack(1, 1);
  expect(testBoard.areAllShipsSunk()).toBeTruthy();
})