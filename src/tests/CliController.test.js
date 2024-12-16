describe("GameController testing file", () => {
  const gameBoard = GameBoard();
  gameBoard.placeShip(gameBoard.ships[0], [7, 2], "horizontal");
  gameBoard.placeShip(gameBoard.ships[1], [2, 9], "vertical");
  gameBoard.placeShip(gameBoard.ships[2], [3, 4], "vertical");
  gameBoard.placeShip(gameBoard.ships[3], [0, 0], "horizontal");
  it("GameController placeShip", () => {
    expect(
      gameBoard.placeShip(gameBoard.ships[4], [4, 8], "vertical")
    ).toMatchObject([
      [5, 5, 5, 5, 5, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
      [0, 0, 0, 0, 4, 0, 0, 0, 0, 3],
      [0, 0, 0, 0, 4, 0, 0, 0, 6, 3],
      [0, 0, 0, 0, 4, 0, 0, 0, 6, 0],
      [0, 0, 0, 0, 4, 0, 0, 0, 6, 0],
      [0, 0, 2, 2, 0, 0, 0, 0, 6, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 6, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 6, 0],
    ]);
  });

  it("GameController receiveAttack", () => {
    const ship = gameBoard.receiveAttack([4, 8]).ship;
    expect(ship.length).toBe(6);
    expect(gameBoard.board).toMatchObject([
      [5, 5, 5, 5, 5, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
      [0, 0, 0, 0, 4, 0, 0, 0, 0, 3],
      [0, 0, 0, 0, 4, 0, 0, 0, 1, 3],
      [0, 0, 0, 0, 4, 0, 0, 0, 6, 0],
      [0, 0, 0, 0, 4, 0, 0, 0, 6, 0],
      [0, 0, 2, 2, 0, 0, 0, 0, 6, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 6, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 6, 0],
    ]);
    gameBoard.receiveAttack([3, 8]);
    expect(gameBoard.board).toMatchObject([
      [5, 5, 5, 5, 5, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
      [0, 0, 0, 0, 4, 0, 0, 0, -1, 3],
      [0, 0, 0, 0, 4, 0, 0, 0, 1, 3],
      [0, 0, 0, 0, 4, 0, 0, 0, 6, 0],
      [0, 0, 0, 0, 4, 0, 0, 0, 6, 0],
      [0, 0, 2, 2, 0, 0, 0, 0, 6, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 6, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 6, 0],
    ]);
    gameBoard.receiveAttack([4, 8]);
    expect(gameBoard.board).toMatchObject([
      [5, 5, 5, 5, 5, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
      [0, 0, 0, 0, 4, 0, 0, 0, -1, 3],
      [0, 0, 0, 0, 4, 0, 0, 0, 1, 3],
      [0, 0, 0, 0, 4, 0, 0, 0, 6, 0],
      [0, 0, 0, 0, 4, 0, 0, 0, 6, 0],
      [0, 0, 2, 2, 0, 0, 0, 0, 6, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 6, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 6, 0],
    ]);
  });
});
