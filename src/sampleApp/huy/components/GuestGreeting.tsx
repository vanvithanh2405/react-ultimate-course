interface GuestGreetingProps {
  handleChange:()=> void,
  text:string

}

function GuestGreeting({handleChange,text}:GuestGreetingProps) {

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={handleChange}>Login</button>
    </div>

  )
}

export default GuestGreeting