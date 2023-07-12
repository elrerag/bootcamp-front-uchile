// valida el rango
function validarRango(numero) {
  return numero >= 1 && numero <= 1000;
}

function calcularPorcentaje(numero_uno, numero_dos) {
  return (numero_dos / numero_uno) * 100;
}

function calcularSuma(numero_uno, numero_dos) {
  return numero_uno + numero_dos;
}

function calcularResta(numero_uno, numero_dos) {
  return numero_uno - numero_dos;
}

function main() {
  const numero_uno = 11;
  const numero_dos = 10;

  if(validarRango(numero_uno) && validarRango(numero_dos)){
    if (numero_uno > numero_dos) {
        const porcentaje = calcularPorcentaje(numero_uno, numero_dos);
        const suma = calcularSuma(numero_uno, numero_dos);
        const resta = calcularResta(numero_uno, numero_dos);
    
        console.log(`Porcentaje: ${porcentaje}%`);
        console.log(`Suma: ${suma}`);
        console.log(`Resta: ${resta}`);
      } else {
        console.log('El numero_uno debe ser mayor que el numero_dos');
      }
  }else{
    console.log('Las variables numero_uno y numero_dos solo pueden ser números de 1 a 1000');
  }


}

main();
