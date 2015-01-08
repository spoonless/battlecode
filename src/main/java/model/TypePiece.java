package model;

public enum TypePiece {
	DRAGON(10), 
	MAGE(9), 
	KNIGHT(8), 
	BEAST_RIDER(7), 
	SORCERESS(6), 
	DWARF(2), 
	SLAYER(1), 
	TRAP(0),
	TREASURE(0); 

	private int attackPoints;

	TypePiece(int ap) {
		this.attackPoints = ap;
	}

	public int getAttackPoints() {
		return this.attackPoints;
	}
}
