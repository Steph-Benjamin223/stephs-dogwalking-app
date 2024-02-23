//Importing React with useState hook for managing form state
import React, { useState } from "react";
//Importing Form and Button components from react-bootstrap for UI
import { Form, Button } from "react-bootstrap";

const BookingForm = () => {
  //State for storing form data, initialized with empty values
  const [formData, setFormData] = useState({
    name: "",
    dogname: "",
    email: "",
    dates: "",
    services: "",
  });

  //Handler for form input changes, updating state with new value

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //Handler for form submission, logging form data to the console
  const handleSubmit = (e) => {
    e.preventDefault(); //Preventing the default form submission behavior
    console.log("Form Data Submitted:", formData); //logging form data to the console
    //Resetting the form data to its initial state after form submission
    setFormData({
      name: "",
      dogname: "",
      dates: "",
      services: "",
    });
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
//Exporting the BookingForm component for use in other parts of the application
export default BookingForm;
