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
// let form = document.getElementById("itemForm");
//
// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//
//     let name = document.getElementById('name').value;
//     let type = document.getElementById('type').value;
//     let description = document.getElementById('description').value;
//     let price = document.getElementById('price').value;
//     let quantity = document.getElementById('quantity').value;
//
//     let newItem = {
//         "name": name,
//         "type": type,
//         "description": description,
//         "price": parseFloat(price),
//         "quantity": parseInt(quantity),
//     }
//
//     jsonDatas.push(newItem);
//
//     console.log("Nouvel item ajouté : ", newItem);
//     console.log("Liste mise à jour : ", jsonDatas);
//
//     document.getElementById('itemForm').reset();
// });

//Exercice 9
//Unifier tout mon code
// Gestion de l'affichage des articles selon les filtres et les tris
let articlesList = document.getElementById("articles-list");
let button = document.getElementById("btn");
let check = document.getElementById("stock");
let nameItem = document.getElementById("nameItem");
let price = document.getElementById("prix");

function displayArticles(data) {
    articlesList.innerHTML = ''; // On vide la liste des articles

    let foundArticles = false;

    data.forEach(category => {
        let categoryType = category.typeTraduit;
        let categoryItems = category.items

        categoryItems.forEach(article => {
            let listItem = document.createElement("ul");
            listItem.innerHTML = `
            <h1>${article.name}</h1>
            <ul>
                <li>${categoryType}</li>
                <li>${article.description}</li>
                <li>${article.price}€</li>
                <li>${article.quantity} en stock</li>
            </ul>
        `;
            articlesList.appendChild(listItem);
            foundArticles = true;
        });
    });
    if (!foundArticles) {
        articlesList.innerHTML = 'Article non trouvé';
    }
}

//displayArticles(jsonDatas);  //Afficher tous les contacts

//Filtre les articles par nom et disponibilité
button.addEventListener("click", function() {
    let isChecked = check.checked;
    let input = document.getElementById("type").value.toLowerCase();

    let filteredCategories = [];

    jsonDatas.forEach(category => {
        // Tableau temporaire pour les items filtrés
        let filteredItems = [];

        // Parcourir chaque item de la catégorie
        category.items.forEach(item => {
            // Appliquer les conditions de filtrage
            if (category.type.toLowerCase() === input && (!isChecked || item.quantity > 0)) {
                filteredItems.push(item);
            }
        });

        // Si on a trouvé des articles dans cette catégorie, on l'ajoute à filteredCategories
        if (filteredItems.length > 0) {
            filteredCategories.push({
                typeTraduit: category.typeTraduit,
                items: filteredItems
            });
        }
    });
    displayArticles(filteredCategories);
});

// Trier les articles par nom
nameItem.addEventListener("click", function() {
    let isChecked = document.getElementById("dsc").checked;

    let allArticles = [];
    jsonDatas.forEach(category => {
        allArticles = allArticles.concat(category.items);
    });

    // Trier les articles en fonction de l'ordre sélectionné
    let sortedArticles = allArticles.sort((a, b) => {
        if (isChecked) {
            return b.name.localeCompare(a.name); // Tri décroissant
        }
        return a.name.localeCompare(b.name); // Tri croissant
    });

    // Afficher les articles triés
    displayArticles([{ typeTraduit: '', items: sortedArticles }]);
});

// Trier les articles par prix
price.addEventListener("click", function() {
    let isChecked = document.getElementById("dsc").checked;
    let allArticles = [];
    jsonDatas.forEach(category => {
        allArticles = allArticles.concat(category.items);
    });

    // Trier les articles en fonction de l'ordre sélectionné
    let sortedArticles = allArticles.sort((a, b) => {
        if (isChecked) {
            return b.price - a.price; // Tri décroissant
        }
        return a.price - b.price; // Tri croissant
    });

    // Afficher les articles triés
    displayArticles([{ typeTraduit: '', items: sortedArticles }]);
});

// Ajout d'un nouvel article à la liste
let form = document.getElementById("itemForm");

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    console.log("Formulaire name : " + name);
    let type = document.getElementById('typeForm').value;
    let description = document.getElementById('description').value;
    let price = parseFloat(document.getElementById('price').value);
    let quantity = parseInt(document.getElementById('quantity').value);
    let lastName = document.getElementById('lastName').value;
    let firstName = document.getElementById('firstName').value;
    let address = document.getElementById('address').value;

    let newItem = {
        "name": name,
        "description": description,
        "price": price,
        "quantity": quantity,
        "contact": {
            "lastName": lastName,
            "firstName": firstName,
            "address": address
        }
    };

    let categoryFound = false;
    jsonDatas.forEach(category => {
        if (category.type === type) {
            category.items.push(newItem);
            categoryFound = true;
        }
    });

    // Si aucune catégorie correspondante n'est trouvée, créer une nouvelle catégorie
    if (!categoryFound) {
        jsonDatas.push({
            "type": type,
            "items": [newItem]
        });
    }


    console.log("Nouvel item ajouté : ", newItem);
    console.log("Liste mise à jour : ", jsonDatas);

    displayArticles(jsonDatas); // Affiche la liste mise à jour
    form.reset();

});