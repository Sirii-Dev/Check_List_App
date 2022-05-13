import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  //creando la funcion a ejecutar
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  };

  return (
      <button
        className="CreateTodoButton"
        //mandando llamar la funcion
        onClick = {onClickButton}
      >
        +
      </button>
  );
}


export { CreateTodoButton };
