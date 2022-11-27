let parrafoInicial = document.getElementById("parrafoInicial");

console.log(parrafoInicial);
parrafoInicial = 6
console.log(parrafoInicial);

parrafoInicial.onclick = function() {
    cambiaColorAleatorio();
}

function cambiaColorAleatorio() {

    const colores = [
        "red",
        "blue",
        "black",
        "cyan"   
    ];
    parrafoInicial.style.color = colores[Math.floor(Math.random() * colores.length)];
}

/* 
    tipos de datos

    var -> Modificarse, scope global - NO SE RECOMIENDA
    let -> Variable modificable, scope llmitado - RECOMENDADA USAR
    const -> Constante, no modificable - Scope global


*/

/* 
    CASES
        PascalCase - Clases - JAVA

        camelCase - variables, funciones, atributos. - JavaScript
            variable -> parrafoInicial =
            funcion -> parrafoInicial()
            atributo -> parrafoInicial

        snake_case - Python , JavaScript
            variables y funciones 

        CASE - Constantes

 */

