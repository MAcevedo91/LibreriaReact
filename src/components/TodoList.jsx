import React, { Fragment, useRef, useState } from "react";
import { TodoItem } from "./TodoItem";
import { v4 as uuid } from "uuid"; //importamos la libreria para utilizarla con el as la renombramos, esta libreria sirve para generar datos aleatorios

export function TodoList() {
  const [todos, setTodos] = useState([
    { id: "1", tarea: "Planificar", completado: true },
    { id: "2", tarea: "Analizar", completado: true },
    { id: "3", tarea: "Diseñar", completado: true },
    { id: "4", tarea: "Desarrollar", completado: true },
    { id: "5", tarea: "Realizar pruebas", completado: true },
  ]);

  //rescatamos la referencia del input (lo que se escribe en su value), utilizamos el hook de react useref
  const tareaRef = useRef();

  //creamos una función que premita agregar una tarea nueva
  const agregarTarea = () => {
    const tarea = tareaRef.current.value;
    const id = uuid(); // la libreria uuidv4 debe instalarse en la consola con npm install uuidv4

    //validamos que la tarea no este vacia
    if (tarea === "") return;

    //aca vamos a enviar a "todos" la nueva tarea
    setTodos((prevTodos) => {
      const nuevaTarea = {
        id: id,
        tarea: tarea,
        completado: false,
      };
      return [...prevTodos, nuevaTarea];
    });

    //luego debo limpiar el input para que quede vacio cada vez que se agregue una tarea
    //para ello ocupo su referencia y le mando en el value el valor null
    tareaRef.current.value = null;
  };

  //función para cambiar estado de la tarea, necesito de un id para poder identificar a que tare le cambiare el estado
  const cambiarEstado = (id) => {
    const newTodos = [...todos]; //creo una copia de todos
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completado = !todo.completado;
    setTodos(newTodos);
  };

  //creamos un elemento que muestre el resumen de las tareas --> está con Mayuscula, porque es un componente ya que devuelve un html
  const ResumenTareas = () => {
    const cantidad = cantidadTareas(); //esta constante obtiene un array
    return (
      <div className="alert alert-success">Tareas sin terminar: {cantidad.length}</div>  //como quiero la cantidad, obtengo la longitud del array
    );
  };

  //creanos una función que cuente las tareas
  const cantidadTareas = () => {
    //utilizo el filtro para obtener un array con todo lo que me cumpla la condición
    //en este caso se hará un array con todas las tareas que tengan el "completado" en false (el ! niega la condición verdadera)
    return todos.filter((todo) => !todo.completado);
  };

  //Creamos una función para eliminar las tareas completadas
  const eliminarCompletados = () => {
    const newTodos = todos.filter((todo)=> !todo.completado); //esto nos entrega un array con los que son false
    setTodos(newTodos); //reemplazamos en nuestro "todos"  el array obtenido
  }

  return (
    <Fragment>
      <div className="container mt-2">
        {/* Título de la pág */}
        <h1 className="alert alert-primary text-center">Lista de Tareas</h1>

        <div className="d-flex gap-2 mb-3">
          <input type="text" className="form-control" ref={tareaRef} />

          {/* Button de añadir tarea */}
          <button
            className="btn btn-success"
            style={{ minWidth: "150px", fontSize:'13px' }}
            onClick={agregarTarea}
          >
            Añadir tarea <i className="bi bi-plus-square small"></i>
          </button>

          {/* Button de eliminar tareas completadas */}
          <button
            className="btn btn-danger"
            style={{ minWidth: "200px", fontSize:'13px' }}
            onClick={eliminarCompletados}
          >
            Eliminar completadas <i className="bi bi-trash3"></i>
          </button>

        </div>
        <ul>
          {/* acá recorremos nuestra constante "todos" */}
          {todos.map((todo) => (
            <TodoItem todo={todo} key={todo.id} cambiarEstado={cambiarEstado} />
          ))}
        </ul>
        <ResumenTareas />
      </div>
    </Fragment>
  );
}
