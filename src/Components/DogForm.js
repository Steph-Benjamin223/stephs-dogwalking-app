//Importing useState hook from React for state management
import React, { useState } from "react";

//DogForm component for adding a new dog entry
//Receives addDog function as a prop from the parent component to add a new dog to the list
function DogForm({ addDog }) {
  //State for storing the owner's name, dog's name, breed and age
  const [owner, setOwner] = useState("");
  const [dogName, setDogName] = useState("");
  const [dogBreed, setDogBreed] = useState("");
  const [dogAge, setDogAge] = useState("");

  //handleSubmit function to process the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); //Prevents the default form submit action

    //Constructs a new dog object with the form state values
    let newDog = {
      owner: owner,
      dogName: dogName,
      dogBreed: dogBreed,
      dogAge: dogAge,
    };
    //Calls the addDog function passed as a prop with the newDog object
    addDog(newDog);

    //Resets the form fields to empty strings after submission
    setOwner("");
    setDogName("");
    setDogBreed("");
    setDogAge("");
  };

  //Render the form with input fields for owner name, dog name, breed and age and a submit button
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Owner"
        value={owner}
        onChange={(e) => setOwner(e.target.value)} //updates owner state on change
      />
      <input
        type="text"
        placeholder="Dog Name"
        value={dogName}
        onChange={(e) => setDogName(e.target.value)} //updates dogName state on change
      />
      <input
        type="text"
        placeholder="Dog Breed"
        value={dogBreed}
        onChange={(e) => setDogBreed(e.target.value)} //updates dogBreed state on change
      />
      <input
        type="text"
        placeholder="Dog Age"
        value={dogAge}
        onChange={(e) => setDogAge(e.target.value)} //updates dogAge state on change
      />
      <button type="submit">Add Dog</button>
    </form>
  );
}
//Exporting DogForm component for use in other parts of the application
export default DogForm;
