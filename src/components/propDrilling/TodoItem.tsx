import React from 'react'
import TodoLabel from './TodoLabel'
import TodoButton from './TodoButton'
import { ITodoItem } from '../../PropDrilling-LiftingStateUp'

interface TodoItemProps {
  todoItem: ITodoItem
}

function TodoItem({ todoItem }: TodoItemProps) {
  return (
    <li>
      <TodoLabel title={todoItem.title} /> <TodoButton />
    </li>
  )
}

export default TodoItem