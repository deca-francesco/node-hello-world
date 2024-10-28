console.log("Hello node js");
console.log(process.argv);

// variabile d'ambiente. STESSO NOME nella dichiarazione e nella proprietà.
const pinEnv = process.env.pinEnv;
console.log(pinEnv);

// argomento dello script: tutti gli elementi dell'array process.argv a partire dall'indice 2.
const pinArg = process.argv.slice(2);
console.log(pinArg);
