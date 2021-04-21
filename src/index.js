import "./styles.css";

import {ToDoList} from "./classes";
import { crearToDoHtml } from "./js/componentes";


export const toDoList = new ToDoList();


// toDoList.toDos.forEach(i => crearToDoHtml(i));
toDoList.toDos.forEach(crearToDoHtml);   //Semi Pro Tip


console.log('toDos papu: ', toDoList.toDos);




// ----------------------------------------------------------------
/** Local Storage y Session Storage: Propio del Navegador.
    - Local Storage: No se elimina. No tiene tiempo de expiracion.
    - Sessi onStorage: Se elimina cuando cerramos el navegador.

 * Los Metodos NO son almacenados en el Local Storage.
 * [object Object] -> Es la representacion de 1 Objeto en su forma Str.
 * JSON
 */

// localStorage.setItem('my-key', 'Que');

// // Remover en 1.5s la llave especificada:
// setTimeout(() => {
//     localStorage.removeItem('my-key');
// }, 1500);
