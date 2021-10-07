import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@mui/material';

const Countdown = ({ countdownTime }) => {

 const Countdown = (props) => {

  const { sec, timerStart } = useTimer(seconds, startTimer);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;



  let resetTimer = () => {
   setSeconds(0);
   setMinutes(25);
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
