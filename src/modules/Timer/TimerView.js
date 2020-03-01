import React from 'react';
import { usePreciseTimer } from '../../hooks/usePresiceTime';

const TimerView = ({
  time,
  isActive,
  name,
  id,
  toggleStart,
  updateTimer,
  reset
}) => {
  usePreciseTimer(updateTimer(id), 1000, isActive);

  return (
    <>
      <h1>{parseInt(time)}</h1>
      <button onClick={() => toggleStart(id)}>
        {isActive ? 'Pause' : 'Start'}
      </button>

      <button onClick={() => reset(id)} disabled={!isActive && !time}>
        Reset
      </button>
    </>
  );
};

export default TimerView;
