// Test 1
// Complèter la fonction sayHello pour qu'elle prenne un paramètre optionnel : un nom
// Elle doit renvoyer la chaine suivante si un nom est envoyé : "Hello {NAME}"
// Attention: Si le paramètre envoyé est 'Quentin', renvoyez "Hey Quentin"
// ex :
// Si aucun paramètre n'est envoyé ou si il est null, renvoyer "Hello toto"
// Si le paramètre est Quqdfg, renvoyer "Hello Quqdfg"
// Si le paramètre est Harry, renvoyer "Hello Harry"


/////// 👇 CODER CETTE FONCTION

function sayHello(name){
    
}

//////// ☝️ CODER AU DESSUS

sayHello('toto') === "Hello toto" ? console.log("OK (toto)") : console.log("NOP (toto)")
sayHello('Quentin') === "Hey Quentin" ? console.log("OK") : console.log("NOP la condition pour Quentin n'est pas respectée")
sayHello() === "Hello toto" ? console.log("OK") : console.log("NOP il faut dire bonjour à toto quand il n'y a pas de nom")
sayHello('Jean') === "Hello Jean" ? console.log("OK") : console.log("NOP, Jean n'a pas eu de Hello .. ")
sayHello('') === "Hello " ? console.log("OK") : console.log("NOP")
sayHello(null) === "Hello toto" ? console.log("OK") : console.log("NOP, attention, toto est le nom par défaut")
