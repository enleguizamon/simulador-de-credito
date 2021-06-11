import "./App.css";
import React, { useState } from "react";
import TotalAmount from "./components/TotalAmount";
import Installment from "./components/Installment";
import BottomButons from "./components/BottomButons";

function App() {
  //estado para monto total
  const [total, setTotal] = useState(5000);
  //estado para plazo
  const [plazo, setPlazo] = useState(3);

  //minimos y maximos para configurar sliders, los paso por props
  const totalSlider = {
    min: 5000,
    max: 50000,
  };
  const plazoSlider = {
    min: 3,
    max: 24,
  };

  //llega el valor del input o slider en total
  function handleCallbackTotal(total) {
    setTotal(total);
  }

  //llega el valor del input o slider en plazo
  function handleCallbackPlazo(value) {
    setPlazo(value);
  }

  //cuenta para calcular la cuota fija por mes
  function calculateInstallmentFee() {
    return ((total * 1.9798) / plazo).toFixed(2);
  }

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Simulá tu crédito</h1>
        <TotalAmount
          handleCallbackTotal={handleCallbackTotal}
          total={total}
          min={totalSlider.min}
          max={totalSlider.max}
        />
        <Installment
          handleCallbackPlazo={handleCallbackPlazo}
          plazo={plazo}
          min={plazoSlider.min}
          max={plazoSlider.max}
        />
        <div className="feeContainer">
          <p className="fee">CUOTA FIJA POR MES</p>
          {(total >= 5000 && total <= 50000) && (plazo >= 3 && plazo <= 24) ? (
            <p className="month">$ {calculateInstallmentFee()}</p>
          ) : (
            <p className="outOfLimit">
              Coloca un monto o plazo que se encuentre en el rango para calcular
              la cuota
            </p>
          )}
        </div>
        <BottomButons />
      </div>
    </div>
  );
}

export default App;
