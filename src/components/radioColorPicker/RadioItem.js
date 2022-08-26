import './RadioColorPicker.css';

const RadioItem=({color,selectColor,changeHandler})=>{
    return (
        <>
            <input type="radio" id={color.colorEnglishName} name="color" value={color.colorName} checked={selectColor===color.colorName} onChange={changeHandler} />
            <div className="radio-border"><label htmlFor={color.colorEnglishName} className={`radio-color ${color.colorEnglishName}`}></label></div>
        </>
    );
}

export default RadioItem;