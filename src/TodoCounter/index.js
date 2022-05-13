import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

function TodoCounter(){
  const {totalTodos, completedTodos} = React.useContext(TodoContext)

  return (
    <nav className="TodoCounter">
        <h1 className="title">Check List App</h1>
        <h2 className="finished"> Has comletado {completedTodos} de {totalTodos} tareas</h2>
    </nav>
  );
}

export { TodoCounter };
