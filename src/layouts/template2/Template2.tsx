import React from 'react'

function Template2({ children }: React.PropsWithChildren) {
  return (
    <>
      {children}
      <footer>this is header template </footer>
    </>
  )
}

export default Template2