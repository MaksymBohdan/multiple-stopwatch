import React, { useState } from 'react';
import { usePreciseTimer } from './usePresiceTime';
import Timer from './Timer';

export default function App() {
  const [timer, setTimer] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const updateTimer = time => {
    setTimer(updatedTimerlist =>
      updatedTimerlist.map(el =>
        el.isActive ? { ...el, timeAll: el.timeAll + time } : el
      )
    );
  };

  usePreciseTimer(updateTimer, 1000, isActive);

  const toggle = name => {
    const newTimerList = timer.map(el =>
      el.name === name ? { ...el, isActive: !el.isActive } : el
    );
    setTimer(newTimerList);

    isTimeCount(newTimerList);
  };

  const isTimeCount = list => {
    const isAnyActive = list.some(el => el.isActive);
    setIsActive(isAnyActive);
  };

  const addTimer = () => {
    const newTimer = {
      name: Date.now(),
      isActive: false,
      timeAll: 0
    };

    setTimer(prev => [newTimer, ...prev]);
  };

  return (
    <>
      <button onClick={addTimer}>ADD TIMER</button>
      <ul>
        {timer.map(el => (
          <li key={el.name}>
            <Timer timer={el} toggle={toggle} />
          </li>
        ))}
      </ul>
    </>
  );
}
