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

  function makeCalculation() {
    let formula = calcCalculation;
    let roundedNum = '' + eval(formula);

    if (eval(formula) % 1 !== 0) { roundedNum = eval(formula).toFixed(2);}
    setCalcCalculation(roundedNum);
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
