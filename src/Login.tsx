import { useNavigate } from 'react-router';

function Login() {
  const navigate = useNavigate();

  function onSubmit(e: any) {
    e.preventDefault();
    // call api -> return access token
    const access_token = 'tony';
    window.localStorage.setItem('access_token', access_token);
    navigate('/')
  }
  
  return (
    <div className='w-[500px]'>
      <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium ">Your email</label>
          <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium ">Password</label>
          <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
      </form>

      <br />
    </div>
  )
}

export default Login