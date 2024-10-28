/*
Creiamo la prima applicazione con NodeJs:

Iniziate creando un file main.js con un semplice console.log che dica hello node js
fate girare lo script usando node main.js

aggiungete allo script una variabile di ambiente chiamata PIN  con associato numero a piacere es. PIN=666
usate il modulo process per recuperare e stampare in console dalla proprietá env la variabile PIN
ora passate un argomento al vostro script e recuperatene il valore usando process e la proprietá argv per stamparlo in console

Bonus:
se il valore dell'argomento é admin ed il valore di PIN definito é 666 allora stampa in console Welcome Admin
altrimenti stampa Access restricted
*/

// console.log("Hello node js");
// console.log(process.argv);

// variabile d'ambiente. STESSO NOME nella dichiarazione e nella proprietà.
const pinEnv = process.env.pinEnv;
console.log(pinEnv);

// argomento dello script: tutti gli elementi dell'array process.argv a partire dall'indice 2.
// const pinArg = process.argv.slice(2);

// così prendo solo un valore
const pinArg = process.argv[2];
console.log(pinArg);

// condizione sull'input
if (pinArg === "admin" && pinEnv === "666") {
    console.log("Welcome Admin");
} else {
    console.log("Access restricted");
}

// ternary operator
pinArg === "admin" && pinEnv === "666" ? console.log("Welcome Admin") : console.log("Access restricted");
// ternary operator dentro log
console.log(pinArg === "admin" && pinEnv === "666" ? "Welcome Admin" : "Access restricted");
