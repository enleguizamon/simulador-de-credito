import './App.css';
import React from 'react';
import FirstSlider from "./components/FirstSlider";
import SecondSlider from "./components/SecondSlider";
import BottomButons from "./components/BottomButons";

function App() {
  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Simulá tu crédito</h1>
        <FirstSlider/>
        <SecondSlider />
        <div className="feeContainer">
        <p className="fee">CUOTA FIJA POR MES</p>
        <p className="month">$algo</p>
        </div>
        <BottomButons />
      </div>
    </div>
  );
}

export default App;
