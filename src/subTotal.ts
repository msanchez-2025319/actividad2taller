export const subToTal = (cantidad: number[]): number => {
   return cantidad.reduce((acumulado, cantidad) => acumulado + cantidad, 0)
}
/**
 * PARAMETROS QUE RESIVE
 * cantidad(number[]) este array almacena los cantidades que el usuario
 *  brinda para hacer la suma del subtotal.
 * 
 * VALOR QUE DEVUELVE
 * Devuelve la suma total de las cantidades almacenadas en el array.
 * 
 * FUNCION 
 *  Suma las cantidades que se encuentran en el array por medio del
 *  metodo reduce(procesa todos los datos para reducirlos a uno solo).
 */