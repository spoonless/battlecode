import unittest
from battlecode import Piece, TypePiece, fight

class FightTest(unittest.TestCase):

    def test_fight(self):
        p1 = Piece(TypePiece.SORCERESS)
        p2 = Piece(TypePiece.KNIGHT)
        self.assertEqual(p1, fight(p1,p2))
        self.assertEqual(p1, fight(p2,p1))
        p1 = Piece(TypePiece.DRAGON)
        p2 = Piece(TypePiece.TRAP)
        self.assertEqual(p1, fight(p1,p2))
        p1 = Piece(TypePiece.DWARF)
        self.assertEqual(p2, fight(p1,p2));
        p2 = Piece(TypePiece.DWARF)
        self.assertEqual(None, fight(p1,p2))
        self.assertEqual(None, fight(p2,p1))
        p2 = Piece(TypePiece.TREASURE)
        self.assertEqual(p2, fight(p1,p2))

        p23 = Piece(TypePiece.DRAGON)
        p24 = Piece(TypePiece.SLAYER)
        self.assertEqual(p23, fight(p24,p23))

if __name__ == '__main__':
    unittest.main()
