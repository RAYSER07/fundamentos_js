/*arrays* o arreglos es una estructura que permite almecena una coleccio ordenada de elementos estos elementos que pueden ser una cadena de texto valoers numericos booleanos igualmente podrian ser un conjunto de funciones e introducir otros arrays*/
// *** comilla de progamacion especal " ` " ***
// declaracion de un array vacio
// cantidad de datos numericos 8
let numeros = [];
// posicion = [0, 1, 2, 3,  4,  5,  6 ,7]
//llenar un array con elementos, cada elemento dentro del array se separa por coma.

numeros = [5, 4, 8, 12, 16, 35, 44, 2];
document.writeln("elementos: ", numeros);
document.writeln("<br>");

//un array puede crearse directamente sin ser declarado :
Numeros = [5, 10, 15, 20, 25, 30, 35];
document.writeln("elementos: ", Numeros);
document.writeln("<br>");

//visualizar uno o alguno de los elementos del array segun parametros o indice indicado
document.writeln("Elemento discriminado", numeros[3]);
document.writeln("<br>");
document.writeln("Elemento discriminado", Numeros[0]);

//cambiar documento de la array indidcando el indice de posicion y/o ubicacion existente y el valor a cambiar
numeros[3] = 84;
document.writeln("cambio de un elemento", numeros);
document.writeln("<br>-------------");
document.writeln("<br>");

//array con valores de tipo texto o string
let frutas = ["manzanas", "peras,", "mandarinas", "naranjas", "kiwi"];
document.writeln("diversas frutas ", frutas);
document.writeln("<br>");

//metodos de los array
//ver la cantidad de los elementos
document.writeln("cantidad de elementos del array de frutas:", frutas.length);
document.writeln("<br>");
document.writeln("cantidad de elementos del array de numeros:", numeros.length);
document.writeln("<br>");
document.writeln("cantidad de elementos del array de Numeros:", Numeros.length);
document.writeln("<br>-------------");

let abecedario =[`a`,`x`,`z`,`c`,`d`,`b`,`r`,`s`,`w`,`k`,`t`];
    document.writeln(abecedario);
    document.writeln("<br>");
    document.writeln(abecedario.sort());//organiza alfabeticamente las letras
    document.writeln("<br>");

    //funcion reverse
    document.writeln(abecedario.reverse());//organiza alfabeticamente las letras
    document.writeln("<br>");
    
    