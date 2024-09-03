// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe
console.log("Nb de voiture :" + joeInfo.cars.length);

// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
joeInfo.bathrooms = 1;
console.log("Nb de salle de bains :" + joeInfo.bathrooms);

// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information.
joeInfo.garage = 1;
console.log(joeInfo);

let team = {};

team.players = [];
team.games = [];

team.players.push({
    firstName: "Gaston",
    lastName: "Lagaffe",
    age: "28",
});

team.games.push({
    opponent: "Canapé",
    teamPoints: 42,
    opponentPoints: 27,
});

team.addPlayer = function(firstName, lastName, age) {
    this.players.push({ firstName, lastName, age });
};

team.addPlayer("Homer", "Simpson", 38);
team.addPlayer("Peter", "Griffin", 42);
team.addPlayer("Garfield", "LeChat", 12);

team.addGames = function(opponent, teamPoints, opponentPoints) {
    this.games.push({opponent, teamPoints, opponentPoints });
}

team.addGames("TV", 72, 34);
team.addGames("Lasagnes", 64, 5);
team.addGames("PC", 99, 2);

console.log(team);


let totalTeamPoints = team.games.reduce((total, game) => {
    return total + game.teamPoints;
}, 0);
console.log("Points total de la team : " + totalTeamPoints);

console.log("Nombre de games : " + team.games.length);

let totalOpponentPoints = team.games.reduce((total, game) => {
    return total + game.opponentPoints;
}, 0);
console.log("Total des points des adversaires : " + totalOpponentPoints);

let moyTeamPoints = totalOpponentPoints / team.games.length;
console.log("Moyenne des points des adversaires : " + moyTeamPoints);

let olderPlayer = team.players.reduce((older, player) => {
    return (player.age > older.age) ? player : older;
});

console.log("La personne la plus agée : " + olderPlayer.firstName + " " + olderPlayer.lastName + " est agée de : " + olderPlayer.age + " ans");

let alphabeticalPlayers = team.players.sort((first, player) => {
    if(player.lastName < first.lastName){
        return 1;
    }else if(player.lastName > first.lastName){
        return -1;
    }else{
        return 0;
    }
});

console.log(alphabeticalPlayers);