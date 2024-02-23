//Importing React library for component definition
import React from "react";
//Importing CSS module for styling
import styles from "./Testimonials.module.css";

// Testimonials functional component definition. This component is designed to display a list of testimonials.
// It accepts a 'testimonials' prop, which is an array of testimonial objects. Each object should contain
// an 'id' for React's list rendering optimization, a 'name' for the testimonial giver, and a 'message'

const Testimonials = ({ testimonials }) => {
  //Rendering the testimonials component with dynamic content based on the 'testimonials' prop
  return (
    <div className={styles.testimonials}>
      <h2>Testimonials</h2>
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className={styles.testimonial}>
          <h3 className={styles.name}>{testimonial.name}</h3>
          <p className={styles.message}>"{testimonial.message}"</p>
        </div>
      ))}
    </div>
  );
};

//Export the Testimonials component for use in other parts of the application
export default Testimonials;
