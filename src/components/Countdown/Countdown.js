import React, { useState } from 'react';

const Countdown = () => {

 const [countdown, setCountdown] = useState('');

 const startingMinutes = 25;
 let time = startingMinutes * 60;

 const minutes = Math.floor(time / 60);
 let seconds = time % 60;



 const updateCountdown = () => {
  let timer = `${minutes}: ${seconds}`;
  time--;
 };

 setInterval(updateCountdown, 1000);

 return (
  <div className="countdown">
   This is the countdown&nbsp;
   {minutes}: {'0' ? '00' : { seconds }}
   &nbsp;
  </div>
 );
};

export default Countdown;
