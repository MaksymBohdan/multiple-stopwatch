import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';

import TimerView from './TimerView';

const TimerContainer = () => {
  const [timerList, setTimerList] = useState({});
  const [inputValue, setInputValue] = useState('');

  const addTimer = () => {
    const newTimer = {
      id: Date.now(),
      name: inputValue || Date.now(),
      isActive: false,
      time: 0
    };

    setTimerList(prevList => ({ ...prevList, [newTimer.id]: newTimer }));
    setInputValue('');
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

  const onInputChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <StyledContent>
      <TimerView
        timerList={timerList}
        addTimer={addTimer}
        updateTimer={updateTimer}
        toggleStart={toggleStart}
        reset={reset}
        onInputChange={onInputChange}
        inputValue={inputValue}
      />
    </StyledContent>
  );
};

const StyledContent = styled(Layout.Content)`
  padding: 10px;
`;

export default TimerContainer;
