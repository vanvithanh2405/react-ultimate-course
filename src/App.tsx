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
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router';
import TodoDetail from './components/leaderboard/TodoDetail';
import AlbumDetail from './components/leaderboard/AlbumDetail';
import User from './User';
import Profile from './components/user/Profile';
import PaymenMethod from './components/user/PaymenMethod';
import Login from './Login';
import AuthRoute from './routes/AuthRoute';
import PublicRoute from './routes/PublicRoute';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isShowEffectHook, setIsShowEffectHook] = React.useState(true);

  React.useEffect(() => {
    // call google analytic
    console.log('App google analytic: ', location)
  }, [location]);

  function gotoHome() {
    navigate('/')
  }
  
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/login"
                  replace
                  className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent  md:p-0 dark:text-white"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/jsx"
                  replace
                  className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent  md:p-0 dark:text-white"
                >
                  JSX
                </Link>
              </li>
              <li>
                <Link
                  to="/props"
                  className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent  md:p-0 dark:text-white"
                >
                  Props
                </Link>
              </li>
              <li>
                <Link
                  to="/state"
                  className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent  md:p-0 dark:text-white"
                >
                  State
                </Link>
              </li>
              <li>
                <Link
                  to="/component"
                  className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent  md:p-0 dark:text-white"
                >
                  Component
                </Link>
              </li>
              <li>
                <Link
                  to="/leaderboard"
                  className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent  md:p-0 dark:text-white"
                >
                  Leaderboard
                </Link>
              </li>
               <li>
                <Link
                  to="/user"
                  className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent  md:p-0 dark:text-white"
                >
                  User
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <button type="button" onClick={gotoHome}>Navigate to Home</button>

      <Routes>
        <Route path="/" element={<div>this is home</div>} />
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/jsx" element={<JSX />} />
        <Route path="/props" element={<Props />} />
        <Route path="/state" element={<State />} />
        <Route path="/component" element={<Component />} />
        {/* <Route path="/component/:userId/profile/:componentId" element={<Component />} /> */}
        <Route path="/leaderboard" element={<AuthRoute><CustomHook /></AuthRoute>} />
        <Route path="/leaderboard/todo/:todoId" element={<TodoDetail />} />
        <Route path="/leaderboard/album/:albumId" element={<AlbumDetail />} />
        {/* <Route path="/user" element={<User />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/user/payment" element={<PaymenMethod />} /> */}
        <Route path="/user" element={<AuthRoute><User /></AuthRoute>}>
          <Route index element={<div>Please choose tab</div>} />
          <Route path="profile" element={<Profile />} />
          <Route path="payment" element={<PaymenMethod />} />
        </Route>
       
      </Routes>

      <hr />

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
      

 



      <br /><br /><br /><br />




      <br />
      <br /><br />
    </>
  )
}

export default App
