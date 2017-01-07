describe("the battlecode fight function", function() {
  it("decides who wins", function() {
    p1 = new Piece(TypePiece.SORCERESS)
    p2 = new Piece(TypePiece.KNIGHT)
    expect(fight(p1,p2)).toBe(p1)
    expect(fight(p2,p1)).toBe(p1)
    p1 = new Piece(TypePiece.DRAGON)
    p2 = new Piece(TypePiece.TRAP)
    expect(fight(p1,p2)).toBe(p1)
    p1 = new Piece(TypePiece.DWARF)
    expect(fight(p1,p2)).toBe(p2)
    p2 = new Piece(TypePiece.DWARF)
    expect(fight(p1,p2)).toBeUndefined()
    expect(fight(p2,p1)).toBeUndefined()
    p2 = new Piece(TypePiece.TREASURE)
    expect(fight(p1,p2)).toBe(p2)
    p23 = new Piece(TypePiece.DRAGON)
    p24 = new Piece(TypePiece.SLAYER)
    expect(fight(p24,p23)).toBe(p23)
  });
});
