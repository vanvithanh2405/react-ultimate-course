import React from 'react';
import clsx from 'clsx';

function CSS() {
  const [isAuth, setIsAuth] = React.useState(true);
  const [age] = React.useState(11);
  const divStyle = { 
    fontSize: 14, 
    fontWeight: 'bold', 
    textDecoration: 'underline' 
  }

  function toggleAuth() {
    setIsAuth(!isAuth); // !true -> false, !fakse -> true
  }

  return (
    <div>
      <h1>CSS</h1>
      <div 
        style={divStyle}
        className="text-color"
      >
        this is css
      </div>
      <div 
        // className={`
        //   box box-sm 
        //   ${isAuth ? 'box-red' : '' } 
        //   ${age > 10 ? 'adult' : 'children' }
        // `}
        className={clsx(
          'box box-sm',
          isAuth ? 'box-red' : '',
          age > 10 ? 'adult' : 'children'
        )}
      >
        Box
      </div>

      <button type="button" onClick={toggleAuth}>Toggle Auth</button>
    </div>
  )
}

export default CSS