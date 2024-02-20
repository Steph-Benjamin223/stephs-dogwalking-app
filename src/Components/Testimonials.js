import React from "react";
import styles from "./Testimonials.module.css";

const Testimonials = ({ testimonials }) => {
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

export default Testimonials;
