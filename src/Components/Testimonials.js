import React from "react";

const Testimonials = ({ testimonials }) => {
  return (
    <div>
      <h2>Testimonials</h2>
      {testimonials.map((testimonial) => (
        <div key={testimonial.id}>
          <h3>{testimonial.name}</h3>
          <p>{testimonial.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
