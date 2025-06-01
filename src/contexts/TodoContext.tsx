import React from 'react';

const TodoContext = React.createContext({});

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = React.useState([]);


  // TODO: add todo
  function addTodo(title: string) {
    const newTodo = {
      id: Date.now(),
      title
    }
    setTodos(prevState => [...prevState, newTodo])
  }

  // console.log('title: ', todos)

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
};

export const useTodoContext = () => React.useContext(TodoContext);
