import './CalculatorOutput.css'

export default function CalculatorOutput({ calcCalculation }) {

    return (
        <>
            <div className="output-container">
                <h1 className="output-text">{calcCalculation}</h1>
            </div>
        </>
    )
}
