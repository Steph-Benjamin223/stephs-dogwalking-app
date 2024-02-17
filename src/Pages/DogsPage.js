import React, { useEffect, useState } from "react";
import DogCard from "../Components/DogCard";

const DogsPage = () => {
  // initializing a state  to store dog data
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await fetch(
          "https://65d0d4eaab7beba3d5e3c37b.mockapi.io/dogs"
        );
        const data = await response.json();
        setDogs(data);
      } catch (error) {
        console.error("Failed to fetch dogs:", error);
      }
    };
    fetchDogs();
  }, []);

  console.log("Hello");

  return (
    <div>
      {dogs.map((dog) => (
        <DogCard key={dog.id} dog={dog} />
      ))}
      {/* {JSON.stringify(dogs)} */}
    </div>
  );
};

export default DogsPage;
