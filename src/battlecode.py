from enum import Enum


class TypePieceDesc(object):
    """Provides the description of any kind of piece

    Attributes:
        name The name of the Piece
        attack_points The amount of attack points
    """
    def __init__(self, name, attack_points):
        self.name = name
        self.attack_points = attack_points


class TypePiece(Enum):
    """A complete enumeration of all kind of pieces"""

    DRAGON = TypePieceDesc("dragon", 10)
    MAGE = TypePieceDesc("mage", 9)
    KNIGHT = TypePieceDesc("knight", 8)
    BEAST_RIDER = TypePieceDesc("beast rider", 7)
    SORCERESS = TypePieceDesc("sorceress", 6)
    DWARF = TypePieceDesc("dwarf", 2)
    SLAYER = TypePieceDesc("slayer", 1)
    TRAP = TypePieceDesc("trap", 0)
    TREASURE = TypePieceDesc("treasure", 0)


class Piece(object):
    """A playable piece"""

    def __init__(self, type_piece):
        self.type = type_piece

    @property
    def attack_points(self):
        """The amount of attack points"""
        return self.type.value.attack_points


def fight(attacker, defender):
    """Determines who wins a fight between two pieces"""

    if defender.type == TypePiece.DRAGON and attacker.type == TypePiece.SLAYER:  # if DRAGON vs SLAYER
        looser = defender
    elif defender.type != TypePiece.TRAP and defender.type != TypePiece.TREASURE:
        if attacker.attack_points > defender.attack_points:  # If attacker wins
            looser = defender
        elif attacker.attack_points < defender.attack_points:  # If defender looses
            looser = attacker
        else:  # If equality
            looser = None
    elif defender.type == TypePiece.TRAP:  # If defender is a TRAP
        if attacker.type == TypePiece.DWARF:  # If attacker is a DWARF then he wins
            looser = defender
        else:

            # If attacker.type is not a DWARF then defender wins
            looser = attacker
    else:
        looser = defender  # TREASURE

    return looser
