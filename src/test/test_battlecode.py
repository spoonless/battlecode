from battlecode import Piece, TypePiece, fight

def test_fight():
    p1 = Piece(TypePiece.SORCERESS)
    p2 = Piece(TypePiece.KNIGHT)
    assert fight(p1,p2) == p1
    assert fight(p2,p1) == p1
    p1 = Piece(TypePiece.DRAGON)
    p2 = Piece(TypePiece.TRAP)
    assert fight(p1,p2) == p1
    p1 = Piece(TypePiece.DWARF)
    assert fight(p1,p2) == p2
    p2 = Piece(TypePiece.DWARF)
    assert fight(p1,p2) == None
    assert fight(p2,p1) == None
    p2 = Piece(TypePiece.TREASURE)
    assert fight(p1,p2) == p2

    p23 = Piece(TypePiece.DRAGON)
    p24 = Piece(TypePiece.SLAYER)
    assert fight(p24,p23) == p23
