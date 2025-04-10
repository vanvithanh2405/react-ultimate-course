import React from 'react'


interface ButtonProps {
    isLogin: boolean
    handleChange: () => void
}
function Button({
    isLogin,
    handleChange
}: ButtonProps) {
  return (
    <div>
        <button onClick={handleChange}>{isLogin ? 'Logout' : 'Login'}</button>
    </div>
  )
}

export default Button
