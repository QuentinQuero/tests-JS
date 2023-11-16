# MyCar()

Php ou JS

### Objectif de l'exercice :
Créer une classe qui s'appelle : MyCar

## Instance
Quand j'instancie cette classe MyCar, je dois pouvoir donner un nom à la voiture.

Exemple : 'Titine'.

Cette classe prend donc un paramètre String. 
Ex : MyCar('Titine');

Quand elle s'instancie, la console doit écrire : 'Wooo, quelle belle voiture !'

## Fuel
Une fois que cette classe est instanciée, il me sera possible de vérifier le niveau d'essence restant.

Avec la méthode `getFuel()`

- valeur de fuel après l'instanciation sera de 100 (Ils sont gentils, ils ont fait le plein)
- valeur max de fuel : 100
- valeur min de fuel : 0

## Démarrage
Si je ne suis pas à zéro de fuel, je dois pouvoir démarrer la voiture avec la méthode `start()`.

Lors du démarrage, la voiture doit écrire dans la console : 'Vrrooom.'.

Si la voiture n'a pas assez d'essence, la console doit sortir : 'Keuf, keuf, keuf...'.

- valeur par défaut du démarrage : false

## Maintenant, on roule
Quand la voiture est démarrée, on peut appeler la méthode : `drive()`

Cette méthode prend en paramètre un nombre.

Ce nombre représente les kilomètres que l'on fait.

Le nombre de km parcouru retire un nombre équivalent de litre de fuel dans la voiture.

Par exemple : Si la voiture a 10 de fuel et que j'appelle `drive(3)`, il me restera 7 de fuel si je print l'appelle de `getFuel()`.

Si la valeur envoyée est supérieur à la valeur de fuel, ne faite rien à part écrire dans la console : 'Oulala, tu vas tomber en panne.'.

