import React from 'react';

const TodoContext = React.createContext<any>({});

export const TodoProvider = ({ children }: React.PropsWithChildren) => {
  const [todos, setTodos] = React.useState<any>([]);

  // TODO: add todo
  function addTodo(title: string) {
    const newTodo = {
      id: Date.now(),
      title
    }
    setTodos((prevState: any) => [...prevState, newTodo])
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
