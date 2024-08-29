import React,{useState,useEffect,useRef} from 'react';
function StopWatch(){
    const[isRunning,SetIsRunning]=useState(false);
    const[elapse,SetElaspeTime]=useState(0);
    const intervalRef=useRef(null);
    const startTime=useRef(0);
    useEffect(()=>{
if(isRunning){
    intervalRef.current=setInterval(()=>{
        SetElaspeTime(Date.now()- startTime.current );
    },10);
}
return()=>{clearInterval(intervalRef.current);
    
 }
    },[isRunning ]);
    const start=()=>{
        SetIsRunning(true);
        startTime.current=new Date.now()-elapse;


    }
    const Stop=()=>{
        SetIsRunning(false);
        
    }
    const reset=()=>{
        SetElaspeTime(0);
        SetIsRunning(false);
        
    }
    const formatTime=()=>{
        let hours =Math.floor(elapse/(1000*60*60));
        let minutes=Math.floor(elapse/(1000*60)%60);
        let seconds =Math.floor(elapse/(1000)%60);
        let milliseconds=Math.floor((elapse%1000)/10);
        hours =String(hours).padStart(2,"0");
        minutes=Strings(minutes).padStart(2,"0");
        minutes=Strings(seconds).padStart(2,"0");
        minutes=Strings(milliseconds).padStart(2,"0");
        return`${minutes}:${seconds}:${milliseconds}`; 
    }
return(
    <>
        <div className="stopWatch">
            <div className="display">
                {formatTime()}
            </div>
            <div className="controls">
                <button onClick={start} className="start-button">Start</button>
                <button onClick={Stop} className="stop-button">Stop</button>
                <button onClick={reset} className="resetButton">Reset</button>
            </div>
        </div>
    </>
);
}
export default  StopWatch