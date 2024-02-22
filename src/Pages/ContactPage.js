import React from "react";
import ContactForm from "../Components/ContactForm";
import BookingForm from "../Components/BookingForm";

const ContactPage = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <ContactForm />

      <h1>Booking Form</h1>
      <BookingForm />
    </div>
  );
};

export default ContactPage;
