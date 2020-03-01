import React, { useState } from 'react';
import TimerView from './TimerView';

const TimerContainer = () => {
  const [timerList, setTimerList] = useState({});

  const addTimer = () => {
    const newTimer = {
      id: Date.now(),
      name: Date.now(),
      isActive: false,
      time: 0
    };

    setTimerList(prevList => ({ ...prevList, [newTimer.id]: newTimer }));
  };

  const updateTimer = id => time => {
    setTimerList(prevList => ({
      ...prevList,
      [id]: {
        ...prevList[id],
        time: prevList[id].time + time
      }
    }));
  };

  const toggleStart = id => {
    setTimerList({
      ...timerList,
      [id]: {
        ...timerList[id],
        isActive: !timerList[id].isActive
      }
    });
  };

  const reset = id => {
    setTimerList({
      ...timerList,
      [id]: {
        ...timerList[id],
        time: 0,
        isActive: false
      }
    });
  };

  return (
    <div>
      <button onClick={addTimer}>ADD TIMER</button>
      {Object.values(timerList).map(timer => (
        <TimerView
          key={timer.id}
          toggleStart={toggleStart}
          updateTimer={updateTimer}
          reset={reset}
          {...timer}
        />
      ))}
    </div>
  );
};

export default TimerContainer;
