import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Timer from './Timer';

const TimerView = ({
  timerList,
  addTimer,
  toggleStart,
  updateTimer,
  reset,
  onInputChange,
  inputValue
}) => {
  return (
    <>
      <StyledRow>
        <StyledColumn span={8}>
          <Input onChange={onInputChange} value={inputValue} />
          <Button onClick={addTimer}>ADD TIMER</Button>
        </StyledColumn>
      </StyledRow>
      <StyledRow>
        <ul>
          {Object.values(timerList).map(
            ({ name, time, id, isActive }) =>
              console.log(id) || (
                <li key={id}>
                  <Timer
                    id={id}
                    name={name}
                    time={time}
                    isActive={isActive}
                    onToggle={toggleStart}
                    onReset={reset}
                    disabled={!isActive && !time}
                    updateTimer={updateTimer}
                  />
                </li>
              )
          )}
        </ul>
      </StyledRow>
    </>
  );
};

const StyledColumn = styled(Col)`
  display: flex;
  justify-content: space-around;
`;

const StyledRow = styled(Row)`
  display: flex;
  justify-content: center;
`;

export default TimerView;
