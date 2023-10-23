import { useState } from "react";

import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoSearch } from './components/Search/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import { CreateTodoButton } from './components/CreateButton/CreateTodoButton';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Cortar ctomate', completed: false },
  { text: 'Cortar ajo', completed: false },
  { text: 'Cortar Carne', completed: false },
  { text: 'superPoll', completed: true },
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);
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
    setTodos(newTodos);
  }  
  
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={ searchValue } setSearchValue={ setSearchValue } />

      <TodoList>
        {
          searchedTodo.map(todo => (
             <TodoItem  
              key={ todo.text } 
              text={ todo.text }
              completed={ todo.completed }
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
             /> 
          ))
        }
      </TodoList>
      
      <CreateTodoButton />
    </>
  );
}

export default App;
