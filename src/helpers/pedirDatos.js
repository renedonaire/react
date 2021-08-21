import { stock } from "../data/stock"; // Importa datos simulados

export const pedirDatos = () => {
    // Retorna una promesa que se cumple siempre...
    return new Promise((resolve, reject) => {
        // ...y que devuelve los datos de 'stock' después de 2 segundos
        setTimeout(() => {
            resolve(stock)
        }, 2000)
    })
};
