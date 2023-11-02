// import react from "react";
import { TodoIcon } from './TodoIcon';

function DeleteIcon({ onDelete }){
    return [
        <TodoIcon
            type="delete"
            color="gray"
            key={"gray"}
            onClick={onDelete}
        />
    ];
}

export { DeleteIcon };