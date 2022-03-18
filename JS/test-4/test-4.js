// Test 4

//  Completer la fonction treeConstructor(tree)
//  elle recevra un tableau de neuds sous la forme de texte : "(1,2)"  -> ["(1,2)", "(2,4)", "(7,2)", "(8,2)"]
//  son objectif est d'évaluer la possibilité de crééer les neuds envoyés, mais chaque neud ne peux pas supporter plus de 3 relations

//  par exemple ["(1,2)", "(2,4)", "(7,2)", "(8,2)"]  -> la connexion aux autres neux avec le numéro 1, est de 1 car il connecté avec le 2 seulement
//  le nombre de connexions du 2 est de 3, donc le maximum autorisé
//  si le nombre de connexion maximum est respecté, renvoyez true, sinon renvoyez false

// lvl : MEDIUM

/////// 👇 CODER CETTE FONCTION

function treeConstructor() {

}

//////// ☝️ CODER AU DESSUS


treeConstructor(["(1,2)", "(2,4)", "(7,2)", "(8,2)"]) === false ? console.log("OK") : console.log("NOP")
treeConstructor(["(1,2)", "(1,3)", "(3,2)", "(3,5)", "(2,6)", "(2,7)"]) === false ? console.log("OK") : console.log("NOP")
treeConstructor(["(1,2)", "(2,3)", "(3,4)"]) === true ? console.log("OK") : console.log("NOP")
treeConstructor(["(1,2)", "(1,3)", "(2,4)", "(2,5)", "(3,6)", "(3,7)", "(6,7)"]) === true ? console.log("OK") : console.log("NOP")
treeConstructor(["(1,2)", "(1,3)", "(2,4)", "(2,5)", "(3,6)", "(2,7)", "(6,7)"]) === false ? console.log("OK") : console.log("NOP")
