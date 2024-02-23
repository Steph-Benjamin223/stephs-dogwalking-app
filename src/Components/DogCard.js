//Importing necessary hooks and components from react-bootstrap and react libraries

import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

//DogCard component for displaying dog information and actions
const DogCard = ({ dog, onDelete }) => {
  //State to toggle the visibility of the age edit menu
  const [showMenu, setShowMenu] = useState(false);
  //State to manage and update the dog's age
  const [age, setAge] = useState(dog.dogAge);

  //Function to handle saving the updated age to the server
  async function handleSave() {
    const response = await fetch(
      `https://65d0d4eaab7beba3d5e3c37b.mockapi.io/dogs/${dog.id}`,
      {
        method: "PUT", //HTTP method to update part of the resource
        headers: {
          "Content-Type": "application/json", //Set the content type to JSON
        },
        body: JSON.stringify({ dogAge: age }), //Stringify the updated age to send in the request body
      }
    );
    //Check if the response is successful
    if (response.ok) {
      const data = await response.json(); //Parse JSON response into JavaScript object
      setShowMenu(false); //Hide the edit menu after saving
      console.log("RESPONSE Data: ", data); //Log the response data for debugging
      setAge(data.dogAge); //Update the age state with the response data
    }
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={dog.imgUrl} />
      <Card.Body>
        <Card.Title>{dog.dogName}</Card.Title>
        <Card.Text>
          {dog.dogBreed} - {age} years old
        </Card.Text>
        <Card.Text>{dog.description}</Card.Text>
        {showMenu ? (
          <>
            <input
              placeholder="age"
              value={age}
              onChange={(e) => setAge(e.target.value)} //Update age state on change
            />
            <button onClick={handleSave}>Save</button>
          </>
        ) : null}

        <Button variant="primary" onClick={() => setShowMenu(!showMenu)}>
          Edit
        </Button>
        {/** hand this button call your handle delete function */}
        <Button variant="danger" onClick={() => onDelete(dog.id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

//Exporting DogCard component for use in other parts of the application
export default DogCard;
