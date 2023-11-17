import './CalculatorButtons.css'

export default function CalculatorButtons({ addToCalculation, clearCalculation, calcCalculation, makeCalculation }) {
    function checkPrevChar(event) {
        let str = calcCalculation;
        let strLen = str.length - 1;

        if (str.length) {
            if (event.target.value === '=' && !isNaN(str.charAt(strLen))) {
                makeCalculation();
            }
            else if (isNaN(event.target.value) && !isNaN(str.charAt(strLen))) {
                addToCalculation(event);
            }
        }       
    }

    return(
        <>
            <div className='btn-container'>
                <div className='btn-row'>
                    <button className='calc-btn' value='(' onClick={()=> {
                        addToCalculation(event);
                    }}>(</button>
                    <button className='calc-btn' value=')' onClick={()=> {
                        addToCalculation(event);
                    }}>)</button>
                    <button className='calc-btn' value='%' onClick={()=> {
                        checkPrevChar(event);
                    }}>%</button>
                    <button className='calc-btn' value='C' onClick={()=> {
                        clearCalculation();
                    }}>C</button>
                </div>
                <div className='btn-row'>
                    <button className='calc-btn' value={7} onClick={()=> {
                        addToCalculation(event);
                    }}>7</button>
                    <button className='calc-btn' value={8} onClick={()=> {
                        addToCalculation(event);
                    }}>8</button>
                    <button className='calc-btn' value={9} onClick={()=> {
                        addToCalculation(event);
                    }}>9</button>
                    <button className='calc-btn' value='/' onClick={()=> {
                        checkPrevChar(event);
                    }}>/</button>
                </div>
                <div className='btn-row'>
                    <button className='calc-btn' value='4' onClick={()=> {
                        addToCalculation(event);
                    }}>4</button>
                    <button className='calc-btn' value='5' onClick={()=> {
                        addToCalculation(event);
                    }}>5</button>
                    <button className='calc-btn' value='6' onClick={()=> {
                        addToCalculation(event);
                    }}>6</button>
                    <button className='calc-btn' value='*' onClick={()=> {
                        checkPrevChar(event);
                    }}>*</button>
                </div>
                <div className='btn-row'>
                    <button className='calc-btn' value='1' onClick={()=> {
                        addToCalculation(event);
                    }}>1</button>
                    <button className='calc-btn' value='2' onClick={()=> {
                        addToCalculation(event);
                    }}>2</button>
                    <button className='calc-btn' value='3' onClick={()=> {
                        addToCalculation(event);
                    }}>3</button>
                    <button className='calc-btn' value='-' onClick={()=> {
                        checkPrevChar(event);
                    }}>-</button>
                </div>
                <div className='btn-row'>
                    <button className='calc-btn' value='0' onClick={()=> {
                        addToCalculation(event);
                    }}>0</button>
                    <button className='calc-btn' value='.' onClick={()=> {
                        addToCalculation(event);
                    }}>.</button>
                    <button className='calc-btn' value='=' onClick={()=> {
                        (calcCalculation) && makeCalculation();
                    }}>=</button>
                    <button className='calc-btn' value='+' onClick={()=> {
                        checkPrevChar(event);
                    }}>+</button>
                </div>
            </div>
        </>
    )
}