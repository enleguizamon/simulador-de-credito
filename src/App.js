import './App.css';
import React, { useState } from 'react';
import FirstSlider from "./components/FirstSlider";
import SecondSlider from "./components/SecondSlider";
import BottomButons from "./components/BottomButons";

function App(props) {
  const [total, setTotal] = useState(5000);

  const [cuota, setCuota] = useState(null);

function handleCallback(total) {
  setTotal(total);
}

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Simulá tu crédito</h1>
        <FirstSlider handleCallback={handleCallback} total={total} />
        <SecondSlider />
        <div className="feeContainer">
        <p className="fee">CUOTA FIJA POR MES</p>
        <p className="month">$ {total}</p>
        </div>
        <BottomButons />
      </div>
    </div>
  );
}

export default App;
