import React from 'react'
import Todos from './components/propDrilling/Todos';

export interface ITodoItem {
  id: number,
  title: string
}

function PropDrillingLiftingStateUp() {
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
        <h3>Todo List</h3>
        <Todos todos={todos} deleteItem={deleteItem} />
      </div>
    </div>
  )
}

export default PropDrillingLiftingStateUp;