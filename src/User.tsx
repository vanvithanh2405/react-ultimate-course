import React from 'react'
import Profile from './components/user/Profile';
import PaymenMethod from './components/user/PaymenMethod';
import { Link, Outlet } from 'react-router';

function User() {
  return (
    <div>
      <h1>User</h1>
      First Name: Tony <br />
      Last Name: Nguyen <br />
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <li className="me-2">
          <Link to="/user/profile" className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg cursor-pointer">Profile</Link>
        </li>
        <li className="me-2">
          <Link to="/user/payment" className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg cursor-pointer">Payment method</Link>
        </li>
      </ul>
      <br />

      <Outlet />
     
    </div>
  )
}

export default User