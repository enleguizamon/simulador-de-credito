import "./style.css";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";

function FirstSlider(props) {
  //montos minimos, maximos totales y labels
  const minTotal = { value: 5000, label: "$5.000" };
  const maxTotal = { value: 50000, label: "$50.000" };

  //estado del input y slider
  //const [total, setTotal] = useState(minTotal.value);

  //configuracion del slider
  const style = {
    color: "white",
  };
  const marks = {};
  marks[minTotal.value] = {
    style,
    label: minTotal.label,
  };
  marks[maxTotal.value] = {
    style,
    label: maxTotal.label,
  };


  function handleInput(e) {
    props.handleCallback(e.target.value);
  }

  function handleSlider(value) {
    props.handleCallback(value);
  }


  return (
    <div className="wrapper">
      <div className="montoContainer">
        <h4 className="amount">MONTO TOTAL</h4>
        <input
          onChange={handleInput}
          type="number"
          min={minTotal.value}
          max={maxTotal.value}
          className="input"
          value={props.total}
        />
      </div>
      <div className="sliderContainer">
        <Slider
          onChange={handleSlider}
          marks={marks}
          min={minTotal.value}
          max={maxTotal.value}
          value={props.total}
        />
      </div>
    </div>
  );
}

export default FirstSlider;
