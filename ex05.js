let a,b;
let c,d;

let suma,resta,mult,div,residuo,potencia;
//los decimales se maneja co float
//obtener los datos a traves del usuario
a=prompt("Ingrese un numero: ");
b=prompt("Ingrese el nombre:");

//resultados de las operaciones
suma = Number (a) + Number (b);//aqui la operacion
document.writeln("la suma es:",suma ," </br>");
console.log("la suma es:",suma);

resta = Number (a) - Number (b);//aqui la operacion
document.writeln("la resta es:",resta ," </br>");
console.log("la resta es:",resta);

mult = Number (a) * Number (b);//aqui la operacion
document.writeln("la multiplicacion es:",mult ," </br>");
console.log("la multiplicacion es:",mult);

residuo = Number (a) % Number (b);//aqui la operacion
document.writeln("el residuo es:",residuo ," </br>");
console.log("el residuo  es:",residuo);

div = Number (a) / Number (b);//aqui la operacion
document.writeln("la division es:",div ," </br>");
console.log("la division  es:",div);

potencia = Number (a) ** Number (b);//aqui la operacion
document.writeln("la potencia es:",potencia ," </br>");
console.log("la potencia  es:",potencia);

c=parseInt(prompt("ingrese un numero: "));
d=parseFloat(prompt("ingrese un numero: "));

suma=c+d
resta= c - d
mult= c*d
div=c/d
residuo=c%d
potencia=c**d

document.writeln("los resultados de las operaciones son:","<br>",
"suma",suma,"<br>",
"resta",resta,"<br>",
"multiplicacion",mult,"<br>",
"division",div,"<br>",
"residuo",residuo,"<br>",
"potencia",potencia,"<br>",
);

console.log ("Las operaciones resultantes son:",
"suma",suma,"<br>",
"resta",resta,"<br>",
"multiplicacion",mult,"<br>",
"division",div,"<br>",
"residuo",residuo,"<br>",
"potencia",potencia,"<br>",
);