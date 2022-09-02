/*
    Hola luis disculpame probablemnte me estoy pasando con el alcance, 
    pero consegui laburo despues de haberme anotado a toda la carrera y tuve que meterle fast al aprendizaje,
    sigo aprendiendo y creo que esta parte del curso me va a ser muy util, pero se me mezclan los conceptos y los alcances,
    no es que quiera ser arrogante pero es que realmente no se como manejar el alcance que quieren en los entregables,
    por favor teneme paciencia, desde ya muchas gracias y perdon por molestarte.
*/

let comidas = [
  {
    id: 1,
    nombre: "Bic mac",
    precio: 1000,
    img: "./resources/Big_Mac.png",
  },
  {
    id: 2,
    nombre: "Whopper",
    precio: 1200,
    img: "./resources/Whopper.png",
  },
  {
    id: 3,
    nombre: "Stacker",
    precio: 1500,
    img: "./resources/Stacker-Triple.png",
  },
  {
    id: 4,
    nombre: "Cuarto de libra",
    precio: 800,
    img: "./resources/Cuarto_de_libra.png",
  },
  {
    id: 5,
    nombre: "Milanesa <3",
    precio: 2000,
    img: "./resources/milanesas-a-caballojpg.jpg",
  },
];
const lugarDeMuestraDeComida = document.getElementById("muestriaro");
function mostarComida() {
  let array = comidas.map(
    (c) =>
      `
        <div class="card" style="width: 18rem;">
            <img src="${c.img}" class="card-img-top" alt="..." style="height:260px">
            <div class="card-body">
                <h5 class="card-title">${c.nombre}</h5>
                <p class="card-text">${c.precio}$</p>
                <button class="btn btn-primary" onClick="pago(${c.precio})">Comprar</button>
            </div>
        </div>
        
    `
  );
  lugarDeMuestraDeComida.innerHTML = array.join(``);
}

function pago(precio) {
  let efectivoDelCliente = parseFloat(prompt("Ingrese su dinero"));
  validador(efectivoDelCliente)
    ? alert("El numero ingresado es incorrecto")
    : alert(calcularVuelto(efectivoDelCliente, precio));
}

function calcularVuelto(efectivo, precio) {
  let resta = precio - efectivo;
  return 0 > resta
    ? `Muchas gracias por su compra, su vuelto es: ${-1 * resta}$`
    : `Su saldo es insuficiente, le falta: ${resta}$`;
}

function validador(numero) {
  return isNaN(numero);
}
