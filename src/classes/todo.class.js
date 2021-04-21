export class ToDo {
    // Recuperar los Metos de la clase, dado que Local Storage NO almacena metodos.
    static fromJson({ id, tarea, completado, creado }) {
        const tempToDo = new ToDo(tarea);

        tempToDo.id = id;
        tempToDo.tarea = tarea;
        tempToDo.completado = completado;
        tempToDo.creado = creado;

        return tempToDo;
    }

    constructor(tarea) {
        this.tarea = tarea;

        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
    }

    imprimirClase() {
        console.log(`${this.tarea} - ${this.id}`);
    }
}
