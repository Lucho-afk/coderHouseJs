/*
    Hola luis disculpame probablemnte me estoy pasando con el alcance, 
    pero consegui laburo despues de haberme anotado a toda la carrera y tuve que meterle fast al aprendizaje,
    sigo aprendiendo y creo que esta parte del curso me va a ser muy util, pero se me mezclan los conceptos y los alcances,
    no es que quiera ser arrogante pero es que realmente no se como manejar el alcance que quieren en los entregables,
    por favor teneme paciencia, desde ya muchas gracias y perdon por molestarte.
*/
/*----declaro unas globales----*/
let TOTAL = 0;
let ARRAY_COMIDAS = [];
let TOTAL_EN_CARRITO = 0;
let comidas = [
  {
    id: 1,
    nombre: "Big Mac",
    precio: 1000,
    img: "./resources/Big_Mac.png",
    kcal: 505,
    ingredientes: {
      1: "carne",
      2: "lechua",
      3: "tomate",
    },
    descripcion:
      "Quizás sean las dos hamburguesas de carne 100% vacuna con esa salsa especial y queso derretido, el toque de cebolla y la frescura de la lechuga o el crocante del pepino, lo que la hace la hamburguesa más famosa del mundo. Un sabor único.",
    provedor: "McDonald's®",
  },
  {
    id: 2,
    nombre: "Whopper",
    precio: 1200,
    img: "./resources/Whopper.png",
    kcal: 640,
    ingredientes: {
      1: "carne",
      2: "cebolla",
      3: "tomate",
    },
    descripcion:
      "Ahora nuestra Whopper es sin conservantes, colorantes ni saborizantes artificiales. Con todo el sabor a la parrilla, jugosos tomates, lechuga recién cortada, mayonesa, pepinos y cebollas en rodajas, sobre un suave pan con semillitas de ajonjolí. Pedila así: Whopper y nada más que Whopper, pero con papas y gaseosa ;)",
    provedor: "Burger King®",
  },
  {
    id: 3,
    nombre: "Stacker",
    precio: 1500,
    img: "./resources/Stacker-Triple.png",
    kcal: 829,
    ingredientes: {
      1: "carne",
      2: "baacon",
      3: "cheedar",
    },
    descripcion:
      "3 carnes a la parrilla, salsa stacker, pan, queso cheddar, panceta. Muy potente.",
    provedor: "Burger King®",
  },
  {
    id: 4,
    nombre: "Cuarto de libra",
    precio: 800,
    img: "./resources/Cuarto_de_libra.png",
    kcal: 520,
    ingredientes: {
      1: "carne",
      2: "cheedar",
      3: "ketchup",
    },
    descripcion:
      "La belleza radica en la simpleza de las cosas. Una hamburguesa que no se anda con vueltas. La perfecta combinación entre la mejor carne 100% vacuna y dos quesos que lo rodean, junto con el toque del kétchup, mostaza y la cebolla fresca.",
    provedor: "McDonald's®",
  },
  {
    id: 5,
    nombre: "Milanesa <3",
    precio: 2000,
    img: "./resources/milanesas-a-caballojpg.jpg",
    kcal: "no importa vos comela",
    ingredientes: {
      1: "milanesa",
      2: "huevo frito",
      3: "papitas fritas",
    },
    descripcion: "Si esto no es amor, no se lo que lo sea",
    provedor: "Mama®",
  },
];

