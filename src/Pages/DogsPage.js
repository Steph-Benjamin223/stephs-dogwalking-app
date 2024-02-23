import React, { useEffect, useState } from "react";
//importing DogCard and DogForm components from the Components directory
import DogCard from "../Components/DogCard";
import DogForm from "../Components/DogForm";

const DogsPage = () => {
  //State to hold the list of dogs
  const [dogs, setDogs] = useState([]);

  //Effect to fetch dogsdata from the mock API on component mount
  useEffect(() => {
    //Async function to fetch dogs from API
    const fetchDogs = async () => {
      try {
        //Fetching data from the mock API
        const response = await fetch(
          "https://65d0d4eaab7beba3d5e3c37b.mockapi.io/dogs"
        );

        const data = await response.json();
        //Missing data parsing

        setDogs(data); //updating state with fetched dogs
      } catch (error) {
        //Logging any errors that occur during the fetch operation
        console.error("Failed to fetch dogs:", error);
      }
    };
    //Calling fetchDogs to initiate the data fetch
    fetchDogs();
  }, []);
  //Handler for deleting a dog by ID
  const onDelete = async (id) => {
    console.log(`Delete Dog did run with id: ${id}`);
    try {
      await fetch(`https://65d0d4eaab7beba3d5e3c37b.mockapi.io/dogs/${id}`, {
        method: "DELETE",
      });
      console.log("Dog deleted:", id);
      //Updating the dogs state to reflect the deletion
      setDogs(dogs.filter((dog) => dog.id !== id));
    } catch (error) {
      //Logging any errors that occur during the delete operation
      console.error("Failed to delete dog:", error);
    }
  };
  //Handler for adding a new dog
  const addDog = async (newDog) => {
    console.log("Add Dog did run with newDog:", newDog);
    try {
      const response = await fetch(
        "https://65d0d4eaab7beba3d5e3c37b.mockapi.io/dogs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newDog),
        }
      );
      const data = await response.json(); //Parsing the response data
      console.log("Dog added:", data);
      //Updating the dogs state to reflect the addition
      setDogs([data, ...dogs]);
    } catch (error) {
      //Logging any errors that occur during the add operation
      console.error("Failed to add dog:", error);
    }
  };
  //Rendering the DogForm and DogCard components
  return (
    <div>
      <DogForm addDog={addDog} />
      {dogs.map((dog) => (
        //Rendering a DogCard for each dog in the dogs state
        <DogCard key={dog.id} dog={dog} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default DogsPage;
