import React, { useState } from 'react'
import './App.css'
import currencyData from './assets/CountryCurrency.json';
import type { BankNote } from './DataModel';

type CurrencyCode = keyof typeof currencyData;

function App() {
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyCode>("USD");
  const [selectedCurrencyAmount, setSelectedAmount] = useState<string>("");
  const [storedBankNotes, setStoredBankNotes] = useState<BankNote[]>([]);

  const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCurrency(event.target.value as CurrencyCode);
  }
  const handleAmountChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAmount(event.target.value);
  }
  const addNewBankNote = () => {
    const newBankNote: BankNote = {
      amount: selectedCurrencyAmount,
      currency: selectedCurrency,
    }
    setStoredBankNotes([...storedBankNotes, newBankNote]);
  }

  return (
    <div className="App">
      <h1>My Bank Notes</h1>
      <h2>Add your bank notes here</h2>
      <label>Currency</label>
      <select onChange={handleCurrencyChange}>
        {Object.keys(currencyData).map((currency: string) =>
          <option value={currency} key={currency}>{currency}</option>)}
      </select>
      <label>Number Value</label>
      <select onChange={handleAmountChange}>
        {currencyData[selectedCurrency].map((numericValue: string) =>
          <option value={numericValue} key={numericValue}>{numericValue}</option>)}
      </select>

      <button onClick={addNewBankNote}>Add Banknote</button>

      <ol>
        {storedBankNotes.map((bankNote: BankNote) =>
          <li>{bankNote.amount} {bankNote.currency}</li>)}
      </ol>
    </div >
  )
}

export default App
