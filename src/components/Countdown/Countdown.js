import React, { useState, useEffect, useRef } from 'react';


const Countdown = ({ countdownTime, displayTimer }) => {

 const [minutes, setMinutes] = useState(25);
 const [seconds, setSeconds] = useState(0);
 const [displayMessage, setDisplayMessage] = useState(false);

 const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
 const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

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
   if (displayTimer === true) {
    clearInterval(interval);
    startTimer();
   } else {
    console.log('the timer is not loaded');
   }
  }, 1000);
 }, [seconds]);

 return (
  <div className="countdown">
   {displayTimer ? <div>{timerMinutes}:{timerSeconds}</div> : <div>Once you lock in your scheule the timer will start</div>}
   {displayMessage && <div>Break Time! Work on next task in</div>}
  </div>
 );
};

export default Countdown;
