# MyCar()

Php ou JS

### Objectif de l'exercice :
Créer une classe qui s'appelle : MyCar

## Instance
Quand j'instancie cette classe, je dois pouvoir lui donner un nom.

Exemple : 'titine'.

Quand elle s'instancie, la console doit écrire : 'Wooo, quelle belle voiture !'

## Fuel
Une fois que cette classe est instanciée, il me sera possible de checker le niveau d'essence restant.

Avec la fonction `getFuel()`

- valeur de fuel au démarrage : 100 (Ils sont gentils, ils ont fait le plein)
- valeur max de fuel : 100
- valeur min de fuel : 0

## Démarrage
Si je ne suis pas à zéro, je dois pouvoir démarrer la voiture avec la fonction `start()`.

Lors du démarrage, la voiture doit écrire dans la console : 'Vrrooom.'.

Si la voiture n'a pas assez d'essence, la console doit sortir : 'Keuf, keuf, keuf...'.

- valeur par défaut du démarrage : false

## Maintenant, on roule
Quand la voiture est démarrée, on peut appeler la fonction : `drive()`

Cette fonction prend en paramètre un nombre.

Ce nombre représente les kilomètres que l'on fait.

Le nombre de km parcouru retire un nombre équivalent de litre de fuel dans la voiture.

Par exemple : Si la voiture a 10 de fuel et que j'appelle `drive(3)`, il me restera 7 de fuel si je print l'appelle de `getFuel()`.

Si la valeur envoyée est supérieur à la valeur de fuel, ne faite rien à par écrire dans la console : 'Oulala, tu vas tomber en panne.'.

