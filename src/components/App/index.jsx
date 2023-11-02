import { useState } from "react";

import { useLocalStorage } from "./useLocalStorage";
import { AppUI } from "./AppUI";


function App() {
 
  const [todos, saveItemStorage] = useLocalStorage('TODO_V1', []);
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter(todo => Boolean(todo.completed) ).length;
  const totalTodos = todos.length;

  const searchedTodo = todos.filter(todo => (
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  ));

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text );
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveItemStorage(newTodos);
  }  
  
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text );
    newTodos.splice(todoIndex, 1);
    saveItemStorage(newTodos);
  }

  
  return (
      <AppUI
        completedTodos={completedTodos}
        totalTodos={totalTodos}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchedTodo={searchedTodo}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
  );
}

export default App;
