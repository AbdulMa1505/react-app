import React, {useState} from 'react';
function Counter(){
    const [count,setCount]=useState(0);
    
    const IncreaseFun =()=>{
        setCount(c=>c+1);
        setCount(c=>c+1);
        setCount(c=>c+1);
    }
    const decreaseFun =()=>{
        // updater fucntions
        setCount(c=>c-1);
        setCount(c=>c-1);
        setCount(c=>count-1);
    }
    const resetFun =()=>{
        setCount(count===0);
    }
    return(
        <>
            <p>{count}</p>
            <div class='buttons'>
                <button onClick={IncreaseFun}>Increase</button>
                <button onClick={decreaseFun}>Decrease</button>
                <button onClick={resetFun}>Reset</button>
            </div>
        </>
    );


}
export default Counter