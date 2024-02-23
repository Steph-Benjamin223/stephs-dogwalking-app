//importing react for component creation
import React from "react";
//import ServiceCard component to display service details
import ServiceCard from "../Components/ServiceCard";

//Array of service objects, each with an id, name, and description
//This serves as mock data for the services offered
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

//Functional component to display the services offered
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

//Exporting ServicesPage component for use in other parts of the application
export default ServicesPage;
