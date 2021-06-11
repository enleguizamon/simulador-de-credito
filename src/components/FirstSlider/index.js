import "./style.css";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";

function FirstSlider() {
  const style = {
    color: "white",
  };

  const marks = {
    5000: {
      style,
      label: "$5.000",
    },
    50000: {
      style,
      label: "$50.000",
    },
  };

  function handleInput(e) {
  //   const inputValue = e.target.value;
  //   setFirstInput(inputValue);
  }

  function handleSlider(value) {
  //   //const sliderValue = e;
  //   //console.log(value)
  //   //setSlider(value)
   }

  return (
    <div className="wrapper">
      <div className="montoContainer">
        <h4 className="amount">MONTO TOTAL</h4>
        <input
          type="number"
          min="5000"
          max="50000"
          className="input"
        />
      </div>
      <div className="sliderContainer">
        <Slider
          marks={marks}
          min={5000}
          max={50000}
        />
      </div>
    </div>
  );
}

export default FirstSlider;
