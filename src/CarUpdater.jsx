import React,{useState} from 'react';
function CarUpdate(){
const [cars,setCars] =useState([])
const [CarYear,setCarYear] =useState(new Date().getFullYear());
const[carMake,setCarMake]=useState("");
const[CarModel,setCarModel]=useState("");
const handleAddCar=()=>{
    const newCar ={year:CarYear,Make:carMake,model:CarModel};
    setCars(c=>([...c,newCar]));
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");


}
const handleRemoveCar=(index)=>{
    setCars(c=>c.filter((_,i)=>i!==index));
    
}
const handleYearChange=(event)=>{
    setCarYear(event.target.value);
}
const handleMakeChange=(event)=>{
    setCarMake(event.target.value);
    
}
const handleModelChange=(event)=>{
    setCarModel(event.target.value);
    
}
return(
        <>
            <div>
                <h2>List of car Object</h2>
                <ul>
                    {cars.map((car,index)=><li key={index}  onClick={handleRemoveCar(index)}> 
                        {car.year} {car.make} {car.model}
                       
                        </li>)}
                </ul>
                <input type="number" value={CarYear} onChange={handleYearChange} placeholder=''/><br />
                <input type="text" value={carMake} onChange={handleMakeChange} placeholder='Enter the manufacturer of the car'/><br />
                <input type="text" value={CarModel} onChange={handleModelChange} placeholder='Enter the model of the car'/><br />
                <button onClick={handleAddCar}>Add Car</button>
            </div>
        </>)
}
export default CarUpdate