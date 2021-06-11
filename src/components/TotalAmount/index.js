import "./style.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

//componente para total
function TotalAmount(props) {
  //min y max los uso para configurar el slider y total viene del estado para 
  //renderizarlo en el input y en el slider
  const { min, max, total } = props;

  //configuracion del rc-slider
  const style = {
    color: "rgb(231, 231, 231)",
  };
  const marks = {};
  marks[min] = {
    style,
    label: "$5.000",
  };
  marks[max] = {
    style,
    label: "$50.000",
  };

  //manda el valor del input al padre
  function handleInput(e) {
    props.handleCallbackTotal(e.target.value);
  }

  //manda el valor del slider al padre
  function handleSlider(value) {
    props.handleCallbackTotal(value);
  }

  return (
    <div className="wrapper">
      <div className="montoContainer">
        <h4 className="amount">MONTO TOTAL</h4>
        <input
          onChange={handleInput}
          type="number"
          min={min}
          max={max}
          className="input"
          value={total}
        />
      </div>
      <div className="sliderContainer">
        <Slider
          onChange={handleSlider}
          marks={marks}
          min={min}
          max={max}
          value={total}
        />
      </div>
    </div>
  );
}

export default TotalAmount;
