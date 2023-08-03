import { TypePiece, Piece, fight } from './battlecode';

describe("the battlecode fight function", () => {
  test("decides who wins", () => {
    let p1 = new Piece(TypePiece.SORCERESS)
    let p2 = new Piece(TypePiece.KNIGHT)
    expect(fight(p1, p2)).toBe(p1)
    expect(fight(p2, p1)).toBe(p1)
    p1 = new Piece(TypePiece.DRAGON)
    p2 = new Piece(TypePiece.TRAP)
    expect(fight(p1, p2)).toBe(p1)
    p1 = new Piece(TypePiece.DWARF)
    expect(fight(p1, p2)).toBe(p2)
    p2 = new Piece(TypePiece.DWARF)
    expect(fight(p1, p2)).toBeUndefined()
    expect(fight(p2, p1)).toBeUndefined()
    p2 = new Piece(TypePiece.TREASURE)
    expect(fight(p1, p2)).toBe(p2)
    let p23 = new Piece(TypePiece.DRAGON)
    let p24 = new Piece(TypePiece.SLAYER)
    expect(fight(p24, p23)).toBe(p23)
  });
});
