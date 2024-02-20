import React from "react";
import Testimonials from "../Components/Testimonials";

const testimonials = [
  { id: 1, name: "William M.", message: "Our dog Paco adores Stephanie!" },
  {
    id: 2,
    name: "Kari R.",
    message: "Stephanie has taken great, loving care of Otis for 10 years!",
  },
  // add more testimonials as needed
];

function AboutPage() {
  return (
    <div>
      <h1>About Steph</h1>
      <p>
        With a decade of experience in dog walking and sitting, I have honed my
        skills to become a true dog whisperer, known for my remarkable ability
        to understand and intuitively respond to the needs of pets. My journey
        in this field is marked by instant connections with dogs, showcasing an
        innate empathy and understanding that sets me apart. Recognized for my
        extreme responsibility, reliability, and trustworthiness, I am dedicated
        to ensuring the well-being and happiness of every dog in my care. This
        blend of passion, skill, and commitment makes me a preferred choice for
        pet owners seeking peace of mind and the best care for their furry
        family members.
      </p>

      <Testimonials testimonials={testimonials} />
    </div>
  );
}

export default AboutPage;
