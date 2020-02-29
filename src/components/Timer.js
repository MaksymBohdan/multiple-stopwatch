import React from 'react';

const Timer = ({ timer, toggle }) => {
  return (
    <>
      <h1>{parseInt(timer.timeAll)}</h1>
      <button onClick={() => toggle(timer.name)}>
        {timer.isActive ? 'Pause' : 'Start'}
      </button>
    </>
  );
};

export default Timer;
