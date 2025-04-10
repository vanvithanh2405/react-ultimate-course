import { useState } from 'react'
import UserGreeting from './component/UserGreeting';
import GuestGreeting from './component/GuestGreeting';

function ThanhGuestGreeting() {
    const [isLogin, setIsLogin] = useState(false);
    const handleLogin = () => {
        setIsLogin((prev) => !prev)
    }

    return (
        <div>
            <h1>Thanh GuestGreeting</h1>
            { isLogin ? 
                <UserGreeting 
                    handleChange={handleLogin}
                    isLogin={isLogin}
                    text={'Welcome to'}
                    name={'Thành'}
                /> : 
                <GuestGreeting 
                    handleChange={handleLogin}
                    isLogin={isLogin}
                    text={'Please sign up !'}
                /> 
            }
        </div>
    )
}

export default ThanhGuestGreeting
