import React from "react"

// UI -> action -> update state -> UI new
// === shallow comparison

// first render -> component render with initial state -> xong 1 chu ky render

function initializeNumber() {
  return 5
}

interface Button1Props {
  order: number,
  number: number,
  updateNumber: () => void
}

function Button1({ number, updateNumber, order }: Button1Props) {
  
  return (
    <button type="button" onClick={updateNumber}>Button {order}: {number} </button>
  )
}

function StateHook() {
  // state
  const [number, setNumber] = React.useState(1);
  const [count, setCount] = React.useState(initializeNumber);
  const [user, setUser] = React.useState({
    fullName: 'tony'
  }); // memory B

  function updateNumber() {
    setNumber(prevState => prevState + 1)
    // count[1](count[0] + 1)
  }
  // actions
  function updateCount() {
    setCount(count + 1)
    // count[1](count[0] + 1)
  }

  // re-created function component re-render
  function updateFullName() {
    // user.fullName = 'Huy'; // don't work
    const newUser = {
      ...user, // copy all properties
      fullName: 'huy'
    }; // new memory 

    // batching state update
    setUser(newUser);
    // setCount(count + 1); // 5 + 1
    // setCount(count + 1); // 5 + 1
    // setCount(count + 1); // 5 + 1
    // setCount(count + 1); // 5 + 1

    // updater function / callback function (syntax arrow function)
    setCount((prevState) => {
      console.log('prevState', prevState)
      return prevState + 1;
    }); // 0 + 1
    setCount((prevState: number) => prevState + 1); // 1 + 1 = 2
    setCount((prevState: number) => prevState + 1); // 2 + 1 = 3
    setCount((prevState: number) => prevState + 1); // 3 + 1 = 4
  }

  // UI
  // console.log('count: ', {
  //   count,
  //   user
  // })
  return (
    <div>
      <h1>StateHook</h1>
      Count: {count} <br />
      Full Name: {user.fullName} <br />
      <button type="button" onClick={updateCount}>Update Count</button>
      <button type="button" onClick={updateFullName}>Update Full Name</button>

      <br />
      <h4>Share state between componnt</h4>
      <Button1 number={number} updateNumber={updateNumber} order={1} />
      <Button1 number={number} updateNumber={updateNumber} order={2} />
      <Button1 number={number} updateNumber={updateNumber} order={3} />
    </div>
  )
}

export default StateHook