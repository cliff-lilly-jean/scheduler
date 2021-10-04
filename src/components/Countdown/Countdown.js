import React, { useState, useEffect } from 'react';

const Countdown = () => {

 const [countdown, setCountdown] = useState('');


 const startingMinutes = 25;
 let time = startingMinutes * 60;

 const minutes = Math.floor(time / 60);
 let seconds = time % 60;

 let timer = `${minutes}: ${seconds}`;



 const updateCountdown = () => {
  timer--;
 };

 setInterval(updateCountdown, 1000);



 return (
  <div className="countdown">

   {timer}
   &nbsp;
  </div>
 );
};

export default Countdown;
