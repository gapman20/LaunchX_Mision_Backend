/* for(let i = 0; i < 29; i++){
    if((i % 2) != 0){
        continue;
    }
    if( i == 20){
        break;
    }
    console.log(i);
}
console.log("Aqui ya me sali");

var1 = null;
var3 = "";
var4 = 0;
var5 = false;
var6 = undefined;

console.log(var1);
console.log(var3);
console.log(var4);
console.log(var5);
console.log(var6);

console.log("_______________________________"); */

/* If - else */

/* function validarEdad(edad){
    if(confirm('¿Estas de aceurdo con seguir con esto?')){
        console.log("Sigue bajo tu propio riesgo");
        if(edad >= 18 && edad <= 150){
            console.log("Puedes comprar cigarros");
        } else if(edad > 150){
            console.log("Saludame a cepillin");
        } else if(edad >= 0){
            console.log("Tas muy chiquito");
        } else {
            console.log("A caray, tu no deberias de existir");
        }
    } else{
        console.log("Que miedoso ....");
    }
} */


/* let edad = prompt("Introduce tu edad");

if(edad && !isNaN(edad)){ isNan not a number se pone el ! para verificar si es un numero

    edad = Number(edad);

    validarEdad(edad);
    mandarMensaje(edad);
} else{
    alert("Debes intreoducir tu edad");
    location.reload();
} */

/* ------------------------------- */
/* Switch */

/* function mandarMensaje(edad){
    console.log(typeof edad);
    switch(edad){
        case 13 :
            console.log("Deberias de estas en la secundaria");
            break;
        case 17:
            console.log("Esperate un año mas");
            break;
        default:
            console.log("Uwu");
    }
} */

/* While */

/* let boletosDisponibles = 100000;

while(boletosDisponibles >0){
    console.log("Boleto comprado para el Corona Capital");
    boletosDisponibles--;
    console.log("Queda " + boletosDisponibles);
    console.log("---------------------------");
} */

/* Do while */
/* do {
    console.log("Boleto comprado para el Corona Capital");
    boletosDisponibles--;
    console.log("Queda " + boletosDisponibles);
} while (boletosDisponibles >0); */

/* Try catch finally */

try{
    /* Codigo suseptible a fallar */
    /* Se modifica el error como tu quieras */
    throw "Orden 66";
} catch (error){
    console.error("ERROOOOOOOOOOOR");
    console.warn(error);
} finally{
    console.warn("Tu crusch no te quiere")
}