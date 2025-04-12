import React from 'react'
import Button from './Button'

interface GuestGreetingProps {
    handleChange: () => void
    text: string,
    isLogin: boolean
}

function GuestGreeting({
    handleChange,
    text,
    isLogin
}:GuestGreetingProps) {
  return (
    <div>
        <h1>{text}</h1>
        <Button 
            handleChange={handleChange} 
            isLogin={isLogin}
        />
    </div>
  )
}

export default GuestGreeting
