//Import React to enable JSX syntax and component functionality
import React from "react";

//ServiceCard component for displaying information about a single service
//This component expects a "service" prop, which is an object containing details about the service
const ServiceCard = ({ service }) => {
  //The component returns JSX layout for rendering the service's name and description
  return (
    <div>
      <h3>{service.name}</h3>
      <p>{service.description}</p>
    </div>
  );
};

//Export the ServiceCard component for use in other parts of the application
export default ServiceCard;
