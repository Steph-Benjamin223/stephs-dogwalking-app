import React, { useState } from "react";

const DogForm = ({ onSave }) => {
  const [dog, setDog] = useState({
    name: "",
    breed: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDog({
      ...dog,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://your-mockapi-endpoint/dogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dog),
      });
      if (response.ok) {
        const newDog = await response.json();
        onSave(newDog); // Implement onSave to update the parent component's state
      } else {
        console.error("Failed to save the dog");
      }
    } catch (error) {
      console.error("Error saving the dog:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Dog's name"
        value={dog.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="breed"
        placeholder="Breed"
        value={dog.breed}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={dog.age}
        onChange={handleChange}
      />
      <button type="submit">Save Dog</button>
    </form>
  );
};

export default DogForm;
