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
  return (
    <div>
      <h1>PropDrillingLiftingStateUp</h1>

      <div>
        <h3>Todo List</h3>
        <Todos todos={todos} />
      </div>
    </div>
  )
}

export default PropDrillingLiftingStateUp;