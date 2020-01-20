import React from 'react';

const Buttons = (props) => {
	const { clear, handleNumbers, addSign, toDecimal, calculate } = props;
	return(
	    <div id="buttons">
	        <div id="clear"    onClick={clear}>AC</div>
	        <div id="divide"   onClick={addSign} >/</div>
	        <div id="multiply" onClick={addSign} >x</div>
	        <div id="seven"    onClick={handleNumbers} >7</div>
	        <div id="eight"    onClick={handleNumbers} >8</div>
	        <div id="nine"     onClick={handleNumbers} >9</div>
	        <div id="subtract" onClick={addSign} >-</div>
	        <div id="four"     onClick={handleNumbers} >4</div>
	        <div id="five"     onClick={handleNumbers} >5</div>
	        <div id="six"      onClick={handleNumbers} >6</div>
	        <div id="add"      onClick={addSign} >+</div>
	        <div id="one"      onClick={handleNumbers} >1</div>
	        <div id="two"      onClick={handleNumbers} >2</div>
	        <div id="three"    onClick={handleNumbers} >3</div>
	        <div id="zero"     onClick={handleNumbers} >0</div>
	        <div id="decimal"  onClick={toDecimal}>.</div>
	        <div id="equals"   onClick={calculate}>=</div>
	      </div>
	)
}

export default Buttons;