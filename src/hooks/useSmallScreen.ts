/*
  - custom hook is a function to separate code logic with render UI 
  - reuse code logic

 - function use hooks of react
 - name function is starting with "use" prefix
*/

import React from "react";

export const useSmallScreen = () => {
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);

  React.useEffect(() => {
    function checkSmallScreen() {
      setIsSmallScreen(window.innerWidth < 750)
    }
    window.addEventListener('resize', checkSmallScreen);

    return () => {
      window.removeEventListener('resize', checkSmallScreen)
    }
  }, [])

  return {
    isSmallScreen
  }
}