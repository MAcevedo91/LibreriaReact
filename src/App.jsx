import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from './components/Header';
import Carousel from './components/Carousel';
import BookCard from './components/BookCard';
import bookData from './components/books.json'; // Importa los datos del JSON
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Header />
      <Container className="mt-4">
        <Carousel />
        <Row className="mt-4">
          {bookData.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default App;
