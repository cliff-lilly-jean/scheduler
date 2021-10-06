import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@mui/material';


const Countdown = (props) => {

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

 // useEffect(() => {

 // }, [seconds]);

 let runTimer = () => {
  let interval = setInterval(() => {
   startTimer();
   clearInterval(interval);
  }, 1000);
 };

 return (
  <div className="countdown">
   {displayTimer ? <Button className='button' type='submit' variant="contained" onClick={props.timerStart} style={{ marginTop: '30px' }}>Lock in schedule</Button> : <Button className='button' type='submit' variant="contained" onClick={props.timerStart} style={{ marginTop: '30px' }}>Pause</Button>}
   <div>{timerMinutes}:{timerSeconds}</div>
   {displayMessage && <div>Break Time! Work on next task in</div>}
  </div>
 );
};

export default Countdown;
