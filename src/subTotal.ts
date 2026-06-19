export const subToTal = (cantidad: number[]): number => {
   return cantidad.reduce((acumulado, cantidad) => acumulado + cantidad, 0)
}