package action;

import model.Piece;
import model.TypePiece;

import org.junit.Test;

import action.Action;
import action.Fight;
import static org.junit.Assert.*;

public class FightTest {

    @Test
    public void testFight(){
        Piece p1 = new Piece(TypePiece.SORCERESS);
        Piece p2 = new Piece(TypePiece.KNIGHT);
        Action f = new Fight();
        assertEquals(p1, f.execute(p1,p2));
        assertEquals(p1, f.execute(p2,p1));
        p1 = new Piece(TypePiece.DRAGON);
        p2 = new Piece(TypePiece.TRAP);
        assertEquals(p1, f.execute(p1,p2));
        p1 = new Piece(TypePiece.DWARF);
        assertEquals(p2, f.execute(p1,p2));
        p2 = new Piece(TypePiece.DWARF);
        assertEquals(null, f.execute(p1,p2));
        assertEquals(null, f.execute(p2,p1));
        p2 = new Piece(TypePiece.TREASURE);
        assertEquals(p2, f.execute(p1,p2));

        Piece p23 = new Piece(TypePiece.DRAGON);
        Piece p24 = new Piece(TypePiece.SLAYER);
        Action f2 = new Fight();
        assertEquals(p23, f.execute(p24,p23));
    }

}
