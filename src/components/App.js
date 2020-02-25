import React, { useState } from 'react';

const App = () => {
  const [startTime, setStartTime] = useState(0);
  const [timeToShow, setTimeToShow] = useState(0);

  /*
   ** object with :
   ** 1.name;
   ** 2.id
   ** 3:time start
   ** 4.isActive
   ** 5.pauseTime
   **
   */

  const startTimer = (aaa) => {
    setStartTime(Date.now());

    setInterval(() => countTime(aaa), 1000);
  };

  const countTime = aa => {
    const currentTime = Date.now();
    console.log(aa);
    console.log(startTime);
    // setTimeToShow(currentTime - startTime);
  };

  const adjustTime = time => {
    let min = Math.floor((time / 1000 / 60) % 60);
    let sec = Math.floor((time / 1000) % 60);
    let msc = Math.floor((time / 100) % 10);
    let minT = min < 10 ? `0${min}` : min;
    let secT = sec < 10 ? `0${sec}` : sec;
    let mscT = msc < 10 ? `0${msc}` : msc;

    return `${minT}:${secT}.${mscT}`;
  };

  return (
    <>
      <p>{timeToShow} </p>

      <button onClick={() => startTimer(startTime)}>start</button>
      <br />
      <button>stop</button>
      <br />
    </>
  );
};

export default App;
