import React, { useState } from "react";

function DogForm({ addDog }) {
  const [owner, setOwner] = useState("");
  const [dogName, setDogName] = useState("");
  const [dogBreed, setDogBreed] = useState("");
  const [dogAge, setDogAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let newDog = {
      owner: owner,
      dogName: dogName,
      dogBreed: dogBreed,
      dogAge: dogAge,
    };
    addDog(newDog);

    setOwner("");
    setDogName("");
    setDogBreed("");
    setDogAge("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Owner"
        value={owner}
        onChange={(e) => setOwner(e.target.value)}
      />
      <input
        type="text"
        placeholder="Dog Name"
        value={dogName}
        onChange={(e) => setDogName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Dog Breed"
        value={dogBreed}
        onChange={(e) => setDogBreed(e.target.value)}
      />
      <input
        type="text"
        placeholder="Dog Age"
        value={dogAge}
        onChange={(e) => setDogAge(e.target.value)}
      />
      <button type="submit">Add Dog</button>
    </form>
  );
}

export default DogForm;
