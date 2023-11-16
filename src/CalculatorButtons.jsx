import './CalculatorButtons.css'

export default function CalculatorButtons() {
    return(
        <>
            <div className='btn-container'>
                <div className='btn-row'>
                    <button className='calc-btn'>(</button>
                    <button className='calc-btn'>)</button>
                    <button className='calc-btn'>%</button>
                    <button className='calc-btn'>C</button>
                </div>
                <div className='btn-row'>
                    <button className='calc-btn'>7</button>
                    <button className='calc-btn'>8</button>
                    <button className='calc-btn'>9</button>
                    <button className='calc-btn'>/</button>
                </div>
                <div className='btn-row'>
                    <button className='calc-btn'>4</button>
                    <button className='calc-btn'>5</button>
                    <button className='calc-btn'>6</button>
                    <button className='calc-btn'>X</button>
                </div>
                <div className='btn-row'>
                    <button className='calc-btn'>1</button>
                    <button className='calc-btn'>2</button>
                    <button className='calc-btn'>3</button>
                    <button className='calc-btn'>-</button>
                </div>
                <div className='btn-row'>
                    <button className='calc-btn'>0</button>
                    <button className='calc-btn'>.</button>
                    <button className='calc-btn'>=</button>
                    <button className='calc-btn'>+</button>
                </div>
            </div>
        </>
    )
}