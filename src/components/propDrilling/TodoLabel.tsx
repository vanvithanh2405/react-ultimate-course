interface TodoLabelProps {
  title: string
}

function TodoLabel({ title }: TodoLabelProps) {
  return (
    <span>Title: {title}</span>
  )
}

export default TodoLabel