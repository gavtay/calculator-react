import Button from './Button.jsx'
import './CalculatorButtons.css'

export default function CalculatorButtons({ addToCalculation, clearCalculation, calcCalculation, makeCalculation }) {
    function checkPrevChar(event) {
        let str = calcCalculation;
        let strLen = str.length - 1;
        let val = event.target.value;

        if (str.length) {
            if (val === '=' && !isNaN(str.charAt(strLen))) {
                makeCalculation();
                return;
            }
            else if (isNaN(val) && !isNaN(str.charAt(strLen)) || str.charAt(strLen) === '=') {
                addToCalculation(event);
            }
        }       
    }

    return(
        <>
            <div className='btn-container'>
                <div className='btn-row'>
                    <Button value='(' onClick={addToCalculation} />
                    <Button value=')' onClick={addToCalculation} />
                    <Button value='%' onClick={checkPrevChar} />
                    <Button value='C' onClick={clearCalculation} />
                </div>
                <div className='btn-row'>
                    <Button value={7} onClick={addToCalculation} />
                    <Button value={8} onClick={addToCalculation} />
                    <Button value={9} onClick={addToCalculation} />
                    <Button value='/' onClick={checkPrevChar} />
                </div>
                <div className='btn-row'>
                    <Button value={4} onClick={addToCalculation} />
                    <Button value={5} onClick={addToCalculation} />
                    <Button value={6} onClick={addToCalculation} />
                    <Button value='*' onClick={checkPrevChar} />
                </div>
                <div className='btn-row'>
                    <Button value={1} onClick={addToCalculation} />
                    <Button value={2} onClick={addToCalculation} />
                    <Button value={3} onClick={addToCalculation} />
                    <Button value='-' onClick={checkPrevChar} />
                </div>
                <div className='btn-row'>
                    <Button value={0} onClick={addToCalculation} />
                    <Button value='.' onClick={addToCalculation} />
                    <Button value='=' onClick={checkPrevChar} />
                    <Button value='+' onClick={checkPrevChar} />
                </div>
            </div>
        </>
    )
}