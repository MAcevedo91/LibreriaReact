//importaciones 
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

//crear un contenedor raíz para luego renderizar en el HTML
const root = createRoot(document.getElementById('root'))

//const elemento = <h1>Hola</h1>

root.render(<App />)

