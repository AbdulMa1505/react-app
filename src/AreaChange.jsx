import React,{useState,useEffect} from 'react';

function MyAreaChange(){
const[width,SetWidth]=useState(window.innerWidth);
const[height,SetHeight]=useState(window.innerHeight);
useEffect(()=>{
    window.addEventListener("resize",resize);
console.log("EVENT LISTENER ADD");  
return()=>{
    window.removeEventListener('resize',resize);
    console.log("event listener removed"); 
}
},[])
useEffect(()=>{
    document.title=` size:${width} x ${height}`;
},[width,height]);
const resize=()=>{
    SetWidth(window.innerWidth);
    SetHeight(window.innerHeight);
}


return(<>
<p>Window width:{width}px</p>
<p>Window height:{height}px</p>
</>);
}
export default MyAreaChange;