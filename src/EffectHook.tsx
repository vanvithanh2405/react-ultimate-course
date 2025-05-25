import React, { useEffect, useLayoutEffect } from 'react'
import EffectHookDemoUser from './EffectHookDemoUser';


/* component has many useEffect
1. component render with initial state (first render)
2. run useEffect -> call api -> set state
3. component re-render with new state (next render)

clean up function useEffect
- Clean up always run before side effect (code logic useEffect)
- Clean up runs after the component re-render or unmounts.
- Not run for component first render
*/

interface IUser {
  email: string,
  role: string
}

function EffectHook() {
  const [count] = React.useState(0);
  const [user, setUser] = React.useState<IUser | null>(null);

  useEffect(() => {
    console.log('useEffect no dependency');
    return () => {
      console.log('clean up useEffect no dependency');
    }
  }); // always run every component render (first, next render)

  useEffect(() => {
    console.log('useEffect with dependency');
    return () => {
      console.log('clean up useEffect with dependency');
    }
  }, [count, user]); // run for component first render, only re-run when dependency change

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch('https://tony-auth-express-vdee-6j0s-fhovok9bu.vercel.app/api/user/67c28b62e28bda8b26fd3f9a');
        const data = await response.json();
        setUser(data.data)
      } catch (err) {
        console.log('fetch user error: ', err)
      }
    }
    fetchUser();
    console.log("useEffect with empty dependency");
    return () => {
      console.log('clean up useEffect empty dependency');
    }
  }, []); // only run once time for component first render

  useLayoutEffect(() => {
    console.log('useLayoutEffect no dependency');
    return () => {
      console.log('clean up useLayoutEffect no dependency');
    }
  }); // always run every component render (first, next render)

  useLayoutEffect(() => {
    console.log('useLayoutEffect with dependency');
    return () => {
      console.log('clean up useLayoutEffect with dependency');
    }
  }, [count, user]); // run for component first render, only re-run when dependency change

  useLayoutEffect(() => {
    console.log("useLayoutEffect with empty dependency");
    return () => {
      console.log('clean up useLayoutEffect empty dependency');
    }
  }, []); // only run once time for component first render
  

  // render UI
  console.log('------------------EffectHook--------------------')
  console.log("EffectHook mounted", user)
  return (
    <div>
      <h1>EffectHook</h1>
      {user && (
        <div>
          Email: {user.email} <br />
          Role: {user.role} <br />
        </div>
      )}

      <EffectHookDemoUser />

    </div>
  )
}

export default EffectHook