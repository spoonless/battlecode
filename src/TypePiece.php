<?php

class TypePiece {
    
    public static $DRAGON;
    public static $MAGE;
    public static $KNIGHT;
    public static $BEAST_RIDER;
    public static $SORCERESS;
    public static $DWARF;
    public static $SLAYER;
    public static $TRAP;
    public static $TREASURE;
    
    public static function init() {
        self::$DRAGON = new TypePiece("DRAGON", 10);
        self::$MAGE = new TypePiece("MAGE", 9);
        self::$KNIGHT = new TypePiece("KNIGHT", 8);
        self::$BEAST_RIDER = new TypePiece("BEAST RIDER", 7);
        self::$SORCERESS = new TypePiece("SORCERESS", 6);
        self::$DWARF = new TypePiece("DWARF", 2);
        self::$SLAYER = new TypePiece("SLAYER", 1);
        self::$TRAP = new TypePiece("TRAP", 0);
        self::$TREASURE = new TypePiece("TREASURE", 0);
    }

    private $name;
    private $attackPoints;
    
    public function __construct($name, $ap) {
        $this->name = $name;
        $this->attackPoints = $ap;
    }

    public function getAttackPoints() {
        return $this->attackPoints;
    }
    
}

TypePiece::init();