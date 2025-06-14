import TodoForm from './components/context/TodoForm'
import TodoList from './components/context/TodoList'

import Avatar from './assets/avatar.png';

function ContextAPI() {
  return (
    <div>
      <h1>Context API</h1>
      <img src={Avatar} />
      {/* <img src="/assets/avatar.png" /> */}
      <br />

      <div className='avatarUser'></div>

      <TodoForm />

      <TodoList />
     
    </div>
  )
}

export default ContextAPI