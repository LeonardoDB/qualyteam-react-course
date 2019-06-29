import React, { Fragment, useState, useEffect } from "react";
import { Button } from "../../components/button";
import { useSignUpForm } from '../../components/useSignUpForm';

function Register(props) {

  const registerFood = () => {
    inputs.preparation = "123";

    const requestOption = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inputs)
    }

    async function fetchData() {
      const resp = await fetch("http://localhost:4000/food", requestOption);
      props.history.push('/')
    }
    fetchData();
  }
  
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(registerFood);
  return (
    <div className="register">
      <h1>Nova receita</h1>

      <div className="register--container">
        <form className="register--container--form">
          <div className="register--container--side">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input name="title" id="title" onChange={handleInputChange} value={inputs.title} />
            </div>
            <div className="form-group">
              <label htmlFor="image">Imagem (URL)</label>
              <input name="image" id="image" onChange={handleInputChange} value={inputs.image} />
            </div>
            <div className="form-group">
              <label htmlFor="ingredients">Ingredientes</label>
              <textarea name="ingredients" id="ingredients" onChange={handleInputChange} value={inputs.ingredients} />
            </div>
          </div>
          <div className="register--container--side">
            <div className="form-group">
              <label htmlFor="description">Descrição</label>
              <textarea name="description" id="description" onChange={handleInputChange} value={inputs.description} />
            </div>
          </div>
        </form>
        <Button onClick={handleSubmit}>Create</Button>
      </div>
    </div>
  );
}

export default Register;
