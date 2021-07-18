////EJERCICIO 1//// en visual da ok pero en mumuki no

/*const nombreUsuario = prompt("¿Cuál es tu nombre?");

const titulo = document.querySelector("h1");

titulo.textContent = "Hola " + nombreUsuario + ". " + "Te damos la bienvenida.";*/

////EJERCICIO 2////

/*const ingresarColor = prompt("Ale, por favor ingresá un color en sistema hexadecimal, INCLUYENDO EL #. Gracias!");

const bodyDeColor = document.querySelector("body")

console.log(bodyDeColor.style)

bodyDeColor.style.backgroundColor = ingresarColor*/

////EJERCICIO 3////

/*const primerValor = prompt(
  "Ale, por favor ingresá el primer valor correspondiendo al color en sistema RGB."
);

const segundoValor = prompt(
  "Ale, por favor ingresá el segundo valor correspondiendo al color en sistema RGB."
);

const tercerValor = prompt(
  "Ale, por favor ingresá el tercer valor correspondiendo al color en sistema RGB."
);

const colorRgb =
  "rgb(" + primerValor + "," + segundoValor + "," + tercerValor + ")";

const colorBody = document.querySelector("body");

colorBody.style.backgroundColor = colorRgb;*/

////EJERCICIO 4////

/*const tamañoImagen = prompt(
  "Ingresa el tamaño de imagen deseado: chica, mediana o grande"
);

const imagen = document.querySelector(".gatito");

const cambiarTamaño = (tamañoImagen) => {
  if (tamañoImagen == "chica") {
    imagen.style.width = "200px";
  } else if (tamañoImagen == "mediana") {
    imagen.style.width = "500px";
  } else if (tamañoImagen == "grande") {
    imagen.style.width = "800px";
  }
};

cambiarTamaño(tamañoImagen)*/

//// EJERCICIO 5 ////

/*const temperatura = prompt("Ingrese el valor de la temperatura");

const tituloTemperatura = document.querySelector("h1");

const colorTemperatura = (temperatura) => {
  if (temperatura < 0) {
    tituloTemperatura.textContent = "Temperatura actual: " + temperatura + "º";
    tituloTemperatura.style.color = "rgb(0, 0, 255)";
  }
  
  else if ( temperatura >= 0 && temperatura < 15) {
    tituloTemperatura.textContent = "Temperatura actual: " + temperatura + "º";
    tituloTemperatura.style.color = "rgb(0, 170, 228)";
  }
  
  else if ( temperatura >= 15 && temperatura < 25) {
    tituloTemperatura.textContent = "Temperatura actual: " + temperatura + "º";
    tituloTemperatura.style.color = "rgb(0, 255, 0)";
  }
  
  else if (temperatura >= 25 && temperatura < 30) {
  tituloTemperatura.textContent = "Temperatura actual: " + temperatura + "º";
  tituloTemperatura.style.color = "rgb(255, 255, 0)";
}

  else if (temperatura >= 30 && temperatura < 35) {
  tituloTemperatura.textContent = "Temperatura actual: " + temperatura + "º";
    tituloTemperatura.style.color = "rgb(255, 128, 0)";
}

else if (temperatura >= 35) {
  tituloTemperatura.textContent = "Temperatura actual: " + temperatura + "º";
    tituloTemperatura.style.color = "rgb(255, 0, 0)";
}
}

colorTemperatura(temperatura);*/

///EJERCICIO 6 ///

/*const numeroPorcentaje = prompt("Ingrese un numero dentro del 0 al 100 para calcular porcentaje")

const barra = document.getElementById("barra");

const calcularProgreso = (numeroPorcentaje) => {
  if(numeroPorcentaje >= 0 && numeroPorcentaje <=100) { barra.style.width = numeroPorcentaje + "%"}
  
  else if( numeroPorcentaje > 100){ barra.style.width = "100%"}
  
}

calcularProgreso(numeroPorcentaje)*/

///EJERCICIO 7 ///

/*const reaccionMeGusta = prompt("Ingresá cantidad de Me gusta!");

const reaccionMeEncanta = prompt("Ingresá cantidad de Me encanta!");

const reaccionMeAsombra = prompt("Ingresá cantidad de Me Asombra!");

const meGusta = document.querySelector(".meGusta");

const meEncanta = document.querySelector(".meEncanta");

const meAsombra = document.querySelector(".meAsombra");

meGusta.textContent = "👍 " + reaccionMeGusta;

meEncanta.textContent = "❤️ " + reaccionMeEncanta;

meAsombra.textContent = "😮 " + reaccionMeAsombra;*/

/// EJERCICIO 8 ////

/*const ingresarTitulo = prompt("Ingrese título del artículo")

const ingresarUrlImagen = prompt("Ingrese url de la imagen")

const ingresarUrlArticulo = prompt("Ingrese url del artículo")

const titulo = document.querySelector("h1")

const urlImagen = document.querySelector("img")

const urlArticulo = document.querySelector("a")

titulo.textContent = ingresarTitulo;

urlImagen.src = ingresarUrlImagen;

urlArticulo.href = ingresarUrlArticulo;*/

