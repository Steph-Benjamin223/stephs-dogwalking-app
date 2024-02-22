import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    dogname: "",
    email: "",
    dates: "",
    services: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Here you would typically send the formData to a server
    // For example: axios.post('/api/contact', formData)
    setFormData({
      name: "",
      dogname: "",
      dates: "",
      services: "",
    }); // Reset form after submission
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicName">
        <Form.Label>Dog Name</Form.Label>
        <Form.Control
          type="text"
          name="dogname"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your dog name"
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicName">
        <Form.Label>Dates</Form.Label>
        <Form.Control
          type="text"
          name="dates"
          value={formData.email}
          onChange={handleChange}
          placeholder="Dates"
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicName">
        <Form.Label>Services</Form.Label>
        <Form.Control
          type="text"
          name="services"
          value={formData.email}
          onChange={handleChange}
          placeholder="Services"
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default BookingForm;
