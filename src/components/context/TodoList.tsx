import React from 'react'
import { useTodoContext } from '../../contexts/TodoContext'

function TodoList() {
  const { todos } = useTodoContext();

  console.log('todoList: ', todos)

  return (
     <ul>
      {todos.map(todo => (
        <li key={todo.id}>Title: {todo.title}</li>
      ))}
    </ul>
  )
}

export default TodoList