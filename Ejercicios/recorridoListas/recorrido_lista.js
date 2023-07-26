const arreglo = [1, 2, 3, 4, 5]

/**
 * funcion map, verifica cada elemento y opera sobre él, retorna una lista
 * con los elementos adulterados por el call back.
 */

// Duplicar cada valor
const duplicados = arreglo.map(numero => numero * 2)
console.log("duplicados:", duplicados)

// transformar los valores que son pares en cadenas.
const trasformados = arreglo.map(transformado => {
    if(transformado%2 == 0){
        return transformado + ""
    }else{
        return transformado
    }
})

console.log("Transformados: ", trasformados)
