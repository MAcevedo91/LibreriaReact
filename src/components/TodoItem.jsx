import React from "react";

export function TodoItem({todo, cambiarEstado}){
    //desde todoList estamos enviando todo y aca lo estamos recibiendo y desestructurando en id y tarea
    const {id, tarea, completado} = todo;

    //función local que se ejecuta cuando la llamo en el change del checkbox
    const fnCambiarEstado = () => {
        //se ejecutara la función que estoy recibiendo en el parámetro del componente
        cambiarEstado(id);
    }

    return (
    <li>
        <input type="checkbox" className="form-check-input" checked={completado} onChange={fnCambiarEstado}  /> {tarea}
    </li>
    )
}