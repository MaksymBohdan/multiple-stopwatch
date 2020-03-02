import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';

const FooterCmp = () => <StyledFooter>My footer</StyledFooter>;

const StyledFooter = styled(Layout.Footer)`
  background: #7dbcea;
  color: #fff;
  text-align: center;
  font-weight: bold;
`;

export default FooterCmp;
