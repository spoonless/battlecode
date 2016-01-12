<?php
// FIXME : the line below should be uncommented if code coverage fails in NetBeans
// require_once('PHP/Token/Stream/Autoload.php');
include ('../Fight.php');
include ('../Piece.php');

class Test_Fight extends PHPUnit_Framework_TestCase {

    public function test_execute(){

        $p1 = new Piece(TypePiece::$SORCERESS);
        $p2 = new Piece(TypePiece::$KNIGHT);
        $f = new Fight();
        $this->assertEquals($p1, $f->execute($p1,$p2));
        $this->assertEquals($p1, $f->execute($p2,$p1));
        $p1 = new Piece(TypePiece::$DRAGON);
        $p2 = new Piece(TypePiece::$TRAP);
        $this->assertEquals($p1, $f->execute($p1,$p2));
        $p1 = new Piece(TypePiece::$DWARF);
        $this->assertEquals($p2, $f->execute($p1,$p2));
        $p2 = new Piece(TypePiece::$DWARF);
        $this->assertEquals(null, $f->execute($p1,$p2));
        $this->assertEquals(null, $f->execute($p2,$p1));
        $p2 = new Piece(TypePiece::$TREASURE);
        $this->assertEquals($p2, $f->execute($p1,$p2));

        $p23 = new Piece(TypePiece::$DRAGON);
        $p24 = new Piece(TypePiece::$SLAYER);
        $f2 = new Fight();
        $this->assertEquals($p23, $f->execute($p24,$p23));
    }

}

?>
