import React from 'react'
import Todos from './components/propDrilling/Todos';
import { useSmallScreen } from './hooks/useSmallScreen';

export interface ITodoItem {
  id: number,
  title: string
}

function PropDrillingLiftingStateUp() {
  const { isSmallScreen } = useSmallScreen();
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      title: 'react'
    },
    {
      id: 2,
      title: 'angular'
    }
  ])

  function deleteItem(todoId: number) {
    const newTodos = [...todos].filter(todo => todo.id !== todoId);
    setTodos(newTodos);
  }

  return (
    <div>
      <h1>PropDrillingLiftingStateUp</h1>

      <div>
        Window is small screen: {isSmallScreen ? 'Yes' : 'No'}
      </div>

      <div>
        <h3>Todo List</h3>
        <Todos todos={todos} deleteItem={deleteItem} />
      </div>
    </div>
  )
}

export default PropDrillingLiftingStateUp;