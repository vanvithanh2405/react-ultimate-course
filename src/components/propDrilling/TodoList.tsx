import React from 'react'
import TodoItem from './TodoItem'
import { ITodoItem } from '../../PropDrilling-LiftingStateUp'

interface TodoListProps {
  todos: ITodoItem[]
}

function TodoList({ todos }: TodoListProps) {
  return (
    <ul>
      {todos.map(todoItem => (
        <TodoItem key={todoItem.id} todoItem={todoItem} />
      ))}
    </ul>
  )
}

export default TodoList