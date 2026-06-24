import { useRef} from 'react'
import './App.css'

function App() {
  const currMessage = useRef<HTMLInputElement>(null);

  const alertMessage = (textMessage: string | undefined) => {
    alert(textMessage)
  }
  return (
    <div className="App">
      <h1>Vite + React</h1>
      <input type="text" ref={currMessage}/>
      <button onClick={() => alertMessage(currMessage.current?.value)}>Click to Alert your message</button>
    </div>
  )
}

export default App
