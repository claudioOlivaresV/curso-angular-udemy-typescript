import { calculaISV, Producto } from "../ejercicios/desestru-argumentos";

const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100,
    },
    {
        desc: 'Telefono 2',
        precio: 120,
    }
]


const [total, isv] = calculaISV(carritoCompras);

console.log(total, isv);
