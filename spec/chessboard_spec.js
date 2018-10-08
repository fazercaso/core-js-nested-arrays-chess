describe("Board", function() {

  beforeEach(function() {
    board = generate_chessboard();
  });

  describe("#placePiece", function() {
    it("should return the correct piece for a given starting position", function() {
      expect(board[0][0]).toEqual('Ч Ладья');
      expect(board[1][1]).toEqual('Ч Пешка');
      expect(board[7][7]).toEqual('Б Ладья');
      expect(board[5][4]).toEqual(null);
    });
  });

  describe("#init", function() {
    it("should generate an 8x8 array", function() {
      expect(board.length).toEqual(8);
      for (let i = 0; i < board.length; i++) {
        expect(board[i].length).toEqual(8);
      }
    });
  });
});
