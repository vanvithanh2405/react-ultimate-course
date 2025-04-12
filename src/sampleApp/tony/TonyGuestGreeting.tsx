import React from 'react'
// import GuestGreeting from './components/GuestGreeting';
import UserGreeting from './components/UserGreeting';

function TonyGuestGreeting() {
  const [isAuth, setIsAuth] = React.useState(false);

  function handleLogin() {
    setIsAuth(prevState => !prevState); // !false = true; !true = false
  }

  return (
    <div>
      <h1>TonyGuestGreeting</h1>
      <UserGreeting 
        text={isAuth ? 'Welcome to tony' : 'Please Login'}
        buttonText={isAuth ? 'Logout' : 'Login'}
        handleLogin={handleLogin}
      />
    </div>
  )
}

export default TonyGuestGreeting