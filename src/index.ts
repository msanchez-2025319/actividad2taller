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

console.log(`Mynor Eduardo Enrique Sanchez Tzaj 2025319 \n`)

const main = async () => {
  const input = await consulta('Ingresa tus precios separados por coma: ');

  const productos = input.split(',').map(Number);

  const subtotal = subToTal(productos);
  const iva = cuatoEsDeIva(subtotal);
  const total = totalTodo(subtotal, iva);

  console.log(`Tu subtotal es: ${subtotal}`);
  console.log(`Tu IVA es: ${iva}`);
  console.log(`Tu total con iva es: ${total}\n`);

  rl.close();
};

main() ;