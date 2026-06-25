import { useRef, useState } from 'react'
import './App.css'
import currencyData from './assets/CountryCurrency.json';

function App() {
  const [messageCount, setMessageCount] = useState(0);
  const currMessage = useRef<HTMLInputElement>(null);
  const [selectedCurrency, setSelectedCurrency] = useState<string>('');

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value)
  }
  const alertMessage = (textMessage: string | undefined) => {
    setMessageCount(messageCount + 1);
    alert(textMessage)
  }
  return (
    <div className="App">
      <h1>My Bank Notes</h1>
      <h2>Add your bank notes here</h2>
      <label>Currency</label>
      <select name="selectedCountry" onChange={handleCurrencyChange}>
        {Object.keys(currencyData).map((currency: string) =>
          <option value={currency} key={currency}>{currency}</option>)}
      </select>
      <label>Number Value</label>
      <select name="selectedCountry">
        {currencyData[selectedCurrency].map((currency: string) =>
          <option value={currency} key={currency}>{currency}</option>)}
      </select>
      <label>Country</label>
      <select name="selectedCountry">
        {Object.keys(currencyData).map((currency: string) =>
          <option value={currency} key={currency}>{currency}</option>)}
      </select>

      <button onClick={() => alertMessage(currMessage.current?.value)}>Click to Alert your message</button>
    </div >
  )
}

export default App
