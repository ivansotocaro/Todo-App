import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../Search/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateButton/CreateTodoButton';

function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodo,
    completeTodo,
    deleteTodo
}){
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

export { AppUI };