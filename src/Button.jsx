function Button(){
    let count =0;
    const handleClick=(e)=>e.target.textContent="Ouch";
    const handleClick2=(name)=>{
        if(count<3){
            count++;
            console.log(`hey ${name} you clicked me ${count} time/s`);
        }
        else{
            console.log(`${name} stop clicking me`);
        }
    };

    return(<>
                <button onClick={(e)=>handleClick(e)}>Click Me</button>
                <button onClick={()=>handleClick2("Abdul")}>Click Me</button>
         </>

    );
}
export default Button