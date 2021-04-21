import { toDoList } from "..";
import { ToDo } from "../classes";


// Ref en el HTML
const d = document,
    divToDoList = d.querySelector(".todo-list"),
    txtInput = d.querySelector(".new-todo"),
    btmBorrar = d.querySelector('.clear-completed'),
    ulFiltros = d.querySelector('.filters'),
    anchorFiltros = d.querySelectorAll('.filtro');


export const crearToDoHtml = (toDo) => {
    const htmlToDo = `
    
    <li class="${toDo.completado ? "completed" : ""}" data-id="${toDo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${
                toDo.completado ? "checked" : ""
            }>
            <label>${toDo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = d.createElement("div");
    div.innerHTML = htmlToDo;

    divToDoList.append(div.firstElementChild);

    return div.firstElementChild;
};


// Eventos:
txtInput.addEventListener("keyup", (e) => {
    if (e.keyCode === 13 && txtInput.value.length > 0) {
        const nuevoToDo = new ToDo(txtInput.value);

        toDoList.nuevoToDo(nuevoToDo);

        crearToDoHtml(nuevoToDo);
        txtInput.value = "";
    }
});


divToDoList.addEventListener("click", (e) => {
    const nombreElemento = e.target.localName, //imput/label/button
        toDoElemento = e.target.parentElement.parentElement, //li
        toDoId = toDoElemento.getAttribute("data-id");

    if (nombreElemento.includes("input")) { //click en el check
        toDoList.marcarCompletado(toDoId); //str
        toDoElemento.classList.toggle("completed");
    } else if (nombreElemento.includes("button")) { //borrar
        toDoList.eliminarToDo(toDoId);
        divToDoList.removeChild(toDoElemento);
    }
});


btmBorrar.addEventListener('click', () => {
    toDoList.eliminarCompletados();
    
    for(let i = divToDoList.children.length - 1; i >= 0; i--) {
        const elemento = divToDoList.children[i];
        if (elemento.classList.contains('completed')) {
            divToDoList.removeChild(elemento);
        }

    }

})


ulFiltros.addEventListener('click', e => {
    const filtro = e.target.text; //todos/pendientes/completados
    if(!filtro) return;

    anchorFiltros.forEach(e => e.classList.remove('selected'));
    e.target.classList.add('selected')

    for(const i of divToDoList.children) {
        i.classList.remove('hidden');
        const completado = i.classList.contains('completed');

        switch (filtro) {
            case 'Pendientes':
                if(completado) i.classList.add('hidden');
                break;
            case 'Completados':
                if(!completado) i.classList.add('hidden');
                break;
        }
    }
    
})

