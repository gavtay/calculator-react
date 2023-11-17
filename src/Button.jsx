import './Button.css'

export default function Button({ value, onClick }) {
    return (
        <>
            <button className='calc-btn' value={value} onClick={()=> {
                onClick(event);
            }}>{value}</button>
        </>
    )
}
