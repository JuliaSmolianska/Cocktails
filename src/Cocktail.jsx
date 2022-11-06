import { useState, useEffect } from "react";

export default function Cocktail({
  strDrink,
  strInstructions,
  strDrinkThumb,
  strCategory
}) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {}, [counter]);
  function onPress() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h2> {strDrink} </h2>
      <p> {strInstructions} </p>
      <img src={strDrinkThumb} alt={strCategory} height={150} />
      <p>
        Like it
        <span onClick={onPress}>❤</span>
        {counter}
      </p>
      <hr />
    </div>
  );
}
