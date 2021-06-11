import Slider from "rc-slider";
import "rc-slider/assets/index.css";

//componente para plazo
function Installment(props) {
  //min y max los uso para configurar el slider y plazo viene del estado para 
  //renderizarlo en el input y en el slider
  const { min, max, plazo } = props;

  //configuracion del rc-slider
  const style = {
    color: "rgb(231, 231, 231)",
  };
  const marks = {};
  marks[min] = {
    style,
    label: 3,
  };
  marks[max] = {
    style,
    label: 24,
  };

  //manda el valor del input al padre
  function handleInput(e) {
    props.handleCallbackPlazo(e.target.value);
  }

  //manda el valor del slider al padre
  function handleSlider(value) {
    props.handleCallbackPlazo(value);
  }

  return (
    <div className="wrapper">
      <div className="montoContainer secondMontoContainer">
        <h4 className="amount">PLAZO</h4>
        <input
          onChange={handleInput}
          type="number"
          min={min}
          max={max}
          className="input"
          value={plazo}
        />
      </div>
      <div className="sliderContainer">
        <Slider
          onChange={handleSlider}
          marks={marks}
          min={min}
          max={max}
          value={plazo}
        />
      </div>
    </div>
  );
}

export default Installment;
