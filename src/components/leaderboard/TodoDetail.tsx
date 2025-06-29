import React from 'react'
import { useParams } from 'react-router'

function TodoDetail() {
  const [todo, setTodo] = React.useState<any>(null);
  const params = useParams();
  const todoId = params?.todoId;

  React.useEffect(() => {
    if (!todoId) return;

    async function fetchTodo() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
      const data = await response.json();
      setTodo(data);
    }
    fetchTodo();
  }, [todoId])

  return (
    <div>
      <div>TodoDetail</div>
      Title: {todo?.title}
    </div>
  )
}

export default TodoDetail