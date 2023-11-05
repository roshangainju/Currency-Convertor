import React, {useState} from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import "./App.css"

const App = () => {
  
  const [amount, setAmount]=useState(0)
  const [from, setFrom]=useState("usd")
  const [to, setTo]=useState("inr")
  const [convertedAmount, setConvertedAmount]=useState(0)

  const currencyInfo=useCurrencyInfo(from) //from="usd" from above useState hook

  const options=Object.keys(currencyInfo)// currency info ko keys sabai options ma gayo
  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = ()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }


  return (
   <>
   <form onSubmit={(e)=>{
    e.preventDefault()
    convert()
   }}> 
      <div className='  d-flex justify-content-center'
        >
          
        <div className="container p-2 bg-dark m-5 p-5 w-50 rounded text-center">
        <h3 className='text-light mb-5'>Currency Convertor</h3>

    <InputBox 
      label="From"
      amount={amount}
      currencyOption={options}
      onCurrencyChange={(currency)=>{
        setAmount(amount)
      }}
      onAmountChange={(amount)=> setAmount(amount)}
      selectCurrency={from}
      />
       <div className='row mt-4 d-flex justify-content-center'>
                <div className='col-2'>
                    <button className='btn btn-primary col-12 'onClick={swap}>
                        Swap
                    </button>

                </div>
            </div>
            <InputBox 
                label="To"
                amount={convertedAmount}
                currencyOption={options}
                onCurrencyChange={(currency)=>{
                setTo(currency)
                }}
                selectCurrency={from}
                // amountDisable
            />
            <div className='row mt-4'>
                <div className='col-12'>
                    <button type="submit" className='btn btn-primary col-12 '>
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </div>
            </div>   
        </div>
    
    
    </div>     
    </form>
   </>
  )
}

export default App