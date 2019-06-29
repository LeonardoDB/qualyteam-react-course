import React, { useState, useEffect } from "react";


function Recipe({
  match
}) {
  const [food, setFood] = useState([]);

  const requestOption = {
    method: "GET",
    headers: { 'Content-Type': 'application/json' }
  }

  useEffect(
    () => {
      async function fetchData() {
        const dados = await fetch(`http://localhost:4000/food/${match.params.id}`, requestOption)
        const json = await dados.json();
        setFood(json);

      }
      fetchData();
    },
    [],
  );

  return (
    <div className="recipe">
      <div className="recipe--container">
        <figure>
          <div
            className="recipe--container-image"
            style={{ backgroundImage: `url("https://static.baratocoletivo.com.br/2017/0622/10012991/g_allfry-c4bbebed11.jpg")` }}
          />
        </figure>
        <div className="recipe--info">
          <h1> {food.title}</h1>
          <div className="recipe--info--description">
            <p>{food.description}</p>
            <span>{food.ingredients}</span>
          </div>
        </div>
      </div>
      <div className="recipe--preparation">
        <h2>Preparação</h2>
        <p>{food.preparation}</p>
      </div>
    </div>
  );
}


export { Recipe };
