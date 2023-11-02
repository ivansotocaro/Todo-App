import "./TodoCounter.css";

const styleExcelent = {
  color: "green"
}

function TodoCounter({ total, completed }) {
    return (
      <h1 className="TodoCounter">
        {
          (completed === total && total != 0) ? (
            <p style={styleExcelent}>
              <span> Felicitaciones, completaste todas las tareas</span>
            </p>
          ) : (
            <p> Has completado
              <span> {completed} </span>
               de 
              <span> {total} </span> 
               TODOS
            </p>
          )
        }
        
      </h1>
    );
}


export { TodoCounter }; 