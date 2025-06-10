const longitudCadena = (cadena) => {
  return cadena.length;
};
console.log(longitudCadena("Hola Mundo"));

const devuelvePrimeraLetra = (cadena) => {
  return cadena.slice(0, 1);
};
console.log(devuelvePrimeraLetra("Hola Mundo"));

const devuelveUltimaLetra = (cadena) => {
  return cadena.slice(-1);
};
console.log(devuelveUltimaLetra("Hola Mundo"));

const devuelveEnesimaLetra = (cadena, posicion) => {
  if (posicion < 0 || posicion >= cadena.length) {
    return "Posición fuera de rango";
  }
  return cadena[posicion];
};
console.log(devuelveEnesimaLetra("Hola Mundo", 1));

const imprimirSubstring = (cadena, inicio, fin) => {
  console.log(cadena.substring(inicio, fin));
}
imprimirSubstring("Wonderful day", 3, 7);

const convertirAMayusculas = (cadena) => {
  return cadena + '-' + cadena.toUpperCase();
};
console.log(convertirAMayusculas("brayan"));

const shortcut = (palabra1, palabra2) => {
  return palabra1.charAt(0) + palabra2.charAt(0);
};
console.log(shortcut("Amnesty", "International"));

const firstChar = (cadena) => {
  if (cadena.length === 0) {
    return "La cadena está vacía";
  }
  return cadena.trim().charAt(0);
};
console.log(firstChar("  Rosa Parks  "));


const devuelveLaMasLarga = (p1, p2) => {
  if (p1.length === p2.length || p1.length > p2.length) {
    return p1
  }

  return p2
};
console.log(`La palabra mas largas es ${devuelveLaMasLarga('Hola', 'mundo')}`)

const devuelveLaMasLargaTresPalabras = (p1, p2, p3) => {
  if (p1.length > p2.length && p1.length > p3.length) {
    return p1;
  } else if (p2.length > p1.length && p2.length > p3.length) {
    return p2
  } else {
    return p3
  }

  return 'No hay una única cadena más larga.'
};
console.log()

