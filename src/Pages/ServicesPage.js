import React from "react";
import ServiceCard from "../Components/ServiceCard";

const services = [
  {
    id: 1,
    name: "Dog Walking",
    description: "We offer dog walking services for all breeds.",
  },
  {
    id: 2,
    name: "Dog Sitting",
    description:
      "We provide dog sitting services, ensuring your dog is cared for while you are away.",
  },
  {
    id: 3,
    name: "Cat Sitting",
    description:
      "We offer cat sitting services, taking care of your cat in the comfort of their own home.",
  },
];

function ServicesPage() {
  return (
    <div>
      <h1>Our Services</h1>
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}

export default ServicesPage;
