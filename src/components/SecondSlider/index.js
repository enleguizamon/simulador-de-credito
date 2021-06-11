import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

function SecondSlider() {
  const style = {
    color: "white",
  };

  const marks = {
    0: {
      style,
      label: 3,
    },
    100: {
      style,
      label: 24,
    },
  };

  return (
    <div className="wrapper">
      <div className="montoContainer secondMontoContainer">
        <h4 className="amount">PLAZO</h4>
        <input type="number" min="3" max="24" className="input" />
      </div>
      <div className="sliderContainer">
        <Slider marks={marks} />
      </div>
    </div>
  );
}

export default SecondSlider;