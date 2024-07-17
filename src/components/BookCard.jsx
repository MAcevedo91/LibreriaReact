import React from 'react';
import { Card, Col } from 'react-bootstrap';

const BookCard = ({ book }) => {
  return (
    <Col md={4} className="mb-4">
      <Card>
        <Card.Img variant="top" src={require(`../media/${book.Imagen.replace('C:\\Users\\mrcla\\Projects\\libreriareact\\src\\media\\', '')}`)} />
        <Card.Body>
          <Card.Title>{book.Nombre}</Card.Title>
          <Card.Text>
            <strong>Autor:</strong> {book.Autor} <br />
            <strong>Editorial:</strong> {book.Editorial}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BookCard;
