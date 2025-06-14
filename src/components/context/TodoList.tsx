import { useTodoContext } from '../../contexts/TodoContext'

function TodoList() {
  const { todos } = useTodoContext();

  console.log('todoList: ', todos)

  return (
     <ul>
      {todos.map((todo: any) => (
        <li key={todo.id}>Title: {todo.title}</li>
      ))}
    </ul>
  )
}

export default TodoList