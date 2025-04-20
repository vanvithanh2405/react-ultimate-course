import TodoLabel from './TodoLabel'
import TodoButton from './TodoButton'
import { ITodoItem } from '../../PropDrilling-LiftingStateUp'

interface TodoItemProps {
  todoItem: ITodoItem,
  deleteItem: (todoId: number) => void;
}

function TodoItem({ todoItem, deleteItem }: TodoItemProps) {
  return (
    <li>
      <TodoLabel title={todoItem.title} /> 
      <TodoButton id={todoItem.id} deleteItem={deleteItem} />
    </li>
  )
}

export default TodoItem