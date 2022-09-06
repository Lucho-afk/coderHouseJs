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
                <button class="btn btn-primary" onClick="metodoDePago(1,${c.precio})">Efectivo</button>
                <br>
                <button class="btn btn-primary" onClick="metodoDePago(2,${c.precio})">Comprar</button>
                <br>
                <button class="btn btn-primary" onClick="metodoDePago(3,${c.precio})">Comprar</button>
            </div>
        </div>
        
    `
  ); //esto lo tengo que poner mas fachero no se me ocurre con que quizas un dropdown
  lugarDeMuestraDeComida.innerHTML = array.join(``);
}

function validador(numero) {
  return isNaN(numero);
}

/*-------------------------metodo de pago--------------------------------------*/

function metodoDePago(key, precio) {
  console.log(key);
  switch (key) {
    case 1:
      pagoConTarjeta();
      break;
    case 2:
      efectivo(precio);
      break;
    case 3:
      pagoConQR();
      break;
    default:
      break;
  }
}

/*-------------------------pago con tarjeta-----------------------------------*/

function pagoConTarjeta() {
  let nroTarjeta = document.getElementById("nroTarjeta").value;
  let cvs = document.getElementById("cvs").value;
  let Titular = document.getElementById("Titular").value;
  let datosDelPago = [nroTarjeta, cvs, Titular];
  //aca hay que meter validaciones todavia pero esto era sobre la entrega de arrays
  alert(datosDelPago);
}
//metodo de pago
//tarjeta de credito - efectivo - qr
//lo quiero sacar con un modal

/*----------------------------pago por efectivo-------------------------------*/

function efectivo(precio) {
  let efectivoDelCliente = parseFloat(prompt("Ingrese su dinero"));
  while (validador(efectivoDelCliente)) {
    efectivoDelCliente = parseFloat(prompt("Ingrese otra ves por favor"));
    validador(efectivoDelCliente)
      ? alert("El numero ingresado es incorrecto")
      : alert(calcularVuelto(efectivoDelCliente, precio));
  }
}

function calcularVuelto(efectivo, precio) {
  let resta = precio - efectivo;
  return 0 > resta
    ? `Muchas gracias por su compra, su vuelto es: ${-1 * resta}$`
    : `Su saldo es insuficiente, le falta: ${resta}$`;
}

function segundoPago(resta) {
  efectivo(resta);
}
/*------------------------------pago con qr-------------------------------------*/

function pagoConQR() {
  //aca tengo que levantar un pop up con un qr ¿se podra hacer un generador de qr?
}

/*------------------------------levantar un modal-------- ----------------------*/
