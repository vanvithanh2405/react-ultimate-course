interface UserGreetingProps {
  text: string,
  buttonText: string,
  handleLogin?: () => void
}

function UserGreeting({ text, buttonText, handleLogin }: UserGreetingProps) {
  return (
    <div>
      {text} <br />
      <button type="button" onClick={handleLogin}>{buttonText}</button>
    </div>
  )
}

export default UserGreeting