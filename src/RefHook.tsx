import React from 'react';
import Dialog from './components/Dialog';

/*
- There are a few good use cases for refs:
  Managing focus, text selection, or media playback.
  Triggering imperative animations.
  Integrating with third-party DOM libraries.
  skip run side effect for first render
- Refs provide a way to access DOM nodes or React elements created in the render method.
- Unlike with state, updating a ref does not re-render your component.
- Save value of ref every component re-render (not reset value)
*/

const LikeButton = React.forwardRef((props, ref) => {
  const _refLike = React.useRef<any>(null);

  React.useImperativeHandle(ref, () => {
    return {
      updateBgColor() {
        _refLike.current.setAttribute('style', 'background-color: red')
      },
      getNameInput() {
        return 'like button'
      },
      selection() {
        _refLike.current.select()
      }
    }
  })

  return (
    <button ref={_refLike} id="likeButton" type="button">Like Button</button>
  )
})

function RefHook() {
  const [timestamp, setTimestamp] = React.useState(Date.now()); 
  const fullNameRef = React.useRef<any>(null);
  const countRef = React.useRef<number>(0);
  const isSkipFirstRender = React.useRef<boolean>(true);
  const likeButtonRef = React.useRef<any>(null);
  const dialogRef = React.useRef<any>(null);


  function submit() {
 
    fullNameRef.current.focus();
    fullNameRef.current.select();
    // countRef.current = countRef.current + 1; // 1
    // console.log('countRef.current', countRef.current)
    isSkipFirstRender.current = false;

    likeButtonRef.current.updateBgColor();
    dialogRef.current.exposeToggleModal();
    const textDialog = dialogRef.current.getText();

    console.log('submit: ', {
      fullNameRef: fullNameRef.current.value,
      likeButtonRef,
      dialogRef,
      textDialog
    })
    setTimestamp(Date.now());
  }

  // console.log('RefHook: ', {
  //   countRef: countRef.current
  // })

  React.useEffect(() => {
    // call background api -> when user interactive web
    // call api -> http get /api/background
    if (isSkipFirstRender.current) return;

    console.log('run effect background api')
    fetch('https://jsonplaceholder.typicode.com/todos?_page=1&_limit=3')
      .then(res => res.json())
  }, [timestamp])

  console.log('RefHook render')
  return (
    <div>
      <h1>RefHook</h1>
      Count: {countRef.current} <br />

      Full Name: <input type="text" defaultValue="Nguyen Nhat Truong" ref={fullNameRef}  /> <br />
      <button type="button" onClick={submit}>Submit</button> <br />
      <LikeButton ref={likeButtonRef} />

      <h6>Demo useReft with Modal</h6>
      <Dialog ref={dialogRef} />
    </div>
  )
}

export default RefHook