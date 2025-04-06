interface GuestGreetingProps {
  text: string,
  buttonText: string
}

function GuestGreeting({ text, buttonText }: GuestGreetingProps) {
  return (
    <div>
      {text} <br />
      <button type="button">{buttonText}</button>
    </div>
  )
}

export default GuestGreeting