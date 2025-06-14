import React from 'react'

function Template1({ children }: React.PropsWithChildren) {
  return (
    <>
      <header>this is header template 1</header>
      {children}
    </>
  )
}

export default Template1