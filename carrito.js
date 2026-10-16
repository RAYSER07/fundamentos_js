//calcularla ganancia dle vendedor 
//sumar la ganancia  del vehiculo = precio venta
//calcular el impuesto (6%) sobre el precio de la venta 
//Sumar el precio de venta + el impuesto = csoto total .

//valores definidos directamente por el enunciado del taller:
const valorVehiculo = 35000000 ; //valor del vehiculo
const porcentajeGanancia = 12 ;
const porcentajeImpuesto = 6 ;

//paso 1 
const gananciavendedor = (valorVehiculo * porcentajeGanancia)/ 100;

//paso 2
const precioVenta = valorVehiculo + gananciavendedor ;

//paso 3
const ImpuestoVenta = (precioVenta * porcentajeImpuesto)/ 100;

//  paso 4
const costototal = precioVenta + ImpuestoVenta;

console.log ("valor del vehiculo :", valorVehiculo)  ;
console.log ("porcentaje de ganacia" ,porcentajeGanancia , "%");
console.log ("precio de venta ", precioVenta);
console.log ("impuesto de venta ", ImpuestoVenta );
console.log ("ganancia del vendendor ", gananciavendedor);
console.log ("costo total" , costototal);