/*(poo) pogramacion orientada a objetos 

la poo es una paradigma e programacion que oganiza el software en clases y objetos para modelar conceptos del mundo real.Este enfoque lo mueve la reutilizacion del codigo modularidad y mejor oganiacion del software.
tipos:abstraccion;encapsulacimiento;polimorfismo,herencia y otras hayq que indagarlas ?

*/
//crear el objeto automovil

document.writeln(`Creacion de objeto autmovil <br>`);
var auto = {
  marca: `toyota`,
  modelo: `corolla`,
  color: `Azul`,
  año: `2026`,
  combusible: `Diesel`,
  tipo: `Sedin`,
  radio: [`fm`, `mp4`, `usb`],
};

// acceso a las propiedades : e utiliza la rotacion de punto (punto.marca) para acceder a las propiedades del objeto.

document.writeln(`marca : ${auto.marca}`, `<br>`);
document.writeln("<br>");
document.writeln(`clase de vehiculo`, "<br>");

class vehiculos {
  marca = `toyota`;
  modelo = `corolla`;
  color = `Azul`;
  año = `2026`;
  combusible = `Diesel`;
  tipo = `Sedin`;
  precio = `78.289.000`;

  //metodos
  //representa acciones o comportamientos en este caso del vehiculo.
  acelerar() {
    return `el ${this.marca} acelera de 0 a 100km/h en tan solo 3 segundos.`;
  }
  frenar() {
    return `el ${this.marca} ${this.modelo}puede frenar de 100 a 0 km/h en tan solo 2. segundos.`;
  }
}
//crea un objeto
const ferrari = new vehiculos();
//se declara una contaste, lueo la palabra reservada NEW que significaque eta creando una instacia nueva de tipo de objeto y al colocar el nombre de la clase,para este nuevo objeto tendra a disposcion los atributos y metodos de la clase previamente creada.

//mostrar las propiedades y metodos del objeto ferrari
document.writeln(`marca : ${ferrari.marca} <br>`);
document.writeln(`modelo : ${ferrari.modelo} <br>`);
document.writeln(`color : ${ferrari.color} <br>`);

document.writeln("<br>");

class animal {
  nombre = `ballena`;
  especie = `mamifero`;
  color = `azul`;
  tamañomaximo = `30 mts`;

  distancia() {
    return `  ${this.tamañomaximo} la ballena azul puede superar los 30 metros y 170 toneladas, y muchas especies viven décadas. `;
  }
}
const ballena = new animal();

document.writeln(`nombre: ${ballena.nombre} <br>`);
document.writeln(`especie : ${ballena.especie} <br>`);
document.writeln(`color : ${ballena.color} <br>`);
document.writeln(`tamaño : ${ballena.distancia()} <br>`);

//Herencia subclases y metodos
class constructor {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}
class futbolista extends Deportistas {
  constructor(nombre, apellido, goles) {
    super(nombre, apellido);
    this.goles = goles;
  }
  get goles() {
    return this.goles;
  }
  set goles(newgoals) {
    this.goles = newgoals;
  }
}
let futbolista2 = new futbolista(`Liones`, `messi`, 5);

document.writeln(`goles : ${futbolista2.Deportistas()}`);
document.writeln(`goles : ${futbolista2.Deportistas()}`);
document.writeln(`goles : ${futbolista2.Deportistas()}`);
