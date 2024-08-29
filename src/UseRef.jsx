import React,{useEffect,useState,useRef} from'react';

function MyComponent(){
    let [number,SetNumber]=useState(0);
    const ref =useRef(0);
    useEffect(()=>{
        console.log("rendered")
      })
    const HandleClick=()=>{
         ref.current++;
         console.log(ref.current);
        // SetNumber(number=>number+1);
    }
    return(<>
    <button onClick={HandleClick}>ClickMe</button></>)

}
export default MyComponent;