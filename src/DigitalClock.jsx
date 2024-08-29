import React ,{useState,useEffect} from 'react';
function DigitalClock(){
    const[time,SetTime]=useState(new Date());
    useEffect(()=>{
        const intervalId=setInterval(()=>{
            SetTime(new Date())
        },1000);
        return ()=>{
            clearInterval(intervalId);
        }
    },[])
    const padZero=(number)=>{
        return (number <10? "0":"")+number
        
    }
    const formatTime=()=>{
        let hours=time.getHours();
        let minutes=time.getMinutes();
        let seconds =time.getSeconds();
        const meridian =hours >=12?"PM":"AM"
        hours =hours%12||12;
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}:${meridian}`;

    }
    return(<>
    <div className="clockContainer">
        <div className="clock">
              <span>{formatTime()}</span>
        </div>
    </div>
    </>);

}
export default DigitalClock
