import React from 'react'

/*
controller/uncontroller component/input -> html input tag

uncontroller component/input:
- Uncontrolled inputs are like traditional HTML form inputs:
- Don’t cause re-render component.
- The input value is not being managed by React.
- Get value input with useRef
*/

function Form() {
  const [lastName, setLastName] = React.useState('');
  const firstNameRef = React.useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('form: ', {
      firstName: firstNameRef?.current?.value,
      lastName
    })
  }

  console.log('Form render', {
    firstNameRef,
    lastName
  })
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        First Name: <input ref={firstNameRef} defaultValue="tony" type="text" />
        Last Name <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
        <button type="submit">Submit</button>
      </form>

    </div>
  )
}

export default Form