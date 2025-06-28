import React from 'react'
import TodoBoard from './components/leaderboard/TodoBoard';
import AlbumBoard from './components/leaderboard/AlbumBoard';
import PostBoard from './components/leaderboard/PostBoard';



function CustomHook() {
  const [tab, setTab] = React.useState('todo');

  function switchTab(nameTab: string) {
    console.log('switchTab', nameTab)
    setTab(nameTab)
  }

  return (
    <div>
      <h1>CustomHook</h1>
      <button 
        type="button" 
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" 
        onClick={() => switchTab('todo')}
      >
        Todo
      </button>
      <button 
        type="button" 
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" 
        onClick={() => switchTab('album')}
      >
        Album
      </button>
      <button 
        type="button" 
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" 
        onClick={() => switchTab('post')}
      >
        Post
      </button>
      <br />

      {tab === 'todo' && <TodoBoard />}
      {tab === 'album' && <AlbumBoard />}
      {tab === 'post' && <PostBoard />}
    </div>
  )
}

export default CustomHook