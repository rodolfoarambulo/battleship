import Player from "./Player";

test("Player 2 should receive attack from Player 1's attack()", () => {
  const player1 = new Player('Joe');
  const player2 = new Player('Yaoming');

  player2.playerBoard.placeShip(0, 0, 1);
  player1.attack(0, 0, player2.playerBoard);
  
  expect(player2.playerBoard.gameGrid[0][0].numOfHits).toBe(1);
});