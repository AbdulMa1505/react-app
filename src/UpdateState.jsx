import React, {useState} from 'react';

function Updater(){
    const[car,SetCar]=useState({year:2024,make:"Ford",model:"Mustang"});
    const HandleYearChange =(event)=>{
        SetCar(c=>({...c, year: event.target.value}));
    }
    const HandleMakeChange =(event)=>{
        SetCar(c=>({...c,make:event.target.value}));
    }
    const HandleModelChange =(event)=>{
        SetCar(c=>({...c,model:event.target.value}));
    }
    return(
    <>
        <div>
            <p>yourfavorite cars is {car.year}  {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={HandleYearChange} /><br />
            <input type="text" value={car.make} onChange={HandleMakeChange} /><br />
            <input type="text" value={car.model} onChange={HandleModelChange} /><br />
        </div>
    </>
    );

}
export default Updater