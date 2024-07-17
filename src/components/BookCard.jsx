import React from 'react'; // Importa la biblioteca React
import { Card, Col } from 'react-bootstrap'; // Importa los componentes Card y Col de react-bootstrap
import './BookCard.css'; // Importa el archivo CSS para aplicar estilos personalizados a las tarjetas

const BookCard = ({ book }) => { // Declara un componente funcional llamado BookCard, que recibe una propiedad book
  return (
    <Col md={4} className="mb-4 small-card-col"> {/* Define una columna de tamaño mediano (md) de 4 unidades con margen inferior (mb) y una clase CSS personalizada */}
      <Card className="small-card"> {/* Usa el componente Card de react-bootstrap con una clase CSS personalizada */}
        <Card.Img 
          variant="top" 
          src={require(`../media/${book.Imagen}`)} 
          className="small-card-img" 
        /> {/* Muestra la imagen del libro en la parte superior de la tarjeta con una clase CSS personalizada */}
        <Card.Body> {/* Contenedor del cuerpo de la tarjeta */}
          <Card.Title className="small-card-title">{book.Nombre}</Card.Title> {/* Muestra el título del libro con una clase CSS personalizada */}
          <Card.Text className="small-card-text"> {/* Contenedor para el texto de la tarjeta con una clase CSS personalizada */}
            <strong>Autor:</strong> {book.Autor} <br /> {/* Muestra el autor del libro en negrita */}
            <strong>Editorial:</strong> {book.Editorial} {/* Muestra la editorial del libro en negrita */}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BookCard; // Exporta el componente BookCard como el valor por defecto del módulo
