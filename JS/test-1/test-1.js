// Test 1
// Complèter la fonction sayHello pour qu'elle prenne un paramètre optionnel contenant un nom
// Elle doit renvoyer la chaine suivante si un nom est envoyé : "Hello {NAME}"
// Attention: Si le paramètre envoyé est 'Quentin', renvoyez "Hey Quentin"
// ex :
// Si aucun paramètre n'est envoyé ou si il est null, renvoyer "Hello toto"
// Si le paramètre est Quqdfg, renvoyer "Hey Quentin"
// Si le paramètre est Harry, renvoyer "Hello Harry"

// lvl : EASY

/////// 👇 CODER CETTE FONCTION

function sayHello(){
    
}

//////// ☝️ CODER AU DESSUS

sayHello('toto') === "Hello toto" ? console.log("OK") : console.log("NOP")
sayHello('Quentin') === "Hey Quentin" ? console.log("OK") : console.log("NOP")
sayHello() === "Hello toto" ? console.log("OK") : console.log("NOP")
sayHello('Jean') === "Hello Jean" ? console.log("OK") : console.log("NOP")
sayHello('') === "Hello " ? console.log("OK") : console.log("NOP")
sayHello(null) === "Hello toto" ? console.log("OK") : console.log("NOP")
