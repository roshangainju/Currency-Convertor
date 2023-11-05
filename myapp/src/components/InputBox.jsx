import React, { useId, useState } from 'react'


const InputBox = ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption=[],//keys haru sabai currencyoption ma cha(usd,inr etc)
    selectCurrency="USD",
    amountDisable=false,
    currencyDisable=false,
    className=""

}) => {

    const amountInputId=useId()

    const {money,setMoney}=useState(currencyOption)

  return (

 
            <div className='row  bg-light rounded p-3 m-3 '>
                <div className='col-6'>
                    <label htmlFor={amountInputId}><h6>{label}</h6></label>
                    <input 
                        id={amountInputId}
                        type="number" 
                        className='form-control ' 
                        disabled={amountDisable} 
                        value={amount}                  
                        onChange={(e)=>onAmountChange &&  onAmountChange(Number(e.target.value))} 
                    // onAMount change ma value chabhane or true cha vane &&ko right ko function chalcha yedi value chaina vane rightko function chaldaina
                    />
                </div>
                <div className='col-6 '>
                <h6>Currency Type</h6>
                <select className='form-select' value={selectCurrency} onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencyDisable} >
                    {/* currencyoption ma vayeko sabai keys lai map gareko */}
                    {currencyOption.map((currency)=>(
                        <option key={currency} value={currency}  >{currency}</option>
                    ))}                  
                </select>

                </div>
            </div>
           
            
            
     
    // </div>
  )
}

export default InputBox