import React from "react"

// UI -> action -> update state -> UI new
function StateHook() {
  // state
  const [count, setCount] = React.useState(0);
  const [user, setUser] = React.useState({
    fullName: 'tony'
  }); // memory B

  // actions
  function updateCount() {
    setCount(count + 1)
    // count[1](count[0] + 1)
  }

  function updateFullName() {
    // user.fullName = 'Huy'; // don't work
    const newUser = {
      ...user, // copy all properties
      fullName: 'huy'
    }; // new memory 
    setUser(newUser)
  }

  // UI
  console.log('count: ', {
    count,
    user
  })
  return (
    <div>
      <h1>StateHook</h1>
      Count: {count} <br />
      Full Name: {user.fullName} <br />
      <button type="button" onClick={updateCount}>Update Count</button>
      <button type="button" onClick={updateFullName}>Update Full Name</button>
    </div>
  )
}

export default StateHook