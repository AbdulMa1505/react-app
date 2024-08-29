import React,{useState} from 'react';
function    MyCompnent(){
const [name,setName]=useState("Guest");
const[age,setAge]=useState(0);
const [isEmployed,setEmployed]=useState(false);
const UpdateName=()=>{
    setName("Abdul");
}
const UpdateAge=()=>{
    setAge(age+1);
}
const Employed=()=>{
    setEmployed(!isEmployed);

}
return(
<>
    <div>
        <p>Name:{name}</p>
        <button onClick={UpdateName}>SetName</button>

        <p>Age:{age}</p>
        <button onClick={UpdateAge}>setAge</button>
        <p>Employed:{isEmployed ?"Yes":"No"}</p>
        <button onClick={ Employed}>EmloymentStatus</button>


    </div>


</>);
}
export default MyCompnent