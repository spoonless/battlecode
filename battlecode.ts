interface TypePieceInterface {
  name: string,
  attackPoints: number
}

export const TypePiece = {
  DRAGON: { name: "dragon", attackPoints: 10 },
  MAGE: { name: "mage", attackPoints: 9 },
  KNIGHT: { name: "knight", attackPoints: 8 },
  BEAST_RIDER: { name: "beast rider", attackPoints: 7 },
  SORCERESS: { name: "sorceress", attackPoints: 6 },
  DWARF: { name: "dwarf", attackPoints: 2 },
  SLAYER: { name: "slayer", attackPoints: 1 },
  TRAP: { name: "trap", attackPoints: 0 },
  TREASURE: { name: "treasure", attackPoints: 0 }
} as const;

export class Piece {
  type: TypePieceInterface;
  constructor(type: TypePieceInterface) {
    this.type = type;
  }
  public get attackPoints() {
    return this.type.attackPoints;
  }
}

/*
 * Determines who wins a fight between two pieces
*/
export function fight(attacker: Piece, defender: Piece): Piece | void {
  let looser: Piece;
  if (defender.type == TypePiece.DRAGON
    && attacker.type == TypePiece.SLAYER) { // if DRAGON vs SLAYER
    looser = defender;
  }
  else if (defender.type != TypePiece.TRAP && defender.type != TypePiece.TREASURE)
  if (attacker.attackPoints > defender.attackPoints) { // If attacker wins
    looser = defender;
  }
  else if (attacker.attackPoints < defender.attackPoints) { // If defender looses
    looser = attacker;
  }
  else {  // If equality
    looser = undefined;
  }
  else if (defender.type == TypePiece.TRAP) { // # If defender is a TRAP
    if (attacker.type == TypePiece.DWARF) { // If attacker is a DWARF then he wins
      looser = defender;
    }
    else
      // If attacker is not a DWARF then defender wins
      looser = attacker;
  }
  else {
    looser = defender; // TREASURE
  }
  return looser;
}
