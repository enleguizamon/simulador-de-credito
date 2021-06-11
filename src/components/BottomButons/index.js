import Button from "react-bootstrap/Button";
import "./style.css";

function BottomButons() {
  //cliks de los botones de abajo

  function firstHandleClick() {
    console.log("Hiciste click en OBTENE CREDITO");
  }

  function secondHandleClick() {
    console.log("Hiciste click en VER DETALLE DE LA CUOTA");
  }

  return (
    <div className="butonContainer">
      <Button
        onClick={firstHandleClick}
        variant="success"
        className="firstButon"
      >
        OBTENÉ CRÉDITO
      </Button>
      <Button
        onClick={secondHandleClick}
        variant="info"
        className="secondButon"
      >
        VER DETALLE DE CUOTAS
      </Button>
    </div>
  );
}

export default BottomButons;
