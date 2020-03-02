import React from 'react';
import { Button } from 'antd';

const ButtonCmp = ({ children, onClick, type, disabled }) => (
  <Button type={type || 'primary'} onClick={onClick} disabled={disabled}>
    {children}
  </Button>
);

export default ButtonCmp;
