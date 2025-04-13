import TodoList from './TodoList'
import { ITodoItem } from '../../PropDrilling-LiftingStateUp'

interface TodosProps {
  todos: ITodoItem[]
}

function Todos({ todos }: TodosProps) {
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  )
}

export default Todos