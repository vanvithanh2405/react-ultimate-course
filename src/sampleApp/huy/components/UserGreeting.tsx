interface UserGreetingProps{
  handleChange:()=> void
  text:string
  name:string
}

function HuyUserGreeting({handleChange,text,name}:UserGreetingProps) {
  return (
    <div>
      <h1>{text} {name}</h1>
      <button onClick={handleChange}>Logout</button>
    </div>
  )
}

export default HuyUserGreeting