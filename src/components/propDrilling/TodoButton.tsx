interface TodoButtonProps {
  id: number,
  deleteItem: (todoId: number) => void;
}

function TodoButton({ id, deleteItem }: TodoButtonProps) {
  return (
    <button onClick={() => deleteItem(id)}>Delete</button>
  )
}

export default TodoButton