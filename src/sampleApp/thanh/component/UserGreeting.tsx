import Button from './Button'

interface UserGreetingProps {
    handleChange: () => void
    isLogin: boolean,
    text: string,
    name: string
}

function UserGreeting({
    handleChange,
    isLogin,
    text,
    name
}: UserGreetingProps) {
  return (
    <div>
       <h1>{`${text} ${name}`}</h1>
       <Button 
         handleChange={handleChange}
         isLogin={isLogin}
       />
    </div>
  )
}

export default UserGreeting
