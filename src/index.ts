import * as readline from 'readline';
import { subToTal } from './subTotal.js';
import { cuatoEsDeIva } from './iva.js';
import { totalTodo } from './total.js';

const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});

const consulta = (texto: string): Promise<string> => {
    return new Promise((resolve) => rl.question(texto, resolve));
};

console.log(`Hecho por: Mynor Eduardo Enrique Sanchez Tzaj 2025319 \n`)
console.log('Ingresa tus precios separados por comas Ejemplo: \t 150, 50, 20')

const main = async () => {
  const input = await consulta('PRECIOS: ');

  const productos = input.split(',').map(Number);

  const subtotal = subToTal(productos);
  const iva = cuatoEsDeIva(subtotal);
  const total = totalTodo(subtotal, iva);

  console.log(`Tu subtotal es: Q${subtotal}`);
  console.log(`Tu IVA es: Q${iva}`);
  console.log(`Tu total con iva es: Q${total}\n`);

  rl.close();
};

main() ;

/**
 * DESCRIPCION
 * interaccion de consola la cual calcula el total de una compra incluyendo 
 * el IVA apartir de una lista de precios.
 * 
 * FUNCION PRINCIPAL
 * uso una funcion asíncronica la cual me ayuda
 * que trabaje todo el flujo al mismo tiempo en segundo plano.
 * 
 * PARAMETROS QUE RESIVE
 * solo pide los datos de subtotal, pero como tal no resive solo ejecuta las funciones.
 * 
 * VALORES QUE DEVUELVE
 * Devuelve las cantidades en cmd, pero como tal no devuelve ningun valor
 * 
 * FUNCIONES 
 * 1) solicita al que ingres precios separados por comas o solo uno
 * 2) convierte los precios en un array
 * 3) subTotal sumna todos los datos que almacena array en el archivo(subtotal.ts)
 * 4) calcula el IVA(0.12) (iva.ts)
 * 5) calcula el subtotal usando totalTodo (total.ts)
 * 6) Muesta los resultados en consola
 * 
 * DEPENDENCIAS IMPORTADAS
 * subTotal: La suma de todos los precios
 * cuatoEsDeIva: Da el IVA 12%
 * totalTodo: suma total + iva =total
 */