import React from "react";

const Buttons = (props) => {
  return (
    <div>
      <button onClick={props.onclickF}>Fahrenheit'e dönüştür</button>
      <button onClick={props.onclickK}>Kelvin'e dönüştür</button>
    </div>
  );
};

export default Buttons;
