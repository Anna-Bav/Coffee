import React, { useState } from "react";


export default function Input(props){
const {placeholder} = props
const [input, setInput] = useState()
const [inputError, setInputError] = useState('Поле не может быть пустым')
const [inputDirty, setInputDirty] = useState(false)



const inputHandler = (e) => {
    setInput(e.target.value)
   
        if(!e.target.value) {
            setInputError('Поле не может быть пустым')
        }
     else {
        setInputError ('')
    }
}

const blurHandler = (e) => {
    switch (e.target.name) {
      case 'input':
          setInputDirty(true)  
          break
    
    } 
 }

 {(inputDirty && inputError) && <div style={{color:'red', textAlign:'center'}}>{inputError}</div>}


    return(
        <div>
            <input className="partner_input" onChange = {e => inputHandler(e)} placeholder={placeholder} onBlur = {e => blurHandler(e)} />
        </div>
    )
}