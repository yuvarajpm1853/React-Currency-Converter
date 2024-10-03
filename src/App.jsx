import { useState } from 'react';
import './App.css'
import { useEffect } from 'react';

function App() {
  const [amt, setAmt] = useState(1);
  const [fromCurrency,setFromCurrency] = useState("INR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [rate, setRate] = useState("");

  useEffect(()=>{
    const getExchangeRate = async () =>{
      try{
        let url = `https://open.er-api.com/v6/latest/${fromCurrency}`;
        const resp = await fetch(url)
          .then(res=> res.json());
        setRate(resp.rates[toCurrency]);
      }
      catch(err){
        console.log(err);
      }
    }
    getExchangeRate();
  })
  return (
    <>
    <div className="currency-converter">
      <div className="box"></div>
      <div className="data">
        <h1>Currency Converter</h1>
        <div className="input-container">
          <label htmlFor="amount">Amount: </label>
          {/* text works with parseFloat */}
          {/* while number makes NaN when any chrs entered */}
          <input type="text" required id="amount" value={amt}
          placeholder='Enter an amount' 
          onChange={e=>setAmt(parseFloat(e.target.value))}/>
          {/* parseFloat => makes enter only numbers in input */}
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
        <p>{amt} {fromCurrency} is equal to {(amt*rate).toFixed(4)} {toCurrency} </p>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
