import React from "react";
import { Button } from "./button";
import { Link } from 'react-router-dom'

const Card = ({ id, title, description, imageUrl, ingredients, props }) => (
  <div className="card">
    <div className="card--content">
      <h2 className="card--title">{title}</h2>
      <p className="card--description">{description}</p>
      <div className="card--footer">
        <sub className="card--ingredients">{ingredients}</sub>
        <Link to={`/access/${id}`}>
          <Button onClick={() => console.log(props)}>Acessar</Button>
        </Link>
      </div>
    </div>
    <figure className="card--image">
      <div className="card--image--background" style={{ backgroundImage: `url("https://static.baratocoletivo.com.br/2017/0622/10012991/g_allfry-c4bbebed11.jpg")` }}></div>
    </figure>
  </div>
);
export { Card };
