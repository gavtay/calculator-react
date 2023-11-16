import CalculatorButtons from './CalculatorButtons.jsx'
import CalculatorOutput from './CalculatorOutput.jsx'
import './App.css'

export default function App() {
  return (
    <>
      <div className='calculator-container'>
        <div className='calculator-base'>
          <CalculatorOutput />
          <CalculatorButtons />
        </div>
      </div>

    </>
  )
}
