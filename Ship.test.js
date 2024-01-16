import Ship from "./Ship";

test('Hit adds numbers of hits', () => {
  const testShip = new Ship(5);
  testShip.hit();
  expect(testShip.numOfHits).toBe(1);
});

test('isSunk returns true if (length - hits) <= 0', () => {
  const testShip = new Ship(1);
  testShip.hit();
  expect(testShip.isSunk()).toBeTruthy();
})