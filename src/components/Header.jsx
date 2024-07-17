import React from 'react'; // Importa la biblioteca React
import { Container } from 'react-bootstrap'; // Importa el componente Container de react-bootstrap

const Header = () => { // Declara un componente funcional llamado Header
  return (
    <header className="bg-primary text-white text-center py-3"> {/* Define un elemento header con clases CSS para el fondo, texto y alineación */}
      <Container> {/* Usa el componente Container de react-bootstrap para centrar el contenido */}
        <h1>Librería React</h1> {/* Muestra el título de la página */}
      </Container>
    </header>
  );
};

export default Header; // Exporta el componente Header como el valor por defecto del módulo
