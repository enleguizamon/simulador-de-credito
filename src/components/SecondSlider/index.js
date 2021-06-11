import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";

function SecondSlider() {
  //montos minimos, maximos totales y labels
  const minPlazo = { value: 3, label: 3 };
  const maxPlazo = { value: 24, label: 24 };

  //estado del input y slider
  const [plazo, setPlazo] = useState(minPlazo.value);

  //configuracion del slider
  const style = {
    color: "white",
  };
  const marks = {};
  marks[minPlazo.value] = {
    style,
    label: minPlazo.label,
  };
  marks[maxPlazo.value] = {
    style,
    label: maxPlazo.label,
  };

  //cambia el valor de monto Plazo dependiendo del input
  function handleInput(e) {
    const inputValue = e.target.value;
    setPlazo(inputValue);
  }

  //cambia el valor de monto Plazo dependiendo del slider
  function handleSlider(value) {
    setPlazo(value);
  }

  return (
    <div className="wrapper">
      <div className="montoContainer secondMontoContainer">
        <h4 className="amount">PLAZO</h4>
        <input onChange={handleInput}
          type="number"
          min={minPlazo.value}
          max={maxPlazo.value}
          className="input"
          value={plazo} />
      </div>
      <div className="sliderContainer">
        <Slider onChange={handleSlider}
          marks={marks}
          min={minPlazo.value}
          max={maxPlazo.value}
          value={plazo} />
      </div>
    </div>
  );
}

export default SecondSlider;
