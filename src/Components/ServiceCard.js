import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div>
      <h3>{service.name}</h3>
      <p>{service.description}</p>
    </div>
  );
};

export default ServiceCard;
