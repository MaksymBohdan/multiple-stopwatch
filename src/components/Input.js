import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';

const InputCmp = ({ value, onChange }) => (
  <StyledInput
    placeholder="Enter timer label"
    value={value}
    onChange={onChange}
  />
);

const StyledInput = styled(Input)`
  width: 300px;
`;

export default InputCmp;
