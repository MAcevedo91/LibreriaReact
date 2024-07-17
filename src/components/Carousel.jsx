import React from 'react'; // Importa la biblioteca React
import { Carousel as BootstrapCarousel } from 'react-bootstrap'; // Importa el componente Carousel de react-bootstrap y lo renombra como BootstrapCarousel
import bookData from './books.json'; // Importa los datos de los libros desde el archivo JSON
import './Carousel.css'; // Importa el archivo CSS para aplicar estilos personalizados al carrusel

const Carousel = () => { // Declara un componente funcional llamado Carousel
  return (
    <div className="small-carousel-container"> {/* Contenedor del carrusel con una clase CSS para aplicar estilos personalizados */}
      <BootstrapCarousel className="small-carousel"> {/* Usa el componente Carousel de react-bootstrap con una clase CSS personalizada */}
        {bookData.map((book) => ( // Itera sobre cada libro en bookData usando el método map
          <BootstrapCarousel.Item key={book.id}> {/* Crea un elemento del carrusel para cada libro, usando el id del libro como clave */}
            <img
              className="d-block w-100 small-carousel-img" // Clase CSS para aplicar estilos personalizados a la imagen
              src={require(`../media/${book.Imagen}`)} // Usa require para importar dinámicamente la imagen del libro
              alt={book.Nombre} // Establece el texto alternativo de la imagen con el nombre del libro
            />
            <BootstrapCarousel.Caption> {/* Contenedor para el texto superpuesto en el carrusel */}
              <h3 className="small-carousel-title">{book.Nombre}</h3> {/* Muestra el nombre del libro con una clase CSS personalizada */}
              <p className="small-carousel-text">{book.Autor}</p> {/* Muestra el autor del libro con una clase CSS personalizada */}
            </BootstrapCarousel.Caption>
          </BootstrapCarousel.Item>
        ))}
      </BootstrapCarousel>
    </div>
  );
};

export default Carousel; // Exporta el componente Carousel como el valor por defecto del módulo



