function esVerdadFalso(booleanParam) {
  if (booleanParam) {
    console.log("Sí, eso es cierto");
  } else {
    console.log("No, eso es falso");
  }
}

esVerdadFalso(true);
esVerdadFalso(false);

function hoyQuieroComer(comida) {
  console.log(comida);
}

hoyQuieroComer('garbanzos');

const calcularCuboNumero = (numero) => {
  console.log(numero ** 3);
};

calcularCuboNumero(3);

const calcularMetrosHora = (kilometrosHora) => {
  console.log(kilometrosHora * 1000);
};

calcularMetrosHora(3);

const calcularAreaRectangulo = (ancho, alto) => ancho * alto;

console.log(calcularAreaRectangulo(5, 10));
console.log(calcularAreaRectangulo(7, 3));

const calcularAreaTrianguloFlecha = (base, altura) => (base * altura) / 2;

console.log(calcularAreaTrianguloFlecha(5, 10));
console.log(calcularAreaTrianguloFlecha(7, 3));

function calcularAreaTriangulo(base, altura) {
  console.log((base * altura) / 2);
}

calcularAreaTriangulo(5, 10);

const calcularPerimetroCirculo = (radio) => {
  console.log(2 * Math.PI * radio);
};

calcularPerimetroCirculo(5);

const calcularAreaCirculo = (radio) => {
  console.log(Math.PI * (radio ** 2));
};

calcularAreaCirculo(5);

function echo(texto) {
  console.log(texto);
}
echo('Greta');
echo('CO2');

function saludar(nombre) {
  console.log(`Hola, ${nombre}`);
}
saludar('Greta');

function test(val) {
  if (val >= 10 && val <= 20) {
    return "Inside";
  } else {
    return "Outside";
  }
}
console.log(test(15));
console.log(test(25));

function testEqual(val) {
  if (val === 12) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(testEqual(10));
console.log(testEqual(12));

function testElse(val) {
  let result = "";
  if (val > 5) {
    result = "Mayor que 5";
  } else {
    result = "Menor o igual a 5";
  }
  return result;
}
console.log(testElse(10));
console.log(testElse(5));

function testElse(val) {
  let result = "";

  if (val > 5) {
    result = "Bigger than 5";
  } else if (val < 5) {
    result = "Smaller than 5";
  } else {
    result = "Equal to 5";
  }

  return result;
}
console.log(testElse(10));
console.log(testElse(5));
console.log(testElse(0));

function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}
console.log(testSize(0));
console.log(testSize(5));
console.log(testSize(10));
console.log(testSize(15));
console.log(testSize(20));

function nand(bool1, bool2) {
  if (bool1 && bool2) {
    return false;
  }
  return true;
}
console.log(nand(true, true));
console.log(nand(true, false));
console.log(nand(false, false));

function nor(bool1, bool2) {
  if (bool1 && !bool2 || !bool1 && bool2) {
    return true;
  }
  return false;
}
console.log(nor(true, true));
console.log(nor(true, false));
