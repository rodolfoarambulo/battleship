import { Player, Computer } from "./Player";

test("Player 1 should receive attack from Computer's attack()", () => {
  const player1 = new Player('Joe');
  const player2 = new Computer();

  player1.playerBoard.placeShip(0, 0, 1);
  player2.attack(player1.playerBoard);
  
  expect(player1.playerBoard.shotsReceived).toBeGreaterThan(0);
});