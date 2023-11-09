// Test 2
// Complèter la fonction findExtension pour qu'elle prenne un paramètre une chaine de charactère
// Elle doit renvoyer l'extention du fichier, si la chaine contient bien le nom du fichier et l'extention
// Sinon elle renvoye null
// ex :
// Si aucun paramètre n'est envoyé, renvoyer null
// Si le paramètre est ".jpg", renvoyer null
// Si le paramètre est "Harry.jpg", renvoyer ".jpg"


/////// 👇 CODER CETTE FONCTION

function findExtension(){

}

//////// ☝️ CODER AU DESSUS

findExtension('toto.jpg') === 'jpg' ? console.log("OK") : console.log("NOP")
findExtension('azertyuiop.azertyuiop.jpg') === 'jpg' ? console.log("OK") : console.log("NOP")
findExtension('a.toto') === 'toto' ? console.log("OK") : console.log("NOP")
findExtension('') === null ? console.log("OK") : console.log("NOP")
findExtension(null) === null ? console.log("OK") : console.log("NOP")
findExtension('.toto') === null ? console.log("OK") : console.log("NOP")
