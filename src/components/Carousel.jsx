import React from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';
import bookData from './books.json'; // Importa los datos del JSON
import './Carousel.css'; // Asegúrate de tener este archivo

const Carousel = () => {
  return (
    <div className="small-carousel-container">
      <BootstrapCarousel className="small-carousel">
        {bookData.map((book) => (
          <BootstrapCarousel.Item key={book.id}>
            <img
              className="d-block w-100 small-carousel-img"
              src={require(`../media/${book.Imagen}`)}
              alt={book.Nombre}
            />
            <BootstrapCarousel.Caption>
              <h3 className="small-carousel-title">{book.Nombre}</h3>
              <p className="small-carousel-text">{book.Autor}</p>
            </BootstrapCarousel.Caption>
          </BootstrapCarousel.Item>
        ))}
      </BootstrapCarousel>
    </div>
  );
};

export default Carousel;


