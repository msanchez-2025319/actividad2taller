## index.ts

**Propósito:**  
Este archivo es el punto principal de la aplicación. Se encarga de interactuar con el usuario, recibir los datos ingresados y coordinar el cálculo del subtotal, IVA y total.

**Parámetros:**  
- No recibe parámetros directamente, ya que obtiene la información mediante la entrada por consola (input del usuario).

**Valor de retorno:**  
- No retorna un valor como tal, pero muestra en consola el subtotal, el IVA y el total final.

**Descripción:**  
El programa utiliza el módulo `readline` para solicitar al usuario una lista de precios separados por comas. Luego, convierte esos valores en números y los envía a las funciones correspondientes: `subToTal`, `cuatoEsDeIva` y `totalTodo`. Finalmente, muestra los resultados en consola y cierra la aplicación.

## subtotal.ts

**Propósito:**  
Este archivo se encarga de calcular la suma total de una lista de precios.

**Parámetros:**  
- `precios` (number[ ]): Un arreglo de números que representa los precios ingresados por el usuario.

**Valor de retorno:**  
- (number): El subtotal obtenido al sumar todos los precios.

**Descripción:**  
La función recibe una lista de precios y utiliza el método `reduce` para acumular cada valor hasta obtener el subtotal. Este resultado es enviado al archivo `index.ts` para continuar con el cálculo del IVA.

## iva.ts

**Propósito:**  
Este archivo calcula el 12% de IVA a partir de un subtotal.

**Parámetros:**  
- `subtotal` (number): El monto total sin impuestos.

**Valor de retorno:**  
- (number): El valor correspondiente al 12% de IVA.

**Descripción:**  
La función recibe el subtotal, calcula el 12% multiplicándolo por 0.12 y devuelve el resultado. Este valor luego es utilizado en `index.ts` para calcular el total final.

## total.ts

**Propósito:**  
Este archivo se encarga de calcular el total final sumando el subtotal y el IVA.

**Parámetros:**  
- `subtotal` (number): El monto total sin impuestos.  
- `iva` (number): El valor del impuesto calculado.

**Valor de retorno:**  
- (number): El total final de la compra.

**Descripción:**  
La función recibe el subtotal y el IVA, los suma y devuelve el total final. Este resultado es mostrado al usuario en el archivo `index.ts`.

## Nota el mio no da aproximado

## Ejemplo en la vida cotidiana

Imagina que vas a un supermercado y compras lo siguiente:

- frijol: Q10  
- hot wheels: Q15  
- Pan: Q5  

El proceso sería:

1. Subtotal  
   10 + 15 + 5 = Q30  

2. IVA (12%)  
   30 × 0.12 = Q3.6  

3. Total a pagar  
   30 + 3.6 = Q33.6  


# Diseño y Organización del Proyecto

## Diseño de función

El programa usa funciones sencillas y específicas, donde cada una cumple una función diferente. Por ejemplo, la función de subtotal recibe la lista y calcula la suma total utilizando el método `reduce`. La función `cuatoEsDeIva` toma el subtotal y calcula el 12% del impuesto. Por último, la función `totalTodo` suma el subtotal y el IVA para obtener el total.

## Organización de los módulos

Mi proyecto está conformado por módulos independientes como `subtotal.ts`, `iva.ts` y `total.ts`. Cada archivo contiene una función específica, lo que me ayudó a ordenar mi código y lograr una mayor comprensión. El archivo `index.ts` funciona como el módulo principal, el cual se encarga de interactuar con el usuario por medio de la consola y de ejecutar las funciones.

## Conclusión

Al momento de realizar las pruebas, todo el programa funciona correctamente. Permite ingresar diferentes valores, calcular el subtotal, el impuesto y el total. El único detalle es que no se aproximan los resultados a dos decimales.