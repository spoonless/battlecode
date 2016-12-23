Battlecode est un exemple de code Python pour un entraînement aux tests unitaires, TDD et refactoring.

L'objectif de battlecode est de mettre le développeur en situation. Il va falloir faire évoluer le code d'une application. Malheureusement, le code n'est pas toujours aussi clair et "propre" que l'on aimerait.

Heureusement, la couverture de code par les tests est de 100% ! ... mais les tests ne sont pas non plus irréprochables !

Le code principal tourne autour de la fonction fight

Les nouvelles fonctionnalités attendues :

* ajout d'une nouvelle pièce : l'elfe. L'elfe (ELF) a 4 points d'attaque sauf contre le nain (DWARF) contre lequel il est à égalité.
* On ajoute le résultat de deux dés à six faces (2D6) au score de l'attaquant et du défenseur avant de déterminer le gagnant.
* Le score d'attaque des types de pièce n'est plus en dur dans le code mais est chargé depuis un fichier de configuration.

Mais avant cela, peut-être qu'il serait nécessaire d'améliorer la lisibilité du code et des tests... Les tâches possibles sont :

* refactoring des tests en s'aidant d'un outil d'analyse de couverture de code
* refactoring du code de l'application pour rendre la méthode fight lisible
* nettoyage des commentaires
* et éventuellement évolution de la conception de l'application
