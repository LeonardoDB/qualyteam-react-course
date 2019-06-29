import React, { Fragment, useState, useEffect } from "react";
import "./App.scss";
import { Navbar } from "./components/navbar";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { List } from "./pages/list";
import { Recipe } from "./components/Recipe";

function Main() {
  const [foods, setFoods] = useState([]);
  // Make a request for a user with a given ID
  const requestOption = {
    method: "GET"
  }
  useEffect(
    () => {
      async function fetchData() {
        const dados = await fetch("http://localhost:4000/food", requestOption)
        const json = await dados.json();
        setFoods(json);

      }
      fetchData();
    },
    [],
  );

  return (
    <div className="app">
      {true ? (
        <Fragment>

          <main className="content--container">
            <List values={foods} />
          </main>
        </Fragment>
      )
        : (<Login />)
      }
    </div>
  );
}

export default Main;
