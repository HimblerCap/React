import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from './CreateTodoButton';
//import './App.css'

const defaulTodos= [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Completar el curso de React', completed: false },
  { text: 'Trabajar para Marvik', completed: false },
]


function App() {
  const [todos, setTodos] = React.useState(defaulTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
    });
  }

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    // todos[todoIndex] = {
    //   text: todos[todoIndex].text,
    //   completed: true,
    // };
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      < TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
          {searchedTodos.map( todo => (
          <TodoItem 
            key={todo.text} 
            text={ todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
            onDelete ={() => deleteTodo(todo.text)}
            />
          ))}
          
      </TodoList>
      <CreateTodoButton /> 
      </React.Fragment>
  
  );
}

export default App;
