import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';

const HeaderCmp = () => <StyledHeader>My header</StyledHeader>;

const StyledHeader = styled(Layout.Header)`
  background: #7dbcea;
  color: #fff;
  text-align: center;
  font-weight: bold;
`;

export default HeaderCmp;
