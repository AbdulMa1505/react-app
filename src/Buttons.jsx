function Buttons(){
    const HandleClick= ()=>console.log("ouch");
    const handleClick2=(name)=>console.log(`${name}  stop clicking me`);
    return( <>
    <button onClick={HandleClick}>Click Me</button>
    {/* <button onClick={()=>handleClick2("bro")}>hey</button> */}
    </>);
}
export default Buttons