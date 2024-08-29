import React, {useState, useEffect} from 'react';

function MyComponent(){
const[count,SetCount]=useState(0); 
const[color,SetColor]=useState("");
useEffect(()=>{
    document.title=`Count ${count}`;
},[count,color]);
const ColorChange=()=>{
    SetColor(color=>color==="green"?"red":"green");

}
const Count=()=>{
    SetCount(c=>c+1);
   

}
const DecreaseCount=()=>{
    SetCount(c=>c-1);
}

return(
    <>
        <p style={{color:color}}>Count:{count}</p>
        <button onClick={Count}>Add</button>
        <button onClick={DecreaseCount}>subtract</button>
        <button onClick={ColorChange}>change color</button>
    </>
);
}
export default MyComponent;