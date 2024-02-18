//Importing React library along with two Hooks, useEffect and useState from react
import React, { useEffect, useState } from "react";
//imports the DogCard component from the specified path.  This component will be used to display the dog data
import DogCard from "../Components/DogCard";
//This defines a functional component named DogsPage using arrow function syntax
const DogsPage = () => {
  // initializing a state  to store dog data.  The useState hook is used to declare a state variable named dogs with an initial empty array.  setDogs is a function that is used to update the state of dogs
  const [dogs, setDogs] = useState([]);

  //useEffect is used to perform side effects in the component.  In this case, it is used to fetch the dog data from the mock API and update the state of dogs
  useEffect(() => {
    //Inside the useEffect function, an asynchronous function named fetchDogs is declared.  This function is responsible for fetching the dog data.
    const fetchDogs = async () => {
      //The try block is used to wrap code that might throw an exception.  It allows the handling of potential errors
      try {
        //the const response = await fethch(apiendpoint) This line uses the fetch API to make an asynchronous HTTP GET request to the specified URL, which returns a promis that resolves to the Response to that request
        const response = await fetch(
          "https://65d0d4eaab7beba3d5e3c37b.mockapi.io/dogs"
        );
        //Once the request is completed, the response body is parsed as JSON using the .json() method, which alson returns a promise.
        const data = await response.json();
        //This line updates the dogs state with the fetched data
        setDogs(data);
      } catch (error) {
        //If an error occurs it is logged to the console
        console.error("Failed to fetch dogs:", error);
      }
    };
    //This line calls the fetchDogs functionto execute the fetch request when the component mounts
    fetchDogs();
    //This empty array as the second argument to useEffect ensures that the effect runs only once after the initial render
  }, []);
  //This begins the JSX return statement for rendering the components UI
  return (
    //Maps over the dogs state array, generating a new DogCard component for each dog.  This function takes each dog object from the dogs array and returns a JSX element.
    <div>
      {dogs.map((dog) => (
        //This is the DogCard component for each dog.  It is passed a unique key prop (using the dog's id to ensure React can handle the list efficiently) and the dog data as a prop.  The dog data is passed to the DogCard component as a prop named dog
        <DogCard key={dog.id} dog={dog} />
      ))}
      {/* {JSON.stringify(dogs)} */}
    </div>
  );
};

export default DogsPage;
