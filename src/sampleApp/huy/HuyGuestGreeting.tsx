import React from "react";
import UserGreeting from "./components/UserGreeting";
import GuestGreeting from "./components/GuestGreeting";

function HuyGuestGreeting() {
  const [isLogin, setIsLogin] = React.useState(false);

  function handleLogin() {
    setIsLogin((prevState) => !prevState);
  }

  return (
    <div>
      {isLogin ? <UserGreeting
      handleChange={handleLogin}
      text= {'Welcome to'}
      name={'huy'}
       /> : <GuestGreeting
      handleChange={handleLogin}
      text={'Please sign up'}
       />}
    </div>
  );
}

export default HuyGuestGreeting;
