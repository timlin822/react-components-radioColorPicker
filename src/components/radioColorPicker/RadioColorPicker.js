import {useState} from 'react';

import RadioItem from './RadioItem';

import COLORS_Data from 'data/ColorsData';

import './RadioColorPicker.css';

const RadioColorPicker=()=>{
    const [selectColor,setSelectColor]=useState("紅色");
    
    const changeHandler=(e)=>{
        setSelectColor(e.target.value);
    };
    
    return (
        <>
            <div className="radio-group">
                {COLORS_Data.map(color=>(
                    <RadioItem key={color.id} color={color} selectColor={selectColor} changeHandler={changeHandler} />
                ))}
            </div>
            <h1 className="text">選到: {selectColor}</h1>
        </>
    );
}

export default RadioColorPicker;