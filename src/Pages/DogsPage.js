import React, { useEffect, useState } from "react";
import DogCard from "../Components/DogCard";

const DogsPage = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await fetch("https://your-mockapi-endpoint/dogs");
        const data = await response.json();
        setDogs(data);
      } catch (error) {
        console.error("Failed to fetch dogs:", error);
      }
    };

    fetchDogs();
  }, []);

  return (
    <div>
      {dogs.map((dog) => (
        <DogCard key={dog.id} dog={dog} />
      ))}
    </div>
  );
};

export default DogsPage;
