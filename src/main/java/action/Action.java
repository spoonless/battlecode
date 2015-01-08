package action;

import model.Piece;

public interface Action {

	Piece execute(Piece attacker, Piece defender);

}