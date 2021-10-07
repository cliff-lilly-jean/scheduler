import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import useTimer from '../../hooks/useTimer';

const Countdown = ({ countdownTime }) => {


 const { sec, timerStart } = useTimer(seconds, startTimer);

 const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
 const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;



 let resetTimer = () => {
  setSeconds(0);
  setMinutes(25);
 };


 return (
  <div className="countdown">
   <Button>Click</Button>
   <div>{timerMinutes}:{timerSeconds}</div>
   {displayMessage && <div>Break Time! Work on next task in</div>}
  </div>
 );
};

export default Countdown;
