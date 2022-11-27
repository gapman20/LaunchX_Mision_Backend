let lista = [];

let x = 5;
let y = 10;

/* Asignacion de adicion */

x += y; /* Es lo mismo que hacer esto: x = x + y */


console.log(x);
lista.push(x);
console.log(lista);

/* Asignacion de resta */

y -= x;

console.log(y);
lista.push(y);
console.log(lista);

/* Asignacion de multiplicacion */

x *= y;

console.log("x = " +x);
lista.push(x);
console.log(lista);

x = 5;
y= 10;

/* Operador de bit a bit de desplazamiento a la izquierda */
x <<= y;

console.log("x = " +x);
lista.push(x)
console.log(lista);
x = 5;
y= 10;

/* Asignacion de residuo o modulo*/

console.log(y % x);

y %= x;

console.log('y = '+ y);
lista.push(y);
console.log(lista);

/* Estructura de control */
let var1 = 3;
let var2 = 4;

/* Operador igual */
if(var1 == '3'){
    console.log("Son iguales");
} else {
    console.log("No son iguales");
}

/* Operador estrictamente igual */
if(var1 === '3'){
    console.log("Son iguales");
} else {
    console.log("No son iguales");
}

/* Operador de desigualdad */
if(var1 != var2){
    console.log("Son diferentes");
} else{
    console.log("No son diferentes");
}

/* Operador de desigualdad estrcita */
if(var1 !== '3'){
    console.log("Son diferentes");
} else{
    console.log("No son diferentes");
}

/* > Mayor que  */
console.log(var1 > var2);

/* < Menor que */
console.log(var1 < var2);
console.log(23 < 23);

/* Menor o igual que  */
console.log( 23 <= 23);

/* Mayor o igual que  */
console.log(23 >= 23);
