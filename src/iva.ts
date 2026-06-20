export const cuatoEsDeIva = (subToTal: number): number =>{
    return subToTal * 0.12;
}

/**
 * PARAMETROS QUE RECIBE
 *  subtotal(number) recibe la suma de las cantidades del subtotal para 
 * aplicarle el IVA.
 * 
 * VALORES QUE DEVUELVE
 * Devuelve los montos del IVA calculando el 12% del subtotal(0.12).
 * 
 * FUNCION
 * Calcula el valor del IVA multiplicando el subtotal * 0.12(12%).
 */