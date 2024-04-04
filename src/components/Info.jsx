import React from "react";

function Info({ data, handleGoBack }) {
  return (
    <div className="clicked-meal-wrapper">
      <h4>{data.strMeal}</h4>
      <hr />
      <p>Instructions:</p>
      <p>{data.strInstructions}</p>
      <br />
      <br />
      <hr />
      <button className="btn btn-primary" onClick={handleGoBack}>
        Go back
      </button>
    </div>
  );
}

export default Info;
