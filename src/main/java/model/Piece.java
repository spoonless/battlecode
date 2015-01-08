package model;


public class Piece {

	private TypePiece typePiece;

    public Piece(TypePiece typePiece){
        this.typePiece = typePiece;
    }
    
    public TypePiece getType() {
		return typePiece;
	}

}