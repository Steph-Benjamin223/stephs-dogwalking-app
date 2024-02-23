//Import React library for component creation
import React from "react";
//Import ContactForm and BookingForm components to display contact and booking forms
import ContactForm from "../Components/ContactForm";
import BookingForm from "../Components/BookingForm";

//Define the ContactPage component as a functional component
const ContactPage = () => {
  //Return JSX layout for the ContactPage
  return (
    <div>
      <h1>Contact Us</h1>
      <ContactForm />

      <h1>Booking Form</h1>
      <BookingForm />
    </div>
  );
};

//Export the ContactPage component for use in other parts of the application
export default ContactPage;
