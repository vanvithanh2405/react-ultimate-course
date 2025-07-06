import React from 'react'
import { Navigate } from 'react-router';

function AuthRoute({ children }: React.PropsWithChildren) {
  const access_token = window.localStorage.getItem('access_token');

  if (!access_token) {
    return <Navigate to="/login" />
  }
  
  console.log("AuthRoute render: ", access_token)
  return (
    <div>{children}</div>
  )
}

export default AuthRoute