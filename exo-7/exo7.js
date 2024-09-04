console.log("exo-7");

// console.log(jsonDatas);

// for(i=0; i< jsonDatas.length; i++){
// 	console.log(jsonDatas[i]);
// }

let tradType = {
    "car": "voiture",
    "house": "maison",
    "game": "jeux",
    "videoGame": "jeux vidéo",
    "show": "spectacle",
};

for(i=0; i < jsonDatas.length; i++){
    jsonDatas[i].typeTraduit = tradType[jsonDatas[i].type];
}

console.log(jsonDatas);

// let articlesList = document.getElementById("articles-list");
//
// for(i=0; i < jsonDatas.length; i++){
//     let article = jsonDatas[i];
//
//     let listItem = document.createElement('li');
//
//     let content = `
//         Nom : ${article['name']}
//         Type: ${article['tradType']}
//         Description: ${article['description']}
//         Prix: ${article['price']}
//         Quantité: ${article['quantity']}
//     `
//
//     listItem.innerHTML = content;
//
//     articlesList.appendChild(listItem);
// }

// let articlesList = document.getElementById("articles-list");
// let button = document.getElementById("btn");
// let check = document.getElementById("stock");
// let isValid = false;
//
// button.addEventListener("click", function(){
//     let isChecked = check.checked;
//     let input = document.getElementById("name");
//     articlesList.innerHTML = '';
//
//     if(isChecked) {
//         for (i = 0; i < jsonDatas.length; i++) {
//             let article = jsonDatas[i];
//             let articleName = article.type;
//             let articleMin = articleName.toLowerCase();
//             let inputMin = input.value.toLowerCase();
//             let listItem = document.createElement("li");
//
//             if ((articleMin === inputMin) && (article.quantity !== 0)) {
//
//                 listItem.innerHTML = `
//                     <h1>${article['name']}</h1>
//                     <ul>
//                     <li>${article['tradType']}</li>
//                     <li>${article['description']}</li>
//                     <li>${article['price']}</li>
//                     <li>${article['quantity']}</li>
//                     </ul>
//                 `;
//                 isValid = true;
//                 console.log(articlesList);
//                 articlesList.appendChild(listItem);
//             }
//         }
//     }else{
//         for (i = 0; i < jsonDatas.length; i++) {
//             let article = jsonDatas[i];
//             let articleName = article.type;
//             let articleMin = articleName.toLowerCase();
//             let inputMin = input.value.toLowerCase();
//             let listItem = document.createElement("li");
//
//             if (articleMin === inputMin) {
//
//                 listItem.innerHTML = `
//                     <h1>${article['name']}</h1>
//                     <ul>
//                     <li>${article['tradType']}</li>
//                     <li>${article['description']}</li>
//                     <li>${article['price']}</li>
//                     <li>${article['quantity']}</li>
//                     </ul>
//                 `;
//                 isValid = true;
//                 console.log(articlesList);
//                 articlesList.appendChild(listItem);
//             }
//         }
//     }
//     if(!isValid){
//         articlesList.innerHTML = 'Article non trouvé';
//     }
// });


//Exercice 7 du 7
// let articlesList = document.getElementById("articles-list");
// let nameItem = document.getElementById("nameItem");
// let price = document.getElementById("prix");
// let desc = document.getElementById("dsc");
// console.log(desc);
//
// nameItem.addEventListener("click", function() {
//     let isChecked = desc.checked;
//     articlesList.innerHTML = '';
//
//     if (isChecked) {
//         let orderByName = jsonDatas.sort((first, nom) => {
//             if (nom.name > first.name) {
//                 return 1;
//             } else if (nom.name < first.name) {
//                 return -1;
//             } else {
//                 return 0;
//             }
//         });
//     }else{
//         let orderByNameDesc = jsonDatas.sort((first, nom) => {
//             if (nom.name < first.name) {
//                 return 1;
//             } else if (nom.name > first.name) {
//                 return -1;
//             } else {
//                 return 0;
//             }
//         });
//     }
//
//     for (i = 0; i < jsonDatas.length; i++) {
//         let item = jsonDatas[i];
//
//         let listItem = document.createElement('ul');
//
//         let content = `
//             <h4>${item['name']}</h4>
//             <li>${item['type']}</li>
//             <li>${item['description']}</li>
//             <li>${item['price']}</li>
//             <li>${item['quantity']}</li>
//         `
//
//         listItem.innerHTML = content;
//
//         articlesList.appendChild(listItem)
//     }
// })
//
//
// price.addEventListener("click", function(){
//     let isChecked = desc.checked;
//     articlesList.innerHTML = '';
//
//     if (!isChecked) {
//         let orderByPrice = jsonDatas.sort((a, b) => a.price - b.price);
//
//         orderByPrice.forEach(item => {
//             let listItem = document.createElement('ul');
//
//             let content = `
//             <h4>${item['name']}</h4>
//             <li>${item['type']}</li>
//             <li>${item['description']}</li>
//             <li>${item['price']}€</li>
//             <li>${item['quantity']} en stock</li>
//         `;
//
//             listItem.innerHTML = content;
//             articlesList.appendChild(listItem);
//         });
//     }else{
//         let orderByPriceDesc = jsonDatas.sort((a, b) => b.price - a.price);
//
//         orderByPriceDesc.forEach(item => {
//             let listItem = document.createElement('ul');
//
//             let content = `
//             <h4>${item['name']}</h4>
//             <li>${item['type']}</li>
//             <li>${item['description']}</li>
//             <li>${item['price']}€</li>
//             <li>${item['quantity']} en stock</li>
//         `;
//
//             listItem.innerHTML = content;
//             articlesList.appendChild(listItem);
//         });
//     }
//
// })


//Exercice 8




