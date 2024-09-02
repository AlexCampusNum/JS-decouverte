// you can write js here
console.log('hello from file');

let kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");
// on déclare une variable celsius qui prend pour valeur la variable kelvins moins 273
let celsius = kelvins - 273;
// on déclare une nouvelle varibale pour calculer les degrés en Fahrenheits
let fahrenheits = celsius * (9/5) + 32;
// Ici on pass la varibale Fahrenheits en nombre entier
let intFahrenheits = Math.floor(fahrenheits);

// Affiche les résultats dans la console
console.log("Température en Celsius : " + celsius);
console.log("Température en Fahrenheits : " + intFahrenheits);
console.log("Température en fahrenheits avec des chiffre après la virgule : " + fahrenheits);