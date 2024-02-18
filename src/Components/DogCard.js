import React from "react";
import { Card, Button } from "react-bootstrap";

const DogCard = ({ dog, onDelete }) => {
  console.log("CUrrent Dog in DogCard Component:", dog);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={dog.imgUrl} />
      <Card.Body>
        <Card.Title>{dog.dogName}</Card.Title>
        <Card.Text>
          {dog.breed} - {dog.dogAge} years old
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
