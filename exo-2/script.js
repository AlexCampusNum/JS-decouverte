// you can write js here
console.log('exo-2');

// const myDate = new Date();

let isTesting = true;
let currentDay;
let currentHours;

if (isTesting) {
    currentDay = prompt("Quelle jour sommes nous ? (Lundi => 1, Mardi => 2 etc.. Dimanche => 0");
    currentHours = prompt("Quelle heure est-il ? (juste le nombre des heures)");
}else {
    const mydate = new Date();
    currentDay = mydate.getDay();
    currentHours = mydate.getHours();
    // console.log("Heure actuel :", currentHours);
}

let weekDay = "Nous sommes en semaine";
let weekEndDay = "Nous sommes en week-end";

// let currentDay = myDate.getDay();
// let currentHours = myDate.getHours();
// console.log("Heure :", currentHours);

if ((currentDay >= 1 && currentHours >= 9) && (currentDay <= 5 && currentHours <= 17)) {
    console.log(weekDay);
} else {
    console.log(weekEndDay);
}


