import { useEffect, useState } from 'react';

const useTimer = (sec, timerStart) => {
 const [minutes, setMinutes] = useState(25);
 const [seconds, setSeconds] = useState(0);
 const [displayMessage, setDisplayMessage] = useState(false);


 let startTimer = () => {
  if (seconds === 0) {
   if (minutes !== 0) {
    setSeconds(59);
    setMinutes(minutes - 1);
   } else {
    let minutes = displayMessage ? 24 : 4;
    let seconds = 59;
    setSeconds(seconds);
    setMinutes(minutes);
    setDisplayMessage(!displayMessage);
   }
  } else {
   setSeconds(seconds - 1);
  }
 };

 useEffect(() => {
  let interval = setInterval(() => {
   timerStart();
   clearInterval(interval);
  }, 1000);
 }, [sec]);

 console.log(sec = 'why???');
 // Value to be returned
 return { sec, timerStart };
};

export default useTimer;