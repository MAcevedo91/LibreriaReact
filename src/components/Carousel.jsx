import React from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';
import bookData from './books.json'; // Importa los datos del JSON

const Carousel = () => {
  return (
    <BootstrapCarousel>
      {bookData.map((book) => (
        <BootstrapCarousel.Item key={book.id}>
          <img
            className="d-block w-100"
            src={require(`../media/${book.Imagen.replace('C:\\Users\\mrcla\\Projects\\libreriareact\\src\\media\\', '')}`)}
            alt={book.Nombre}
          />
          <BootstrapCarousel.Caption>
            <h3>{book.Nombre}</h3>
            <p>{book.Autor}</p>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>
      ))}
    </BootstrapCarousel>
  );
};

export default Carousel;
