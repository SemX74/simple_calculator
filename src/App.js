import React,{useState} from 'react';
import { Calculator } from './components/Calculator';
import './App.css';

function App() {
  const [isFirst, setIsFirst] = useState(true)     // checks to avoid interactions with default 0 value
  const [prevOper, setPrevOper] = useState('')     // ends operation with prev value
  const [prevValue, setPrevValue] = useState('0')  // saves info about prev value 
  const [inputValue,setInputValue] = useState('0') // allows user to see info
  
  const handleChange = (value) =>{
    inputValue? setInputValue(prev => `${prev}` + `${value}`) 
    : setInputValue(`${value}`)
  }

  const handleEqual = () =>{  //ends calc
    if(prevOper == '+'){setInputValue(Number(inputValue) + Number(prevValue));setIsFirst(true);}
    if(prevOper == '-'){setInputValue(Number(prevValue) - Number(inputValue));setIsFirst(true);}
    if(prevOper == '*'){setInputValue(Number(prevValue) * Number(inputValue));setIsFirst(true);}
    if(prevOper == '/'){setInputValue(Number(prevValue) / Number(inputValue));setIsFirst(true);}
    if(prevOper == '%'){setInputValue(Number(prevValue) % Number(inputValue));setIsFirst(true);}
  }

  function ChangeValues(){
    setPrevValue(Number(inputValue)); setIsFirst(false);setInputValue(0)
  }

  const handleClear = () => {setInputValue(0);setPrevValue('0');setIsFirst(true)} // clears input and resets states 

  const add = () =>{
    setPrevOper('+')
    if(!isFirst) {setPrevValue(Number(prevValue) + Number(inputValue));setIsFirst(true);setInputValue(0)}
    if(isFirst) {ChangeValues()}
  }
  const sub = () =>{
    setPrevOper('-')
    if(!isFirst) {setPrevValue(Number(prevValue) - Number(inputValue));setIsFirst(true);setInputValue(0)}
    if(isFirst) {ChangeValues()}
  }
  const mult = () => {
    setPrevOper('*')
    if(!isFirst) {setPrevValue(Number(prevValue) * Number(inputValue));setIsFirst(true);setInputValue(0)}
    if(isFirst) {ChangeValues()}
  }
  const div = () => {
    setPrevOper('/')
    if(!isFirst) {setPrevValue(Number(prevValue) / Number(inputValue));setIsFirst(true);setInputValue(0)}
    if(isFirst) {ChangeValues()}
  }
  const swap = () =>{
    inputValue.includes('-') ? setInputValue(inputValue.slice(1)) 
    : setInputValue('-'+`${inputValue}`) 
  }
  const perc = () =>{
    setPrevOper('%')
    if(!isFirst) {setPrevValue(Number(prevValue) % Number(inputValue));setIsFirst(true);setInputValue(0)}
    if(isFirst) {ChangeValues()}
  }

  return (
    <Calculator 
    perc={perc}
    swap={swap}
    div={div}
    mult={mult}
    sub={sub}
    add={add}
    handleClear={handleClear}
    handleChange={handleChange}
    handleEqual={handleEqual}
    inputValue={inputValue}
    prevValue={prevValue}
    />
  );
}

export default App;
