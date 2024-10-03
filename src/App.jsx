import { useState } from 'react';
import './App.css'

function App() {
  const [amt, setAmt] = useState("");
  const [fromCurrency,setFromCurrency] = useState("INR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [rate, setRate] = useState("");
  return (
    <>
    <div className="currency-converter">
      <div className="box"></div>
      <div className="data">
        <h1>Currency Converter</h1>
        <div className="input-container">
          <label htmlFor="amount">Amount: </label>
          <input type="text" required id="amount" 
          placeholder='Enter an amount' onChange={e=>setAmt(e.target.value)}/>
        </div>
        <div className="input-container">
          <label htmlFor="fromCurrency">From Currency: </label>
          <select name="fromCurrency" id="fromCurrency" value={fromCurrency} onChange={e=>setFromCurrency(e.target.value)}>
            <option value="USD">USD - United States Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound Sterling</option>
            <option value="JPY">JPY - Japanese Yen</option>
            <option value="AUD">AUD - Australian Dollar</option>
            <option value="CAD">CAD - Canadian Dollar</option>
            <option value="CNY">CNY - Chinese Yuan</option>
            <option value="INR">INR - Indian Rupee</option>
            <option value="BRL">BRL - Brazilian Real</option>
            <option value="ZAR">ZAR - South African Rand</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="toCurrency">To Currency: </label>
          <select name="toCurrency" id="toCurrency" value={toCurrency} onChange={e=>setToCurrency(e.target.value)}>
            <option value="USD">USD - United States Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound Sterling</option>
            <option value="JPY">JPY - Japanese Yen</option>
            <option value="AUD">AUD - Australian Dollar</option>
            <option value="CAD">CAD - Canadian Dollar</option>
            <option value="CNY">CNY - Chinese Yuan</option>
            <option value="INR">INR - Indian Rupee</option>
            <option value="BRL">BRL - Brazilian Real</option>
            <option value="ZAR">ZAR - South African Rand</option>
          </select>
        </div>
      <div className="result">
        <p>{amt} {fromCurrency} is equal to {amt} {toCurrency} </p>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
