import React, {useState} from 'react';

function ColorPicker(){
    const[color,SetColor]=useState("#FFFFFF")
    const colorHandler =(event)=>{
        SetColor(event.target.value);
    }
    return(
        <>
            <div className="BigContainer" style={{backgroundColor:color}}>
                <h2>World of Colors</h2>
                <div className="container" style={{backgroundColor:color}}>
                    <div className="display">
                        <p>selected color {color}</p>
                    </div>
                </div>
                <label htmlFor="">choose a color</label>
                <input type="color" value={color} onChange={colorHandler} />

            </div>
        </>
    );

}
export default ColorPicker