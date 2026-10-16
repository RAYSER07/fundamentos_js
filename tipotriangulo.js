//equilatero = todos los lados iguales
//isoseles = dos lados iguales
//escaleno = todos los lados son diferentes

const ladoA = 5 ;
const ladoB = 5 ;
const ladoC = 5 ;
//primero validar 
if (ladoA <=0 ||ladoB <= 0 || ladoC <= 0 ){
    console.log ("los lados deben ser maores a cero");
} else if (ladoA + ladoB <= ladoC || ladoA + ladoC <= ladoB || ladoB + ladoC <= ladoA){
    //regal geometrica : la suma de los lados debe siempre ser mayor que los dos lados ,si no,no se puede forar un triangulo real
    console.log ("los valores no forman un triangulo valido");
} else if (ladoA === ladoB && ladoB === ladoC){
    console.log ("el triangulo es EQUILATERO");
} else if (ladoA === ladoB ||ladoA === ladoC || ladoB === ladoC ){
    console.log ("el triangulo es isoseles");
} else 
    console.log ("el triangulo es escaleno");

