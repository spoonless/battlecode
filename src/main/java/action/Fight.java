package action;

import model.Piece;
import model.TypePiece;

public class Fight implements Action {

	/**
	 * Determines who wins a fight between two pieces
	 * 
	 * @param attacker
	 * @param defender
	 * @return looser
	 */
	public Piece execute(Piece attacker, Piece defender) {

		Piece looser;
		if (defender.getType() == TypePiece.DRAGON
				&& attacker.getType() == TypePiece.SLAYER) { // if DRAGON vs SLAYER
			looser = defender;
		} else if (defender.getType() != TypePiece.TRAP	&& defender.getType() != TypePiece.TREASURE) {
			if (attacker.getType().getAttackPoints() > defender
					.getType().getAttackPoints()) { // If attacker wins
				looser = defender;
			} else if (attacker.getType().getAttackPoints() < defender
					.getType().getAttackPoints()) { // If defender looses
				looser = attacker;
		} else { // If equality
			looser = null;
		}
			
		} else if (defender.getType() == TypePiece.TRAP) {// If defender is a TRAP
			if (attacker.getType() == TypePiece.DWARF) { // If attacker is a DWARF then he wins
				looser = defender;
			} 
			else { 
				
				
				// If attacker is not a DWARF then defender wins
				looser = attacker;
			}
		} else {
			looser = defender; // TREASURE
		}
		return looser;
	}
}
