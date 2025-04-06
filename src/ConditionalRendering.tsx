import React from 'react'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'

/* &&
'tony' && 'huy' -> render 
'tony' && 'huy' && 'thanh' -> render ?
'tony' && ' ' -> render ?
' ' && 'tony' -> render ?

[1,2,3,4,5]: number[]
['abc', '1231', 'adsa']: string[]

// thanh


// ghuy
*/


interface TodoItem {
  id: number,
  title: string
}

function ConditionalRendering() {
  let button = null;
  const [count, setCount] = React.useState(1);
  const [todo, setTodo] = React.useState<TodoItem[] | null>(null);

  if (count > 1) {
    button = <LogoutButton />
  } else {
    button = <LoginButton />
  }

  function renderListButtonLogout() {
    return (
      <>
        <h4>renderListButtonLogout</h4>
        <LogoutButton />
        <LogoutButton />
        <LogoutButton />
      </>
    )
  }

  function renderListButtonLogin() {
    return (
      <>
        <h4>renderListButtonLogin</h4>
        <LoginButton />
      </>
    )
  }


  function updateCount() {
    setCount(prevState => prevState + 1)
  }

  function addTodo() {
    const newTodo = {
      id: Date.now(),
      title: 'react' + Date.now(),
    }
    setTodo((prevState) => [...(prevState || []), newTodo])
  }
  
  return (
    <div>
      <h1>ConditionalRendering</h1> <br />
      &&: {count > 3 && (
        <>
          Count Timer: {count}
        </>
      )}
      <br />
      ||: {count > 3 || (
        <>Demo ||</>
      )}
      <br />
      Todo List: {(Array.isArray(todo) && todo.length > 0) ? (
        <>
          has values
        </>
      ) : (
        <>Please add todo</>
      )}

      <br />
      Demo Element variable: {button}

      <br />
      Demo Render Function variable:
      {count > 3 ? renderListButtonLogout() : renderListButtonLogin()}

      <br />
      <button 
        type="button" 
        onClick={updateCount}
      >
        Update Count
      </button>
      <button 
        type="button" 
        onClick={addTodo}
      >
        Add Todo
      </button>
    </div>
  )
}

export default ConditionalRendering