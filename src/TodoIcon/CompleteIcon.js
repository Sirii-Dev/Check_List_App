import React from "react";
import { TodoIcon } from './';

function CompleteIcon ( {completed, onComplete }) {
    return (
        <TodoIcon
            type = "check"
            color= { completed ? '#154750' : 'white' }
            onClick={ onComplete }
        />
    );
}

export { CompleteIcon };