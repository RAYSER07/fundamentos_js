/*condicional switch case

EL SWITCH es una estructura de control utilizada para tpomar decisisones basadas en el valor de una expresion es
util cuando se desea comparar un mismo valor con multipoles casos posibles y ejecutar un bloque de codigo segun el caso que coincida
*/

let valor;
valor = parseInt(prompt(`ingrese valores numericos entre 1 y 3`));

switch (valor) {
  case 1:
    document.writeln(`ut ingreso el numero`, valor);
    break;
  case 2:
    document.writeln(`ut ingreso el numero`, valor);
    break;
  case 3:
    document.writeln(`ut ingreso el numero`, valor);
    break;

  default:
    document.writeln(`el numero esta fuera del rago o ni es un numero valido`);
    break;
}
document.writeln("<br>");

let color;
color = prompt(`ingrese valores uno de estos colores: Rojo,Verde o Azul`);
switch (color) {
  case `Rojo`:
    document.writeln(`ut ingreso el color : `, color);
    break;
  case `Verde`:
    document.writeln(`ut ingreso el color: `, color);
    break;
  case `Azul`:
    document.writeln(`ut ingreso el color: `, color);
    break;

  default:
    document.writeln(`el color esta fuera del rago o no es un valor valido`);
    break;
}
