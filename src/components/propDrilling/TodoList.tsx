import TodoItem from './TodoItem'
import { ITodoItem } from '../../PropDrilling-LiftingStateUp'

interface TodoListProps {
  todos: ITodoItem[],
  deleteItem: (todoId: number) => void;
}

function TodoList({ todos, deleteItem }: TodoListProps) {
  return (
    <ul>
      {todos.map(todoItem => (
        <TodoItem key={todoItem.id} todoItem={todoItem} deleteItem={deleteItem} />
      ))}
    </ul>
  )
}

export default TodoList