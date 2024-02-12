import React from "react";
import { Card, Button } from "react-bootstrap";

const DogCard = ({ dog, onDelete }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={dog.image} />
      <Card.Body>
        <Card.Title>{dog.name}</Card.Title>
        <Card.Text>
          {dog.breed} - {dog.age} years old
        </Card.Text>
        <Button variant="primary">Edit</Button>
        <Button variant="danger" onClick={() => onDelete(dog.id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default DogCard;
