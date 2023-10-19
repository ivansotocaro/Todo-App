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
];

function App() {
  return (
    <>
      <TodoCounter 
        completed={16}
        total={25}
      />
      <TodoSearch />

      <TodoList>
        {
          defaultTodos.map(todo => (
             <TodoItem  
              key={ todo.text } 
              text={ todo.text }
              completed={ todo.completed }
             /> 
          ))
        }
      </TodoList>
      
      <CreateTodoButton />
    </>
  );
}

export default App;
