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
import ColorBox from './sampleApp/huy/ColorBox';
import GenerateBox from './sampleApp/huy/GenerateBox';
import ThanhGenerateBox from './sampleApp/thanh/ThanhGenerateBox';
import ThanhColorBox from './sampleApp/thanh/ThanhColorBox';
import ThanhQuestionBoard from './sampleApp/thanh/ThanhQuestionBoard';

import Form from './Form';
import StateHook from './StateHook';
import HuyAccordion from './sampleApp/huy/components/HuyAccordion';
import EffectHook from './EffectHook';
import React from 'react';
import ContextAPI from './ContextAPI';
import { TodoProvider } from './contexts/TodoContext';
import RefHook from './RefHook';
import PerformanceHook from './PerformanceHook';
import CustomHook from './CustomHook';

function App() {
  const [isShowEffectHook, setIsShowEffectHook] = React.useState(true);

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
      <ColorBox/>
      <br />
      <ThanhGenerateBox />
      <ThanhColorBox />
      <ThanhQuestionBoard />
      <br />
      <GenerateBox/>
      <br />
      
      <Form />
      <br />

      <StateHook />
      <br />


      <HuyAccordion/>
      <br />
      <button onClick={() => setIsShowEffectHook(prevState => !prevState)}>Toggle show EffectHook</button>
      {isShowEffectHook && <EffectHook />}

      <br /> 
      <h3>Animation Layout</h3>
      <div>
        <div className='boxAnimation boxAnimation1' style={{ backgroundColor: 'red' }}>box 1</div>
        <div className='boxAnimation' style={{ backgroundColor: 'green' }}>box 2</div>
      </div>

      <TodoProvider>
       <ContextAPI />
      </TodoProvider>

      <br />
      <RefHook />

      <br />
      <PerformanceHook />

      <br />
      <CustomHook />

 



      <br /><br /><br /><br />




      <br />
      <br /><br />
    </>
  )
}

export default App
