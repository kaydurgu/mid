import React, { useState, useEffect } from "react";
function Joke() {
  const [joke, setJoke] = useState(null);
  useEffect(() => {
    fetch("https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a616286010msh74dfa5b551318cbp1e3864jsn3c5ef43a6677",
        "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setJoke(data[0].joke);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h2>Joke of the day:</h2>
      <p>{joke}</p> 
      {joke && <p>{joke}</p>}
    </div>
  );
}
export default Joke;