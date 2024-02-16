import React from "react";
import { Card, Button } from "react-bootstrap";

const ServiceCard = ({ service }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={service.image} />
      <Card.Body>
        <Card.Title>{service.title}</Card.Title>
        <Card.Text>{service.description}</Card.Text>
        <Button variant="primary">Book Now</Button>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;
