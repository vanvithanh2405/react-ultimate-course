/*
first render: show UI with initialize state
re-render: show UI with new state updated

client side rendering: UI, code logic all render phía CLIENT
 -  poor for SEO
server side render: server render static html with data.
  - good for SEO
library: you come with
framework: come with me

your project: (framework)
- react
- react router dom (navigate page)
- fetch or axios
- date picker react
- full calendar react
- react slick
*/

import Component from './Component';
import JSX from './JSX';
import Props from './Props';
import State from './State';
import ConditionalRendering from './ConditionalRendering';
import TonyGuestGreeting from './sampleApp/tony/TonyGuestGreeting';
import ThanhGuestGreeting from './sampleApp/thanh/ThanhGuestGreeting';
import HuyGuestGreeting from './sampleApp/huy/HuyGuestGreeting';
import ListKey from './ListKey';
import CSS from './CSS';
import PropDrillingLiftingStateUp from './PropDrilling-LiftingStateUp';

function App() {

  return (
    <>
      <JSX />

      <Props />

      <br /><br />
      <State />

      <br />
      <Component />

      <br />
      <ConditionalRendering />

      <br />
      <TonyGuestGreeting />

      
      <br />
      <ThanhGuestGreeting />
      <HuyGuestGreeting/>
      <br />
      <ListKey />

      <br />
      <CSS />

      <br />
      <PropDrillingLiftingStateUp />

      <br />
      <br />
      <br />
      <br />
      <br /><br />
    </>
  )
}

export default App
