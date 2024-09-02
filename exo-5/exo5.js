// you can write js here
console.log('exo-5');

let input = "Salut mec, ça va, tu vas bien ? On se présente, mais non tu nous connais. On est là pour te pomper t'imposer sans répit et sans repos pour te sucer ton " +
    "flouze ton oseille ton pognon ton pèze ton fric ton blé tes économies tes sous ton salaire tes bénefs tes bas de laine tout ce qui traîne";

let vowels = [ "A", "E", "I", "O", "U", "Y"];
let resultArray = [];
let isVowel = false;

for (let i = 0; i < input.length; i++) {
    let currentChar = input[i].toUpperCase();

    if (vowels.indexOf(currentChar) !== -1) {
        resultArray.push(currentChar);
    }
}

// for (let i = 0; i < input.length; i++) {
//     let currentChar = input[i].toUpperCase();
//     let isVowel = false;
//
//     for (let j = 0; j < vowels.length; j++) {
//         if (currentChar === vowels[j]) {
//             isVowel = true;
//             break;
//         }
//     }
//
//     if (isVowel) {
//         resultArray.push(currentChar);
//     }
// }

let whaleLangage = resultArray.join('');
console.log(whaleLangage);
