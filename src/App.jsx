import CalculatorButtons from './CalculatorButtons.jsx'
import CalculatorOutput from './CalculatorOutput.jsx'
import { useState } from 'react';
import './App.css'

export default function App() {
  const [calcCalculation, setCalcCalculation] = useState('');

  function addToCalculation(event) {
    setCalcCalculation(calcCalculation + event.target.value);
  }

  function clearCalculation() {
    setCalcCalculation('');
  }

  function checkParenthesis(formula) {
    let openCount = 0;
    let closeCount = 0;

    for (let i = 0; i < formula.length; ++i) {
      if (openCount === closeCount) {
        if (formula.charAt(i) === '(') { openCount += 1; } 
        if (formula.charAt(i) === ')') {
          alert('You must include "(" before using ")"');
          clearCalculation();
          break;
        }
      }
      if (openCount > closeCount) {
        if (formula.charAt(i) === '(') { openCount += 1 }
        if (formula.charAt(i) === ')') { closeCount += 1 }
      }
    }

    return (openCount === closeCount) ? true: false;
  }

  function makeCalculation() {
    let formula = calcCalculation;
    let checkPass = checkParenthesis(formula);

    console.log(checkPass);
    if (checkPass === true) { setCalcCalculation(eval(formula)); }
    else { alert('Error. Check your parenthesis.') }
  }

  return (
    <>
      <div className='calculator-container'>
        <div className='calculator-base'>
          <CalculatorOutput calcCalculation={calcCalculation} />
          <CalculatorButtons
            addToCalculation={addToCalculation}
            clearCalculation={clearCalculation}
            calcCalculation={calcCalculation}
            makeCalculation={makeCalculation}
          />
        </div>
      </div>
    </>
  )
}
