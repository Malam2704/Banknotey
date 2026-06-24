import { useRef, useState} from 'react'
import './App.css'

function App() {
  const [messageCount, setMessageCount] = useState(0);
  const currMessage = useRef<HTMLInputElement>(null);

  const alertMessage = (textMessage: string | undefined) => {
    setMessageCount(messageCount + 1);
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
