<?php

class Piece {

    private $typePiece;

    public function Piece($typePiece){
        $this->typePiece = $typePiece;
    }
    
    public function getType() {
	return $this->typePiece;
    }

}
