import React from "react";

const Calculator = ({div,perc,swap,add,inputValue,prevValue,sub,mult,handleChange,handleClear,handleEqual,}) =>{
    return(
        <div className="App">
        <div className='calculator_wrapper'>
          <div className='calculator'>
            <div className='input_wrapper'> <p style={{color:'wheat'}}>{prevValue}</p><input value={inputValue} readOnly></input></div>
            <div className='grid_container'>
              <div className='cells_wrapper'>
                <div onClick={() => handleClear()} className='cell func hor'> AC </div>
                <div onClick={() => perc()} className='cell func hor'> % </div>
                <div onClick={() => swap()} className='cell func hor'> +/- </div>
                <div onClick={() => div()} className='cell func ver'> / </div>
  
                <div onClick={() => handleChange(9)} className='cell number'>9</div>
                <div onClick={() => handleChange(8)} className='cell number'>8</div>
                <div onClick={() => handleChange(7)} className='cell number'>7</div>
  
                <div onClick={() => mult()} className='cell func ver x'> ✕ </div>
  
                <div onClick={() => handleChange(6)} className='cell number'>6</div>
                <div onClick={() => handleChange(5)} className='cell number'>5</div>
                <div onClick={() => handleChange(4)} className='cell number'>4</div>
                
                <div onClick={() => sub()} className='cell func ver'> - </div>
  
                <div onClick={() => handleChange(3)} className='cell number'>3</div>
                <div onClick={() => handleChange(2)} className='cell number'>2</div>
                <div onClick={() => handleChange(1)} className='cell number'>1</div>
  
                <div onClick={() => add()} className='cell func ver'> + </div>
  
                <div onClick={() => handleChange(0)} className='cell number wide'>0</div>
                
                <div onClick={() => handleChange('.')} className='cell number'>.</div>
                <div onClick={() => handleEqual()} className='cell func ver'> =</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export {Calculator}