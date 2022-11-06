import "./styles.css";
import { useState, useEffect } from "react";
import Cocktail from "./Cocktail.jsx";
import { ColorRing } from "react-loader-spinner";

export default function App() {
  const [data, setData] = useState(""); //if data is received => success
  const [loading, setLoading] = useState(false); //if data is received => success
  const [error, setError] = useState(""); //if data is received => success

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
      )
        .then((response) => response.json())
        .then((response) => setData(response))
        .then(() => setLoading(false))
        .catch(setError);
    }, 3000);
  }, []);

  if (loading) {
    return (
      <div>
        <ColorRing
          visible={true}
          height="200"
          width="200"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    );
  }

  function showCockteil() {
    return data.drinks.map((eachCockteil) => {
      return (
        <Cocktail
          strDrink={eachCockteil.strDrink}
          strInstructions={eachCockteil.strInstructions}
          strDrinkThumb={eachCockteil.strDrinkThumb}
        />
      );
    });
  }

  if (error) {
    return <h1> Something went Wrong... </h1>;
  }
  if (data) {
    return <pre>{showCockteil()}</pre>;
  }
  return (
    <>
      <h1>No DATA</h1>
    </>
  );
}
