import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const DogCard = ({ dog, onDelete }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [age, setAge] = useState(dog.dogAge);

  async function handleSave() {
    const response = await fetch(
      `https://65d0d4eaab7beba3d5e3c37b.mockapi.io/dogs/${dog.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ dogAge: age }),
      }
    );
    if (response.ok) {
      const data = await response.json();
      setShowMenu(false);
      console.log("RESPONSE Data: ", data);
      setAge(data.dogAge);
    }
  }

  // Write a handle delete funciton that deletes the dog from the API
  // try to remove the dogfrom the UI

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
              onChange={(e) => setAge(e.target.value)}
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

export default DogCard;
