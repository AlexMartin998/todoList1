import { ToDo } from "./todo.class";

export class ToDoList {
    constructor() {
        this.cargarLocalStorage();
    }

    nuevoToDo(toDo) {
        this.toDos.push(toDo);
        this.guardarLocalStorage();
    }

    eliminarToDo(id) {
        this.toDos = this.toDos.filter((i) => i.id != id);
        this.guardarLocalStorage();
    }

    marcarCompletado(id) {
        for (const i of this.toDos) {
            if (i.id == id) {
                i.completado = !i.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados() {
        this.toDos = this.toDos.filter((i) => !i.completado);
        this.guardarLocalStorage();
    }

    guardarLocalStorage() {
        localStorage.setItem("toDo", JSON.stringify(this.toDos));
    }

    cargarLocalStorage() {
        this.toDos = (localStorage.getItem("toDo")) ? JSON.parse(localStorage.getItem("toDo")) : [];

        // this.toDos = this.toDos.map(objeto => ToDo.fromJson(objeto))
        this.toDos = this.toDos.map(ToDo.fromJson); //Semi pro tip
    }
}
