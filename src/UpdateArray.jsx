import React,{useState} from 'react';

function ArrayUpdate(){
    const [foods,setFoods]=useState("appple","orange","mangoe");
    const HandleFoodAdd=()=>{
        const newFood=document.getElementById("foodInput").value;
        document.getElementById("foodInput").value="";
        setFoods(f=>[...f,newFood]);
    }
    const HandlRemoveFoods=(index)=>{
        setFoods(foods.filter((_,i)=>i!==index));
    }
    return(
    <>
        <div>
            <h2>List of food </h2>
            <ul>
                {foods.map((food,index)=>
                <li key={index} onClick={()=>HandlRemoveFoods(index )}>  {food}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name" />
            <button onClick={HandleFoodAdd}></button>
        </div>

    </>
);

}
export default ArrayUpdate