import { useState, useEffect } from "react";


export default function Clock(){

    const[time, setTime]=useState(new Date());

    useEffect(() => {
        const interval = setInterval(
            () => {
                setTime(new Date());
            },1000
        );


        return() => {clearInterval(interval)};

    },[]);


    const secondsAngle = time.getSeconds() * 6;
    const minutesAngle = time.getMinutes() * 6;
    const hoursAngle = time.getHours() * 30 + time.getMinutes() * 0.5;


    return (

    <div className="relative w-64 h-64 rounded-full 
    border-20 border-amber-700 mx-auto mt-10">
      {/* clock */}


      <div 
        className="absolute w-0.5 bg-red-500 origin-bottom"
        style={{ height: '40%', top: '50%', left: '50%', 
          transform: 
          `translateX(-50%) 
          translateY(-100%) 
          rotate(${secondsAngle}deg)` }}
      ></div>


      <div 
        className="absolute w-1 bg-yellow-400 origin-bottom"
        style={{ height: '35%', top: '50%', left: '50%',
           transform:
            `translateX(-50%) 
           translateY(-100%) 
           rotate(${minutesAngle}deg)` }}
      ></div>


      <div 
        className="absolute w-2 bg-green-900 origin-bottom"
        style={{ height: '25%', top: '50%', left: '50%',
           transform: 
           `translateX(-50%) 
           translateY(-100%) 
           rotate(${hoursAngle}deg)` }}
      ></div>
    </div>
  );

};