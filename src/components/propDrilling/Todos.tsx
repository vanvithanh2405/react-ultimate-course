import TodoList from './TodoList'
import { ITodoItem } from '../../PropDrilling-LiftingStateUp'

interface TodosProps {
  todos: ITodoItem[],
  deleteItem: (todoId: number) => void;
}

function Todos({ todos, deleteItem }: TodosProps) {
  return (
    <div>
      <TodoList todos={todos} deleteItem={deleteItem} />
    </div>
  )
}

export default Todos