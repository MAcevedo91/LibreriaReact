// Importaciones 
import React from "react"; // Importa la biblioteca React
import { createRoot } from "react-dom/client"; // Importa createRoot de react-dom/client para crear un contenedor raíz
import App from "./App"; // Importa el componente principal App de tu aplicación
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap

// Crear un contenedor raíz para luego renderizar en el HTML
const root = createRoot(document.getElementById('root')); // Crea un contenedor raíz utilizando el elemento con id 'root' del HTML

root.render(<App />); // Renderiza el componente App dentro del contenedor raíz

