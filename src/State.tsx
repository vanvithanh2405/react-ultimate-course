import React from 'react'

/*
first render -> component render UI with initial state
next render (re-render) -> update new state  -> component re-render UI with new state

component just re-render when state changes
*/

function State() {
  // state
  const [count, setCount] = React.useState(1);
  const [form, setForm] = React.useState({
    firstName: '',
    lastName: ''
  }); // memory B

  // action
  function updateCount() {
    setCount(prevState => prevState + 1); // 1 + 1 = 2
    // setCount(1); // shallow equal
  }

  function updateForm() {
    // form['firstName'] = 'React' + Date.now(); // memory A
    // const newForm = {
    //   ...form, // copy all properties
    //   firstName: 'React'
    // } // memory C
    // setForm(newForm) // memory C

    // updater function/callback function useState (syntax arrow function)
    setForm((prevState) => {
      console.log('prevState: ', prevState)
      return {
        ...prevState, // copy all properties
        firstName: 'React' + Date.now()
      }
    })
  }

  console.log("State render", {
    count,
    form
  })
  // UI (jsx)
  return (
    <div>
      <h1>State</h1>
      Count: {count} <br />
      First Name: {form.firstName} <br />
      Last Name: {form.lastName} <br />
      <button type="button" onClick={updateCount}>
        Update Count
      </button>
      <button type="button" onClick={updateForm}>
        Update Form
      </button>
    </div>
  )
}

export default State