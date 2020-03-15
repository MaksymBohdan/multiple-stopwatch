import React from 'react';
import { usePreciseTimer } from '../../hooks/usePresiceTime';
import Button from '../../components/Button';
import styled from 'styled-components';

const Timer = ({
  name,
  time,
  onToggle,
  onReset,
  disabled,
  isActive,
  updateTimer,
  id
}) => {
  usePreciseTimer(updateTimer(id), 1000, isActive);

  return (
    <TimerContainer>
      <Label>
        {name}: {parseInt(time)}
      </Label>
      <ButtonContainer>
        <Button onClick={() => onToggle(id)}>
          {isActive ? 'Pause' : 'Start'}
        </Button>
        <Button type="danger" onClick={() => onReset(id)} disabled={disabled}>
          Reset
        </Button>
      </ButtonContainer>
    </TimerContainer>
  );
};

const TimerContainer = styled.div`
  background: #7dbcea;
  color: #fff;
  width: 300px;
  padding: 10px;
  margin: 5px;
  border-radius: 10px;
  text-align: center;
`;

const Label = styled.p`
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-around;
  margin: auto;
`;

export default Timer;
