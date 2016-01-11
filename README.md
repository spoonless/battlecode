Battlecode est un exemple de code pour un entraînement aux tests unitaires, TDD et refactoring.

Le code principal tourne autour de la classe Fight et de sa méthode execute

Tâches possibles :
* Analyse du code au moyen d'un outil de couverture de code et amélioration de la couverture avec de nouveaux tests  
* Refactoring du code existant pour améliorer la lisibilité du code
* Ajout de nouvelles fonctionnalités

Les nouvelles fonctionnalités :

* On ajoute une nouvelle pièce : l'elfe. L'elfe (ELF) a 4 points d'attaque sauf contre le nain (DWARF) contre lequel il est à égalité.
* On ajoute le résultat de deux dés à six faces (2D6) au score de l'attaquant et du défenseur avant de déterminer le gagnant.
* Le score d'attaque des types de pièce n'est plus en dur dans le code mais est chargé depuis un fichier de configuration.