/*----------------------------------------LUGAR DE COMPRA-------------------------------------------*/
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
                <button class="btn btn-primary" onClick='agregar("${c.nombre}",${c.precio})'>Agregar</button>
                <a href="./viewa/infoNutricional.html" class="btn btn-primary" onClick='info(${c.id})'>Info</a>
            </div>
        </div>
        
    `
  ); //esto lo tengo que poner mas fachero no se me ocurre con que quizas un dropdown
  lugarDeMuestraDeComida.innerHTML = array.join(``);
}

function validador(numero) {
  pago = 0;
  return isNaN(numero);
}

/*-------------------------metodo de pago(en construccion)--------------------------------------*/

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

/*-------------------------pago con tarjeta(en construccion)-----------------------------------*/
// a esto lo quiero sacar con un modal y un formulario en ves de pedir la tarjeta por un pront
function pagoConTarjeta() {
  /*
  let nroTarjeta = document.getElementById("nroTarjeta").value;
  let cvs = document.getElementById("cvs").value;
  let Titular = document.getElementById("Titular").value;
  let datosDelPago = [nroTarjeta, cvs, Titular];
  */
  //aca hay que meter validaciones todavia pero esto era sobre la entrega de arrays
  /*alert(datosDelPago);*/
}
//metodo de pago
//tarjeta de credito - efectivo - qr
//lo quiero sacar con un modal

/*----------------------------pago por efectivo-------------------------------*/

function efectivo() {
  if (TOTAL == 0) {
    alert("Todavia no ordenaste nada.");
    return;
  }
  let efectivoDelCliente = parseFloat(
    prompt(`Total a pagar: ${TOTAL}$, Ingrese su dinero.`)
  );
  if (validador(efectivoDelCliente)) {
    //aca esta mal
    alert("El numero ingresado es incorrecto");
  } else {
    //aca cuando esta bien
    alert(calcularVuelto(efectivoDelCliente, TOTAL));
  }
  recargar();
}

function calcularVuelto(efectivoDelCliente, precio) {
  let pago = efectivoDelCliente;
  let resta = precio - pago;
  pago = 0;
  let aux = 25;
  while (resta > 0) {
    if (
      confirm(
        `Su saldo es insuficiente, le falta: ${resta}$ ¿quiere agregar dinero?`
      )
    ) {
      aux = parseFloat(prompt(`Total a pagar: ${resta}$, Ingrese su dinero.`));
      if (validador(aux)) return "numero invalido reinicie la operacion";
      pago = pago + aux;
      resta = resta - pago;
      pago = 0;
    } else {
      pago = 0;
      return "adios";
    }
  }
  pago = 0;
  return `Muchas gracias por su compra, su vuelto es: ${-1 * resta}$`;
}

/*------------------------------pago con qr(en construccion)-------------------------------------*/

function pagoConQR() {
  //aca tengo que levantar un pop up con un qr ¿se podra hacer un generador de qr?
}

/*------------------------------levantar un modal(en construccion)-------------------------------*/

/*--------------------------------------carrito de compras---------------------------------------*/

/* hola luis si lees esto me aclaras una duda? : 
estos objetos en js siguen las normas de los objetos?
[encapsulamiento,poliformismo,herencia,abstraccion]*/
class Compra {
  constructor(productos, monto) {
    this.producto = productos;
    this.cantidad = productos.lenth;
    this.pago = monto;
  }
}

function agregar(comida, monto) {
  TOTAL = TOTAL + monto;
  ARRAY_COMIDAS.push(comida);
  numerosDeItemsEnCarrito();
  console.log(TOTAL_EN_CARRITO);
}

// quizas aca habria que implementar una funcion de agrupamiento entre productos por ejemplo: 3 x milanesas = 6k
function cuentaDeCarrito() {
  let compra1 = new Compra(ARRAY_COMIDAS, TOTAL);
  compra1.pago != 0
    ? alert(
        `Usted ordeno: ${compra1.producto}, con un monto total de ${compra1.pago}$`
      )
    : alert(`Usted no selecciono ningun producto`);
}

function numerosDeItemsEnCarrito() {
  TOTAL_EN_CARRITO = TOTAL_EN_CARRITO + 1;
  const carro = document.getElementById("carrito");
  carro.innerHTML = TOTAL_EN_CARRITO;
}

/*----------------------------------funciones utiles-------------------------------------------*/
function recargar() {
  location.reload();
}

/*----------------------------------info nutricional--------------------------------------------*/

function info(id) {
  localStorage.setItem("id", id);
}
function traerSeleccion() {
  return comidas.find((e) => e.id == localStorage.getItem("id"));
}
const cartaDeInfo = document.querySelector(".cartaDeInfo");
function mostarInfoComida() {
  let comidaFiltrada = traerSeleccion();
  let info = `
    <div class="card mb-3" style="margin-top: 2rem">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src=".${comidaFiltrada.img}"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${comidaFiltrada.nombre}</h5>
              <p class="card-text">
                ${comidaFiltrada.descripcion}
              </p>
              <p class="card-text">
                <small class="text-muted">${comidaFiltrada.provedor}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
  `;
  cartaDeInfo.innerHTML = info;
}

const infoDetallada = document.querySelector(".infoDetallada");
function mostarInfoDetalladaComida() {
  let arrayDeIngredientes = [];
  let comidaFiltrada = traerSeleccion();
  let listaIngredientes = comidaFiltrada.ingredientes;
  for (const key in listaIngredientes) {
    arrayDeIngredientes.push(listaIngredientes[key]);
  }
  let info = `
    <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button
        class="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
        Info Detallada
      </button>
    </h2>
    <div
      id="collapseOne"
      class="accordion-collapse collapse"
      aria-labelledby="headingOne"
      data-bs-parent="#accordionExample"
    >
      <div class="accordion-body">
        <p>kcal: ${comidaFiltrada.kcal}</p>
        <p>Ingredientes: ${arrayDeIngredientes}</p>
      </div>
    </div>
  </div>
</div>
  `;
  infoDetallada.innerHTML = info;
}
