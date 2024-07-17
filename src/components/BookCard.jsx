import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './BookCard.css'; // Asegúrate de tener este archivo

const BookCard = ({ book }) => {
  return (
    <Col md={4} className="mb-4 small-card-col">
      <Card className="small-card">
        <Card.Img variant="top" src={require(`../media/${book.Imagen}`)} className="small-card-img" />
        <Card.Body>
          <Card.Title className="small-card-title">{book.Nombre}</Card.Title>
          <Card.Text className="small-card-text">
            <strong>Autor:</strong> {book.Autor} <br />
            <strong>Editorial:</strong> {book.Editorial}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BookCard;


