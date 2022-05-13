import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';

function TodoShearch () {
   const { searchValue, setSearchValue } = React.useContext(TodoContext);

    //detectando el mensaje que se recibe en el input
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        
    //actualizando el estado
        setSearchValue(event.target.value);
    }
    
    return (
        <input 
            className="TodoSearch" 
            placeholder="Busca tu tarea" 
            value={searchValue}
            onChange={onSearchValueChange}
        /> 
    );
}

export { TodoShearch };