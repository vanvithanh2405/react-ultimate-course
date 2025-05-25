import React from 'react';

/*
first render -> render UI with initial state (1 chu ky render)
re-render (next render) -> render UI with new state (1 chu ky render)
*/

function ListKey() {
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      title: 'tony'
    },
    {
      id: 2,
      title: 'huy'
    }
  ]);
  // const todoMapped = todos.map((item, index) => ({
  //   ...item,
  //   id: item.title + index
  // }))
  // const renderTodo = todo.map(item => {
  //   return (
  //     <div key={item.id}>
  //       Title: {item.title}
  //     </div>
  //   )
  // });

  function addTodo() {
    const newTodo = {
      id: Date.now(),
      title: 'Title' + Date.now(),
    }
    const newTodos = [...todos, newTodo];
    console.log('addTodo: ', newTodos)
    setTodos(newTodos)
  }

  // console.log('todos', todos)


  return (
    <div>
      <h1>ListKey</h1>
      {/* {renderTodo} */}
      {todos.map(item => {
        return (
          <div key={item.id}>
            Title: {item.title}
          </div>
        )
      })}
      <button type="button" onClick={addTodo}>Add todo</button>
    </div>
  )
}

export default ListKey

