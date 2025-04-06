import React from 'react';

/*
Pure Component/Presentation Component/Stateless component
- just only present the props.
- don’t need a state.
- reuse code. 

Stateful/Container component
- Contains logic code in component.
- Dependent on state for rendering, 
- such as fetching data.
- Elements that are interactive on page.
- Elements that accept user input.

How many ways to component  re-render?
- State changes
- Props changes
- Parent component re-render

Key changes
using it when you use the 3rd libraries that it doesn’t implement the shouldComponentUpdate cycle.
Ex: https://github.com/nhattruongniit/react-idm-chart-carbon.


*/

interface SnakeTypeProps {
  name: string
}

function SnakeType({ name }: SnakeTypeProps) {
  return (
    <div>
      Name Snake: {name}
    </div>
  )
}

interface StateFulComponentProps {
  timer?: number
}

function StateFulComponent({ timer = 1 }: StateFulComponentProps) {
  const [count, setCount] = React.useState(1);

  // user click -> () => {} -> updateCount()
  // re-create function every component re-render - memory B
  function updateCount(number: number) {
    console.log('updateCount')
    setCount(prevState => prevState + timer + number)
  }

  // curry function
  // user click -> updateCount()
  // const updateCount = (number: number) => () => {
  //   console.log('updateCount')
  //   setCount(prevState => prevState + timer + number)
  // }

  console.log('StateFulComponent')
  return (
    <div>
      StatefulComponent: {count} <br />
      <button 
        type="button" 
        onClick={() => {
          updateCount(10)
        }}
        // onClick={updateCount(10)}
      >
        Update Count
      </button>
    </div>
  )
}

function Component() {
  const [timer, setTimer] = React.useState(2);

  return (
    <div>
      <h1>Component</h1>
      Timer: {timer}
      <button type="button" onClick={() => setTimer(prevState => prevState + 1)}>
        Update Timer
      </button>

      <h3>State Less Component</h3>
      <SnakeType name="tony" />
      <SnakeType name="huy" />
      <SnakeType name="thanh" />

      <h3>Stateful Component</h3>
      <StateFulComponent /> <br />
      <StateFulComponent timer={timer} /> <br />
   
    </div>
  )
}

export default Component